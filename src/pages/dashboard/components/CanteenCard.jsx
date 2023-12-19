import { StarFilled } from "@ant-design/icons";
import { Button, Card, Typography } from "antd";
import { useNavigate } from "react-router-dom";

const CanteenCard = ({ data }) => {
	const navigate = useNavigate();

	return (
		<Card cover={<img alt="example" src={data.image} />}>
			<Typography className="font-poppins text-base font-semibold">
				{data.name}
			</Typography>
			<Typography className="font-poppins text-sm font-light mt-2">
				<StarFilled className="text-yellow-300 mr-1" /> {data.rating} / 5.0
			</Typography>
			<Button
				onClick={() => navigate("/dashboard/canteen/1/stand")}
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
