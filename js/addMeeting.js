document.getElementById('addButton').onclick = function() {
    var mtgTitle = document.getElementById('mtgTitle').value;
    var mtgDate = document.getElementById('start').value;
    var mtgTime = document.getElementById('mtgTime').value;
    var titleErrorElement = document.getElementById('titleError');
    var datetimeErrorElement = document.getElementById('datetimeError');
    var defaultDate = "2024-07-01";
    var defaultTime = "12:00";

    titleErrorElement.textContent = ""; // Clear any previous title error messages
    datetimeErrorElement.textContent = ""; // Clear any previous datetime error messages

    if (mtgTitle === "") {
        titleErrorElement.textContent = "会議名を入力してください。";
    } else if (mtgDate === defaultDate && mtgTime === defaultTime) {
        datetimeErrorElement.textContent = "日時を選択してください。";
    } else {
        window.location.href = 'meetingMenu.html';
    }
};
