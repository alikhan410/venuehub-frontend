"use client";
import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Chip,
  Tabs,
  Tab,
} from "@nextui-org/react";

import { signupUser, signupVendor } from "./action.js";
import { useState } from "react";
import { SignupForm } from "./signupForm.js";

export default function Signup() {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [selected, setSelected] = useState("user");

  const [errorUser, setErrorUser] = useState(null);
  const [errorVendor, setErrorVendor] = useState(null);

  const handleSignupUser = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const details = {
      username: formData.get("username"),
      password: formData.get("password"),
      email: formData.get("email"),
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
    }

    const res = await signupUser(details);

    if (res.error) {
      setErrorUser(<Chip color="danger">{res.message}</Chip>);
    } else {
      setErrorUser(null);
      onClose();
    }
  };

  const handleSignupVendor = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const details = {
      username: formData.get("username"),
      password: formData.get("password"),
      email: formData.get("email"),
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
    }

    const res = await signupVendor(details);

    if (res.error) {
      console.log(res);
      setErrorVendor(<Chip color="danger">{res.message}</Chip>);
    } else {
      setErrorVendor(null);
      onClose();
    }
  };

  const customOnClose = () => {
    setErrorUser(null);
    setErrorVendor(null);
    onClose();
  };

  return (
    <>
      <Button onPress={onOpen} className="border-2 border-sky-500" color="primary" variant="flat">
        Sign up
      </Button>

      <Modal onClose={customOnClose} isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex justify-center"> {`${selected.toUpperCase()} SIGN UP`} </ModalHeader>
              <div className="grid grid-cols-1">
                <Tabs className="justify-self-center" selectedKey={selected} onSelectionChange={setSelected}>
                  <Tab key="user" title="User">
                    <form onSubmit={handleSignupUser}>
                      <ModalBody>
                        <SignupForm />
                        <div className="flex justify-around">{errorUser ? errorUser : ""}</div>
                      </ModalBody>

                      <ModalFooter>
                        <Button color="danger" variant="flat" onPress={customOnClose}>
                          Close
                        </Button>
                        <Button color="primary" type="submit">
                          Sign up
                        </Button>
                      </ModalFooter>
                    </form>
                  </Tab>

                  <Tab key="vendor" title="Vendor">
                    <form onSubmit={handleSignupVendor}>
                      <ModalBody>
                        <SignupForm />
                        <div className="flex justify-around">{errorVendor ? errorVendor : ""}</div>
                      </ModalBody>

                      <ModalFooter>
                        <Button color="danger" variant="flat" onPress={customOnClose}>
                          Close
                        </Button>
                        <Button color="primary" type="submit">
                          Sign up
                        </Button>
                      </ModalFooter>
                    </form>
                  </Tab>
                </Tabs>
              </div>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
