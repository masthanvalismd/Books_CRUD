import Button from "@mui/material/Button";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export function EditBooks({ books, setBooks }) {
  const { id } = useParams();
  const book = books[id];

  const navigate = useNavigate();

  const [title, setTitle] = useState(book.title);
  const [author, setAuthor] = useState(book.author);
  const [published, setPublished] = useState(book.published);
  const [price, setPrice] = useState(book.price);
  const [quantity, setQuantity] = useState(book.quantity);
  const [image, setImage] = useState(book.image);

  const saveEditedValues = () => {
    const booksCopy = [...books];

    let filtered = booksCopy[id];
    filtered.title = title;
    filtered.author = author;
    filtered.published = published;
    filtered.price = price;
    filtered.quantity = quantity;
    filtered.image = image;

    console.log("after edit", booksCopy);
    setBooks(booksCopy);
    navigate(`/booklist`);
  };
  const edittitle = (e) => {
    setTitle(e.target.value);
  };
  const editauthor = (e) => {
    setAuthor(e.target.value);
  };
  const editpublished = (e) => {
    setPublished(e.target.value);
  };
  const editprice = (e) => {
    setPrice(e.target.value);
  };
  const editquantity = (e) => {
    setQuantity(e.target.value);
  };
  const editimage = (e) => {
    setImage(e.target.value);
  };
  return (
    <div className="textField-edit">
      <TextField
        placeholder="Enter a Name"
        variant="outlined"
        style={{ width: "20%", margin: "2px", paddingLeft: "5px" }}
        value={title}
        onChange={edittitle}
      />
      <br />
      <TextField
        placeholder="Enter author"
        variant="outlined"
        style={{ width: "20%", margin: "2px", paddingLeft: "5px" }}
        value={author}
        onChange={editauthor}
      />
      <br />

      <TextField
        placeholder="Enter Published Date"
        variant="outlined"
        style={{ width: "20%", margin: "2px", paddingLeft: "5px" }}
        value={published}
        onChange={editpublished}
      />
      <br />

      <TextField
        placeholder="Enter price"
        variant="outlined"
        style={{ width: "20%", margin: "2px", paddingLeft: "5px" }}
        value={price}
        onChange={editprice}
      />
      <br />

      <TextField
        placeholder="Enter quantity"
        variant="outlined"
        style={{ width: "20%", margin: "2px", paddingLeft: "5px" }}
        value={quantity}
        onChange={editquantity}
      />
      <br />
      <TextField
        placeholder="Enter Image URL"
        variant="outlined"
        style={{ width: "20%", margin: "2px", paddingLeft: "5px" }}
        value={image}
        onChange={editimage}
      />
      <br />
      <br />

      <div className="edit-btn">
        <Button
          style={{
            backgroundColor: "cyan",
            color: "black",
            marginRight: "20px",
          }}
          onClick={() => navigate(`/booklist`)}
        >
          <ArrowBackIcon />
        </Button>
        <Button
          variant="outlined"
          style={{
            backgroundColor: "green",
            color: "#FFFFFF",
            marginLeft: "20px",
          }}
          onClick={(event) => {
            event.preventDefault();
            saveEditedValues();
            console.log("books");
          }}
        >
          Confirm
        </Button>
      </div>
    </div>
  );
}
