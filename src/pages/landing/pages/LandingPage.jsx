import { Button } from "antd";
import ILSection1 from "../../../assets/illustration/illustration-1.png";
import BGSection1 from "../../../assets/images/landing-section-image.png";
import BGKantinKaryawan from "../../../assets/images/kantin-karyawan.png";
import LayoutWrapper from "../../../components/layout/LayoutWrapper";
import ICONFiturClipboard from "../../../assets/icons/fitur-clipboard.png";
import ICONFiturPromo from "../../../assets/icons/fitur-promo.png";
import ICONFiturNote from "../../../assets/icons/fitur-note.png";
import ICONFiturSpoonAndFork from "../../../assets/icons/fitur-fork-spoon.png";

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

const LandingPage = () => {
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
			<div className="container mx-auto grid grid-cols-12 bg-section-purple-light mb-20">
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
		</LayoutWrapper>
	);
};

export default LandingPage;
