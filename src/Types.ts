export type CommentType = {
  text: string;
  id: string;
  cardId: string;
  author: string | null;
};

export type ColumnType = {
  title: string;
  id: string;
};

export type CardType = {
  title: string;
  description: string;
  author: string | null;
  id: string;
  columnId: string;
};

export type ActionType = {
  newText: string;
  id: string;
};
