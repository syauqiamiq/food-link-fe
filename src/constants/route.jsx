import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/landing/pages/LandingPage";
import LoginPage from "../pages/auth/pages/LoginPage";
import RegisterPage from "../pages/auth/pages/RegisterPage";
import DashboardPage from "../pages/dashboard/pages/DashboardPage";
import ListStandPage from "../pages/dashboard/pages/ListStandPage";
import ListProductPage from "../pages/dashboard/pages/ListProductPage";
import HistoryPage from "../pages/dashboard/pages/HistoryPage";
import DetailHistoryTransactionPage from "../pages/dashboard/pages/DetailHistoryTransactionPage";
import ACDashboardPage from "../pages/admin-company/dashboard/pages/ACDashboardPage";
import ACCanteenPage from "../pages/admin-company/canteen/pages/ACCanteenPage";
import ACUserPage from "../pages/admin-company/user/pages/ACUserPage";

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
	{
		path: "/admin-company/dashboard",
		element: <ACDashboardPage />,
	},
	{
		path: "/admin-company/canteen",
		element: <ACCanteenPage />,
	},
	{
		path: "/admin-company/user",
		element: <ACUserPage />,
	},
]);

export default router;
