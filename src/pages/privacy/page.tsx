
import Layout from '../../components/feature/Layout';

export default function PrivacyPage() {
  return (
    <Layout>
      <div className="bg-white">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-xl text-primary-100">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Townspace ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
              </p>
            </section>

            {/* Information We Collect */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Personal Information</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>Register for an account or request information about our services</li>
                <li>Fill out forms on our website</li>
                <li>Contact us via phone, email, or contact forms</li>
                <li>Subscribe to our newsletter or marketing communications</li>
                <li>Participate in surveys, contests, or promotions</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Automatically Collected Information</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                When you visit our website, we may automatically collect certain information about your device and usage patterns, including:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>IP address and location data</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website addresses</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            {/* How We Use Information */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use the information we collect for various purposes, including:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>Providing and maintaining our services</li>
                <li>Processing transactions and managing accounts</li>
                <li>Communicating with you about our services</li>
                <li>Sending marketing and promotional materials (with your consent)</li>
                <li>Improving our website and services</li>
                <li>Analyzing usage patterns and trends</li>
                <li>Complying with legal obligations</li>
                <li>Protecting against fraud and security threats</li>
              </ul>
            </section>

            {/* Information Sharing */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Information Sharing and Disclosure</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>Service providers who assist us in operating our website and conducting business</li>
                <li>Legal requirements or to protect our rights and safety</li>
                <li>Business transfers, such as mergers or acquisitions</li>
                <li>With your explicit consent</li>
              </ul>
            </section>

            {/* Data Security */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Security</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
              </p>
            </section>

            {/* Cookies and Tracking */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Cookies and Tracking Technologies</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookie settings through your browser preferences. Disabling cookies may affect the functionality of our website.
              </p>
            </section>

            {/* Your Rights */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Your Privacy Rights</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Depending on your location, you may have certain rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>Right to access your personal information</li>
                <li>Right to correct inaccurate information</li>
                <li>Right to delete your personal information</li>
                <li>Right to restrict processing</li>
                <li>Right to data portability</li>
                <li>Right to opt-out of marketing communications</li>
              </ul>
            </section>

            {/* International Transfers */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. International Data Transfers</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your information in accordance with applicable privacy laws.
              </p>
            </section>

            {/* Children's Privacy */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Children's Privacy</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information.
              </p>
            </section>

            {/* Changes to Policy */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Changes to This Privacy Policy</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. Your continued use of our services after any modifications constitutes acceptance of the updated Privacy Policy.
              </p>
            </section>

            {/* Contact Information */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact Information</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                If you have any questions about this Privacy Policy or our privacy practices, please contact us:
              </p>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Townspace Privacy Officer</h3>
                
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
                      href="mailto:privacy@townspace.net"
                      className="flex items-center text-primary-600 hover:text-primary-700 transition-colors duration-200"
                    >
                      <div className="w-5 h-5 flex items-center justify-center mr-2">
                        <i className="ri-mail-line"></i>
                      </div>
                      privacy@townspace.net
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

            {/* Jurisdiction-Specific Information */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Jurisdiction-Specific Information</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">For California Residents (CCPA)</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                California residents have additional rights under the California Consumer Privacy Act (CCPA), including the right to know what personal information is collected, the right to delete personal information, and the right to opt-out of the sale of personal information.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">For Canadian Residents (PIPEDA)</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Canadian residents have rights under the Personal Information Protection and Electronic Documents Act (PIPEDA). We comply with Canadian privacy laws and provide appropriate protections for personal information of Canadian residents.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">For European Residents (GDPR)</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you are located in the European Economic Area, you have additional rights under the General Data Protection Regulation (GDPR), including the right to access, rectify, erase, restrict processing, and data portability.
              </p>
            </section>

          </div>
        </div>
      </div>
    </Layout>
  );
}
