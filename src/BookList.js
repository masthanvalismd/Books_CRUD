import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router";

export function BookList({ books, setBooks }) {
  const navigate = useNavigate();

  const deleteBook = (id) => setBooks(books.filter((book) => book.id !== id));

  return (
    <div className="card">
        
      <div className="card-container">
        {books.map(
          ({ id, title, author, published, price, quantity, image },index) => {
            return (
              <div className="book-details" key={index}>
                <Card sx={{ maxWidth: 250 }}>
                  <img className="card-image" src={image} alt="Book"></img>
                  <CardContent className="text">
                    <p>
                      <span>Title : </span>
                      {title}
                    </p>
                    <p>
                      <span>Author : </span>
                      {author}
                    </p>
                    <p>
                      <span>Release Date : </span>
                      {published}
                    </p>
                    <p>
                      <span>Price : </span>
                      {price}
                    </p>
                    <p>
                      <span>Quantity : </span>
                      {quantity}
                    </p>
                  </CardContent>
                  <CardActions>
                    <Button></Button>
                    <IconButton
                      onClick={() => navigate(`/booklist/edit/${id}`)}
                      color="secondary"
                      aria-label="editBook"
                      title="Edit Book"
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      onClick={() => deleteBook(id)}
                      color="error"
                      aria-label="deleteBook"
                      title="Delete Book"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </CardActions>
                </Card>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}
