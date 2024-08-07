import * as React from "react";
import { FormEventHandler } from 'react';
import { ReactNode } from "react";


interface FormCardProps {
  children: ReactNode;
  onSubmit?: FormEventHandler<HTMLFormElement> | undefined;
  className?: string;
}

const FormCard = ({ children, onSubmit, className }: FormCardProps) => {
  return (
    <form
      className={`border rounded-xl flex flex-col  max-w-5xl ` + className}
      onSubmit={(event) => {
        event.preventDefault();
        if (!onSubmit) {
          return;
        }
        onSubmit(event);
      }}
    >
      {children}
    </form>
  );
};

export {  FormCard };
