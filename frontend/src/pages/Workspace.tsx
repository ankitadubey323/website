// import { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import Editor from '@monaco-editor/react';
// import { FileTree } from '../components/FileTree';
// import { StepsPanel } from '../components/StepsPanel';
// import { Sparkles } from 'lucide-react';
// import { generateProject } from "../api/bolt";


// interface FileNode {
//   name: string;
//   type: 'file' | 'folder';
//   content?: string;
//   children?: FileNode[];
// }

// export default function Workspace() {
//   const location = useLocation();
//   const { prompt } = location.state || { prompt: '' };
//   const [selectedFile, setSelectedFile] = useState<string | null>(null);
//   const [fileContent, setFileContent] = useState('');
//   const [files, setFiles] = useState<FileNode[]>([]);
//   const [steps, setSteps] = useState<Array<{ title: string; status: 'pending' | 'in-progress' | 'completed' }>>([]);
//   const [isGenerating, setIsGenerating] = useState(true);

//   useEffect(() => {
//     simulateGeneration();
//   }, []);

//   const simulateGeneration = async () => {
//     const generationSteps = [
//       { title: 'Analyzing prompt', status: 'in-progress' as const },
//       { title: 'Generating file structure', status: 'pending' as const },
//       { title: 'Creating components', status: 'pending' as const },
//       { title: 'Writing code', status: 'pending' as const },
//       { title: 'Finalizing', status: 'pending' as const },
//     ];

//     setSteps(generationSteps);

//     for (let i = 0; i < generationSteps.length; i++) {
//       await new Promise(resolve => setTimeout(resolve, 1000));
//       setSteps(prev => prev.map((step, idx) => {
//         if (idx === i) return { ...step, status: 'completed' };
//         if (idx === i + 1) return { ...step, status: 'in-progress' };
//         return step;
//       }));
//     }

//     const mockFiles: FileNode[] = [
//       {
//         name: 'src',
//         type: 'folder',
//         children: [
//           {
//             name: 'components',
//             type: 'folder',
//             children: [
//               {
//                 name: 'Header.tsx',
//                 type: 'file',
//                 content: `import React from 'react';\n\nexport default function Header() {\n  return (\n    <header className="bg-blue-900 text-white p-6">\n      <h1 className="text-3xl font-bold">My Website</h1>\n      <nav className="mt-4">\n        <a href="#" className="mr-4 hover:text-blue-300">Home</a>\n        <a href="#" className="mr-4 hover:text-blue-300">About</a>\n        <a href="#" className="hover:text-blue-300">Contact</a>\n      </nav>\n    </header>\n  );\n}`
//               },
//               {
//                 name: 'Hero.tsx',
//                 type: 'file',
//                 content: `import React from 'react';\n\nexport default function Hero() {\n  return (\n    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-950 to-slate-900">\n      <div className="text-center">\n        <h2 className="text-6xl font-bold text-white mb-4">Welcome</h2>\n        <p className="text-xl text-blue-200">Your amazing website starts here</p>\n        <button className="mt-8 px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition">\n          Get Started\n        </button>\n      </div>\n    </section>\n  );\n}`
//               },
//               {
//                 name: 'Footer.tsx',
//                 type: 'file',
//                 content: `import React from 'react';\n\nexport default function Footer() {\n  return (\n    <footer className="bg-slate-900 text-blue-200 p-8 text-center">\n      <p>&copy; 2024 My Website. All rights reserved.</p>\n    </footer>\n  );\n}`
//               }
//             ]
//           },
//           {
//             name: 'App.tsx',
//             type: 'file',
//             content: `import React from 'react';\nimport Header from './components/Header';\nimport Hero from './components/Hero';\nimport Footer from './components/Footer';\n\nfunction App() {\n  return (\n    <div className="min-h-screen">\n      <Header />\n      <Hero />\n      <Footer />\n    </div>\n  );\n}\n\nexport default App;`
//           },
//           {
//             name: 'index.css',
//             type: 'file',
//             content: `@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\nbody {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n}`
//           }
//         ]
//       },
//       {
//         name: 'public',
//         type: 'folder',
//         children: [
//           {
//             name: 'index.html',
//             type: 'file',
//             content: `<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>My Website</title>\n  </head>\n  <body>\n    <div id="root"></div>\n  </body>\n</html>`
//           }
//         ]
//       },
//       {
//         name: 'package.json',
//         type: 'file',
//         content: `{\n  "name": "my-website",\n  "version": "1.0.0",\n  "dependencies": {\n    "react": "^18.2.0",\n    "react-dom": "^18.2.0"\n  }\n}`
//       }
//     ];

