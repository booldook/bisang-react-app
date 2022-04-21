import SearchCp from "./components/SearchCp";
import SearchStyledCp from "./components/SearchStyledCp";

import styled, { color, size, css, media, flex } from './style'

const App = () => {
  return (
    <div className="container border">
      <h1>Hello, React</h1>
      <SearchCp />
      <SearchStyledCp />    
    </div>
  );
}

export default App;
