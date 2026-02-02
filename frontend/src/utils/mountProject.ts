import { getWebContainer } from "../webcontainer";

export async function mountProject(files: any[]) {
  const wc = await getWebContainer();

  const tree: any = {};

  for (const file of files) {
    tree[file.path] = {
      file: {
        contents: file.content,
      },
    };
  }

  await wc.mount(tree);
}
