

document.getElementById("get-activity").addEventListener("click", function() {
  fetch("https://apis.scrimba.com/bored/api/activity")
    .then(response => response.json())
    .then(data => {
     let activityEl = document.getElementById("activity")
     activityEl.textContent = data.activity
      activityEl.classList.add("glow")
    })
})