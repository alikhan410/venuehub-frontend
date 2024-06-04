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
  Checkbox,
  Input,
  Link,
  Chip,
  Tabs,
  Tab,
} from "@nextui-org/react";

import { MailIcon } from "../icons/MailIcon.js";
import { LockIcon } from "../icons/LockIcon.js";
import { loginUser, loginVendor } from "./action.js";
import { useState } from "react";

export default function Login() {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [selected, setSelected] = useState("user");

  const [errorUser, setErrorUser] = useState(null);
  const [errorVendor, setErrorVendor] = useState(null);

  const handleLoginUser = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const username = formData.get("username");
    const password = formData.get("password");

    const res = await loginUser(username, password);

    if (res.error) {
      setErrorUser(<Chip color="danger">{res.message}</Chip>);
    } else {
      setErrorUser(null);
      onClose();
    }
  };

  const handleLoginVendor = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const username = formData.get("username");
    const password = formData.get("password");

    const res = await loginVendor(username, password);

    if (res.error) {
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
      <Button onPress={onOpen} className="border-2 border-sky-500" color="white">
        Login
      </Button>

      <Modal onClose={customOnClose} isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex justify-center"> {`${selected.toUpperCase()} LOGIN`} </ModalHeader>
              <div className="grid grid-cols-1">
                <Tabs className="justify-self-center" selectedKey={selected} onSelectionChange={setSelected}>
                  <Tab key="user" title="User">
                    <form onSubmit={handleLoginUser}>
                      <ModalBody>
                        <Input
                          name="username"
                          autoFocus
                          endContent={
                            <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                          }
                          label="Email"
                          placeholder="Enter your email"
                          variant="bordered"
                        />
                        <Input
                          name="password"
                          endContent={
                            <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                          }
                          label="Password"
                          placeholder="Enter your password"
                          type="password"
                          variant="bordered"
                        />
                        <div className="flex justify-around">{errorUser ? errorUser : ""}</div>
                        <div className="flex py-2 px-1 justify-between">
                          <Checkbox
                            classNames={{
                              label: "text-small",
                            }}
                          >
                            Remember me
                          </Checkbox>
                          <Link color="primary" href="#" size="sm">
                            Forgot password?
                          </Link>
                        </div>
                      </ModalBody>

                      <ModalFooter>
                        <Button color="danger" variant="flat" onPress={customOnClose}>
                          Close
                        </Button>
                        <Button color="primary" type="submit">
                          Sign in
                        </Button>
                      </ModalFooter>
                    </form>
                  </Tab>

                  <Tab key="vendor" title="Vendor">
                    <form onSubmit={handleLoginVendor}>
                      <ModalBody>
                        <Input
                          name="username"
                          autoFocus
                          endContent={
                            <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                          }
                          label="Email"
                          placeholder="Enter your email"
                          variant="bordered"
                        />
                        <Input
                          name="password"
                          endContent={
                            <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                          }
                          label="Password"
                          placeholder="Enter your password"
                          type="password"
                          variant="bordered"
                        />
                        <div className="flex justify-around">{errorVendor ? errorVendor : ""}</div>
                        <div className="flex py-2 px-1 justify-between">
                          <Checkbox
                            classNames={{
                              label: "text-small",
                            }}
                          >
                            Remember me
                          </Checkbox>
                          <Link color="primary" href="#" size="sm">
                            Forgot password?
                          </Link>
                        </div>
                      </ModalBody>

                      <ModalFooter>
                        <Button color="danger" variant="flat" onPress={customOnClose}>
                          Close
                        </Button>
                        <Button color="primary" type="submit">
                          Sign in
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
