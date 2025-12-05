import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
	Login,
	Signup,
	Home,
	Groups,
	Group,
	Archive,
	Inbox,
	Settings,
	Calendar,
} from "./pages";
import { Files, Members, Overview, Tasks } from "./pages/Group/subpages";
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/login" element={<Login />} />
				<Route path="/home" element={<Home />} />
				<Route path="/groups" element={<Groups />} />
				<Route path="/archive" element={<Archive />} />
				<Route path="/settings" element={<Settings />} />
				<Route path="/calendar" element={<Calendar />} />
				<Route path="/inbox" element={<Inbox />} />
				<Route path="/group" element={<Group />}>
					<Route path="overview" element={<Overview />} />
					<Route path="files" element={<Files />} />
					<Route path="tasks" element={<Tasks />} />
					<Route path="members" element={<Members />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
