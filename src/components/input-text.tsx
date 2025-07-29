import { textVariants } from "../utils/variants/text";
import { type VariantProps, cx } from "class-variance-authority";
import { inputTextVariants } from "../utils/variants/input-text";

interface InputTextProps
	extends VariantProps<typeof inputTextVariants>,
		Omit<React.ComponentProps<"input">, "size" | "disabled"> {}

export default function InputText({
	size,
	disabled,
	className,
	...props
}: InputTextProps) {
	return (
		<input
			className={cx(
				inputTextVariants({ size, disabled }),
				textVariants(),
				className
			)}
			{...props}
		/>
	);
}
