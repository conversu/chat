import { useContext } from "react";
import { AttachmentButton } from "./components/btn-attachment.form";
import { ChatFormSubmitButton } from "./components/btn-submit.form";
import { ChatFormContainer } from "./components/container.form";
import { ChatFormInputContainer } from "./components/input-container.form";
import { InputFilePreview } from "./components/input-file-preview.form";
import { ChatFormInputFile } from "./components/input-file.form";
import { ChatFormInputGroup } from "./components/input-group.form";
import { InputText } from "./components/input-text.form";
import { ChatFormProvider } from "./provider/provider";
import { ChatFormContext } from "./provider/context";

export const ChatForm = {
    Provider: ChatFormProvider,
    Container: ChatFormContainer,
    Button: {
        Submit: ChatFormSubmitButton,
        Attachments: AttachmentButton
    },
    Input: {
        Container: ChatFormInputContainer,
        Group: ChatFormInputGroup,
        Text: InputText,
        File: {
            Container: ChatFormInputFile,
            Preview: InputFilePreview
        }
    },
    use: () => useContext(ChatFormContext)
}