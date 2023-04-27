import styles from "@/styles/Registration.module.css";
import React from "react";
import { postStudent } from "@/pages/api/forms";

export default function StudentRegistrationPage() {
	const [formData, setFormData] = React.useState({
		fullname: "",
		email: "",
		class: "",
		fathername: "",
		mothername: "",
		dob: "",
		phone: "",
		iswhatsapp: true,
		whatsapp: "",
		address: "",
	});

	function handleChange(e) {
		setFormData((prev) => {
			return {
				...prev,
				[e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value,
			};
		});
	}
	function isValid(data) {
		let keys = Object.keys(data);
		const em = /^[\w.+\-]+@gmail\.com$/;
		const al = /^[A-Za-z ]+$/;
		const ph = /^\+\d{12}$/;
		for (let i = 0; i < keys.length; i++) {
			if (data[keys[i]] === "") {
				window.alert("Please enter " + keys[i]);
				return false;
			}
		}
		if (!al.test(data.fullname) || !al.test(data.fathername) || !al.test(data.mothername)) {
			window.alert("Names should be alphabets");
			return false;
		}
		if (!em.test(data.email)) {
			window.alert("Please enter valid email");
			return false;
		}
		if (!ph.test(data.phone)) {
			window.alert("Please enter valid phone number");
			return false;
		}
		if (!ph.test(data.whatsapp)) {
			window.alert("Please enter valid phone number");
			return false;
		}
		return true;
	}
	function handleSubmit() {
		let sendData = formData;
		if (sendData.iswhatsapp)
			sendData = {
				...sendData,
				whatsapp: sendData.phone,
			};
		if (!isValid(sendData)) return;
		console.log(sendData);
		postStudent(sendData);
	}

	return (
		<div>
			<div className={styles.regContainer}>
				<div className={styles.formContainer}>
					<h1 className={styles.formHead}>Student Registration</h1>
					<div className={styles.formBody}>
						<div className={styles.row1}>
							<div className={styles.studentName}>
								<input
									className={styles.studentTextInput}
									name="fullname"
									placeholder="Full Name"
									type="text"
									value={formData.fullname}
									onChange={(event) => handleChange(event)}
								></input>
							</div>
							<div className={styles.studentEmail}>
								<input
									className={styles.studentTextInput}
									name="email"
									placeholder="Email"
									type="email"
									value={formData.email}
									onChange={(event) => handleChange(event)}
								></input>
							</div>
							<div className={styles.studentClass}>
								<label htmlFor="class" className={styles.labels}>
									Class
								</label>
								<select
									className={styles.classInput}
									name="class"
									value={formData.class}
									onChange={(event) => {
										handleChange(event);
									}}
								>
									<option vlaue="">--</option>
									<option value="II">II</option>
									<option value="III">III</option>
									<option value="IV">IV</option>
									<option value="V">V</option>
									<option value="VI">VI</option>
									<option value="VII">VII</option>
									<option value="VIII">VIII</option>
								</select>
							</div>
						</div>
						<div className={styles.row2}>
							<div className={styles.fatherName}>
								<input
									className={styles.studentTextInput}
									name="fathername"
									placeholder="Father's Name"
									type="text"
									value={formData.fathername}
									onChange={(event) => handleChange(event)}
								></input>
							</div>
							<div className={styles.motherName}>
								<input
									className={styles.studentTextInput}
									name="mothername"
									placeholder="Mother's Name"
									type="text"
									value={formData.mothername}
									onChange={(event) => handleChange(event)}
								></input>
							</div>
						</div>
						<div className={styles.row3}>
							<div className={styles.studentDob}>
								<label htmlFor="dob" className={styles.labels}>
									Date of Birth
								</label>
								<input
									className={styles.studentTextInput}
									name="dob"
									placeholder="dd.mm.yyyy"
									type="text"
									value={formData.dob}
									onChange={(event) => handleChange(event)}
								></input>
							</div>
							<div className={styles.phoneNumber}>
								<label htmlFor="phone" className={styles.labels}>
									Phone Number
								</label>
								<input
									className={styles.studentTextInput}
									name="phone"
									placeholder="+91XXXXXXXXXX"
									type="text"
									value={formData.phone}
									onChange={(event) => handleChange(event)}
								></input>
							</div>
						</div>
						<div className={styles.row4}>
							<div className={styles.check}>
								<input
									className={styles.checkInput}
									name="iswhatsapp"
									checked={formData.iswhatsapp}
									type="checkbox"
									onChange={(event) => handleChange(event)}
								></input>
								<h6 className={styles.checkText}>
									This is also my WhatsApp number
								</h6>
							</div>
							{!formData.iswhatsapp && (
								<div className={styles.whatsappNumber} id="whatsapp-id">
									<label htmlFor="whatsapp" className={styles.labels}>
										WhatsApp Number
									</label>
									<input
										className={styles.studentTextInput}
										name="whatsapp"
										placeholder="+91XXXXXXXXXX"
										type="text"
										value={formData.whatsapp}
										onChange={(event) => handleChange(event)}
									></input>
								</div>
							)}
						</div>
						<div className={styles.row5}>
							<label htmlFor="address" className={styles.labels}>
								Address
							</label>
							<textarea
								className={styles.address}
								name="address"
								type="text"
								value={formData.address}
								onChange={(event) => handleChange(event)}
							></textarea>
						</div>
						<div className={styles.row6}>
							<button
								className={styles.submit}
								onClick={() => {
									handleSubmit();
								}}
							>
								Submit
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
