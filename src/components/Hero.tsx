import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import engiPortrait from '@/assets/engi-portrait.jpg';

const Hero = () => {
  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary to-background opacity-50"></div>
      <div className="absolute top-20 right-20 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-accent/10 rounded-full blur-lg animate-pulse delay-300"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Hi, I'm{' '}
              <span className="text-gradient">Engi Eid</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl font-semibold text-muted-foreground mb-6">
              Data Analyst
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              Transforming raw data into meaningful insights that drive strategic decisions. 
              Skilled in SQL, Python, Excel, Tableau, and Power BI.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                onClick={scrollToPortfolio}
                className="btn-primary text-lg px-8 py-3"
              >
                View My Work
              </Button>
              <Button 
                onClick={scrollToContact}
                variant="outline" 
                className="btn-secondary text-lg px-8 py-3"
              >
                Contact Me
              </Button>
            </div>
          </div>

          {/* Right Side - Profile Image */}
          <div className="slide-up flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl relative z-10 card-elegant">
                <img 
                  src={engiPortrait} 
                  alt="Engi Eid - Data Analyst"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-primary to-accent rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-accent to-primary rounded-full opacity-30 animate-pulse delay-500"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;