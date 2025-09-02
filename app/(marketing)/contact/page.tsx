import { ContactForm } from '@/components/contact-form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Phone, 
  Mail, 
  MapPin
} from 'lucide-react';
import { generateSEO } from '@/lib/seo';

export const metadata = generateSEO({
  title: 'Contact - Ground Station Hosting in Bermuda',
  description: 'Contact us to discuss your ground station hosting requirements in Bermuda. We are here to help with antenna hosting and site solutions.',
});

const contactMethods = [
  {
    name: 'Phone',
    contact: '+1 (441) 555-0123',
    icon: Phone,
  },
  {
    name: 'Email',
    contact: 'info@bermuda-ground-station.com',
    icon: Mail,
  },
  {
    name: 'Location',
    contact: 'Hamilton, Bermuda',
    icon: MapPin,
  },
];


export default function ContactPage() {
  return (
    <>
      
      <div className="bg-gradient-to-b from-muted/50 to-background">
        <div className="mx-auto max-w-4xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Contact
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-3xl mx-auto">
              We are here to help. Contact us to discuss your ground station 
              hosting requirements in Bermuda.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div>
            <ContactForm />
          </div>
          
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold tracking-tight mb-6">
                Contact Information
              </h2>
              <div className="space-y-4">
                {contactMethods.map((method) => (
                  <Card key={method.name}>
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                          <method.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium">{method.name}</h3>
                          <p className="text-sm text-muted-foreground">{method.contact}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}