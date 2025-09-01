import { Card } from '@/components/ui/card';
import { Database, BarChart3, FileSpreadsheet, PieChart, TrendingUp, Brain } from 'lucide-react';

const Skills = () => {
  const technicalSkills = [
    {
      icon: <FileSpreadsheet className="w-8 h-8 text-primary" />,
      title: "Excel",
      description: "Advanced Excel skills including data cleaning, pivot tables, Power Query, and Power Pivot",
      level: 95
    },
    {
      icon: <Database className="w-8 h-8 text-primary" />,
      title: "SQL",
      description: "Database querying, joins, aggregations, and complex data extraction",
      level: 90
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      title: "Python",
      description: "Data analysis with Pandas, NumPy, Matplotlib, and Seaborn libraries",
      level: 85
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-primary" />,
      title: "Power BI",
      description: "Interactive dashboards, data modeling, and business intelligence solutions",
      level: 88
    },
    {
      icon: <PieChart className="w-8 h-8 text-primary" />,
      title: "Tableau",
      description: "Advanced data visualization and interactive dashboard creation",
      level: 85
    },
    {
      icon: <Brain className="w-8 h-8 text-primary" />,
      title: "Statistical Analysis",
      description: "Hypothesis testing, correlations, and data-driven decision making",
      level: 80
    }
  ];

  const softSkills = [
    "Critical Thinking",
    "Data Storytelling", 
    "Problem Solving",
    "Communication",
    "Attention to Detail",
    "Business Acumen"
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl font-bold mb-4">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive skill set in data analysis tools and methodologies
          </p>
        </div>

        {/* Technical Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">Technical Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technicalSkills.map((skill, index) => (
              <Card key={index} className="skill-card slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    {skill.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold mb-2">{skill.title}</h4>
                    <p className="text-muted-foreground text-sm mb-4">{skill.description}</p>
                    
                    {/* Skill Level Bar */}
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <div className="text-xs text-muted-foreground mt-1 text-right">
                      {skill.level}%
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-8">Core Competencies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {softSkills.map((skill, index) => (
              <span 
                key={index}
                className="px-6 py-3 bg-card rounded-full border border-primary/20 text-foreground font-medium hover:border-primary/40 transition-colors duration-300 fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;