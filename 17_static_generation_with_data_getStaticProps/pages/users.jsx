export default function UsersList(props) {
  console.log("props = ", props);
  return (
    <>
      <h1>Users list</h1>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/`);
  const data = await response.json();

  return {
    props: { users: data },
  };
}
