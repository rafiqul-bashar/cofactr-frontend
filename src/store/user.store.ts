import { create } from "zustand";
import { persist } from "zustand/middleware";
export interface USER {
  products: ProductsOrOrders;
  orders: ProductsOrOrders;
  _id: string;
  name: string;
  email: string;
  seller: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
  token: string;
}
export interface ProductsOrOrders {
  default?: null[] | null;
}

type userStoreT = {
  AUTHENTICATED: boolean;
  USER: USER | null;
  SAVE_USER: (userData: USER) => void;
  LOGOUT_USER: () => void;
};

const userStore = create(
  persist<userStoreT>(
    (set) => ({
      AUTHENTICATED: false,
      USER: null,

      SAVE_USER: (data: USER) =>
        set(() => ({
          AUTHENTICATED: true,
          USER: data,
        })),
      LOGOUT_USER: () =>
        set(() => ({
          AUTHENTICATED: false,
          USER: null,
        })),
    }),
    { name: "user-in" }
  )
);

export default userStore;
