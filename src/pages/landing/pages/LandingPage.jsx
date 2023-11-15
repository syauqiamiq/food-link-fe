import { Button } from "antd";
import ILSection1 from "../../../../public/assets/illustration/illustration-1.png";
import LayoutWrapper from "../../../components/layout/LayoutWrapper";

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
					<img src={ILSection1} />
				</div>
			</div>
		</LayoutWrapper>
	);
};

export default LandingPage;
