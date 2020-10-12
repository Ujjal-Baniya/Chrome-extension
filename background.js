function MyGenericClick(info, tab){
    console.log("Clicked", info, tab)
}

function MyImageClick(info, tab){
    console.log("Image Clicked", info, tab)
    chrome.windows.create({
        "url":"www.facebook.com/sharer.php?u=" + info.url + "display=popup",
        "type" : "popup"
    })
}

chrome.contextMenus.create({
    "title": "share",
    "contexts" : ["page"],
    "onclick": MyGenericClick
})

chrome.contextMenus.create({
    "title": "share",
    "contexts" : ["image"],
    "onclick": MyImageClick
})