import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip";
import { PropsWithChildren } from "react";

interface ChatTooltipProps extends PropsWithChildren {
  tooltipContent: string;
};

export default function ChatTooltip({ children, tooltipContent }: ChatTooltipProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        {children}
      </TooltipTrigger>
      <TooltipContent side="top">{tooltipContent}</TooltipContent>
    </Tooltip>
  );
}
