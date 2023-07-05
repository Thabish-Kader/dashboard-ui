import React, { FC } from "react";

import Image from "next/image";

type NumberCardsProps = {
	icon: string;
	title: string;
	numbers: string;
	color: string;
};
export const NumberCards: FC<NumberCardsProps> = ({
	icon,
	title,
	numbers,
	color,
}) => {
	return (
		<div className={`flex flex-col ${color} rounded-[20px] font-lato`}>
			<Image
				src={icon}
				width={26.4}
				height={24}
				alt={`${title} image`}
				className="ml-auto pt-[20px] mr-[25.65px]"
			/>
			<div className="flex flex-col pl-[25px] ">
				<h4 className="text-[14px] font-normal ">{title}</h4>
				<h2 className="text-[24px] font-bold leading-normal">
					{numbers}
				</h2>
			</div>
		</div>
	);
};
