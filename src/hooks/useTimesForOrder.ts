import { useDispatch, useSelector } from "react-redux";
import { useRequest } from "ahooks";

import { useCallback, useEffect } from "react";

import { getTimesForOrder } from "api/timeForOrder";

import { setTimesForOrder } from "store/times.store";

const useTimesForOrder = () => {
  const dispatch = useDispatch();
  const { times } = useSelector((state) => state["timesForOrder"]);

  const { runAsync, loading } = useRequest(getTimesForOrder, {
    manual: true,
    onSuccess: (result) => {
      console.log(result.data.data);
      dispatch(setTimesForOrder(result.data.data));
    },
  });

  const handleGetTimesForOrder = useCallback(() => {
    runAsync().then((r) => r);
  }, [runAsync]);

  useEffect(() => {
    handleGetTimesForOrder();
  }, [handleGetTimesForOrder]);

  return {
    times,
    loading,
  };
};

export { useTimesForOrder };
