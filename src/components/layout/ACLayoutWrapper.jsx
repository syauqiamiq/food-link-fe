import { Breadcrumb, Layout, Typography } from "antd";
import { useState } from "react";
import ACFooter from "../footer/ACFooter";
import ACNavbar from "../navbar/ACNavbar";
import ACSidebar from "../sidebar/ACSidebar";
const { Content } = Layout;

const ACLayoutWrapper = ({ children, subTitle, title, breadcrumbItem }) => {
	const [collapsed, setCollapsed] = useState(false);
	return (
		<Layout hasSider>
			<ACSidebar collapsed={collapsed} />
			<Layout>
				<ACNavbar setCollapsed={setCollapsed} collapsed={collapsed} />
				<Content
					style={{
						margin: "24px 16px 0",
					}}
				>
					<div className="p-6 h-screen bg-slate-100">
						<div className="flex flex-col mb-3">
							<Breadcrumb className="mb-5" items={breadcrumbItem} />
							<Typography className="font-poppins text-2xl font-semibold">
								{title}
							</Typography>
							<Typography className="font-poppins text-lg font-normal">
								{subTitle}
							</Typography>
						</div>
						{children}
					</div>
				</Content>
				<ACFooter />
			</Layout>
		</Layout>
	);
};

export default ACLayoutWrapper;
