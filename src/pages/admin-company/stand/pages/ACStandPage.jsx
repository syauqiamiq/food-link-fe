import { Button } from "antd";
import ACLayoutWrapper from "../../../../components/layout/ACLayoutWrapper";
import { baseAdminCompanyPath } from "../../../../constants/menu-items";
import ACStandTable from "../components/ACStandTable";

const ACStandPage = () => {
	return (
		<ACLayoutWrapper
			breadcrumbItem={[
				{
					title: <a href={`${baseAdminCompanyPath}/dashboard`}>Dasbor</a>,
				},
				{
					title: (
						<a href={`${baseAdminCompanyPath}/dashboard/canteen`}>Kantin</a>
					),
				},
				{
					title: "Stand",
				},
			]}
			title="Stand"
			subTitle="Daftar stand yang terdaftar di kantin ini"
		>
			<div className="rounded-xl p-5 bg-white flex flex-col w-full">
				<div className="flex justify-end items-start w-full">
					<Button
						type="default"
						shape="round"
						className="bg-foodlink-a-1 text-white text-sm font-semibold font-poppins"
					>
						Tambah Stand
					</Button>
				</div>
				<ACStandTable />
			</div>
		</ACLayoutWrapper>
	);
};

export default ACStandPage;
