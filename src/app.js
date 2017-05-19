import MutationSummary from 'mutation-summary';

const container = document.querySelector('#container');
const createElementButton = document.querySelector('#create-element');
const innerHTMLButton = document.querySelector('#inner-html');

const handleUpdateBody = ([summary]) => {
  console.log(summary.added);
};

const observer = new MutationSummary({
  callback: handleUpdateBody,
  queries: [{
    element: '*'
  }]
});

createElementButton.addEventListener('click', () => {
  const childNode = document.createElement('h2');
  childNode.textContent = 'Upa';
  container.appendChild(childNode);
});

innerHTMLButton.addEventListener('click', () => {
  container.innerHTML = `
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
  `;
});