"use client";

import { plugins } from "@/lib/plate/plate-plugins";
import { ELEMENT_PARAGRAPH } from "@udecode/plate";
import { Plate } from "@udecode/plate-common";
import { useRef } from "react";
import { Editor } from "./plate-ui/editor";
import { FixedToolbar } from "./plate-ui/fixed-toolbar";
import { FixedToolbarButtons } from "./plate-ui/fixed-toolbar-buttons";

export const PlateEditor = () => {
  const containerRef = useRef(null);

  const initialValue = [
    {
      id: "1",
      type: ELEMENT_PARAGRAPH,
      children: [{ text: "안녕하세요!" }],
    },
  ];

  return (
    <Plate plugins={plugins} initialValue={initialValue}>
      <div
        ref={containerRef}
        className="[&_.slate-start-area-left]:!w-[64px] [&_.slate-start-area-right]:!w-[64px] [&_.slate-start-area-top]:!h-4"
      >
        <FixedToolbar>
          <FixedToolbarButtons />
        </FixedToolbar>
        <Editor
          className="px-8 md:px-[96px] md:py-16"
          autoFocus
          focusRing={false}
          variant="ghost"
          size="md"
        />
        {/* <FloatingToolbar>
          <FloatingToolbarButtons />
        </FloatingToolbar> */}
      </div>
    </Plate>
  );
};
