import React from "react";
import Link from "next/link";
import styles from "@/styles/JoinUs.module.css";

export default function JoinUs() {
	const [isOver, setIsOver] = React.useState(false);
	function DisplayText() {
		if (isOver)
			return (
				<Link href="/registration-option" className={styles.joinText}>
					Join us
				</Link>
			);
		return <p className={styles.joinText}>Interested ?</p>;
	}

	return (
		<div
			className={styles.joinContainer}
			onMouseEnter={() => {
				setIsOver(true);
			}}
			onMouseLeave={() => {
				setIsOver(false);
			}}
		>
			<div className={styles.joinText}>
				<DisplayText />
			</div>
		</div>
	);
}
