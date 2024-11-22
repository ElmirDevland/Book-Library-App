import { v4 as uuidv4 } from 'uuid';

const createBookWithID = (book, source) => {
  return {
    ...book,
    source,
    id: uuidv4(),
    isFav: false,
  };
};

export default createBookWithID;
