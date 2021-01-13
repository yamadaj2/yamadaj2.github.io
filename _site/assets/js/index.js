(() => {
  const listenForLinkClick = () => {
    const linkContainerItems = document.getElementsByClassName('link-container');
    if (linkContainerItems?.length > 0) {
      for (const link of linkContainerItems) {
        link.addEventListener('click', () => {
          fetch('https://jy-makes-music-api.herokuapp.com/analytics', {
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
  }

  const listingForProfileLoad = () => {
    fetch('https://jy-makes-music-api.herokuapp.com/landing_page_analytics', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        analytics: {
          is_mobile: window?.navigator?.userAgentData?.mobile,
          referrer: document.referrer
        }
      }),
    })
  }

  listenForLinkClick();
  listingForProfileLoad()
})()