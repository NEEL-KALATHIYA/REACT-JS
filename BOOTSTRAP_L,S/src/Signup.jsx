import {
  Box,
  Button,
  Center,
  Flex,
  FormLabel,
  Heading,
  Icon,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { FiBluetooth, FiUserMinus, FiUserPlus } from "react-icons/fi";
import { HiAcademicCap, HiShoppingBag, HiShoppingCart, HiUser } from "react-icons/hi";
import { HiFaceSmile } from "react-icons/hi2";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function Signup() {
  return (
    <>
    <Navbar/>
      <Flex minHeight="100vh" align="center" justify="center" bg="gray.200">
        <Box
          width={{ base: "90%", md: "400px" }}
          p={8}
          bg="white"
          borderRadius={10}
        >
          <VStack spacing={6} align="stretch">
            <Center>
              <Icon as={FiBluetooth} w={10} h={10} color="blue.200" />
            </Center>
            <Heading as="h6" size="lg" textAlign="center" color="blue.600">
              Sign Up for ToDo
            </Heading>

            <form>
              <Box>
                <FormLabel>Username</FormLabel>
                <Input variant="filled" placeholder="Enter Username" />
              </Box>
              <Box>
                <FormLabel>Email</FormLabel>
                <Input type="text" variant="filled" placeholder="Enter Email" />
              </Box>
              <Box>
                <FormLabel>Password</FormLabel>
                <Input
                  type="text"
                  variant="filled"
                  placeholder="Enter Password"
                />
              </Box>
              <Center mt={6}>
                <Button colorScheme="blue" size="md" width="full" type="submit">
                  Sign Up
                </Button>
              </Center>

              <Text fontSize="sm" color="gray.600" marginTop={2}>
                Already have an account?{" "}
                <Link  to="/login">
                  Log in
                </Link>
              </Text>
            </form>
          </VStack>
        </Box>
      </Flex>
    </>
  );
}

export default Signup;
