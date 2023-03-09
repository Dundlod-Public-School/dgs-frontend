import styles from "@/styles/notFound.module.css";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import gears from "../images/UnderProcess/gears.png";

export default function UnderProcess() {
	const router = useRouter();
	return (
		<div className={styles.nfContainer}>
			<Image src={gears} className={styles.nfImage}></Image>
			<div className={styles.nfNumber}>Working on it ...</div>
			<div className={styles.nfMessage}>The page you are looking for doesn't exist.</div>
			<div
				className={styles.nfRedirect}
				onClick={() => {
					router.replace("/");
				}}
			>
				<Link className={styles.nfLink} href="/">
					Go to Home
				</Link>
			</div>
		</div>
	);
}
