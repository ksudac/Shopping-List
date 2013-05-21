var theList = new Array();
function addNewItem(){

    var printList = "";
    var inputList = new Array();
    
    inputList = document.myForm.inputListItem.value;
    theList.push(inputList);
    
    for (var i = 0; i < theList.length; i++ ) {
        printList += "<li class='list-item'><input type='checkbox' name='list' class='list-checkbox'>" + theList[i] + "<input type='button' value='Remove' class='show-button btn'></li>";
    }    
    document.getElementById('outputList').innerHTML =  printList;
    
    $('.show-button').hide();
    showButtons();
    removeItem(inputList);
}


function showButtons(){
    $('.list-checkbox').on('click', function(){
        if (this.checked){
            $(this).parent('.list-item').find('.show-button').show();
            $(this).parent('.list-item').css({'text-decoration': 'line-through'});
        }
        else {
            $(this).parent('.list-item').find('.show-button').hide();
            $(this).parent('.list-item').css({'text-decoration': 'none'});
        }
    });
}

function removeItem(inputList) {
   $('.btn').on('click', function() {
        $(this).parent('.list-item').remove();
        console.log('In removeItem Function...TheList.length: ' + theList.length);
        $(this).parent('.list-item').remove();
        var itemIndex = $(this).child.indexOf(this.inputList);
        console.log('inputList: ' + inputList + 'itemIndex' + itemIndex);
        removeItemFromArray(inputList, itemIndex);
    });
}

function removeItemFromArray(inputList, itemIndex) {
    console.log('inputList: ' + inputList + 'itemIndex' + itemIndex);
}
