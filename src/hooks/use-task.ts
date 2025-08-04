import useLocalStorage from "use-local-storage";
import { TASK_KEY, TaskState, type Task } from "../models/task";

export default function useTask() {
	const [tasks, setTasks] = useLocalStorage<Task[]>(TASK_KEY, []);

	function prepareTask() {
		setTasks([
			...tasks,
			{
				id: Math.random().toString(36).substring(2, 9),
				title: "",
				state: TaskState.Creating,
			},
		]);
	}

	return { prepareTask };
}
