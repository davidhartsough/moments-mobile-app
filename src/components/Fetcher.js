import React, { useEffect } from "react";
import ScreenLoader from "./ScreenLoader";

export default function Fetcher({ loading, fetchData, children }) {
  useEffect(() => {
    fetchData();
  }, [fetchData]);
  if (loading) return <ScreenLoader />;
  return children;
}
