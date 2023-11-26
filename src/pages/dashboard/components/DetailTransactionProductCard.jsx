import { Typography } from "antd";

import { rupiahFormatter } from "../../../lib/functions/currency";

const DetailTransactionProductCard = () => {
	return (
		<div className="flex border-2  w-full min-h-[50px]  rounded-lg p-5 mt-3">
			<div className="flex w-full justify-between">
				<div className="flex flex-col gap-2">
					<Typography className="font-poppins text-base font-semibold">
						Rujak Cingur
					</Typography>
					<Typography className="font-poppins text-base font-normal">
						1 x {rupiahFormatter(10000)}
					</Typography>
				</div>
				<div className="flex flex-col justify-center items-center gap-2">
					<Typography className="font-poppins text-base font-normal ">
						{rupiahFormatter(10000)}
					</Typography>
				</div>
			</div>
		</div>
	);
};

export default DetailTransactionProductCard;
