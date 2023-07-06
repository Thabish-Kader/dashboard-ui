import React from "react";
import { cardInfo } from "../constants";
import { NumberCards } from "./NumberCards";

export const Row2 = () => {
	return (
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
	);
};
