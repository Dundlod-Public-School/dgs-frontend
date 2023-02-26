import Footer from "@/components/Footer";
import JoinUs from "@/components/JoinUs";
import Navbar from "@/components/Navbar";
import ContactPage from "@/components/ContactPage";

export default function Contact() {
	return (
		<>
			<ContactPage />
			<Navbar page="Contact" />
			<Footer />
			<JoinUs />
		</>
	);
}
