import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  protectedRoutesArr,
  publicRoutesArr,
} from "./routes/routes";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        {publicRoutesArr.map((route) => (
          <Route
            key={route.name}
            path={route.path}
            element={<route.component />}
          />
        ))}

        <Route element={<ProtectedRoute />}>
          {protectedRoutesArr.map((route) => (
            <Route
              key={route.name}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
