import { useEffect, useState } from "react";
import * as bookApi from '../api/book-requests'
import { useParams } from "react-router-dom";


export function useGetAllBooks() {
  const [books, setBooks] = useState([])


  
  useEffect(() => {
    (async () => {
      const response = await bookApi.getAll();
      console.log("reponse",response);
      setBooks(response);
    })();
  }, []);

  return [ books, setBooks ]
}


export function useGetBookById() {
  const [book, setBook] = useState([])
  const { bookId } = useParams();

  useEffect(() => {
    (async () => {
      try {

        const response = await bookApi.getById(bookId);
        setBook(response);

      } catch (error) {

        console.error('There was an error:', error);
      }
    })();
  }, [bookId]);

  return [book]
}


