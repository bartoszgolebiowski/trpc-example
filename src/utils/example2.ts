import { userSchema } from "./example";

// request body.
const input = {
  id: "1",
  name: "Trip 1",
  description: "Trip 1 description",
  participants: [
    {
      id: "1",
      name: "User 1",
      email: "",
    },
  ],
} as unknown;

// validate request body.
try {
  const user = userSchema.parse(input);
  // user inferred type from schema
  user.id;
  user.name;
  user.description;
  user.participants;
} catch (err) {
  // the input is not valid according to the schema
  console.error(err);
}
