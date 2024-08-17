import Link from "next/link";
import React from "react";

const productCaller = async () => {
  const data = await fetch("https://dummyjson.com/products");
  const products = await data.json();
  return products.products;
};

const page = async () => {
  const product = await productCaller();
  return (
    <div>
      {product.map((item, i) => {
        return (
          <div key={i}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <Link href={{ pathname: "/product/edit", query: { id: item.id } }}>
              Edit
            </Link>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default page;
