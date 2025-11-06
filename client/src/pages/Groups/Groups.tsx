import Navbar from "./Navbar";
import SearchBar from "./SearchBar";

function Groups() {
  return (
    <div className=" content-gradient h-screen">
      <Navbar />
      <div className="flex justify-center ">
        <SearchBar />
      </div>
    </div>
  );
}

export default Groups;
