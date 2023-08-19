import { createBrowserRouter, redirect } from "react-router-dom";
import Landing from "../pages/Public/Landing";
import SignUp from "../pages/Public/SignUp";
import SignIn from "../pages/Public/SignIn";
import Dashboard from "../pages/Private/Dashboard";
import Error from "../pages/Misc/Error";
import Layout from "./Layout";
import Settings from "../pages/Private/Settings";
import Profile from "../pages/Private/Profile";
import Logout from "../pages/Private/Logout";
import Explore from "../pages/Private/Explore";
import Appearance from "../pages/Private/Appearance";
import Friends from "../pages/Private/Friends";
import Server from "../pages/Private/Server";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    errorElement: <Error />,
  },
  {
    path: "/signUp",
    element: <SignUp />,
  },
  {
    path: "/signIn",
    element: <SignIn />,
  },
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/dashboard/friends",
        element: <Friends />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/explore",
        element: <Explore />,
      },
      {
        path: "/dashboard/servers",
        loader: () => redirect("/dashboard"),
      },
      {
        path: "/dashboard/servers/:serverId",
        loader: ({ params }) => {
          // Get serverid from args and redirect to first channel of server
          return redirect(
            `/dashboard/servers/${params.serverId}/[channel_id_here]`
          );
        },
      },
      {
        path: "/dashboard/servers/:serverId/:channelId",
        element: <Server />,
      },
    ],
  },
  {
    path: "/dashboard/settings/",
    element: <Settings />,
    children: [
      {
        path: "/dashboard/settings/account",
        element: <Profile />,
      },
      {
        path: "/dashboard/settings/logout",
        element: <Logout />,
      },
      {
        path: "/dashboard/settings/appearance",
        element: <Appearance />,
      },
    ],
  },
]);

export default Router;
