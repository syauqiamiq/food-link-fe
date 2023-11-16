import FoodLinkLogo from "../../assets/logo/foodlink-logo.png";
import TwitterIcon from "../../assets/icons/twitter.png";
import FacebookIcon from "../../assets/icons/facebook.png";
import InstagramIcon from "../../assets/icons/instagram.png";
import YoutubeIcon from "../../assets/icons/youtube.png";
import { Button, Divider } from "antd";

const Footer = () => {
	return (
		<>
			<div className="hidden sm:block border-t border-gray-300 bg-foodlink-a-2 border-solid">
				<div className="container mx-auto flex w-full h-[400px] mb-5">
					<div className="grid grid-cols-12 gap-x-10 w-full">
						<div className="col-span-12 flex justify-between items-center">
							<img
								src={FoodLinkLogo}
								alt="foodlink-logo"
								className="w-[200px]"
							/>
							<Button
								type="default"
								size="large"
								className="bg-foodlink-a-1 w-40  text-white text-sm font-semibold font-poppins"
							>
								Masuk
							</Button>
						</div>
						<div className="col-span-12 flex justify-between items-center">
							<Divider className="bg-foodlink-a-4" />
						</div>

						<div className="col-span-4 flex">
							<p className="text-justify text-sm font-poppins">
								Sebuah platform berbasis web yang menyediakan fasilitas untuk
								mengelola manajemen kantin dan proses bisnis kantin agar menjadi
								lebih efisien dan fleksibel. Fitur utama website meliputi
								manajemen stok, promo, pemesanan secara online dan pengambilan
								makanan.
							</p>
						</div>
						<div className="col-span-4 text-start">
							<h6 className="font-semibold text-2xl font-poppins">
								Link Berguna
							</h6>
							<p className="font-poppins font-normal text-sm mt-3">Beranda</p>
							<p className="font-poppins font-normal text-sm mt-1">Tentang</p>
							<p className="font-poppins font-normal text-sm mt-1">
								Cara Pakai
							</p>
							<p className="font-poppins font-normal text-sm mt-1">Fitur</p>
						</div>
						<div className="col-span-4 text-start">
							<h6 className="font-semibold text-2xl font-poppins">
								Hubungi Kami
							</h6>
							<p className="font-poppins font-normal text-sm mt-3">
								Jl. Harsono RM. No. 3, Gedung D Lantai 3 Ragunan Jakarta 12550
								Indonesia
							</p>
							<p className="font-poppins font-normal text-sm mt-1">
								Phone : 081234567890
							</p>
							<p className="font-poppins font-normal text-sm mt-1">
								Email : help@ladangku.id
							</p>
							<div className="flex gap-5 mt-10">
								<div className="bg-white rounded-full p-1">
									<img
										src={TwitterIcon}
										alt="facebook-icon"
										width={24}
										height={24}
										className="bg-white rounded-full"
									/>
								</div>
								<div className="bg-white rounded-full p-1">
									<img
										src={FacebookIcon}
										alt="facebook-icon"
										width={24}
										height={24}
										className="bg-white rounded-full"
									/>
								</div>
								<div className="bg-white rounded-full p-1">
									<img
										src={InstagramIcon}
										alt="facebook-icon"
										width={24}
										height={24}
									/>
								</div>
								<div className="bg-white rounded-full p-1">
									<img
										src={YoutubeIcon}
										alt="facebook-icon"
										width={24}
										height={24}
										className="bg-white rounded-full"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="border-t border-foodlink-a-4 p-5 flex w-full justify-center text-center border-solid bg-foodlink-a-2">
				<h6 className="font-poppins text-foodlink-a-5 text-sm font-light">
					Copyright <span className="font-bold font-poppins">Foodlink.id</span>{" "}
					All Rights Reserved, 2023
				</h6>
			</div>
		</>
	);
};

export default Footer;
