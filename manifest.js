const moduleCommonManifest = {
  id: "module_one_id",
  name: "Module Green",
  version: "0.0.1",
  description: "This is Module Common Manifest for Module One",
  icon: "http://localhost:5001/icons/ModuleListIcon.svg",
  route: "module/green",
  views: [
    {
      id: "view1",
      version: "1.1.0",
      title: "View One",
      instance: { component: "viewOne", path: "./viewOne.js" },
      roles: ["admin"],
      actions: ["create", "read", "update", "delete"],
      icon: "http://localhost:5001/icons/ModuleLinkIcon.svg",
      route: "viewOne",
    },
    {
      id: "view1",
      version: "1.1.0",
      title: "View Two",
      instance: { component: "viewOne", path: "./viewOne.js" },
      roles: ["admin"],
      actions: ["create", "read", "update", "delete"],
      icon: "http://localhost:5001/icons/ModuleLinkIcon.svg",
      route: "viewOne",
    },
  ],
};

export default moduleCommonManifest;
