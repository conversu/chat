import { ChatControl } from '../../ChatControl';
import { ChatOptions } from '../../ChatOptions';
import { ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';

interface Props {
  children?: ReactNode;
}

export function ChatHead({ children }: Props) {

  const { isTyping, head } = ChatControl.use();
  const { bot, agent } = ChatOptions.use();

  const name = agent ? agent.nickname : bot.nickname;

  return (
    <>

      <Helmet>
        {isTyping ? (
          <title>{name} está digitando...</title>
        ) : (
          <title>{head}</title>
        )}
      </Helmet>
      {children}
    </>
  );
}