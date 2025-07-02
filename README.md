
// Final popup element (create it dynamically or ensure it's in your HTML)
let finalPopup = document.createElement("div");
finalPopup.id = "final-popup";
finalPopup.style.cssText =
  "display:none; position:fixed; top:40%; left:50%; transform:translate(-50%, -50%);" +
  "background-color:#222; color:#fff; padding:30px 40px; border-radius:12px;" +
  "font-size:28px; font-weight:bold; z-index:2000; box-shadow:0 0 20px rgba(0,0,0,0.8);" +
  "text-align:center; max-width:90vw; cursor:pointer;";
document.body.appendChild(finalPopup);

function showFinalPopup(message) {
  finalPopup.innerHTML = `${message}<br><small style="font-size:16px; margin-top:10px; display:block; cursor:pointer;">Click to close</small>`;
  finalPopup.style.display = "block";

  finalPopup.onclick = () => {
    finalPopup.style.display = "none";
    resetGame();
  };
}




