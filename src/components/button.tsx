import {
	buttonIconVariants,
	buttonTextVariants,
	buttonVariants,
} from "../utils/variants/button";
import { type VariantProps } from "class-variance-authority";
import Icon from "./icon";
import SpinnerIcon from "../assets/icons/spinner.svg?react";
import Text from "./text";

/**
 * Pegando todas as propriedades do button, mas omitindo 'size' e 'disabled'
 */
interface ButtonProps
	extends Omit<React.ComponentProps<"button">, "size" | "disabled">,
		VariantProps<typeof buttonVariants> {
	icon?: React.ComponentProps<typeof Icon>["svg"];
	handling?: boolean;
}

export default function Button({
	variant,
	size,
	disabled,
	className,
	children,
	handling,
	icon,
	...props
}: ButtonProps) {
	return (
		<button
			{...props}
			className={buttonVariants({
				variant,
				size,
				disabled,
				className,
				handling,
			})}
		>
			{icon && (
				<Icon
					svg={handling ? SpinnerIcon : icon}
					animate={handling}
					className={buttonIconVariants({ variant, size })}
				/>
			)}
			<Text
				variant={"body-md-bold"}
				className={buttonTextVariants({ variant })}
			>
				{children}
			</Text>
		</button>
	);
}
