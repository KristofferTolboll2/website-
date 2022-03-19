import * as React from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Button,
  Text,
  Link,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Menu,
  MenuButton,
  MenuList,
  Tooltip,
  MenuItem,
  Stack,
  Icon,
} from "@chakra-ui/react";
import { NavLink as RouterNavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import {
  Fa500Px,
  FaGithub,
  FaLinkedin,
  FaMailBulk,
  FaQuestion,
} from "react-icons/fa";
import { ColorModeSwitcher } from "ColorModeSwitcher";
import UserIcon from "assets/images/code-icon.png";
import { AiTwotoneThunderbolt } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import { BsCheckCircle } from "react-icons/bs";
import { MdTimeline } from "react-icons/md";
import { BsBook } from "react-icons/bs";
import TopNavModal from "./TopNavModal";
import { BiHomeAlt } from "react-icons/bi";

const webLinks = [
  { path: "/", icon: "home" },
  { name: "About", path: "/about" },
  { name: "Blog", path: "/blog" },
];

const mobileLinks = [
  { icon: "home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Open Source", path: "/open-source" },
  { name: "Blog", path: "/blog" },
  { name: "Tech Stack", path: "/tech-stack" },
  { name: "Developer Story", path: "/story-timeline" },
];

interface NavLinkProps {
  index?: string;
  name?: string;
  icon?: string;
  path: string;
  onClose: () => void;
}

const NavLink = (props: NavLinkProps) => {
  console.log(props);
  const foundIcon = props.icon === "home" && (
    <div style={{ display: "flex", alignContent: "center" }}>
      <BiHomeAlt size={30} />
    </div>
  );
  return (
    <Link
      as={RouterNavLink}
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.900"),
      }}
      _activeLink={{
        color: useColorModeValue("blue.500", "blue.200"),
      }}
      onClick={() => props.onClose()}
      to={props.path}
    >
      {foundIcon ? foundIcon : props.name}
    </Link>
  );
};

export default function TopNav() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const openModalHandler = (e) => {
    const event = new CustomEvent("open-modal", { detail: { isOpen: true } });
    console.log(event);
    window.dispatchEvent(event);
  };
  const menuProps = {
    bg: useColorModeValue("gray.200", "gray.900"),
    color: useColorModeValue("blue.500", "blue.200"),
  };

  return (
    <>
      <Box bg={useColorModeValue("white", "gray.700")} px={4} boxShadow={"lg"}>
        <Flex
          h={20}
          alignItems={"center"}
          justifyContent={"space-between"}
          w={["90%", "85%", "80%"]}
          maxW={800}
          mx="auto"
        >
          <IconButton
            size={"md"}
            icon={isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
            aria-label={"Open Menu"}
            display={["inherit", "inherit", "none"]}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {webLinks.map((link, index) => (
                <NavLink
                  key={index}
                  icon={link.icon}
                  name={link.name}
                  path={link.path}
                  onClose={onClose}
                />
              ))}
              <Menu isLazy>
                <MenuButton
                  as={Button}
                  variant="ghost"
                  size="sm"
                  px={2}
                  py={1.5}
                  fontSize={"1em"}
                  rounded={"md"}
                  height={"auto "}
                  _hover={menuProps}
                  _expanded={menuProps}
                  _focus={{ boxShadow: "outline" }}
                  rightIcon={<BiChevronDown size={18} />}
                >
                  Links
                </MenuButton>
                <MenuList zIndex={5}>
                  <Link as={RouterNavLink} to="/tech-stack">
                    <MenuItem>
                      <HStack>
                        <Icon
                          as={AiTwotoneThunderbolt}
                          size={18}
                          color={useColorModeValue("blue.500", "blue.200")}
                        />
                        <Text>Tech Stack</Text>
                      </HStack>
                    </MenuItem>
                  </Link>
                  <Link as={RouterNavLink} to="/open-source">
                    <MenuItem>
                      <HStack>
                        <Icon
                          as={BsBook}
                          size={18}
                          color={useColorModeValue("blue.500", "blue.200")}
                        />
                        <Text>Open Source</Text>
                      </HStack>
                    </MenuItem>
                  </Link>
                  <Link as={RouterNavLink} to="/story-timeline">
                    <MenuItem>
                      <HStack>
                        <Icon
                          as={MdTimeline}
                          size={18}
                          color={useColorModeValue("blue.500", "blue.200")}
                        />
                        <Text>Developer Story</Text>
                      </HStack>
                    </MenuItem>
                  </Link>
                  <Link as={RouterNavLink} to="/achievements">
                    <MenuItem>
                      <HStack>
                        <Icon
                          as={BsCheckCircle}
                          size={18}
                          color={useColorModeValue("blue.500", "blue.200")}
                        />
                        <Text>Achievements</Text>
                      </HStack>
                    </MenuItem>
                  </Link>
                </MenuList>
              </Menu>
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Tooltip label={"Contact me"} aria-label="A tooltip">
              <IconButton
                as={Link}
                onClick={openModalHandler}
                size={"md"}
                icon={<FaMailBulk size={25} />}
                aria-label={"Github account"}
                bg={useColorModeValue("white", "gray.700")}
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("gray.200", "gray.900"),
                }}
              />
            </Tooltip>
            <ColorModeSwitcher justifySelf="flex-end" />
          </Flex>
        </Flex>
        {isOpen ? (
          <Box
            pb={4}
            w={["100%", "100%", "80%"]}
            maxW={800}
            display={["inherit", "inherit", "none"]}
          >
            <Stack as={"nav"} spacing={4}>
              {mobileLinks.map((link, index) => (
                <NavLink
                  index={String(index)}
                  name={link.name}
                  path={link.path}
                  onClose={onClose}
                  icon={link.icon}
                />
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
