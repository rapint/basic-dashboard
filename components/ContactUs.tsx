"use client";
import { useState, useMemo } from "react";
import {
  Input,
  Textarea,
  Button,
  Card,
  CardHeader,
  CardBody,
} from "@nextui-org/react";
import toast from "react-hot-toast";

export default function ContactUS() {
  const [data, setData] = useState({
    email: "",
    name: "",
    subject: "",
  });
  const [isInvalids, setIsInvalids] = useState({
    email: false,
    name: false,
    subject: false,
  });

  const validateEmail = (value: string) =>
    value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const onChange = (e: any) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    if (e.target.name === "email") {
      setIsInvalids({
        ...isInvalids,
        email: validateEmail(e.target.value) ? false : true,
      });
    } else {
      setIsInvalids({
        ...isInvalids,
        [e.target.name]: e.target.value ? false : true,
      });
    }
  };

  const onSubmit = () => {
    const email = validateEmail(data.email) ? false : true;
    const name = data.name ? false : true;
    const subject = data.subject ? false : true;
    setIsInvalids({
      ...isInvalids,
      email,
      name,
      subject,
    });
    if (!email && !name && !subject) {
      toast.success("Successfully submitted!");
    } else {
      toast.error("Please input the valid fields.");
    }
  };

  return (
    <Card className="p-1 sm:p-4 w-full">
      <CardHeader>Contact Us</CardHeader>
      <CardBody>
        <div className="flex gap-4 mb-4 flex-col sm:flex-row">
          <Input
            value={data.email}
            name="email"
            size="sm"
            type="email"
            label="Email"
            variant="bordered"
            isInvalid={isInvalids.email}
            color={isInvalids.email ? "danger" : "default"}
            errorMessage={isInvalids.email && "Please enter a valid email"}
            onChange={onChange}
          />
          <Input
            value={data.name}
            name="name"
            size="sm"
            type="text"
            label="Name"
            variant="bordered"
            isInvalid={isInvalids.name}
            color={isInvalids.name ? "danger" : "default"}
            errorMessage={isInvalids.name && "Please enter your full name"}
            onChange={onChange}
          />
        </div>
        <Input
          value={data.subject}
          name="subject"
          size="sm"
          type="text"
          label="Subject"
          variant="bordered"
          isInvalid={isInvalids.subject}
          color={isInvalids.subject ? "danger" : "default"}
          errorMessage={isInvalids.subject && "Please enter a subject title"}
          onChange={onChange}
          className="mb-4"
        />
        <Textarea
          label="Description"
          labelPlacement="outside"
          placeholder="Enter your description"
          className="mb-4"
          minRows={10}
        />
        <div className="flex justify-end w-full">
          <Button onClick={onSubmit}>Submit</Button>
        </div>
      </CardBody>
    </Card>
  );
}
