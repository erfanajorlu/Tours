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
      <main className="w-9/12 mx-auto flex justify-center items-center font-extrabold text-4xl my-12">
        <div>
          <h2>No Tours Left</h2>
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
