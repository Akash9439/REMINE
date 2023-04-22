import React, { useState, useEffect } from "react";
import "./Faq.css";
import Navbar from "../Navbar/Navbar.js";
import Loading from "../loading.gif";

function Faq({ questions }) {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const handleQuestionClick = (question) => {
    setSelectedQuestion(question);
  };
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  return (
    <div className="faq">
      <Navbar />
      {isLoading ? (
        <img
          className="load-img"
          style={{ width: "700", height: "350" }}
          src={Loading}
          alt="loading"
        />
      ) : (
        <div>
          <center>
            <h1 className="faq-head">Frequently Asked Questions</h1>
          </center>
          <div className="faq-list">
            {questions.map((question) => (
              <div
                className={`faq-item ${
                  selectedQuestion === question ? "active" : ""
                }`}
                key={question.id}
                onClick={() => handleQuestionClick(question)}
              >
                <h3 className="title">{question.title}</h3>
                {selectedQuestion === question && (
                  <center>
                    <p className="answer">{question.answer}</p>
                  </center>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Faq;
