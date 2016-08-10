function saveOptions(e) {
  chrome.storage.local.set({
    entryCount: parseInt(document.querySelector("#entryCount").value)
  });
}

function restoreOptions() {
  chrome.storage.local.get("entryCount", (res) => {
    document.querySelector("#entryCount").value = res.entryCount;
  });
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);
