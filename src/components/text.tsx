import type { VariantProps } from "class-variance-authority";
import { textVariants } from "../utils/variants/text";
import React from "react";

/**
 * keyof -> qualquer chave da interface IntrinsicElements
 *
 * React.JSX.IntrinsicElements -> Mapeia cada tag HTML (como 'div', 'span', 'p')
 * para seu tipo correspondente no React.
 *
 * extends VariantProps<typeof textVariants> -> extendendo outros tipos e colocando na interface
 */
interface TextProps extends VariantProps<typeof textVariants> {
	as?: keyof React.JSX.IntrinsicElements;
	className?: string;
	children?: React.ReactNode;
}

export default function Text({
	as = "span",
	variant,
	className,
	children,
	...props
}: TextProps) {
	return React.createElement(
		as,
		{
			className: textVariants({ variant, className }),
			...props,
		},
		children
	);
}
