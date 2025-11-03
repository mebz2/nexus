import Button from "../components/Button";
import Textfield from "../components/Textfield";
import FormHeader from "../components/FormHeader";
import { Link } from "react-router-dom";

const handleClick = () => {
  const email = document.getElementById("email") as HTMLInputElement | null; // incase the element doesn't exist assign null
  const password = document.getElementById(
    "password",
  ) as HTMLInputElement | null;

  if (!email || !password) return; // if any of the fields aren't found exit the function
  if (email.value == "") {
    const emailError = document.getElementById(
      "email-error",
    ) as HTMLParagraphElement;
    emailError.style.display = "block";
    emailError.textContent = "*Email is required";
  } else if (password.value == "") {
    const passwordError = document.getElementById(
      "password-error",
    ) as HTMLParagraphElement;
    passwordError.style.display = "block";
    passwordError.textContent = "*Password is required";
  } else {
    console.log("success");
  }
};

function Login() {
  return (
    // div for the screen
    <div className="flex flex-col justify-center items-center h-screen">
      {/*container for form*/}
      <div className="w-[491px] h-[553px] border border-border  rounded-[10px]">
        {/*form header container*/}
        <FormHeader
          header="Welcome Back"
          message="Enter your credentials to access your account"
        />
        {/*form container*/}
        <div className="h-[491px] flex flex-col items-center p-[30px] gap-7">
          {/*email text field*/}
          <Textfield
            id="email"
            label="Email"
            type="email"
            placeholder="example@gmail.com"
            errorId="email-error"
          />

          {/*password text field*/}
          <Textfield
            id="password"
            label="Password"
            type="password"
            placeholder="Enter your password"
            errorId="password-error"
          />

          {/*login button*/}
          <Button label="Login" height={45} width={403} onClick={handleClick} />

          <p>
            Don't have an account?{" "}
            <Link to="/signup" className="text-btn  hover:text-purple-950">
              Create one here
            </Link>
          </p>
        </div>
      </div>

      <div
        className="
        h-20 w-[400px] border border-red-400 mt-2.5
        rounded-[10px]
        p-3.5 bg-red-100
        invisible
        "
      >
        <p className="text-red-700">error</p>
      </div>
    </div>
  );
}

export default Login;
