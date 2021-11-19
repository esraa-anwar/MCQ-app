import React, { useContext, useState } from 'react';
import './App.css';
import Header from './Ui/Header/Header';
import Login from './Modules/Login/Login';
import Main from "./Modules/Mcq/Quiz"
import Menu from "./Modules/Mcq/Menu"
import { GameStateContext } from "./Modules/helpers/Contexts";
import EndScreen from "./Modules/Results/EndScreen";

import { AuthProvider, AuthContext } from './middlewares/AuthContext';
function App ()
{
  const [ gameState, setGameState ] = useState( "menu" );
  const [ userName, setUserName ] = useState( "" );
  const [ score, setScore ] = useState( 0 );
  const authContext = useContext( AuthContext );
  return ( <><Header />
    <div className="App">

      { authContext.auth.email ?

        <GameStateContext.Provider
          value={ {
            gameState,
            setGameState,
            userName,
            setUserName,
            score,
            setScore,
          } }
        >

          { gameState === "menu" && <Menu /> }
          { gameState === "playing" && <Main /> }
          { gameState === "finished" && <EndScreen /> }
        </GameStateContext.Provider> : <Login /> }
    </div></>
  );
}
function AppWithStore ()
{
  return ( <AuthProvider>
    <App />
  </AuthProvider>
  )
}
export default AppWithStore;
