import { z } from "zod";
// import { fromZodError } from "zod-validation-error";
import "./App.css";

function App() {
  const userscHema = z
    .object({
      username: z.string().min(9, 'minimum length must be 3'),
      // age : z.number().default(26),
      // title : z.literal(true),
      // isProgrammer : z.boolean().optional(),
      friends: z.array(z.string()),
      coords: z.tuple([z.number(), z.number(), z.number()]).rest(z.string()),
      id: z.string().or(z.number()),
    })
    // .extend({name : z.string()})
    // .passthrough()
    .strict();

  type User = z.infer<typeof userscHema>;

  const user: User = {
    username: "jsks829cajji",
    friends: ["kylu", "hwo"],
    coords: [1, 2, 3, "jskkj", "jljslkj"],
    id: 89,
  };
  // const results = console.log(userscHema.safeParse(user));
  // if(!results.success){
  //   console.log(fromZodError(results.error))
  // }
  return <></>;
}

export default App;
