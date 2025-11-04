const Navbar = () => {
  return (
    <div className="navbar-gradient h-[100px]  flex items-center p-10 ">
      {/*logo and tag line*/}
      <div className="h-[70px] w-[300px] flex flex-col justify-center  ">
        <h1 className="mb-0 hover:cursor-pointer">nexus</h1>
        <p className="mt-0 text-sm font-bold text-[#6B6875]">
          Unlock your learning all in one place
        </p>
      </div>
    </div>
  );
};
export default Navbar;
