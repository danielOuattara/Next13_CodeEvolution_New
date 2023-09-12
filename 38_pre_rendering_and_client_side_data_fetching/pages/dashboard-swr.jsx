import useSWR from "swr";

const dataFetcher = async () => {
  const response = await fetch("http://localhost:4000/dashboard");
  const data = await response.json();
  return data;
};

export default function DashboardSWR() {
  const { data, error } = useSWR("dashboard", dataFetcher);

  if (error) {
    return <h2>{error.message}</h2>;
  }

  if (!data) {
    return <h2>Loading ...</h2>;
  }

  return (
    <>
      <h1>Dashboard</h1>
      <h2>Posts : {data.posts}</h2>
      <h2> Likes : {data.likes}</h2>
      <h2>Followers : {data.followers}</h2>
      <h2>Followings : {data.following}</h2>
    </>
  );
}
