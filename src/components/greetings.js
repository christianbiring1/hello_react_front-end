import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMessages } from "../redux/configureStore";
import Salutation from "./salutaion";
const Greeting = () => {
  const messages = useSelector((state) => state.message)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMessages());
  }, []);

  return (
    <div>
      <h1>Hello React on Rails as two App!</h1>
      {
        messages.map((msg) => <Salutation key={msg.id} content={msg.content} />)
      }
    </div>
  )
}

export default Greeting;
