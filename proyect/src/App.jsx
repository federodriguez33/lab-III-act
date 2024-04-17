import './App.css'
import Table from "./component/table/Table";

function App() {
  
  const netIncomes = [{brand: "McDonalds", income: 1291283}, {brand: "Burger King", income: 1927361}, {brand: "KFC", income: 1098463}];
  
  return (
    
  <>

    <Table netIncomes={netIncomes}></Table>
  </>

  )

}

export default App