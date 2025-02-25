function createContextMenu() {
    chrome.contextMenus.create({
      id: "searchRutracker",
      title: "Найти в Rutracker",
      contexts: ["selection"]
    });
  }
  
  // Регистрация контекстного меню при запуске сервис-воркера
  createContextMenu();
  
  // Обработка клика по пункту меню
  chrome.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId === "searchRutracker") {
      var searchUrl = "https://rutracker.org/forum/tracker.php?nm=" + encodeURIComponent(info.selectionText);
      chrome.tabs.create({ url: searchUrl });
    }
  });