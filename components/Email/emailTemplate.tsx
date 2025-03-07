import * as React from "react";

interface EmailTemplateProps {
  message: string;
  email: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  message,
  email,
}) => (
  <div>
    <p>from: {email}</p>
    <span>{message}</span>
  </div>
);
