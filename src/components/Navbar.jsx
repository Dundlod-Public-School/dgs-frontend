import styles from "@/styles/Navbar.module.css";
import React from "react";
import Link from "next/link";

export default function Navbar(props) {
	const [open, setOpen] = React.useState(false);
	function handleLogin() {
		alert("Coming soon....");
	}
	function handleMenu() {
		let x = window.matchMedia("(max-width: 900px)");
		let styling = document.getElementById("menu-list").style;
		if (x.matches) {
			styling.display = open ? "none" : "flex";
			setOpen((prev) => !prev);
		}
	}

	return (
		<div className={styles.nav}>
			<div className={styles.menu}>
				<div className={styles.menuIcon} onClick={handleMenu}></div>
			</div>
			<Link href="/" className={styles.logo}></Link>
			<div className={styles.login}>
				<button className={styles.loginBtn} onClick={handleLogin}>
					<div className={styles.btnIcon}></div>
					<div className={styles.btnTxt}>Login</div>
				</button>
			</div>
			<div className={styles.pages} id="menu-list">
				<Link
					href={"/"}
					className={props.page == "Home" ? styles.active : styles.pageLinks}
				>
					Home
				</Link>
				<Link
					href={"/about"}
					className={props.page == "About" ? styles.active : styles.pageLinks}
				>
					About us
				</Link>
				<Link
					href={"/activities-option"}
					className={props.page == "Activities" ? styles.active : styles.pageLinks}
				>
					Activities
				</Link>
				<Link
					href={"/admission"}
					className={props.page == "Admission" ? styles.active : styles.pageLinks}
				>
					Admission
				</Link>
				<Link
					href={
						"https://drive.google.com/file/d/1uYLqdqYRLx9h4yE7G7Tshf6otn1jSpZw/view?usp=sharing"
					}
					className={styles.pageLinks}
					target="_blank"
				>
					Calender
				</Link>
				<Link
					href={
						"https://drive.google.com/file/d/1f-3LQlQNl-fLUHzZceTRrtU-HfuUOJR4/view?usp=sharing"
					}
					className={styles.pageLinks}
					target="_blank"
				>
					Fee Structure
				</Link>
				<Link
					href={"/gallery"}
					className={props.page == "Gallery" ? styles.active : styles.pageLinks}
				>
					Gallery
				</Link>
				<Link
					href={"/contact"}
					className={props.page == "Contact" ? styles.active : styles.pageLinks}
				>
					Contact us
				</Link>
			</div>
		</div>
	);
}
