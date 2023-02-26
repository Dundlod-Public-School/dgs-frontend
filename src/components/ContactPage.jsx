import React from "react";
import styles from "@/styles/contact.module.css";
import call from "../images/Contact/contact_phone_FILL1_wght400_GRAD0_opsz48.png";
import mail from "../images/Contact/contact_mail_FILL1_wght400_GRAD0_opsz48.png";
import { postContact } from "@/pages/api/forms";
import Image from "next/image";

export default function ContactPage() {
	const [formData, setFormData] = React.useState({
		fullname: "",
		email: "",
		subject: "",
		body: "",
	});
	function handleChange(e) {
		setFormData((prev) => {
			return {
				...prev,
				[e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value,
			};
		});
	}
	function checkQuery(query) {
		const em = /^[\w.+\-]+@gmail\.com$/;
		const al = /^[A-Za-z ]+$/;
		if (query.fullname === "") {
			window.alert("Please enter your fullname");
			return false;
		}
		if (!al.test(query.fullname)) {
			window.alert("Please enter a valid fullname");
			return false;
		}
		if (query.email === "") {
			window.alert("Please enter your email address");
			return false;
		}
		if (!em.test(query.email)) {
			window.alert("Please enter a valid email address");
			return false;
		}
		if (query.subject === "") {
			window.alert("Please enter a subject");
			return false;
		}
		if (query.body === "") {
			window.alert("Please fill out the details");
			return false;
		}
		return true;
	}
	function handleSubmit() {
		if (!checkQuery(formData)) return;
		postContact(formData);
		window.alert("We shall contact you soon");
		setFormData({ fullname: "", email: "", subject: "", body: "" });
	}
	return (
		<div className={styles.contactContainer}>
			<div className={styles.contactInfo}>
				<div className={styles.contactInfoSection}>
					<Image src={call} className={styles.contactInfoImg}></Image>
					<div className={styles.contactInfoText}>
						<p className={styles.conatctInfoText}>Call us at:</p>
						<p className={styles.conatctInfoText}>+91-9314011566</p>
						<p className={styles.conatctInfoText}>+91-8003445966</p>
					</div>
				</div>
				<div className={styles.contactInfoSection}>
					<Image src={mail} className={styles.contactInfoImg}></Image>
					<div className={styles.contactInfoText}>
						<p className={styles.conatctInfoText}>Mail us at:</p>
						<p className={styles.conatctInfoText}>dundlodgirlsschool@gmail.com</p>
					</div>
				</div>
			</div>
			<div className={styles.contactSeprator}>
				<div className={styles.contactSepLine}></div>
				<div className={styles.contactSepText}>or</div>
				<div className={styles.contactSepLine}></div>
			</div>
			<div className={styles.contactWrite}>
				<div className={styles.contactWriteBasic}>
					<input
						className={styles.contactWriteInput}
						name="fullname"
						placeholder="Full Name"
						type="text"
						value={formData.fullname}
						onChange={(event) => handleChange(event)}
					/>
					<input
						className={styles.contactWriteInput}
						name="email"
						placeholder="Email-id"
						type="email"
						value={formData.email}
						onChange={(event) => handleChange(event)}
					/>
				</div>
				<div className={styles.contactWriteSub}>
					<p className={styles.contactWriteSubText}>Re :</p>
					<input
						className={styles.contactWriteSubInput}
						name="subject"
						placeholder="Subject"
						type="text"
						value={formData.subject}
						onChange={(event) => {
							handleChange(event);
						}}
					/>
				</div>
				<div className={styles.contactWriteBody}>
					<textarea
						className={styles.contactWriteBodyInput}
						name="body"
						type="text"
						placeholder="Body"
						value={formData.body}
						onChange={(event) => {
							handleChange(event);
						}}
					/>
				</div>
				<div className={styles.contactWriteSubmit}>
					<button
						className={styles.contactWriteSubmitBtn}
						onClick={() => {
							handleSubmit();
						}}
					>
						Submit
					</button>
				</div>
			</div>
		</div>
	);
}
