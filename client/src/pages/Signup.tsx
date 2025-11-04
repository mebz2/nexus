import { Link } from "react-router-dom";
import { Textfield, Button, FormHeader } from "../components";

const handleClick = () => {
  console.log("hello");
};

function Signup() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-[491px] h-[752px] shadow-xl shadow-[#4C23FF]/15  rounded-[10px]">
        {/*form header*/}
        <FormHeader
          header="Create Your Account"
          message="Enter your details to get started with nexus"
        />
        <div className="h-[600px] flex flex-col items-center p-[30px] gap-7">
          <Textfield
            id="username"
            label="Username"
            type="text"
            placeholder="John"
            errorId="username-error"
          />
          <Textfield
            id="email"
            label="Email"
            type="email"
            placeholder="example@gmail.com"
            errorId="email-error"
          />
          <Textfield
            id="password"
            label="Password"
            type="password"
            placeholder="Enter your password"
            errorId="password-error"
          />
          <Textfield
            id="cpassword"
            label="Confirm Password"
            type="password"
            placeholder="Confirm your password"
            errorId="cpassword-error"
          />

          <Button
            label="Create Account"
            height={45}
            width={403}
            onClick={handleClick}
          />
          <p>
            Already have an account?{" "}
            <Link to="/login" className="text-btn  hover:text-purple-950">
              Sign in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
