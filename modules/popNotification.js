// notification mensaje
function popNotification(message) {
  const notification = document.querySelector(".notification");
  notification.textContent = message;
  notification.classList.add("show");

  setTimeout(() => {
    notification.classList.remove("show");
  }, 3000);
}

export default popNotification;
