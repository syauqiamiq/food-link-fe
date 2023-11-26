import { Button, Tag, Typography } from "antd";

import { rupiahFormatter } from "../../../lib/functions/currency";
import { useNavigate } from "react-router-dom";

const TransactionHistoryCard = () => {
	const navigate = useNavigate();
	return (
		<div className="flex border-2   w-full min-h-[50px]  rounded-lg p-5 mt-3">
			<div className="flex w-full justify-between">
				<div className="flex flex-col gap-2">
					<Typography className="font-poppins text-base font-semibold">
						Pesanan #{"9ab3db15-fc23-4054-83e0-5bd962257793"}
					</Typography>
					<Typography className="font-poppins text-base font-normal">
						Friday, January 1, 2023
					</Typography>
					<Typography className="font-poppins text-base font-normal">
						11.30 AM
					</Typography>
					<Tag className="w-20" color="success">
						SUCCESS
					</Tag>
				</div>
				<div className="flex flex-col justify-center items-center gap-2">
					<Typography className="font-poppins text-base font-normal ">
						{rupiahFormatter(10000)}
					</Typography>
					<Button
						onClick={() => navigate(`/dashboard/transaction-history/1/detail`)}
						type="default"
						shape="round"
						className="bg-foodlink-a-1   text-white text-sm font-semibold font-poppins"
					>
						Lihat Detail
					</Button>
				</div>
			</div>
		</div>
	);
};

export default TransactionHistoryCard;
