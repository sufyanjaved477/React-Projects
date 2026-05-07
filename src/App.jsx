import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
function App() {
  const [getdata, setGetdata] = useState([]);

  const getIfo = async () => {
    const a = await fetch(`https://jsonplaceholder.typicode.com/todos`);
    const b = await a.json();
    console.log(b);
    setGetdata(b);
  };

  useEffect(() => {
    getIfo();
  }, []);

  return (
    <div>
      <Navbar />

      <main>

        <div className="container">

        {getdata.map((data) => {
          return (
            <div key={data.id} className="cards">
              
                <h1>{data.id}</h1>
                <h2>{data.userId}</h2>
                <p>{data.title}</p>
                <h3>{data.completed? 'ture' : 'false'}</h3>
            </div>
          );
        })}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
