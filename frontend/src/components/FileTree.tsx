import { useState } from 'react';
import { ChevronRight, ChevronDown, File, Folder, FolderOpen } from 'lucide-react';

interface FileNode {
  name: string;
  type: 'file' | 'folder';
  content?: string;
  children?: FileNode[];
}

interface FileTreeProps {
  files: FileNode[];
  onFileSelect: (file: FileNode) => void;
  level?: number;
}

export function FileTree({ files, onFileSelect, level = 0 }: FileTreeProps) {
  return (
    <div>
      {files.map((file, index) => (
        <FileTreeItem
          key={`${file.name}-${index}`}
          file={file}
          onFileSelect={onFileSelect}
          level={level}
        />
      ))}
    </div>
  );
}

function FileTreeItem({ file, onFileSelect, level }: { file: FileNode; onFileSelect: (file: FileNode) => void; level: number }) {
  const [isOpen, setIsOpen] = useState(true);

  const handleClick = () => {
    if (file.type === 'folder') {
      setIsOpen(!isOpen);
    } else {
      onFileSelect(file);
    }
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className="w-full flex items-center px-3 py-1.5 hover:bg-blue-500/10 text-left transition-colors"
        style={{ paddingLeft: `${level * 12 + 12}px` }}
      >
        {file.type === 'folder' && (
          <span className="mr-1">
            {isOpen ? (
              <ChevronDown className="w-4 h-4 text-blue-400" />
            ) : (
              <ChevronRight className="w-4 h-4 text-blue-400" />
            )}
          </span>
        )}
        {file.type === 'folder' ? (
          isOpen ? (
            <FolderOpen className="w-4 h-4 text-blue-400 mr-2" />
          ) : (
            <Folder className="w-4 h-4 text-blue-400 mr-2" />
          )
        ) : (
          <File className="w-4 h-4 text-cyan-400 mr-2 ml-5" />
        )}
        <span className={`text-sm ${file.type === 'folder' ? 'text-white font-medium' : 'text-blue-200'}`}>
          {file.name}
        </span>
      </button>
      {file.type === 'folder' && isOpen && file.children && (
        <FileTree files={file.children} onFileSelect={onFileSelect} level={level + 1} />
      )}
    </div>
  );
}
