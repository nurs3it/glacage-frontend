import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect } from "react";

import { setCart, setTotalPrice } from "store/cart.store";

const KEY = "cart";

const useCart = () => {
  const dispatch = useDispatch();

  const { cart, totalPrice } = useSelector((state) => state["cart"]);

  const getTotalPrice = (array) => {
    return array.reduce((a, b) => {
      return a + (b.stock ? b.stock.price : b.attributes.price) * b.count;
    }, 0);
  };

  const setToStorage = (array) => {
    window.localStorage.setItem(KEY, JSON.stringify(array));
    dispatch(setCart(array));
    dispatch(setTotalPrice(getTotalPrice(array)));
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

  // change count in cart
  const changeCount = (id: string, count) => {
    setToStorage([
      ...getProductsFromStorage().map((e) => {
        if (e.id === id) {
          return {
            ...e,
            count,
          };
        }

        return e;
      }),
    ]);
  };

  const setProductsFromStorage = useCallback(() => {
    dispatch(setCart(getProductsFromStorage()));
    dispatch(setTotalPrice(getTotalPrice(getProductsFromStorage())));
  }, [dispatch]);

  useEffect(() => {
    setProductsFromStorage();
  }, [setProductsFromStorage]);

  return {
    cart,
    totalPrice,
    addProduct,
    removeProduct,
    changeCount,
    getProductsFromStorage,
  };
};

export { useCart };
