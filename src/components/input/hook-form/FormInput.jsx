import { Input, Typography } from "antd";
import { useController, useFormContext } from "react-hook-form";

export const FormInput = ({
	required = false,
	name,
	placeHolder = null,
	label,
	size = "large",
}) => {
	const { control } = useFormContext();
	const { field, fieldState } = useController({ name, control });
	const { error } = fieldState;

	return (
		<div>
			<div className="flex gap-1">
				<Typography>{label}</Typography>
				{required && <Typography className="text-foodlink-error">*</Typography>}
			</div>
			<Input size={size} placeholder={placeHolder} {...field} label={label} />
			{Boolean(error) && (
				<Typography className="text-foodlink-error">
					{error?.message}
				</Typography>
			)}
		</div>
	);
};
