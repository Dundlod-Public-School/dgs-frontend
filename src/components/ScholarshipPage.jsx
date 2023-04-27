import React from "react";
import styles from "@/styles/Scholarship.module.css";

export default function Scholarships() {
	const [onA1, setA1] = React.useState(false);
	const [onA2, setA2] = React.useState(false);

	return (
		<div>
			<div className={styles.awardContainer}>
				<div className={styles.awardHead}>Awards and Scholarships</div>
				<div className={styles.awardBody}>
					<div className={styles.awardTile}>
						<div
							className={styles.tileCover}
							onMouseEnter={() => {
								setA1(true);
							}}
							onMouseLeave={() => {
								setA1(false);
							}}
						>
							<div className={onA1 ? styles.tileHeadShow : styles.tileHeadHide}>
								Best Student Award
							</div>
							<div className={onA1 ? styles.tileContentShow : styles.tileContentHide}>
								The Prizes & certificates will be given away to the students for
								obtaining the highest percentage in their respective class groups
							</div>
							<div className={onA1 ? styles.tileContentShow : styles.tileContentHide}>
								Classes II to V
							</div>
							<div className={onA1 ? styles.tileContentShow : styles.tileContentHide}>
								Classes VI to VIII
							</div>
						</div>
					</div>
					<div
						className={styles.awardTile}
						onMouseEnter={() => {
							setA2(true);
						}}
						onMouseLeave={() => {
							setA2(false);
						}}
					>
						<div className={styles.tileCover}>
							<div className={onA2 ? styles.tileHeadShow : styles.tileHeadHide}>
								Miss Regularity Award
							</div>
							<div className={onA2 ? styles.tileContentShow : styles.tileContentHide}>
								The Prizes & certificates will be given away to the students for
								100% attendance in each academic year
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
