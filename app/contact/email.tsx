import { Dispatch } from "react";

export const sendEmail = async (
  customMessage: string,
  firstName: string,
  subject: string,
  email: string,
  setLoadingState: Dispatch<boolean>,
  sendToast: () => void
) => {
  setLoadingState(true);
  try {
    const response = await fetch("api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: customMessage,
        firstName: firstName,
        subject: subject,
        email: email,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Erro ao enviar o email:", errorData.error);
      setLoadingState(false);
      return;
    }

    const data = await response.json();
    console.log("Email enviado com sucesso:", data);
    sendToast();
    setLoadingState(false);
  } catch (error) {
    console.error("Erro na requisição:", error);
    setLoadingState(false);
  }
};
