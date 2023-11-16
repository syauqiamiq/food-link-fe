import { Button, Layout } from "antd";
import { Link } from "react-router-dom";
import FoodLinkLogo from "../../assets/logo/foodlink-logo.png";
const { Header } = Layout;

const navbarMenu = [
	{
		label: "Beranda",
		link: "/",
	},
	{
		label: "Tentang",
		link: "/",
	},
	{
		label: "Cara Pakai",
		link: "/",
	},
	{
		label: "Fitur",
		link: "/",
	},
	{
		label: "Bantuan",
		link: "/",
	},
];
const Navbar = () => {
	return (
		<Header className="bg-foodlink-a-2 justify-between hidden md:flex">
			<div className="container mx-auto  flex justify-between">
				<div className="flex pt-3 justify-center items-center">
					<img src={FoodLinkLogo} alt="food-link-logo" className="w-[200px]" />
				</div>
				<div className="flex gap-14 p-2 justify-center items-center">
					{navbarMenu.map((v, i) => {
						return (
							<Link key={i} to={v.link} className="text-sm font-semibold">
								{v.label}
							</Link>
						);
					})}
				</div>
				<div className="flex gap-2 p-2 justify-center items-center">
					<Button
						type="default"
						shape="round"
						className="bg-foodlink-a-1 w-24  text-white text-sm font-semibold font-poppins"
					>
						Masuk
					</Button>
					<Button
						type="default"
						shape="round"
						className="bg-white text-foodlink-a-1 w-24  text-sm font-semibold font-poppins"
					>
						Daftar
					</Button>
				</div>
			</div>
		</Header>
	);
};
export default Navbar;
