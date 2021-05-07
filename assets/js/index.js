(() => {
  const endpoint = 'https://jy-makes-music-api.herokuapp.com';

  const listenForLinkClick = () => {
    const linkContainerItems = document.getElementsByClassName('link-container');
    if (linkContainerItems?.length > 0) {
      for (const link of linkContainerItems) {
        link.addEventListener('click', () => {
          fetch(`${endpoint}/analytics`, {
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
    fetch(`${endpoint}/landing_page_analytics`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        landing_page_analytic: {
          is_mobile: window?.navigator?.userAgentData?.mobile,
          referrer: document.referrer
        }
      }),
    })
  }

  const nudge = () => {
    const hour = new Date().getHours();
    if (hour > 7 && hour < 23) {
      fetch('https://elais-ireland.herokuapp.com', {
        method: 'GET',
        mode : 'no-cors',
      })
    }
  }

  setInterval(nudge, 15 * 60000);
  listenForLinkClick();
  listingForProfileLoad();
})()