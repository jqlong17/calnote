document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM fully loaded and parsed."); // 日志记录
    loadCalendar();
    loadNotes();
});

function loadCalendar() {
    console.log("Loading calendar..."); // 日志记录
    const calendarElement = document.getElementById('calendar');
    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();

    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    calendarElement.innerHTML = `<h3>${monthNames[month]} ${year}</h3>`;
    
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    for (let day = 1; day <= daysInMonth; day++) {
        const dayElement = document.createElement('div');
        dayElement.textContent = day;
        dayElement.className = 'day';
        if (day === today.getDate()) {
            dayElement.classList.add('today');
        }
        calendarElement.appendChild(dayElement);
    }
    console.log("Calendar loaded successfully."); // 日志记录
}

function loadNotes() {
    console.log("Loading notes..."); // 日志记录
    const noteInput = document.getElementById('noteInput');
    const today = new Date().toISOString().split('T')[0];

    chrome.storage.local.get([today], (result) => {
        if (result[today]) {
            noteInput.value = result[today];
            console.log("Notes loaded for today:", result[today]); // 日志记录
        } else {
            console.log("No notes found for today."); // 日志记录
        }
    });

    noteInput.addEventListener('input', () => {
        chrome.storage.local.set({ [today]: noteInput.value });
        console.log("Note input updated:", noteInput.value); // 日志记录
    });
}

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
