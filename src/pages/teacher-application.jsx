import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TeacherApplicationPage from "@/components/TeacherApplicationPage";

export default function TeacherApplication() {
	return (
		<>
			<div className="navbar-margin-manager"></div>
			<TeacherApplicationPage />
			<Navbar />
			<Footer />
		</>
	);
}
