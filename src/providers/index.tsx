"use client";

import { TooltipProvider } from "@/components/plate-ui/tooltip";
import { PropsWithChildren } from "react";

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <TooltipProvider disableHoverableContent delayDuration={500} skipDelayDuration={0}>
      {children}
    </TooltipProvider>
  );
};
