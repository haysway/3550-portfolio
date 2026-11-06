import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from './pages/RootLayout';
import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';
import AboutPage from './pages/AboutPage';
import GalleryPage, { projectsLoader } from './pages/GalleryPage';
import ProjectDetailPage, { projectDetailLoader } from './pages/ProjectDetailPage';
import ContactPage from './pages/ContactPage';
import { newContactAction } from './components/ContactForm';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage />},
      {
        path: 'gallery',
        children: [
          {
            index: true,
            element: <GalleryPage />,
            loader: projectsLoader
          },
          {
            path: ':projectId',
            id: 'project-detail',
            loader: projectDetailLoader,
            children: [
              {
                index: true,
                element: <ProjectDetailPage />
              }
            ]
          }
        ]

      },
      {
        path: 'about',
        element: <AboutPage />
      },
      {
        path: 'contact',
        element: <ContactPage />,
        action: newContactAction
      },
    ]
  }
])

function App() {
  return <RouterProvider router={router} />;
}

export default App;