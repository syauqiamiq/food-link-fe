import { Breadcrumb, Input, Typography } from "antd";
import LayoutWrapper from "../../../components/layout/LayoutWrapper";
import ProductCard from "../components/ProductCard";
import GeneralPagination from "../../../components/pagination/GeneralPagination";

const dummyCanteenData = [
	{
		id: 1,
		name: "Nasi telor ceplok",
		price: 7000,
		discount: 0,
		category: "Makanan",
		rating: 3.8,
		sold: 10,
	},
	{
		id: 2,
		name: "Nasi cumi hitam",
		price: 18000,
		discount: 3000,
		rating: 5,
		category: "Makanan",
		sold: 300,
	},
	{
		id: 3,
		name: "Nasi goreng jawa",
		price: 10000,
		discount: 0,
		category: "Makanan",
		rating: 5,
		sold: 100,
	},
	{
		id: 4,
		name: "Es teh jumbo",
		price: 5000,
		discount: 0,
		category: "Minuman",
		rating: 4.1,
		sold: 30,
	},
	{
		id: 5,
		name: "Es jeruk manis",
		price: 5000,
		discount: 0,
		rating: 5,
		category: "Minuman",
		sold: 30,
	},
	{
		id: 6,
		name: "Nasi rendang daging",
		price: 20000,
		discount: 5000,
		category: "Makanan",
		rating: 5,
		sold: 255,
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
