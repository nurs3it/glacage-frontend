import { useDispatch, useSelector } from "react-redux";

import { setCategory, setProducts } from "src/store/products.store";

import { useRequest } from "ahooks";
import { useCallback, useEffect } from "react";

import { getProductsByCategoryId } from "api/products";
import { Category, Response, ResponseData } from "types/body";

const useProducts = () => {
  const dispatch = useDispatch();
  const { products, category } = useSelector((state) => state["products"]);

  const parseData = (data) => {
    dispatch(setProducts(data));

    if (data.length > 0) {
      dispatch(setCategory(data[0].attributes.category));
    }
  };

  const getByCategoryIdService = useRequest(getProductsByCategoryId, {
    manual: true,
    onSuccess: (data) => {
      parseData(data.data.data);
    },
  });

  const getByCategoryId = useCallback((id: string) => {
    getByCategoryIdService.runAsync(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    return () => {
      dispatch(setProducts([]));
      dispatch(setCategory({} as Response<ResponseData<Category>>));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    products,
    category,
    getByCategoryId,
    loading: getByCategoryIdService.loading,
    error: getByCategoryIdService.error,
  };
};

export { useProducts };
