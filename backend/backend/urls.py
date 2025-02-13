from django.contrib import admin
from django.urls import path, include
from api.views import MicrosoftAuthView, MicrosoftCallbackView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/token/', TokenObtainPairView.as_view(), name="get_token"),
    path('api/token/refresh/', TokenRefreshView.as_view(), name="refresh"),
    path('api-auth/', include("rest_framework.urls")),
    # Microsoft auth endpoints
    path('api/auth/microsoft/', MicrosoftAuthView.as_view(), name='microsoft-login'),
    path('api/auth/callback/', MicrosoftCallbackView.as_view(), name='microsoft-callback'),
]