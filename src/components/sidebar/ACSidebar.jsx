import { ConfigProvider, Layout, Menu } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import FoodLinkLogo from "../../assets/logo/foodlink-logo.png";
import { menuItems } from "../../constants/menu-items";

const { Sider } = Layout;

const ACSidebar = ({ collapsed }) => {
	const navigate = useNavigate();
	const location = useLocation();

	const handleMenuClick = ({ key }) => {
		const { url } = menuItems.find((v) => v.key === key) || {};
		if (url) {
			navigate(url);
		}
	};

	const handleSelectedKeys = () => {
		const splittedPath = location.pathname.split("/");
		const { key } =
			menuItems.find((v) => v.url === location.pathname) ||
			menuItems.find((v) => v.url === `/${splittedPath[1]}/${splittedPath[2]}`);
		return key;
	};

	return (
		<Sider
			trigger={null}
			collapsible
			collapsed={collapsed}
			breakpoint="lg"
			collapsedWidth="0"
			className="!bg-foodlink-a-5"
		>
			<div className="demo-logo-vertical" />
			<div className="flex justify-center items-center bg-foodlink-a-2 rounded-lg m-3 h-max-[100px]">
				<img src={FoodLinkLogo} alt="food-link-logo" className="w-[150px]" />
			</div>
			<ConfigProvider
				theme={{
					components: {
						Menu: {
							itemSelectedBg: "#F7EAE3",
							itemColor: "#ffffff",
							itemSelectedColor: "#000000",
						},
					},
				}}
			>
				<Menu
					className="!bg-foodlink-a-5"
					defaultSelectedKeys={handleSelectedKeys}
					items={menuItems.map((v) => ({
						key: v.key,
						icon: v.icon,
						label: v.label,
					}))}
					onClick={handleMenuClick}
				/>
			</ConfigProvider>
		</Sider>
	);
};

export default ACSidebar;
