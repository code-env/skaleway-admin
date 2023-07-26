"use client";

import React, { HtmlHTMLAttributes, useState } from "react";

interface formProps extends HtmlHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode;
}

const Form: React.FC<formProps> = ({ children, ...props }) => {
  return <form {...props}>{children}</form>;
};

export default Form;
