// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  let sumProducts = Number(price.innerText) * quantity.value;
  console.log(sumProducts);
  const subtotal = product.querySelector('.subtotal span');
  subtotal.innerText = sumProducts;
  return sumProducts;
}
//const price = document.querySelector('.price span');
//const quantity = document.querySelector('.quantity input');
//console.log(Number(price.innerText) * quantity.value)

//updateSubtotal(document);

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test
  let total = 0;

  // ITERATION 2
  const products = document.getElementsByClassName('product');
  for (const pro of products) {
    updateSubtotal(pro);
    total += updateSubtotal(pro);
    console.log(total);
  }
  // ITERATION 3
  const totalElement = document.querySelector('#total-value span');
  //console.dir(totalElement)
  totalElement.innerText = total;
  return total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  const parentElement = target.parentNode.parentNode.parentNode;
  parentElement.removeChild(target.parentNode.parentNode);
}

// ITERATION 5

function createProduct() {
  const newProductName = document.getElementById('new-product-name').value;
  const newProductNo = document.getElementById('new-product-no').value;
  //newProductNo = Number(newProductNo.toFixed(2));
  const tableBody = document.querySelector('tbody');

  const newTableRow = document.createElement('tr');
  newTableRow.className = 'product';

  tableBody.appendChild(newTableRow);

  const newTDName = document.createElement('td');
  newTDName.className = 'name';

  newTableRow.appendChild(newTDName);

  const nameSpan = document.createElement('span');
  nameSpan.innerText = newProductName;

  newTDName.appendChild(nameSpan);

  const newTDPrice = document.createElement('td');
  newTDPrice.className = 'price';
  newTDPrice.innerText = '$';

  const priceSpan = document.createElement('span');
  priceSpan.innerText = newProductNo;

  newTDPrice.appendChild(priceSpan);

  newTableRow.appendChild(newTDPrice);

  const newTDQuantity = document.createElement('td');
  newTDQuantity.className = 'quantity';

  const newInput = document.createElement('input');
  newInput.type = 'number';
  newInput.value = 0;
  newInput.min = 0;
  newInput.placeholder = 'Quantity';

  newTDQuantity.appendChild(newInput);
  newTableRow.appendChild(newTDQuantity);

  const newTDSubtotal = document.createElement('td');
  newTDSubtotal.className = 'subtotal';
  newTDSubtotal.innerText = '$';

  const subSpan = document.createElement('span');
  subSpan.innerText = 0;

  newTDSubtotal.appendChild(subSpan);
  newTableRow.appendChild(newTDSubtotal);

  const newTDAction = document.createElement('td');
  newTDAction.className = 'action';

  const removeBtn = document.createElement('button');
  removeBtn.className = 'btn btn-remove';
  removeBtn.innerText = 'Remove';
  removeBtn.addEventListener('click', removeProduct);

  newTDAction.appendChild(removeBtn);
  newTableRow.appendChild(newTDAction);

  document.getElementById('new-product-name').value = '';
  document.getElementById('new-product-no').value = 0;
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removeBtns = document.getElementsByClassName('btn-remove');
  for (let btn of removeBtns) {
    btn.addEventListener('click', removeProduct);
  }
  const addProductBtn = document.getElementById('create');
  addProductBtn.addEventListener('click', createProduct);
});
