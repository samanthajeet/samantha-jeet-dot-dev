import React from "react";
import { Card, Image, Rating } from "semantic-ui-react";

const api = process.env.REACT_APP_API;

const SmallBookCard = ({
  data: {
    book_status,
    book_cover: { url },
    id,
    rating,
    title,
  },
  openModal,
}) => {
  const finished = book_status.status === "finished";
  return (
    <Card onClick={() => openModal(id, true)} style={{minWidth: "5em"}} >
      <Image
        alt={title}
        circular
        size="medium"
        src={`${api}${url}`}
      />
      {finished && (
        <Card.Content textAlign="center">
          <Rating icon="heart" defaultRating={rating} maxRating={3} size="mini" />
        </Card.Content>
      )}
    </Card>
  );
};

export default SmallBookCard;
