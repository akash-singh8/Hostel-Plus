import React, { useState, useEffect } from "react";
import Message from "./Message.js";
import "./CSS/hangout.css";
import sendButton from "./images/sendMessage.png";

import { db } from "./Firebase.js";

function Hangout() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    db.collection("hangout")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

  const arrangeTime = (seconds) => {
    const currTime = new Date(seconds * 1000);
    const hrs = currTime.getHours();
    let newHrs = hrs % 12;
    if (newHrs === 0) newHrs = 12;

    return `${newHrs}:${currTime.getMinutes()} ${hrs >= 12 ? "pm" : "am"}`;
  };

  function addMessage(event) {
    event.preventDefault();

    db.collection("hangout")
      .get()
      .then((snap) => {
        let count = snap.size;
        const myInterval = setInterval(() => {
          if (count >= 80) {
            db.collection("hangout")
              .orderBy("timestamp", "asc")
              .get()
              .then((snap) => {
                db.collection("hangout").doc(snap.docs[0].id).delete();
              });
            count = count - 1;
          } else clearInterval(myInterval);
        }, 1000);
      });

    db.collection("hangout").add({
      id: localStorage.getItem("id"),
      userName: localStorage.getItem("fname"),
      message: message,
      photo: localStorage.getItem("photo"),
      timestamp: new Date(),
    });
    setMessage("");

    document.getElementById("allMessages").scrollTop = 0;
  }

  return (
    <div className="section">
      <h1 className="generalHead">Hangout</h1>
      <div id="hangoutSection">
        <div id="allMessages">
          {messages.map((message) => (
            <Message
              id={message.id}
              userName={message.userName}
              time={arrangeTime(message.timestamp.seconds)}
              message={message.message}
              photo={message.photo}
            />
          ))}
        </div>

        <form id="writeMessage">
          <input
            type="text"
            placeholder="Type a message"
            id="currMessage"
            autoComplete="off"
            value={message}
            onChange={(event) => {
              setMessage(event.target.value);
            }}
            maxLength={1000}
          />
          <button type="submit" onClick={addMessage} disabled={!message}>
            <img type="submit" src={sendButton} alt="send" id="sendMessage" />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Hangout;
