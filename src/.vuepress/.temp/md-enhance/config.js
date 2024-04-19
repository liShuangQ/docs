import { defineClientConfig } from "vuepress/client";
import CodeTabs from "/Users/lishuangqi/myWork/my-docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.36_markdown-it@14.1.0_vuepress@2.0.0-rc.9/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeTabs.js";
import { hasGlobalComponent } from "/Users/lishuangqi/myWork/my-docs/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.24_vuepress@2.0.0-rc.9/node_modules/@vuepress/helper/lib/client/index.js";
import { CodeGroup, CodeGroupItem } from "/Users/lishuangqi/myWork/my-docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.36_markdown-it@14.1.0_vuepress@2.0.0-rc.9/node_modules/vuepress-plugin-md-enhance/lib/client/compact/index.js";
import CodeDemo from "/Users/lishuangqi/myWork/my-docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.36_markdown-it@14.1.0_vuepress@2.0.0-rc.9/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import MdDemo from "/Users/lishuangqi/myWork/my-docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.36_markdown-it@14.1.0_vuepress@2.0.0-rc.9/node_modules/vuepress-plugin-md-enhance/lib/client/components/MdDemo.js";
import "/Users/lishuangqi/myWork/my-docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.36_markdown-it@14.1.0_vuepress@2.0.0-rc.9/node_modules/vuepress-plugin-md-enhance/lib/client/styles/figure.scss";
import { useHintContainers } from "/Users/lishuangqi/myWork/my-docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.36_markdown-it@14.1.0_vuepress@2.0.0-rc.9/node_modules/vuepress-plugin-md-enhance/lib/client/composables/useHintContainers.js";
import "/Users/lishuangqi/myWork/my-docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.36_markdown-it@14.1.0_vuepress@2.0.0-rc.9/node_modules/vuepress-plugin-md-enhance/lib/client/styles/hint/index.scss";
import Tabs from "/Users/lishuangqi/myWork/my-docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.36_markdown-it@14.1.0_vuepress@2.0.0-rc.9/node_modules/vuepress-plugin-md-enhance/lib/client/components/Tabs.js";
import "/Users/lishuangqi/myWork/my-docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.36_markdown-it@14.1.0_vuepress@2.0.0-rc.9/node_modules/vuepress-plugin-md-enhance/lib/client/styles/tasklist.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    if(!hasGlobalComponent("CodeGroup", app)) app.component("CodeGroup", CodeGroup);
    if(!hasGlobalComponent("CodeGroupItem", app)) app.component("CodeGroupItem", CodeGroupItem);
    app.component("CodeDemo", CodeDemo);
    app.component("MdDemo", MdDemo);
    app.component("Tabs", Tabs);
  },
  setup: () => {
useHintContainers();
  }
});
