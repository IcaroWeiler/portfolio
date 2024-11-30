"use client";

import Button from "@/components/Button/button";
import { useState } from "react";
import { sendEmail } from "./email";
import Input from "@/components/Input/input";
import TextArea from "@/components/Input/textarea";
import { ClipLoader } from "react-spinners";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAtom } from "jotai";
import { darkModeAtom } from "@/stores/darkMode";

export default function Contact() {
  const [firstName, setFirstName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [darkMode] = useAtom(darkModeAtom);
  const sendToast = () => {
    if (darkMode) toast.success("Email sent", { theme: "dark" });
    else toast.success("Email sent");
  };

  const handleEmail = () => {
    if (message && email && !isLoading)
      sendEmail(message, firstName, subject, email, setIsLoading, sendToast);
  };

  return (
    <main className="">
      <div className="title">
        <div className="fade-in animate-delay-500 mb-10">
          <h1 className="title mb-0">Get in touch</h1>
          <span className="text-xl text-[#808080] fade-in animate-delay-1000">
            Let&apos;s build something awesome.
          </span>
        </div>

        <div className="email-box rounded-lg fade-in animate-delay-1500  w-fit p-6">
          <div className="flex gap-4 mb-4">
            <Input
              label={"Name"}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setFirstName(e.target.value)
              }
            ></Input>

            <Input
              label={"Email *"}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
            ></Input>
          </div>

          <div className="flex w-full gap-4 mb-4">
            <Input
              label={"Subject"}
              style={{ width: "100%" }}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSubject(e.target.value)
              }
            ></Input>
          </div>

          <div className="flex w-full mb-8">
            <TextArea
              label={"Message *"}
              style={{ width: "100%" }}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                setMessage(e.target.value)
              }
            ></TextArea>
          </div>

          <div className="flex w-full justify-end">
            <Button
              style={{
                border: "1px solid #808080",
                padding: "10px 15px 10px 15px",
                width: "115px",
              }}
              type="primary"
              onClick={() => handleEmail()}
            >
              {isLoading ? (
                <ClipLoader
                  color={"#ffffff"}
                  loading={isLoading}
                  size={15}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
              ) : (
                "Send Email"
              )}
            </Button>
          </div>
        </div>
      </div>

      <ToastContainer />
    </main>
  );
}
