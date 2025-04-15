
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