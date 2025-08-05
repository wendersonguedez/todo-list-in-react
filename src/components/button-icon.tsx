import {
	buttonIconContainerVariants,
	buttonIconSvgVariants,
} from "../utils/variants/button-icon";
import { type VariantProps } from "class-variance-authority";
import Icon from "./icon";
import SpinnerIcon from "../assets/icons/spinner.svg?react";
import Skeleton from "./skeleton";

interface ButtonIconProps
	extends Omit<React.ComponentProps<"button">, "size" | "disabled">,
		VariantProps<typeof buttonIconContainerVariants> {
	icon: React.ComponentProps<typeof Icon>["svg"];
	loading?: boolean;
	handling?: boolean;
}

export default function ButtonIcon({
	variant,
	size,
	disabled,
	className,
	icon,
	loading,
	handling,
	...props
}: ButtonIconProps) {
	if (loading) {
		return (
			<Skeleton
				rounded={"sm"}
				className={buttonIconContainerVariants({
					variant: "none",
					size,
					className,
				})}
			/>
		);
	}

	return (
		<button
			className={buttonIconContainerVariants({
				variant,
				size,
				disabled,
				className,
				handling,
			})}
			{...props}
		>
			<Icon
				svg={handling ? SpinnerIcon : icon}
				animate={handling}
				className={buttonIconSvgVariants({ variant, size })}
			/>
		</button>
	);
}
