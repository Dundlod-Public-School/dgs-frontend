import styles from "@/styles/Home.module.css";
import React from "react";
import Events from "@/data/events";
import news1 from "../images/Home/newschool (3).png";
import news2 from "../images/Home/newschool (2).png";
import news3 from "../images/Home/newschool (1).png";
import news4 from "../images/Home/newschool (4).png";

// import news3 from "../images/Home/news3.jpeg";
// import news4 from "../images/Home/news3.jpeg";
import Image from "next/image";

export default function HomePage() {
	const eventsDisp = Events.map((x, i) => {
		return (
			<div className={styles.eventListItem} key={i}>
				<div className={styles.eventListInfo}>{x}</div>
				<div className={styles.eventListSeprator}></div>
			</div>
		);
	});

	return (
		<div>
			<div className={styles.homeContainer}>
				<div className={styles.hero}>
					<div className={styles.image}></div>
					<div className={styles.about}>
						DGS is an English Medium All-Girls' Boarding School projected to be CBSE
						affiliated and is managed by “DUNDLOD SHIKSHAN SANSTHAN, DUNDLOD”. The
						school runs classes from III to VIII with a proposed step-wise expansion to
						the Senior Secondary Level. The campus is situated in a lush green,
						pollution-free locality near the heritage city of Dundlod. It is 2 hour
						journey from Jaipur & 4 hours from Delhi. The nearest airport is Jaipur
						International Airport.
					</div>
				</div>
				<div className={styles.vision}>
					<h1 className={styles.homeVisionHead}>VISION</h1>
					<p className={styles.homeVisionBody}>
						To provide a platform and an environment to each girl child that can
						encourage fearless intellectual curiosity, and an uncompromising sense of
						fair play empowering girls to be future leaders with a global perspective
						and Indian ethos. To ensure integrated quality education and all-around
						development of students in a safe, respectful and inclusive environment with
						excellent faculty that promises to build a foundation for life-long
						learning.
					</p>
				</div>
				<div className={styles.current}>
					<div className={styles.event}>
						<h1 className={styles.eventHead}>EVENTS</h1>
						<div className={styles.eventSep}></div>
						<div className={styles.eventList}>{eventsDisp}</div>
					</div>
					<div className={styles.media}>
						<div className={styles.mediaHead}>MEDIA</div>
						<div className={styles.mediaBody}>
							<div className={styles.news1}></div>
							
							<div className="img-media1">
							</div>

							<div className="img-media2">
							</div>
							<div className="img-media5">
							</div>
							
						
						
						</div>
					</div>
				</div>
				<div className={styles.aims}>
					<div className={styles.aimsHead}>Aims and Objectives</div>
					<div className={styles.aimsBody}>
						<div className={styles.aimsLeft}>
							<div className={styles.aimsList}>
								<div className={styles.aimsListDecor}></div>
								<p className={styles.aimsListInfo}>
									To give education to all irrespective of caste, creed and
									colour, in an atmosphere of purity, efficiency, discipline and
									Indian culture with special emphasis on character building
								</p>
							</div>
							<div className={styles.aimsList}>
								<div className={styles.aimsListDecor}></div>
								<p className={styles.aimsListInfo}>
									To activate academic excellence through a team of dedicated
									teachers from all over the country
								</p>
							</div>
							<div className={styles.aimsList}>
								<div className={styles.aimsListDecor}></div>
								<p className={styles.aimsListInfo}>
									To develop integrity and fullness of versatile character in the
									child
								</p>
							</div>
							<div className={styles.aimsList}>
								<p className={styles.aimsListInfo}>
									To provide training in leadership
								</p>
								<div className={styles.aimsListDecor}></div>
							</div>
							<div className={styles.aimsList}>
								<p className={styles.aimsListInfo}>
									To develop qualities of a good human being like respect for the
									parents & elders, compassion, truthfulness, honesty etc
								</p>
								<div className={styles.aimsListDecor}></div>
							</div>
						</div>
						<div className={styles.aimsRight}>
							<div className={styles.aimsList}>
								<p className={styles.aimsListInfo}>
									To impart value based education through thoughtfully designed
									educational programmes, cultural activities, co-curricular
									activities, games and sports
								</p>
								<div className={styles.aimsListDecor}></div>
							</div>
							<div className={styles.aimsList}>
								<p className={styles.aimsListInfo}>
									To achieve academic excellence in games and sports through a
									team of NIS-trained coaches and PETs
								</p>
								<div className={styles.aimsListDecor}></div>
							</div>
							<div className={styles.aimsList}>
								<p className={styles.aimsListInfo}>
									To develop officer-like qualities through a flawless system
								</p>
								<div className={styles.aimsListDecor}></div>
							</div>
							<div className={styles.aimsList}>
								<p className={styles.aimsListInfo}>
									To inculcate awareness among students to maintain environmental
									purity and ecological harmony
								</p>
								<div className={styles.aimsListDecor}></div>
							</div>
							<div className={styles.aimsList}>
								<p className={styles.aimsListInfo}>
									To provide the country, with a future generation enriched in
									excellent character qualities
								</p>
								<div className={styles.aimsListDecor}></div>
							</div>
						</div>
					</div>
				</div>

				<div className="images-section">
						
				<div className="img-media">
							<Image src={news1} />
							</div>
								
							<div className="img-media">
							<Image src={news3} />
							</div>
								
							<div className="img-media">
							<Image src={news2} />
							</div>	
							<div className="img-media">
							<Image src={news4} />
							</div>
				</div>
			</div>
		</div>
	);
}
