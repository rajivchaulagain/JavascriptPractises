const date = document.getElementById("date");
const submitBtn = document.getElementById("submit");
const para = document.getElementById("para");
const getDescription = document.getElementById("get-description")
//max date validation
function maxDate() {
  const today = new Date().toISOString().split("T")[0];
  date.setAttribute("max", today);
}
maxDate();

getDescription.style.display = "none";

// age calculator
function calculateAge() {
  const today = new Date();
  const selectedDate = new Date(date.value);

  const diffInMs = today - selectedDate;
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

  const years = Math.floor(diffInDays / 365);
  const months = Math.floor((diffInDays % 365) / 30);
  const days = diffInDays % 30;

  const age = `${years === 0 ? `` : `${years} year${years !== 1 ? "s" : ""}`} ${months} month${
    months !== 1 ? "s" : ""
  } and ${days} day${days !== 1 ? "s" : ""}`;

  if (date.value === "") {
    alert("Please select your birth date");
  } else {
    para.innerHTML = `Your age is ${age}`;
    getDescription.style.display = 'block'
  }
  
}