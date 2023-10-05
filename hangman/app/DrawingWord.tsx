import React from 'react'

type DrawingWordProps ={
  guessedLetters: string[]
  wordToGuess: string
  reveal?: boolean

}

const DrawingWord = ({guessedLetters , wordToGuess ,reveal=false }:DrawingWordProps) => {
  return (
    <div className='flex gap-7 text-5xl font-semibold uppercase '>
      {wordToGuess.split("").map((letter , index)=>(
        <span key={index} className=' border-b-8 border-black'>
          <span  style={{
          visibility:
          guessedLetters.includes(letter) || reveal ? 'visible' : 'hidden',
            color: !guessedLetters.includes(letter) && reveal ? "red" : "black"
        }}>
         
         
          {letter}
          </span>  
            
            </span>
      ))}
    </div>
  )
}

export default DrawingWord
