// Hobbies dropdown: opens on click or tap, closes on outside click or Escape
document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".subnavbtn");
  const menu = document.getElementById("hobby-menu");
  if (!button || !menu) return;

  const setOpen = (open) => {
    menu.classList.toggle("show", open);
    button.setAttribute("aria-expanded", String(open));
  };

  button.addEventListener("click", (event) => {
    event.stopPropagation();
    setOpen(!menu.classList.contains("show"));
  });
  document.addEventListener("click", (event) => {
    if (!menu.contains(event.target)) setOpen(false);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menu.classList.contains("show")) {
      setOpen(false);
      button.focus();
    }
  });
});
