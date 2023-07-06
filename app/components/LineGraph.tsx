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
const data = [
	{
		name: "Page A",
		uv: 4000,
		pv: 2400,
		amt: 2400,
	},
	{
		name: "Page B",
		uv: 3000,
		pv: 1398,
		amt: 2210,
	},
	{
		name: "Page C",
		uv: 2000,
		pv: 9800,
		amt: 2290,
	},
	{
		name: "Page D",
		uv: 2780,
		pv: 3908,
		amt: 2000,
	},
	{
		name: "Page E",
		uv: 1890,
		pv: 4800,
		amt: 2181,
	},
	{
		name: "Page F",
		uv: 2390,
		pv: 3800,
		amt: 2500,
	},
	{
		name: "Page G",
		uv: 3490,
		pv: 4300,
		amt: 2100,
	},
];
export const LineGraph = () => {
	return (
		<ResponsiveContainer height={300} className="bg-white rounded-[20px]">
			<LineChart
				width={500}
				height={300}
				data={data}
				margin={{
					top: 80,
					right: 42,
					left: 40,
					bottom: 30,
				}}
			>
				<XAxis dataKey="name" />
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
					dataKey="pv"
					stroke="#E9A0A0"
					strokeWidth={3}
				/>

				<Line
					dot={false}
					type="monotone"
					dataKey="uv"
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
