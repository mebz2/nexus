import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login, Signup, Dashboard, Groups, Group } from "./pages";
import { Files, Members, Overview, Tasks } from "./pages/Group/components";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Dashboard />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/group" element={<Group />}>
          <Route index path="overview" element={<Overview />} />
          <Route path="files" element={<Files />} />
          <Route path="tasks" element={<Tasks />} />
          <Route path="members" element={<Members />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
