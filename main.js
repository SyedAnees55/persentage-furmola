
let button = document.getElementById('calculate');

button.addEventListener('click', function() {
    const obtainedMarks = parseFloat(document.getElementById('om').value);
    const totalMarks = parseFloat(document.getElementById('tm').value);
    
    // Check if both inputs are zero
    if (isNaN(obtainedMarks) || isNaN(totalMarks) || totalMarks === 0) {
        rezult.textContent = 'Please enter your marks (try again)';
    return;
 } else {
        // Calculate percentage only if totalMarks is greater than zero
        let percentage = (obtainedMarks / totalMarks) * 100;
        rezult.textContent = `Your Percentage is ${percentage.toFixed(0)}%`;
        if (percentage >=90  && percentage <=100) {
            rezult2.textContent =`Your Grad is A+`
            console.log('Your grade is A');
        }else  if (percentage >=80  && percentage <=90) {
            rezult2.textContent =`Your Grad is A`
            console.log('Your grade is A');
        }else  if (percentage >=70  && percentage <=80) {
            rezult2.textContent =`Your Grad is B`
            console.log('Your grade is A');
        }else  if (percentage >=50  && percentage <=70) {
            rezult2.textContent =`Your Grad is c`
            console.log('Your grade is c');
        }else  if (percentage >=40  && percentage <=50) {
            rezult2.textContent =`Your Grad is E`
            console.log('Your grade is A');
        }else  if (percentage >30  && percentage <=40) {
            rezult2.textContent =`Your Grad is F`
            console.log('Your grade is F');
        }else  if (percentage >=20 && percentage <=30) {
            rezult2.textContent =`Fail`
            console.log(' Fail');
        }
    }
   
});
