
function showAlert() {
    alert("欢迎来到我的个人网站！🎉");
}

function confirmAction() {
    const result = confirm("确定继续吗");
    if (result) {
        alert("确认！");
    } else {
        alert("取消");
    }
}

function askName() {
    const name = prompt("请输入你的名字");
    if (name) {
        alert("Hi," + name + " !");
    } else {
        alert("请重新输入");
    }
}

// 获取表单元素
const form = document.getElementById("contactForm");

//监听器（事件处理器）
form.addEventListener("submit", function (event) {
    event.preventDefault(); // 阻止表单提交后刷新页面

    // 获取输入的值
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // 简单验证
    if (!name || !email || !message) {
        alert("请完整填写所有字段！");
        return;
    }

    // 显示提交内容
    alert(`谢谢你的留言，${name}！\n\n邮箱：${email}\n内容：${message}`);

    // 可选：清空表单
    form.reset();
}
);

document.getElementById("submitMessage").addEventListener("click", function () {
    const username = document.getElementById("usernameInput").value.trim();
    const message = document.getElementById("messageInput").value.trim();

    if (message === "") {
        alert("请输入留言内容！");
        return;
    }

    // 创建留言容器 div
    const messageBox = document.createElement("div");
    messageBox.className = "message-box";

    // 创建留言内容
    const messageText = document.createElement("p");
    messageText.innerHTML = `<strong>${username || "匿名"}:</strong> ${message}`;

    // 添加时间戳
    const time = document.createElement("small");
    const now = new Date();
    time.textContent = now.toLocaleString();

    // 创建删除按钮
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = () => {
        messageBox.remove(); // 删除这条留言
    };

    // 把内容拼接到留言容器里
    messageBox.appendChild(deleteBtn);
    messageBox.appendChild(messageText);
    messageBox.appendChild(time);

    // 添加到留言区域
    document.getElementById("messageContainer").appendChild(messageBox);

    // 清空输入框
    document.getElementById("usernameInput").value = "";
    document.getElementById("messageInput").value = "";
});

//document.getElementByClassName
//document.getElementByTagName
//docment.getElementById用于获取ID
const toggleButton = document.getElementById("toggle-theme");
//document.querySelector范围更广，ID和元素名
const head = document.querySelector("header");
toggleButton.addEventListener("click", function () {
    head.classList.toggle("dark");
});



//箭头函数
const detailButtons = document.querySelectorAll(".view-detail");
detailButtons.forEach((button, index) => {
    button.addEventListener("click", function () {
        alert("你点击了项目" + (index + 1) + " 的 详细按钮");
    });
});