//     setFiles(mockFiles);
//     setIsGenerating(false);

//     const firstFile = mockFiles[0].children?.[0].children?.[0];
//     if (firstFile && firstFile.type === 'file') {
//       setSelectedFile(firstFile.name);
//       setFileContent(firstFile.content || '');
//     }
//   };

//   const handleFileSelect = (file: FileNode) => {
//     if (file.type === 'file') {
//       setSelectedFile(file.name);
//       setFileContent(file.content || '');
//     }
//   };

//   return (
//     <div className="h-screen flex flex-col bg-slate-950">
//       <header className="h-14 bg-slate-900 border-b border-blue-500/20 flex items-center px-4 flex-shrink-0">
//         <Sparkles className="w-5 h-5 text-blue-400 mr-2" />
//         <h1 className="text-white font-semibold">Website Builder</h1>
//         <div className="ml-auto text-sm text-blue-300">
//           {isGenerating ? 'Generating...' : 'Ready'}
//         </div>
//       </header>

//       <div className="flex-1 flex overflow-hidden">
//         <div className="w-64 bg-slate-900 border-r border-blue-500/20 flex-shrink-0 overflow-y-auto">
//           <div className="p-3 border-b border-blue-500/20">
//             <h2 className="text-white font-semibold text-sm">Files</h2>
//           </div>
//           <FileTree files={files} onFileSelect={handleFileSelect} />
//         </div>

//         <div className="flex-1 flex flex-col min-w-0">
//           <div className="h-10 bg-slate-900/50 border-b border-blue-500/10 flex items-center px-4">
//             {selectedFile && (
//               <span className="text-blue-300 text-sm">{selectedFile}</span>
//             )}
//           </div>
//           <div className="flex-1">
//             <Editor
//               height="100%"
//               defaultLanguage="typescript"
//               theme="vs-dark"
//               value={fileContent}
//               onChange={(value) => setFileContent(value || '')}
//               options={{
//                 minimap: { enabled: false },
//                 fontSize: 14,
//                 lineNumbers: 'on',
//                 roundedSelection: true,
//                 scrollBeyondLastLine: false,
//                 automaticLayout: true,
//               }}
//             />
//           </div>
//         </div>

//         <div className="w-80 bg-slate-900 border-l border-blue-500/20 flex-shrink-0 overflow-y-auto">
//           <div className="p-3 border-b border-blue-500/20">
//             <h2 className="text-white font-semibold text-sm">Generation Steps</h2>
//           </div>
//           <StepsPanel steps={steps} prompt={prompt} />
//         </div>
//       </div>
//     </div>
//   );
// }
// import { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import Editor from '@monaco-editor/react';
// import { FileTree } from '../components/FileTree';
// import { StepsPanel } from '../components/StepsPanel';
// import { Sparkles } from 'lucide-react';
// import { generateProject } from "../api/bolt";

// interface FileNode {
//   name: string;
//   type: 'file' | 'folder';
//   content?: string;
//   children?: FileNode[];
// }

// export default function Workspace() {
//   const location = useLocation();
//   const { prompt } = location.state || { prompt: '' };

//   const [selectedFile, setSelectedFile] = useState<string | null>(null);
//   const [fileContent, setFileContent] = useState('');
//   const [files, setFiles] = useState<FileNode[]>([]);
//   const [steps, setSteps] = useState<
//     Array<{ title: string; status: 'pending' | 'in-progress' | 'completed' }>
//   >([]);
//   const [isGenerating, setIsGenerating] = useState(false);

//   useEffect(() => {
//     if (prompt) {
//       generateFromBackend();
//     }
//   }, [prompt]);

//   const generateFromBackend = async () => {
//     setIsGenerating(true);

//     setSteps([
//       { title: 'Analyzing prompt', status: 'in-progress' },
//       { title: 'Generating files', status: 'pending' },
//       { title: 'Finalizing', status: 'pending' },
//     ]);

//     try {
//       const data = await generateProject(prompt);

//       setSteps(prev =>
//         prev.map((s, i) =>
//           i === 0 ? { ...s, status: 'completed' } :
//           i === 1 ? { ...s, status: 'in-progress' } :
//           s
//         )
//       );

//       const tree = convertToTree(data.project.files);
//       setFiles(tree);

//       const firstFile = findFirstFile(tree);
//       if (firstFile) {
//         setSelectedFile(firstFile.name);
//         setFileContent(firstFile.content || '');
//       }

