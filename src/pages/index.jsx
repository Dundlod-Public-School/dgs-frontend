import Footer from "@/components/Footer";
import JoinUs from "@/components/JoinUs";
import Navbar from "@/components/Navbar";
import HomePage from "@/components/HomePage";

export default function Home() {
	return (
		<>
			<HomePage />
			<Navbar page="Home" />
			<Footer />
			<JoinUs />
		</>
	);
}
