import { Adaptive } from "../hooks/useAdaptiveTriggers";

export enum Pages {
	home = "home",
	firstPage = "firstPage",
	secondPage = "secondPage",
	thirdPage = "thirdPage",
	fourthPage = "fourthPage",
	fifthPage = "fifthPage",
}

export interface PageConfig {
	offset: number;
	speed: number;
}

export const ParallaxConfig: Record<Adaptive, Record<Pages, PageConfig>> = {
	[Adaptive.sm]: {
		[Pages.home]: {
			offset: 1,
			speed: 0.25,
		},
		[Pages.firstPage]: {
			offset: 1,
			speed: 0,
		},
		[Pages.secondPage]: {
			offset: 2,
			speed: 0,
		},
		[Pages.thirdPage]: {
			offset: 3,
			speed: 0,
		},
		[Pages.fourthPage]: {
			offset: 4,
			speed: 0,
		},
		[Pages.fifthPage]: {
			offset: 5,
			speed: 0,
		},
	},
	[Adaptive.md]: {
		[Pages.home]: {
			offset: 1.1,
			speed: 0.1,
		},
		[Pages.firstPage]: {
			offset: 1,
			speed: 0,
		},
		[Pages.secondPage]: {
			offset: 2,
			speed: -0.25,
		},
		[Pages.thirdPage]: {
			offset: 3,
			speed: -0.25,
		},
		[Pages.fourthPage]: {
			offset: 4,
			speed: -0.25,
		},
		[Pages.fifthPage]: {
			offset: 5,
			speed: -0.25,
		},
	},
};
