import {
	buttonIconContainerVariants,
	buttonIconSvgVariants,
} from "../utils/variants/button-icon";
import Icon from "./icon";
import { type VariantProps } from "class-variance-authority";
import Skeleton from "./skeleton";

interface ButtonIconProps
	extends Omit<React.ComponentProps<"button">, "size" | "disabled">,
		VariantProps<typeof buttonIconContainerVariants> {
	icon: React.ComponentProps<typeof Icon>["svg"];
	loading?: boolean;
}

export default function ButtonIcon({
	variant,
	size,
	disabled,
	className,
	icon,
	loading,
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
			})}
			{...props}
		>
			<Icon svg={icon} className={buttonIconSvgVariants({ variant, size })} />
		</button>
	);
}
