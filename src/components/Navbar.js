// import React from "react";
import {
  Flex,
  Spacer,
  Box,
  Button,
  Heading,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
  Link,
} from "@chakra-ui/react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Flex>
        <Box>
          <Heading fontFamily="Poppins" color="blue">
            NewsNet
          </Heading>
        </Box>
        <Spacer />
        <Menu isLazy>
          <MenuButton>
            <Button
              rounded={"full"}
              // size={"lg"}
              fontWeight={"normal"}
              colorScheme={"red"}
              bg={"blue.400"}
            >
              Connect
            </Button>
          </MenuButton>
          <MenuList>
            <MenuGroup title="Join us">
              <MenuItem>Signin</MenuItem>
            </MenuGroup>
            <MenuDivider />
            <MenuGroup title="My Profiles">
              <MenuItem>
                <Link href="https://twitter.com/AkshhayMore">Twitter</Link>
              </MenuItem>
              <MenuItem>
                <Link href="https://github.com/theakshaymore">Github</Link>
              </MenuItem>
              <MenuItem>
                <Link href="https://www.linkedin.com/in/akshay-more-275616177/">
                  Linkedin
                </Link>
              </MenuItem>
              <MenuItem>
                <Link href="https://www.instagram.com/akshhay.more/">
                  Instagram
                </Link>
              </MenuItem>
            </MenuGroup>
          </MenuList>
        </Menu>
      </Flex>
    </nav>
  );
};

export default Navbar;
