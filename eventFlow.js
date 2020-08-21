window.addEventListener('DOMContentLoaded', (event) => {
    let parentElement = document.querySelector('#parent');
let childElement = document.querySelector('#child');

parentElement.addEventListener('click', () => {
    console.log('ParentClicked');
}, true);

childElement.addEventListener('click', () => {
    console.log('child event Clicked');
})

})
