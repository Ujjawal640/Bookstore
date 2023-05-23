
import { HStack ,Input} from "@chakra-ui/react";
import React from "react";

const Editable = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <HStack>
        <Input variant={"filled"} placeholder="Enter a title..."
          name="title"
          value={editFormData.title}
          onChange={handleEditFormChange} />

<Input variant={"filled"} 
          placeholder="Enter an author..."
          name="author"
          value={editFormData.author}
          onChange={handleEditFormChange} />

<Input variant={"filled"} 
          placeholder="Enter a year..."
          name="year"
          value={editFormData.year}
          onChange={handleEditFormChange} />

<Input variant={"filled"} 
         placeholder="Enter an isbn..."
         name="isbn"
         value={editFormData.isbn}
         onChange={handleEditFormChange}/>

<button type="submit">Save</button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
   
   
    </HStack>
  );
};

export default Editable;