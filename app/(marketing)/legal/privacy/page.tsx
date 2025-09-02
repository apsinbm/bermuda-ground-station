import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Mail, Phone } from 'lucide-react';
import { generateSEO } from '@/lib/seo';

export const metadata = generateSEO({
  title: 'Privacy Policy - How We Protect Your Information',
  description: 'Our privacy policy outlines how we collect, use, and protect your personal information in accordance with Bermuda and international privacy laws.',
  noIndex: true,
});


export default function PrivacyPage() {
  return (
    <>
      
      <div className="bg-gradient-to-b from-muted/50 to-background">
        <div className="mx-auto max-w-4xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="text-center">
            <Badge variant="outline" className="mb-4">
              <Shield className="mr-1 h-3 w-3" />
              Legal Information
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Privacy Policy
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
              <CardTitle>Privacy Commitment</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                We respect your privacy and handle information in compliance with Bermuda's Personal 
                Information Protection Act (PIPA). This policy outlines our data practices for website 
                visitors and service inquiries in a straightforward, business-focused manner.
              </p>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold tracking-tight mb-4">1. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold mb-3">Personal Information</h3>
              <p className="mb-4">We may collect the following personal information:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Name, title, and contact information (email, phone, address)</li>
                <li>Company name and business information</li>
                <li>Technical requirements and project specifications</li>
                <li>Communication preferences and history</li>
                <li>Payment and billing information (for contracted services)</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Technical Information</h3>
              <p className="mb-4">Our website automatically collects certain technical information:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>IP address and geographic location</li>
                <li>Browser type, version, and operating system</li>
                <li>Pages visited and time spent on our website</li>
                <li>Referral sources and navigation patterns</li>
                <li>Device information and screen resolution</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight mb-4">2. How We Use Your Information</h2>
              <p className="mb-4">We use information for legitimate business purposes:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Service Delivery:</strong> Providing ground station hosting and technical support</li>
                <li><strong>Business Communication:</strong> Responding to inquiries and project coordination</li>
                <li><strong>Proposal Development:</strong> Technical assessments and service planning</li>
                <li><strong>Regulatory Requirements:</strong> PIPA compliance and telecommunications licensing</li>
                <li><strong>Website Analytics:</strong> Understanding usage patterns for service improvement</li>
                <li><strong>Industry Communications:</strong> Occasional relevant updates (opt-out available)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight mb-4">3. Information Sharing</h2>
              <p className="mb-4">We do not sell personal information. Limited sharing occurs for business operations:</p>
              
              <h3 className="text-xl font-semibold mb-3">Service Providers</h3>
              <p className="mb-4">We may engage third-party service providers for:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Website hosting and analytics (Vercel, Plausible)</li>
                <li>Email communications (Resend)</li>
                <li>Payment processing and billing</li>
                <li>Technical support and monitoring services</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Legal Requirements</h3>
              <p className="mb-4">We may disclose information when required by law or to:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Comply with legal processes or government requests</li>
                <li>Protect our rights, property, or safety</li>
                <li>Investigate potential violations of our terms</li>
                <li>Respond to emergency situations</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Regulatory Compliance</h3>
              <p className="mb-6">
                Standard telecommunications industry practice includes coordination with the Bermuda 
                Regulatory Authority and ITU for spectrum management and licensing requirements under PIPA guidelines.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight mb-4">4. Data Security</h2>
              <p className="mb-4">We implement appropriate technical and organizational measures to protect your information:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Encryption of data in transit and at rest</li>
                <li>Access controls and authentication systems</li>
                <li>Regular security audits and vulnerability assessments</li>
                <li>Employee training on data protection practices</li>
                <li>Incident response and breach notification procedures</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight mb-4">5. Data Retention</h2>
              <p className="mb-4">We maintain information per PIPA requirements and industry standards:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Business inquiries:</strong> Standard 2-year retention period</li>
                <li><strong>Client records:</strong> 7-year telecommunications industry requirement</li>
                <li><strong>Technical documentation:</strong> Service period plus reasonable retention</li>
                <li><strong>Website analytics:</strong> 24-month maximum for optimization</li>
                <li><strong>Communications:</strong> Until business relationship concludes</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight mb-4">6. Your Rights</h2>
              <p className="mb-4">Depending on your jurisdiction, you may have the following rights:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Access:</strong> Request copies of your personal information</li>
                <li><strong>Correction:</strong> Update or correct inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Portability:</strong> Receive your data in a structured format</li>
                <li><strong>Restriction:</strong> Limit how we process your information</li>
                <li><strong>Objection:</strong> Object to processing for marketing purposes</li>
              </ul>
              <p className="mb-6">
                To exercise these rights, please contact us using the information provided below.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight mb-4">7. Cookies and Tracking</h2>
              <p className="mb-4">Our website uses minimal tracking technologies:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Essential cookies:</strong> Required for website functionality</li>
                <li><strong>Analytics cookies:</strong> Plausible Analytics (privacy-focused, no personal data)</li>
                <li><strong>Performance monitoring:</strong> Vercel Analytics (aggregated data only)</li>
              </ul>
              <p className="mb-6">
                We do not use advertising cookies or third-party tracking scripts. You can disable 
                cookies in your browser settings, though this may affect website functionality.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight mb-4">8. International Data Transfers</h2>
              <p className="mb-6">
                Your information may be transferred to and processed in countries other than Bermuda, 
                including the United States and European Union. We ensure appropriate safeguards are 
                in place for international transfers, including standard contractual clauses and 
                adequacy decisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight mb-4">9. Children&apos;s Privacy</h2>
              <p className="mb-6">
                Our services are not intended for individuals under 16 years of age. We do not 
                knowingly collect personal information from children. If you believe we have 
                collected information from a child, please contact us immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight mb-4">10. Changes to This Policy</h2>
              <p className="mb-6">
                We may update this Privacy Policy periodically to reflect changes in our practices 
                or legal requirements. We will post the updated policy on our website and update 
                the &quot;Last updated&quot; date. Material changes will be communicated directly to clients 
                and website subscribers.
              </p>
            </section>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  For questions about this Privacy Policy or to exercise your rights, please contact us:
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Mail className="mr-2 h-4 w-4" />
                    <span>privacy@atlanticground.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="mr-2 h-4 w-4" />
                    <span>+1 (441) 705-1547</span>
                  </div>
                  <div>
                    <strong>Mailing Address:</strong><br />
                    Atlantic Ground Station<br />
                    Privacy Officer<br />
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