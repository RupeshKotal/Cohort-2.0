import { useMemo, useState } from "react";

let sentence = "Bengaluru: After allegedly denying him a chance to meet his son for at least three weeks despite a court order, the CEO accused of murdering the four-year-old had asked him to pick up the child in a Bengaluru locality on January 7, a day after she had already checked into a serviced apartment in GoaThe lawyer of Suchana Seth's husband, Venkat Raman, said the CEO sent an e-mail to Mr Raman on January 6 and said he could meet their child the next day. According to the police complaint lodged by the manager of a Goa serviced apartment, however, she had checked in with their four-year-old son on the very night this e-mail was sent. The room had been booked, and paid for, until January 10."
let word = sentence.split(' ');
//below logic to create more 100 lines of above words
//  let total_lines = 100;
// const All_word =[];

// for(let i=0; i< total_lines; i++){
//     let lines= '';
//     for(let j=0; j< word.length; i++){
//         sentence += (word[Math.floor(word.length * Math.random())])
//         sentence+= " "
//     }

//     All_word.push(sentence)
// }


function Assignment2(){

    const [sentence,setSentense] = useState(word);
    const [filterVal,setFilter] = useState('');

    const filteredSentens = useMemo(()=>{
      return  sentence.filter(x => x.includes(filterVal))
    },[sentence,filterVal])

    return(
        <>
        <input type=" text" onChange={(e)=>{
           setFilter(e.target.value)
        }}/>
        <div> 
        {
            filteredSentens.map(x => <div>
                {x}
            </div>)
        }
        </div>
        </>
    )
}

export default Assignment2;