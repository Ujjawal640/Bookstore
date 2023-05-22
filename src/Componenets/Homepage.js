import * as React from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'

// 1. import `ChakraProvider` component
import { Heading, IconButton, VStack } from '@chakra-ui/react'
import TodoList from './TodoList';
import Add from './Add';
import { useState,useEffect } from "react";
import { useColorMode } from '@chakra-ui/react'
import Edit from './Edit';

const Homepage = () => {
    
  const ilist=[];

  const [list, setlist] = useState(
    ilist
  )
  //()=>JSON.parse(localStorage.getItem('blist')) || []
  //useEffect(() => {
    //localStorage.setItem('list',JSON.stringify(list))
  
  
  //}, [list])
  
  
  function deletei(id) {
    const newlist=list.filter((list)=>{
      return list.id!= id;
  
    })
  
    setlist(newlist);
  }
  
  
  function addi(listitem) {
    setlist([...list,listitem])
    
  }
  
  const{colorMode,toggleColorMode}=useColorMode();
  
  /*
  const getRecord=(id)=>{
    const product=this.list.find(item=> item.id===id);
    return product;
  }
  
  var title1;
  function onEdit(id){
    const tempProduct=list;
    const index=tempProduct.indexOf(getRecord(id));
    const selectedProduct=tempProduct[index];
     title1=selectedProduct['title'];
  title1={title1}
  }
  */
  
  //onEdit={onEdit}
  var title;
  function onEdit(listi) {
     title=listi.title;
    
  }
  
  return (
    <VStack p={5} >
    <IconButton isRound='true' size='lg' alignSelf={'flex-end'} icon={ colorMode=='light'? <FaSun/>: <FaMoon />} onClick={toggleColorMode} />
    <Heading   mb="8" fontWeight={'extrabold'} fontSize={'4xl'} bgGradient="linear(to-r,pink.500,pink.300,blue.500)" bgClip="text" >Book Store</Heading>
    <TodoList list={list}  deletei={deletei}  onEdit={onEdit} addi={addi}/>
    <Add addi={addi} />

       </VStack>
  )
}

export default Homepage
