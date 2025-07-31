import { BrowserRouter, Route, Routes } from "react-router";
import PageComponents from "./pages/components";
import LayoutMain from "./pages/layout-main";
import PageHome from "./pages/home";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<LayoutMain />}>
					<Route index element={<PageHome />} />
					<Route path="/components" element={<PageComponents />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
