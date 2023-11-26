import { Breadcrumb, Button, Divider, Tag, Typography } from "antd";
import LayoutWrapper from "../../../components/layout/LayoutWrapper";
import { rupiahFormatter } from "../../../lib/functions/currency";
import DetailTransactionProductCard from "../components/DetailTransactionProductCard";

const DetailHistoryTransactionPage = () => {
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
								title: (
									<a href="/dashboard/transaction-history">Riwayat Transaksi</a>
								),
							},
							{
								title: "Riwayat Transaksi",
							},
						]}
					/>
					<Typography className="font-poppins text-lg font-semibold">
						Detail Riwayat Transaksi
					</Typography>
					<Typography className="font-poppins text-base font-normal">
						Rincian detail transaksimu!
					</Typography>
				</div>
				<div className="grid grid-cols-12 gap-4 my-10">
					<div className="col-span-12 md:col-span-8 flex flex-col gap-3">
						<div className="rounded-lg shadow-lg w-full p-5">
							<Typography className="font-poppins font-semibold text-lg">
								Informasi Pemesanan
							</Typography>
						</div>
						<div className="rounded-lg shadow-lg w-full p-5">
							<div className=" flex flex-col gap-2">
								<Typography className="font-poppins text-base font-semibold">
									Nomor Invoice Pesanan
								</Typography>
								<Typography className="font-poppins text-base font-normal">
									9ab3db15-fc23-4054-83e0-5bd962257793
								</Typography>
							</div>
							<div className=" mt-5 flex flex-col gap-2">
								<Typography className="font-poppins text-base font-normal">
									Friday, January 1, 2023
								</Typography>
								<Typography className="font-poppins text-base font-semibold">
									Hafiz Habani
								</Typography>
								<Typography className="font-poppins text-base font-normal">
									6286322344558
								</Typography>
							</div>
							<div className="mt-5 flex flex-col gap-2">
								<Typography className="font-poppins text-base font-semibold">
									Status Pemesanan
								</Typography>
								<Tag className="w-32 text-center" color="success">
									Sudah diambil
								</Tag>
							</div>
							<div className="mt-5 flex flex-col gap-3">
								<Typography className="font-poppins text-base font-semibold">
									Status Pembayaran
								</Typography>
								<Tag className="w-32 text-center" color="success">
									Sukses
								</Tag>
								<Button
									type="default"
									shape="round"
									className="bg-foodlink-a-1 mt-5 text-white text-sm font-semibold font-poppins"
								>
									Cek Status Pembayaran
								</Button>
								<Button
									shape="round"
									className=" text-foodlink-a-1 text-sm font-semibold font-poppins"
								>
									Download Invoice
								</Button>
							</div>
						</div>
						<div className="rounded-lg shadow-lg w-full p-5">
							<Typography className="font-poppins font-semibold text-lg">
								Detail Produk
							</Typography>
							<div className="grid grid-cols-12">
								{[1, 2, 3].map((v, i) => {
									return (
										<div key={i} className="col-span-12">
											<DetailTransactionProductCard />
										</div>
									);
								})}
							</div>
						</div>
					</div>
					<div className="col-span-12 md:col-span-4 flex flex-col gap-3">
						<div className="rounded-lg shadow-lg w-full p-5">
							<Typography className="font-poppins font-semibold text-lg">
								Detail Pembayaran
							</Typography>
						</div>
						<div className="rounded-lg shadow-lg w-full p-5">
							<div className="flex justify-between">
								<Typography className="font-poppins text-base font-normal">
									Harga
								</Typography>
								<div className="flex items-center gap-3">
									<Typography className="font-poppins text-base font-normal">
										{rupiahFormatter(25000)}
									</Typography>
								</div>
							</div>
							<div className="flex justify-between">
								<Typography className="font-poppins text-base font-normal">
									Promo
								</Typography>
								<Typography className="font-poppins text-base font-normal">
									{"-"}
								</Typography>
							</div>
							<div className="flex justify-between">
								<Typography className="font-poppins text-base font-normal">
									Pajak
								</Typography>
								<Typography className="font-poppins text-base font-normal">
									{"-"}
								</Typography>
							</div>
							<Divider className="bg-foodlink-a-4" />
							<div className="flex justify-between">
								<Typography className="font-poppins text-lg font-semibold">
									Total Pembayaran
								</Typography>
								<Typography className="font-poppins text-base font-normal">
									{rupiahFormatter(25000)}
								</Typography>
							</div>
						</div>
					</div>
				</div>
			</div>
		</LayoutWrapper>
	);
};

export default DetailHistoryTransactionPage;
