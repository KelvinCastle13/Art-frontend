import axios from "axios"
import { ArtsIndex } from "./ArtsIndex"
import { useState, useEffect } from "react";
import "./ArtsPage.css";


export function ArtsPage() {

  const [arts, setArts] = useState([]);

  const handleIndex = () => {
    console.log("handleIndex");
    axios.get("/arts.json").then((response) => {
      console.log(response.data.data);
      setArts(response.data.data);
    }).catch((error) => {
      console.error(error);
    })
  };

  // console.log(arts,"artspage")

  useEffect(handleIndex, []);
  
  return (
    <main className="center-page">  
      <ArtsIndex arts={arts}/>
    </main>
  )
}