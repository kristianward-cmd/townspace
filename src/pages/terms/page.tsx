
import Layout from '../../components/feature/Layout';

export default function TermsPage() {
  return (
    <Layout>
      <div className="bg-white">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
            <p className="text-xl text-primary-100">
              Please read these terms carefully before using our services.
            </p>
            <p className="text-sm text-primary-200 mt-4">
              Last updated: December 2024
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="prose prose-lg max-w-none">
            
            {/* Introduction */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Agreement to Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                These Terms of Service ("Terms") constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Townspace ("Company," "we," "us," or "our"), concerning your access to and use of our website and services.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                By accessing our website or using our services, you agree that you have read, understood, and agree to be bound by all of these Terms. If you do not agree with all of these Terms, then you are expressly prohibited from using our services and you must discontinue use immediately.
              </p>
            </section>

            {/* Services Description */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Services</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Townspace provides website rental services for local businesses, including:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>Custom website design and development</li>
                <li>Website hosting and maintenance</li>
                <li>Search engine optimization (SEO)</li>
                <li>Performance monitoring and improvements</li>
                <li>Technical support and updates</li>
                <li>Analytics and reporting services</li>
              </ul>
            </section>

            {/* User Accounts */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Accounts</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                When you create an account with us, you must provide information that is accurate, complete, and current at all times. You are responsible for safeguarding the password and for all activities that occur under your account.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                You agree not to disclose your password to any third party and to take sole responsibility for activities and actions under your password, whether or not you have authorized such activities or actions.
              </p>
            </section>

            {/* Payment Terms */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Payment Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our services are provided on a subscription basis with monthly billing cycles. Payment terms include:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>Monthly subscription fee of $299 USD (or equivalent in local currency)</li>
                <li>Payments are due in advance on a monthly basis</li>
                <li>All fees are non-refundable except as required by law</li>
                <li>We reserve the right to change our pricing with 30 days notice</li>
                <li>Late payments may result in service suspension</li>
                <li>All prices are exclusive of applicable taxes</li>
              </ul>
            </section>

            {/* Acceptable Use */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Acceptable Use Policy</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You agree not to use our services for any unlawful or prohibited activities, including but not limited to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>Violating any applicable laws or regulations</li>
                <li>Infringing on intellectual property rights</li>
                <li>Distributing malware or harmful code</li>
                <li>Engaging in fraudulent or deceptive practices</li>
                <li>Harassing or threatening others</li>
                <li>Spamming or sending unsolicited communications</li>
                <li>Attempting to gain unauthorized access to our systems</li>
              </ul>
            </section>

            {/* Intellectual Property */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Intellectual Property Rights</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The service and its original content, features, and functionality are and will remain the exclusive property of Townspace and its licensors. The service is protected by copyright, trademark, and other laws.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                You retain ownership of content you provide to us, but grant us a license to use, modify, and display such content as necessary to provide our services.
              </p>
            </section>

            {/* Service Availability */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Service Availability</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We strive to maintain high service availability but cannot guarantee uninterrupted access. We may temporarily suspend service for maintenance, updates, or due to circumstances beyond our control.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                We are not liable for any losses resulting from service interruptions, provided we make reasonable efforts to restore service promptly.
              </p>
            </section>

            {/* Termination */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Termination</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Either party may terminate this agreement with 30 days written notice. We may terminate your account immediately if you violate these Terms or engage in prohibited activities.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Upon termination, your right to use our services will cease immediately, and we may delete your account and data after a reasonable transition period.
              </p>
            </section>

            {/* Disclaimers */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Disclaimers</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our services are provided "as is" and "as available" without warranties of any kind, either express or implied. We disclaim all warranties, including but not limited to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>Merchantability and fitness for a particular purpose</li>
                <li>Non-infringement of third-party rights</li>
                <li>Accuracy, reliability, or completeness of content</li>
                <li>Uninterrupted or error-free operation</li>
              </ul>
            </section>

            {/* Limitation of Liability */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                To the maximum extent permitted by law, Townspace shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or business opportunities.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our total liability for any claims arising from these Terms or our services shall not exceed the amount you paid us in the 12 months preceding the claim.
              </p>
            </section>

            {/* Indemnification */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Indemnification</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You agree to indemnify and hold harmless Townspace and its officers, directors, employees, and agents from any claims, damages, losses, or expenses arising from your use of our services or violation of these Terms.
              </p>
            </section>

            {/* Governing Law */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Governing Law and Jurisdiction</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                These Terms shall be governed by and construed in accordance with the laws of the jurisdiction where our primary business operations are conducted, without regard to conflict of law principles.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Any disputes arising from these Terms shall be resolved through binding arbitration or in the courts of competent jurisdiction in our primary business location.
              </p>
            </section>

            {/* Changes to Terms */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Changes to Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We reserve the right to modify these Terms at any time. We will provide notice of material changes by posting the updated Terms on our website and updating the "Last updated" date.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Your continued use of our services after any modifications constitutes acceptance of the updated Terms.
              </p>
            </section>

            {/* Severability */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Severability</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If any provision of these Terms is held to be invalid or unenforceable, the remaining provisions shall remain in full force and effect, and the invalid provision shall be replaced with a valid provision that most closely reflects the original intent.
              </p>
            </section>

            {/* Contact Information */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">15. Contact Information</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Townspace Legal Department</h3>
                
                <div className="grid md:grid-cols-3 gap-6">
                  {/* New York Office */}
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">United States Office</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      350 Fifth Avenue, Suite 7600<br />
                      New York, NY 10118<br />
                      United States
                    </p>
                  </div>
                  
                  {/* Los Angeles Office */}
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">West Coast Office</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      1999 Avenue of the Stars, Suite 1100<br />
                      Los Angeles, CA 90067<br />
                      United States
                    </p>
                  </div>
                  
                  {/* Toronto Office */}
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Canada Office</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      181 Bay Street, Suite 2550<br />
                      Toronto, ON M5J 2T3<br />
                      Canada
                    </p>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-2 sm:space-y-0">
                    <a
                      href="mailto:legal@townspace.net"
                      className="flex items-center text-primary-600 hover:text-primary-700 transition-colors duration-200"
                    >
                      <div className="w-5 h-5 flex items-center justify-center mr-2">
                        <i className="ri-mail-line"></i>
                      </div>
                      legal@townspace.net
                    </a>
                    <a
                      href="tel:+1-555-TOWNSPACE"
                      className="flex items-center text-primary-600 hover:text-primary-700 transition-colors duration-200"
                    >
                      <div className="w-5 h-5 flex items-center justify-center mr-2">
                        <i className="ri-phone-line"></i>
                      </div>
                      1-555-TOWNSPACE
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* Jurisdiction-Specific Terms */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">16. Jurisdiction-Specific Terms</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">United States</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                For customers in the United States, these Terms are governed by the laws of New York State. Any disputes will be resolved in the state or federal courts located in New York County, New York.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Canada</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                For customers in Canada, these Terms are governed by the laws of Ontario. Any disputes will be resolved in the courts of competent jurisdiction in Toronto, Ontario. Services are provided in compliance with Canadian consumer protection laws.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">International Customers</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                For customers outside the United States and Canada, these Terms are governed by the laws of New York State, and disputes will be resolved through binding arbitration or in New York courts, subject to applicable international treaties and local consumer protection laws.
              </p>
            </section>

          </div>
        </div>
      </div>
    </Layout>
  );
}
