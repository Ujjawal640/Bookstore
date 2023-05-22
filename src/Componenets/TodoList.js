import React from 'react'
import { Stack, HStack, VStack, IconButton ,Text, StackDivider, Spacer, Badge, Link} from '@chakra-ui/react'
import { FaSun, FaTrash ,FaEdit} from 'react-icons/fa'
import Edit from './Edit'
import { useState,useEffect } from "react";



const TodoList = ({list,deletei,onEdit}) => {
    const [title, settitle] = useState("")
    const [author, setauthor] = useState("")
    const [year, setyear] = useState("")
    const [isbn, setisbn] = useState("")

    const [list12, setlist12] = useState(list)

    function edit(itemi){
        settitle(itemi.title);
        setauthor(itemi.author)
        setyear(itemi.year)
        setisbn(itemi.isbn)
        deletei(itemi.id)

    }


    if (!list.length) {
        
        return(
            <Badge colorScheme='green' p={'4'} m={'4'}>EMPTY!!</Badge>
        )
    }
    function addi2(listitem) {
        setlist12([...list12,listitem])
        
        
      }

    
  return (
    <VStack  divider={<StackDivider/>} 
    borderColor={"gray.200"} 
    borderWidth={"2px"} 
    borderRadius={"lg"} 
    p={"4"}
    w={"100%"}
    maxWidth={{base:'90vw',sm:'80vw',lg:'50vw',xl:'40vw'}}
    alignItems={"stretch"}
    >
        {
            list.map(listi=>(
                <HStack key={list.id} p={"3"}>
                    <Text>Title: {listi.title}</Text>
                    <Spacer/>
                    <Text>Author: {listi.author}</Text>
                    <Spacer/>
                    <Text>Year: {listi.year}</Text>
                    <Spacer/>
                    <Text>ISBN: {listi.isbn}</Text>
                    <Spacer/>
                    <IconButton icon={<FaTrash />} onClick={()=>deletei(listi.id) } />
                    <Spacer/>
                    <IconButton icon={<FaEdit />} onClick={()=>edit(listi) } />
                </HStack>
            ))
        }
        <Edit title={title} author={author}  year={year} isbn={isbn} addi2={addi2} />
    </VStack>
  )
}

export default TodoList
