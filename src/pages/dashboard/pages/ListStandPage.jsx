import { Typography } from "antd";
import LayoutWrapper from "../../../components/layout/LayoutWrapper";
import StandCard from "../components/StandCard";

const dummyCanteenData = [
	{
		name: "Bakso Rusuk",
		rating: 5,
	},
	{
		name: "Soto Ayam Madura Bang Jon",
		rating: 5,
	},
	{
		name: "Warung Mekar Jaya",
		rating: 5,
	},
	{
		name: "Es Teler Sempet Sayang",
		rating: 5,
	},
	{
		name: "Tahu Telor Enak",
		rating: 5,
		sold: 30,
	},
	{
		name: "Kebab Baba Rafi",
		rating: 5,
		sold: 255,
	},
];

const ListStandPage = () => {
	return (
		<LayoutWrapper>
			<div className="container mx-auto">
				<div className="flex flex-col mt-14">
					<Typography className="font-poppins text-lg font-semibold">
						Stand pada Kantin Teknik
					</Typography>
					<Typography className="font-poppins text-base font-normal">
						Pilihan stand yang tersedia pada kantin ini
					</Typography>
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
