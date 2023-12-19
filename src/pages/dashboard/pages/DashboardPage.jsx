import { Breadcrumb, Input, Typography } from "antd";
import LayoutWrapper from "../../../components/layout/LayoutWrapper";
import CanteenCard from "../components/CanteenCard";
import GeneralPagination from "../../../components/pagination/GeneralPagination";
import Kantin1 from "../../../assets/images/canteen/1.png";
import Kantin2 from "../../../assets/images/canteen/2.png";
import Kantin3 from "../../../assets/images/canteen/3.png";
import Kantin4 from "../../../assets/images/canteen/4.png";

const dummyCanteenData = [
	{
		name: "Kantin Teknik 1",
		rating: 5,
		image: Kantin1,
	},
	{
		name: "Kantin Teknik 2",
		rating: 5,
		image: Kantin2,
	},
	{
		name: "Kantin Teknik 3",
		rating: 5,
		image: Kantin3,
	},
	{
		name: "Kantin Teknik 4",
		rating: 5,
		image: Kantin4,
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
