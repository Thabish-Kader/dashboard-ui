import React from "react";
import { AiFillApple } from "react-icons/ai";
import Link from "next/link";
import { GoogleSignIn } from "./components/GoogleSignIn";
export default function Home() {
	return (
		<main className="h-screen font-montserrat grid sm:flex ">
			{/* Board. (Black background) */}
			<div className="bg-black w-full h-[200px] sm:w-[588px] sm:h-full flex items-center justify-center">
				<h1 className="text-white text-[72px] font-bold">Board.</h1>
			</div>

			{/* SignIn */}
			<div className="w-full flex flex-col items-center justify-center -mt-[205px] sm:mt-0 sm:px-[10px]">
				<div>
					<div>
						<h1 className="text-[36px] font-bold leading-normal">
							Sign In
						</h1>
						<p className="text-[16px] font-lato font-normal leading-normal mb-[25px] mt-[5px]">
							Sign in to your account
						</p>
					</div>
					{/* Sign in buttons */}
					<div className="flex gap-[25px] mb-[25px]">
						<GoogleSignIn />
						<button className="bg-white text-[#858585] text-center text-[12px] font-normal leading-normal pt-[8px] pb-[7px] pr-[24px] rounded-full flex items-center">
							<AiFillApple className="text-[#999999] h-[14px] w-[14px] mr-[10px] ml-[24px]" />
							Sign in with Apple
						</button>
					</div>

					{/* Inputs */}
					<div className="bg-white font-lato rounded-[20px]">
						{/* email address */}
						<div className="flex flex-col">
							<label
								htmlFor="email"
								className="text-[16px] font-normal leading-normal pt-[30px] pl-[30px] pb-[10px]"
							>
								Email
							</label>
							<input
								id="email"
								type="text"
								placeholder="abc@example.com"
								className="bg-[#F5F5F5] rounded-[10px] outline-none text-black placeholder:text-gray-500 mx-[30px] pl-[15px] pt-[10px] pb-[11px]"
							/>
						</div>
						{/* password */}
						<div className="flex flex-col">
							<label
								htmlFor="password"
								className="text-[16px] font-normal leading-normal pt-[20px] pl-[30px] pb-[10px]"
							>
								Password
							</label>

							<input
								id="password"
								type="password"
								className="bg-[#F5F5F5] rounded-[10px] outline-none text-black placeholder:text-gray-500 mx-[30px] pl-[15px] pt-[10px] pb-[11px]"
							/>
						</div>
						<div className="flex flex-col">
							<Link
								href={"#"}
								className="text-[#346BD4] text-[16px] font-normal leading-normal px-[30px] py-[20px]"
							>
								Forgot Password?
							</Link>

							<button className="bg-black text-white font-bold font-montserrat text-center mx-[30px] rounded-[10px] py-[9px] mb-[30px]">
								Sign In
							</button>
						</div>
					</div>
				</div>
				<p className="mt-[20px] text-[#858585] text-[16px] font-lato font-normal leading-normal">
					Don&apos;t have an account{" "}
					<Link href="#">
						<span className="text-[#346BD4]">Register here</span>
					</Link>
				</p>
			</div>
		</main>
	);
}
