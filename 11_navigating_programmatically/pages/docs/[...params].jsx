import { useRouter } from "next/router";

export default function Docs() {
  const { params = [] } = useRouter().query;
  console.log(params);

  if (params.length == 3) {
    return (
      <h2>
        Viewing docs for feature {params[0]} and concept {params[1]} and concept
        {params[2]}
      </h2>
    );
  } else if (params.length == 2) {
    return (
      <h2>
        Viewing docs for feature {params[0]} and concept {params[1]}
      </h2>
    );
  } else if (params.length == 1) {
    return <h2>Viewing docs for feature {params[0]}</h2>;
  }
}
