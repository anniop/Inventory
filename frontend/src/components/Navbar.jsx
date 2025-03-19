import { Button, Container, Flex, HStack, Text, useColorMode, useColorModeValue, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { PlusSquareIcon } from "@chakra-ui/icons";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const headerGradient = useColorModeValue(
    "linear(to-r, blue.400, purple.500)",
    "linear(to-r, blue.200, purple.300)"
  );
  const navBg = useColorModeValue("white", "gray.900");
  const buttonBg = useColorModeValue("gray.100", "gray.700");
  const buttonHoverBg = useColorModeValue("gray.200", "gray.600");

  return (
    <Box
      w="full"
      bg={navBg}
      shadow="sm"
      position="sticky"
      top={0}
      zIndex={1000}
      borderBottom="1px"
      borderColor={useColorModeValue("gray.100", "gray.700")}
    >
      <Container maxW="container.xl" px={4}>
        <Flex
          h={20}
          alignItems="center"
          justifyContent="space-between"
          flexDir={{
            base: "column",
            sm: "row",
          }}
          py={{
            base: 4,
            sm: 0,
          }}
        >
          <Text
            fontSize={{ base: "24", sm: "30" }}
            fontWeight="bold"
            textTransform="uppercase"
            textAlign="center"
            bgGradient={headerGradient}
            bgClip="text"
            letterSpacing="tight"
            _hover={{
              transform: "translateY(-1px)",
              transition: "all 0.2s ease-in-out",
            }}
            transition="all 0.2s ease-in-out"
          >
            <Link to="/">Stockify ✨</Link>
          </Text>

          <HStack spacing={3} alignItems="center">
            <Link to="/create">
              <Button
                bg={buttonBg}
                _hover={{
                  bg: buttonHoverBg,
                  transform: "translateY(-2px)",
                  shadow: "md",
                }}
                _active={{
                  transform: "translateY(0)",
                }}
                transition="all 0.2s ease-in-out"
                size="lg"
                rounded="lg"
                px={6}
              >
                <HStack spacing={2}>
                  <PlusSquareIcon fontSize={18} />
                  <Text display={{ base: "none", md: "block" }}>Add Product</Text>
                </HStack>
              </Button>
            </Link>
            <Button
              onClick={toggleColorMode}
              bg={buttonBg}
              _hover={{
                bg: buttonHoverBg,
                transform: "translateY(-2px)",
                shadow: "md",
              }}
              _active={{
                transform: "translateY(0)",
              }}
              transition="all 0.2s ease-in-out"
              size="lg"
              rounded="lg"
            >
              {colorMode === "light" ? <IoMoon size={18} /> : <LuSun size={18} />}
            </Button>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
