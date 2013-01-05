chrome.commands.onCommand.addListener(function(command) {
  chrome.tabs.getSelected(null, function(tab) {
    if (command == "move-tab-right") {
      chrome.tabs.move(tab.id, {"index": tab.index+1});
    } else if (command == "move-tab-left") {
      // We don't want to cycle
      if (tab.index > 0)
        chrome.tabs.move(tab.id, {"index": tab.index-1});
    } else if (command == "move-tab-first") {
      chrome.tabs.move(tab.id, {"index": 0});
    } else if (command == "move-tab-last") {
      chrome.tabs.move(tab.id, {"index": 10000});
    }
  });
});