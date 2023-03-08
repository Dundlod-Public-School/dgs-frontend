import styles from "@/styles/Registration.module.css";
import React from "react";
import arrowBack from "../images/Registration/arrow_back_FILL0_wght400_GRAD0_opsz48.png";
import arrowFront from "../images/Registration/arrow_forward_FILL0_wght400_GRAD0_opsz48.png";
import Link from "next/link";
import Image from "next/image";

export default function RegistrationOptionPage() {
	const [onStu, setOnStu] = React.useState(false);
	const [onTea, setOnTea] = React.useState(false);
	return (
		<div>
			<div className={styles.optionContainer}>
				<div
					className={styles.stuReg}
					onMouseEnter={() => {
						setOnStu(true);
					}}
					onMouseLeave={() => {
						setOnStu(false);
					}}
				>
					{onStu && (
						<Link href="/student-application" className={styles.coverLink}>
							<div className={styles.cover}>
								<div className={styles.coverText}>Student</div>
								<div className={styles.coverArrow}>
									<Image src={arrowBack}></Image>
								</div>
							</div>
						</Link>
					)}
				</div>
				<div
					className={styles.teacherApp}
					onMouseEnter={() => {
						setOnTea(true);
					}}
					onMouseLeave={() => {
						setOnTea(false);
					}}
				>
					{onTea && (
						<Link href="/teacher-application" className={styles.coverLink}>
							<div className={styles.cover}>
								<div className={styles.coverText}>Teacher</div>
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
