const data = {
  redirects: {
    twitter: "https://twitter.com/wovalle",
    instagram: "https://instagram.com/wovalle",
    linkedin: "https://www.linkedin.com/in/willyovalle/",
    telegram: "https://t.me/wovalle",
    github: "https://github.com/wovalle",
  },
  aliases: {
    twitter: ["tw"],
    instagram: ["ig"],
    telegram: ["tg"],
    github: ["gh"],
  },
};

const setLoadedClass = () => {
  const body = document.querySelector("body");
  body.classList.add("loaded");
  return true;
};

const redirect = () => {
  const path = window.location.pathname.slice(1);

  return Object.keys(data.redirects).some((key) => {
    if (key === path) {
      document.location.replace(data.redirects[key]);
      return true;
    }
  });
};

window.onload = () => [redirect, setLoadedClass].some((f) => f());
