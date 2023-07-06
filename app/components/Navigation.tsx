import React from "react";
import Image from "next/image";
import dashboardicon from "../../public/dashboard_icon.svg";
import transactionicon from "../../public/transaction_icon.svg";
import scheduleicon from "../../public/schedule_icon.svg";
import usericon from "../../public/user_icon.svg";
import settingicon from "../../public/setting_icon.svg";
import Link from "next/link";

export const Navigation = () => {
	return (
		<div className="h-full flex">
			<div className="bg-black flex flex-row justify-between p-4 xl:p-0 xl:flex-col items-center w-full xl:w-[280px] rounded-[30px] ">
				<h1 className="text-white text-xl xl:text-[36px] font-bold xl:pt-[60px] ">
					Board.{" "}
				</h1>
				{/* Links */}
				<div className="text-white xl:pt-[60px] flex space-x-5  xl:space-x-0 xl:flex-col  xl:space-y-[40px]">
					<Link href={"#"} className="flex items-center gap-[20px]">
						<Image
							src={dashboardicon}
							alt="dashboard"
							height={18}
							width={18}
							className="hidden xl:block"
						/>
						<p className="text-md xl:text-[18px] font-bold ">
							Dashboard
						</p>
					</Link>
					<Link href={"#"} className="flex items-center gap-[20px]">
						<Image
							src={transactionicon}
							alt="dashboard"
							height={18}
							width={18}
							className="hidden xl:block"
						/>
						<p className="text-md xl:text-[18px] font-bold ">
							Transactions
						</p>
					</Link>
					<Link href={"#"} className="flex items-center gap-[20px]">
						<Image
							src={scheduleicon}
							alt="dashboard"
							height={18}
							width={18}
							className="hidden xl:block"
						/>
						<p className="text-md xl:text-[18px] font-bold ">
							Schedules
						</p>
					</Link>
					<Link href={"#"} className="flex items-center gap-[20px]">
						<Image
							src={usericon}
							alt="dashboard"
							height={18}
							width={18}
							className="hidden xl:block"
						/>
						<p className="text-md xl:text-[18px] font-bold ">
							Users
						</p>
					</Link>
					<Link href={"#"} className="flex items-center gap-[20px]">
						<Image
							src={settingicon}
							alt="dashboard"
							height={18}
							width={18}
							className="hidden xl:block"
						/>
						<p className="text-md xl:text-[18px] font-bold ">
							Settings
						</p>
					</Link>
				</div>

				<div className="hidden  xl:mt-auto xl:pb-[60px] text-white md:flex space-x-4 xl:space-x-0  xl:flex-col xl:-ml-[55px] xl:space-y-[20px] ">
					<Link href={"#"} className="">
						Help
					</Link>
					<Link href={"#"} className="">
						Contact Us
					</Link>
				</div>
			</div>
		</div>
	);
};
