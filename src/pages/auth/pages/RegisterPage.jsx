import { Button, Divider, Typography } from "antd";
import BGSection1 from "../../../assets/images/landing-section-image.png";

import { FormInput } from "../../../components/input/hook-form/FormInput";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FormInputPassword } from "../../../components/input/hook-form/FormInputPassword";
import { useNavigate } from "react-router-dom";
import { NumberInput } from "../../../components/input/hook-form/NumberInput";

const defaultValues = {
	email: "",
	password: "",
};

const formSchema = yup.object().shape({
	full_name: yup.string().required("Full Name is required"),
	email: yup.string().email().required("Email is required"),
	password: yup
		.string()
		.required("Password is required")
		.min(4, "Password is too short - must be at least 4 chars."),
	address: yup.string().required("Address is required"),
	contact_number: yup.string().required("Contact Number is required"),
	company_id: yup.number().required("Company is required"),
});

const RegisterPage = () => {
	const navigate = useNavigate();
	const methods = useForm({
		mode: "onChange",
		defaultValues,
		resolver: yupResolver(formSchema),
	});
	const { handleSubmit } = methods;

	const onSubmit = (data) => {
		console.log(data);
	};

	return (
		<div
			className="bg-cover bg-center bg-no-repeat h-full w-full flex flex-col items-center"
			style={{
				backgroundImage: `url(${BGSection1})`,
			}}
		>
			<div className="w-full md:max-w-[600px] bg-foodlink-a-2 my-28 rounded-lg p-5 flex flex-col items-center">
				<h1 className="font-bold text-lg font-poppins">Daftar Akun</h1>
				<h2 className="font-normal text-sm font-poppins">
					Daftarkan diri anda dan nikmati fitur kami!
				</h2>
				<div className="w-96">
					<Divider className="bg-foodlink-a-4" />
					<FormProvider {...methods}>
						<form onSubmit={handleSubmit(onSubmit)}>
							<div className="flex flex-col gap-4">
								<FormInput
									placeHolder="Full Name"
									required
									name="full_name"
									label="Full Name"
								/>
								<FormInput
									placeHolder="Email"
									required
									name="email"
									label="Email"
								/>
								<FormInputPassword
									placeHolder="Password"
									required
									name="password"
									label="Password"
								/>
								<FormInput
									placeHolder="Address"
									required
									name="address"
									label="Address"
								/>
								<FormInput
									placeHolder="Contact Number"
									required
									name="contact_number"
									label="Contact Number"
								/>
								<NumberInput
									placeHolder="Company ID"
									required
									name="company_id"
									label="Company ID"
								/>
							</div>

							<div className="flex justify-end mt-1">
								<Typography className="cursor-pointer font-poppins text-black hover:text-blue-300">
									Lupa password?
								</Typography>
							</div>
							<Button
								htmlType="submit"
								type="default"
								shape="round"
								className="w-full bg-foodlink-a-1 mt-5 text-white text-sm font-semibold font-poppins"
							>
								Masuk
							</Button>
							<div className="flex justify-center mt-5">
								<Typography className=" font-poppins text-base ">
									Sudah mempunyai akun?{" "}
									<span
										onClick={() => navigate("/auth/login")}
										className="font-poppins font-bold cursor-pointer text-black hover:text-blue-300"
									>
										Masuk
									</span>
								</Typography>
							</div>
							<div className="flex justify-center mt-5">
								<Typography
									onClick={() => navigate("/")}
									className="font-poppins font-light cursor-pointer text-sm text-black hover:text-blue-300"
								>
									Kembali ke halaman utama
								</Typography>
							</div>
						</form>
					</FormProvider>
				</div>
			</div>
		</div>
	);
};

export default RegisterPage;
