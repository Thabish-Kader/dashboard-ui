"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";

export const UserImage = () => {
	const { data: session, status } = useSession();

	if (status === "loading") {
		return (
			<div className="bg-gray-900 animate-pulse h-[40px] w-[40px] rounded-full"></div>
		);
	}
	return (
		<Image
			src={session?.user?.image!}
			alt={session?.user?.name!}
			height={40}
			width={40}
			className="object-cover rounded-full cursor-pointer"
			onClick={() => signOut({ callbackUrl: "/" })}
		/>
	);
};
