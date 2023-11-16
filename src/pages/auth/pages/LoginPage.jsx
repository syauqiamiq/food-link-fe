import { Divider } from "antd";
import BGSection1 from "../../../assets/images/landing-section-image.png";
import LogoFoodlink2 from "../../../assets/logo/foodlink-logo-2.png";

const LoginPage = () => {
	return (
		<div
			className="bg-cover bg-center bg-no-repeat h-screen w-full flex flex-col items-center"
			style={{
				backgroundImage: `url(${BGSection1})`,
			}}
		>
			<img src={LogoFoodlink2} alt="logo" width={400} height={300} />
			<div className="w-full md:max-w-[600px] bg-foodlink-a-2 rounded-lg p-5 flex flex-col items-center">
				<h1 className="font-bold text-lg font-poppins">Login</h1>
				<h2 className="font-normal text-sm font-poppins">
					Lihat makanan yang tersedia pada kantin anda!
				</h2>
				<Divider className="bg-foodlink-a-4" />
			</div>
		</div>
	);
};

export default LoginPage;
