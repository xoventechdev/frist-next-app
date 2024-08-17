"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Menu = () => {
  const currentMenu = usePathname();
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" href="/">
          Home
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className={
                  currentMenu === "/"
                    ? "activeMenu nav-link"
                    : "inactiveMenu nav-link"
                }
                aria-current="page"
                href="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={
                  currentMenu === "/book"
                    ? "activeMenu nav-link"
                    : "inactiveMenu nav-link"
                }
                href="/book"
              >
                Book
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={
                  currentMenu === "/book/add"
                    ? "activeMenu nav-link"
                    : "inactiveMenu nav-link"
                }
                href="/book/add"
              >
                Add Book
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={
                  currentMenu === "/product"
                    ? "activeMenu nav-link"
                    : "inactiveMenu nav-link"
                }
                href="/product"
              >
                Product
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={
                  currentMenu === "/employees"
                    ? "activeMenu nav-link"
                    : "inactiveMenu nav-link"
                }
                href="/employees"
              >
                Employees
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
