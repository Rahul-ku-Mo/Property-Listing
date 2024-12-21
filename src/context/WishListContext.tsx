import { createContext, useContext, useState, ReactNode } from "react";

interface WishListContextType {
  wishlist: number[];
  addToWishlist: (propertyId: number) => void;
  removeFromWishlist: (propertyId: number) => void;
  isInWishlist: (propertyId: number) => boolean;
}

const WishListContext = createContext<WishListContextType | undefined>(
  undefined
);

export const WishListContextProvider = ({ children }: { children: ReactNode }) => {
  const [wishlist, setWishlist] = useState<number[]>([]);

  const addToWishlist = (propertyId: number) => {
    setWishlist((prev) => [...prev, propertyId]);
  };

  const removeFromWishlist = (propertyId: number) => {
    setWishlist((prev) => prev.filter((id) => id !== propertyId));
  };

  const isInWishlist = (propertyId: number) => {
    return wishlist.includes(propertyId);
  };

  return (
    <WishListContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
      }}
    >
      {children}
    </WishListContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useWishList = () => {
  const context = useContext(WishListContext);
  if (context === undefined) {
    throw new Error("useWishList must be used within a WishListProvider");
  }
  return context;
};
