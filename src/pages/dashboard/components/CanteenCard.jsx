import { StarFilled } from "@ant-design/icons";
import { Button, Card, Typography } from "antd";

const CanteenCard = ({ data }) => {
	return (
		<Card
			cover={
				<img
					alt="example"
					src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
				/>
			}
		>
			<Typography className="font-poppins text-base font-semibold">
				{data.name}
			</Typography>
			<Typography className="font-poppins text-sm font-light mt-2">
				<StarFilled className="text-yellow-300 mr-1" /> {data.rating} / 5.0
			</Typography>
			<Button
				type="default"
				shape="round"
				className="w-full bg-foodlink-a-1 mt-5 text-white text-sm font-semibold font-poppins"
			>
				Lihat
			</Button>
		</Card>
	);
};

export default CanteenCard;
