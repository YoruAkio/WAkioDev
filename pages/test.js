import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button,
  chakra
} from '@chakra-ui/react'
import axios from 'axios'
import { useEffect, useState } from 'react'

const IPUrl = "https://api.yoruakio.me/api/nusaps/raw-ip"

// const Test = () => {
//   return (
//     <Container align="center">
//       <Text>Hello, World!</Text>
//     </Container>
//   )
// }

export default function Test() {
    const [ post, setPost ] = useState(null);

    useEffect(() => {
        axios.get(IPUrl).then((response) => {
          setPost(response.data);
        });
    }, []);
    
    if (!post) return null;

    console.log(post)

    return (
        <Container align="center">
            <Text>{post}</Text>
        </Container>
    );
}
