// import React from "react";
import { Box, Image, Text, Link, Button } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const NewsItem = ({ item, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className="news" key={item.source.id}>
      <Box p={5} mt={8} display={{ md: "flex" }}>
        <Box flexShrink={0}>
          <Image
            boxSize="200px"
            borderRadius="base"
            width={80}
            src={item.urlToImage}
            alt="img"
          />
        </Box>
        <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
          <Text
            fontWeight="bold"
            // textTransform="uppercase"
            fontSize="sm"
            letterSpacing="wide"
            color="teal.600"
          >
            Trending
          </Text>
          <Text mt={2} fontSize="2xl" color="black.500">
            {item.title}
          </Text>
          <Text mt={2} color="gray.500">
            {item.description}
          </Text>
          <Link
            // mt={1}
            display="block"
            // fontSize="md"
            lineHeight="normal"
            // fontWeight="semibold"
            href={item.url}
          >
            <Button
              fontWeight={"normal"}
              href={item.url}
              mt={5}
              color="white"
              bg={"blue.400"}
              _hover={{ bg: "red.500" }}
              size="md"
            >
              read full article{<ArrowForwardIcon />}
            </Button>
          </Link>
        </Box>
      </Box>

      {/* Without Chakra-UI */}
      {/* <img src={item.urlToImage} alt="img"></img>
      <h3>
        <a href={item.url}>{item.title}</a>
      </h3>
      <p>{item.description}</p>
      <p>Writer: {item.author}</p>
      <p>{item.publishedAt}</p> */}
    </div>
  );
};

export default NewsItem;
