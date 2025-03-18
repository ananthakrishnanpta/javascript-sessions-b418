// Coding session >> March 18, 2025

// From this file onwards we are connected to events.html

// >> Event handling

    // >> Mouse events
    // click, doubleclick, mouseover, mouseout


    function alertMe(){
        alert("This is an alert from function `alert me` ");
    }

    function changeButtonBG(){
        
        const btnclr = document.getElementById('bt1').style ;

        if (btnclr.backgroundColor == "lightblue"){
            btnclr.backgroundColor = "white";
        }
        else {
            btnclr.backgroundColor = "lightblue";
        }
    }

    function changeTDBG(){
        const tds = document.getElementsByTagName('td');
        for (cell of tds){
            cell.style.backgroundColor = "lightblue";
        }
        
        
    }