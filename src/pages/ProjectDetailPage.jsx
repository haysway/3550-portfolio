import { Link, useRouteLoaderData, redirect } from 'react-router-dom';

function ProjectDetailPage() {
    return (true);
}

export default ProjectDetailPage;

export async function projectDetailLoader( { request, params }) {
    const id = params.propertyId;
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
