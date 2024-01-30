let input = document.getElementById('input');
let taskList = document.getElementById('list-container');

function myTask() {
    if (input.value === '') {
        alert('You must write something!');
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = input.value;
        taskList.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    input.value = '';
    saveData();
}

taskList.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveData()
    }
    else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData()
    }
}, false);

function saveData() {
    localStorage.setItem('data', taskList.innerHTML);
}
function showData() {
    taskList.innerHTML = localStorage.getItem('data');
}
showData();