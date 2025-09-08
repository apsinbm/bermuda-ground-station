import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Scale, Mail } from 'lucide-react';
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
              Last updated: May 15, 2024
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="prose prose-gray max-w-none">
          
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>1. Agreement to Terms</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                By accessing or using this website, you agree to be bound by these Terms of Service and by our Privacy Policy. 
                If you do not agree, please discontinue use.
              </p>
              <p>
                Our website terms apply to general browsing and inquiries. Specific ground station services are governed by 
                separate service agreements, which set out detailed technical, commercial, and regulatory terms for each project.
              </p>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold tracking-tight mb-4">2. Website Use</h2>
              
              <h3 className="text-xl font-semibold mb-3">Permitted Use</h3>
              <p className="mb-4">You may use this website for:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Learning about our services</li>
                <li>Requesting information or proposals</li>
                <li>Contacting our team</li>
                <li>Accessing technical resources</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Prohibited Use</h3>
              <p className="mb-4">You agree not to:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Attempt unauthorized access or interfere with website operations</li>
                <li>Use automated tools to collect data or content</li>
                <li>Submit false, misleading, or incomplete information</li>
                <li>Violate applicable laws in connection with website use</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight mb-4">3. Ground Station Services</h2>
              <p className="mb-6">
                Our ground station services are provided under separate, detailed agreements that cover technical specifications, service levels, and project requirements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight mb-4">4. Intellectual Property</h2>
              <p className="mb-6">
                Website content belongs to us. When you contact us, we can use your information to respond and prepare proposals.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight mb-4">5. Privacy and Data Protection</h2>
              <p className="mb-6">
                Please see our Privacy Policy for details on how we handle your information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight mb-4">6. Service Information and Limitations</h2>
              <p className="mb-6">
                Our website provides general information. Specific services, pricing, and availability are confirmed in individual proposals. We limit our liability as is standard business practice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight mb-4">7. Force Majeure</h2>
              <p className="mb-6">
                We're not responsible for problems caused by events beyond our control (natural disasters, government actions, etc.).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight mb-4">8. Governing Law and Jurisdiction</h2>
              <p className="mb-6">
                These Terms are governed by Bermuda law. We prefer to resolve disputes through discussion, but Bermuda courts have jurisdiction if needed.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight mb-4">9. Changes to These Terms</h2>
              <p className="mb-6">
                We may update these Terms from time to time. We'll post changes here with a new date. Continuing to use the website means you accept any updates.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight mb-4">10. Severability</h2>
              <p className="mb-6">
                If part of these Terms becomes invalid, the rest remains in effect.
              </p>
            </section>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Questions about these terms? Get in touch:
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Mail className="mr-2 h-4 w-4" />
                    <span>info@atlanticground.com</span>
                  </div>
                  <div>
                    <strong>📬 Atlantic Ground Station, Hamilton, Bermuda</strong>
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