let items = ['Wake Up Early.','Drink Water Before Anything Else.','Make Time for Movement.','Spend Time Outside'];


let list = document.querySelector('#myList');

items.forEach(function(item){
    CreateItem(item);
});




list.addEventListener('click',function(item){

    if(item.target.tagName=='LI'){
        item.target.classList.toggle('checked');
        ToogleDeleteButton();
    }

});


document.querySelector('#deleteAll').onclick=function(){
    let elements = document.querySelectorAll('.checked');

elements.forEach(function(item){
    item.style.display='none';
})

}


function ToogleDeleteButton(){
    let checkList = document.querySelectorAll('.checked');

    if(checkList.length > 0){
        document.querySelector('#deleteAll').classList.remove('d-none');
    }else{
        document.querySelector('#deleteAll').classList.add('d-none');
    }

    console.log(checkList.length)
}

document.querySelector('#btnCreate').onclick = function(){

    let item = document.querySelector('#txtItem').value;


    if(item === ''){
        alert('Lütfen gerekli alanı doldurunuz.')
        return;
    }
    CreateItem(item);

}

function CreateItem(item) {
    let li = document.createElement('li');
    let t = document.createTextNode(item);
    li.className='list-group-item';
    li.appendChild(t);
    list.appendChild(li);


    let span = document.createElement('span');
    let text= document.createTextNode('\u00D7');
    span.className='close';
    span.appendChild(text);
    li.appendChild(span);

    span.onclick = function(){
        let li = this.parentElement;
        li.style.display='none';
        li.classList.remove('checked');
    }
}