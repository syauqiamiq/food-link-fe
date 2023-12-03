import ACLayoutWrapper from "../../../../components/layout/ACLayoutWrapper";

const ACDashboardPage = () => {
	return (
		<ACLayoutWrapper
			breadcrumbItem={[
				{
					title: "Dasbor",
				},
			]}
			title="Selamat Datang, Syauqi!"
			subTitle="Nikmati fitur - fitur yang tersedia pada dasbor kamu"
		></ACLayoutWrapper>
	);
};

export default ACDashboardPage;
