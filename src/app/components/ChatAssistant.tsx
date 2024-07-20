"use client";
import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessages";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Props = {};

const ChatAssistant = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Accordion
      type="single"
      collapsible
      className="relative bg-white z-40 shadow"
    >
      <AccordionItem value="item-1">
        <div
          className={`fixed right-8 bottom-8 ${
            isOpen
              ? "w-96 bg-white border border-gray-200 rounded-md overflow-hidden"
              : ""
          }`}
        >
          <div className="w-full h-full flex flex-col">
            <AccordionTrigger
              className={`${isOpen ? "px-6 border-b border-zinc-300" : ""}`}
              onClick={handleToggle}
            >
              {isOpen ? (
                <ChatHeader />
              ) : (
                <Avatar
                  className={`transition-opacity duration-300 ease-in-out ${
                    isOpen ? "opacity-0 invisible" : "opacity-100 visible w-16 h-16"
                  } fixed right-8 bottom-8`}
                >
                  <AvatarImage src="/chatbot.png" alt="chatbot"/>
                  <AvatarFallback delayMs={600}>AI</AvatarFallback>
                </Avatar>
              )}
            </AccordionTrigger>
            <AccordionContent
              className={`transition-max-height transition-opacity duration-300 ease-in-out ${isOpen ? "open opacity-100 visible" : "opacity-0 invisible"}`}
            >
              <div className="flex flex-col h-128">
                <ChatMessage className="px-2 py-3 flex-1" />
                <ChatInput className="px-4" />
              </div>
            </AccordionContent>
          </div>
        </div>
      </AccordionItem>
    </Accordion>
  );
};

export default ChatAssistant;
