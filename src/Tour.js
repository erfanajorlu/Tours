import React, { useState } from "react";

const Tour = ({ id, image, info, name, price, removeTour }) => {
  const [readmore, setReadmore] = useState(false);

  return (
    <article className="border mx-auto my-16 rounded-lg w-3/6">
      <img className="w-full h-72 rounded-t-lg" src={image} alt={name} />
      <div className="px-12 py-8 flex justify-between">
        <h4 className="font-bold">{name}</h4>
        <h4 className="text-blue-500 font-bold">${price}</h4>
      </div>
      <p className="text-gray-500 text-sm mx-auto w-5/6 font-semibold">
        {readmore ? info : `${info.substring(0, 200)}...`}
        <button className="text-blue-400" onClick={() => setReadmore(!readmore)}>
          {readmore ? 'show less' : ' show more'}
        </button>
      </p>
      <div className="my-4 flex justify-center items-center">
        <button
          className="border-pink-700 border px-8 py-1 font-semibold text-lg text-pink-700"
          onClick={() => removeTour(id)}
        >
          Not Interested
        </button>
      </div>
    </article>
  );
};

export default Tour;
