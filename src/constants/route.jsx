import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/landing/pages/LandingPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <LandingPage />,
	},
]);

export default router;