//       setSteps(prev => prev.map(s => ({ ...s, status: 'completed' })));
//     } catch (err) {
//       console.error("Generation failed", err);
//     } finally {
//       setIsGenerating(false);
//     }
//   };

//   const handleFileSelect = (file: FileNode) => {
//     if (file.type === 'file') {
//       setSelectedFile(file.name);
//       setFileContent(file.content || '');
//     }
//   };

//   return (
//     <div className="h-screen flex flex-col bg-slate-950">
//       <header className="h-14 bg-slate-900 border-b border-blue-500/20 flex items-center px-4">
//         <Sparkles className="w-5 h-5 text-blue-400 mr-2" />
//         <h1 className="text-white font-semibold">Website Builder</h1>
//         <div className="ml-auto text-sm text-blue-300">
//           {isGenerating ? 'Generating...' : 'Ready'}
//         </div>
//       </header>

//       <div className="flex-1 flex overflow-hidden">
//         <div className="w-64 bg-slate-900 border-r border-blue-500/20 overflow-y-auto">
//           <div className="p-3 border-b border-blue-500/20">
//             <h2 className="text-white font-semibold text-sm">Files</h2>
//           </div>
//           <FileTree files={files} onFileSelect={handleFileSelect} />
//         </div>

//         <div className="flex-1 flex flex-col">
//           <div className="h-10 bg-slate-900/50 border-b border-blue-500/10 flex items-center px-4">
//             {selectedFile && (
//               <span className="text-blue-300 text-sm">{selectedFile}</span>
//             )}
//           </div>
//           <div className="flex-1">
//             <Editor
//               height="100%"
//               defaultLanguage="javascript"
//               theme="vs-dark"
//               value={fileContent}
//               onChange={(v) => setFileContent(v || '')}
//               options={{
//                 minimap: { enabled: false },
//                 fontSize: 14,
//                 automaticLayout: true,
//               }}
//             />
//           </div>
//         </div>

//         <div className="w-80 bg-slate-900 border-l border-blue-500/20 overflow-y-auto">
//           <div className="p-3 border-b border-blue-500/20">
//             <h2 className="text-white font-semibold text-sm">Generation Steps</h2>
//           </div>
//           <StepsPanel steps={steps} prompt={prompt} />
//         </div>
//       </div>
//     </div>
//   );
// }

// /* ---------------- HELPERS ---------------- */

// function convertToTree(files: any[]): FileNode[] {
//   const root: any = {};

//   files.forEach(file => {
//     const parts = file.path.split('/');
//     let current = root;

//     parts.forEach((part: string, index: number) => {
//       if (!current[part]) {
//         current[part] = {
//           name: part,
//           type: index === parts.length - 1 ? 'file' : 'folder',
//           children: [],
//         };
//       }
//       if (index === parts.length - 1) {
//         current[part].content = file.content;
//       }
//       current = current[part].children;
//     });
//   });

//   return Object.values(root);
// }

// function findFirstFile(nodes: FileNode[]): FileNode | null {
//   for (const node of nodes) {
//     if (node.type === 'file') return node;
//     if (node.children) {
//       const found = findFirstFile(node.children);
//       if (found) return found;
//     }
//   }
//   return null;
// }
// import { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import Editor from "@monaco-editor/react";
// import { FileTree } from "../components/FileTree";
// import { StepsPanel } from "../components/StepsPanel";
// import { Sparkles } from "lucide-react";
// import { testBackend } from "../api/bolt";

// interface FileNode {
//   name: string;
//   type: "file" | "folder";
//   content?: string;
//   children?: FileNode[];
// }

// export default function Workspace() {
//   const location = useLocation();
//   const { prompt } = location.state || { prompt: "" };

//   const [selectedFile, setSelectedFile] = useState<string | null>(null);
//   const [fileContent, setFileContent] = useState("");
//   const [files, setFiles] = useState<FileNode[]>([]);
//   const [steps, setSteps] = useState<
//     Array<{ title: string; status: "pending" | "in-progress" | "completed" }>
//   >([]);
//   const [isGenerating, setIsGenerating] = useState(true);

//   // ✅ BACKEND STATUS STATE
//   const [backendStatus, setBackendStatus] = useState("Checking backend...");

//   // ✅ CHECK BACKEND ON LOAD
//   useEffect(() => {
//     testBackend()
//       .then((res) => {
//         setBackendStatus(res.message);
//       })
//       .catch(() => {
//         setBackendStatus("Backend not connected ❌");
//       });
//   }, []);

