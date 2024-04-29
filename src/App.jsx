
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from './router';
import Layout from './components/layout';
import Page404 from "./pages/Page404";


function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      errorElement: <Page404 />,
      children: routes
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
