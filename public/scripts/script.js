const button = document.querySelector('button');
const input = document.querySelector('#written-term-input');

const search = () => {
  const writtenTerm = document.querySelector('#written-term-input').value;
  const category = document.querySelector('#category-select').value;
  const writtenLanguage = document.querySelector('#language-select').value;

  const url = `http://10.154.0.2:3001/api/v1/video_urls/find_urls?written_term=${writtenTerm}&category=${category}&written_language=${writtenLanguage}`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      const urls = data.urls;

      const videoContainer = document.getElementById('video-container');
      videoContainer.innerHTML = '';

      urls.forEach(url => {
        const iframe = document.createElement('iframe');
        iframe.setAttribute('src', url);
        iframe.setAttribute('width', '560');
        iframe.setAttribute('height', '315');
        iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
        iframe.setAttribute('allowfullscreen', '');
        videoContainer.appendChild(iframe);
      });
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
};

button.addEventListener('click', search);

input.addEventListener('keydown', event => {
  if (event.keyCode === 13) { // 13 is the keycode for Enter
    event.preventDefault(); // prevent the default form submission behavior
    button.click(); // simulate a click on the search button
  }
});
