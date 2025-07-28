import { type VariantProps } from "class-variance-authority";
import { iconVariants } from "../utils/variants/icon";

/**
 * A interface `IconProps` estende as propriedades de um `svg` e as variantes
 * definidas em `iconVariants`, permitindo que o componente `Icon` seja customizado
 * tanto com as propriedades do `svg` quanto com as variantes específicas.
 *
 * `React.ComponentProps<"svg">` -> Tipagem das propriedades de um elemento `svg` no React.
 *
 * `React.ElementType<React.ComponentProps<"svg">>` -> Um componente React que aceita
 * as propriedades de um `svg`.
 *
 * `VariantProps<typeof iconVariants>` -> Tipagem das variantes configuráveis
 * para o componente, extraindo as opções de variantes a partir de `iconVariants`.
 */
interface IconProps
	extends React.ComponentProps<"svg">,
		VariantProps<typeof iconVariants> {
	svg: React.ElementType<React.ComponentProps<"svg">>;
}

export default function Icon({
	svg: SvgComponent,
	animate,
	className,
	...props
}: IconProps) {
	return (
		<SvgComponent className={iconVariants({ animate, className })} {...props} />
	);
}
