import { Layout } from "antd";
import { useState } from "react";
import ACFooter from "../footer/ACFooter";
import ACNavbar from "../navbar/ACNavbar";
import ACSidebar from "../sidebar/ACSidebar";
const { Content } = Layout;

const ACLayoutWrapper = ({ children }) => {
	const [collapsed, setCollapsed] = useState(false);
	return (
		<Layout>
			<ACSidebar collapsed={collapsed} />
			<Layout>
				<ACNavbar setCollapsed={setCollapsed} collapsed={collapsed} />
				<Content
					style={{
						margin: "24px 16px 0",
					}}
				>
					<div className="p-6 h-screen bg-slate-100">{children}</div>
				</Content>
				<ACFooter />
			</Layout>
		</Layout>
	);
};

export default ACLayoutWrapper;
