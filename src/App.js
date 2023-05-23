import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import data from "./mock-data.json";
import ReadOnlyRow from "./components/Readonly";
import EditableRow from "./components/Editable";
import { VStack,IconButton,Heading,Input,Button } from "@chakra-ui/react";
import { FaMoon, FaSun } from 'react-icons/fa'
import { useColorMode } from '@chakra-ui/react'

const App = () => {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    title: "",
    author: "",
    year: "",
    isbn: "",
  });

  const [editFormData, setEditFormData] = useState({
    title: "",
    author: "",
    year: "",
    isbn: "",
  });
  const{colorMode,toggleColorMode}=useColorMode();
  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

  
   
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      title: addFormData.title,
      author: addFormData.author,
      year: addFormData.year,
      isbn: addFormData.isbn,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      title: editFormData.title,
      author: editFormData.author,
      year: editFormData.year,
      isbn: editFormData.isbn,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      title: contact.title,
      author: contact.author,
      year: contact.year,
      isbn: contact.isbn,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

  return (
    <VStack p={'8'}>
       <IconButton isRound='true' size='lg' alignSelf={'flex-end'} icon={ colorMode=='light'? <FaSun/>: <FaMoon />} onClick={toggleColorMode} />
    <Heading   mb="8" fontWeight={'extrabold'} fontSize={'4xl'} bgGradient="linear(to-r,pink.500,pink.300,blue.500)" bgClip="text" >Book Store</Heading>
   
    <VStack  borderColor={"gray.200"} 
    borderWidth={"2px"} 
    borderRadius={"lg"} 
    p={"4"}
    w={"100%"}
    maxWidth={{base:'90vw',sm:'80vw',lg:'50vw',xl:'40vw'}}>
      
    
      <form onSubmit={handleEditFormSubmit}>
      
            {contacts.map((contact) => (
              <Fragment>
                {editContactId === contact.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          
      </form>
      
      </VStack>
<VStack p={'5'}>
      <Heading>Add a Book</Heading>
      <form onSubmit={handleAddFormSubmit}>
      <VStack my={"6"}   w={"100%"}
    maxWidth={{base:'90vw',sm:'80vw',lg:'50vw',xl:'40vw'}} >

      <Input variant={"filled"}  name="title"
          required="required"
          placeholder="Enter a title..."
          onChange={handleAddFormChange} />

           <Input variant={"filled"}   name="author"
          required="required"
          placeholder="Enter an author..."
          onChange={handleAddFormChange} />

          <Input variant={"filled"}  name="year"
          required="required"
          placeholder="Enter a year..."
          onChange={handleAddFormChange} />

          <Input variant={"filled"}   name="isbn"
          required="required"
          placeholder="Enter an isbn..."
          onChange={handleAddFormChange} />
        
        <Button colorScheme='pink' my={"4"} type='submit' >Submit</Button>
        </VStack>
      </form>
      </VStack>
   
    
    </VStack>
  );
};

export default App;