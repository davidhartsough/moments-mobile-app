import React from "react";
import List from "./List";
import Empty from "./Empty";

export default function ListScreen({ title, type, data }) {
  const plural = title.toLowerCase();
  const singular = type.toLowerCase();
  if (data.length === 0) return <Empty plural={plural} />;
  return <List singular={singular} type={type} plural={plural} items={data} />;
}
