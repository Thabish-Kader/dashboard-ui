import React from "react";
import bell from "../../public/bell.svg";
import Image from "next/image";
import search from "../../public/Search_icon.svg";
import { NumberCards } from "./NumberCards";
import { cardInfo } from "../constants";
import { LineGraph } from "./LineGraph";

export const DashboardRows = () => {
	return (
		<div className="w-full pl-[60px] pt-[10px] ">
			<div className="flex justify-between">
				<h1 className="text-[24px] font-bold">Dashboard</h1>

				{/* Inputs & User Icon */}
				<div className="flex ">
					<div className="bg-white rounded-[20px] flex justify-between px-[9px]">
						<input
							type="text"
							className=" outline-none text-[14px] placeholder:text-[#B0B0B0]"
							placeholder="Enter Search..."
						/>
						<Image
							src={search}
							alt="search"
							height={12}
							width={12}
						/>
					</div>
					<Image
						src={bell}
						alt="bellicon"
						height={20}
						width={18}
						className="ml-[30px] mr-[20px]"
					/>
					<Image
						src={bell}
						alt="bellicon"
						height={20}
						width={18}
						className=""
					/>
				</div>
			</div>
			<div className="grid md:grid-cols-2 xl:grid-cols-4 gap-[36.6px] pt-[40px] pb-[40px]">
				{cardInfo.map((card, i) => (
					<NumberCards
						key={i}
						title={card.title}
						numbers={card.numbers}
						icon={card.icon}
						color={card.bgcolor}
					/>
				))}
			</div>
			{/* Line chart */}
			<LineGraph />
		</div>
	);
};
