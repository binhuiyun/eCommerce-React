import React, { useState } from "react";
import axios from "axios";

const ChatGPTComponent = () => {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");

  let data = JSON.stringify({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "user",
        content:
          "write me a product description of a wireless magic coke bottle",
      },
    ],
    temperature: 0.7,
  });

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://api.openai.com/v1/chat/completions",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer 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",
    },
    data: data,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/generate-response", {
        config: config,
      });

      console.log("hello");
      console.log(response.data.choices[0].message.content);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="input">Input:</label>
        <input
          type="text"
          id="input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <div>
        <h3>Response:</h3>
        <p>{response}</p>
      </div>
    </div>
  );
};

export default ChatGPTComponent;
