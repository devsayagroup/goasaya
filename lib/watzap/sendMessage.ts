// lib/watzap/sendMessage.ts
export async function sendKitchenWhatsApp(
  phone: string,
  message: string
) {
  const res = await fetch("https://api.watzap.id/v1/send_message", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      "api-key": process.env.WATZAP_API_KEY,
      sender: process.env.WATZAP_SENDER_NUMBER,
      number: phone,
      message,
    }),
  });

  const data = await res.json();

  if (!res.ok || data?.status !== true) {
    console.error("Watzap Error:", data);
    throw new Error("Failed to send WhatsApp message");
  }

  return data;
}
