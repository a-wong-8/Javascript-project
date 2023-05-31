import "./styles/toggle.scss";

export function attachToggleListener(id, callback) {
    const toggleElement = document.querySelector(id);
    toggleElement.addEventListener('click', callback)
}

export function initToggle(id, callback) {
    let toggleInput = document.getElementById(id);

    function toggleWidget() {
      let isChecked = toggleInput.checked;

      if (isChecked) {
        // Widget is turned on
        callback('right')
        // console.log("Widget is RIGHT");
      } else {
        // Widget is turned off
        callback('left')
        // console.log("Widget is LEFT");
      }
    }

    toggleInput.addEventListener("change", toggleWidget);
}