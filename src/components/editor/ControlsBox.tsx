import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  LANGUAGE_OPTIONS,
  THEME_OPTIONS,
  useAppContextState,
} from "@/lib/state/appContextState";
import { ScrollArea } from "../ui/scroll-area";

const ControlsBox = () => {
  const [{ language, theme }, setLanguage, setTheme] = useAppContextState();
  return (
    <div className="flex">
      <div className="inline-flex ml-auto mr-12 items-center space-x-4 p-2">
        <div className="inline-flex items-center space-x-2">
          <span className="font-mono font-bold">Language:</span>
          <Select value={language} onValueChange={setLanguage}>
            <SelectTrigger className="inline-flex w-min items-center rounded-md border-2 border-b-4 border-r-4 border-neutral-800 font-mono focus:ring-neutral-100 focus:ring-offset-1">
              <SelectValue className="" />
              <span>&nbsp;</span>
            </SelectTrigger>
            <SelectContent className="w-[200px]">
              <ScrollArea className="h-[200px] rounded-md">
                {LANGUAGE_OPTIONS.map((v) => (
                  <SelectItem key={`select-lang-${v}`} value={v}>
                    {v.replace(/[a-z]/, (e) => e.toUpperCase())}
                  </SelectItem>
                ))}
              </ScrollArea>
            </SelectContent>
          </Select>
        </div>
        <div className="inline-flex items-center space-x-2">
          <span className="font-mono font-bold">Theme:</span>
          <Select value={theme} onValueChange={setTheme}>
            <SelectTrigger className="inline-flex w-min items-center rounded-md border-2 border-b-4 border-r-4 border-neutral-800 font-mono focus:ring-neutral-100 focus:ring-offset-1">
              <SelectValue />
              <span>&nbsp;</span>
            </SelectTrigger>
            <SelectContent className="w-[200px]">
              <ScrollArea className="h-[200px] rounded-md">
                {THEME_OPTIONS.map((v) => (
                  <SelectItem key={`select-theme-${v}`} value={v}>
                    {v.replace(/[a-z]/, (e) =>
                      e.replace(/[a-z]/, (e) => e.toUpperCase()),
                    )}
                  </SelectItem>
                ))}
              </ScrollArea>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default ControlsBox;
