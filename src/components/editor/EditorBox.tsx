import { useAppContextState } from "@/lib/state/appContextState";
import { Highlighter } from "./Highlighter";
import SideMenu from "./SideMenu";

const EditorBox = () => {
  const [{ language, theme }] = useAppContextState();
  return (
    <div className="inline-flex">
      <SideMenu />
      <Highlighter language={language} theme={theme} />
    </div>
  );
};

export default EditorBox;
