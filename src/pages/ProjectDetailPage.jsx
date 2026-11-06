import { useRouteLoaderData } from 'react-router-dom';

function ProjectDetailPage() {
    const project = useRouteLoaderData('project-detail');

    return (
        <section>
            <article>
                <h1>{project.title}</h1>
                <h2>Description</h2>
                <p>{project.description}</p>
            </article>
        </section>
    ); 
}

export default ProjectDetailPage;

export async function projectDetailLoader( { request, params }) {
    const id = params.projectId;
    const response = await fetch('http://localhost:3000/projects/' + id);

    if (!response.ok) {
        throw new Response(
            JSON.stringify({title: 'Load error', message: 'Unable to load selected property data.' }),
            { status: 500 }
        );
    } else {
        return response;
    }
}
