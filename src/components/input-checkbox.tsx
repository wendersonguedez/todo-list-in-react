import type { VariantProps } from "class-variance-authority";
import {
	inputCheckboxIconVariants,
	inputCheckboxVariants,
	inputCheckboxWrapperVariants,
} from "../utils/variants/input-checkbox";
import CheckIcon from "../assets/icons/check.svg?react";
import Icon from "./icon";

interface InputCheckboxProps
	extends VariantProps<typeof inputCheckboxVariants>,
		Omit<React.ComponentProps<"input">, "size" | "disabled"> {}

export default function InputCheckbox({
	size,
	disabled,
	className,
	...props
}: InputCheckboxProps) {
	return (
		<label className={inputCheckboxWrapperVariants({ className })}>
			<input
				type="checkbox"
				className={inputCheckboxVariants({ size, disabled })}
				{...props}
			/>
			<Icon className={inputCheckboxIconVariants({ size })} svg={CheckIcon} />
		</label>
	);
}
