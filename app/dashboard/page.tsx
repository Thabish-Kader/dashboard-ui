import React from "react";
import { Navigation } from "../components/Navigation";
import { NextResponse } from "next/server";
import { FakeStoreData } from "../types";
import { Row1 } from "../components/Row1";
import { Row2 } from "../components/Row2";
import { LineGraph } from "../components/LineGraph";
import { PieGraph } from "../components/PieGraph";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

async function getData() {
	const res = await fetch("https://fakestoreapi.com/products");

	if (!res.ok) {
		return NextResponse.json("Failed to fetch data");
	}

	return res.json();
}

const Dashboard = async () => {
	const data: FakeStoreData[] = await getData();

	return (
		<main className="relative font-montserrat h-screen flex flex-col xl:flex-row sm:p-[40px]">
			{/* Navigation Menu */}
			<Navigation />
			{/* Dashboard Rows  */}
			<div className="w-full xl:pl-[60px] mt-[20px] xl:mt-0 pt-[10px] p-[40px] sm:p-0">
				<Row1 />
				<Row2 />
				{/*Row 3*/}
				<LineGraph data={data} />
				{/* Row 4 */}
				<PieGraph data={data} />
			</div>
		</main>
	);
};

export default Dashboard;
