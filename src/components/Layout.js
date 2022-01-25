import React from "react";

function Layout(props) {
  const { children, padding, className, width, space } = props;
  return (
    <div className={`${padding} w-full min-h-screen bg-gray-50`}>
      <div className={`${width} w- mx-auto ${className} ${space}`}>{children}</div>
    </div>
  );
}

Layout.defaultProps = {
  padding: "py-12 md:py-16",
  className: "",
  width: "w-5/6 md:w-4/5",
  space: "space-y-8",
};

export default Layout;