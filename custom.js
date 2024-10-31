function displayName(name){
    return name;
}

function computeTwoNumbers(num1,num2){
    return num1 + num2;
}

function confirmSubmission(){
    if(confirm("Do You Want to Submit?")){
        alert(computeTwoNumbers(12,3));
    }
}

function inputTwoNumbers(){
    let name = prompt("Enter Your Name");
    var num1 = parseInt(prompt("Enter First Number"));
    var num2 = parseInt(prompt("Enter Second Number"));
    alert("Your Name is: " + name + "\nFirst Number: " + num1 + "\nSecond Number: " + num2 + "\nThe Sum of Two Numbers is: " + computeTwoNumbers(num1, num2));
}

function checkGrade(){
    var grade = parseInt(prompt("Enter Your Grade"));
    alert(grade >= 75 ? "You Failed" : "You Passed");
}

function calculateGrade() {
    let name = prompt("Enter Your Name");
    let totalScore = parseFloat(prompt("Enter Total Score"));
    let totalItems = parseInt(prompt("Enter Total Items")); 
    
    let grade = -4 * (totalScore / totalItems) + 5;
    
    let remarks = (grade >= 3.1) ? "Failed" : "Passed"; 

    alert("Your Name is: " + name + "\nYour Total Grade is: " + grade.toFixed(2) + "\nRemarks: " + remarks);
    document.write("<br><br>" + "Your Name is: " + name + "<br>" + "Your Total Grade is: " + grade.toFixed(2) + "<br>" + "Remarks: " + remarks);
    console.log("Your Name is: " + name + "\nYour Total Grade is: " + grade.toFixed(2) + "\nRemarks: " + remarks);
}