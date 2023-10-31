import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <main className="flex justify-center items-center text-4xl mt-3">
        <Loading />
      </main>
    );
  }
  if (tours.length === 0) {
    return (
      <main className="w-full font-extrabold text-4xl my-12">
        <div className="flex justify-center items-center">
          <h2 className="mx-auto my-12">No Tours Left</h2>
        </div>
        <div className="flex justify-center items-center">
          <button className="border rounded-lg bg-blue-500 text-white font-semibold text-lg w-20" onClick={()=> fetchData()}>
            Refresh
          </button>
        </div>
      </main>
    );
  }
  return (
    <main className="w-9/12 mx-auto flex justify-center items-center">
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;
