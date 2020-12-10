import React from "react";
import AgeInput from "../components/AgeInput";
import ListProducts from "../components/ListProducts";
import { useCookies } from 'react-cookie';


export default function Home() {
  const [cookies, setCookie] = useCookies();
  const setVisitCookie = (cookiesParam) => {
    if(cookiesParam.firstVisit === undefined) {
      console.log("cookie set to true")
      setCookie('firstVisit', "true", { path: '/' })
    }else if(cookiesParam.firstVisit === "true"){
      console.log("cookie set to false")
      setCookie('firstVisit', "false", { path: '/' })
    }
  }
  return (
    <div className="home">
        {setVisitCookie(cookies)}
        <h3>Welcome to my webshop!</h3>
        {cookies.Age === undefined ? (<AgeInput/>) : (<div className="AgeInputDiv">Your age has been already set</div>)}
        <ListProducts/>
    </div>
  );
}