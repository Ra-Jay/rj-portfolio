import { Github, Linkedin, Mail, Heart } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-muted/30 py-12 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold text-gradient mb-2">RJ Yanson</h3>
            <p className="text-muted-foreground">Full Stack Developer</p>
          </div>

          <div className="flex space-x-6 mb-6 md:mb-0">
            <a
              href="https://github.com/Ra-Jay"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/raul-jay-yanson-16536a1a7/"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:rauljayyanson@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="border-t border-border pt-6 mt-6 text-center">
          {/* <p className="text-muted-foreground flex items-center justify-center">
            Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> using React & Tailwind CSS
          </p> */}
          <p className="text-sm text-muted-foreground mt-2">
            © 2024 RJ Yanson. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer