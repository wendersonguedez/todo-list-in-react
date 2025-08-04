import React from "react";

import ButtonIcon from "../components/button-icon";
import Card from "../components/card";
import InputCheckbox from "../components/input-checkbox";
import Text from "../components/text";

import TrashIcon from "../assets/icons/trash.svg?react";
import PencilIcon from "../assets/icons/pencil.svg?react";
import XIcon from "../assets/icons/x.svg?react";
import CheckIcon from "../assets/icons/check.svg?react";
import InputText from "../components/input-text";
import { type Task, TaskState } from "../models/task";
import { cx } from "class-variance-authority";

interface TaskItemProps {
	task: Task;
}

export default function TaskItem({ task }: TaskItemProps) {
	const [isEditing, setIsEditing] = React.useState(
		task.state === TaskState.Creating
	);
	return (
		<Card size={"md"} className="flex items-center gap-4">
			{!isEditing ? (
				<>
					<InputCheckbox
						checked={task?.concluded}
						value={task?.concluded?.toString()}
					/>
					<Text
						className={cx("flex-1", {
							"line-through": task?.concluded,
						})}
					>
						{task?.title}
					</Text>
					<div className="flex gap-1">
						<ButtonIcon icon={TrashIcon} variant={"tertiary"} />
						<ButtonIcon
							icon={PencilIcon}
							variant={"tertiary"}
							onClick={() => setIsEditing(true)}
						/>
					</div>
				</>
			) : (
				<>
					<InputText className="flex-1" />
					<div className="flex gap-1">
						<ButtonIcon
							icon={XIcon}
							variant={"secondary"}
							onClick={() => setIsEditing(false)}
						/>
						<ButtonIcon icon={CheckIcon} variant={"primary"} />
					</div>
				</>
			)}
		</Card>
	);
}
