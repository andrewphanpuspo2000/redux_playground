import { useState } from "react";
import { RTD } from "./Components/RTDD";
import { useDispatch } from "react-redux";
import { addData } from "./userSlice";

export const Form = () => {
  const [data, setData] = useState("");
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { value } = e.target;
    setData(value);
  };
  const submitOnHandle = (e) => {
    e.preventDefault();
    dispatch(addData(data));
  };

  return (
    <>
      <form onSubmit={submitOnHandle}>
        <input
          type="text"
          placeholder="input"
          onChange={handleChange}
          required
        />
        <input type="submit" value="Submit" />
      </form>
      <RTD input={data} />
    </>
  );
};
