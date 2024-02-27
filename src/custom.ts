import z from "zod"

const usesschema = z.object({
    username : z.string()
})

const user = { username : " johb"}

console.log(usesschema.parse(user))