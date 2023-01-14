import { useDispatch, useSelector } from "react-redux";
import { useRequest } from "ahooks";
import { useCallback, useEffect } from "react";

import { getCategories } from "api/categories";

import { setCategories } from "store/categories.store";

const useCategories = (autoLoad: boolean) => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state["categories"]);

  const parseData = (data) => dispatch(setCategories(data));

  const { runAsync, loading, error } = useRequest(getCategories, {
    manual: true,
    onSuccess: (data) => {
      parseData(data.data.data);
    },
  });

  const handleGetCategories = useCallback(() => {
    if (autoLoad) {
      runAsync().then((r) => r);
    }
  }, [runAsync, autoLoad]);

  useEffect(() => {
    handleGetCategories();
  }, [handleGetCategories]);

  return {
    categories,
    loading,
    error,
  };
};

export { useCategories };
