import React, { useEffect, useRef, useState } from "react";
import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";

import ItemNavSlider from "../components/shared/ItemNavSlider";
import HeroContainer from "../components/shared/HeroContainer";
import Form from "../components/Form";
import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header";

import Img1 from "../images/home/img_01.svg";
import Img2 from "../images/home/img_02.svg";
import Img3 from "../images/home/img_03.svg";
import Img4 from "../images/home/img_04.svg";
import Img5 from "../images/home/img_05.svg";

const IndexPage = () => {
	const parallax = useRef<IParallax>(null!);

	const [activeIndex, setActiveIndex] = useState<number>(1);

	const debounce = (func: any, delay: number | undefined) => {
		let timeoutId: string | number | NodeJS.Timeout | undefined;
		return (...args: any) => {
			clearTimeout(timeoutId);
			timeoutId = setTimeout(() => {
				func.apply(this, args);
			}, delay);
		};
	};

	// const debounceSetActiveIndex = debounce((value: number) => {
	// 	setActiveIndex(value);
	// }, 500);

	// const debounceHandleScroll = debounce(() => {
	// 	onScroll();
	// }, 50);

	const debounceHandleScrollTo = debounce((index: number) => {
		const percent = parallax.current.current / parallax.current.space;
		if (percent >= 0.75 && percent <= 5.25) parallax.current.scrollTo(index);
	}, 500);

	const handleClickNav = (index: number) => parallax.current.scrollTo(index);

	const onScroll = () => {
		const percent = parallax.current.current / parallax.current.space;
		const page = Math.round(percent);
		if (page < 1) setActiveIndex(1);
		else if (page >= 1 && page <= 5) setActiveIndex(Math.round(page));
		else setActiveIndex(5);
		debounceHandleScrollTo(page);
	};

	useEffect(() => {
		if (!parallax.current || !parallax.current.container) return;
		parallax.current.container.current.onscroll = onScroll;
	}, [parallax]);

	return (
		<Parallax ref={parallax} pages={7.5}>
			<ParallaxLayer
				offset={0}
				speed={0.5}
				factor={1.1}
				style={{
					backgroundSize: "cover",
					backgroundPositionX: "left",
					zIndex: 0,
				}}
				className="img-home"
			>
				<Header />
				<h1 className="font-walsheimpro w-full md:w-2/3 text-4xl sm:text-5xl lg:text-6xl text-white text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
					Talented candidates selected with our AI that{" "}
					<span className="text-yellow">learns from your Likes (L).</span>
					<br />
					<br className="hidden md:block" /> We recruit for you..
				</h1>
			</ParallaxLayer>
			{/** Confetti Desktop */}
			<ParallaxLayer
				offset={0.1}
				speed={0.8}
				factor={1}
				style={{
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
				className="confetti-home"
			></ParallaxLayer>
			<ParallaxLayer
				sticky={{ start: 1, end: 5 }}
				offset={1}
				speed={0.5}
				factor={1}
				className="hidden sm:block"
			>
				<div className="w-screen min-h-screen container flex lg:items-center justify-end lg:justify-center">
					<div className="flex flex-col items-center gap-4 lg:gap-6 mt-0 sm:mt-[80px] lg:mt-0">
						{[1, 2, 3, 4, 5].map((item) => (
							<ItemNavSlider
								key={`navItem${item}`}
								number={item}
								onClick={() => handleClickNav(item)}
								active={activeIndex === item}
							/>
						))}
					</div>
				</div>
			</ParallaxLayer>
			<ParallaxLayer offset={1} speed={0} factor={1}>
				<HeroContainer
					img={Img1}
					mobileActiveIndex={1}
					mobileOnClick={handleClickNav}
					variant="left"
					bottomText="First of all we need to know your needs and requirements. from the skills and technologies you need, to the profile, location and salary you want to offer."
				>
					Let's start with <span className="text-blue1">the essentials.</span>
				</HeroContainer>
			</ParallaxLayer>
			{/** Confetti 01 */}
			<ParallaxLayer
				offset={1}
				speed={0.5}
				factor={1}
				style={{
					backgroundPositionY: "center",
					backgroundPositionX: "100%",
					backgroundSize: "50%",
				}}
				className="confetti1"
			></ParallaxLayer>

			<ParallaxLayer offset={2} speed={0} factor={1}>
				<HeroContainer
					img={Img2}
					mobileActiveIndex={2}
					mobileOnClick={handleClickNav}
					variant="right"
					bottomText="Our advanced artificial intelligence and human expertise will select from our registered database those profiles that match your detailed requirements."
				>
					We've created a Smart Database with{" "}
					<span className="text-yellow">hundreds of candidates for you.</span>
				</HeroContainer>
			</ParallaxLayer>
			{/** Confetti 02 */}
			<ParallaxLayer
				offset={2}
				speed={0.5}
				factor={1}
				style={{
					backgroundPositionY: "center",
					backgroundPositionX: "0%",
					backgroundSize: "50%",
				}}
				className="confetti2"
			></ParallaxLayer>

			<ParallaxLayer offset={3} speed={0} factor={1}>
				<HeroContainer
					img={Img3}
					mobileActiveIndex={3}
					mobileOnClick={handleClickNav}
					variant="left"
					bottomText="Get a constant stream of candidate profiles tailored to your specific needs. Our smart learning algorithm has improved the profile drop every day to get the fit you want."
				>
					We are Lean, We learn with{" "}
					<span className="text-blue1">your Likes.</span>
				</HeroContainer>
			</ParallaxLayer>
			{/** Confetti 03 */}
			<ParallaxLayer
				offset={3}
				speed={0.5}
				factor={1}
				style={{
					backgroundPositionY: "center",
					backgroundPositionX: "100%",
					backgroundSize: "50%",
				}}
				className="confetti3"
			></ParallaxLayer>

			<ParallaxLayer offset={4} speed={0} factor={1}>
				<HeroContainer
					img={Img4}
					mobileActiveIndex={4}
					mobileOnClick={handleClickNav}
					variant="right"
					bottomText="Do not hesitate to contact so many profiles however you want, interview and hire them how you look better."
				>
					The table is laid, all ready to{" "}
					<span className="text-yellow">interview and hire.</span>
				</HeroContainer>
			</ParallaxLayer>
			{/** Confetti 04 */}
			<ParallaxLayer
				offset={4}
				speed={0.5}
				factor={1}
				style={{
					backgroundPositionY: "center",
					backgroundPositionX: "left",
					backgroundSize: "50%",
				}}
				className="confetti4"
			></ParallaxLayer>

			<ParallaxLayer offset={5} speed={0} factor={1}>
				<HeroContainer
					img={Img5}
					mobileActiveIndex={5}
					mobileOnClick={handleClickNav}
					variant="left"
					bottomText="And also, we constantly monitor their performance and our recruiting team will always be there to support you ;)"
				>
					Et Viola, you can start working{" "}
					<span className="text-blue1">with your match!.</span>
				</HeroContainer>
			</ParallaxLayer>
			{/** Confetti 05 */}
			<ParallaxLayer
				offset={5}
				speed={0.5}
				factor={1}
				style={{
					backgroundPositionY: "center",
					backgroundPositionX: "100%",
					backgroundSize: "50%",
				}}
				className="confetti5"
			></ParallaxLayer>

			<ParallaxLayer offset={6} speed={0} factor={1}>
				<div className="w-screen min-h-screen flex justify-between items-center bg-gray2">
					<Form />
				</div>
			</ParallaxLayer>
			<ParallaxLayer offset={7} speed={0} factor={0.5}>
				<div className="sm:flex sm:justify-end">
					<Footer />
				</div>
			</ParallaxLayer>
		</Parallax>
	);
};

export default IndexPage;

export const Head = () => <title>Teen - Home</title>;
