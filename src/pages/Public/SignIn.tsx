/**
 * SignIn Component
 *
 * The SignIn component renders a sign-in form where users can log in to their accounts.
 * It includes fields for email and password.
 * The user can submit the form to log in or continue with social media options.
 *
 * Dependencies:
 * - react-router-dom: Used to handle routing and navigation within the application.
 * - react-toastify: Used to display toast messages for user notifications.
 * - react-icons/bs: Provides icons for Facebook, Twitter, and GitHub login options.
 * - constants: Contains navigation items used in the footer.
 *
 * Example Usage:
 * ```tsx
 * import SignIn from './SignIn';
 *
 * function App() {
 *   return (
 *     <div>
 *       {/* Your main content goes here * /}
 *       <SignIn />
 *     </div>
 *   );
 * }
 * ```
 */

import { Link } from "react-router-dom";
import { useState } from "react";
import { BsGithub, BsFacebook, BsTwitter } from "react-icons/bs";
import {
  Input,
  Logo,
  RememberMe,
  SocialSignInButton,
  Button,
  Image,
} from "../../components";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading] = useState(false);

  const resetForm = () => {
    setEmail("");
    setPassword("");
  };

  const SignInHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    resetForm();
  };

  return (
    <div className="flex min-h-screen">
      {/* Left-side container */}
      <div className="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          {/* Logo and Sign-In Title */}
          <div>
            <Logo className="h-12 w-auto" />
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">
              Sign Into Your Account
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Or {/* Link to sign up page */}
              <Link
                to="/signUp"
                className="font-medium text-primary hover:text-primary-light"
              >
                create a brand new account
              </Link>
            </p>
          </div>

          {/* Social Sign-In Options */}
          <div className="mt-8">
            <div>
              <div>
                <p className="text-sm font-medium text-gray-700">
                  Sign in with
                </p>
                {/* Grid of social sign-in buttons */}
                <div className="mt-1 grid grid-cols-3 gap-3">
                  <SocialSignInButton
                    clickHandler={() => {}}
                    platform="Facebook"
                    icon={<BsFacebook />}
                  />
                  <SocialSignInButton
                    clickHandler={() => {}}
                    platform="Twitter"
                    icon={<BsTwitter />}
                  />
                  <SocialSignInButton
                    clickHandler={() => {}}
                    platform="Github"
                    icon={<BsGithub />}
                  />
                </div>
              </div>

              {/* "Or continue with" text */}
              <div className="relative mt-6">
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-white px-2 text-gray-500">
                    Or continue with
                  </span>
                </div>
              </div>
            </div>

            {/* Sign-In Form */}
            <div className="mt-6">
              <form className="space-y-6" onSubmit={SignInHandler}>
                {/* Input for Email Address */}
                <Input
                  id="email"
                  label="Email Address"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {/* Input for Password */}
                <Input
                  id="password"
                  label="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {/* Remember Me and Forgot Password links */}
                <div className="flex items-center justify-between">
                  <RememberMe onClick={() => {}} />
                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-medium text-primary-color hover:text-primary-color-shade2"
                    >
                      Forgot your password?
                    </a>
                  </div>
                </div>
                {/* Sign-In Button */}
                <div>
                  {!loading ? (
                    <Button variant="solid" color="primary">
                      Sign In
                    </Button>
                  ) : (
                    <span className="bg-gray-600 text-white text-sm px-3 py-2 rounded-lg">
                      Loading...
                    </span>
                  )}
                </div>
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

export default SignIn;
