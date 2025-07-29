import Text from "./components/text";
import TrashIcon from "./assets/icons/trash.svg?react";
import SpinnerIcon from "./assets/icons/spinner.svg?react";
import Icon from "./components/icon";
import Badge from "./components/badge";
import Button from "./components/button";
import ButtonIcon from "./components/button-icon";

export default function App() {
	return (
		<div className="grid gap-3">
			<Text variant={"body-md"} className="text-pink-base">
				Hello, World!
			</Text>

			<div className="flex gap-1">
				<Icon svg={TrashIcon} />
				<Icon svg={SpinnerIcon} animate />
			</div>

			<div>
				<Badge variant={"secondary"} className="pl-2">
					5
				</Badge>
				<Badge>2 de 5</Badge>
			</div>

			<div>
				<Button icon={TrashIcon}>Wend</Button>
			</div>

			<div className="flex gap-1">
				<ButtonIcon icon={TrashIcon}></ButtonIcon>
				<ButtonIcon icon={TrashIcon} variant={"secondary"}></ButtonIcon>
				<ButtonIcon icon={TrashIcon} variant={"tertiary"}></ButtonIcon>
			</div>
		</div>
	);
}
