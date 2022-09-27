const newCardHandler = async (event) => {
  event.preventDefault();

  const question = document.querySelector('#question').value.trim();
  const answer = document.querySelector('#answer').value.trim();
  const collection_id = document.querySelector('#id').value.trim();
  console.log('COLLECTION ID', collection_id);
  if (question && answer && collection_id) {
    const response = await fetch(`/api/cards`, {
      method: 'POST',
      body: JSON.stringify({ question, answer, collection_id }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to create card');
    }
  }
};

document.querySelector('.new-card').addEventListener('submit', newCardHandler);
