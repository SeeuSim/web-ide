"use client";

import ControlsBox from "./ControlsBox";
import EditorBox from "./EditorBox";

const EditorPane = () => {
  return (
    <div className="flex flex-col">
      <ControlsBox />
      <EditorBox></EditorBox>
    </div>
  );
};

export default EditorPane;
