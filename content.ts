import { isAddress } from "ethers"

export {}
console.log(
  "You may find that having is not so pleasing a thing as wanting. This is not logical, but it is often true."
)

document.addEventListener("mouseup", () => {
  const selectedText = window.getSelection()?.toString()
  if (selectedText && isAddress(selectedText)) {
    // chrome.runtime.sendMessage({ text: selectedText })
    console.log({ selectedText })
  }
})
