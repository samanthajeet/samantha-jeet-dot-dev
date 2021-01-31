import React from "react";
import SmallSmallBookCard from "./SmallBookCard";
import { Grid, Header } from "semantic-ui-react";

const ToRead = ({ books, openModal }) => {
  const readingCards = books.map((book) => {
    return (
      <Grid.Column key={book.id} computer={7} tablet={4} mobile={6}>
        <SmallSmallBookCard data={book} openModal={openModal} />
      </Grid.Column>
    );
  });
  const finished = books.every(
    (book) => book.book_status.status === "finished"
  );
  return (
    <Grid stretched centered columns={2} style={{ marginBottom: "1em" }}>
      <Header as="h2" id="fonts" style={{marginTop: "1.5em", marginBottom: 0}}>
        {finished ? "Finished" : "To Read"}
      </Header>
      <Grid.Row width={16} >{readingCards}</Grid.Row>
    </Grid>
  );
};

export default ToRead;
