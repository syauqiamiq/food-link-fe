import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Table, Tooltip } from "antd";
import { useState } from "react";
const data = [
	{
		key: "1",
		name: "John Brown",
		age: 32,
		address: "New York No. 1 Lake Park",
		action: (
			<div className="flex gap-3">
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
		name: "Jim Green",
		age: 42,
		address: "London No. 1 Lake Park",
		action: (
			<div className="flex gap-3">
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
		name: "Joe Black",
		age: 32,
		address: "Sydney No. 1 Lake Park",
		action: (
			<div className="flex gap-3">
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
		name: "Jim Red",
		age: 32,
		address: "London No. 2 Lake Park",
		action: (
			<div className="flex gap-3">
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
const ACUserTable = () => {
	const [sortedInfo, setSortedInfo] = useState({});
	const handleChange = (pagination, filters, sorter) => {
		console.log("Various parameters", pagination, filters, sorter);

		setSortedInfo(sorter);
	};

	const columns = [
		{
			title: "Name",
			dataIndex: "name",
			key: "name",
			sorter: (a, b) => a.name.length - b.name.length,
			sortOrder: sortedInfo.columnKey === "name" ? sortedInfo.order : null,
			ellipsis: true,
		},
		{
			title: "Age",
			dataIndex: "age",
			key: "age",
			sorter: (a, b) => a.age - b.age,
			sortOrder: sortedInfo.columnKey === "age" ? sortedInfo.order : null,
			ellipsis: true,
		},
		{
			title: "Address",
			dataIndex: "address",
			key: "address",
			sorter: (a, b) => a.address.length - b.address.length,
			sortOrder: sortedInfo.columnKey === "address" ? sortedInfo.order : null,
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
export default ACUserTable;
