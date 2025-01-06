import { create } from "zustand";
import { persist } from "zustand/middleware";

// Define types for the state
interface ProductStore {
  products: object[]; // You can replace `object` with a more specific type if needed
  setProducts: (products: object[]) => void;
  categories: string[]; // Replace `any` with a more specific type if needed
  setCategories: (categories: string[]) => void;
}

const useProductStore = create<ProductStore>(
  persist(
    (set) => ({
      products: [],
      setProducts: (products: object[]) => set({ products }),
      categories: [],
      setCategories: (categories: string[]) => set({ categories }),
    }),
    { name: "local_product" }
  )
);

export default useProductStore;
