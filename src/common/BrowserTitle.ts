import { electronWindowAPI } from "./Electron";
import env from "./env";

let title = "";
let alert = false;

export const updateTitle = (newTitle: string) => {
  if (title === newTitle) return;
  title = newTitle;
  update();
};
export const updateTitleAlert = (newAlert: boolean) => {
  if (newAlert === alert) return;
  alert = newAlert;
  update();
};

const update = () => {
  if (title) {
    document.title = `${title} - Nerimity - ${env.DEV_MODE ? " - DEV" : ""}`;
  }
  else {
    document.title = "Nerimity" + (env.DEV_MODE ? " - DEV" : "");
  }
  const link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
  if (alert) {
    link.href = "/favicon-alert.ico";
  }
  else {
    link.href = "/favicon.ico";
  }
  electronWindowAPI()?.setNotification(alert);   
};

