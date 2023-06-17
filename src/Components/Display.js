import { useSelector } from "react-redux";

export const Display = () => {
  const { data } = useSelector((state) => state.dataArr);
  //   console.log(useSelector((state) => state.countering));
  return (
    <>
      {data.map((item, i) => (
        <p key={i}>{item}</p>
      ))}
    </>
  );
};
