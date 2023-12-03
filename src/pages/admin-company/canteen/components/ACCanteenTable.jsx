import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { StoreOutlined } from "@mui/icons-material";
import { Button, Table, Tooltip } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { baseAdminCompanyPath } from "../../../../constants/menu-items";

const ACCanteenTable = () => {
	const navigate = useNavigate();
	const [sortedInfo, setSortedInfo] = useState({});
	const handleChange = (pagination, filters, sorter) => {
		console.log("Various parameters", pagination, filters, sorter);

		setSortedInfo(sorter);
	};

	const data = [
		{
			key: "1",
			name: "Kantin Teknik",

			action: (
				<div className="flex gap-3">
					<Tooltip title="Lihat Stand">
						<Button
							onClick={() =>
								navigate(`${baseAdminCompanyPath}/canteen/1/stand`)
							}
							type="link"
							shape="circle"
							className="bg-blue-500 text-white "
							icon={<StoreOutlined />}
						/>
					</Tooltip>
					<Tooltip title="Edit">
						<Button
							type="link"
							shape="circle"
							className="bg-blue-500 text-white "
							icon={<EditOutlined />}
						/>
					</Tooltip>
					<Tooltip title="Hapus">
						<Button
							type="link"
							shape="circle"
							className="bg-foodlink-error text-white "
							icon={<DeleteOutlined />}
						/>
					</Tooltip>
				</div>
			),
		},
		{
			key: "2",
			name: "Kantin Depan",
			action: (
				<div className="flex gap-3">
					<Tooltip title="Lihat Stand">
						<Button
							onClick={() =>
								navigate(`${baseAdminCompanyPath}/canteen/1/stand`)
							}
							type="link"
							shape="circle"
							className="bg-blue-500 text-white "
							icon={<StoreOutlined />}
						/>
					</Tooltip>
					<Tooltip title="Edit">
						<Button
							type="link"
							shape="circle"
							className="bg-blue-500 text-white "
							icon={<EditOutlined />}
						/>
					</Tooltip>
					<Tooltip title="Hapus">
						<Button
							type="link"
							shape="circle"
							className="bg-foodlink-error text-white "
							icon={<DeleteOutlined />}
						/>
					</Tooltip>
				</div>
			),
		},
		{
			key: "3",
			name: "Kantin Informatika",
			action: (
				<div className="flex gap-3">
					<Tooltip title="Lihat Stand">
						<Button
							onClick={() =>
								navigate(`${baseAdminCompanyPath}/canteen/1/stand`)
							}
							type="link"
							shape="circle"
							className="bg-blue-500 text-white "
							icon={<StoreOutlined />}
						/>
					</Tooltip>
					<Tooltip title="Edit">
						<Button
							type="link"
							shape="circle"
							className="bg-blue-500 text-white "
							icon={<EditOutlined />}
						/>
					</Tooltip>
					<Tooltip title="Hapus">
						<Button
							type="link"
							shape="circle"
							className="bg-foodlink-error text-white "
							icon={<DeleteOutlined />}
						/>
					</Tooltip>
				</div>
			),
		},
		{
			key: "4",
			name: "Kantin Utama",

			action: (
				<div className="flex gap-3">
					<Tooltip title="Lihat Stand">
						<Button
							onClick={() =>
								navigate(`${baseAdminCompanyPath}/canteen/1/stand`)
							}
							type="link"
							shape="circle"
							className="bg-blue-500 text-white "
							icon={<StoreOutlined />}
						/>
					</Tooltip>
					<Tooltip title="Edit">
						<Button
							type="link"
							shape="circle"
							className="bg-blue-500 text-white "
							icon={<EditOutlined />}
						/>
					</Tooltip>
					<Tooltip title="Hapus">
						<Button
							type="link"
							shape="circle"
							className="bg-foodlink-error text-white "
							icon={<DeleteOutlined />}
						/>
					</Tooltip>
				</div>
			),
		},
	];

	const columns = [
		{
			title: "Nama Kantin",
			dataIndex: "name",
			key: "name",
			sorter: (a, b) => a.name.length - b.name.length,
			sortOrder: sortedInfo.columnKey === "name" ? sortedInfo.order : null,
			ellipsis: true,
		},
		{
			title: "Aksi",
			dataIndex: "action",
			key: "action",
			ellipsis: true,
		},
	];
	return (
		<div className="my-10">
			<Table columns={columns} dataSource={data} onChange={handleChange} />
		</div>
	);
};
export default ACCanteenTable;
