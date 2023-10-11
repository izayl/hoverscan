// add context menu only when installed
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: 'hoverscan',
    title: 'Scan this address',
    contexts: ['selection'],
  })
})

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === 'hoverscan') {
    chrome.tabs.sendMessage(tab.id, {
      name: 'hoverscan:show-card',
      body: {
        selectionText: info.selectionText,
      },
    })
  }
})

export {}
