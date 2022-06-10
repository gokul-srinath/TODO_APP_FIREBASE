import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";

import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import ListElement from "./components/ListElement";
import List from "@mui/material/List";

import db from "./firebase";
import {
  collection,
  getDocs,
  addDoc,
  doc,
  serverTimestamp,
  updateDoc,
  query,
  orderBy
} from "firebase/firestore";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const todoCollection = collection(db, "todo")
  
  

  
  async function fetchData() {
      
    
    

    const q = query(todoCollection,orderBy("timestamp","desc"));
    const snapShot = await getDocs(q);

    setTodos(
      snapShot.docs.map((doc) => {

        return { id: doc.id, todo: doc.data().todo, timestamp: doc.data().timestamp};
      })
    );
  }

  
  useEffect(() => {
    console.log("triggered");
    fetchData();
  }, []);

  const addTodo = async (event) => {
    event.preventDefault();

    const newDocRef = await addDoc(todoCollection, { todo: input });
    await updateDoc(newDocRef, { timestamp: serverTimestamp()});
    // setTodos([...todos, {"id":doc.id,"todo":input}]);
    fetchData();
    setInput("");
    return;
  };

  return (
    <div>
      <h1>Hello world! 🚀</h1>
      <form>
        <FormControl>
          <InputLabel>✅ Write your TODO : </InputLabel>
          <Input value={input} onChange={(e) => setInput(e.target.value)} />
        </FormControl>
        <Button
          type="submit"
          variant="contained"
          disabled={!input}
          onClick={addTodo}
        >
          Add TODO
        </Button>
      </form>

      <List>
        {todos.map(({ id, todo }) => (
          <ListElement todo={todo} key={id} />
        ))}
      </List>
    </div>
  );
}

export default App;
