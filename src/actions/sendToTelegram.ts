"use server";

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

export const sendToTelegram = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail") as string;
  const message = formData.get("message") as string;

  const text = `📩 New Contact Form Submission:\n\n✉️ Email: ${senderEmail}\n💬 Message: ${message}`;

  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: text,
        parse_mode: "Markdown",
      }),
    });

    if (!res.ok) {
      console.error("[SEND TO TELEGRAM Not OK]: ", res);

      return {
        error: "Failed to send message.",
      };
    }

    return {};
  } catch (error) {
    console.error("[SEND TO TELEGRAM ERROR]: ", error);
    return {
      error: "Failed to send message.",
    };
  }
};
