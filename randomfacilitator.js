var names;

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}

function randomInt(n) {
  // Return a random number from in [0, n[
  return Math.floor(Math.random()*n);
}

function randomMember(arr) {
  // Return a random member of the array
  return arr[randomInt(arr.length)]
}


names = [];
let element_list = document.getElementById('list');
element_list.innerText = names;


document.getElementById('button_add').addEventListener('click', (event) => {
  names.push(getNumberOrString(document.getElementById('text').value));
  if (!!names.length) {
    let element_list1 = document.getElementById('list1');
    let new_ol = document.createElement('ol');
    new_ol.innerText = getNumberOrString(document.getElementById('text').value);

    element_list1.appendChild(new_ol);
  }

});

document.getElementById('button1').addEventListener('click', (event) => {
  if (!!names.length) {
    let element_list2 = document.getElementById('list');
    element_list2.innerText = randomMember(names);
    let element_select = document.getElementById('select');
    element_select.innerText = randomMember(names);
  }

});