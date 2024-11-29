import React,{useState} from "react";

function Condition() {
  const [isLoggedIn,setLoggedIn] = useState(false);
//   if (isLoggedIn) {
//     return(
//         <h1>Welcome RRK Community</h1>
//     )
//   }
//   else{
//     return(
//         <h1>
//          please loggedIn
//         </h1>
//     )
//   }

// Another Way
return(
    <>
    {
        {isLoggedIn} ? <h1>Welcome To RRK Community</h1>:<h1>Login Please</h1>
    }
    </>
)
}

export default Condition;
