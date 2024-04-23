import {sidebar} from "vuepress-theme-hope";
import {frontEnd} from "./sidebars/front-end.js";
import { backEnd } from "./sidebars/back-end.js";

export default sidebar({
    ...frontEnd,
    ...backEnd,
});
