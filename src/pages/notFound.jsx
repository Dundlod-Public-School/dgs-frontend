import styles from "@/styles/notFound.module.css";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import { useRouter } from "next/router";

export default function NotFound() {
	const router = useRouter();
	return (
		<>
			<div className={styles.nfContainer}>
				<div className={styles.nfNumber}>404</div>
				<div className={styles.nfMessage}>The page you are looking for doesn't exist</div>
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
			<Navbar />
			<Footer />
		</>
	);
}
