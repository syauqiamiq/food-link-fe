import { Breadcrumb, Input, Typography } from "antd";
import LayoutWrapper from "../../../components/layout/LayoutWrapper";
import CanteenCard from "../components/CanteenCard";
import GeneralPagination from "../../../components/pagination/GeneralPagination";

const dummyCanteenData = [
	{
		name: "Kantin Teknik",
		rating: 5,
	},
	{
		name: "Kantin Teknik",
		rating: 5,
	},
	{
		name: "Kantin Teknik",
		rating: 5,
	},
	{
		name: "Kantin Teknik",
		rating: 5,
	},
	{
		name: "Kantin Teknik",
		rating: 5,
	},
	{
		name: "Kantin Teknik",
		rating: 5,
	},
	{
		name: "Kantin Teknik",
		rating: 5,
	},
	{
		name: "Kantin Teknik",
		rating: 5,
	},
	{
		name: "Kantin Teknik",
		rating: 5,
	},
	{
		name: "Kantin Teknik",
		rating: 5,
	},
	{
		name: "Kantin Teknik",
		rating: 5,
	},
	{
		name: "Kantin Teknik",
		rating: 5,
	},
];

const DashboardPage = () => {
	const onSearch = (value, _e, info) => console.log(info?.source, value);
	return (
		<LayoutWrapper>
			<div className="container mx-auto">
				<div className="flex flex-col mt-14">
					<Breadcrumb
						className="mb-5"
						items={[
							{
								title: "Dashboard",
							},
							{
								title: "Kantin",
							},
						]}
					/>
					<Typography className="font-poppins text-lg font-semibold">
						Selamat Datang, Syauqi
					</Typography>
					<Typography className="font-poppins text-base font-normal">
						Pilihan kantin yang tersedia pada instansimu
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
								<CanteenCard data={v} />
							</div>
						);
					})}
				</div>
			</div>
		</LayoutWrapper>
	);
};

export default DashboardPage;
