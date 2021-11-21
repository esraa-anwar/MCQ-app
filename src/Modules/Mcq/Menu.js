import "./Quiz.css";
import { useContext } from "react";
import { GameStateContext } from "../helpers/Contexts";

function Menu ()
{
  const { setGameState, setUserName } = useContext(
    GameStateContext
  );
  return (
    <div className="Menu">
      <label>Enter Your Name:</label>
      <input
        className="MenuInput"
        type="text"
        placeholder="Ex. esraa anwar"
        onChange={ ( event ) =>
        {
          setUserName( event.target.value );
        } }
      />
      <button
        className="buttonTrue"
        onClick={ () =>
        {
          setGameState( "playing" );
        } }
      >
        Start Quiz
      </button>
    </div>
  );
}

export default Menu;
