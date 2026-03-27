import ProjectCart from './ProjectCart.jsx';
import './Projects.css'
function Projects(){
    const project = [
    {
        title: "Blog App",
        description: "I built a full-featured blog application where users can register, log in securely using JWT authentication and bcrypt password hashing, and manage posts with complete CRUD functionality. The app includes protected routes so only authenticated users can create content, along with role-based access control to differentiate between authors and readers.",
        tech: ["React", "Node.js", "MongoDB"],
        github: "https://github.com/SANAali0786/blog-app-frontend.git",
        live: "https://blog-app-frontend-kohl-five.vercel.app/register"
    },
    {
        title: "Product Inventory App",
        description: "I developed a product inventory system that allows businesses to efficiently track stock levels and manage products through full CRUD operations. It uses a structured Mongoose schema with validation and a RESTful API built with Express, making it a practical solution for real-world small business needs.",
        tech: ["React", "Node.js", "MongoDB"],
        github: "https://github.com/SANAali0786/product-inventory-frontend.git",
        live: "https://product-inventory-frontend-r7ib.vercel.app/register"
    }
]
    return (
        <section className='projects' id='projects'>
            <h2>Projects</h2>
            <div className='project-grid'>
          {project.map((item) => (
    <ProjectCart key={item.title} project={item} />
))}
            </div>
  
        </section>
  
    )
}
export default Projects;