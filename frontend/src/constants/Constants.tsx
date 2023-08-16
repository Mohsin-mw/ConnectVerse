import { BsFacebook, BsInstagram, BsTwitter, BsGithub } from "react-icons/bs";

// ICONS/LINKS FOR FOOTER

export const footerLinks = {
  social: [
    {
      name: "Facebook",
      href: "#",
      icon: <BsFacebook className="h-6 w-6" />,
    },
    {
      name: "Instagram",
      href: "#",
      icon: <BsInstagram className="h-6 w-6" />,
    },
    {
      name: "Twitter",
      href: "#",
      icon: <BsTwitter className="h-6 w-6" />,
    },
    {
      name: "GitHub",
      href: "#",
      icon: <BsGithub className="h-6 w-6" />,
    },
  ],
};

// Setting Buttons

export const SettingButtons = [
  {
    title: "My Account",
    href: "/dashboard/settings/account",
  },
  {
    title: "Logout",
    href: "/dashboard/settings/logout",
  },
  {
    title: "Appearance",
    href: "/dashboard/settings/appearance",
  },
];
