(() => {
  const linkContainerItems = document.getElementsByClassName('link-container');
  if (linkContainerItems?.length > 0) {
    for (const link of linkContainerItems) {
      link.addEventListener('click', () => {
        fetch('http://localhost:3001/analytics', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            analytics: {
              click_type: link?.id,
              is_mobile: window?.navigator?.userAgentData?.mobile,
              referrer: document.referrer
            }
          }),
        })
      });
    }
  }
})()