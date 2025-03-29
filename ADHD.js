socket.emit('disconnect')

function replaceHTMLIntoScaledDualIframe(topIframeLink, bottomIframeLink) {
    // 1. Create two iframe elements.
    const topIframe = document.createElement('iframe');
    const bottomIframe = document.createElement('iframe');

    // 2. Set the iframes' sources to the provided links.
    topIframe.src = topIframeLink;
    bottomIframe.src = bottomIframeLink;

    // 3. Set the iframes' styles to fill half of the screen each.
    topIframe.style.position = 'fixed';
    topIframe.style.top = '0';
    topIframe.style.left = '0';
    topIframe.style.width = '100%';
    topIframe.style.height = '50%';
    topIframe.style.border = 'none';
    topIframe.style.zIndex = '9999';

    bottomIframe.style.position = 'fixed';
    bottomIframe.style.bottom = '0';
    bottomIframe.style.left = '0';
    bottomIframe.style.width = '100%';
    bottomIframe.style.height = '50%';
    bottomIframe.style.border = 'none';
    bottomIframe.style.zIndex = '9999';

    // 4. Clear the existing document body content.
    document.body.innerHTML = '';

    // 5. Append the iframes to the document body.
    document.body.appendChild(topIframe);
    document.body.appendChild(bottomIframe);

    // 6. Prevent scrolling of the main document.
    document.body.style.overflow = 'hidden';
}

// Example usage:
replaceHTMLIntoScaledDualIframe(
    'https://bonziworld-revived-1.onrender.com',
    'https://www.youtube.com/watch?v=VXsECdmqAqQ' // Replace with your desired bottom iframe link.
);
