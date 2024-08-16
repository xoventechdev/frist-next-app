"use client";
import React, { useEffect, useState } from "react";

const page = () => {
  const [book, setBook] = useState([]);

  const bookCaller = async () => {
    const data = await fetch(
      "https://raw.githubusercontent.com/benoitvallon/100-best-books/master/books.json"
    );
    const books = await data.json();
    setBook(books);
  };

  useEffect(() => {
    (async () => {
      await bookCaller();
    })();
  }, []);

  return (
    <div>
      <h2>This is Book Page</h2>c
      {book.length > 0
        ? book.map((book, i) => {
            return (
              <div key={i}>
                <h3>{book.title}</h3>
                <p>{book.author}</p>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default page;
