// notification mensaje
export const popNotification = (message) => {
  const notification = document.querySelector(".notification");
  notification.textContent = message;
  notification.classList.add("show");

  setTimeout(() => {
    notification.classList.remove("show");
  }, 3000);
};

export const popNotification2 = (message) => {
  const notification = document.querySelector(".notification2");
  notification.textContent = message;
  notification.classList.add("show");

  setTimeout(() => {
    notification.classList.remove("show");
  }, 3000);
};
