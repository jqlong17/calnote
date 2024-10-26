// background.js
chrome.runtime.onInstalled.addListener(() => {
    console.log("Sleek Sidebar Calendar & Notes extension installed.");
});

chrome.action.onClicked.addListener(() => {
    console.log("Action button clicked."); // 日志记录
    // 获取当前活动标签页
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs.length > 0) {
            const tab = tabs[0];
            console.log("Active tab found:", tab); // 调试信息
            console.log("Attempting to execute script on tab:", tab.id); // 额外日志

            chrome.scripting.executeScript({
                target: { tabId: tab.id },
                files: ['sidebar.js'] // 加载 sidebar.js
            }, () => {
                if (chrome.runtime.lastError) {
                    console.error("Error executing script:", chrome.runtime.lastError);
                } else {
                    console.log("Script executed successfully."); // 成功日志
                }
            });
        } else {
            console.error("No active tab found.");
        }
    });
});

// 这里的 toggleSidebar 函数在背景脚本中没有被调用，建议移除
function toggleSidebar() {
    console.log("toggleSidebar function called."); // 调用日志
    let sidebar = document.getElementById('mySidebar');
    if (!sidebar) {
        // 创建侧边栏
        sidebar = document.createElement('div');
        sidebar.id = 'mySidebar';
        sidebar.style.width = '300px';
        sidebar.style.height = '100%';
        sidebar.style.position = 'fixed';
        sidebar.style.top = '0';
        sidebar.style.right = '0';
        sidebar.style.backgroundColor = 'white';
        sidebar.style.boxShadow = '-2px 0 5px rgba(0,0,0,0.5)';
        sidebar.style.zIndex = '1000';
        sidebar.innerHTML = `
            <h2>📅 Mini Calendar</h2>
            <div id="calendar"></div>
            <h2>📝 Daily Notes</h2>
            <textarea id="noteInput" placeholder="Write your notes here..."></textarea>
        `;
        document.body.appendChild(sidebar);
        console.log("Sidebar created."); // 创建成功日志
    } else {
        // 切换显示/隐藏
        sidebar.style.display = sidebar.style.display === 'none' ? 'block' : 'none';
        console.log("Sidebar toggled."); // 切换日志
    }
}
