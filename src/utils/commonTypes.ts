interface Category {
  name: string;
  value: string;
}
type CategoryArray = Array<Category>;

interface MetaData {
  title: string;
  description: string;
  categories: CategoryArray;
}
interface Conversation {
  context: string;
  reply: string;
  value: string | null;
  comment: string;
}

type ConversationArray = Array<Conversation>;

interface PageInfo {
  total: number;
  current: number;
}

export type { CategoryArray, MetaData, Conversation, ConversationArray, PageInfo };
