import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { ShoppingBagOutlined } from "@mui/icons-material";
import { Button, Table, Tooltip } from "antd";
import { useState } from "react";
const data = [
	{
		key: "1",
		name: "Stand Soto Ayam",
		admin_name: "Pak Bejo",
		action: (
			<div className="flex gap-3">
				<Tooltip title="Lihat Produk">
					<Button
						type="link"
						shape="circle"
						className="bg-blue-500 text-white "
						icon={<ShoppingBagOutlined />}
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
		name: "Stand Soto Ayam",
		admin_name: "Pak Bejo",
		action: (
			<div className="flex gap-3">
				<Tooltip title="Lihat Produk">
					<Button
						type="link"
						shape="circle"
						className="bg-blue-500 text-white "
						icon={<ShoppingBagOutlined />}
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
		name: "Stand Soto Ayam",
		admin_name: "Pak Bejo",
		action: (
			<div className="flex gap-3">
				<Tooltip title="Lihat Produk">
					<Button
						type="link"
						shape="circle"
						className="bg-blue-500 text-white "
						icon={<ShoppingBagOutlined />}
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
		name: "Stand Soto Ayam",
		admin_name: "Pak Bejo",
		action: (
			<div className="flex gap-3">
				<Tooltip title="Lihat Produk">
					<Button
						type="link"
						shape="circle"
						className="bg-blue-500 text-white "
						icon={<ShoppingBagOutlined />}
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
const ACStandTable = () => {
	const [sortedInfo, setSortedInfo] = useState({});
	const handleChange = (pagination, filters, sorter) => {
		console.log("Various parameters", pagination, filters, sorter);

		setSortedInfo(sorter);
	};

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
			title: "Nama Pemilik",
			dataIndex: "admin_name",
			key: "admin_name",
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
export default ACStandTable;
