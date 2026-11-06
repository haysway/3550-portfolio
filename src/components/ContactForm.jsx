import { useNavigate, Form, redirect, useNavigation, useActionData } from 'react-router-dom';
import { useEffect, useRef } from "react";

function ContactForm() {
    const formRef = useRef(null);
    const navigate = useNavigate();
    const navigation = useNavigation();
    const actionData = useActionData();
    const isSubmitting = navigation.state === 'submitting';

    // I looked up how to implement this clear method
    useEffect(() => {
        formRef.current?.reset();
    }, [navigation.state, actionData]);

    function cancelHandler() {
        navigate('..');
    }

    return (
        <Form method='POST' ref={formRef}>
            <p>
                <label htmlFor="name">Your Name</label>
                <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    defaultValue=''
                />
            </p>

            <p>
                <label htmlFor="email">Your Email</label>
                <input
                    id="email"
                    type="text"
                    name="email"
                    required
                    defaultValue=''
                />
            </p>

            <p>
                <label htmlFor="message">Your Message</label>
                <input
                    id="message"
                    type="text"
                    name="message"
                    required
                    defaultValue=''
                />
            </p>

            <div>
                <button type="button" onClick={cancelHandler}>
                    Cancel
                </button>
                <button disabled={isSubmitting}>{isSubmitting ? "Submitting..." : "Submit"}</button>
            </div>
        </Form>
    );
}

export default ContactForm;

export async function newContactAction({ request }) {
    const data = await request.formData();

    const contactData = {
        name: data.get('name'),
        email: data.get('email'),
        message: data.get('message'),
    };

    const response = await fetch('http://localhost:3000/contacts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactData)
    });

    if (!response.ok) {
        throw new Response(
            JSON.stringify({title: 'Post Error', message: 'Could not add your contact'}), {status: 500}
        )
    }

    return redirect('/contact');
}