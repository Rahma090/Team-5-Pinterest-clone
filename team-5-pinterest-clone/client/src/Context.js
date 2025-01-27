import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [oneP, setOnep] = useState({});
const [users,setUsers]=useState([])
  useEffect(() => {
    axios
      .get("http://localhost:8800/api/users/getAllPosts")
      .then((result) => {
        console.log(result.data);
        setData(result.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <DataContext.Provider value={{ data, oneP, setOnep }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };