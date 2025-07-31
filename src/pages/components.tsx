import Badge from "../components/badge";
import Button from "../components/button";
import ButtonIcon from "../components/button-icon";
import Card from "../components/card";
import Container from "../components/container";
import Icon from "../components/icon";
import InputCheckbox from "../components/input-checkbox";
import InputText from "../components/input-text";
import Skeleton from "../components/skeleton";

import Text from "../components/text";
import TrashIcon from "../assets/icons/trash.svg?react";
import SpinnerIcon from "../assets/icons/spinner.svg?react";

export default function PageComponents() {
	return (
		<Container>
			<div className="grid gap-11">
				<Text variant={"body-md"} className="text-pink-base">
					Hello, World!
				</Text>

				<div className="flex gap-1">
					<Icon svg={TrashIcon} />
					<Icon svg={SpinnerIcon} animate />
				</div>

				<div className="flex gap-1">
					<Badge variant={"secondary"} className="pl-2">
						5
					</Badge>
					<Badge>2 de 5</Badge>
					<Badge loading>5</Badge>
				</div>

				<div>
					<Button icon={TrashIcon}>Wend</Button>
				</div>

				<div className="flex gap-1">
					<ButtonIcon icon={TrashIcon}></ButtonIcon>
					<ButtonIcon icon={TrashIcon} variant={"secondary"}></ButtonIcon>
					<ButtonIcon icon={TrashIcon} variant={"tertiary"}></ButtonIcon>
					<ButtonIcon icon={TrashIcon} loading />
				</div>

				<div>
					<InputText />
				</div>

				<div>
					<InputCheckbox />

					<InputCheckbox loading />
				</div>

				<div>
					<Card size={"md"}>Olá mundo!</Card>
				</div>

				<div className="space-y-2">
					<Skeleton className="h-6" />
					<Skeleton className="h-6" />
					<Skeleton className="w-96 h-6" />
				</div>
			</div>
		</Container>
	);
}
