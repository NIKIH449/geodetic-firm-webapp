import React, { useEffect, useState } from 'react';
import { getProjects, addProject, updateProject } from '../services/projectService';
import ProjectForm from '../components/Project/ProjectForm';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            const data = await getProjects();
            setProjects(data);
        };
        fetchProjects();
    }, []);

    const handleAddProject = async (project) => {
        const newProject = await addProject(project);
        setProjects([...projects, newProject]);
    };

    const handleUpdateProject = async (project) => {
        const updatedProject = await updateProject(project);
        setProjects(projects.map(p => (p.id === updatedProject.id ? updatedProject : p)));
        setSelectedProject(null);
    };

    return (
        <div>
            <h1>Project Management</h1>
            <ProjectForm 
                project={selectedProject} 
                onAdd={handleAddProject} 
                onUpdate={handleUpdateProject} 
                onCancel={() => setSelectedProject(null)} 
            />
            <ul>
                {projects.map(project => (
                    <li key={project.id} onClick={() => setSelectedProject(project)}>
                        {project.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Projects;