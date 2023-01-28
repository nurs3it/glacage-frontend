import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect } from "react";
import { useRequest } from "ahooks";

import { setAbout } from "store/about.store";

import { getAbout } from "api/about";

const useAboutInfo = () => {
  const dispatch = useDispatch();

  const { about } = useSelector((state) => state["about"]);

  const { runAsync, loading, error } = useRequest(getAbout, {
    manual: true,
    onSuccess: (result) => {
      dispatch(setAbout(result.data.data.attributes));
    },
  });

  const setAboutInfo = useCallback(() => {
    if (!about) {
      runAsync().then((r) => r);
    }
  }, [about, runAsync]);

  useEffect(() => {
    setAboutInfo();
  }, [setAboutInfo]);

  return {
    about,
    loading,
    error,
  };
};

export { useAboutInfo };
