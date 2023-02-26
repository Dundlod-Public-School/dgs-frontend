import styles from "@/styles/activities.module.css";
import React from "react";
import arrowBack from "@/images/Activities/arrow_back_FILL0_wght400_GRAD0_opsz48.png";
import arrowFront from "@/images/Activities/arrow_forward_FILL0_wght400_GRAD0_opsz48.png";
import Link from "next/link";
import Image from "next/image";

export default function ActivitiesOption() {
	const [onStu, setOnStu] = React.useState(false);
	const [onTea, setOnTea] = React.useState(false);
	return (
		<div>
			<div className={styles.optionContainer}>
				<div
					className={styles.curr}
					onMouseEnter={() => {
						setOnStu(true);
					}}
					onMouseLeave={() => {
						setOnStu(false);
					}}
				>
					{onStu && (
						<Link href="/curriculum" className={styles.coverLink}>
							<div className={styles.cover}>
								<div className={styles.coverText}>Curriculum</div>
								<div className={styles.coverArrow}>
									<Image src={arrowBack}></Image>
								</div>
							</div>
						</Link>
					)}
				</div>
				<div
					className={styles.coCurr}
					onMouseEnter={() => {
						setOnTea(true);
					}}
					onMouseLeave={() => {
						setOnTea(false);
					}}
				>
					{onTea && (
						<Link href="/co-curriculum" className={styles.coverLink}>
							<div className={styles.cover}>
								<div className={styles.coverText}>Co-Curriculur</div>
								<div className={styles.coverArrow}>
									<Image src={arrowFront}></Image>
								</div>
							</div>
						</Link>
					)}
				</div>
			</div>
		</div>
	);
}
