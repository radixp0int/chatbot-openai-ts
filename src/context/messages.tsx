import { nanoid } from "nanoid";
import { Message } from "@/lib/validators/message";
import { createContext, useState } from "react";

export const MessagesContext = createContext<{
  messages: Message[];
  isMessageUpdating: boolean;
  addMessage: (message: Message) => void;
  removeMessage: (id: string) => void;
  updateMessage: (id: string, updateFn: (prevText: string) => string) => void;
  setIsMessageUpdating: (isUpdating: boolean) => void;
}>({
  messages: [],
  isMessageUpdating: false,
  addMessage: () => {},
  removeMessage: () => {},
  updateMessage: () => {},
  setIsMessageUpdating: () => {},
});

export function MessagesProvider({ children }: { children: React.ReactNode }) {
  const [isMessageUpdating, setIsMessageUpdating] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: nanoid(),
      text: "Hello, this is your Virtual Assistant. How can I help you?",
      isUserMessage: false,
    },
  ]);

  const addMessage = (message: Message) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  const removeMessage = (id: string) => {
    setMessages((prevMessages) =>
      prevMessages.filter((message) => message.id !== id)
    );
  };

  const updateMessage = (
    id: string,
    updateFn: (prevText: string) => string
  ) => {
    setMessages((prevMessages) =>
      prevMessages.map((message) =>
        message.id === id
          ? { ...message, text: updateFn(message.text) } // Just the text is updated and return all other messages
          : message
      )
    );
  };

  return (
    <MessagesContext.Provider
      value={{
        messages,
        isMessageUpdating,
        addMessage,
        removeMessage,
        updateMessage,
        setIsMessageUpdating,
      }}
    >
      {children}
    </MessagesContext.Provider>
  );
}
