"use client";
import React, { FC } from "react";
import Image from "next/image";
import dashboardicon from "../../public/dashboard_icon.svg";
import transactionicon from "../../public/transaction_icon.svg";
import scheduleicon from "../../public/schedule_icon.svg";
import usericon from "../../public/user_icon.svg";
import settingicon from "../../public/setting_icon.svg";
import Link from "next/link";
import { ImCross } from "react-icons/im";

type MobileMenuProps = {
	isMobile: boolean;
	setIsMobile: (value: boolean) => void;
};

export const MobileMenu: FC<MobileMenuProps> = ({ isMobile, setIsMobile }) => {
	return (
		<div className="fixed inset-0 h-screen bg-black  text-white flex flex-col items-center pt-32 justify-center z-10 ">
			<ImCross
				className="absolute top-[50px] right-[80px] cursor-pointer text-red-500"
				onClick={() => setIsMobile(false)}
				size={30}
			/>
			<h1 className="text-4xl font-bold pt-10 pb-24">Board.</h1>
			{/* Links */}
			<div className="text-white 0px] flex  flex-col  space-y-16">
				<Link href={"#"} className="flex items-center gap-[20px]">
					<Image
						src={dashboardicon}
						alt="dashboard"
						height={18}
						width={18}
					/>
					<p className="text-2xl font-bold ">Dashboard</p>
				</Link>
				<Link href={"#"} className="flex items-center gap-[20px]">
					<Image
						src={transactionicon}
						alt="dashboard"
						height={18}
						width={18}
					/>
					<p className="text-2xl font-bold ">Transactions</p>
				</Link>
				<Link href={"#"} className="flex items-center gap-[20px]">
					<Image
						src={scheduleicon}
						alt="dashboard"
						height={18}
						width={18}
					/>
					<p className="text-2xl font-bold ">Schedules</p>
				</Link>
				<Link href={"#"} className="flex items-center gap-[20px]">
					<Image
						src={usericon}
						alt="dashboard"
						height={18}
						width={18}
					/>
					<p className="text-2xl font-bold ">Users</p>
				</Link>
				<Link href={"#"} className="flex items-center gap-[20px]">
					<Image
						src={settingicon}
						alt="dashboard"
						height={18}
						width={18}
					/>
					<p className="text-2xl font-bold ">Settings</p>
				</Link>
			</div>

			<div className="mt-auto pb-[60px] text-xl text-white flex flex-col mr-24 space-y-[20px] ">
				<Link href={"#"} className="">
					Help
				</Link>
				<Link href={"#"} className="">
					Contact Us
				</Link>
			</div>
		</div>
	);
};
