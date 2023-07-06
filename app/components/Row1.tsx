import React from "react";
import bell from "../../public/bell.svg";
import Image from "next/image";
import search from "../../public/Search_icon.svg";
import { UserImage } from "./UserImage";
export const Row1 = () => {
	return (
		<div className="flex justify-between">
			<h1 className="text-[24px] font-bold">Dashboard</h1>

			{/* Inputs & User Icon */}
			<div className="flex ">
				<div className="bg-white rounded-[20px] flex justify-between px-[9px] ">
					<input
						type="text"
						className=" outline-none text-[14px] placeholder:text-[#B0B0B0] flex-0"
						placeholder="Enter Search..."
					/>
					<Image src={search} alt="search" height={12} width={12} />
				</div>
				<Image
					src={bell}
					alt="bellicon"
					height={20}
					width={18}
					className="hidden sm:block ml-[30px] mr-[20px]"
				/>
				<UserImage />
			</div>
		</div>
	);
};
