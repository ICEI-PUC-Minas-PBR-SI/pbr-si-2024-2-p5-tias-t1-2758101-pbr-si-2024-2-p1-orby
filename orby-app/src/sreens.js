import { Home } from "./pages/home/home";
import { Login } from "./pages/login/login";
import { News } from "./pages/news/news";
import { Form } from "./pages/form/form";
import Signup from "./pages/signup/signup";
import { Forum } from "./pages/forum/forum";
import { MaintenceScreen } from "./pages/maintence/maintence";
import { Profile } from "./pages/profile/profile";

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
    component: MaintenceScreen,
    icon: "trophy",
    outlinedIcon: "trophy-outline",
  },
  map: {
    name: "map",
    component: MaintenceScreen,
    icon: "location",
    outlinedIcon: "location-outline",
  },
  profile: {
    name: "profile",
    component: Profile,
    icon: "person",
    outlinedIcon: "person-outline",
  },
  forum: {
    name: "forum",
    component: Forum,
    icon: null,
    outlinedIcon: null,
  },
};
