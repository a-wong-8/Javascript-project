import "./styles/toggle.scss";

export function initToggle(id, callback) {
    let toggleInput = document.getElementById(id);

    function toggleWidget() {
      let isChecked = toggleInput.checked;

      if (isChecked) {
        // console.log("Widget is RIGHT");
        callback('right')
      } else {
        // console.log("Widget is LEFT");
        callback('left')
      }
    }

    toggleInput.addEventListener("change", toggleWidget);
}