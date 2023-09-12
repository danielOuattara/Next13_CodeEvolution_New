import { useState } from "react";
import { useRouter } from "next/router";
//---------------------------------------------------------

export default function Events(props) {
  const [events, setEvents] = useState(props.eventList);
  const router = useRouter();

  const fetchSportEvents = async () => {
    const response = await fetch(
      `http://localhost:4000/events?category=sports`,
    );

    console.log("response = ", response);
    const data = await response.json();
    setEvents(data);
    router.push("/events?category=sports", null, { shallow: true });
  };
  return (
    <>
      <button onClick={fetchSportEvents}>fetch sport event</button>
      <h1>List of Events</h1>

      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <h2>
              {event.title} | {event.category}
            </h2>
            <p>date : {event.date}</p>
            <p>description : {event.description}</p>
            <hr />
          </li>
        ))}
      </ul>
    </>
  );
}

//---------------------------------------------------------

export async function getServerSideProps(context) {
  const category = context.query.category;
  const queryString = category ? "category=sports" : "";
  const response = await fetch(`http://localhost:4000/events?${queryString}`);
  const data = await response.json();

  //   console.log(`Pre-Rendering News Articles for Category ${category}`);

  return {
    props: {
      eventList: data,
      // category,
    },
  };
}
