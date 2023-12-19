import { Button, Divider, Typography } from "antd";
import BGSection1 from "../../../assets/images/landing-section-image.png";

import { FormInput } from "../../../components/input/hook-form/FormInput";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FormInputPassword } from "../../../components/input/hook-form/FormInputPassword";
import { useNavigate } from "react-router-dom";

const defaultValues = {
	email: "",
	password: "",
};

const formSchema = yup.object().shape({
	email: yup
		.string()
		.email()

		.required("Email is required"),
	password: yup
		.string()
		.required("Password is required")
		.min(4, "Password is too short - must be at least 4 chars."),
});

const LoginPage = () => {
	const navigate = useNavigate();
	const methods = useForm({
		mode: "onChange",
		defaultValues,
		resolver: yupResolver(formSchema),
	});
	const { handleSubmit } = methods;

	const onSubmit = (data) => {
		console.log(data);
		navigate("/dashboard");
	};

	return (
		<div
			className="bg-cover bg-center bg-no-repeat h-screen w-full flex flex-col items-center"
			style={{
				backgroundImage: `url(${BGSection1})`,
			}}
		>
			<div className="w-full md:max-w-[600px] mt-32 bg-foodlink-a-2 rounded-lg p-5 flex flex-col items-center">
				<h1 className="font-bold text-lg font-poppins">Masuk</h1>
				<h2 className="font-normal text-sm font-poppins">
					Lihat makanan yang tersedia pada kantin anda!
				</h2>
				<div className="w-96">
					<Divider className="bg-foodlink-a-4" />
					<FormProvider {...methods}>
						<form onSubmit={handleSubmit(onSubmit)}>
							<div className="flex flex-col gap-4">
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
									Belum mempunyai akun?{" "}
									<span
										onClick={() => navigate("/auth/register")}
										className="font-poppins font-bold cursor-pointer text-black hover:text-blue-300"
									>
										Daftar
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

export default LoginPage;
