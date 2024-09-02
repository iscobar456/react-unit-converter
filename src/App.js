import "./css/App.css";
import LandingPage from "./pages/LandingPage";
import ConverterPage from "./pages/ConverterPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import conversionTables from "./unitReference.json";


const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />
  },
  {
    path: "/convert",
    element: <ConverterPage />,
    loader: ({ params }) => {
      return ["mass", conversionTables["mass"]];
    }
  },
  {
    path: "/convert/:measure",
    element: <ConverterPage/>,
    loader: ({ params }) => {
      return [params.measure, conversionTables[params.measure]];
    }
  }
])

function App() {
  return <RouterProvider router={ router } />
}

export default App;
