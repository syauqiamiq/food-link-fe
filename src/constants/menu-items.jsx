import {
	DashboardOutlined,
	ShopOutlined,
	UserOutlined,
} from "@ant-design/icons";

const baseAdminCompanyPath = "/admin-company";

const menuItems = [
	{
		label: "Dashboard",
		key: "ac-dashboard",
		icon: <DashboardOutlined />,
		url: `${baseAdminCompanyPath}/dashboard`,
	},
	{
		label: "Canteen",
		key: "ac-canteen",
		icon: <ShopOutlined />,
		url: `${baseAdminCompanyPath}/canteen`,
	},
	{
		label: "User",
		key: "ac-user",
		icon: <UserOutlined />,
		url: `${baseAdminCompanyPath}/user`,
	},
];

export default menuItems;
