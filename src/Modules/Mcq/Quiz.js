

import "./Quiz.css";
import { Questions } from "../helpers/Questions";
import { useState } from "react";

import { useContext } from "react";
import { GameStateContext } from "../helpers/Contexts";

function Quiz ()
{
    const [ erro, SetError ] = useState( "" )
    const [ currentQuestion, setCurrentQuestion ] = useState( 0 );
    const [ optionChosen, setOptionChosen ] = useState( "" );
    const { score, setScore, gameState, setGameState } = useContext(
        GameStateContext
    );

    const chooseOption = ( option ) =>
    {
        setOptionChosen( option );
    };

    const nextQuestion = () =>
    {

        if ( optionChosen === "" )
        {
            setScore( score );
            setCurrentQuestion( 0 );
            SetError( "You have to pick one of the answer" )
        } else
        {
            const currentQuestion = Math.floor( Math.random() * Questions.length );
            setCurrentQuestion( currentQuestion )
            setCurrentQuestion( currentQuestion + 1 );
            SetError( "" )
        }

        if ( Questions[ currentQuestion ].answer === optionChosen )
        {
            setScore( score + 1 );
        }
    };

    const finishQuiz = () =>
    {
        const currentQuestion = Math.floor( Math.random() * Questions.length );
        setCurrentQuestion( currentQuestion )
        if ( Questions[ currentQuestion ].answer === optionChosen )
        {
            setScore( score + 1 );
        }

        setGameState( "finished" );
    };

    return (
        <div className="Quiz">
            <h1>{ Questions[ currentQuestion ].prompt }</h1>
            <div className="question">
                <button
                    className={ "choiceBtn" }
                    onClick={ () =>
                    {

                        chooseOption( "optionA" );
                    } }
                >
                    { Questions[ currentQuestion ].optionA }
                </button>
                <button
                    className={ "choiceBtn" }
                    onClick={ () =>
                    {

                        chooseOption( "optionB" );
                    } }
                >
                    { Questions[ currentQuestion ].optionB }
                </button>
                <button
                    className={ "choiceBtn" }
                    onClick={ () =>
                    {

                        chooseOption( "optionC" );
                    } }
                >
                    { Questions[ currentQuestion ].optionC }
                </button>
                <button
                    className={ "choiceBtn" }
                    onClick={ () =>
                    {

                        chooseOption( "optionD" );
                    } }
                >
                    { Questions[ currentQuestion ].optionD }
                </button>

            </div>

            { currentQuestion === Questions.length - 1 ? (
                <button
                    className={ "buttonTrue" } onClick={ finishQuiz } id="nextQuestion">
                    Finish Quiz
                </button>
            ) : ( <>
                <h3>{ erro }</h3>
                <button
                    className={ "buttonTrue" }
                    onClick={ nextQuestion } id="nextQuestion">
                    Next Question
                </button></>
            ) }
        </div>
    );
}

export default Quiz;