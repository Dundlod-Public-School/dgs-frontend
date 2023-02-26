import React from "react";
import Image from "next/image";
import chairman from "../images/About/chairman.jpg";
import principal from "../images/About/principal.jpg";
import dundlod from "../images/About/dps-dundlod.jpg";
import jhunjhunu from "../images/About/dps-jhunjhunu.jpeg";
import styles from "@/styles/About.module.css";

function AboutBar(props) {
	return (
		<div className={styles.aboutBar}>
			<div
				className={props.page === 1 ? styles.aboutBarActive : styles.aboutBarInactive}
				onClick={() => {
					props.change(1);
				}}
			>
				Chairman Message
			</div>
			<div
				className={props.page === 2 ? styles.aboutBarActive : styles.aboutBarInactive}
				onClick={() => {
					props.change(2);
				}}
			>
				Principal Message
			</div>
			<div
				className={props.page === 3 ? styles.aboutBarActive : styles.aboutBarInactive}
				onClick={() => {
					props.change(3);
				}}
			>
				Other Branches
			</div>
		</div>
	);
}

function Page1() {
	return (
		<div className={styles.aboutMessageContainer}>
			<div className={styles.aboutMsgLeaflet}>
				<div className={styles.aboutLeafletImg}>
					<Image src={chairman} className={styles.aboutLeafletImg} />
				</div>
				<div className={styles.aboutLeafletName}>-Mr S S Ranwa</div>
			</div>
			<div className={styles.aboutMsgContent}>
				<div className={styles.aboutContentHeader}>
					“Education is not the learning of facts, but the training of the mind to think.”
				</div>
				<div className={styles.aboutContentBody}>
					Dear All With the sole raison d'être to give easy access to the girls to the
					crème de la creme education that can catapult them to a new height where they
					can carve a niche in society on par with their potential, Dundlod Girls' School
					has come into existence. Riding high on a vision that claims to provide a
					congenial environment for each girl child to develop fearless intellectual
					curiosity and a mission to build a strong foundation for life – long learning,
					the school vows to leave an everlasting imprint on the Shekhawati region. Little
					wonder the immediate requirement of the present day's smart student is to
					exploit the challenges and opportunities at hand at the outside in her personal
					and professional life to be on the top of the tree. In this way, every student
					will be able to shoulder the onus which they would be assigned in the times to
					come once they complete their schooling. Our education system has phenomenal
					powers to bring substantial benefits to the individual and the society. DGS'
					prime objective is to meet the intellectual, social and academic needs of every
					student through appropriate and relevant quality inputs. DGS has shaped itself
					into a brand and is sine qua non for quality and successful life. I extend a
					warm welcome to our students and wish them a great future after a rewarding
					stint of educational career at DGS.
				</div>
			</div>
		</div>
	);
}

function Page2() {
	return (
		<div className={styles.aboutMessageContainer}>
			<div className={styles.aboutMsgLeaflet}>
				<div className={styles.aboutLeafletImg}>
					<Image src={principal} className={styles.aboutLeafletImg} />
				</div>
				<div className={styles.aboutLeafletName}>-Shipra Sharma </div>
			</div>
			<div className={styles.aboutMsgContent}>
				<div className={styles.aboutContentHeader}></div>
				<div className={styles.aboutContentBody}>
					In today's scenario, children live in a world where values are changing fast. So
					we have to recognize the importance of aesthetics and strive hard for the
					student's mental and spiritual development. Nothing can be taken for granted
					that makes students responsible and sensible human beings who have much to
					contribute towards the growth of society and the nation. DGS fraternity welcomes
					every new productive association with the school. DUNDLOD GIRLS' SCHOOL
					Balwantpura is a temple of learning that radiates knowledge and excellence for
					the pupils who come here to grow and develop. The holistic development in the
					salubrious environs of the huge campus brings each innocent heart closer to
					nature in a melodious song of unison. Academic excellence is a must-do on our
					priority list, while we encompass the core with a strong value system that shall
					sustain these young minds in the journey of their lives. We strengthen their
					foundations with the bulwark of our Indian culture and tradition but teach
					changes with an open, yet, discerning mind. them to embrace progressive Every
					girl who steps into this veritable wonderland of rambling paths, trees, flowers,
					and exotic birds gets to enjoy best of both the world's privacy and peace
					combined with modern links. She celebrates diversity in the learning environment
					which promotes independent thinkers with a happy mind and compassion towards
					other beings. She understands that she needs to compete with herself by
					stretching her boundaries, rather competing with others to be successful and
					attain excellence in life. She must aspire to attain new heights, not for the
					world to see her at the top rather for her to see the world from the top. I am
					confident enough that the DGS will make every new entity stronger day by day,
					adding a new leaf to the grandeur of the school.
				</div>
			</div>
		</div>
	);
}

