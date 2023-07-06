"use client";
import { signIn } from "next-auth/react";
import React from "react";
import { FcGoogle } from "react-icons/fc";

export const GoogleSignIn = () => {
	return (
		<button
			onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
			className="bg-white text-[#858585] text-center text-[12px] font-normal leading-normal pt-[8px] pb-[7px]  pr-[19px] rounded-full flex items-center"
		>
			<FcGoogle className="h-[14px] w-[14px] mr-[10px] ml-[19px]" /> Sign
			in with Google
		</button>
	);
};
