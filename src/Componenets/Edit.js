import React from 'react'
import { Button, HStack, Input, VStack ,useToast } from '@chakra-ui/react'

const Edit = ({addi2,title,author,year,isbn}) => {



    function handlesubmit(e){
        e.preventDefault();
    }
  
    /*

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

*/
var titlet,authort,yeart,isbnt;
const newlist={
    id:titlet,
    title:titlet,
    author:authort,
    year:yeart,
    isbn:isbnt
}

addi2(newlist)


  return (
    <VStack>
    <form onSubmit={handlesubmit}>
    <VStack my={"6"}   w={"100%"}
    maxWidth={{base:'90vw',sm:'80vw',lg:'50vw',xl:'40vw'}} >
        
        <Input variant={"filled"} placeholder='Add Title'  value={title}  onChange={(e)=>   titlet=e.target.value    }  />
        <Input variant={"filled"} placeholder='Add Author'   value={author}  onChange={(e)=>   authort=e.target.value    }/>
        <Input variant={"filled"} placeholder='Add Year Published'  value={year}   onChange={(e)=>   yeart=e.target.value    } />
        <Input variant={"filled"} placeholder='Add ISBN'    value={isbn}    onChange={(e)=>   isbnt=e.target.value    }  />
        <Button colorScheme='pink' my={"4"} type='submit' >Submit</Button>
        
    </VStack>

</form>
</VStack>
  )
}

export default Edit
