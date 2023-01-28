import { useDispatch, useSelector } from "react-redux";
import { useRequest } from "ahooks";
import { useCallback, useEffect } from "react";

import { getCategories } from "api/categories";

import { setCategories, setCategoriesMeta } from "store/categories.store";

const useCategories = (autoLoad: boolean) => {
  const dispatch = useDispatch();

  const { categories, categoriesMeta } = useSelector(
    (state) => state["categories"]
  );

  const parseData = (data) => dispatch(setCategories(data));
  const parseMetaData = (data) => dispatch(setCategoriesMeta(data));

  const { runAsync, loading, error } = useRequest(getCategories, {
    manual: true,
    onSuccess: (data) => {
      parseData(data.data.data);
      parseMetaData(data.data.meta);
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
    categoriesMeta,
    loading,
    error,
  };
};

export { useCategories };
