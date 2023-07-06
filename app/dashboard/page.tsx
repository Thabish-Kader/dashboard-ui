import React from "react";
import { Navigation } from "../components/Navigation";
import { DashboardRows } from "../components/DashboardRows";
import { NumberCards } from "../components/NumberCards";

const Dashboard = () => {
	return (
		<main className=" font-montserrat h-screen flex flex-col xl:flex-row p-[40px]">
			{/* Navigation Menu */}
			<Navigation />
			<DashboardRows />
		</main>
	);
};

export default Dashboard;
