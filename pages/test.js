/* eslint-disable @next/next/no-img-element */
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

const WaifuImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})
const IPUrl = "https://nekos.life/api/v2/img/waifu"


export default function Test() {
    const [ post, setPost ] = useState(null);
    const [ error, setError ] = useState(null);
    const GetWaifu = (e) => {
        e.preventDefault()
        axios.get(IPUrl).then((response) => {
          setPost(response.data);
        }).catch(error => {
            setError(error)
        })
    }  

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

            <Text align="center">This is ur waifu</Text>
            <WaifuImage
                src={post.url}
                alt="Waifu-Images"
                borderRadius="15px"
                width="100%"
                height="100%"
            />

            <Button
                variant="ghost"
                colorScheme="teal"
                onClick={GetWaifu}
              >
                Get Your Waifu
            </Button>
        </Container>
    );
}