
// alert("connected")
// addEventListener('Add Todo')
// userInput = {

// }
// let getInput = JSON.stringify(userInput)



var addButton = document.getElementById('add')
addButton.addEventListener('click', addItem)

var removeButton = document.getElementById('remove')
removeButton.addEventListener('click', removeItem)


function addItem(){
    var input = document.getElementById('input');
    var item = input.value;
    var ul = document.getElementById('list')
    var textNode = document.createTextNode(item)  // gets the value of the input and adds it to the list

    if (item === ''){
        return false;
    }
    else {
        // create li
       var li = document.createElement('li')
       // create checkbox
        var checkbox = document.createElement('input')
        checkbox.type = 'checkbox';
        checkbox.setAttribute('id', 'check')
        // create label

        var label = document.createElement('label')
        // label.setAttribute('for', 'item') // optional
 
        // update web page
        ul.appendChild(label)
        li.appendChild(checkbox)
        label.appendChild(textNode)
        li.appendChild(label)
        ul.insertBefore(li, ul.childNodes[0]);
        li.className = 'visual'
    }
}

function removeItem(){
    var li = ul.children
    for (let index = 0; index < li.length; index++){
        while (li[index] && li[index].children[0].checked){
            ul.removeChild(li[index])
        }
    }
}