"use client";
import { MessagesContext } from "@/context/messages";
import { cn } from "@/lib/utils";
import React, { HTMLAttributes, useContext } from "react";

interface ChatMessagesProps extends HTMLAttributes<HTMLDivElement> {}

const ChatMessages: React.FC<ChatMessagesProps> = ({ className, ...props }) => {
  const { messages } = useContext(MessagesContext);
  const invertedMessages = [...messages].reverse();

  return (
    <div
      {...props}
      className={cn(
        "flex flex-col-reverse gap-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded-full scrollbar-track-blue-lighter scrollbar-w-2 scrollbar-track-rounded-full scrolling-touch",
        className
      )}
    >
      <div className="flex-1 flex-grow" />
      {invertedMessages.map((message) => (
        <div key={message.id} className="chat-message">
          <div
            className={cn("flex items-end", {
              "justify-end": message.isUserMessage,
            })}
          >
            <div
              className={cn(
                "flex flex-col space-y-2 text-sm max-w-xs mx-2 overflow-x-hidden",
                {
                  "bg-blue-600 text-white": message.isUserMessage,
                  "bg-gray-200 text-gray-900": !message.isUserMessage,
                }
              )}
            >
              {/* <MarkdownLite text={message.text} /> */}
              {message.text}
            </div>
          </div>
        </div>
      ))}
      ChatMessage
    </div>
  );
};

export default ChatMessages;
