import styles from "@/styles/Footer.module.css";
import React from "react";
import Link from "next/link";

export default function Footer() {
	return (
		<div className={styles.footer}>
			<div className={styles.footerLogo}></div>
			<div className={styles.seprator}></div>
			<div className={styles.quickLinks}>
				<div className={styles.quickLinksHead}>
					<h6 className={styles.linksHeading}>Quick Links</h6>
				</div>
				<div className={styles.linksList}>
					<Link href="/brochure" className={styles.link}>
						Brochure
					</Link>
					<Link href="/hostel" className={styles.link}>
						Hostel
					</Link>
					<Link href="/mess" className={styles.link}>
						Mess Menu
					</Link>
					<Link href="/location" className={styles.link}>
						Location
					</Link>
					<Link href="/rules" className={styles.link}>
						Rules and Regulations
					</Link>
					<Link href="/scholarships" className={styles.link}>
						Scholarships
					</Link>
					<Link href="/uniform" className={styles.link}>
						Uniform
					</Link>
				</div>
			</div>
			<div className={styles.verticalSep}></div>
			<div className={styles.seprator}></div>
			<div className={styles.footerContactInfo}>
				<div className={styles.phone}>
					<div className={styles.phoneLogo}></div>
					<div className={styles.phoneText}>+91-9314011566/01594-294501</div>
				</div>
				<div className={styles.mail}>
					<div className={styles.mailLogo}></div>
					<div className={styles.mailText}>dundlodgirlsschool@gmail.com</div>
				</div>
			</div>
		</div>
	);
}
