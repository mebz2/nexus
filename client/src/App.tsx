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
	ChangePassword
} from "./pages";
import { Files, Members, Overview, AddFileGroup, InviteMember, GroupSettings } from "./pages/Group/subpages";
import { Layout } from "./components";
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/login" element={<Login />} />

				<Route element={<Layout />}>
					<Route path="/home" element={<Home />} />
					<Route path="/groups" element={<Groups />} />
					<Route path="/archive" element={<Archive />} />
					<Route path="/archive/addfile" element={<AddFile />} />
					<Route path="/settings" element={<Settings />} />
					<Route path="/inbox" element={<Inbox />} />
					<Route path="/group" element={<Group />}>
						<Route path="overview" element={<Overview />} />
						<Route path="files" element={<Files />} />
						<Route path="members" element={<Members />} />
					</Route>
				</Route>
				<Route path="/settings/change-password" element={<ChangePassword />} />
				<Route path="/group/addfile" element={<AddFileGroup />} />
				<Route path="/group/invite-member" element={<InviteMember />} />
				<Route path="/group/settings" element={<GroupSettings />} />
				<Route path="/groups/creategroup" element={<CreateGroup />} />

			</Routes>
		</BrowserRouter>
	);
}

export default App;
