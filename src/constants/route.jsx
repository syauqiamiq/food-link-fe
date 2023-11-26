import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/landing/pages/LandingPage";
import LoginPage from "../pages/auth/pages/LoginPage";
import RegisterPage from "../pages/auth/pages/RegisterPage";
import DashboardPage from "../pages/dashboard/pages/DashboardPage";
import ListStandPage from "../pages/dashboard/pages/ListStandPage";
import ListProductPage from "../pages/dashboard/pages/ListProductPage";
import HistoryPage from "../pages/dashboard/pages/HistoryPage";
import DetailHistoryTransactionPage from "../pages/dashboard/pages/DetailHistoryTransactionPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <LandingPage />,
	},
	{
		path: "/auth/login",
		element: <LoginPage />,
	},
	{
		path: "/auth/register",
		element: <RegisterPage />,
	},
	{
		path: "/dashboard",
		element: <DashboardPage />,
	},
	{
		path: "/dashboard/canteen/:id/stand",
		element: <ListStandPage />,
	},
	{
		path: "/dashboard/canteen/:id/stand/:standId/product",
		element: <ListProductPage />,
	},
	{
		path: "/dashboard/transaction-history",
		element: <HistoryPage />,
	},
	{
		path: "/dashboard/transaction-history/:id/detail",
		element: <DetailHistoryTransactionPage />,
	},
]);

export default router;
