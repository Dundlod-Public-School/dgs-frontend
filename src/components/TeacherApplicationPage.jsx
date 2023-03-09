import React, { useEffect, useState } from "react";
import styles from "@/styles/Registration.module.css";
import tback from "../images/Registration/bacground.jpg";
import female from "../images/Registration/female.png";
import male from "../images/Registration/male.png";
import married_img from "../images/Registration/married.png";
import unmarried from "../images/Registration/unmar.png";
import { postTeacher } from "../pages/api/forms";
import Image from "next/image";

function Basic(props) {
	const { data, modifyData } = props;
	return (
		<div className={styles.basic}>
			<div className={styles.brow}>
				<input
					type="text"
					className={styles.input_field}
					placeholder={"Full Name"}
					onChange={(e) => {
						modifyData("name", e.target.value);
					}}
				></input>
				<input
					className={styles.input_field}
					placeholder={"Post Applied For"}
					onChange={(e) => {
						modifyData("post", e.target.value);
					}}
				></input>
			</div>
			<div className={styles.brow}>
				<input
					className={styles.input_field}
					placeholder={"Email"}
					onChange={(e) => {
						modifyData("email", e.target.value);
					}}
				></input>
				<input
					type="text"
					className={styles.input_field}
					placeholder={"Father’s Name"}
					onChange={(e) => {
						modifyData("fatherName", e.target.value);
					}}
				></input>
			</div>
			<div className={styles.dob}>Date of Birth</div>
			<div className={styles.brow}>
				<input
					type="date"
					className={styles.input_field}
					placeholder={""}
					onChange={(e) => {
						modifyData("dob", e.target.value.toString());
					}}
				></input>
				<input
					className={styles.input_field}
					placeholder={"Nationality"}
					onChange={(e) => {
						modifyData("nationality", e.target.value);
					}}
				></input>
			</div>
			<div className={styles.brow}>
				<div className={styles.switch}>
					<div
						className={`${styles.ele} ${styles.ele1} ${
							data.gender === "female" ? styles.Sactive : ""
						}`}
						onClick={() => {
							modifyData("gender", "female");
						}}
					>
						<div className={styles.Stext}>Female</div>
						<Image src={female} className={styles.switchicon}></Image>
					</div>
					<div
						className={`${styles.ele} ${styles.ele2} ${
							data.gender === "male" ? styles.Sactive : ""
						}`}
						onClick={() => {
							modifyData("gender", "male");
						}}
					>
						<Image src={male} className={styles.switchicon}></Image>
						<div className={styles.Stext}>Male</div>
					</div>
				</div>
				<div className={styles.switch}>
					<div
						className={`${styles.ele} ${styles.ele1} ${
							data.married === "married" ? styles.Sactive : ""
						}`}
						onClick={() => {
							modifyData("married", "married");
						}}
					>
						<div className={styles.Stext}>Married</div>
						<Image src={married_img} className={styles.switchicon}></Image>
					</div>
					<div
						className={`${styles.ele} ${styles.ele2} ${
							data.married === "unmarried" ? styles.Sactive : ""
						}`}
						onClick={() => {
							modifyData("married", "unmarried");
						}}
					>
						<Image src={unmarried} className={styles.switchicon}></Image>
						<div className={styles.Stext}>Unmarried</div>
					</div>
				</div>
			</div>
			{data.married == "married" && (
				<div className={styles.brow}>
					<input
						type="text"
						className={styles.input_field}
						placeholder={"Spouse’s Name"}
						onChange={(e) => {
							modifyData("spouse", e.target.value);
						}}
					></input>
					<input
						className={styles.input_field}
						placeholder={"Occupation"}
						onChange={(e) => {
							modifyData("spouseOcc", e.target.value);
						}}
					></input>
				</div>
			)}

			<textarea
				className={styles.textArea}
				placeholder={"Permanent Address........"}
				maxLength={20}
				onChange={(e) => {
					modifyData("address", e.target.value);
				}}
			></textarea>
		</div>
	);
}

function Education(props) {
	const { data, modifyData } = props;
	const [bach, setBach] = useState("");
	const [masters, setMasters] = useState("");
	const [doct, setDoct] = useState("");
	const [high, setHigh] = useState("");

	useEffect(() => {
		modifyData("education", [bach, masters, doct, high]);
	}, [bach, masters, doct, high]);
	return (
		<div className={styles.basic}>
			<div className={styles.subTitle}>Class X/XII</div>
			<textarea
				className={`${styles.textArea} ${styles.Etarea}`}
				placeholder={"Class \n Marks scored \n Board \n School"}
				onChange={(e) => {
					setHigh(e.target.value);
				}}
				maxLength={20}
			></textarea>
			<div className={styles.subTitle}>Bachelors</div>
			<textarea
				className={`${styles.textArea} ${styles.Etarea}`}
				placeholder={"Degree\nMarks scored\nCollege/University"}
				maxLength={20}
				onChange={(e) => {
					setBach(e.target.value);
				}}
			></textarea>
			<div className={styles.subTitle}>Masters</div>
			<textarea
				className={`${styles.textArea} ${styles.Etarea}`}
				placeholder={"Degree\nMarks scored\nCollege/University"}
				maxLength={20}
				onChange={(e) => {
					setMasters(e.target.value);
				}}
			></textarea>
			<div className={styles.subTitle}>Doctrate</div>
			<textarea
				className={`${styles.textArea} ${styles.Etarea}`}
				placeholder={"Subject\nCollege/University"}
				maxLength={20}
				onChange={(e) => {
					setDoct(e.target.value);
				}}
			></textarea>
		</div>
	);
}

