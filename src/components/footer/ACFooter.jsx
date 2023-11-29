import { Layout } from "antd";

const { Footer } = Layout;

const ACFooter = () => {
	return (
		<Footer className="text-center  bg-foodlink-a-2 ">
			<h6 className="font-poppins text-foodlink-a-5 text-sm font-light">
				Copyright <span className="font-bold font-poppins">Foodlink.id</span>{" "}
				All Rights Reserved, 2023
			</h6>
		</Footer>
	);
};

export default ACFooter;
