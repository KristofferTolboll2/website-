import React from "react";
import {
  Box,
  BoxProps,
  Circle,
  Flex,
  useColorModeValue,
  Button,
  Popover,
  PopoverTrigger,
  PopoverCloseButton,
  PopoverArrow,
  PopoverHeader,
  PopoverContent,
  PopoverBody
} from "@chakra-ui/react";
import { FiCheckCircle } from "react-icons/fi";

export interface StoryTimelineProps extends BoxProps {
  icon?: any;
  boxProps?: BoxProps;
  skipTrail?: boolean;
  index: number;
  year?: string;
}

export const StoryTimeline: React.FC<StoryTimelineProps> = ({
  icon = FiCheckCircle,
  boxProps = {},
  index,
  year,
  skipTrail = false,
  children,
  ...props
}) => {
  const [isOpen, setIsOpen] = React.useState(true);
  const open = () => setIsOpen(!isOpen);
  const close = () => setIsOpen(false);

  const color = useColorModeValue("gray.700", "gray.500");
  return (
    <Flex minH={20} {...props}>
      <Flex
        flexDir="column"
        alignItems="center"
        minHeight={"8rem"}
        mr={4}
        // pos="relative"
      >
        {/* <Box position="relative" > */}
        <Popover
          returnFocusOnClose={false}
          isOpen={isOpen}
          onClose={close}
          placement={index % 2 === 0 ? "right" : "left"}
          closeOnBlur={false}
        >
          <PopoverTrigger>
            <Box onClick={open} position="relative">
              <Circle
                size={12}
                bg={useColorModeValue("gray.600", "gray.500")}
                opacity={useColorModeValue(0.07, 0.15)}
                sx={{}}
              />
              {year ? (
                <Box
                  fontSize={15}
                  fontWeight={"bold"}
                  color={color}
                  pos="absolute"
                  left="0.5rem"
                  top="0.875rem"
                >
                  {year}
                </Box>
              ) : (
                <Box
                  as={icon}
                  size="1.25rem"
                  color={color}
                  pos="absolute"
                  left="0.875rem"
                  top="0.875rem"
                />
              )}
            </Box>
          </PopoverTrigger>
          <Box width={"18rem"} fontSize={15}>
            {!year && (
              <PopoverContent padding={1}>
                <PopoverArrow bg="pink.500" />
                {/* <PopoverCloseButton /> */}
                <PopoverBody>
                  <Box overflow="scroll">{children}</Box>
                </PopoverBody>
              </PopoverContent>
            )}
          </Box>
        </Popover>
        {/* </Box> */}
        {!skipTrail && <Box w="1px" flex={1} bg={color} />}
      </Flex>
    </Flex>
  );
};