function Experience(props) {
	const { data, modifyData } = props;
	const [addExp, setAdd] = useState(1);

	const handleChange = (index, value) => {
		console.log(index);
		const newValues = data.experience;
		newValues[index] = value;
		modifyData("experience", newValues);
		console.log(data);
	};
	useEffect(() => {
		modifyData("experience", [...data.experience, ""]);
	}, [addExp]);
	useEffect(() => {
		modifyData("experience", []);
	}, []);
	return (
		<div className={styles.basic}>
			{Array.from(Array(addExp)).map((value, index) => (
				<textarea
					key={value}
					className={`${styles.textArea} ${styles.Exparea}`}
					placeholder={
						"Post\n Years Worked\nOrganization\nAccomplishment during the period(if any)"
					}
					maxLength={60}
					onChange={(e) => {
						handleChange(index, e.target.value);
					}}
				></textarea>
			))}

			{/* <input type="file" name="file" id="file" className={styles.inputfile" /> */}
			<label
				className={styles.filetext}
				onClick={() => {
					setAdd(addExp + 1);
				}}
			>
				Add experience
			</label>
		</div>
	);
}

function Misc(props) {
	const { data, modifyData } = props;
	return (
		<div className={styles.basic}>
			<div className={`${styles.brow} ${styles.center}`}>
				<input
					type="text"
					className={`${styles.input_field} ${styles.miscField}`}
					placeholder={"Last Salary Drawn"}
					onChange={(e) => {
						modifyData("lastSalary", e.target.value);
					}}
				></input>
				<input
					className={`${styles.input_field} ${styles.miscField}`}
					placeholder={"Expected Salary"}
					onChange={(e) => {
						modifyData("expected", e.target.value);
					}}
				></input>
			</div>

			<div className={styles.Mtext1}>
				I hereby certify that the particulars furnished above are correct to the best of my
				knowledge and belief. I have not concealed any information likely to impair my
				fitness for employment. It is revealed later that I have given false/incorrect
				details or concealed material information; my services are liable to summary
				termination without any notice or compensation.
			</div>
			<br></br>
			<div className={`${styles.Mtext1} ${styles.Aleft}`}>
				If sstyles.elected. I shall produce :<br></br>
				<br></br>
				<ol className={styles.olMisc}>
					<li>1. Original Certificate for Verification</li>
					<li>
						2. Certificates from any last employer duly counter signed by the competent
						authority
					</li>
					<li>
						3. Xerox/Photostat copy of
						<ul className={styles.ulMisc}>
							<li> Medical Certificate from a recognized hospital</li>
							<li>Latest Character Certificate</li>
							<li>Aadhar Card Copy</li>
							<li>PAN Card Copy</li>
							<li>Marriage Certificate (if married)</li>
							<li>Police Verification Certificate</li>
							<li>
								Photos of I.D. Proof (Aadhar Card/Voter ID/Driving License/Passport)
							</li>
						</ul>
					</li>
				</ol>
			</div>
		</div>
	);
}

export default function TeacherApplicationPage() {
	const [isActive, setActive] = useState(0);
	const [data, setData] = useState({ married: "unmarried", gender: "female", experience: [] });
	const modifyData = (field, value) => {
		setData({ ...data, [field]: value });
	};
	const handleSubmit = () => {
		postTeacher(data);
	};
	console.log(data);
	return (
		<>
			<div className={styles.Tback}>
				<Image className={styles.tback_img} src={tback} alt="" />
				<div className={styles.Tlayout}>
					<div className={styles.Ttitle}>Teacher’s Application</div>
					<div className={styles.Tbar}>
						<button
							className={`${styles.barSection} ${
								isActive === 0 ? styles.Tactive : ""
							}`}
							onClick={() => {
								setActive(0);
							}}
						>
							Basic Info
						</button>
						<button
							className={`${styles.barSection} ${
								isActive === 1 ? styles.Tactive : ""
							}`}
							onClick={() => {
								setActive(1);
							}}
						>
							Education
						</button>
						<button
							className={`${styles.barSection} ${
								isActive === 2 ? styles.Tactive : ""
							}`}
							onClick={() => {
								setActive(2);
							}}
						>
							Experience
						</button>
						<button
							className={`${styles.barSection} ${
								isActive === 3 ? styles.Tactive : ""
							}`}
							onClick={() => {
								setActive(3);
							}}
						>
							Miscellaneous
						</button>

						{/* <DropDown isActive={isActive} setActive={setActive} /> */}
					</div>

					{
						{
							0: <Basic data={data} setData={setData} modifyData={modifyData} />,
							1: <Education data={data} setData={setData} modifyData={modifyData} />,
							2: <Experience data={data} setData={setData} modifyData={modifyData} />,
							3: <Misc data={data} setData={setData} modifyData={modifyData} />,
						}[isActive]
					}

					<button
						className={styles.nextBtn}
						onClick={() => {
							if (isActive !== 3) setActive(isActive + 1);
							else handleSubmit();
						}}
					>
						{isActive !== 3 ? "Next" : "Agree and Continue"}
					</button>
				</div>
			</div>
		</>
	);
}
