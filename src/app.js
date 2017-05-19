import MutationSummary from 'mutation-summary';

const container = document.querySelector('#container');
const createElementButton = document.querySelector('#create-element');
const innerHTMLButton = document.querySelector('#inner-html');
const clearButton = document.querySelector('#clear');

createElementButton.addEventListener('click', () => {
  container.innerHTML = '';
  const list = document.createElement('ul');
  for(let i=0; i<3; i++) {
    const item = document.createElement('li');
    item.textContent = `Item ${ i + 1 }`
    list.appendChild(item);
  }
  container.appendChild(list);
});

innerHTMLButton.addEventListener('click', () => {
  container.innerHTML = `
    <ul>
      <li>Item A</li>
      <li>Item B</li>
      <li>Item C</li>
    </ul>
  `;
});

clearButton.addEventListener('click', () => {
  container.innerHTML = '';
});

const handleUpdateBody = ([summary]) => {
  console.log('Added Elements', summary.added);
};

const observer = new MutationSummary({
  callback: handleUpdateBody,
  queries: [{
    element: '*'
  }]
});
