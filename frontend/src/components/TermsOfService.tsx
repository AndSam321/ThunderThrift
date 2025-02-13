import React from "react";

const TermsOfService = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Terms of Service for Thunder Thrift
          </h1>

          {/* Acceptance of Terms */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              1. Acceptance of Terms
            </h2>
            <div className="prose text-gray-600">
              <p>
                By using the Thunder Thrift platform, you agree to abide by
                these Terms of Service and all related guidelines. If you do not
                agree to these terms, you are not authorized to use the platform
                and will be banned.
              </p>
            </div>
          </section>

          {/* Appropriate Listings */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              2. Appropriate Listings
            </h2>
            <div className="prose text-gray-600">
              <p>
                <b>All </b>listings on Thunder Thrift must adhere to the
                following rules:
              </p>
              <ul className="list-disc pl-6">
                <li>
                  All items listed must be{" "}
                  <b>
                    legal, safe, and appropriate for all Simpson College
                    students.
                  </b>
                </li>
                <li>
                  Prohibited items include but are not limited to: illegal
                  substances, alcohol, firearms, weapons, counterfeit goods, and
                  any items that violate Simpson College policies or the law.
                </li>
                <li>
                  Listing of items in inappropriate or offensive categories
                  (e.g., adult content, hate speech, discrimination, etc.) is
                  strictly prohibited and will result in an immediate ban.
                </li>
                <li>
                  As a Simpson College student, you must follow all applicable
                  college rules and regulations when listing items for sale or
                  trade.
                </li>
              </ul>
            </div>
          </section>

          {/* Purchases and Transactions */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              3. Purchases and Transactions
            </h2>
            <div className="prose text-gray-600">
              <p>By purchasing an item through Thunder Thrift, you agree to:</p>
              <ul className="list-disc pl-6">
                <li>
                  Pay for the item at the agreed-upon price and in a timely
                  manner.
                </li>
                <li>
                  Communicate respectfully and promptly with the seller
                  regarding any questions or concerns.
                </li>
                <li>
                  Verify the condition of the item at the time of purchase.
                </li>
                <li>
                  Accept that Thunder Thrift is not responsible for the quality
                  or condition of the items bought and sold, and users must rely
                  on their own judgment and discretion when making transactions.
                </li>
              </ul>
            </div>
          </section>

          {/* Meetups */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              4. Meetups and Exchanges on Campus
            </h2>
            <div className="prose text-gray-600">
              <p>
                All meetups and item exchanges should occur in public, safe
                locations on Simpson College's campus. When arranging meetups:
              </p>
              <ul className="list-disc pl-6">
                <li>
                  Meet in well-populated areas such as the Kent Campus Center,
                  common areas, or other public student areas during the day or
                  early evening.
                </li>
                <li>
                  Do not engage in exchanges in isolated or unsafe locations.
                </li>
                <li>
                  Always prioritize your personal safety when meeting other
                  users. Thunder Thrift is not responsible for any issues that
                  arise during meetups or exchanges.
                </li>
                <li>
                  It is recommended that you inform a friend or family member of
                  your meetup details for safety purposes.
                </li>
              </ul>
            </div>
          </section>

          {/* Violations and Account Suspension */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              5. Violations and Account Suspension
            </h2>
            <div className="prose text-gray-600">
              <p>
                Any user found to be in violation of these Terms of Service may
                face consequences, including:
              </p>
              <ul className="list-disc pl-6">
                <li>
                  Temporary or permanent suspension of their Thunder Thrift
                  account.
                </li>
                <li>
                  Removal of listings that violate the platform's policies.
                </li>
                <li>
                  Being banned from further use of the platform at the sole
                  discretion of Thunder Thrift moderator and admin.
                </li>
                <li>
                  Actions that may be taken include actions deemed necessary for
                  the safety and integrity of the platform and its users.
                </li>
              </ul>
              <p>
                Thunder Thrift reserves the right to moderate and remove content
                or ban users at its discretion, especially in cases where rules
                are violated, or where there is risk of harm to others.
              </p>
            </div>
          </section>

          {/* Contact and Disputes */}
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              6. Contact and Disputes
            </h2>
            <div className="bg-gray-50 rounded-lg p-6 flex items-center justify-between">
              <p className="text-gray-600">
                Questions or disputes regarding the Terms of Service?
              </p>
              <a
                href="mailto:andrew.samountry@my.simpson.edu"
                className="inline-flex items-center text-blue-600 hover:text-blue-500"
              >
                <svg
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Contact Us
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
