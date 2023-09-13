import Image from "next/image";

const mice = ["mousse-1", "mousse-2", "mousse-3", "mousse-4", "mousse-5"];

// export default function Mice() {
//   return (
//     <section>
//       {mice.map((item) => (
//         <article>
//           <img src={`/images/${item}.jpg`} alt={item} width={480} />
//         </article>
//       ))}
//     </section>
//   );
// }

//--------------------------------------------------------

import image1 from "./../public/images/mousse-1.jpg";
export default function Mice() {
  return (
    <section>
      <Image
        src={image1}
        alt={"image-1"}
        width={380}
        height={300}
        placeholder="blur"
      />
      <hr />
      {mice.map((item) => (
        <article>
          <Image
            key={item}
            src={`/images/${item}.jpg`}
            alt={item}
            width={380}
            height={300}
          />
        </article>
      ))}
    </section>
  );
}
