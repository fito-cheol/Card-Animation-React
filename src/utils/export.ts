import { ConversationArray, Conversation } from './commonTypes';

function mergeConversationArray(conversationArray: ConversationArray): string {
  return conversationArray
    .map(conversation => {
      return mergeLine(conversation);
    })
    .join('\r\n');
}

function mergeLine(conversation: Conversation): string {
  const { context, reply, value, comment } = conversation;
  return `${context}\t${reply}\t${value}\t${comment}`;
}

export { mergeConversationArray };
