import "./styles/toggle.scss";

export function attachToggleListener(id, callback) {
    const toggleElement = document.querySelector(id);
    toggleElement.addEventListener('click', callback)
}

export function initToggle(id, callback) {
    var toggleInput = document.getElementById(id);

    function toggleWidget() {
      var isChecked = toggleInput.checked;

      if (isChecked) {
        // Widget is turned on
        callback('right')
        console.log("Widget is RIGHT");
      } else {
        // Widget is turned off
        callback('left')
        console.log("Widget is LEFT");
      }
    }

    toggleInput.addEventListener("change", toggleWidget);
}