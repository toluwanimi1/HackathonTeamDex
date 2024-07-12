import React from "react";

const Card = ({ title, children, src }) => {
  return (
    <div className="relative card flex flex-col justify-center items-center border-solid border-2 rounded-xl w-96 h-[30rem] px-10 text-center">
      <img alt={src} src={src} className="w-9 h-9 absolute top-4 left-4" />
      <h1 className="mb-3 font-bold">{title}</h1>
      <div>{children}</div>
      <img alt={src} src={src} className="w-9 h-9 absolute bottom-4 right-4" />
    </div>
  );
};

export default Card;
