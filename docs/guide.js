/* Copy buttons for the client guides: hidden until the clipboard API is available. */
(function () {
  if (!navigator.clipboard) return;
  document.querySelectorAll(".value").forEach(function (row) {
    var text = row.querySelector("[data-copy]");
    var btn = row.querySelector(".copy");
    if (!text || !btn) return;
    btn.hidden = false;
    btn.setAttribute("aria-label", "Copy " + row.querySelector("b").textContent);
    btn.addEventListener("click", function () {
      navigator.clipboard.writeText(text.textContent.trim()).then(function () {
        btn.textContent = "Copied";
        setTimeout(function () { btn.textContent = "Copy"; }, 2000);
      });
    });
  });
})();
