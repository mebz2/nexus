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
	CreateGroup,
	AddFile,
} from "./pages";
import { Files, Members, Overview, AddFileGroup, InviteMember } from "./pages/Group/subpages";
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/login" element={<Login />} />
				<Route path="/home" element={<Home />} />
				<Route path="/groups" element={<Groups />} />
				<Route path="/group/addfile" element={<AddFileGroup />} />
				<Route path="/group/invite-member" element={<InviteMember />} />
				<Route path="/groups/creategroup" element={<CreateGroup />} />
				<Route path="/archive" element={<Archive />} />
				<Route path="/archive/addfile" element={<AddFile />} />
				<Route path="/settings" element={<Settings />} />
				<Route path="/inbox" element={<Inbox />} />
				<Route path="/group" element={<Group />}>
					<Route path="overview" element={<Overview />} />
					<Route path="files" element={<Files />} />
					<Route path="members" element={<Members />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
