import axios from "axios"
import { ArtsPage } from "./ArtsPage";
import "./App.css";

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <div>
      <ArtsPage />
    </div>
  )
}

export default App;