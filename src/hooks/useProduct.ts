import { useRequest } from "ahooks";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect } from "react";

import { getProductById } from "api/products";

import { setProduct } from "store/products.store";

import { Product, ResponseData } from "types/body";

const useProduct = (id: string) => {
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state["products"]);

  const { runAsync, loading, error } = useRequest(getProductById, {
    manual: true,
    onBefore: () => {
      dispatch(setProduct({} as ResponseData<Product>));
    },
    onSuccess: (result) => {
      dispatch(setProduct(result.data.data));
    },
  });

  const getProduct = useCallback(
    async (localId?: string) => {
      runAsync(localId || id).then((r) => r);
    },
    [id, runAsync]
  );

  useEffect(() => {
    getProduct().then((r) => r);
  }, [getProduct]);

  return {
    product,
    getProduct,
    loading: loading || error,
  };
};

export { useProduct };
