import { TodoList } from "./pages/Todo";

import '../src/styles/index.scss'
import {Routes, Route, Link} from 'react-router-dom'
import { Profile } from "./pages/profile";

function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<TodoList />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
  );
} 

export default App;
