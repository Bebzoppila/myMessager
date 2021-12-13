import { Routes, Route } from "react-router-dom";
import routerConfog from "./routerConfig"
import { useEffect } from "react"
function App() {

  const renderRouters = () => routerConfog.map(routElement => <Route 
    key={routElement.path} 
    path={routElement.path} 
    element={<routElement.element />} />)

  return (
    <div className="App">
      <Routes>
        {renderRouters()}
      </Routes>
    </div>
  );
}

export default App;