function Page3() {
	const [over, setOver] = React.useState({
		dundlod: window.matchMedia("(max-width:900px)").matches,
		jhunjhunu: window.matchMedia("(max-width:900px)").matches,
	});
	function handleDundlod() {
		setOver((prev) => {
			return { ...prev, dundlod: !prev.dundlod };
		});
	}
	function handleJhunjhunu() {
		setOver((prev) => {
			return { ...prev, jhunjhunu: !prev.jhunjhunu };
		});
	}
	return (
		<div className={styles.aboutBranchContainer}>
			<div
				className={styles.aboutBranchTile}
				onMouseEnter={handleDundlod}
				onMouseLeave={handleDundlod}
			>
				<div className={styles.aboutBranchTileShown}>
					<Image src={dundlod} className={styles.aboutTileImage} />
					<div className={styles.aboutTileText}>
						Dundlod Public School for Excellence. Since our establishment, we have been
						continuously honoured with the first prize in both Independence Day and the
						Republic Day parade held at headquarter confirming our belief in building
						disciplined and decent citizens. Given our unique process of imparting
						education and inculcating good manners and etiquette in our students, we
						have been every now and then felicitated by local administration reflecting
						our stress on working at grass root.
					</div>
				</div>
				{over.dundlod && (
					<div className={styles.aboutBranchTileHidden}>
						<a
							className={styles.aboutBranchTileLink}
							href="https://dundlodpublicschool.com/dundlod-school/"
						>
							Visit for yourself
						</a>
					</div>
				)}
			</div>
			<div
				className={styles.aboutBranchTile}
				onMouseEnter={handleJhunjhunu}
				onMouseLeave={handleJhunjhunu}
			>
				<div className={styles.aboutBranchTileShown}>
					<Image src={jhunjhunu} className={styles.aboutTileImage} />
					<div className={styles.aboutTileText}>
						Aching for an institution that people can claim its own and genuine, the
						school management ,in an earnest endeavor, tries to seek all possible means
						to give a platform to its students for their self-exposure which in return
						paves a way for their self and independent growth. Jhunjhunu School strives
						hard to cash on the co-curricular activities that are within its access so
						as to have a glittering collection of memoir. Be it school, district, state
						or national level, it undoubtedly avails itself of these activities and
						students bring laurels to school.
					</div>
				</div>
				{over.jhunjhunu && (
					<div className={styles.aboutBranchTileHidden}>
						<a
							className={styles.aboutBranchTileLink}
							href="https://dundlodpublicschool.com/jhunjhunu-school/"
						>
							Visit for yourself
						</a>
					</div>
				)}
			</div>
		</div>
	);
}

export default function AboutPage() {
	const [page, setPage] = React.useState(1);
	return (
		<div>
			<div className={styles.aboutContainer}>
				<AboutBar page={page} change={setPage} />
				{page === 1 && <Page1 />}
				{page === 2 && <Page2 />}
				{page === 3 && <Page3 />}
			</div>
		</div>
	);
}
