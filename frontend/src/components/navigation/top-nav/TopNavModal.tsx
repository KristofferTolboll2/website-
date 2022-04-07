import { Box } from "@chakra-ui/layout";
import {
  Modal,
  Button,
  ModalOverlay,
  ModalContent,
  Stack,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  FormHelperText,
  FormErrorMessage,
} from "@chakra-ui/react";
import { BsFillPersonFill, BsFillChatLeftTextFill } from "react-icons/bs";
import { EmailIcon } from "@chakra-ui/icons";
import React, { ReactElement, useRef } from "react";
import { Icon } from "@chakra-ui/react";
import { submitContatRequestApi, SubmitContactRequest } from "../../../api/api";
import ReCAPTCHA from "react-google-recaptcha";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
interface Props {
  isOpen: boolean;
  onClose: () => void;
}

//TODO maybe should be refactored to useCallback component
export default function TopNavModal({ isOpen, onClose }: Props): ReactElement {
  const modalRef = useRef();

  const [inputData, setInputData] = React.useState({
    email: { value: "", error: null },
    name: { value: "", error: null },
    message: { value: "", error: null },
  });
  const [loading, setLoading] = React.useState(false);
  const {
    REACT_APP_RECAPTCHA_SITE_CODE: recaptchaSiteCode,
    REACT_APP_RECAPTCHA_SECRET_KEY: recaptchaSecretKey,
  } = process.env;

  const onChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === "email") {
      const emailRegex =
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (!emailRegex.test(value)) {
        setInputData((prevState) => ({
          ...prevState,
          [name]: {
            ...prevState[name],
            error: "Please enter a valid email address",
          },
        }));
      } else {
        setInputData((prevState) => ({
          ...prevState,
          [name]: {
            ...prevState[name],
            error: null,
          },
        }));
      }
    }

    setInputData((prevState) => ({
      ...prevState,
      [name]: {
        ...prevState[name],
        value: value,
      },
    }));
  };

  const onSubmitHandler = async () => {
    const requestBody: SubmitContactRequest = {
      email: inputData.email.value,
      name: inputData.name.value,
      message: inputData.message.value,
    };
    setLoading(true);
    const response = await toast.promise(submitContatRequestApi(requestBody), {
      error: "Something went wrong please try again!",
      success: "Message sent 🚀!",
      pending: "Sending message...",
    });
    setLoading(false);
    if (response.status === 201) {
      onClose();
    }
  };
  const isButtonDisabled = React.useMemo(() => {
    let isDisabled = false;
    Object.keys(inputData).map((key) => {
      console.log(key);
      if (
        inputData[key].error || key === "message"
          ? inputData[key].value.length < 5
          : inputData[key].value.length < 1
      ) {
        isDisabled = true;
      }
    });
    return isDisabled;
  }, [inputData]);
  return (
    <div>
      <Box ref={modalRef} tabIndex={-1} aria-label="Focus moved to this box">
        <Modal finalFocusRef={modalRef} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Contact Form</ModalHeader>
            <ModalCloseButton />
            <Stack spacing={4} style={{ padding: "10px" }}>
              <InputGroup style={{}}>
                <InputLeftElement
                  pointerEvents={"none"}
                  children={<EmailIcon />}
                />
                <Input
                  id="email"
                  name="email"
                  placeholder="Email"
                  isInvalid={inputData.email.error}
                  onChange={onChangeHandler}
                />
              </InputGroup>
              <InputGroup>
                <InputLeftElement
                  pointerEvents={"none"}
                  children={<Icon as={BsFillPersonFill} />}
                />
                <Input
                  id="name"
                  name="name"
                  placeholder="Name"
                  onChange={onChangeHandler}
                />
              </InputGroup>

              <InputGroup style={{}}>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Message"
                  onChange={onChangeHandler}
                />
              </InputGroup>
            </Stack>
            <ModalFooter>
              <Button
                colorScheme="blue"
                isLoading={loading}
                mr={3}
                onClick={onSubmitHandler}
                disabled={isButtonDisabled}
              >
                Submit
              </Button>
              <Button variant="ghost" onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
      <ToastContainer />
    </div>
  );
}
