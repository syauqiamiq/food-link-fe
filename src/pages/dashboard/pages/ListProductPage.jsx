import { Breadcrumb, Input, Typography } from "antd";
import LayoutWrapper from "../../../components/layout/LayoutWrapper";
import ProductCard from "../components/ProductCard";
import GeneralPagination from "../../../components/pagination/GeneralPagination";
import Product1 from "../../../assets/images/product/1.png";
import Product2 from "../../../assets/images/product/2.png";
import Product3 from "../../../assets/images/product/3.png";
import Product4 from "../../../assets/images/product/4.png";
import Product5 from "../../../assets/images/product/5.png";
import Product6 from "../../../assets/images/product/6.png";

const dummyCanteenData = [
	{
		id: 1,
		name: "Nasi cumi hitam",
		price: 7000,
		discount: 0,
		category: "Makanan",
		rating: 3.8,
		sold: 10,
		image: Product1,
	},
	{
		id: 2,
		name: "Bakso seger",
		price: 18000,
		discount: 3000,
		rating: 5,
		category: "Makanan",
		sold: 300,
		image: Product2,
	},
	{
		id: 3,
		name: "Mie Ayam",
		price: 10000,
		discount: 0,
		category: "Makanan",
		rating: 5,
		sold: 100,
		image: Product3,
	},
	{
		id: 4,
		name: "Es jeruk jumbo",
		price: 5000,
		discount: 0,
		category: "Minuman",
		rating: 4.1,
		sold: 30,
		image: Product4,
	},
	{
		id: 5,
		name: "Es teh manis",
		price: 5000,
		discount: 0,
		rating: 5,
		category: "Minuman",
		sold: 30,
		image: Product5,
	},
	{
		id: 6,
		name: "Extrajoss Susu",
		price: 10000,
		discount: 5000,
		category: "Minuman",
		rating: 5,
		sold: 255,
		image: Product6,
	},
];

const ListProductPage = () => {
	const onSearch = (value, _e, info) => console.log(info?.source, value);
	return (
		<LayoutWrapper>
			<div className="container mx-auto">
				<div className="flex flex-col mt-14">
					<Breadcrumb
						className="mb-5"
						items={[
							{
								title: <a href="/dashboard">Dashboard</a>,
							},
							{
								title: <a href="/dashboard">Kantin</a>,
							},
							{
								title: <a href="/dashboard/canteen/1/stand">Stand</a>,
							},
							{
								title: "Produk",
							},
						]}
					/>
					<Typography className="font-poppins text-lg font-semibold">
						Product pada stand Warung Mekar Jaya
					</Typography>
					<Typography className="font-poppins text-base font-normal">
						Pilihan produk yang tersedia pada stand ini
					</Typography>
				</div>
				<div className="grid grid-cols-12 mt-5 gap-5">
					<div className="col-span-12 md:col-span-6">
						<Input.Search
							placeholder="Cari transaksi.."
							size="large"
							onSearch={onSearch}
						/>
					</div>

					<div className="col-span-12 md:col-span-6 flex justify-end">
						<GeneralPagination />
					</div>
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
