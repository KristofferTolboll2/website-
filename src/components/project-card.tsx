import * as React from "react";
import {
  HStack,
  VStack,
  Text,
  useColorModeValue,
  Tag,
  Link,
  Box,
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import LazyImage from "./lazy-image";
import * as _ from "lodash";
import { getTagColor, getTechLogo } from "../util";

interface ProjectCardProps {
  title: string;
  description: string;
  logo: string;
  blurHash: string;
  link: string;
  technologies: string[];
  business: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  logo,
  blurHash,
  link,
  technologies,
  business,
}) => {
  const textColor = useColorModeValue("gray.500", "gray.200");
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <motion.div layout onClick={toggleOpen}>
      <HStack
        p={4}
        bg={useColorModeValue("white", "gray.800")}
        rounded="xl"
        borderWidth="1px"
        borderColor={useColorModeValue("gray.100", "gray.700")}
        w="100%"
        h="100%"
        textAlign="left"
        align="start"
        spacing={4}
        cursor="pointer"
        _hover={{ shadow: "lg" }}
      >
        <LazyImage
          src={logo}
          blurHash={blurHash}
          size="sm"
          width={50}
          height={50}
          layout="fixed"
          rounded="md"
        />
        <VStack align="start" justify="flex-start">
          <VStack spacing={0} align="start">
            <motion.div layout>
              <HStack>
                <Text
                  as={Link}
                  href={link}
                  fontWeight="bold"
                  fontSize="md"
                  noOfLines={1}
                  onClick={(e) => e.stopPropagation()}
                  isExternal
                >
                  {title}
                </Text>
                <HStack spacing="1" display={"flex"} flex={1} flexWrap={"wrap"}>
                  {technologies.map((tech, index) => (
                    <Tag
                      size="md"
                      colorScheme={getTagColor(tech)}
                      key={tech + index}
                    >
                      {_.upperFirst(tech)} <span style={{ margin: "2px" }} />{" "}
                      {getTechLogo(tech)}
                    </Tag>
                  ))}
                </HStack>
              </HStack>
            </motion.div>
            <AnimatePresence>
              <motion.div
                layout
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 1 }}
              >
                {!isOpen && (
                  <Text fontSize="sm" color={textColor} noOfLines={{ base: 2 }}>
                    {description}
                  </Text>
                )}
              </motion.div>
            </AnimatePresence>
            <AnimatePresence>
              <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
              >
                {isOpen && (
                  <Text
                    fontSize="sm"
                    color={textColor}
                    // noOfLines={{ base: isOpen ? 5 : 2 }}
                  >
                    {description}
                  </Text>
                )}
                {business && (
                  <Box as="div" mt="5">
                    <HStack spacing="1">
                      {business.map((tech, index) => (
                        <Tag
                          size="md"
                          colorScheme={getTagColor(tech)}
                          key={tech + index}
                        >
                          {_.upperFirst(tech)}{" "}
                        </Tag>
                      ))}
                    </HStack>
                  </Box>
                )}
              </motion.div>
            </AnimatePresence>
          </VStack>
        </VStack>
      </HStack>
    </motion.div>
  );
};

export default ProjectCard;