//   useEffect(() => {
//     simulateGeneration();
//   }, []);

//   const simulateGeneration = async () => {
//     const generationSteps = [
//       { title: "Analyzing prompt", status: "in-progress" as const },
//       { title: "Generating file structure", status: "pending" as const },
//       { title: "Creating components", status: "pending" as const },
//       { title: "Writing code", status: "pending" as const },
//       { title: "Finalizing", status: "pending" as const },
//     ];

//     setSteps(generationSteps);

//     for (let i = 0; i < generationSteps.length; i++) {
//       await new Promise((resolve) => setTimeout(resolve, 800));
//       setSteps((prev) =>
//         prev.map((step, idx) => {
//           if (idx === i) return { ...step, status: "completed" };
//           if (idx === i + 1) return { ...step, status: "in-progress" };
//           return step;
//         })
//       );
//     }

//     const mockFiles: FileNode[] = [
//       {
//         name: "src",
//         type: "folder",
//         children: [
//           {
//             name: "App.tsx",
//             type: "file",
//             content: `import React from "react";

// export default function App() {
//   return <h1>Hello from generated app </h1>;
// }`,
//           },
//         ],
//       },
//     ];

//     setFiles(mockFiles);
//     setIsGenerating(false);
//     setSelectedFile("App.tsx");
//     setFileContent(mockFiles[0].children?.[0]?.content || "");
//   };

//   const handleFileSelect = (file: FileNode) => {
//     if (file.type === "file") {
//       setSelectedFile(file.name);
//       setFileContent(file.content || "");
//     }
//   };

//   return (
//     <div className="h-screen flex flex-col bg-slate-950">
//       {/* HEADER */}
//       <header className="h-14 bg-slate-900 border-b border-blue-500/20 flex items-center px-4">
//         <Sparkles className="w-5 h-5 text-blue-400 mr-2" />
//         <h1 className="text-white font-semibold">Website Builder</h1>

//         <div className="ml-auto text-sm text-green-400">
//           {backendStatus}
//         </div>
//       </header>

//       <div className="flex-1 flex overflow-hidden">
//         {/* FILE TREE */}
//         <div className="w-64 bg-slate-900 border-r border-blue-500/20 overflow-y-auto">
//           <div className="p-3 border-b border-blue-500/20">
//             <h2 className="text-white font-semibold text-sm">Files</h2>
//           </div>
//           <FileTree files={files} onFileSelect={handleFileSelect} />
//         </div>

//         {/* EDITOR */}
//         <div className="flex-1 flex flex-col">
//           <div className="h-10 bg-slate-900/50 border-b border-blue-500/10 px-4 flex items-center">
//             <span className="text-blue-300 text-sm">
//               {selectedFile || "No file selected"}
//             </span>
//           </div>

//           <Editor
//             height="100%"
//             theme="vs-dark"
//             defaultLanguage="typescript"
//             value={fileContent}
//             onChange={(value) => setFileContent(value || "")}
//             options={{
//               minimap: { enabled: false },
//               fontSize: 14,
//               automaticLayout: true,
//             }}
//           />
//         </div>

//         {/* STEPS */}
//         <div className="w-80 bg-slate-900 border-l border-blue-500/20 overflow-y-auto">
//           <div className="p-3 border-b border-blue-500/20">
//             <h2 className="text-white font-semibold text-sm">
//               Generation Steps
//             </h2>
//           </div>
//           <StepsPanel steps={steps} prompt={prompt} />
//         </div>
//       </div>
//     </div>
//   );
// }

// import { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import Editor from "@monaco-editor/react";
// import { FileTree } from "../components/FileTree";
// import { StepsPanel } from "../components/StepsPanel";
// import { Sparkles } from "lucide-react";
// import { generateProject } from "../api/bolt";

// interface FileNode {
//   name: string;
//   type: "file" | "folder";
//   content?: string;
//   children?: FileNode[];
// }

// export default function Workspace() {
//   const location = useLocation();
//   const { prompt } = location.state || { prompt: "" };

//   const [files, setFiles] = useState<FileNode[]>([]);
//   const [selectedFile, setSelectedFile] = useState<FileNode | null>(null);
//   const [fileContent, setFileContent] = useState("");
//   const [isGenerating, setIsGenerating] = useState(false);

//   const [steps, setSteps] = useState<
//     { title: string; status: "pending" | "in-progress" | "completed" }[]
//   >([]);

//   useEffect(() => {
//     if (prompt) generateFromBackend();
//   }, [prompt]);

