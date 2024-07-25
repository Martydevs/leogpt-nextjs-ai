"use client"

import { Dispatch, SetStateAction } from "react";
import { Button } from "./button";

interface QuestionButtonProps {
  title: string;
  description: string;
  handleClick: Dispatch<SetStateAction<string>>
}

function QuestionButton({ title, description, handleClick }: QuestionButtonProps) {
  const questionValue = `${title} ${description}`
  
  return (
    <Button
      type="button"
      variant={"outline"}
      className="w-full flex flex-col justify-center items-start text-balance py-10 md:w-3/6 lg:w-3/6 hover:border-primary active:scale-95 transition-all duration-300 ease-in-out"
      onClick={() => handleClick(questionValue)}
    >
      <h4 className="font-extrabold text-[1rem]">{title}</h4>
      <p className="text-start font-light">{description}</p>
    </Button>
  );
}

export default QuestionButton;
