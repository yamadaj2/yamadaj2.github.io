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
    const init = {
      method: 'GET',
      mode : 'no-cors',
    }

    fetch('https://elais-ireland.herokuapp.com', init)
    fetch('https://elais-ireland.ie', init)
  }

  setInterval(nudge, 3600);
  listenForLinkClick();
  listingForProfileLoad();
})()