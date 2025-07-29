import { cva } from "class-variance-authority";

export const inputCheckboxWrapperVariants = cva(
	`
    inline-flex items-center justify-center relative
    group
  `
);

export const inputCheckboxVariants = cva(
	`
    appearance-none peer flex items-center justify-center cursor-pointer
    border-2 border-solid transition overflow-hidden
    border-green-base hover:border-green-dark hover:bg-green-dark/20
    checked:border-green-base checked:bg-green-base
    group-hover:checked:border-green-dark group-hover:checked:bg-green-dark
  `,
	{
		variants: {
			size: {
				md: "w-5 h-5 rounded-sm",
			},
			disabled: {
				true: "pointer-events-none",
			},
		},
		defaultVariants: {
			size: "md",
			disabled: false,
		},
	}
);

export const inputCheckboxIconVariants = cva(
	`
    absolute top-1/2 left-1 -translate-y-1/2 
    hidden peer-checked:block fill-white
  `,
	{
		variants: {
			size: {
				md: "w-3 h-3",
			},
		},
		defaultVariants: {
			size: "md",
		},
	}
);
