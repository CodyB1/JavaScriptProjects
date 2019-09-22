const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
let lastChecked = false;
function handleCheck(e) {
  // Check if they had the shift key down
  //And check that they are cheking it
  let inBetween = false;
  if(e.shiftKey) {
    //loop over every single checkboxe
    checkboxes.forEach(checkbox => {
      console.log(checkbox);
      if(checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
        console.log('Starting to check them inbetween')
      }

      if(inBetween) {
        checkbox.checked = true;
      }
    });
}
  lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
