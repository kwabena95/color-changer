// initialize a counter
let count = 0;
// grab UI elements
const value = document.querySelector('#counter-value'),
    btns = document.querySelectorAll('.btn');

// loop through btns
btns.forEach((btn) => {
    // add event listener to the buttons
    btn.addEventListener('click', (e) => {
        // target button classes and store in a variable
        let eventTarget = e.currentTarget.classList;

        // set a if statement
        if (eventTarget.contains('increase')) {
            count++;
            // change color of counter
            value.style.color = 'green';
            value.style.transition = '1s ease-in-out'
        }
        else if (eventTarget.contains('decrease')) {
            count--;
            // change color of counter
            value.style.color = 'red';
            value.style.transition = '1s ease-in-out'
        }
        else {
            count = 0;
            // change color of counter
            value.style.color = 'white';
            value.style.transition = '1s ease-in-out'
        }


        // display count
        value.textContent = count;
    })
})
