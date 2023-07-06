"use client";
import {
	LineChart,
	XAxis,
	Line,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";
import { FakeStoreData } from "../types";

export const LineGraph = ({ data }: { data: FakeStoreData[] }) => {
	const newData = data.map(({ price, rating: { count, rate } }) => ({
		price,
		count,
		rate,
	}));

	return (
		<ResponsiveContainer height={300} className="bg-white rounded-[20px]">
			<LineChart
				width={500}
				height={300}
				data={newData}
				margin={{
					top: 80,
					right: 42,
					left: 40,
					bottom: 30,
				}}
			>
				<XAxis dataKey="rate" />
				<YAxis />
				<CartesianGrid
					stroke="#EAEAEA"
					horizontal={true}
					vertical={false}
				/>
				<Tooltip />
				<Legend
					verticalAlign="top"
					align="right"
					layout="horizontal"
					iconType="circle"
				/>

				<Line
					type="monotone"
					dot={false}
					dataKey="count"
					stroke="#E9A0A0"
					strokeWidth={3}
				/>

				<Line
					dot={false}
					type="monotone"
					dataKey="price"
					stroke="#9BDD7C"
					strokeWidth={3}
				/>

				<text
					x={50}
					y={30}
					textAnchor="start"
					style={{ fontSize: "18px", color: "#000" }}
				>
					Activities
				</text>
				<text
					x={50}
					y={50}
					textAnchor="start"
					style={{ fontSize: "14px", color: "#F5F5F5" }}
				>
					May - June 2021
				</text>
			</LineChart>
		</ResponsiveContainer>
	);
};
