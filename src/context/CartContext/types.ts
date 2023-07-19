export interface IDefaultProviderPropsChildren {
  children: React.ReactNode;
}
export interface IcartContext {
  modalCart: boolean;
  setModalCart: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean;
  listProducts: IproductValue[];
  setListProducts: React.Dispatch<React.SetStateAction<IproductValue[]>>;
  filteredProducts: IproductValue[];
  handleClick: (idProduct: number) => void;
  cartItens: IproductValue[];
  setCartItens: React.Dispatch<React.SetStateAction<IproductValue[]>>;
  removetoListTodos: () => void;
  removeItemCarrinho: (productId: number) => void;
  totalReduce: number;
  showProducts: () => void;
  setFormValue: React.Dispatch<React.SetStateAction<string>>;
}
export interface IproductValue {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}
