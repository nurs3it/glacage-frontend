import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect } from "react";

import { setCart } from "store/cart.store";

const KEY = "cart";

const useCart = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state["cart"]);

  const setToStorage = (array) => {
    window.localStorage.setItem(KEY, JSON.stringify(array));
    dispatch(setCart(array));
  };

  // check method that product has in cart
  const hasInCart = (id: string): boolean => {
    return !!getProductsFromStorage().some((e) => e.id === id);
  };

  // get products in cart from localStorage
  const getProductsFromStorage = () => {
    return JSON.parse(window.localStorage.getItem(KEY)) || [];
  };

  // add product to cart
  const addProduct = (product) => {
    if (hasInCart(product.id)) {
      setToStorage([
        ...(getProductsFromStorage().map((e) =>
          hasInCart(e.id) && product.id === e.id
            ? {
                ...e,
                count: e.count + 1,
              }
            : {
                ...e,
                count: e.count,
              }
        ) || []),
      ]);
    } else {
      setToStorage([
        ...(getProductsFromStorage() || []),
        { ...product, count: 1 },
      ]);
    }
  };

  // remove product to cart by id
  const removeProduct = (id: string) => {
    setToStorage([
      ...(getProductsFromStorage().filter((e) => e.id !== id) || []),
    ]);
  };

  const setProductsFromStorage = useCallback(() => {
    dispatch(setCart(getProductsFromStorage()));
  }, [dispatch]);

  useEffect(() => {
    setProductsFromStorage();
  }, [setProductsFromStorage]);

  return {
    cart,
    addProduct,
    removeProduct,
    getProductsFromStorage,
  };
};

export { useCart };
