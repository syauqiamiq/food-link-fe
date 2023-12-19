import { Breadcrumb, Input, Typography } from "antd";
import LayoutWrapper from "../../../components/layout/LayoutWrapper";
import StandCard from "../components/StandCard";
import GeneralPagination from "../../../components/pagination/GeneralPagination";
import Stand1 from "../../../assets/images/stand/8.png";
import Stand2 from "../../../assets/images/stand/1.png";
import Stand3 from "../../../assets/images/stand/2.png";
import Stand4 from "../../../assets/images/stand/3.png";
import Stand5 from "../../../assets/images/stand/4.png";
import Stand6 from "../../../assets/images/stand/5.png";

const dummyCanteenData = [
	{
		name: "Bakso Rusuk",
		rating: 5,
		image: Stand1,
	},
	{
		name: "Soto Ayam Madura Bang Jon",
		rating: 5,
		image: Stand2,
	},
	{
		name: "Warung Mekar Jaya",
		rating: 5,
		image: Stand3,
	},
	{
		name: "Es Teler Sempet Sayang",
		rating: 5,
		image: Stand4,
	},
	{
		name: "Tahu Telor Enak",
		rating: 5,
		sold: 30,
		image: Stand5,
	},
	{
		name: "Kebab Baba Rafi",
		rating: 5,
		sold: 255,
		image: Stand6,
	},
];

const ListStandPage = () => {
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
								title: "Stand",
							},
						]}
					/>
					<Typography className="font-poppins text-lg font-semibold">
						Stand pada Kantin Teknik
					</Typography>
					<Typography className="font-poppins text-base font-normal">
						Pilihan stand yang tersedia pada kantin ini
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
								<StandCard data={v} />
							</div>
						);
					})}
				</div>
			</div>
		</LayoutWrapper>
	);
};

export default ListStandPage;
