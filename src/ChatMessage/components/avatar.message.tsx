import { ChatOptions } from "../../ChatOptions";
import { useMessageContext } from "../provider/message.hook";
import { RenderIf } from "../../utils/RenderIf";
import { Avatar } from "../../Chat/components/Avatar";


interface Props {

}



export default function MessageAvatar({ }: Props) {

    const { bot } = ChatOptions.use();

    const {
        role,
        agent,
        style,
        withIcon
    } = useMessageContext();

    return (
        <RenderIf condition={withIcon}>
            <Avatar.AGENT
                role={role}
                logo={agent?.logo}
                alt={agent?.nickname ?? 'Atendente'}
                name={agent?.nickname ?? 'Atendente'}
                style={style}
            />
            <Avatar.BOT
                role={role}
                alt={bot.nickname}
                name={bot.nickname}
                style={style}
            />
            <Avatar.USER
                role={role}
                style={style}
            />
        </RenderIf>
    );
}