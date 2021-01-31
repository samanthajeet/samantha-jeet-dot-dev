import React from "react";
import LargeBookCard from "./LargeBookCard";
import { Grid, Header } from "semantic-ui-react";

const Reading = ({ books, openModal }) => {
  const readingCards = books.map((book) => {
    return (
      <Grid.Column computer={7} tablet={7} mobile={7} key={book.id}>
        <LargeBookCard data={book} openModal={openModal} />
      </Grid.Column>
    );
  });
  return (
    <Grid stackable columns={2} centered>
      <Header as="h2" id="fonts" style={{marginTop: "1.5em", marginBottom: 0}}>
        Reading
      </Header>
      <Grid.Row width={14}>{readingCards}</Grid.Row>
    </Grid>
  );
};

export default Reading;
