import React from "react";

export default function Drill({ store }) {
  console.log(store);
  return <div className="add-drill">{store.selectedCategory.name}</div>;
}
