from django.conf import settings
from django.http import JsonResponse
from django.shortcuts import redirect
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import AllowAny
import msal
import requests
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth.models import User

class MicrosoftAuthView(APIView):
    permission_classes = [AllowAny]
    def get(self, request):
        print("Starting Auth Process")
        msal_app = msal.ConfidentialClientApplication(
            settings.MICROSOFT_AUTH_CLIENT_ID,
            authority=f"https://login.microsoftonline.com/{settings.MICROSOFT_AUTH_TENANT_ID}",
            client_credential=settings.MICROSOFT_AUTH_CLIENT_SECRET,
        )
        
        # Azure Scope
        auth_url = msal_app.get_authorization_request_url(
            scopes=["https://graph.microsoft.com/User.Read"],
            redirect_uri=settings.MICROSOFT_AUTH_CALLBACK_URL + "/",
            state=request.session.get("state", ""),
        )
        print(f"Generated Auth URL: {auth_url}")
        return Response({"auth_url": auth_url})

class MicrosoftCallbackView(APIView):
    permission_classes = [AllowAny]
    def get(self, request):
        print("Callback received with params:", request.query_params)
        # Check for errors in the callback
        if "error" in request.query_params:
            return Response(
                {"error": request.query_params["error_description"]},
                status=status.HTTP_400_BAD_REQUEST,
            )
        
        # Check for Auth code

        if "code" not in request.query_params:
            return Response(
                {"error": "No authorization code provided"},
                status=status.HTTP_400_BAD_REQUEST,
            )

        msal_app = msal.ConfidentialClientApplication(
            settings.MICROSOFT_AUTH_CLIENT_ID,
            authority=f"https://login.microsoftonline.com/{settings.MICROSOFT_AUTH_TENANT_ID}",
            client_credential=settings.MICROSOFT_AUTH_CLIENT_SECRET,
        )

        token_response = msal_app.acquire_token_by_authorization_code(
            request.query_params["code"],
            scopes=["https://graph.microsoft.com/User.Read"],
            redirect_uri=settings.MICROSOFT_AUTH_CALLBACK_URL + "/",
        )

        if "error" in token_response:
            return Response(
                {"error": token_response.get("error_description", "Unknown error")},
                status=status.HTTP_400_BAD_REQUEST,
            )

        # Get user info from Microsoft Graph
        graph_data = requests.get(
            "https://graph.microsoft.com/v1.0/me",
            headers={"Authorization": f"Bearer {token_response['access_token']}"},
        ).json()

        print("Graph API response:", graph_data)

        # Check if Simpson College Email
        email = graph_data.get("mail", "").lower()
        if not email.endswith("@my.simpson.edu"):
            return Response(
                {"error": "You must have a Simpson College student email to continue."},
                status=status.HTTP_403_FORBIDDEN,
            )

        # User Creation
        user, created = User.objects.get_or_create(
            email=email,
            defaults={
                "username": email.split("@")[0],
                "first_name": graph_data.get("givenName", ""),
                "last_name": graph_data.get("surname", ""),
            },
        )

        # JWT token
        refresh = RefreshToken.for_user(user)
        
        # Redirect to frontend with token
        frontend_url = settings.FRONTEND_URL
        return redirect(
            f"{frontend_url}/auth/callback?"
            f"access_token={str(refresh.access_token)}&"
            f"refresh_token={str(refresh)}"
        )