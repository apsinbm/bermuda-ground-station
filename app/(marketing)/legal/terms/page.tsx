import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Scale, Mail, Phone } from 'lucide-react';
import { generateSEO } from '@/lib/seo';

export const metadata = generateSEO({
  title: 'Terms of Service - Website and Service Terms',
  description: 'Terms and conditions governing the use of our website and ground station hosting services, including Bermuda-specific legal provisions.',
  noIndex: true,
});


export default function TermsPage() {
  return (
    <>
      
      <div className="bg-gradient-to-b from-muted/50 to-background">
        <div className="mx-auto max-w-4xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="text-center">
            <Badge variant="outline" className="mb-4">
              <Scale className="mr-1 h-3 w-3" />
              Legal Terms
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Terms of Service
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Last updated: January 15, 2024
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="prose prose-gray max-w-none">
          
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Agreement to Terms</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                These terms cover website use and general business practices. Specific service agreements 
                are handled separately with appropriate terms tailored to your project requirements.
              </p>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold tracking-tight mb-4">1. Website Use</h2>
              
              <h3 className="text-xl font-semibold mb-3">Permitted Use</h3>
              <p className="mb-4">You may use our website for:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Learning about our ground station hosting services</li>
                <li>Requesting information and proposals</li>
                <li>Contacting our team for business inquiries</li>
                <li>Accessing technical resources and documentation</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Reasonable Use</h3>
              <p className="mb-4">We ask that you use our website professionally and avoid:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Automated data collection or content scraping</li>
                <li>Attempting unauthorized system access</li>
                <li>Submitting inaccurate technical information</li>
                <li>Interfering with normal website operation</li>
                <li>Activities that violate applicable laws</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight mb-4">2. Ground Station Services</h2>
              
              <h3 className="text-xl font-semibold mb-3">Service Agreements</h3>
              <p className="mb-6">
                Ground station services are provided under individual service agreements with 
                project-specific terms, SLAs, and technical requirements. This ensures each 
                client receives appropriate terms for their unique operational needs.
              </p>

              <h3 className="text-xl font-semibold mb-3">Regulatory Environment</h3>
              <p className="mb-4">Our services operate within established frameworks including:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Bermuda Regulatory Authority licensing (efficient approval process)</li>
                <li>ITU coordination (standard telecommunications practice)</li>
                <li>Regional spectrum management (coordinated coverage planning)</li>
                <li>Local compliance (established operational procedures)</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Partnership Approach</h3>
              <p className="mb-4">We work collaboratively with clients on:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Technical specification development and optimization</li>
                <li>Equipment certification support and guidance</li>
                <li>Regulatory compliance assistance and coordination</li>
                <li>Flexible payment terms and project scheduling</li>
                <li>Ongoing operational support and consultation</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight mb-4">3. Intellectual Property</h2>
              
              <h3 className="text-xl font-semibold mb-3">Our Content</h3>
              <p className="mb-6">
                All website content, including text, graphics, logos, and technical documentation, 
                is owned by us or our licensors. Content is protected by copyright, trademark, 
                and other intellectual property laws.
              </p>

              <h3 className="text-xl font-semibold mb-3">Your Content</h3>
              <p className="mb-6">
                By submitting information through our website (contact forms, proposals), you grant 
                us a limited license to use this information for business purposes, including 
                proposal preparation and regulatory filings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight mb-4">4. Privacy and Data Protection</h2>
              <p className="mb-6">
                Your privacy is important to us. Please review our Privacy Policy, which explains 
                how we collect, use, and protect your personal information. By using our services, 
                you consent to the collection and use of information as described in our Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight mb-4">5. Service Information</h2>
              
              <h3 className="text-xl font-semibold mb-3">Website Information</h3>
              <p className="mb-6">
                Our website provides general service information and capabilities. Specific technical 
                requirements and availability are confirmed through formal proposals and service agreements.
              </p>

              <h3 className="text-xl font-semibold mb-3">Technical Specifications</h3>
              <p className="mb-6">
                Website content serves as general guidance for our capabilities. Detailed technical 
                specifications, pricing, and service availability are provided in individual proposals 
                tailored to your specific project requirements.
              </p>

              <h3 className="text-xl font-semibold mb-3">Reasonable Limitations</h3>
              <p className="mb-6">
                As with standard business practice, liability for website information is limited to 
                direct damages under Bermuda law. Service-specific liability terms are addressed 
                in individual contracts.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight mb-4">6. Force Majeure</h2>
              <p className="mb-6">
                We are not liable for delays or failures due to circumstances beyond our reasonable 
                control, including natural disasters, regulatory changes, labor disputes, or 
                telecommunications infrastructure failures.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight mb-4">7. Governing Law</h2>
              <p className="mb-4">These Terms operate under Bermuda's business-friendly legal framework:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Bermuda Companies Act (established corporate governance)</li>
                <li>Electronic Transactions Act (digital business recognition)</li>
                <li>Personal Information Protection Act (PIPA compliance)</li>
                <li>Telecommunications Act (industry-specific guidance)</li>
              </ul>
              <p className="mb-6">
                We prefer resolving any issues through direct business discussion, with Bermuda 
                jurisdiction available as needed.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight mb-4">8. Regulatory Support</h2>
              
              <h3 className="text-xl font-semibold mb-3">Licensing Assistance</h3>
              <p className="mb-6">
                We provide experienced regulatory support and consultation, leveraging our established 
                relationships with licensing authorities to facilitate efficient approval processes.
              </p>

              <h3 className="text-xl font-semibold mb-3">Spectrum Coordination</h3>
              <p className="mb-6">
                Our team manages international spectrum coordination through established ITU processes, 
                working with multiple administrations to achieve optimal technical parameters and 
                operational flexibility.
              </p>

              <h3 className="text-xl font-semibold mb-3">Ongoing Support</h3>
              <p className="mb-6">
                We provide continuous regulatory compliance support throughout service periods, 
                helping clients maintain operational authorization and adapt to regulatory changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight mb-4">9. Contact and Dispute Resolution</h2>
              <p className="mb-6">
                We encourage resolving disputes through direct communication. For formal disputes, 
                we support mediation and arbitration as alternatives to litigation, conducted 
                under Bermuda International Conciliation and Arbitration Act rules.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight mb-4">10. Terms Updates</h2>
              <p className="mb-6">
                We may update these Terms periodically. Changes will be posted on our website 
                with an updated &quot;Last updated&quot; date. Continued website use after changes 
                constitutes acceptance of updated Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight mb-4">11. Severability</h2>
              <p className="mb-6">
                If any provision of these Terms is deemed invalid or unenforceable, the remaining 
                provisions shall continue in full force and effect.
              </p>
            </section>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mail className="mr-2 h-5 w-5" />
                  Questions About These Terms
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  For questions about these Terms of Service, please contact us:
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Mail className="mr-2 h-4 w-4" />
                    <span>legal@atlanticground.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="mr-2 h-4 w-4" />
                    <span>+1 (441) 705-1547</span>
                  </div>
                  <div>
                    <strong>Business Address:</strong><br />
                    Atlantic Ground Station Hosting<br />
                    Legal Department<br />
                    Hamilton, Bermuda
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}