import React, { useEffect, useState } from "react";
import { getBooks } from "../../api/api";
import { Dimmer, Header, Loader, Grid, Message } from "semantic-ui-react";
import Reading from "./Reading";
import ToRead from "./ToRead";
import BookDetailModal from "./BookDetailModal"

const BooksDashboard = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showMessage, setShowMessage] = useState({ show: false, message: "" });
  const [showModal, setShowModal] = useState(false)
  const [ selectedBook, setSelectedBook] = useState({})

  const setModalDetails = (book, bool) => {
    setSelectedBook(book)
    setShowModal(bool)
  }

  const getBooksCall = async () => {
    const response = await getBooks();
    if (response.data === "error") {
      setShowMessage({ show: true, message: "Oh, snap. Something went wrong"})
      setLoading(false);
      return;
    }
    setBooks(response);
    setLoading(false);
  };

  useEffect(() => {
    getBooksCall();
  }, []);

  const reading = books.filter((book) => book.book_status.status === "reading");
  const toRead = books.filter((book) => book.book_status.status === "to-read");
  const finished = books.filter(
    (book) => book.book_status.status === "finished"
  );

  return (
    <Grid columns={3} centered>
      <Grid.Row>
        <Grid.Column mobile={14} tablet={14} computer={14}>
          <Header as="h2">2021 Reading Progress</Header>
          <p style={{ fontSize: "1.2em" }}>
          Wanting to read more than trashy romance novels, I made a goal to read at least 24 books in 2021. I love fiction, and though I'm a firm believer in reading what you love, I know there's a lot to gain from some non-fiction reading. Because of that, I've made the "rule" that at least 10 of the 24 books I read have to be non-fiction. As much as I enjoy reading, I do require encouragement from time to time, hence this section of my site. Like many who are obsessed with social media, I do well when presented with pretty visuals showcasing my progress. To get more details on any of the books mentioned below, simply click on a cover..
          </p>
        </Grid.Column>
      </Grid.Row>
      {showMessage?.show && (
        <Message negative size="large">
          <Message.Header>
            {showMessage.message}
          </Message.Header>
        </Message>
      )}
      {showModal && (
        <BookDetailModal bookID={selectedBook} callBack={setShowModal} open={showModal} />
      )}
      {loading ? (
        <Dimmer active inverted>
          <Loader inverted>Loading</Loader>
        </Dimmer>
      ) : (
        <Grid.Row>
          <Grid.Column mobile={14} tablet={14} computer={3}>
            <ToRead books={finished} openModal={setModalDetails} />
          </Grid.Column>
          <Grid.Column mobile={14} tablet={14} computer={8}>
            <Reading books={reading} openModal={setModalDetails} />
          </Grid.Column>
          <Grid.Column mobile={14} tablet={14} computer={3}>
            <ToRead books={toRead} openModal={setModalDetails} />
          </Grid.Column>
        </Grid.Row>
      )}
    </Grid>
  );
};

export default BooksDashboard;
