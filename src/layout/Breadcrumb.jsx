import React from "react";
import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";

const Breadcrumbs = () => {
  const location = useLocation();

  // Split the current path into parts
  const pathnames = location.pathname.split("/").filter((x) => x);
  console.log(pathnames);

  if (location.pathname === "/") {
    return null;
  }
  return (
    <nav
      aria-label="Breadcrumb"
      className="bg-gray-100 p-4 rounded-md shadow-md"
    >
      <ol className="flex items-center space-x-2 text-sm text-gray-600">
        <li>
          <Link
            to="/"
            className="hover:text-gray-800 hover:underline text-blue-600"
          >
            Home
          </Link>
        </li>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;

          return (
            <li key={to} className="flex items-center">
              <span className="mx-2 text-gray-400">/</span>
              {isLast ? (
                <span
                  className={clsx(
                    "font-medium",
                    isLast && "text-gray-800 cursor-default"
                  )}
                >
                  {value.charAt(0).toUpperCase() + value.slice(1)}
                </span>
              ) : (
                <Link
                  to={to}
                  className="hover:text-gray-800 hover:underline text-blue-600"
                >
                  {value.charAt(0).toUpperCase() + value.slice(1)}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
