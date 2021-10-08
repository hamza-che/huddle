import React from "react";
import StyledCard from "./styled/Card.styled";

function Card({ item: { title, body, image, id } }) {
  return (
    <StyledCard
      layout={id % 2 === 0 && "row-reverse"}
      imageMargin={id % 2 !== 0 && "auto"}
    >
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>

      <div>
        <img src={`./images/${image}`} alt={title} />
      </div>
    </StyledCard>
  );
}

export default Card;
