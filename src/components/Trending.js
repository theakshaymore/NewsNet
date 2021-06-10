// import React from "react";
import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Link,
} from "@chakra-ui/react";

function Trending() {
  return (
    <Container maxW={"7xl"}>
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: "column", md: "row" }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "xl", sm: "2xl", lg: "4xl" }}
          >
            <Text as={"span"} color={"black"}>
              Apple is reportedly developing an iPad Pro with wireless charging
            </Text>
          </Heading>
          <Text color={"gray.500"}>
            Apple may release an iPad Pro with wireless charging capabilities
            sometime next year. According to Bloomberg's Mark Gurman, the tech
            giant is currently working on a new iPad Pro and a new iPad mini. …
          </Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: "column", sm: "row" }}
          >
            <Button
              rounded={"full"}
              size={"lg"}
              fontWeight={"normal"}
              px={6}
              colorScheme={"red"}
              bg={"blue.400"}
              _hover={{ bg: "red.500" }}
            >
              <Link href="https://www.engadget.com/apple-ipad-pro-with-wireless-charging-bloomberg-report-080021362.html">
                Read Full Article
              </Link>
            </Button>
          </Stack>
        </Stack>
        <Flex
          flex={1}
          justify={"center"}
          align={"center"}
          position={"relative"}
          w={"full"}
        >
          <Box
            position={"relative"}
            height={"300px"}
            rounded={"2xl"}
            boxShadow={"2xl"}
            width={"full"}
            overflow={"hidden"}
          >
            <Image
              alt={"Image"}
              fit={"cover"}
              align={"center"}
              w={"100%"}
              h={"100%"}
              src={
                "https://s.yimg.com/os/creatr-uploaded-images/2021-06/16e7e130-c4fc-11eb-a7de-0518f1bf9460"
              }
            />
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
}

export default Trending;
