import { WebContainer } from "@webcontainer/api";

let instance: WebContainer | null = null;

export async function getWebContainer() {
  if (!instance) {
    instance = await WebContainer.boot();
  }
  return instance;
}
