import React from "react";
import { Stack, HStack, VStack, IconButton ,Text, StackDivider, Spacer, Badge, Link} from '@chakra-ui/react'
import { FaSun, FaTrash ,FaEdit} from 'react-icons/fa'

const ReadOnly = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    
    <VStack  divider={<StackDivider/>} 
   
    p={"4"}
    w={"100%"}
    maxWidth={{base:'90vw',sm:'80vw',lg:'50vw',xl:'40vw'}}
    alignItems={"stretch"}
    >
        
                <HStack  p={"3"}>
                    <Text>Title: {contact.title}</Text>
                    <Spacer/>
                    <Text>Author: {contact.author}</Text>
                    <Spacer/>
                    <Text>Year: {contact.year}</Text>
                    <Spacer/>
                    <Text>ISBN: {contact.isbn}</Text>
                    <Spacer/>
                    <IconButton icon={<FaTrash />}   onClick={() => handleDeleteClick(contact.id)} />
                    <Spacer/>
                    <IconButton icon={<FaEdit />} onClick={(event) =>handleEditClick(event, contact) }/>
                </HStack>
          
    </VStack>

  );
};

export default ReadOnly;