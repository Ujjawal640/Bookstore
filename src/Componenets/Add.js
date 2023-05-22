import { Button, Input, VStack ,useToast } from '@chakra-ui/react'
import React from 'react'
import { useState,useEffect } from "react";

const Add = ({addi,title1}) => {


  
    

    const toast = useToast()



    function handlesubmit(e){
        e.preventDefault();

        if(!title || !author || !year || !isbn){

            toast({
                title: ' Empty Field ',
                status: 'error',
                duration: 4000,
                isClosable: true,
              })
              return;

        }


        const newlist={
            id:title,
            title:title,
            author:author,
            year:year,
            isbn:isbn
        }

        addi(newlist)

        settitle('')

        setauthor('')

        setyear('')

        setisbn('')

    }
const [title, settitle] = useState('')

const [author, setauthor] = useState('')

const [year, setyear] = useState('')

const [isbn, setisbn] = useState('')


  return (
    <form onSubmit={handlesubmit}>
        <VStack mt={"6"}>
            <Input variant={"filled"} placeholder='Add Title'  value={title} onChange={(e)=>   settitle(e.target.value)    }   />
            <Input variant={"filled"} placeholder='Add Author' value={author} onChange={(e)=>   setauthor(e.target.value)    }   />
            <Input variant={"filled"} placeholder='Add Year Published'  value={year} onChange={(e)=>   setyear(e.target.value)    }   />
            <Input variant={"filled"} placeholder='Add ISBN'   value={isbn} onChange={(e)=>   setisbn(e.target.value)    }   />
            <Button colorScheme='pink' my={"4"} type='submit' >Submit</Button>
        </VStack>

    </form>
  )
}

export default Add
