import { Typography } from "antd";
import LayoutWrapper from "../../../components/layout/LayoutWrapper";
import ProductCard from "../components/ProductCard";

const dummyCanteenData = [
	{
		name: "Nasi telor ceplok",
		price: 7000,
		discount: 0,
		category: "Makanan",
		rating: 3.8,
		sold: 10,
	},
	{
		name: "Nasi cumi hitam",
		price: 18000,
		discount: 3000,
		rating: 5,
		category: "Makanan",
		sold: 300,
	},
	{
		name: "Nasi goreng jawa",
		price: 10000,
		discount: 0,
		category: "Makanan",
		rating: 5,
		sold: 100,
	},
	{
		name: "Es teh jumbo",
		price: 5000,
		discount: 0,
		category: "Minuman",
		rating: 4.1,
		sold: 30,
	},
	{
		name: "Es jeruk manis",
		price: 5000,
		discount: 0,
		rating: 5,
		category: "Minuman",
		sold: 30,
	},
	{
		name: "Nasi rendang daging",
		price: 20000,
		discount: 5000,
		category: "Makanan",
		rating: 5,
		sold: 255,
	},
];

const ListProductPage = () => {
	return (
		<LayoutWrapper>
			<div className="container mx-auto">
				<div className="flex flex-col mt-14">
					<Typography className="font-poppins text-lg font-semibold">
						Product pada stand Warung Mekar Jaya
					</Typography>
					<Typography className="font-poppins text-base font-normal">
						Pilihan produk yang tersedia pada stand ini
					</Typography>
				</div>
				<div className=" grid grid-cols-12 my-10 gap-3 ">
					{dummyCanteenData.map((v, i) => {
						return (
							<div key={i} className="col-span-6 md:col-span-3">
								<ProductCard data={v} />
							</div>
						);
					})}
				</div>
			</div>
		</LayoutWrapper>
	);
};

export default ListProductPage;
