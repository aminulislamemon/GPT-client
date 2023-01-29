export const fetchResponse = async (chat) => {
  try {
    const response = await fetch("https://gpt-server-two.vercel.app/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        message: chat.map((message) => message.message).join("\n"),
      }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
