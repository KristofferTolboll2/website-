import * as React from "react";
import {
  Flex,
  Avatar,
  Box,
  Text,
  Badge,
  Stack,
  Link,
  UnorderedList,
  ListItem,
  useColorModeValue,
  Button,
  useDisclosure,
  Icon,
} from "@chakra-ui/react";
import { Link as NavLink } from "react-router-dom";
import { MotionBox, MotionFlex } from "../motion";
import Header from "../header";
import Projects from "./Projects";
import { projectsList } from "data/projects-list";
import "style/style.css";
import UserIcon from "assets/images/profil-billede.jpg";
import HighLightBadge from "../user-interface/CustomBadge";
import useWindowDimensions from "configs/hooks/useDimensions";
import TopNavModal from "components/navigation/top-nav/TopNavModal";
import { BiGlobe } from "react-icons/bi";
import { BsGlobe } from "react-icons/bs";
import { GiGlobe } from "react-icons/gi";

const ANIMATION_DURATION = 0.5;
const ORANGE = "#ff9400";

const Home = () => {
  const { width, height } = useWindowDimensions();
  const isMobile = width < 768;
  console.log(width);

  const {
    isOpen: isOpenModal,
    onOpen: onOpenModal,
    onClose: onCloseModal,
  } = useDisclosure();

  React.useEffect(() => {
    window.addEventListener("open-modal", (event) => {
      event.preventDefault();
      onOpenModal();
    });
  }, []);

  //breakpoint 1 = 1250 px width
  return (
    <Flex
      direction="column"
      align="center"
      style={{ overflow: isMobile && "hidden" }}
    >
      <TopNavModal onClose={onCloseModal} isOpen={isOpenModal} />
      <Flex direction={["column", "column", "row"]}>
        <MotionBox
          style={{ width: "100%" }}
          opacity="0"
          initial={{
            translateX: -150,
            opacity: 0,
          }}
          animate={{
            translateX: 0,
            opacity: 1,
            transition: {
              duration: ANIMATION_DURATION,
            },
          }}
          m="auto"
          mb={[8, 16, "auto"]}
        >
          <div className="avatar-container">
            <Avatar height="full" width="full" src={UserIcon} />
          </div>
        </MotionBox>
        <MotionFlex
          ml={["auto", "auto", 16]}
          m={["auto", "initial"]}
          w={["90%", "85%", "80%"]}
          maxW="800px"
          opacity="0"
          justify="center"
          direction="column"
          initial={{
            opacity: 0,
            translateX: 150,
          }}
          animate={{
            opacity: 1,
            translateX: 0,
            transition: {
              duration: ANIMATION_DURATION,
            },
          }}
        >
          <Header underlineColor={ORANGE} mt={0} className="face">
            Kristoffer Tølbøll
          </Header>
          <Box
            as="h2"
            fontSize={isMobile ? "sm" : "2xl"}
            fontWeight="400"
            fontSize={isMobile ? "sm" : "2xl"}
            mt={5}
            textAlign="left"
          >
            - I am a software developer and CTO.
            <Box
              as="strong"
              fontSize={isMobile ? "sm" : "2xl"}
              fontWeight="600"
            >
              <Link as={NavLink} to="/about">
                {" "}
                <br />- Worked in a variety of different industries
              </Link>
            </Box>{" "}
            <Box
              as="span"
              fontSize={isMobile ? "sm" : "2xl"}
              whiteSpace="nowrap"
            ></Box>{" "}
            <Box
              as="span"
              fontSize={isMobile ? "sm" : "2xl"}
              whiteSpace="nowrap"
            >
              - Passionate about developing innovative solutions
            </Box>
            <br />
            <Box
              as="span"
              fontSize={isMobile ? "sm" : "2xl"}
              whiteSpace="nowrap"
            >
              - Working with different software teams around the world{" "}
              <Icon as={GiGlobe} w={30} />
            </Box>
            <br />
            <Box as="span" whiteSpace="nowrap"></Box>
          </Box>
          <Box
            as="h2"
            fontSize={isMobile ? "sm" : "2xl"}
            fontWeight="400"
            mt={5}
            textAlign="left"
          >
            Through years of experience i have practised in the field of data
            science, machine learning and data engineering. I have a strong
            background in Software Engineering and have worked in a variety of
            industries from Consulting, Social Media and Gambling and Finance. I
            love learning new technologies and thinking out of the to find the
            best possible solution for a problem.
            <br />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                padding: "0.5rem",
              }}
            >
              <Button colorScheme={"blue"} size={"lg"} onClick={onOpenModal}>
                Get in touch
              </Button>
            </div>
          </Box>
        </MotionFlex>
      </Flex>
      <MotionBox
        w="100%"
        opacity="0"
        initial={{
          translateY: 80,
        }}
        animate={{
          translateY: 0,
          opacity: 1,
          transition: {
            delay: ANIMATION_DURATION - 0.1,
            duration: ANIMATION_DURATION,
          },
        }}
      >
        <Box mt={10}>
          <Stack
            mb={10}
            mx={[0, 0, 10]}
            padding={4}
            align="start"
            borderLeft="4px solid"
            borderColor={"#53c8c4"}
            color={"whatsapp"}
            _hover={{ shadow: "lg" }}
            backgroundColor={useColorModeValue("gray.100", "#1e2533")}
            rounded="sm"
            fontSize="md"
          >
            <Text textAlign="center" color="#53c8c4" fontWeight="bold">
              Highlights
            </Text>
            <UnorderedList textAlign="left" paddingLeft={5} m={0}>
              <ListItem>
                <Link as={NavLink} to="/test123" target="_blank">
                  My Blog
                  <HighLightBadge badgeType="personal" />
                  <HighLightBadge badgeType="tech" />
                </Link>
              </ListItem>
              <ListItem>
                <Link as={NavLink} to="/story-timeline">
                  My Story
                </Link>
                <HighLightBadge badgeType="personal" />
              </ListItem>
              <ListItem>
                <Link as={NavLink} to="/tech-stack">
                  My prefeered technologies and philosophies
                </Link>
                <HighLightBadge badgeType="tech" />
              </ListItem>
              <ListItem>
                <Link as={NavLink} to="/achievements">
                  Achievements
                </Link>
                <Badge ml="1" colorScheme="green">
                  Tech
                </Badge>
              </ListItem>
            </UnorderedList>
          </Stack>
          <Projects projects={projectsList} />
        </Box>
      </MotionBox>
    </Flex>
  );
};

export default Home;
