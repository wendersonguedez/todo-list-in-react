import { cx } from "class-variance-authority";
import { NavLink } from "react-router";
import Text from "../components/text";

export default function Footer({
	className,
	...props
}: React.ComponentProps<"footer">) {
	return (
		<footer className={cx("my-5 md:my-10", className)} {...props}>
			<nav className="flex items-center justify-center gap-4">
				<NavLink to={"/"}>
					<Text variant={"body-sm-bold"} className="text-gray-300">
						Tarefas
					</Text>
				</NavLink>
				<NavLink to={"/components"}>
					<Text variant={"body-sm-bold"} className="text-gray-300">
						Componentes
					</Text>
				</NavLink>
			</nav>
		</footer>
	);
}
