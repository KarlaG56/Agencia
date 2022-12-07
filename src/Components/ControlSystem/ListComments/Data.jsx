import CardComment from "./CardComment";
import { useState, useEffect } from "react";

function Data() {
  const [responseCopy, setResponseCopy] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/comment")
      .then((response) => response.json())
      .then((response) => {
        setResponseCopy(response);
      });
  }, []);
  var j = 5;
  console.log(responseCopy)
  return (
    <div className="ListComments">
      <br/>
      <h1 className="ListComments_Titulo">List comments</h1>
      {responseCopy.map((responseCopy) => {
        return (
        
          <CardComment
            comment={responseCopy.comment}
            user={responseCopy.user}
            date={responseCopy.date}
            id={responseCopy.id}
          />
        );
      })}
    </div>
  );
}

export default Data;
