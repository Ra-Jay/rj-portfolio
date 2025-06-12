import { Code, Database, Globe, Laptop } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const About = () => {
  const skills = [
    {
      icon: Globe,
      title: "Frontend Development",
      description: "React, Next.js, TypeScript, Tailwind CSS",
      color: "text-blue-400"
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Node.js, Python, .NET, MongoDB",
      color: "text-green-400"
    },
    {
      icon: Laptop,
      title: "Software Development",
      description: "Java, ASP.NET",
      color: "text-purple-400"
    },
    {
      icon: Code,
      title: "DevOps & Cloud",
      description: "AWS, Docker, CI/CD",
      color: "text-orange-400"
    }
  ]

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gradient">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate full-stack developer with 3+ years of experience building
            scalable web applications and mobile solutions. I love turning complex problems
            into simple, beautiful designs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className="card-gradient hover:glow-effect transition-all duration-300 hover:scale-105"
            >
              <CardContent className="p-6 text-center">
                <skill.icon className={`h-12 w-12 mx-auto mb-4 ${skill.color}`} />
                <h3 className="text-lg font-semibold mb-2">{skill.title}</h3>
                <p className="text-muted-foreground text-sm">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About