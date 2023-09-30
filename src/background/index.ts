chrome.contextMenus.create({
  id: 'hoverscan',
  title: '示例菜单',
  contexts: ['selection'], // 只在选中文本时显示菜单
})

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === 'hoverscan') {
    chrome.tabs.sendMessage(tab.id!, {
      type: 'hoverscan',
      text: info.selectionText,
    })
  }
})

export {}
