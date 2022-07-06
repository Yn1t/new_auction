export type User = {
  id: string;
  balance: number;
  login: string;
};

export type Lot = {
  id: string;
  name: string;
  startPrice: number;
  description: string;
  tags: DOMStringList;
  bestBet: {
    id: string;
    createDate: string;
    amount: number;
  }
  sold: boolean;
  linkToImage: string;
};

export type Bet = {
  id: string;
  amount: number;
  createDate: string;
  ownLotId: string;
}