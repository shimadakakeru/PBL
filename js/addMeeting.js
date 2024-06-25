document.getElementById('addButton').onclick = function() {
    var mtgTitle = document.getElementById('mtgTitle').value;
    var mtgDate = document.getElementById('start').value;
    var mtgTime = document.getElementById('mtgTime').value;
    var errorElement = document.getElementById('error');
    var defaultDate = "2024-07-01";
    var defaultTime = "12:00";

    if (mtgTitle === "") {
        errorElement.textContent = "会議名を入力してください。";
    } else if (mtgDate === defaultDate && mtgTime === defaultTime) {
        errorElement.textContent = "日時を選択してください。";
    } else {
        errorElement.textContent = ""; // Clear any previous error messages
        window.location.href = 'meetingMenu.html';
    }
};
