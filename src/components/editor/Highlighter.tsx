"use client";
import SyntaxHighlighter from "react-syntax-highlighter";
import * as themes from "react-syntax-highlighter/dist/esm/styles/hljs";
import * as tinycolor from "tinycolor2";

import { Textarea } from "@/components/ui/textarea";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";

export const Highlighter = ({
  language,
  theme,
}: {
  language: string;
  theme: string;
}) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [code, setCode] = useState("");
  const codeStyle = (
    themes as unknown as Record<string, { [key: string]: React.CSSProperties }>
  )[theme];
  const color = tinycolor.default(codeStyle["hljs"]["color"]);
  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.focus();
    }
  }, []);
  return (
    <ScrollArea className="relative m-2 h-[90vh] max-w-[90vw] overflow-x-scroll rounded-md border-2 border-neutral-900 bg-neutral-950">
      <div className="mb-2 inline-flex w-[85vw]">
        <div className="my-2 flex flex-col rounded-md p-2 font-mono font-bold text-neutral-300">
          {code.split("\n").map((v, i) => (
            <span className="ml-auto">{i + 1}</span>
          ))}
        </div>
        <div className="relative flex flex-1 p-[0.5em] px-2">
          <SyntaxHighlighter
            style={codeStyle}
            language={language}
            customStyle={{
              flex: "1 1",
              // lineHeight: "1.25rem",
              minHeight: "85vh",
              borderRadius: "8px",
            }}
          >
            {code + "\r\n"}
          </SyntaxHighlighter>
          <Textarea
            ref={textAreaRef}
            className={cn(
              "absolute inset-0 min-h-[85vh] rounded-none bg-transparent px-4 py-4 font-mono font-medium text-transparent focus:ring-0 focus:ring-offset-0 focus:ring-offset-transparent focus-visible:ring-transparent",
              "resize-none border-none text-[1em]",
              color.getBrightness() > 128 ? "caret-white" : "caret-black",
            )}
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
        </div>
      </div>
      <ScrollBar orientation="horizontal" className="absolute max-w-[57vw]" />
    </ScrollArea>
  );
};
