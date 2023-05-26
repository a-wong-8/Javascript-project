export function attachToggleListener(id, callback) {
    const toggleElement = document.querySelector(id);
    toggleElement.addEventListener('click', callback)
}
