import { getWebContainer } from "../webcontainer";

export async function runProject() {
  const wc = await getWebContainer();

  // install deps
  await wc.spawn("npm", ["install"]);

  // start dev server
  await wc.spawn("npm", ["run", "dev"]);
}
