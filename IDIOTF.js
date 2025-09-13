        const redirectUrl = "https://youareanidiot.org";

        // Function to perform the redirection
        function redirectToSite() {
            window.location.href = redirectUrl;
        }

        // Redirect after a 5-second delay
        setTimeout(redirectToSite, 50); // 5000 milliseconds = 5 seconds
