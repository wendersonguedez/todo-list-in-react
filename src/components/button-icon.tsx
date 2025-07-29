import {
	buttonIconContainerVariants,
	buttonIconSvgVariants,
} from "../utils/variants/button-icon";
import Icon from "./icon";
import { type VariantProps } from "class-variance-authority";

interface ButtonIconProps
	extends Omit<React.ComponentProps<"button">, "size" | "disabled">,
		VariantProps<typeof buttonIconContainerVariants> {
	icon: React.ComponentProps<typeof Icon>["svg"];
}

export default function ButtonIcon({
	variant,
	size,
	disabled,
	className,
	icon,
	...props
}: ButtonIconProps) {
	return (
		<button
			className={buttonIconContainerVariants({
				variant,
				size,
				disabled,
				className,
			})}
			{...props}
		>
			<Icon svg={icon} className={buttonIconSvgVariants({ variant, size })} />
		</button>
	);
}
