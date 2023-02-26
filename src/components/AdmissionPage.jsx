import React from "react";
import styles from "@/styles/admission.module.css";
import guidelines from "../images/Admission/guidelines.png";
import register from "../images/Admission/register.png";
import docs from "../images/Admission/docs.png";
import fee from "../images/Admission/feepay.png";
import Image from "next/image";

export default function AdmissionPage() {
	return (
		<div>
			<div className={styles.admissionMain}>
				<div className={styles.admissionTitle}>Admission Process</div>
				<div className={styles.rect}></div>
				<div className={styles.content}>
					<div className={styles.section}>
						<div className={styles.head}>
							<div className={styles.adtext}>General Guidelines</div>
							<div className={`${styles.larrow} ${styles.arrow1}`}>
								<div className={styles.Atarget}></div>
								<div className={styles.Aline}></div>
								<div className={styles.Acenter}></div>
							</div>
						</div>
						<Image className={styles.adimg} src={guidelines}></Image>
						<div className={styles.adoverlay}>
							<div className={styles.overlayText}>
								1. Prospectus & admission form can be obtained from school office
								during school hours.<br></br> 2. For Provisional admission to class
								XI, a candidate must submit class IX Report Card along with a xerox
								of class X pre-board exam report card.<br></br> 3. There is no
								direct admission for classes X & XII. Admission can be given only in
								transfer case of parents or shifting of house with documental proof.
								<br></br>4. Schools strictly follow all the rules & regulations of
								RTE Act.
							</div>
						</div>
					</div>

					<div className={`${styles.section} ${styles.rights}`}>
						<div className={`${styles.head} ${styles.rhead}`}>
							<div className={`${styles.rarrow} ${styles.arrow2}`}>
								<div className={styles.Acenter}></div>
								<div className={styles.Aline}></div>
								<div className={styles.Atarget}></div>
							</div>
							<div className={styles.adtext}>Registration</div>
						</div>
						<Image className={styles.adimg} src={register}></Image>
						<div className={`${styles.adoverlay} ${styles.roverlay}`}>
							<div className={styles.overlayText}>
								1.You can apply for registartion on the site itself.
								<br />
								2.Click on the hovering element of Intrested?/Join Us.
								<br />
								3.Fill the form correctly with all the information.
								<br />
								4.We will send you a mail on confirming the form submission for
								review.
								<br />
								5.You can also apply for registration offline.
							</div>
						</div>
					</div>

					<div className={styles.section}>
						<div className={styles.head}>
							<div className={styles.adtext}>Documents</div>
							<div className={`${styles.larrow} ${styles.arrow1}`}>
								<div className={styles.Atarget}></div>
								<div className={styles.Aline}></div>
								<div className={styles.Acenter}></div>
							</div>
						</div>
						<Image className={styles.adimg} src={docs}></Image>
						<div className={styles.adoverlay}>
							<div className={styles.overlayText}>
								1. For class up to I, original birth certificate along with an
								attested photocopy of the same.
								<br />
								2. For class II and above, original T.C. countersigned by the
								competent authority and report card of the previous academic
								session. <br />
								3. 3 copies of passport size photograph. <br />
								4. Migration certificate for the student coming from other state.
							</div>
						</div>
					</div>
					<div className={`${styles.section} ${styles.rights}`}>
						<div className={`${styles.head} ${styles.rhead}`}>
							<div className={`${styles.rarrow} ${styles.arrow2}`}>
								<div className={styles.Acenter}></div>
								<div className={styles.Aline}></div>
								<div className={styles.Atarget}></div>
							</div>
							<div className={styles.adtext}>Fees Payment</div>
						</div>
						<Image className={styles.adimg} src={fee}></Image>
						<div className={`${styles.adoverlay} ${styles.roverlay}`}>
							<div className={styles.overlayText}>
								1. Tuition fee and Boarding fee is payable in two equal installments
								in the month of April and October.
								<br />
								2. All payment should be either in Cash or by Demand Draft in favour
								of “Principal, Dundlod Girls School, Dundlod” <br />
								3. Fee once deposited will not be refunded under any circumstances.
								<br />
								4. Transfer Certificate is issued only after all the dues are
								settled.
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
