import React from "react";
import Tour from "./Tour";

const Tours = ({ tours, removeTour }) => {
  return (
    <section >
      <div>
        <h2 className="mx-auto m-4 text-center text-2xl font-bold">Our Tours</h2>
        <h2 className="w-16 h-1 mb-6 mx-auto bg-blue-600 text-center"></h2>
      </div>
      <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
