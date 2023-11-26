import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import {
	Button,
	Divider,
	Drawer,
	Input,
	Space,
	Tooltip,
	Typography,
} from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
	decreaseCartQuantity,
	increaseCartQuantity,
} from "../../store/cartSlice";
import { rupiahFormatter } from "../../lib/functions/currency";
import { useEffect, useState } from "react";

const CartDrawer = ({ position = "right", open, onClose }) => {
	const dispatch = useDispatch();
	const cartStateData = useSelector((state) => state.cart.value);
	const [totalPrice, setTotalPrice] = useState(0);
	const [totalDiscount, setTotalDiscount] = useState(0);
	const [totalPriceAfterDiscount, setTotalPriceAfterDiscount] = useState(0);
	useEffect(() => {
		let totalFixedPrice = 0;
		let totalFixedPriceAfterDiscount = 0;
		let totalDiscount = 0;
		cartStateData?.forEach((v) => {
			totalDiscount += v.discount;
			const priceAfterDiscount = v.price - v.discount;
			totalFixedPrice += v.price * v.quantity;
			totalFixedPriceAfterDiscount += priceAfterDiscount * v.quantity;
		});
		setTotalPrice(totalFixedPrice);
		setTotalPriceAfterDiscount(totalFixedPriceAfterDiscount);
		setTotalDiscount(totalDiscount);
	}, [cartStateData]);

	return (
		<>
			<Drawer
				title="Informasi Pemesanan"
				placement={position}
				width={500}
				onClose={onClose}
				open={open}
				extra={
					<Space>
						<Button shape="round" onClick={onClose}>
							Batal
						</Button>
						<Button
							type="default"
							shape="round"
							className="bg-foodlink-a-1 w-24  text-white text-sm font-semibold font-poppins"
						>
							Bayar
						</Button>
					</Space>
				}
			>
				<div className="flex flex-col gap-3">
					<Input addonBefore="PROMO" placeholder="Insert your promo code..." />
					<div className="flex flex-col gap-1">
						<Typography className="font-poppins text-lg font-semibold">
							Ringkasan Pembayaran
						</Typography>
						<div className="flex justify-between">
							<Typography className="font-poppins text-base font-normal">
								Harga
							</Typography>
							<div className="flex items-center gap-3">
								{totalDiscount > 0 && (
									<Typography className="font-poppins text-base font-light italic line-through">
										{totalPrice ? rupiahFormatter(totalPrice) : "-"}
									</Typography>
								)}
								<Typography className="font-poppins text-base font-normal">
									{totalPriceAfterDiscount
										? rupiahFormatter(totalPriceAfterDiscount)
										: "-"}
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
								{totalPriceAfterDiscount
									? rupiahFormatter(totalPriceAfterDiscount)
									: "-"}
							</Typography>
						</div>
					</div>
					{cartStateData?.map((v, i) => {
						return (
							<div
								key={i}
								className="flex bg-foodlink-a-2  w-full h-24 rounded-lg p-5 mt-3"
							>
								<div className="flex w-full justify-between">
									<div className="flex flex-col gap-2">
										<Typography className="font-poppins text-base font-semibold line-clamp-2">
											{v.name}
										</Typography>
										<div className="flex items-center gap-3">
											<Tooltip title="Tambah Quantity">
												<Button
													onClick={() => dispatch(decreaseCartQuantity(v.id))}
													className="bg-foodlink-a-1"
													type="primary"
													shape="default"
													size="small"
													icon={<MinusOutlined />}
												/>
											</Tooltip>
											<Typography className="font-poppins text-base font-normal">
												{
													cartStateData?.find((x) => {
														return x.id === v.id;
													})?.quantity
												}
											</Typography>
											<Tooltip title="Tambah Quantity">
												<Button
													onClick={() => dispatch(increaseCartQuantity(v.id))}
													className="bg-foodlink-a-1"
													type="primary"
													shape="default"
													size="small"
													icon={<PlusOutlined />}
												/>
											</Tooltip>
										</div>
									</div>
									<div className="flex flex-col justify-center">
										{v.price && v.discount > 0 && (
											<Typography className="font-poppins text-base font-light italic line-through">
												{rupiahFormatter(v.price * v.quantity)}
											</Typography>
										)}

										<Typography className="font-poppins text-base font-normal">
											{v.price
												? rupiahFormatter((v.price - v.discount) * v.quantity)
												: "-"}
										</Typography>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</Drawer>
		</>
	);
};
export default CartDrawer;
