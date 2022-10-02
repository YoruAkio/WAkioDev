import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button,
  chakra
} from '@chakra-ui/react'
import Image from'next/image'
import axios from 'axios'
import { useEffect, useState } from 'react'

const IPUrl = "https://nekos.life/api/v2/img/waifu"

// const Test = () => {
//   return (
//     <Container align="center">
//       <Text>Hello, World!</Text>
//     </Container>
//   )
// }

export default function Test() {
    const [ post, setPost ] = useState(null);
    const [ error, setError ] = useState(null);

    useEffect(() => {
        axios.get(IPUrl).then((response) => {
          setPost(response.data);
        }).catch(error => {
            setError(error)
        })
    }, []);
    
    if (error) return `Error: ${error.message}`;
    if (!post) return null;

    console.log(post)

    return (
        <Container align="center">
            <Image align="center" src={post.url}>HooH</Image>
        </Container>
    );
}
