import React, {useEffect} from "react";
import AgeInput from "../components/AgeInput";
import ListProducts from "../components/ListProducts";
import { useCookies } from 'react-cookie';


export default function Home() {
  const [cookies, setCookie] = useCookies();
  useEffect(()=>{
    if(cookies.firstVisit === undefined) {
      setCookie('firstVisit', "true", { path: '/' })
    }else if(cookies.firstVisit === "true"){
      console.log("cookie set to false")
      setCookie('firstVisit', "false", { path: '/' })
    }
  }, [])
  

  return (
    
    <div className="home">
        <h3>Welcome to my webshop!</h3>
        {cookies.Age === undefined ? (<AgeInput/>) : (<div className="AgeInputDiv">Your age has been already set</div>)}
        <ListProducts/>
    </div>
  );
}