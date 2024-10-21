const input = document.getElementById("enterTask");

input.addEventListener('keyup', function (event) {
    if (event.key !== 'Enter') {
        return;
    }
    if (input.value == "") {
        return;
    }
    const li = document.createElement('li');
    const span = document.createElement('span');
    const div = document.createElement('div');
    const inp = document.createElement('input');
    const button = document.createElement('button');

    inp.type = "checkbox";
    inp.className = "check";
    button.innerText = "X";
    button.className = "btn";
    div.append(inp, button);
    span.innerText = input.value;
    li.append(span, div);
    li.className = "li-item";
    document.body.querySelector("ul").append(li);
    input.value = "";

    button.addEventListener('click', function () {
        li.parentElement.removeChild(li);
    });

    inp.addEventListener('change', function () {
        if (inp.checked) {
            span.style.textDecoration = "line-through";
        } else {
            span.style.textDecoration = "";
        }
    })

    taskArr.push(input.value);
console.log(taskArr);
    localStorage.setItem('arr', JSON.stringify(taskArr));

});