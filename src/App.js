import { useState } from 'react';
import './app.css';
import GameBoard from './game-board';
import WordSelect from './word-select';

export default function App() {
    const [secretWord, setSecretWord] = useState('');

    return (
        <div className='app-container'>
            <h2>Let's play Hangman!!</h2>

            <div>

                <WordSelect
                    isShown={!secretWord}
                    wordSelected={val => setSecretWord(val)}
                />


                <GameBoard
                    secretWord={secretWord}
                    maxErrors={6}
                    isShown={secretWord}
                />
            </div>
        </div>    
    );
}