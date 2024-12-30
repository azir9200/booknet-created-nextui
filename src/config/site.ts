export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Next.js + NextUI",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },

    {
      label: "Blogs",
      href: "/blogs",
    },
    {
      label: "Latest",
      href: "/latest",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },

    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "Latest",
      href: "/latest",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },

    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
  },
};
