chrome.runtime.onInstalled.addEventListener(function(details) {
    if (details.reason === "install") {
        chrome.tabs.create({ url: './html/form.html' });
    }
});