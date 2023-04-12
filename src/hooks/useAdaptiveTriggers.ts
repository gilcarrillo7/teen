import { useLayoutEffect, useState } from "react";

export enum Adaptive {
	sm = "sm",
	md = "md",
	// lg = "lg",
	// xl = "xl",
}

interface UseAdaptiveTriggersProps {
	onExtraSmallEnter?: () => void;
	onSmallEnter?: () => void;
	onMediumEnter?: () => void;
	onLargeEnter?: () => void;
	onExtraLargeEnter?: () => void;
}

export const useAdaptiveTriggers = ({
	onExtraSmallEnter,
	onSmallEnter,
	onMediumEnter,
	onLargeEnter,
	onExtraLargeEnter,
}: UseAdaptiveTriggersProps): Adaptive => {
	const [width, setWidth] = useState<Adaptive>(Adaptive.md);
	useLayoutEffect(() => {
		const handleResize = () => {
			if (window?.innerWidth < 640) {
				onExtraSmallEnter?.();
				return setWidth(Adaptive.sm);
			} else {
				onSmallEnter?.();
				return setWidth(Adaptive.md);
			}
			// if (window?.innerWidth < 768) {
			// 	onSmallEnter?.();
			// 	return setWidth(Adaptive.md);
			// }
			// if (window?.innerWidth < 1024) {
			// 	onMediumEnter?.();
			// 	return setWidth(Adaptive.lg);
			// }
			// if (window?.innerWidth < 1280) {
			// 	onLargeEnter?.();
			// 	return setWidth(Adaptive.xl);
			// }
			onExtraLargeEnter?.();
		};
		window.addEventListener("resize", handleResize);
		handleResize();
		return () => window.removeEventListener("resize", handleResize);
	}, [
		onSmallEnter,
		onMediumEnter,
		onLargeEnter,
		onExtraLargeEnter,
		onExtraSmallEnter,
	]);
	return width;
};
