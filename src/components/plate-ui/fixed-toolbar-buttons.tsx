import { MARK_BOLD, MARK_STRIKETHROUGH, MARK_UNDERLINE } from "@udecode/plate-basic-marks";
import { useEditorReadOnly } from "@udecode/plate-common";
import { ELEMENT_IMAGE } from "@udecode/plate-media";

import { Icons } from "@/components/icons";
import { AlignDropdownMenu } from "@/components/plate-ui/align-dropdown-menu";
import { LinkToolbarButton } from "@/components/plate-ui/link-toolbar-button";
import { MediaToolbarButton } from "@/components/plate-ui/media-toolbar-button";

import { MarkToolbarButton } from "./mark-toolbar-button";
import { ToolbarGroup } from "./toolbar";

export function FixedToolbarButtons() {
  const readOnly = useEditorReadOnly();

  return (
    <div className="flex w-full justify-center overflow-hidden">
      <div
        className="flex flex-wrap"
        style={{
          transform: "translateX(calc(-1px))",
        }}
      >
        {!readOnly && (
          <>
            {/* <ToolbarGroup noSeparator>
              <InsertDropdownMenu />
              <TurnIntoDropdownMenu />
            </ToolbarGroup> */}

            <ToolbarGroup noSeparator>
              <MarkToolbarButton tooltip="Bold (⌘+B)" nodeType={MARK_BOLD}>
                <Icons.bold />
              </MarkToolbarButton>
              {/* <MarkToolbarButton tooltip="Italic (⌘+I)" nodeType={MARK_ITALIC}>
                <Icons.italic />
              </MarkToolbarButton> */}
              <MarkToolbarButton tooltip="Underline (⌘+U)" nodeType={MARK_UNDERLINE}>
                <Icons.underline />
              </MarkToolbarButton>

              <MarkToolbarButton tooltip="Strikethrough (⌘+⇧+M)" nodeType={MARK_STRIKETHROUGH}>
                <Icons.strikethrough />
              </MarkToolbarButton>
              {/* <MarkToolbarButton tooltip="Code (⌘+E)" nodeType={MARK_CODE}>
                <Icons.code />
              </MarkToolbarButton> */}
            </ToolbarGroup>

            {/* <ToolbarGroup>
              <ColorDropdownMenu nodeType={MARK_COLOR} tooltip="Text Color">
                <Icons.color className={iconVariants({ variant: "toolbar" })} />
              </ColorDropdownMenu>
              <ColorDropdownMenu nodeType={MARK_BG_COLOR} tooltip="Highlight Color">
                <Icons.bg className={iconVariants({ variant: "toolbar" })} />
              </ColorDropdownMenu>
            </ToolbarGroup> */}

            <ToolbarGroup noSeparator>
              <AlignDropdownMenu />

              {/* <LineHeightDropdownMenu /> */}

              {/* <IndentListToolbarButton nodeType={ListStyleType.Disc} /> */}
              {/* <IndentListToolbarButton nodeType={ListStyleType.Decimal} /> */}

              {/* <OutdentToolbarButton /> */}
              {/* <IndentToolbarButton /> */}
            </ToolbarGroup>

            <ToolbarGroup noSeparator>
              <LinkToolbarButton />

              <MediaToolbarButton nodeType={ELEMENT_IMAGE} />

              {/* <TableDropdownMenu /> */}

              {/* <EmojiDropdownMenu /> */}
            </ToolbarGroup>
          </>
        )}

        <div className="grow" />

        {/* <ToolbarGroup noSeparator>
          <ModeDropdownMenu />
        </ToolbarGroup> */}
      </div>
    </div>
  );
}
