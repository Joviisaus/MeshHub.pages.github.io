// An array of links for navigation bar
const navBarLinks = [
  { name: "主页", url: "/" },
  { name: "资料", url: "/products" },
  { name: "任务", url: "/blog" },
];
// An array of links for footer
const footerLinks = [
  {
    section: "关于本站点",
    links: [
      { name: "仓库地址", url: "https://github.com/Joviisaus/MeshHub" },
      { name: "主题", url: "https://github.com/mearashadowfax/ScrewFast" },
      { name: "构建", url: "https://astro.build/" },
    ],
  },
  {
    section: "本站",
    links: [
      { name: "关于", url: "#" },
      { name: "任务", url: "/blog" },
      { name: "资料", url: "/products" },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  facebook: "https://www.facebook.com/",
  x: "https://twitter.com/",
  github: "https://github.com/mearashadowfax/ScrewFast",
  google: "https://www.google.com/",
  slack: "https://slack.com/",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};
