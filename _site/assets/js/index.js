(() => {
  const linkContainerItems = document.getElementsByClassName('link-container');

  if (linkContainerItems?.length > 0) {
    for (const link of linkContainerItems) {
      link.addEventListener('click', ({currentTarget: {id}}) => console.log(id));
    }
  }
})()