import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { WebsiteMockupComponent } from "./website-mockups.component";

interface Project {
  id: number;
  title: string;
  client: string;
  category: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  results: string[];
  duration: string;
  teamSize: string;
  imageUrl: string;
  liveUrl?: string;
  featured: boolean;
  year: string;
  challenge: string;
  solution: string;
  metrics: { value: string; label: string }[];
  hidden?: boolean;
}

@Component({
  selector: "app-portfolio",
  standalone: true,
  imports: [CommonModule, WebsiteMockupComponent],
  templateUrl: "./portfolio.component.html",
  styleUrls: ["./portfolio.component.scss"],
})
export class PortfolioComponent {
  selectedFilter: string = "all";
  selectedProject: Project | null = null;

  projects: Project[] = [
    {
      id: 1,
      title: "TechCorp E-commerce Platform",
      client: "TechCorp International",
      category: "E-commerce",
      description:
        "Revolutionary e-commerce platform with AI-powered recommendations and real-time inventory management.",
      fullDescription:
        "Built a comprehensive e-commerce solution for TechCorp International, featuring advanced AI-powered product recommendations, real-time inventory management, and seamless payment integration. The platform handles over 10,000 concurrent users and processes hundreds of transactions daily.",
      technologies: [
        "React",
        "Node.js",
        "PostgreSQL",
        "Redis",
        "AWS",
        "Stripe API",
        "TensorFlow",
      ],
      results: [
        "300% increase in conversion rates",
        "50% reduction in cart abandonment",
        "99.9% uptime with global CDN",
        "2.5s average page load time",
      ],
      duration: "4 months",
      teamSize: "5 developers",
      imageUrl:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      liveUrl: "#",
      featured: true,
      year: "2024",
      challenge:
        "TechCorp was losing customers due to a slow, outdated e-commerce platform with poor user experience and limited mobile functionality.",
      solution:
        "We built a modern, responsive platform using React and Node.js with AI-driven recommendations, resulting in significantly improved conversion rates and customer satisfaction.",
      metrics: [
        { value: "+300%", label: "Conversion Rate" },
        { value: "+250%", label: "Mobile Sales" },
        { value: "2.1s", label: "Load Time" },
      ],
    },
    {
      id: 2,
      title: "MedFlow Patient Management System",
      client: "HealthTech Solutions",
      category: "SaaS",
      description:
        "HIPAA-compliant SaaS platform for healthcare providers with AI-driven patient insights.",
      fullDescription:
        "Developed a comprehensive patient management system for healthcare providers, featuring HIPAA-compliant data handling, AI-driven patient insights, appointment scheduling, and telemedicine capabilities. The system serves over 500 healthcare providers and manages 100,000+ patient records.",
      technologies: [
        "Angular",
        "Node.js",
        "MongoDB",
        "Socket.io",
        "Docker",
        "Kubernetes",
        "TensorFlow",
      ],
      results: [
        "60% improvement in patient scheduling efficiency",
        "40% reduction in administrative costs",
        "HIPAA compliance certification achieved",
        "95% healthcare provider satisfaction",
      ],
      duration: "6 months",
      teamSize: "7 developers",
      imageUrl:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
      featured: true,
      year: "2024",
      challenge:
        "Healthcare providers were struggling with fragmented systems, paper records, and inefficient patient communication, leading to delayed care and administrative overhead.",
      solution:
        "We developed an integrated SaaS platform that digitizes all patient interactions, automates scheduling, and provides real-time analytics for better patient outcomes.",
      metrics: [
        { value: "78%", label: "Time Saved" },
        { value: "92%", label: "User Satisfaction" },
        { value: "45%", label: "Faster Processing" },
      ],
    },
    {
      id: 3,
      title: "Global Finance Corporate Website",
      client: "Global Finance Group",
      category: "Corporate",
      description:
        "Modern corporate website with interactive dashboards and multilingual support.",
      fullDescription:
        "Created a sophisticated corporate website for Global Finance Group featuring interactive financial dashboards, multilingual support, and advanced security measures. The website serves as the primary digital presence for a $2B financial services company.",
      technologies: [
        "Vue.js",
        "Express.js",
        "MySQL",
        "Chart.js",
        "AWS CloudFront",
        "i18n",
      ],
      results: [
        "200% increase in qualified leads",
        "70% improvement in user engagement",
        "Support for 12 languages",
        "A+ security rating achieved",
      ],
      duration: "3 months",
      teamSize: "4 developers",
      imageUrl:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
      featured: false,
      year: "2023",
      challenge:
        "The existing website couldn't handle peak trading hours, lacked mobile optimization, and had security vulnerabilities that posed risks to client data.",
      solution:
        "We architected a scalable, secure platform with real-time data feeds, advanced caching, and enterprise-grade security measures, resulting in 99.9% uptime during critical trading periods.",
      metrics: [
        { value: "99.9%", label: "Uptime" },
        { value: "$2B+", label: "Assets Managed" },
        { value: "3x", label: "Traffic Capacity" },
      ],
    },
    {
      id: 4,
      title: "EcoTrack Sustainability Platform",
      client: "GreenTech Startup",
      category: "Startup",
      description:
        "IoT-connected sustainability tracking platform with real-time environmental monitoring.",
      fullDescription:
        "Built an innovative sustainability tracking platform for GreenTech Startup, integrating IoT sensors for real-time environmental monitoring, carbon footprint calculation, and automated ESG reporting. The platform helps companies track and reduce their environmental impact.",
      technologies: [
        "React Native",
        "FastAPI",
        "InfluxDB",
        "MQTT",
        "Grafana",
        "AWS IoT Core",
      ],
      results: [
        "Tracking 1M+ environmental data points daily",
        "45% average carbon footprint reduction",
        "500+ companies using the platform",
        "$2M seed funding raised",
      ],
      duration: "5 months",
      teamSize: "6 developers",
      imageUrl:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop",
      featured: true,
      year: "2024",
      challenge:
        "Companies lacked visibility into their environmental impact and struggled to meet sustainability targets without actionable data and insights.",
      solution:
        "We created an end-to-end sustainability platform that collects real-time environmental data through IoT sensors and provides AI-powered recommendations for reducing environmental impact.",
      metrics: [
        { value: "45%", label: "Carbon Reduction" },
        { value: "1000+", label: "Sensors Deployed" },
        { value: "89%", label: "Goal Achievement" },
      ],
    },
    {
      id: 5,
      title: "FoodieConnect Social Platform",
      client: "Social Dining Inc.",
      category: "Startup",
      description:
        "Social dining platform connecting food enthusiasts with AI-powered restaurant recommendations.",
      fullDescription:
        "Developed a unique social dining platform that connects food enthusiasts through AI-powered restaurant recommendations, social reviews, and group dining coordination. The platform uses machine learning to understand user preferences and suggest personalized dining experiences.",
      technologies: [
        "React",
        "Django",
        "PostgreSQL",
        "Celery",
        "Redis",
        "Google Maps API",
        "Scikit-learn",
      ],
      results: [
        "50,000+ active monthly users",
        "85% user retention rate",
        "10,000+ restaurant partnerships",
        "4.8/5 app store rating",
      ],
      duration: "4 months",
      teamSize: "5 developers",
      imageUrl:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop",
      featured: false,
      year: "2023",
      challenge:
        "Food enthusiasts struggled to discover new restaurants that matched their specific tastes and dietary preferences, often relying on generic review platforms.",
      solution:
        "We built a social platform with sophisticated AI recommendation engines that learn from user behavior, social connections, and taste preferences to suggest perfect dining experiences.",
      metrics: [
        { value: "2M+", label: "Active Users" },
        { value: "94%", label: "Recommendation Accuracy" },
        { value: "15k+", label: "Partner Restaurants" },
      ],
    },
    {
      id: 6,
      title: "SmartLogistics Fleet Management",
      client: "LogiCorp Solutions",
      category: "SaaS",
      description:
        "AI-powered fleet management system with predictive maintenance and route optimization.",
      fullDescription:
        "Created an advanced fleet management system for LogiCorp Solutions featuring AI-powered predictive maintenance, dynamic route optimization, and real-time vehicle tracking. The system manages over 1,000 vehicles and has significantly improved operational efficiency.",
      technologies: [
        "Angular",
        "microservices",
        "Apache Kafka",
        "TimescaleDB",
        "TensorFlow",
        "Google Maps API",
      ],
      results: [
        "35% reduction in fuel costs",
        "50% decrease in vehicle downtime",
        "25% improvement in delivery times",
        "1,000+ vehicles managed",
      ],
      duration: "7 months",
      teamSize: "8 developers",
      imageUrl:
        "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=400&fit=crop",
      featured: false,
      year: "2024",
      challenge:
        "Fleet operators faced high maintenance costs, inefficient routing, and poor visibility into vehicle performance, leading to increased operational expenses and delivery delays.",
      solution:
        "We developed an integrated fleet management platform that uses IoT data and machine learning to optimize operations, predict maintenance needs, and reduce costs significantly.",
      metrics: [
        { value: "32%", label: "Cost Reduction" },
        { value: "25%", label: "Fuel Savings" },
        { value: "89%", label: "On-time Delivery" },
      ],
    },
  ];

  filteredProjects: Project[] = [];

  constructor(private router: Router) {
    this.filteredProjects = this.projects;
  }

  filterProjects(category: string): void {
    this.selectedFilter = category;
    if (category === "all") {
      this.filteredProjects = this.projects;
    } else {
      this.filteredProjects = this.projects.filter(
        (project) => project.category === category
      );
    }
  }

  openModal(project: Project): void {
    this.selectedProject = project;
    document.body.style.overflow = "hidden";
  }

  closeModal(): void {
    this.selectedProject = null;
    document.body.style.overflow = "auto";
  }

  goToContact(): void {
    this.router.navigate(["/"], { fragment: "contact" });
  }
}
