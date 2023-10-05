"use client";

import { useCallback, useEffect, useState } from "react";
import words from "@/db.json";

import DrawingWord from "./DrawingWord";
import Keyboard from "./Keyboard";
import Drawing from "./Drawing";

function getWord() {
  return words[Math.floor(Math.random()*words.length)]
}

export default function Home() {
  const [wordToGuess, setWordToGues] = useState(getWord) 
  const [guessedLetters, setGuessedLetters] = useState<string[]>(["g", "t", "o"]);
  

  const inCorrectLetters = guessedLetters.filter(
    letter => !wordToGuess.includes(letter)
  );
      const isLoser = inCorrectLetters.length>=6
      const isWinner = wordToGuess.split("").every(letter=>
        guessedLetters.includes(letter))
  const addGuessedLetter = useCallback((letter:string)=>{
    if(guessedLetters.includes(letter) || isLoser ||isWinner) return

    setGuessedLetters(currentLetters => [...currentLetters , letter])
  

  },[guessedLetters  , isLoser , isWinner])
  
  useEffect(() => {
   const handler = (e:KeyboardEvent) =>{
    const key = e.key
        if (!key.match(/^[a-z]$/)) return
        e.preventDefault()
        addGuessedLetter(key)
   }
    document.addEventListener("keypress" , handler)
    return () =>{
      document.removeEventListener("keypress" , handler)
    }
  }, [guessedLetters])
  
    useEffect(() => {
      const handler = (e:KeyboardEvent) =>{
        const key = e.key
            if (key !== "Enter") return
            e.preventDefault()
            setWordToGues(getWord())
          
       }
        document.addEventListener("keypress" , handler)
        return () =>{
          document.removeEventListener("keypress" , handler)
        }
      }, [])
    
    
 
    
  return (
    <div className=" max-w-[800px] flex flex-col gap-6 mx-0 my-auto items-center">
      <div className=" font-bold text-center ">{isWinner && "winner - Refresh to try again : "}
      {isLoser && "Nice Try - Refresh to try again : "}</div>
      <Drawing numberOfGuesses={inCorrectLetters.length} />
      <DrawingWord reveal={isLoser} wordToGuess={wordToGuess} guessedLetters={guessedLetters} />
      <div className=" self-stretch">
        <Keyboard disabled={isWinner || isLoser} activeLetter = {guessedLetters.filter(letter=>wordToGuess.includes(letter))}
        inactiveLetters ={inCorrectLetters}
        addGuessedLetter={addGuessedLetter}/>
      </div>
    </div>
  );
}
