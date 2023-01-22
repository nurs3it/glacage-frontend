import { useDispatch, useSelector } from "react-redux";
import { useRequest } from "ahooks";

import { getAddresses } from "api/addresses";

import { setAddresses } from "store/addresses.store";
import { useCallback, useEffect } from "react";

const useAddresses = () => {
  const dispatch = useDispatch();
  const { addresses } = useSelector((state) => state["addresses"]);

  const { runAsync, loading } = useRequest(getAddresses, {
    manual: true,
    onSuccess: (result) => {
      dispatch(setAddresses(result.data.data));
    },
  });

  const handleGetAddresses = useCallback(() => {
    runAsync().then((r) => r);
  }, [runAsync]);

  useEffect(() => {
    handleGetAddresses();
  }, [handleGetAddresses]);

  return {
    addresses,
    loading,
  };
};

export { useAddresses };
