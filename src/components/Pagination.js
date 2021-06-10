// import React from "react";
import { Box, Center, HStack } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <Center>
        {pageNumbers.map((number) => (
          <HStack flexDirection="row" spacing="24px">
            <Box w="40px" h="40px" bg="blue.400" m={2} p={1}>
              <a
                onClick={() => paginate(number)}
                href="!#"
                className="page-link"
              >
                {number}
                <ChevronRightIcon />
              </a>
            </Box>
          </HStack>
        ))}
        {/* </ul> */}
      </Center>
    </nav>
  );
};

export default Pagination;
