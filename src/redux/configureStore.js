import { combineReducers, configureStore } from "@reduxjs/toolkit";
import axios from "axios";


const BASEURL = 'localhost:3001/api/v1/messages';
const GET_MESSAGE = 'react/redux/GET_MESSAGE'

const getMessage = (messages) => {
  return {
    type: GET_MESSAGE,
    messages
  }
}

export const fetchMessages = () => async (dispatch) => {
  const messages = [];
  const response = await axios.get(BASEURL);
  const messageData = await response.data;
  messageData.forEach((msg) => {
    messages.push(msg.content);
  })
  dispatch(getMessage(messages))
}

const MessageReducer = (state = [], action) => {
  switch(action.type) {
    case GET_MESSAGE:
      return action.messages;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  message: MessageReducer,
});

const store = configureStore({ reducer: rootReducer });
export default store;
