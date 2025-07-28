import Text from "./components/text";
import TrashIcon from "./assets/icons/trash.svg?react";
import Icon from "./components/icon";

export default function App() {
	return (
		<div className="grid gap-3">
			<Text variant={"body-md"} className="text-pink-base">
				Hello, World!
			</Text>

			<div className="flex gap-1">
				<Icon svg={TrashIcon} />
			</div>
		</div>
	);
}
