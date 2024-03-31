import './App.css'
// import Products from './component/addPract1/Products'
// import Persons from './component/addPract2/Persons'
import Family from "./component/addPract3/Family";


function App() {
  
  // const products = ["table","couch","chair1","chair2"];
  // const names = ["Parker","Simmons","Lewis","Poe"];
  const persons = [{ name: "Juan", age: 26 },{ name: "Gabriel", age: 27 }, { name:
    "Valentina", age: 22 }, { name: "Paula", age: 25 }, { name: "Andrés", age: 20 } ];

  const personsAge = persons.sort((a,b) => {return b.age - a.age});
  
  return (
    
  <>

  {/* <Products products={products}/> */}

  {/* <Persons names={names}/> */}

  <Family personsAge={personsAge}/>

  </>



  )

}

export default App