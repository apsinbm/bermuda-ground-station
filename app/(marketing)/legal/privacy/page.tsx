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
              Last updated: May 15, 2024
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="prose prose-gray max-w-none">
          
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Our Commitment</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Your trust matters to us. We respect your privacy and follow Bermuda&apos;s Personal Information Protection Act (PIPA). 
                This policy explains in plain language what we collect, how we use it, and the choices you have.
              </p>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold tracking-tight mb-4">Information We Collect</h2>
              <p className="mb-4">We collect only what we need to provide our services and improve your experience:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Contact details such as name, email, phone, and address</li>
                <li>Company or project information when you request services</li>
                <li>Payment information if you purchase services</li>
              </ul>
              <p className="mb-6">We do not use advertising trackers or sell your information.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight mb-4">How We Use Your Information</h2>
              <p className="mb-4">We use your information to:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Provide our services and respond to inquiries</li>
                <li>Prepare proposals and coordinate projects</li>
                <li>Meet regulatory requirements</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight mb-4">Keeping Your Information Safe</h2>
              <p className="mb-6">
                We use industry-standard safeguards such as encryption, access controls, and secure systems.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight mb-4">How Long We Keep Information</h2>
              <p className="mb-6">
                We keep your information only as long as necessary for business, legal, or regulatory reasons, and then securely delete it.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight mb-4">Your Choices and Rights</h2>
              <p className="mb-4">You can contact us anytime to:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Correct or update your details</li>
                <li>Ask us to delete your information</li>
                <li>Opt out of communications</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight mb-4">International Use</h2>
              <p className="mb-6">
                If your information is processed outside Bermuda, we make sure protections are in place to keep it secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight mb-4">Children&apos;s Privacy</h2>
              <p className="mb-6">
                Our services are not directed to children under 16, and we do not knowingly collect their information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight mb-4">Updates to This Policy</h2>
              <p className="mb-6">
                If we make important changes, we will update this page and notify clients where required.
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
                  If you have any questions or requests, please reach out:
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