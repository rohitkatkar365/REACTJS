// import Home from "./components/Home";
// import About from "./components/About";
// import { Routes, Route, Link } from "react-router-dom";
// import User from "./components/User";
// import Nav from "./components/Nav";
// import PageNot from "./components/PageNot";

// function App() {
//   return (
//     <>
//       <div
//         className="app"
//         style={{
//           display: "grid",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <Nav></Nav>
//         <Routes>
//           <Route path="/" element={<Home />} exact={true}/>
//           <Route path="/about" element={<About />} />
//           <Route path="/*" element={<PageNot></PageNot>}></Route>
//         </Routes>
//       </div>
//     </>
//   );
// }







function App() {
  const sampleArray = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 28 },
    { id: 4, name: "Daisy", age: 35 },
  ];

  return (
    <>
      <Routes>
        <Route path="/user/:id" element={<User />} />
      </Routes>
      <div>
        {sampleArray.map((element) => (
          <div key={element.id}>
            <Link to={`/user/${element.id}`}>{element.name}</Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;