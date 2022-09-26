const newCardHandler = async (event) => {
  event.preventDefault();

  const question = document.querySelector('#question').value.trim();
  const answer = document.querySelector('#answer').value.trim();

  if (question && answer) {
    const response = await fetch(`/api/cards`, {
      method: 'POST',
      body: JSON.stringify({ question, answer }),
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
