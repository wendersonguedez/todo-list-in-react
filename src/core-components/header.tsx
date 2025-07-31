import Container from "../components/container";
import Logo from "../assets/images/logo.svg?react";
import Icon from "../components/icon";

export default function Header() {
	return (
		<Container as="header" className="mt-3 md:mt-20">
			<Icon svg={Logo} className="h-9 md:h-12" />
		</Container>
	);
}
