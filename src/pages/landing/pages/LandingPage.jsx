import { UserOutlined } from "@ant-design/icons";
import { Avatar, Button } from "antd";
import ICONFiturClipboard from "../../../assets/icons/fitur-clipboard.png";
import ICONFiturSpoonAndFork from "../../../assets/icons/fitur-fork-spoon.png";
import ICONFiturNote from "../../../assets/icons/fitur-note.png";
import ICONFiturPromo from "../../../assets/icons/fitur-promo.png";
import ICONInstagramColor from "../../../assets/icons/instagram-color.png";
import ICONPhoneColor from "../../../assets/icons/phone-color.png";
import ICONWhatsapColor from "../../../assets/icons/whatsapp-color.png";
import ILSection1 from "../../../assets/illustration/illustration-1.png";
import ILPersonExample from "../../../assets/illustration/person-example.jpeg";
import BGKantinKaryawan from "../../../assets/images/kantin-karyawan.png";
import BGSection1 from "../../../assets/images/landing-section-image.png";
import LayoutWrapper from "../../../components/layout/LayoutWrapper";
import { useNavigate } from "react-router-dom";

const fiturSection = [
	{
		title: "Manajemen Stok",
		icon: ICONFiturClipboard,
		description: "Pemantauan dan pengelolaan persediaan kantin",
	},
	{
		title: "Promo",
		icon: ICONFiturPromo,
		description: "Penawaran khusus untuk meningkatkan penjualan",
	},
	{
		title: "Pemesanan Online",
		icon: ICONFiturNote,
		description: "Pemesanan makanan dengan mudah",
	},
	{
		title: "Pengambilan Makanan",
		icon: ICONFiturSpoonAndFork,
		description: "Proses pengambilan makanan yang efisien",
	},
];
const solusiSection = [
	{
		icon: ICONWhatsapColor,
		description: "WhatsApps",
	},
	{
		icon: ICONInstagramColor,
		description: "Instagram",
	},
	{
		title: "Pemesanan Online",
		icon: ICONPhoneColor,
		description: "Telephone",
	},
];

