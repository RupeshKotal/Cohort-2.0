const {Client} = require('pg')

const client = new Client({
    connectionString:"postgresql://rupeshkotal99:Rg8JdyELDke4@ep-mute-paper-a5ys9fbm.us-east-2.aws.neon.tech/neondb?sslmode=require"
})



async function CreateUsertable(){
await client.connect()
    const result = await client.query(`
    CREATE TABLE users(
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(200) UNIQUE NOT NULL,
        password VARCHAR(50) NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    )
    `)

    console.log(result);
    
}


CreateUsertable()

// client.connect();

async function insertData(){


    const insertquery = "INSERT INTO users(username,email,password) VALUES($1,$2,$3)"
    const values = ["Rupesh19","rupsh99@gmail","rupesh"]

    const res = await client.query(insertquery,values)
    console.log("Insertion successfull :- ",res);
}

insertData()