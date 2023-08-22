/**
 * SignUp Component
 *
 * The SignUp component renders a sign-up form where users can create a new account.
 * It includes fields for name, email, password, and confirmPassword.
 * The user can submit the form to create an account or continue with social media options.
 *
 * Dependencies:
 * - react-router-dom: Used to handle routing and navigation within the application.
 * - react-toastify: Used to display toast messages for user notifications.
 * - react-icons/bs: Provides icons for Facebook, Twitter, and GitHub login options.
 * - constants: Contains navigation items used in the footer.
 *
 * Example Usage:
 * ```tsx
 * import SignUp from './SignUp';
 *
 * function App() {
 *   return (
 *     <div>
 *       {/* Your main content goes here * /}
 *       <SignUp />
 *     </div>
 *   );
 * }
 * ```
 */

import { Link } from "react-router-dom";
import { useState } from "react";
import { Button, Image, Input, Logo, RememberMe } from "../../components";
import axios from "axios";
import { toast } from "react-toastify";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const resetForm = () => {
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  const SignUpHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (password != confirmPassword) {
        window.alert("Password doesn't match");
        toast.error("Password doesn't match");
        return;
      }

      const { data } = await axios.post(
        import.meta.env.VITE_BACKEND_URL + "/auth/signup",
        { name, email, password }
      );

      console.log(data);
    } catch (error) {
      console.log(error);
    }
    resetForm();
  };

  return (
    <div className="flex min-h-screen">
      {/* Left-side content for the sign-up page */}
      <div className="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div>
            {/* Application logo */}
            <Logo className="h-12 w-auto" />
            {/* Sign-up heading */}
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">
              Create a new Account
            </h2>
            {/* Sign-in link */}
            <p className="mt-2 text-sm text-gray-600">
              Or {/* Link to sign-in page */}
              <Link
                to="/signIn"
                className="font-medium text-primary hover:text-primary-light hover:text-primary-color-shade2"
              >
                log into your account
              </Link>
            </p>
          </div>

          {/* Sign-up form */}
          <div className="mt-8">
            <div className="mt-6">
              <form className="space-y-6" onSubmit={SignUpHandler}>
                {/* Name input */}
                <Input
                  id="name"
                  label="Full Name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {/* Email input */}
                <Input
                  id="email"
                  label="Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {/* Password input */}
                <Input
                  id="password"
                  label="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {/* Confirm Password input */}
                <Input
                  id="confirm-password"
                  label="Confirm Password"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                {/* Remember Me option */}
                <div className="flex items-center justify-between">
                  <RememberMe onClick={() => {}} />
                </div>
                {/* Sign-up button */}
                <Button variant="solid" color="primary" type="submit">
                  Sign Up
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Right-side Image */}
      <Image />
    </div>
  );
};

export default SignUp;
