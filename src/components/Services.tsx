import { Card } from '@/components/ui/card';
import { 
  Database, 
  Search, 
  BarChart3, 
  FileText, 
  Filter, 
  TrendingUp 
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Filter className="w-8 h-8 text-primary" />,
      title: "Data Cleaning & Preparation",
      description: "Organizing raw data, handling missing values, and ensuring data quality for accurate analysis.",
      features: ["Data validation", "Missing value treatment", "Outlier detection", "Data standardization"]
    },
    {
      icon: <Search className="w-8 h-8 text-primary" />,
      title: "Exploratory Data Analysis (EDA)",
      description: "Identifying patterns, trends, and relationships within datasets to uncover actionable insights.",
      features: ["Statistical summaries", "Pattern recognition", "Correlation analysis", "Trend identification"]
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-primary" />,
      title: "Data Visualization", 
      description: "Creating compelling dashboards, charts, and reports using Excel, Power BI, and Tableau.",
      features: ["Interactive dashboards", "Custom charts", "KPI tracking", "Visual storytelling"]
    },
    {
      icon: <FileText className="w-8 h-8 text-primary" />,
      title: "Reporting & Insights",
      description: "Converting data analysis into clear, actionable recommendations for business stakeholders.",
      features: ["Executive summaries", "Trend reports", "Performance metrics", "Strategic recommendations"]
    },
    {
      icon: <Database className="w-8 h-8 text-primary" />,
      title: "Database Querying",
      description: "Extracting and manipulating data using SQL for comprehensive analysis and reporting.",
      features: ["Complex queries", "Data joins", "Aggregations", "Performance optimization"]
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      title: "Statistical Analysis",
      description: "Performing correlations, hypothesis testing, and advanced statistical methods.",
      features: ["Hypothesis testing", "Regression analysis", "Predictive modeling", "Statistical validation"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl font-bold mb-4">
            My <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive data analysis services to help your business make informed decisions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="card-elegant p-6 h-full slide-up hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex-shrink-0 p-3 bg-primary/10 rounded-lg">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                </div>
                
                <p className="text-muted-foreground mb-6 flex-grow">
                  {service.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="font-medium text-sm text-primary mb-3">Key Features:</h4>
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;