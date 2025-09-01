import { Card } from '@/components/ui/card';
import { GraduationCap, Award, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about turning complex data into clear, actionable insights
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Bio */}
          <div className="slide-up">
            <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I am a Data Analyst skilled in SQL, Python, Excel, Tableau, and Power BI, 
              with experience in transforming raw data into meaningful insights that support 
              strategic decision-making.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              With a strong foundation in computer science and a passion for data storytelling, 
              I help organizations unlock the value hidden in their data through comprehensive 
              analysis and compelling visualizations.
            </p>
            
            {/* Key Strengths */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground">Data-driven decision making</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground">Statistical analysis and modeling</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground">Interactive dashboard development</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground">Business intelligence solutions</span>
              </div>
            </div>
          </div>

          {/* Right Side - Education & Achievements */}
          <div className="space-y-6 slide-up" style={{ animationDelay: '200ms' }}>
            {/* Education */}
            <Card className="card-elegant p-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Education</h4>
                  <p className="font-medium text-foreground mb-1">
                    Bachelor of Computer and Information Sciences
                  </p>
                  <p className="text-muted-foreground text-sm mb-2">
                    Faculty of Computer and Information Sciences (FCIS)
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Department: Computer Science
                  </p>
                </div>
              </div>
            </Card>

            {/* Achievement */}
            <Card className="card-elegant p-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Academic Excellence</h4>
                  <p className="font-medium text-foreground mb-1">
                    Cumulative Grade: Excellent
                  </p>
                  <p className="text-primary font-semibold mb-2">96.76%</p>
                  <p className="text-muted-foreground text-sm">
                    Ranked First in Class
                  </p>
                </div>
              </div>
            </Card>

            {/* Mission */}
            <Card className="card-elegant p-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Mission</h4>
                  <p className="text-muted-foreground">
                    To bridge the gap between complex data and strategic business decisions 
                    through innovative analysis and clear communication.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;