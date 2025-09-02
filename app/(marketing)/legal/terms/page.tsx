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
                These Terms of Service (&quot;Terms&quot;) govern your use of our website and services 
                provided by Bermuda Ground Station Hosting (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). 
                By accessing our website or using our services, you agree to be bound by these Terms.
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

              <h3 className="text-xl font-semibold mb-3">Prohibited Activities</h3>
              <p className="mb-4">You may not:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Use automated systems to scrape or harvest content</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Submit false or misleading information</li>
                <li>Interfere with website operations or security</li>
                <li>Use the website for illegal or harmful purposes</li>
                <li>Infringe on intellectual property rights</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight mb-4">2. Ground Station Services</h2>
              
              <h3 className="text-xl font-semibold mb-3">Service Agreements</h3>
              <p className="mb-6">
                Ground station hosting services are provided under separate service agreements. 
                These Terms apply to general website use and initial communications only. 
                Specific service terms and SLAs are detailed in individual contracts.
              </p>

              <h3 className="text-xl font-semibold mb-3">Regulatory Compliance</h3>
              <p className="mb-4">All services are subject to:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Bermuda Regulatory Authority licensing requirements</li>
                <li>International telecommunications regulations (ITU)</li>
                <li>Spectrum coordination with adjacent territories</li>
                <li>Local zoning and building code compliance</li>
                <li>Environmental and safety regulations</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Client Responsibilities</h3>
              <p className="mb-4">Clients are responsible for:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Providing accurate technical specifications</li>
                <li>Obtaining necessary equipment certifications</li>
                <li>Maintaining operational compliance with license conditions</li>
                <li>Timely payment of fees and charges</li>
                <li>Coordinating with regulatory authorities as required</li>
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
              <h2 className="text-2xl font-bold tracking-tight mb-4">5. Disclaimers and Limitations</h2>
              
              <h3 className="text-xl font-semibold mb-3">Website Availability</h3>
              <p className="mb-6">
                We strive to maintain website availability but cannot guarantee uninterrupted access. 
                We reserve the right to modify, suspend, or discontinue website features without notice.
              </p>

              <h3 className="text-xl font-semibold mb-3">Information Accuracy</h3>
              <p className="mb-6">
                Website information is provided for general guidance only. Technical specifications 
                and availability are subject to change. Formal proposals supersede any 
                website information.
              </p>

              <h3 className="text-xl font-semibold mb-3">Third-Party Services</h3>
              <p className="mb-6">
                Our website may contain links to third-party services or integrate with external 
                platforms. We are not responsible for the content, policies, or practices of 
                third-party providers.
              </p>

              <h3 className="text-xl font-semibold mb-3">Limitation of Liability</h3>
              <p className="mb-6">
                To the fullest extent permitted by Bermuda law, we shall not be liable for any 
                indirect, incidental, special, or consequential damages arising from website use 
                or service inquiries.
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
              <h2 className="text-2xl font-bold tracking-tight mb-4">7. Bermuda Law and Jurisdiction</h2>
              <p className="mb-4">These Terms are governed by the laws of Bermuda, including:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Bermuda Companies Act</li>
                <li>Electronic Transactions Act</li>
                <li>Personal Information Protection Act</li>
                <li>Telecommunications Act</li>
              </ul>
              <p className="mb-6">
                Any disputes shall be subject to the exclusive jurisdiction of Bermuda courts, 
                unless resolved through alternative dispute resolution mechanisms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight mb-4">8. Regulatory Disclaimers</h2>
              
              <h3 className="text-xl font-semibold mb-3">Licensing Support</h3>
              <p className="mb-6">
                We provide regulatory assistance and consultation services but cannot guarantee 
                license approvals. All licensing decisions are made by relevant regulatory authorities.
              </p>

              <h3 className="text-xl font-semibold mb-3">Spectrum Coordination</h3>
              <p className="mb-6">
                International spectrum coordination involves multiple administrations and may 
                experience delays beyond our control. Coordination success depends on technical 
                parameters and international cooperation.
              </p>

              <h3 className="text-xl font-semibold mb-3">Operational Compliance</h3>
              <p className="mb-6">
                Clients remain responsible for ongoing operational compliance with license conditions, 
                technical parameters, and regulatory obligations throughout the service period.
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
                    <span>legal@bermuda-ground-station.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="mr-2 h-4 w-4" />
                    <span>+1 (441) 555-0123</span>
                  </div>
                  <div>
                    <strong>Business Address:</strong><br />
                    Bermuda Ground Station Hosting<br />
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