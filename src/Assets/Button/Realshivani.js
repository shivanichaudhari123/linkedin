import {useState} from "react";

const Realshivani = () => {
  const [prev, setPrev] = useState(3);
  const SwitchtoBack = () => {
    let val = parseInt(prev - 1);
    setPrev(val);
    console.log("switchprev");
  };
  return (
    <div>
      {/* <p>this is slider part</p> */}
      <button onClick={SwitchtoBack}>prev</button>
    </div>
  );
};
export default Realshivani;
// import React, {useState} from "react";
// import Carousel from "react-elastic-carousel";
// import {Cararray} from "./Cararray";
// import styles from "./Shivani.module.css";
// const Realshivani = () => {
//   const [prev, setPrev] = useState(3);
//   const [next, setNext] = useState(0);
//   const MovePrev = () => {
//     let val = prev - 1;
//     setPrev(parseInt(val));
//     console.log("val", val);
//   };
//   const MoveNext = () => {
//     let val = next + 1;
//     setNext(parseInt(val));
//     console.log("val", val);
//   };
//   return (
//     <>
//       <div className={styles.shivani}>
//         <div>
//           <button onClick={MovePrev}>previous</button>
//           <button onClick={MoveNext}>next</button>
//         </div>

//         <Carousel>
//           {Cararray.map((item, i) => (
//             <img
//               className={styles.images}
//               key={i}
//               src={item.image}
//               alt="carlogo"
//             />
//           ))}
//         </Carousel>
//       </div>
//     </>
//   );
// };
// export default Realshivani;
