export type NewType = {
  id: number;
  title: string;
  text: string;
  img: string;
  quote: number;
  userId: number;
  createdAt: Date;
  updatedAt: Date;
};

export type AddNewFormData = {
  title: string;
  text: string;
  img: string;
  quote: number;
};


export type NewSliceState = {
  news: NewType[];
  currentNew: NewType | null;
};
