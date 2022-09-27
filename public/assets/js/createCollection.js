const newCollectionHandler = async (event) => {
  event.preventDefault();

  const collection = document.querySelector('#collection').value.trim();

  if (collection) {
    const response = await fetch(`/api/collections`, {
      method: 'POST',
      body: JSON.stringify({ name: collection }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to create collection');
    }
  }
};

document
  .querySelector('.new-collection')
  .addEventListener('submit', newCollectionHandler);
