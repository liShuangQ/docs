import {AutoLinkOptions, navbar, NavbarGroup} from "vuepress-theme-hope";
import {frontEnd} from "./navbars/front-end.js";
import { backEnd } from "./navbars/back-end.js";
import { configuration } from "./navbars/configuration.js";

export default navbar([
  "/",
  (frontEnd as AutoLinkOptions | NavbarGroup),
  (backEnd as AutoLinkOptions | NavbarGroup),
  (configuration as AutoLinkOptions | NavbarGroup)
  // {
  //   text: "跨端",
  //   prefix: "/cross-platform/",
  //   children: [
  //   ],
  // },
]);
