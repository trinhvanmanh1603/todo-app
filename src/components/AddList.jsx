import { useState } from "react"
import { addList } from "../queries/listQueries";
const AddList = () => {
  const [, setList] = useState([]);
  const handleAddList = async (e) => {
    e.preventDefault();
    const newList = {
      title: e.target.listName.value,
      description: e.target.description.value,
      items: [],
    };
    const response = await addList(newList);
    setList(response);
  };
  return (
    <div className="add-list">
      <h2>Add New List</h2>
      <form onSubmit={handleAddList}>
        <label htmlFor="listName">List Name:</label>
        <input type="text" id="listName" name="listName" required />

        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description" required></textarea>

        <button type="submit">Add List</button>
      </form>
    </div>
  );
}

export default AddList;