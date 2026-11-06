import { Link, useLoaderData } from 'react-router-dom';

function GalleryPage() {
    const projects = useLoaderData();

    return (
        <section>
            <h1>Project Gallery</h1>
            <ul>
                {projects.map((project) => (
                    <li key={project.id}>
                        <Link to={project.id}>
                            <h2>{project.title}</h2>
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default GalleryPage;

export async function projectsLoader() {
    const response = await fetch('http://localhost:3000/projects');

    if (!response.ok) {
        throw new Response(
            JSON.stringify({ title: 'Load error', message: 'Unable to load projects.' }),
            { status: 500 }
        );
    } else {
        const data = await response.json();
        return data;
    }
}