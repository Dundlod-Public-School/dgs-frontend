import React from "react";
import styles from "@/styles/activities.module.css";
import Image from "next/image";
import image1 from "../images/Activities/curri.png";
import image2 from "../images/Activities/curri2.png";
import image3 from "../images/Activities/updown.png";

function Sidebar() {
	return (
		<div className={styles.sidebarCurri}>
			<div className={styles.sidebarSection}>
				<div className={styles.sidebarHeader}>
					<div className={styles.sidebarTitle}>Curricular Activities</div>
					<Image className={styles.updown} src={image3}></Image>
				</div>
				<div className={styles.sidebarPoints}>
					<a className={`${styles.point} ${styles.co}`} href="#Sports">
						Sports
					</a>
					<a className={`${styles.point} ${styles.co}`} href="#Indoor">
						Indoor Sports Complex
					</a>
					<a className={`${styles.point} ${styles.co}`} href="#Cultural">
						Cultural & Literary
					</a>
					<a className={`${styles.point} ${styles.co}`} href="#Auditorium">
						School Auditorium
					</a>
					<a className={`${styles.point} ${styles.co}`} href="#Music">
						Music
					</a>
					<a className={`${styles.point} ${styles.co}`} href="#Art">
						Art & Craft
					</a>
					<a className={`${styles.point} ${styles.co}`} href="#Personality">
						Personality Development
					</a>
					<a className={`${styles.point} ${styles.co}`} href="#Clubs">
						Clubs
					</a>
				</div>
			</div>
		</div>
	);
}

export default function CoCurriculumPage() {
	return (
		<div>
			<div className={styles.spaceTop}></div>
			<div className={styles.curriMain}>
				<Sidebar />
				<div className={styles.curriContent}>
					<div className={styles.headContent}>
						Students have been divided into four houses: Red, Blue, Green & Yellow. To
						bring out the hidden talents of the children, inter-house competitions in
						sports and cultural & literary activities are organised on and off around
						the year. These competitions provide tremendous scope for the development of
						creativity & physical health.
					</div>

					<div className={styles.curriSection}>
						<div className={styles.curriTitle}>Co-Curricular Activities</div>

						<div className={styles.sectionContent} id="Sports">
							<Image src={image1} className={styles.curriImg}></Image>
							<div className={styles.sectionText}>
								<span className={styles.bold}>Sports</span>: Games and sports are
								integral to the school curriculum. Children are trained in various
								games and sports to prepare them for Inter-School, State, National &
								International competitions. The school trains students in many
								games/sports like table tennis, lawn tennis, basketball, badminton,
								football, volleyball, hockey, cricket, boxing, judo karate,
								taekwondo, gymnastics & horse riding and swimming. National-level
								coaches have been appointed to groom the children in various sports.
								The fields of all outdoor games are covered with grass. Indoor games
								like table tennis, chess, carom etc. are played in the spacious
								sports room.
							</div>
						</div>
						<div
							className={`${styles.sectionContent} ${styles.sectionRight}`}
							id="Indoor"
						>
							<Image src={image2} className={styles.curriImg}></Image>
							<div className={styles.sectionText}>
								<span className={styles.bold}>Indoor Sports Complex</span>:
								Addressing the growing needs of the students, a very spacious indoor
								sports complex has been erected. There are numerous ping pong tables
								apart from one basketball and three badminton courts
							</div>
						</div>
						<div className={styles.sectionContent} id="Cultural">
							<Image src={image1} className={styles.curriImg}></Image>
							<div className={styles.sectionText}>
								<span className={styles.bold}>Cultural & Literary Activities</span>:
								Cultural & literary activities develop the aesthetic beauty in the
								students’ personalities. The school provides profound opportunities
								to each individual child to come up on the stage through their
								various cultural and literary activities like debate, dramatics,
								elocution, extempore speech, Western & Indian solo and group song
								and dance, Western instrumental music, Painting, Drawing,
								Calligraphy, Origami competitions, Symposium, Seminar, Funfair,
								Exhibition etc. The students display their cultural & literary
								tastes at the Annual Function apart from CCAs every Saturday.
							</div>
						</div>
						<div
							className={`${styles.sectionContent} ${styles.sectionRight}`}
							id="Auditorium"
						>
							<Image src={image2} className={styles.curriImg}></Image>
							<div className={styles.sectionText}>
								<span className={styles.bold}> School Auditorium</span> School
								Auditorium: It is an imposing coherent structure, equipped with the
								most modern audio-visual facilities that can seat over two thousand
								audiences. It hosts myriad events around the year encompassing the
								Annual Function Day celebration and every Saturday Inter House
								School Competition. Playing a pivotal and critical role in the
								holistic development of students’ personalities it boasts of
								grooming their inborn virtues.
							</div>
						</div>
						<div className={styles.sectionContent} id="Music">
							<Image src={image1} className={styles.curriImg}></Image>
							<div className={styles.sectionText}>
								<span className={styles.bold}> Music Department</span>: The music
								room has more than 50 Indian and Western musical instruments. All
								sorts of instruments like harmonium, tabla, dholak, guitar,
								synthesiser, Casio, and marques adorn the music room. Adapt
								instructors from music-rich states have been appointed to impart
								music education. Children are motivated to learn at least one Indian
								and one western musical instrument during their schooling. The
								school has its own orchestra, which can compel everyone to raise
								their feet. A group of highly skilled teachers is always ready to
								guide the children in real guru-shishya spirit.
							</div>
						</div>
						<div className={`${styles.sectionContent} ${styles.sectionRight}`} id="Art">
							<Image src={image1} className={styles.curriImg}></Image>
							<div className={styles.sectionText}>
								<span className={styles.bold}>Art & Craft Department</span>: It's a
								big hall which embodies all the traits of modern & ancient art. Here
								children are motivated to try their hands at drawing, painting,
								sculpture, origami etc.
							</div>
						</div>
						<div className={styles.sectionContent} id="Personality">
							<Image src={image2} className={styles.curriImg}></Image>
							<div className={styles.sectionText}>
								<span className={styles.bold}>
									Personality Development Sessions
								</span>
								: Having been cognizant that early life events shape one’s
								personality, the school successfully runs weekly personality
								development sessions. The resource persons who are well trained and
								qualified in delivering sessions visit the school and make earnest
								endeavours to boost students' confidence and morale, enhance their
								public communication and language skills, widen their scope of
								knowledge, develop their hobbies, add style and grace to their
								professional demeanour and define their social manners and
								etiquettes.{" "}
							</div>
						</div>
						<div
							className={`${styles.sectionContent} ${styles.sectionRight}`}
							id="Clubs"
						>
							<Image src={image1} className={styles.curriImg}></Image>
							<div className={styles.sectionText}>
								<span className={styles.bold}>Clubs</span>: The school runs
								different clubs to provide an opportunity for adaptation to life in
								the group. Students learn to cope with situations early, learn good
								lifelong habits and cultivate a voluntaristic spirit. They become a
								good and productive asset for the nation. Club activities supplement
								academics and give the students practical training, which will be
								handy later.
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
