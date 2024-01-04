const zod = require('zod');

const valid = zod.object({
    title:zod.string(),
    description:zod.string(),
   
})

const id_valid = zod.object({
    id:zod.string()
})

module.exports={
    valid:valid,
    id_valid:id_valid
}