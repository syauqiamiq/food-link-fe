import { Pagination } from "antd";

const onShowSizeChange = (current, pageSize) => {
	console.log(current, pageSize);
};
const GeneralPagination = () => (
	<>
		<Pagination
			showSizeChanger
			onShowSizeChange={onShowSizeChange}
			defaultCurrent={3}
			total={500}
		/>
	</>
);
export default GeneralPagination;
