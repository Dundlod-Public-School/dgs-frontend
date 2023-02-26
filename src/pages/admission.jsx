import Footer from "@/components/Footer";
import JoinUs from "@/components/JoinUs";
import Navbar from "@/components/Navbar";
import AdmissionPage from "@/components/AdmissionPage";

export default function Home() {
	return (
		<>
			<div className="navbar-margin-manager"></div>
			<AdmissionPage />
			<Navbar page="Admission" />
			<Footer />
			<JoinUs />
		</>
	);
}
