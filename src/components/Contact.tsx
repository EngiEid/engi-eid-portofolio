import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, Linkedin, Github, MapPin, Send } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Initialize EmailJS with your public key
      emailjs.init('spmVqz5opgIjzIXV2');
      
      // Send email using EmailJS
      await emailjs.send(
        'service_2mj1grn', // Service ID
        'template_88ocyzo', // Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Engi Eid',
        }
      );

      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "engieid6@gmail.com",
      href: "mailto:engieid6@gmail.com"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "01026722814",
      href: "tel:01026722814"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      value: "linkedin.com/in/engi-eid",
      href: "https://linkedin.com/in/engi-eid"
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      value: "github.com/EngiEid",
      href: "https://github.com/EngiEid"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to turn your data into actionable insights? Let's discuss your next project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="slide-up">
            <Card className="card-elegant p-8 h-full">
              <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always interested in discussing new opportunities, collaboration, 
                or simply sharing insights about data analysis. Feel free to reach out 
                through any of the channels below.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 rounded-lg hover:bg-secondary/50 transition-colors duration-300 group"
                  >
                    <div className="flex-shrink-0 p-2 bg-primary/10 text-primary rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                      {info.icon}
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{info.label}</p>
                      <p className="text-muted-foreground text-sm">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Location */}
              <div className="mt-8 p-4 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg border border-primary/10">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">Location</p>
                    <p className="text-muted-foreground text-sm">Available for remote work</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="slide-up" style={{ animationDelay: '200ms' }}>
            <Card className="card-elegant p-8">
              <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project or how I can help..."
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full btn-primary text-lg py-3"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;