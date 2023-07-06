"use client";
import React from "react";
import { Pie, ResponsiveContainer, Cell, Legend } from "recharts";
import { FakeStoreData } from "../types";
import dynamic from "next/dynamic";

const COLORS = ["#FF8042", "#0088FE", "#00C49F"];

export const PieGraph = ({ data }: { data: FakeStoreData[] }) => {
	const PieChart = dynamic(
		() => import("recharts").then((recharts) => recharts.PieChart),
		{ ssr: false }
	);
	const newData = data
		.slice(0, 3)
		.map(({ title, price, rating: { count, rate } }) => ({
			title,
			price,
			count,
			rate,
		}));

	return (
		<div className="mt-[40px] grid gap-5 md:grid-cols-2 gap-x-[40px] mb-6">
			<div className="h-full lg:h-[250px] w-full flex justify-between bg-white rounded-[20px] ">
				<PieChart width={300} height={300}>
					<Pie data={newData} dataKey="rate" fill={"red"}>
						{newData.map((entry, index) => (
							<Cell
								key={index}
								fill={COLORS[index % COLORS.length]}
							/>
						))}
					</Pie>
					<text
						x={50}
						y={30}
						textAnchor="start"
						style={{
							fontSize: "18px",
							color: "#000",
							fontWeight: "bold",
						}}
					>
						Rateings
					</text>
					<Legend
						verticalAlign="middle"
						align="right"
						layout="vertical"
						iconType="circle"
					/>
				</PieChart>
			</div>
			{/* Todays Schedule */}
			<div className="h-full lg:h-[250px] bg-white rounded-[20px] flex flex-col py-[30px] px-[40px] ">
				{/* Heading */}
				<div className="flex items-center justify-between ">
					<h1 className="font-montserrat text-[18px] font-bold leading-normal">
						Todays schedule
					</h1>
					<p className="flex items-center gap-3 text-[#858585] text-[12px] font-normal">
						See All
						<svg
							width="5"
							height="8"
							viewBox="0 0 5 8"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M0.255719 7.7814C-0.0722496 7.4807 -0.097987 7.06206 0.255719 6.69446L3.0111 3.99918L0.255719 1.3039C-0.0979873 0.936305 -0.0722499 0.516977 0.255719 0.218345C0.582952 -0.0823565 1.13594 -0.0630456 1.44332 0.218345C1.7507 0.498356 4.75389 3.4564 4.75389 3.4564C4.83173 3.52684 4.89364 3.61127 4.93592 3.70464C4.97821 3.79802 5 3.89843 5 3.99987C5 4.10132 4.97821 4.20173 4.93592 4.2951C4.89364 4.38848 4.83173 4.4729 4.75389 4.54334C4.75389 4.54334 1.7507 7.50001 1.44332 7.7814C1.13594 8.06348 0.582952 8.0821 0.255719 7.7814Z"
								fill="#858585"
							/>
						</svg>
					</p>
				</div>
				{/* 1st block  */}
				<div className="flex items-center font-lato pt-[28px]">
					<div className=" h-[66px] w-[5px]  border-2 mr-[15px] bg-[#9BDD7C] border-[#9BDD7C]"></div>
					<div className="flex flex-col">
						<h2 className="text-[#666] text-[16px] font-bold">
							Meeting with suppliers from Kuta Bali
						</h2>
						<h3 className="text-[#999] text-[12px] font-normal">
							14.00 - 15.00
						</h3>
						<h3 className="text-[#999] text-[12px] font-normal">
							at Sunset Road,Kuta,Bali
						</h3>
					</div>
				</div>
				{/* 2nd block */}
				<div className="flex  items-center font-lato pt-[24px]">
					<div className=" h-[66px] w-[5px]  border-2 mr-[15px] bg-[#6972C3] border-[#6972C3]"></div>
					<div className="flex flex-col">
						<h2 className="text-[#666] text-[16px] font-bold">
							Check operation at Giga Factory 1
						</h2>
						<h3 className="text-[#999] text-[12px] font-normal">
							18.00-20.00
						</h3>
						<h3 className="text-[#999] text-[12px] font-normal">
							at Central Jakarta
						</h3>
					</div>
				</div>
			</div>
		</div>
	);
};
