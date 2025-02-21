import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";

export const projectId = "vFN6djLzSFNKxwJb4JkrH2";
export const projectApiToken = "1KSdQ3k8QyY6iZ5HgPP2zOSXntpI98XJxHXo66NMru9tcxKCcZ1lrqQh2hdV3IaacfMarzkBkGttD67M5A";
export const host = "https://builder.yurekai.com";
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: projectId,
      token: projectApiToken,
    },
  ],
  host,
  // By default Builder YurekAI will use the last published version of your project.
  // For development, you can set preview to true, which will use the unpublished
  // project, allowing you to see your designs without publishing.  Please
  // only use this for development, as this is significantly slower.
  preview: false,
});
