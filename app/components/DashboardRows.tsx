import React from "react";
import bell from "../../public/bell.svg";
import Image from "next/image";
import search from "../../public/Search_icon.svg";
import { NumberCards } from "./NumberCards";
import { cardInfo } from "../constants";
import { LineGraph } from "./LineGraph";
import { PieGraph } from "./PieGraph";
import { Row1 } from "./Row1";
import { FakeStoreData } from "../types";
import { Row2 } from "./Row2";

export const DashboardRows = ({ data }: { data: FakeStoreData[] }) => {
	return (
		<div className="w-full xl:pl-[60px] mt-[20px] xl:mt-0 pt-[10px] p-[40px] sm:p-0">
			<Row1 />
			<Row2 />
			{/* Line chart */}
			<LineGraph data={data} />
			{/* Pie chart */}
			<PieGraph data={data} />
		</div>
	);
};
