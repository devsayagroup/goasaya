export async function checkWatzapKey() {
  const res = await fetch("https://api.watzap.id/v1/checking_key", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      "api-key": process.env.WATZAP_API_KEY,
    }),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error("Watzap API key invalid");
  }

  return data;
}
