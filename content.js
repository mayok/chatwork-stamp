const inject = () => {
  const el = document.createElement("script");
  el.setAttribute("type", "text/javascript");
  el.setAttribute("src", chrome.extension.getURL("public/bundle.js"));
  document.body.appendChild(el);
};

const wait = () => {
  setTimeout(() => {
    if (document.getElementById("_chatText")) {
      inject();
      return;
    }
    wait();
  }, 123);
};
wait();
