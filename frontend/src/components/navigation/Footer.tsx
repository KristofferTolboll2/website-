import * as React from "react";
import {
  Stack,
  IconButton,
  Link,
  Box,
  Text,
  useColorModeValue,
  Flex,
  Icon,
} from "@chakra-ui/react";
import siteConfig from "configs/site-config";
import { BiHeart } from "react-icons/bi";
import { FaPython, FaReact } from "react-icons/fa";

const iconProps = {
  variant: "ghost",
  size: "lg",
  isRound: true,
};

const Footer = () => {
  return (
    <Stack
      as="footer"
      isInline
      spacing={[1, 2]}
      p={4}
      justifyContent="space-between"
      alignItems="center"
      w={["100%", "85%", "80%"]}
      maxW={800}
      mx="auto"
    >
      <Flex
        flexDirection={["column", "column", "row"]}
        flexFlow={["column-reverse", "column-reverse"]}
        justifyContent={["center", "space-between"]}
        alignItems="center"
        w="100%"
        ju
      >
        {/* <HStack> */}
        <Text
          textAlign="center"
          fontSize="sm"
          color={useColorModeValue("gray.500", "gray.200")}
        >
          © {new Date().getFullYear()} Kristoffer Tølbøll{" "}
        </Text>
        <Text
          textAlign="center"
          fontSize="md"
          color={useColorModeValue("gray.500", "gray.200")}
        >
          Built with love <Icon as={BiHeart} color="red" /> in{" "}
          <Icon as={FaReact} color="#61DBFB" /> {"&"}{" "}
          <Icon as={FaPython} color="#4B8BBE" />
        </Text>
        {/* <Box fontSize="md" textAlign="left">
        Website built with
        <Box
          as="span"
          mx="2"
          _before={{
            cursor: "default",
            content: '"❤️"'
          }}
          _hover={{
            _before: {
              content: '"☕️"'
            }
          }}
        />
        in Pakistan{"  "}🇵🇰
      </Box> */}
        {/* </HStack> */}
        <Box textAlign="center">
          {siteConfig.author.accounts.map((sc, index) => (
            <IconButton
              key={index}
              as={Link}
              isExternal
              href={sc.url}
              aria-label={sc.label}
              size="lg"
              colorScheme={sc.type}
              icon={sc.icon}
              {...iconProps}
            />
          ))}
        </Box>
      </Flex>
    </Stack>
  );
};

export default Footer;
