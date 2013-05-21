var theList = new Array();

function addNewItem(){
    
    
    // Get user input and add to item to array
    inputItem = document.myForm.inputListItem.value;
    theList.push(inputItem);
    
    
    // Output list items to be printed, checkbox, remove button, and the user-inputted list item
    var listItem=document.createElement("li");
    listItem.setAttribute("class", "list-item");
    
    var btn=document.createElement("input");
    btn.setAttribute("type", "button");
    btn.setAttribute("class", "show-button btn");
    btn.setAttribute("value", "Remove");
    
    var inputCheckbox=document.createElement("input");
    inputCheckbox.type = "checkbox";
    inputCheckbox.name = "list";
    inputCheckbox.className = "list-checkbox";
    
    var inputText=document.createTextNode(inputItem);
    
    listItem.appendChild(inputCheckbox);
    listItem.appendChild(inputText);
    listItem.appendChild(btn);
    
    document.getElementById("listOfItems").appendChild(listItem);
    
    
    
    var lastIndex = theList.length-1; // Current index in array
    $('.show-button').hide();
    checkboxListener();   //  Envoke listener function to wait for checkbox to be checked to show "Remove" Button
    removeButtonListener(lastIndex); // Envoke listener function to wait for remove button to be clicked
}


function checkboxListener(){
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

function removeButtonListener(lastIndex) {  
   $('.btn').on('click', function() {
        $(this).parent('.list-item').remove();
	theList.splice(lastIndex, 1);
        console.log('in removeButtonListener Function...theList: ' + theList + 'lastIndex' + lastIndex);
	console.dir(theList);
	console.dir(lastIndex);
    });
}

