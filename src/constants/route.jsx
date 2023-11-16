import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/landing/pages/LandingPage";
import LoginPage from "../pages/auth/pages/LoginPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <LandingPage />,
	},
	{
		path: "/auth/login",
		element: <LoginPage />,
	},
]);

export default router;
