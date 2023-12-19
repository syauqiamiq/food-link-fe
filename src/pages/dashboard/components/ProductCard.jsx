import { MinusOutlined, PlusOutlined, StarFilled } from "@ant-design/icons";
import { Button, Card, Tag, Tooltip, Typography } from "antd";
import { rupiahFormatter } from "../../../lib/functions/currency";

import { useDispatch, useSelector } from "react-redux";
import {
	decreaseCartQuantity,
	increaseCartQuantity,
	saveToCart,
} from "../../../store/cartSlice";

const ProductCard = ({ data }) => {
	const dispatch = useDispatch();
	const cartStateData = useSelector((state) => state.cart.value);

	return (
		<Card
			className=" flex flex-col h-full"
			cover={<img alt="example" src={data.image} />}
		>
			<div className="min-h-[210px] flex flex-col h-full justify-between">
				<div>
					<Typography className="font-poppins text-base font-normal line-clamp-2">
						{data.name}
					</Typography>
					<div className="mt-2">
						{data.discount > 0 && (
							<div className="flex g-2">
								<Typography className="font-poppins mr-2 text-foodlink-error text-lg font-normal line-through italic">
									{data.price ? rupiahFormatter(data.price) : "-"}{" "}
								</Typography>
								<Tag color="lime">Diskon</Tag>
							</div>
						)}
						<Typography className="font-poppins text-lg font-semibold">
							{data.price ? rupiahFormatter(data.price - data.discount) : "-"}
						</Typography>
					</div>
					<Typography className="font-poppins text-sm font-light mt-2">
						<StarFilled className="text-yellow-300 mr-0.5" /> {data.rating} |{" "}
						{data.sold > 50 ? "50+" : data.sold} Terjual
					</Typography>
					<Typography className="font-poppins text-sm font-light mt-2">
						{data.category}
					</Typography>
				</div>
				{!cartStateData?.find((x) => {
					return x.id === data.id;
				}) ? (
					<div className="grid grid-cols-2 gap-2">
						<div className="col-span-2 md:col-span-2">
							<Button
								onClick={() => dispatch(saveToCart(data))}
								type="default"
								shape="round"
								className="w-full bg-foodlink-a-1 mt-5 text-white text-sm font-semibold font-poppins"
							>
								Keranjang
							</Button>
						</div>
					</div>
				) : (
					<div className="flex justify-center items-center gap-3">
						<Tooltip title="Tambah Quantity">
							<Button
								onClick={() => dispatch(decreaseCartQuantity(data.id))}
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
									return x.id === data.id;
								})?.quantity
							}
						</Typography>
						<Tooltip title="Tambah Quantity">
							<Button
								onClick={() => dispatch(increaseCartQuantity(data.id))}
								className="bg-foodlink-a-1"
								type="primary"
								shape="default"
								size="small"
								icon={<PlusOutlined />}
							/>
						</Tooltip>
					</div>
				)}
			</div>
		</Card>
	);
};

export default ProductCard;
