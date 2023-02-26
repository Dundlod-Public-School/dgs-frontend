import CurriculumPage from "@/components/CurriculumPage";
import Footer from "@/components/Footer";
import JoinUs from "@/components/JoinUs";
import Navbar from "@/components/Navbar";

export default function Curriculum() {
	return (
		<>
			<div className="navbar-margin-manager"></div>
			<CurriculumPage />
			<Navbar page="Activities" />
			<Footer />
			<JoinUs />
		</>
	);
}
