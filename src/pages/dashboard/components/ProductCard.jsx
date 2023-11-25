import { StarFilled } from "@ant-design/icons";
import { Button, Card, Tag, Typography } from "antd";
import { rupiahFormatter } from "../../../lib/functions/currency";

const ProductCard = ({ data }) => {
	return (
		<Card
			className=" flex flex-col h-full"
			cover={
				<img
					alt="example"
					src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
				/>
			}
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
									{data.discount ? rupiahFormatter(data.discount) : "-"}{" "}
								</Typography>
								<Tag color="lime">Promo</Tag>
							</div>
						)}
						<Typography className="font-poppins text-lg font-semibold">
							{data.price ? rupiahFormatter(data.price) : "-"}
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
				<div className="grid grid-cols-2 gap-2">
					<div className="col-span-2 md:col-span-1">
						<Button
							type="default"
							shape="round"
							className="w-full bg-foodlink-a-1 mt-5 text-white text-sm font-semibold font-poppins"
						>
							Keranjang
						</Button>
					</div>
				</div>
			</div>
		</Card>
	);
};

export default ProductCard;
