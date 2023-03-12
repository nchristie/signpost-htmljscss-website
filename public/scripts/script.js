const button = document.querySelector('button');

button.addEventListener('click', () => {
  const writtenTerm = document.querySelector('#written-term-input').value;
  const category = document.querySelector('#category-select').value;
  const writtenLanguage = document.querySelector('#language-select').value;

  const url = `http://localhost:3001/api/v1/video_urls/find_urls?written_term=${writtenTerm}&category=${category}&written_language=${writtenLanguage}`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      // Do something with the data returned by the API
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
});
