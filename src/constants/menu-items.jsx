import {
	DashboardOutlined,
	ShopOutlined,
	UserOutlined,
} from "@ant-design/icons";

export const baseAdminCompanyPath = "/admin-company";

export const menuItems = [
	{
		label: "Dasbor",
		key: "ac-dashboard",
		icon: <DashboardOutlined />,
		url: `${baseAdminCompanyPath}/dashboard`,
	},
	{
		label: "Kantin",
		key: "ac-canteen",
		icon: <ShopOutlined />,
		url: `${baseAdminCompanyPath}/canteen`,
	},
	{
		label: "Pengguna",
		key: "ac-user",
		icon: <UserOutlined />,
		url: `${baseAdminCompanyPath}/user`,
	},
];
