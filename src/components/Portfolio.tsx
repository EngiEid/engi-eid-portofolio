import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import superstoreDashboard from '@/assets/superstore-dashboard.jpg';
import titanicDashboard from '@/assets/titanic-dashboard.jpg';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "SuperStore Sales Analysis",
      description: "Comprehensive analysis of retail sales data using Excel with Power Query and Power Pivot. Identified key performance issues and growth opportunities.",
      image: superstoreDashboard,
      technologies: ["Excel", "Power Query", "Power Pivot", "PivotTables"],
      insights: [
        "First-Class shipping caused most delivery delays",
        "South region showed significant underperformance",
        "Several sub-categories required strategic intervention",
        "Seasonal trends identified for inventory optimization"
      ],
      tools: "Excel Dashboard with Interactive Slicers",
      category: "Business Intelligence"
    },
    {
      id: 2,
      title: "Titanic Survival Analysis",
      description: "Statistical analysis of Titanic passenger data to identify survival patterns and trends using Excel and advanced pivot table techniques.",
      image: titanicDashboard,
      technologies: ["Excel", "Statistical Analysis", "PivotTables", "Data Visualization"],
      insights: [
        "Gender was the strongest predictor of survival",
        "First-class passengers had higher survival rates",
        "Age groups showed distinct survival patterns",
        "Family size influenced survival probability"
      ],
      tools: "Interactive Excel Dashboard",
      category: "Statistical Analysis"
    }
  ];

  return (
    <section id="portfolio" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-world data analysis projects showcasing practical business insights
          </p>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className="card-elegant overflow-hidden slide-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                {/* Project Image */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative h-64 lg:h-full">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
                  </div>
                </div>

                {/* Project Details */}
                <div className={`p-8 lg:p-12 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="space-y-6">
                    {/* Category Badge */}
                    <div className="inline-block">
                      <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20">
                        {project.category}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-bold mb-4">{project.title}</h3>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold mb-3 text-primary">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-3 py-1 text-sm bg-secondary text-secondary-foreground rounded-md border border-border"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Key Insights */}
                    <div>
                      <h4 className="font-semibold mb-3 text-primary">Key Insights:</h4>
                      <ul className="space-y-2">
                        {project.insights.map((insight, insightIndex) => (
                          <li key={insightIndex} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-muted-foreground">{insight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tools */}
                    <div>
                      <h4 className="font-semibold mb-2 text-primary">Dashboard Tool:</h4>
                      <p className="text-muted-foreground">{project.tools}</p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-4 pt-4">
                      <Button className="btn-primary">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Details
                      </Button>
                      <Button variant="outline" className="btn-secondary">
                        <Github className="w-4 h-4 mr-2" />
                        Source Code
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 fade-in">
          <p className="text-lg text-muted-foreground mb-6">
            Interested in seeing more of my work or discussing a project?
          </p>
          <Button 
            className="btn-primary text-lg px-8 py-3"
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Let's Connect
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;