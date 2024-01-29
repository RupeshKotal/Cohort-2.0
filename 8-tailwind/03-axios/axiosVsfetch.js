const axios = require("axios");
const { log } = require("console");

async function main(){

    const response = await axios.post("https://httpdump.app/dumps/fba8d887-f7d5-48ba-b0da-32c2a51122c8",{
        username:"Rupesh",
        "lastname":"Kotal"
    },{
        headers:{
            Authorization:"Bearer asdsdfh"
        }
    })
    console.log(response.data);
}


main()


// async function maon(){

//     const Data = await fetch("https://httpdump.app/dumps/fba8d887-f7d5-48ba-b0da-32c2a51122c8",{
//         method:"POST"
//     },{
//         body:{
//             firstname:"Kartik",
//             lastname:"chapre"
//         }
//     },{
//         headers:{
//             Autho : "Ajhsdgageduio"
//         }
//     })

//     const json = await Data.json()
//     console.log(json);
// }


// maon()

