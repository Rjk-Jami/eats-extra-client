import React from 'react';
import { Button, Container, InputGroup } from 'react-bootstrap';
import { ThemeContext, themes } from './Theme/theme1';
import { FaRegMoon, FaSun } from 'react-icons/fa';


function App() {
  const [darkMode, setDarkMode] = React.useState(true);

  return (
    <div className="App">
      
        
        <InputGroup>
          <ThemeContext.Consumer>
            {({ changeTheme }) => (
              <Button
                variant="primary"
                onClick={() => {
                  setDarkMode(!darkMode);
                  changeTheme(darkMode ? themes.light : themes.dark);
                }}
              >
                {darkMode ? <FaSun className='text-dark'></FaSun> : <FaRegMoon className='text-dark'></FaRegMoon>}
               
              </Button>
            )}
          </ThemeContext.Consumer>
        </InputGroup>
    </div>
  );
}

export default App;