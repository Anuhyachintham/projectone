import React from "react";
import { useRouteError } from "react-router-dom";

const Error=()=>{
    const err=useRouteError
    console.log(err);

    return(<div className="err-con">
<div>
    <p>Sorry!</p>
    <h1>We can't seem to find the resource you're looking for.</h1>
    <h2>Please check that the Web site address is spelled correctly.
Or go to our home page, and use the menus to navigate to a specific section.</h2>
   {err.status}
</div>

<img className="img-container" src="https://img.freepik.com/free-vector/flat-404-error-template_23-2147740353.jpg?size=626&ext=jpg&ga=GA1.1.2055375840.1709131867&semt=ais"/>
    </div>)
}

export default Error;