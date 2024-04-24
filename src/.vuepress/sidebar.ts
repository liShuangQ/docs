import {sidebar} from "vuepress-theme-hope";
import {frontEnd} from "./sidebars/front-end.js";
import { backEnd } from "./sidebars/back-end.js";
import { configuration } from "./sidebars/configuration.js";

export default sidebar({
    ...frontEnd,
    ...backEnd,
    ...configuration,
});
