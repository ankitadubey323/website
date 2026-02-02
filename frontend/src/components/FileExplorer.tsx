import { useState } from "react";
import type { FileNode } from "../utils/buildTree";

interface NodeProps {
  name: string;
  data: FileNode;
  onSelect: (content: string) => void;
}

const Node = ({ name, data, onSelect }: NodeProps) => {
  const [open, setOpen] = useState(false);

  if (data.type === "file") {
    return (
      <div
        style={{ paddingLeft: 20, cursor: "pointer" }}
        onClick={() => onSelect(data.content)}
      >
        📄 {name}
      </div>
    );
  }

  return (
    <div style={{ paddingLeft: 20 }}>
      <div
        style={{ cursor: "pointer", fontWeight: 500 }}
        onClick={() => setOpen(!open)}
      >
        📁 {name}
      </div>

      {open &&
        Object.entries(data.children).map(([key, value]) => (
          <Node
            key={key}
            name={key}
            data={value}
            onSelect={onSelect}
          />
        ))}
    </div>
  );
};

export default Node;


