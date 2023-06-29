// notification mensaje
export const popNotification = (message) => {
  const notification = document.querySelectorAll(".notification");
  notification.forEach((element) => {
    element.textContent = message;
    element.classList.add("show");

    setTimeout(() => {
      element.classList.remove("show");
    }, 3000);
  });
};

export const popNotification2 = (message) => {
  let notification = document.querySelectorAll(".notification2");
  Array.from(notification).forEach((element) => {
    element.textContent = message;
    element.classList.add("show");

    setTimeout(() => {
      element.classList.remove("show");
    }, 3000);
  });
};
