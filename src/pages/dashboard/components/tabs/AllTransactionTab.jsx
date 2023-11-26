import { DatePicker, Input } from "antd";

import GeneralPagination from "../../../../components/pagination/GeneralPagination";
import TransactionHistoryCard from "../TransactionHistoryCard";

const AllTransactionTab = () => {
	const onSearch = (value, _e, info) => console.log(info?.source, value);

	return (
		<div>
			<div className="grid grid-cols-12 mt-5 gap-5">
				<div className="col-span-12 md:col-span-3">
					<Input.Search
						placeholder="Cari transaksi.."
						size="large"
						onSearch={onSearch}
					/>
				</div>
				<div className="col-span-12 md:col-span-3">
					<DatePicker.RangePicker className="w-full" size="large" />
				</div>

				<div className="col-span-12 md:col-span-6 flex justify-end">
					<GeneralPagination />
				</div>
			</div>
			<div className=" grid grid-cols-12 mt-5 mb-10 gap-3 ">
				{[1, 2, 3].map((v, i) => {
					return (
						<div key={i} className="col-span-12">
							<TransactionHistoryCard />
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default AllTransactionTab;
