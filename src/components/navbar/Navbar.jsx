import { HistoryOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Badge, Button, Layout } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import FoodLinkLogo from "../../assets/logo/foodlink-logo.png";
import { initiateCart } from "../../store/cartSlice";
import CartDrawer from "../cart-dialog/CartDrawer";
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
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const cartStateData = useSelector((state) => state.cart.value);
	const [openCartDrawer, setOpenCartDrawer] = useState(false);

	useEffect(() => {
		dispatch(initiateCart());
	}, []);

	const location = useLocation();

	return (
		<>
			<Header className="bg-foodlink-a-2 justify-between hidden md:flex">
				<div className="container mx-auto  flex justify-between">
					<div className="flex pt-3 justify-center items-center">
						<img
							src={FoodLinkLogo}
							alt="food-link-logo"
							className="w-[200px]"
						/>
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
						{location.pathname !== "/" && (
							<>
								<Badge
									className="mr-4"
									showZero={!cartStateData && true}
									count={cartStateData?.length ?? 0}
								>
									<ShoppingCartOutlined
										onClick={() => setOpenCartDrawer(true)}
										className="text-2xl cursor-pointer"
									/>
								</Badge>

								<HistoryOutlined
									onClick={() => navigate("/dashboard/transaction-history")}
									className="text-2xl cursor-pointer 	mr-4"
								/>
							</>
						)}

						<Button
							onClick={() => navigate("/auth/login")}
							type="default"
							shape="round"
							className="bg-foodlink-a-1 w-24  text-white text-sm font-semibold font-poppins"
						>
							Masuk
						</Button>
						<Button
							onClick={() => navigate("/auth/register")}
							type="default"
							shape="round"
							className="bg-white text-foodlink-a-1 w-24  text-sm font-semibold font-poppins"
						>
							Daftar
						</Button>
					</div>
				</div>
			</Header>
			{openCartDrawer && (
				<CartDrawer
					open={openCartDrawer}
					onClose={() => setOpenCartDrawer(false)}
				/>
			)}
		</>
	);
};
export default Navbar;
