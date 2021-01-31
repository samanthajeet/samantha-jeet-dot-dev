import React, { useEffect, useState } from "react";
import { getBook } from "../../api/api";
import {
  Button,
  Header,
  Image,
  Modal,
  Rating,
  Transition,
} from "semantic-ui-react";

const api = process.env.REACT_APP_API;

function BookDetailModal({ bookID, callBack, open }) {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(true);

  const getBookCall = async () => {
    const response = await getBook(bookID);
    setBook(response);
    setLoading(false);
  };

  console.log(book);
  useEffect(() => {
    getBookCall();
  }, []);

  return (
    <Modal
      onClose={() => callBack(false)}
      open={open}
      trigger={<Button>Show Modal</Button>}
    >
      {book && (
        <Modal.Content image>
          <Transition visible={!loading} animation="scale" duration={500}>
            <Image size="medium" src={`${api}${book.book_cover?.url}`} />
          </Transition>
          <Modal.Description id="fonts">
            <Transition visible={!loading} animation="scale" duration={1000}>
              <Header
                as="h2"
                content={book.title}
                subheader={book.author}
                style={{ margin: ".25em 0" }}
              />
            </Transition>
            {book.rating && (
              <Rating
                icon="heart"
                defaultRating={book.rating}
                maxRating={3}
                size="small"
                style={{ margin: ".5em 0" }}
              />
            )}
            <Transition visible={!loading} animation="scale" duration={1000}>
                <p>{book.summary}</p>
            </Transition>
            {/* {book.rating && (
                <Modal.Description>
                    <Divider />
                    <Rating icon="heart" defaultRating={book.rating} maxRating={3} size="mini" />
                </Modal.Description>
            )} */}
          </Modal.Description>
        </Modal.Content>
      )}

      <Modal.Actions>
        <Button color="black" onClick={() => callBack(false)}>
          Close
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

export default BookDetailModal;
