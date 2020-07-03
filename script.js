function addForm(){
    let root = document.querySelector('#root');
    
    let container = document.createElement('div');
    container.classList.add('container');
    
    let descr = document.createElement('h1');
    descr.innerText= 'TODO APPLICATION'
    descr.classList.add('descr');
    
    
    let input = document.createElement('input');
    input.placeholder = 'ENTER TASK...'
    input.classList.add('inputText')
    
    
    let btn = document.createElement('button');
    btn.innerText = 'ADD'
    btn.classList.add('addBtn');
    
    let removeAllBtn = document.createElement('button');
    removeAllBtn.innerText = 'REMOVE ALL'
    removeAllBtn.classList.add('removeAllBtn');

    let list = document.createElement('ul');
    list.classList.add('list');
    

    container.appendChild(descr);
    container.appendChild(input);
    container.appendChild(btn);
    container.appendChild(removeAllBtn);
    container.appendChild(list);
    
    root.appendChild(container);
    
    
    btn.onclick = function () {
        addLi(container);
    }
    
    function addLi(Ui){
        
        let li = document.createElement('li');
        li.classList.add('li');
        let text = document.createTextNode(input.value);
        let removeButton = document.createElement('button');
        
        removeButton.className = 'removeItem';
        removeButton.innerHTML = "REMOVE";
        removeButton.setAttribute("onclick", "removeItem(this);");
        
        li.appendChild(text);
        li.appendChild(removeButton);
        
        
        Ui.appendChild(li);
        list.appendChild(li);           
        
        removeAllBtn.onclick = function() {
            list.innerHTML = "";
        }

    }
      
}
        function removeItem(item) {
            let parent = item.parentElement;
            parent.parentElement.removeChild(parent);
        }




addForm()

