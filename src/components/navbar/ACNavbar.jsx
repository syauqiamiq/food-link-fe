import {
	MenuFoldOutlined,
	MenuUnfoldOutlined,
	UserOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Layout } from "antd";

const { Header } = Layout;

const ACNavbar = ({ collapsed, setCollapsed }) => {
	return (
		<Header className="p-0 pr-5 bg-foodlink-a-2 flex w-full  justify-between items-start">
			<Button
				type="text"
				icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
				onClick={() => setCollapsed(!collapsed)}
				style={{
					fontSize: "16px",
					width: 64,
					height: 64,
				}}
			/>
			<div>
				<Avatar size="large" icon={<UserOutlined />} />
			</div>
		</Header>
	);
};

export default ACNavbar;
