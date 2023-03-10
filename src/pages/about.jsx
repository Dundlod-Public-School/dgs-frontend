import Footer from "@/components/Footer";
import JoinUs from "@/components/JoinUs";
import Navbar from "@/components/Navbar";
import AboutPage from "@/components/AboutPage";

export default function About() {
	return (
		<>
			<AboutPage />
			<Navbar page="About" />
			<Footer />
			<JoinUs />
		</>
	);
}
