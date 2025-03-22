import './../stylesComponentsPages/experience.css';

const projects = [
    {
        title: "Mi página web",
        image: "/Proyectos/proyecto1.png",
        technologies: ["javascript", "css3", "git", "react"]
    },
    {
        title: "Otro Proyecto",
        image: "/Proyectos/proyecto2.png",
        technologies: ["html5", "sass", "github"]
    }
];

const Experience = () => {
    return (
        <div className='experienceDivBody'>
            {projects.map((project, index) => (
                <div key={index} className='experienceDivElement'>
                    <h2>{project.title}</h2>
                    <div className='experienceDivElementImg'>
                        <img src={project.image} alt={project.title} />
                    </div>
                    <ul className="experienceDivElementUl">
                        {project.technologies.map((tech, techIndex) => (
                            <li key={techIndex} className='experienceDivElementUlLi'>
                                <box-icon type='logo' name={tech}></box-icon>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default Experience;