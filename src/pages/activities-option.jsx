import Footer from "@/components/Footer";
import JoinUs from "@/components/JoinUs";
import Navbar from "@/components/Navbar";
import ActivitiesOption from "@/components/ActivitiesOptionPage";

export default function Activities() {
	return (
		<>
			<ActivitiesOption />
			<Navbar page="Activities" />
			<Footer />
			<JoinUs />
		</>
	);
}
