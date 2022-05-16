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
    image: string;
  };