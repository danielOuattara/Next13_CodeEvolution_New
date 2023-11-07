import User from "@/components/User";
import { log } from "console";

export default function UsersList(props) {
  return (
    <>
      <h1>Users list</h1>
      <ul>
        {props.users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </ul>
    </>
  );
}

//--------------------------------------------------------

export async function getStaticProps(context) {
  log("context = ", context);
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/`);
  const data = await response.json();

  return {
    props: { users: data },
  };
}

/* 

- getStaticProps run only on server side
- we can write server code logic in this function
*/
