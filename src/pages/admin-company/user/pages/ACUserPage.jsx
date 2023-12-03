import { Button } from "antd";
import ACLayoutWrapper from "../../../../components/layout/ACLayoutWrapper";
import { baseAdminCompanyPath } from "../../../../constants/menu-items";
import ACUserTable from "../components/ACUserTable";

const ACUserPage = () => {
	return (
		<ACLayoutWrapper
			breadcrumbItem={[
				{
					title: <a href={`${baseAdminCompanyPath}/dashboard`}>Dasbor</a>,
				},
				{
					title: "Pengguna",
				},
			]}
			title="Pengguna"
			subTitle="Daftar pengguna yang terdaftar di perusahaanmu"
		>
			<div className="rounded-xl p-5 bg-white flex flex-col w-full">
				<div className="flex justify-end items-start w-full">
					<Button
						type="default"
						shape="round"
						className="bg-foodlink-a-1 text-white text-sm font-semibold font-poppins"
					>
						Tambah Pengguna
					</Button>
				</div>
				<ACUserTable />
			</div>
		</ACLayoutWrapper>
	);
};

export default ACUserPage;
