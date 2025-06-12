import { ExternalLink, Github } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const Projects = () => {
  const projects = [
    {
      title: "Boat Marketplace",
      description: "A full-stack e-commerce solution with payment integration, inventory management, and real-time analytics.",
      image: "/images/1.png",
      technologies: ["Next.js", "TypeScript", "Stripe", "GraphQL", "Payload CMS", "Tailwind"],
      github: null,
      demo: "https://www.easyboatdeals.com/",
      featured: true
    },
    {
      title: "Laser Solder Inspector Web App",
      description: "The project is a web application integrated with machine learning, with the main feature of evaluating the quality of laser solder condition applied on micro components. This was created using Nextjs + Tailwind(Frontend) and Flask + YOLOv7(Backend).",
      image: "/images/laser.png",
      technologies: ["Next.js", "Python Flask", "MongoDB", "YOLOv7"],
      github: "https://github.com/Ra-Jay/next_lsc_inspector",
      demo: null,
      featured: true
    },
    {
      title: "E-commerce Application",
      description: "ntroducing my e-commerce project, crafted with ReactJS - a result of my dedicated practice and passion for web development This project exemplifies my ability to create dynamic and interactive user interfaces, bringing a seamless shopping experience to life. Built entirely for practice, the e-commerce project showcases a wide range of ReactJS functionalities. Leveraging state management, I implemented dynamic product listings with filtering and sorting options, ensuring a user-friendly browsing experience.",
      image: "/images/test.png",
      technologies: ["React", "Next.js", "Chart.js"],
      github: null,
      demo: "https://miraclecbdproducts.myshopify.com/",
      featured: false
    },
    {
      title: "Increment Technologies",
      description: "This project is the Increment Technologies Inc. landing page where it showcases what the company is all about, how they work, and how to contact them.",
      image: "/images/increment.png",
      technologies: ["React", "Next.js"],
      github: null,
      demo: "https://www.incrementtechnologies.com/",
      featured: false
    }
  ]

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gradient">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`card-gradient hover:glow-effect transition-all duration-300 hover:scale-[1.02] ${project.featured ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
            >
              <CardHeader>
                <div className="w-full h-60 bg-muted rounded-lg mb-4 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="flex items-center justify-between">
                  {project.title}
                  {project.featured && (
                    <Badge variant="secondary" className="bg-primary/20 text-primary">
                      Featured
                    </Badge>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-2">
                {project.github &&
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>}
                {project.demo &&
                  <Button size="sm" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects