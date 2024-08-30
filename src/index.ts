import { ChatControl } from "./ChatControl";
import { ChatForm } from "./ChatForm";
import { ChatMessage } from "./ChatMessage";
import { ChatOptions } from "./ChatOptions";
import { ChatTheme } from "./ChatTheme";
import { defaultLayout } from "./cte/layout";

export * from "./Media";
export * from "./utils/index";
export * from "./Media";
export const Chat = {
    Form: ChatForm,
    Control: ChatControl,
    Message: ChatMessage,
    Options: ChatOptions,
    Theme: ChatTheme,
    CTE: {
        layout: defaultLayout
    }
}