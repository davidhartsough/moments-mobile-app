import React, { useEffect } from "react";
import ScreenLoader from "./ScreenLoader";

export default function Fetcher({ hasFetched, loading, fetchData, children }) {
  useEffect(() => {
    fetchData(hasFetched);
  }, [hasFetched, fetchData]);
  if (loading) return <ScreenLoader />;
  return children;
}
