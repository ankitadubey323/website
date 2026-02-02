// export type FileNode =
//   | {
//       __file: true;
//       content: string;
//     }
//   | {
//       [key: string]: FileNode;
//     };

// export interface ProjectFile {
//   path: string;
//   content: string;
// }

// export function buildTree(files: ProjectFile[]): Record<string, FileNode> {
//   const tree: Record<string, FileNode> = {};

//   files.forEach((file) => {
//     const parts = file.path.split("/");
//     let current: Record<string, FileNode> = tree;

//     parts.forEach((part, index) => {
//       if (!current[part]) {
//         current[part] =
//           index === parts.length - 1
//             ? { __file: true, content: file.content }
//             : {};
//       }
//       current = current[part] as Record<string, FileNode>;
//     });
//   });

//   return tree;
// }
export type FileNode =
  | {
      type: "file";
      content: string;
    }
  | {
      type: "folder";
      children: Record<string, FileNode>;
    };

export interface ProjectFile {
  path: string;
  content: string;
}

export function buildTree(files: ProjectFile[]) {
  const tree: Record<string, FileNode> = {};

  files.forEach((file) => {
    const parts = file.path.split("/");
    let current = tree;

    parts.forEach((part, index) => {
      if (!current[part]) {
        current[part] =
          index === parts.length - 1
            ? { type: "file", content: file.content }
            : { type: "folder", children: {} };
      }

      if (current[part].type === "folder") {
        current = current[part].children;
      }
    });
  });

  return tree;
}
