import Cookies from './cookies.js';

document.addEventListener("DOMContentLoaded", function () {
    const pollForm = document.getElementById("poll-form");
    const Count1 = document.getElementById("1-count");
    const Count2 = document.getElementById("2-count");
    const Count3 = document.getElementById("3-count");
    const Count4 = document.getElementById("4-count");
    const Count5 = document.getElementById("5-count");
    const Count6 = document.getElementById("6-count");
    let votes1 = 0;
    let votes2 = 0;
    let votes3 = 0;
    let votes4 = 0;
    let votes5 = 0;
    let votes6 = 0;
    let voted = false;
 
    pollForm.addEventListener("submit", function (e) {
        // It will help to prevent the submission of 
        // form, so that following code can execute
        e.preventDefault();
        const formData = new FormData(pollForm);
        const userVote = formData.get("vote");
        if (voted === false) {
            if (userVote === "1") {
                votes1++;
            } else if (userVote === "2") {
                votes2++;
            }
            else if (userVote === "3") {
                votes3++;
            }
            else if (userVote === "4") {
                votes4++;
            }
            else if (userVote === "5") {
                votes5++;
            }
            else if (userVote === "6") {
                votes6++;
            }
            updateResults();
            voted = true;
        }
            
    });
 
    function updateResults() {
        Count1.textContent = Count1;
        Count2.textContent = Count2;
        Count3.textContent = Count3;
        Count4.textContent = Count4;
        Count5.textContent = Count5;
        Count6.textContent = Count6;
    }
});