//   const generateFromBackend = async () => {
//     setIsGenerating(true);
//     setSteps([
//       { title: "Analyzing prompt", status: "in-progress" },
//       { title: "Generating files", status: "pending" },
//       { title: "Finalizing", status: "pending" },
//     ]);

//     try {
//       const data = await generateProject(prompt);

//       setSteps(s =>
//         s.map((step, i) =>
//           i === 0 ? { ...step, status: "completed" } :
//           i === 1 ? { ...step, status: "in-progress" } :
//           step
//         )
//       );

//       const tree = convertToTree(data.project.files);
//       setFiles(tree);

//       const first = findFirstFile(tree);
//       if (first) {
//         setSelectedFile(first);
//         setFileContent(first.content || "");
//       }

//       setSteps(s => s.map(step => ({ ...step, status: "completed" })));
//     } catch (err) {
//       console.error("Generation failed", err);
//     } finally {
//       setIsGenerating(false);
//     }
//   };

//   return (
//     <div className="h-screen flex flex-col bg-slate-950">
//       <header className="h-14 bg-slate-900 border-b border-blue-500/20 flex items-center px-4">
//         <Sparkles className="w-5 h-5 text-blue-400 mr-2" />
//         <h1 className="text-white font-semibold">Website Builder</h1>
//         <div className="ml-auto text-sm text-blue-300">
//           {isGenerating ? "Generating..." : "Ready"}
//         </div>
//       </header>

//       <div className="flex-1 flex overflow-hidden">
//         <div className="w-64 bg-slate-900 border-r border-blue-500/20 overflow-y-auto">
//           <FileTree
//             files={files}
//             onFileSelect={(file) => {
//               setSelectedFile(file);
//               setFileContent(file.content || "");
//             }}
//           />
//         </div>

//         <div className="flex-1 flex flex-col">
//           <div className="h-10 bg-slate-900/50 border-b border-blue-500/10 px-4 flex items-center">
//             <span className="text-blue-300 text-sm">
//               {selectedFile?.name || "No file selected"}
//             </span>
//           </div>

//           <Editor
//             height="100%"
//             theme="vs-dark"
//             value={fileContent}
//             onChange={(v) => setFileContent(v || "")}
//             options={{
//               minimap: { enabled: false },
//               fontSize: 14,
//               automaticLayout: true,
//             }}
//           />
//         </div>

//         <div className="w-80 bg-slate-900 border-l border-blue-500/20">
//           <StepsPanel steps={steps} prompt={prompt} />
//         </div>
//       </div>
//     </div>
//   );
// }

// /* -------- HELPERS -------- */

// function convertToTree(files: any[]): FileNode[] {
//   const root: Record<string, FileNode> = {};

//   files.forEach(file => {
//     const parts = file.path.split("/");
//     let current = root;

//     parts.forEach((part: string, index: number) => {
//       if (!current[part]) {
//         current[part] = {
//           name: part,
//           type: index === parts.length - 1 ? "file" : "folder",
//           children: [],
//         };
//       }

//       if (index === parts.length - 1) {
//         current[part].content = file.content;
//       }

//       current = current[part].children as any;
//     });
//   });

//   return Object.values(root);
// }

// function findFirstFile(nodes: FileNode[]): FileNode | null {
//   for (const node of nodes) {
//     if (node.type === "file") return node;
//     if (node.children) {
//       const found = findFirstFile(node.children);
//       if (found) return found;
//     }
//   }
//   return null;
// }
import { useState } from "react";

const Workspace = () => {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const generateCode = async () => {
    if (!prompt.trim()) return;

    setLoading(true);
    setResult(null);

    try {
      const res = await fetch("http://localhost:3000/api/bolt", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();
      setResult(data);
    } catch (err) {
      console.error(err);
      alert("Backend not responding");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "40px", maxWidth: "800px" }}>
      <h1>Website Builder</h1>

      <textarea
        placeholder="Describe the website you want..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        rows={4}
        style={{ width: "100%", padding: "10px", fontSize: "16px" }}
      />

      <br />
      <br />

      <button onClick={generateCode} disabled={loading}>
        {loading ? "Generating..." : "Generate"}
      </button>

      <br />
      <br />

      {result && (
        <pre
          style={{
            background: "#111",
            color: "#0f0",
            padding: "16px",
            overflow: "auto",
          }}
        >
          {JSON.stringify(result, null, 2)}
        </pre>
      )}
    </div>
  );
};

export default Workspace;
