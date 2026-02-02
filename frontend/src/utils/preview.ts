import { getWebContainer } from "../webcontainer";

export async function listenForPreview(setUrl: (url: string) => void) {
  const wc = await getWebContainer();

  wc.on("server-ready", (_port, url) => {
    setUrl(url);
  });
}
