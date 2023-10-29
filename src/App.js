import React , {useState , useEffect} from "react";


const url = 'https://course-api.com/react-tours-project';

function App() {
  const [loading , setLoading] = useState(true);
  const [tours , setTours] = useState([]);


  const fetchData = async () =>{
    setLoading(true);
    try{
      const response = await fetch(url) ;
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    }catch(error){
      setLoading(false);
      console.log(error);
    }
  }

  useEffect(()=>{
    fetchData()
  } , []);
  return (
    <></>
  );
}

export default App;
