import Footer from "@/components/Footer";
import JoinUs from "@/components/JoinUs";
import Navbar from "@/components/Navbar";
import CoCurriculumPage from "@/components/CoCurriculumPage";

export default function CoCurriculum() {
	return (
		<>
			<div className="navbar-margin-manager"></div>
			<CoCurriculumPage />
			<Navbar page="Activities" />
			<Footer />
			<JoinUs />
		</>
	);
}