const LandingPage = () => {
	const navigate = useNavigate();
	return (
		<LayoutWrapper>
			<div className="container mx-auto grid grid-cols-12 py-20 ">
				<div className="col-span-12 md:col-span-6 md:p-15 p-10 justify-center w-full h-full align-middle">
					<h1 className="text-3xl md:text-5xl">
						<span className="font-light">Layanan</span>{" "}
						<span className="font-bold">Administrasi Kantin</span>{" "}
					</h1>
					<p className="text-justify text-black text-sm md:text-lg font-light mt-5">
						Sebuah platform berbasis web yang menyediakan fasilitas untuk
						mengelola manajemen kantin dan proses bisnis kantin agar menjadi
						lebih efisien dan fleksibel. Fitur utama website meliputi manajemen
						stok, promo, pemesanan secara online dan pengambilan makanan.
					</p>
					<div className="w-full md:w-72  mt-16">
						<Button
							type="default"
							shape="default"
							className="w-full h-10 md:h-16 !rounded-2xl bg-foodlink-a-1 font-bold text-base font-poppins"
							onClick={navigate("/dashboard")}
						>
							Selengkapnya
						</Button>
					</div>
				</div>
				<div className="md:col-span-6 md:p-15 p-10 hidden md:flex justify-center items-center">
					<img src={ILSection1} alt="Section1BG" />
				</div>
			</div>
			<div
				className="bg-cover bg-center bg-no-repeat min-h-[600px] w-full flex"
				style={{
					backgroundImage: `url(${BGSection1})`,
				}}
			>
				<div className="container mx-auto grid grid-cols-12 bg-section-purple-light">
					<div className="col-span-12 md:col-span-6 md:flex p-10 md:flex-col w-full justify-center items-center ">
						<img
							src={BGKantinKaryawan}
							alt="section-1"
							width={500}
							height={500}
						/>
					</div>
					<div className="col-span-12 md:col-span-6 p-10 md:flex md:flex-col w-full h-full justify-center">
						<div className="flex">
							<h1 className="text-3xl md:text-5xl text-start font-semibold">
								Solusi layanan makanan bagi instansi atau institusi.
							</h1>
						</div>
						<p className="text-justify text-black text-lg font-light mt-5">
							Pengalaman pelanggan yang lebih baik, peningkatan efisiensi
							operasional, dan manajemen inventaris yang lebih terkontrol,
							implementasi solusi ini akan menjadi tonggak penting dalam
							transformasi layanan makanan bagi institusi atau instansi dengan
							kantin berkapasitas besar.
						</p>
						<div className="flex text-start mt-5 md:mt-5 hover:cursor-pointer">
							<span className="text-foodlink-a-3 text-base font-medium font-poppins">
								Baca Selengkapnya
							</span>
						</div>
					</div>
				</div>
			</div>
			<div className="container mx-auto grid grid-cols-12 bg-section-purple-light mb-16">
				<div className="col-span-12 md:flex p-10 md:flex-col w-full justify-center items-center">
					<h1 className="text-3xl md:text-5xl font-poppins font-semibold text-center">
						Fitur yang Kami
					</h1>
					<h1 className="text-3xl md:text-5xl font-poppins font-semibold text-center mt-3">
						Tawarkan
					</h1>
				</div>
			</div>
			<div className="container mx-auto grid grid-cols-12 bg-section-purple-light mb-20 p-5">
				{fiturSection.map((v, i) => {
					return (
						<div
							key={i}
							className="col-span-12 md:col-span-3  md:flex md:flex-col w-full min-h-[250px] justify-between items-center"
						>
							<div className="flex flex-col justify-center items-center gap-5">
								<h2 className="text-lg md:text-2xl font-bold font-poppins">
									{v.title}
								</h2>
								<img src={v.icon} alt="icon-clipboard" width={66} height={80} />
								<h3 className="text-lg font-extralight text-center font-poppins">
									{v.description}
								</h3>
							</div>
							<h3 className="text-sm md:text-lg font-semibold font-poppins text-center cursor-pointer text-foodlink-a-3">
								Selengkapnya
							</h3>
							<div />
						</div>
					);
				})}
			</div>
			<div className="bg-foodlink-a-4 min-h-[600px] flex flex-col items-center w-full h-full mb-20 p-10">
				<h1 className="font-poppins max-w-[700px] text-center text-3xl font-bold">
					Dipercaya oleh berbagai Instansi dan Institusi di Seluruh Indonesia
				</h1>
				<div className="rounded-lg p-10 md:w-[1000px] min-h-[200px] w-[300px] bg-foodlink-a-2 mt-32 ">
					<div className="flex justify-center h-20">
						<Avatar
							size="large"
							src={ILPersonExample}
							icon={<UserOutlined />}
							className="relative top-[-120px] w-32 h-32 md:w-44 md:h-44"
						/>
					</div>
					<p className="font-poppins text-lg md:text-2xl italic font-medium text-center">
						{'"'}Dengan platform ini, manajemen kantin kami menjadi lebih
						teratur. Manajemen stok efisien mencegah kekurangan persediaan,
						fitur promo memberikan fleksibilitas pemasaran, dan pemesanan online
						memudahkan karyawan. Pengambilan makanan yang lancar meningkatkan
						efisiensi istirahat. Layanan langganan memberikan nilai tambah bagi
						bisnis kami. Terima kasih atas inovasi yang memajukan bisnis kantin
						kami! {'"'}
					</p>
					<h6>
						<p className="font-poppins text-2xl italic font-medium text-center mt-20">
							Jessica
						</p>
					</h6>
				</div>
			</div>
			<div className="container mx-auto grid grid-cols-12 bg-section-purple-light mb-20 min-h-[600px] ">
				<div className="col-span-12 flex flex-col w-full min-h-[250px] justify-center items-center">
					<div className="flex flex-col justify-center items-center gap-5">
						<h2 className="text-xl md:text-3xl text-center font-bold font-poppins">
							Solusi Sempurna Untuk Administrasi Kantin Anda!
						</h2>
						<h3 className="text-sm md:text-lg font-extralight text-center font-poppins">
							Hubungi layanan dibawah ini agar kami dapat memberikan penawaran
							terbaik dari website kami
						</h3>
						<div className="grid grid-cols-12 h-full w-full gap-3 p-2">
							{solusiSection.map((v, i) => {
								return (
									<div
										key={i}
										className="col-span-12 md:col-span-4 bg-foodlink-a-2 rounded-lg flex flex-col justify-center items-center w-full h-[120px]"
									>
										<img src={v.icon} alt="icon" width={66} height={80} />
										<h6 className="text-sm font-semibold mt-1">
											{v.description}
										</h6>
									</div>
								);
							})}
						</div>
					</div>
					<div />
				</div>
			</div>
		</LayoutWrapper>
	);
};

export default LandingPage;
