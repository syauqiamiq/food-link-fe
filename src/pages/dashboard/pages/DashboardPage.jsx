import { Typography } from "antd";
import LayoutWrapper from "../../../components/layout/LayoutWrapper";
import CanteenCard from "../components/CanteenCard";

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
	return (
		<LayoutWrapper>
			<div className="container mx-auto">
				<div className="flex flex-col mt-14">
					<Typography className="font-poppins text-lg font-semibold">
						Selamat Datang, Syauqi
					</Typography>
					<Typography className="font-poppins text-base font-normal">
						Pilihan kantin yang tersedia pada instansimu
					</Typography>
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
