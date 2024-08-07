import * as React from 'react';

interface FormFooterProps {
  children: React.ReactNode;
}

const FormFooter = ({ children }: FormFooterProps) => {
  return (
    <div className="flex justify-end gap-2 m-4">
      {children}
    </div>
  );
};

export { FormFooter };
