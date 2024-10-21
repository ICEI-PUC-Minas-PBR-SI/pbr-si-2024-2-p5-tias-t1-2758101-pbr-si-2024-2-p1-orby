import { Home } from "./pages/home";
import { Login } from "./pages/login/login";
import { News } from "./pages/news/news";
import { Form } from "./pages/form/form";
import Signup from "./pages/signup/signup";

export const SCREENS = {
  login: {
    name: "login",
    component: Login,
    icon: null,
    outlinedIcon: null,
  },
  signup: {
    name: "signup",
    component: Signup,
    icon: null,
    outlinedIcon: null,
  },
  home: {
    name: "home",
    component: Home,
    icon: "home",
    outlinedIcon: "home-outline",
  },
  news: {
    name: "news",
    component: News,
    icon: null,
    outlinedIcon: null,
  },
  form: {
    name: "form",
    component: Form,
    icon: "document-text",
    outlinedIcon: "document-text-outline",
  },
  ranking: {
    name: "ranking",
    component: Home,
    icon: "trophy",
    outlinedIcon: "trophy-outline",
  },
  map: {
    name: "map",
    component: Home,
    icon: "location",
    outlinedIcon: "location-outline",
  },
  profile: {
    name: "profile",
    component: Home,
    icon: "person",
    outlinedIcon: "person-outline",
  },
};
