export type ordersList = order[];

export type order = {
  id: string;
  number: number;
  sale: number;
  date: string;
  goods: good[];
};

export type good = {
  id: string;
  name: string;
  price: number;
  count: number;
};

export type orderListState = {
  orderListIsLoading: boolean;
  orderListResult: ordersList;
  orderListError: {} | null;
};
