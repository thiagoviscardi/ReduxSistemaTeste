export interface Params {
  previousItem?: {
    children: [];
    key: number;
    value: string;
    level: number;
    familyId: number;
    isLastLevel: boolean;
  };
  edit?: boolean;
}

export interface Lista {
  createdAt: String;
  histories: [];
  id: Number;
  name: String;
  type: String;
}
