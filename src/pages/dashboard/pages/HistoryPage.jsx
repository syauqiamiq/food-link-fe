import { Breadcrumb, Tabs, Typography } from "antd";
import LayoutWrapper from "../../../components/layout/LayoutWrapper";
import AllTransactionTab from "../components/tabs/AllTransactionTab";

const HistoryPage = () => {
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
								title: "Riwayat Transaksi",
							},
						]}
					/>
					<Typography className="font-poppins text-lg font-semibold">
						Riwayat Transaksi
					</Typography>
					<Typography className="font-poppins text-base font-normal">
						Riwayat transaksi pemesanan yang pernah kamu lakukan!
					</Typography>
				</div>
				<Tabs
					defaultActiveKey="1"
					tabPosition="top"
					className="mt-10"
					centered
					items={[
						{
							label: `All Transaction`,
							key: 1,
							children: <AllTransactionTab />,
						},
						{
							label: `Success`,
							key: 2,
							children: <AllTransactionTab />,
						},
						{
							label: `Pending`,
							key: 3,
							children: <AllTransactionTab />,
						},
						{
							label: `Failure`,
							key: 4,
							children: <AllTransactionTab />,
						},
					]}
				/>
			</div>
		</LayoutWrapper>
	);
};

export default HistoryPage;
