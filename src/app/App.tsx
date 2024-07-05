import { JSXElementConstructor, ReactElement, Suspense, lazy } from 'react'
import reactLogo from '../assets/react.svg'
import './App.css'
import { ArmyList } from '../features/listObject/list'
import ListView from '../features/viewList/ListView'
import ListViewDebug from '../features/viewList/ListViewDebug'


// Works also with SSR as expected
const Card = lazy(() => import('../components/Card'))

export default function App() {
  console.log("_________inside App.App()...")
  const activeList = new ArmyList("Test_List_Name");
  console.log("Created new list object: ", activeList);
  
  // Show ListViewDebug
  const debugList: boolean = true;
  const selectedListView: ReactElement<any, string | JSXElementConstructor<any>> = (debugList ? <ListViewDebug objectList={activeList} /> : <ListView />);



  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      <Suspense fallback={<p>Loading card component...</p>}>
        <Card />
      </Suspense>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Suspense fallback={<p>Loading ListView component...</p>}>
        {selectedListView}
      </Suspense>
    </>
  )
}

// export default App
