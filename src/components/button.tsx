import Icon from "./icon";
import { type VariantProps } from "class-variance-authority";
import {
	buttonIconVariants,
	buttonTextVariants,
	buttonVariants,
} from "../utils/variants/button";
import Text from "./text";

/**
 * Pegando todas as propriedades do button, mas omitindo 'size' e 'disabled'
 */
interface ButtonProps
	extends Omit<React.ComponentProps<"button">, "size" | "disabled">,
		VariantProps<typeof buttonVariants> {
	icon?: React.ComponentProps<typeof Icon>["svg"];
}

export default function Button({
	variant,
	size,
	disabled,
	className,
	children,
	icon: IconComponent,
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
			})}
		>
			{IconComponent && (
				<Icon
					svg={IconComponent}
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
