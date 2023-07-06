import React from "react";
import bell from "../../public/bell.svg";
import Image from "next/image";
import search from "../../public/Search_icon.svg";
import { NumberCards } from "./NumberCards";
import { cardInfo } from "../constants";
import { LineGraph } from "./LineGraph";
import { PieGraph } from "./PieGraph";
import { Row1 } from "./Row1";

export const DashboardRows = () => {
	return (
		<div className="w-full xl:pl-[60px] pt-[10px] ">
			<Row1 />
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
			{/* Pie chart */}
			<PieGraph />
		</div>
	);
};
