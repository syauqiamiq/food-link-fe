import { Layout } from "antd";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
const { Content } = Layout;

const LayoutWrapper = ({ children }) => {
	return (
		<Layout>
			<Navbar />
			<Content className="bg-white">{children}</Content>
			<Footer />
		</Layout>
	);
};

export default LayoutWrapper;
