import React from "react";
import { Card, Image, Progress } from "semantic-ui-react";

const api = process.env.REACT_APP_API;

const LargeBookCard = ({
  data: {
    author,
    book_cover: { url },
    id,
    pages_read,
    title,
    total_pages,
  },
  openModal,
}) => {
  const readingProgress = ((pages_read / total_pages) * 100).toFixed();

  return (
    <Card onClick={() => openModal(id, true)} centered>
      <Image
        alt={title}
        circular
        src={`${api}${url}`}
        size="medium"
      />
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Meta style={{ marginBottom: "1.5em" }}>
          <span className="author">{author}</span>
        </Card.Meta>
        <Card.Meta>
          <Progress
            color="teal"
            percent={readingProgress}
            progress={readingProgress > 15}
            size="small"
          />
        </Card.Meta>
      </Card.Content>
    </Card>
  );
};

export default LargeBookCard;
