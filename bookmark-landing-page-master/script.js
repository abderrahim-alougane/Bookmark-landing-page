
const TabContainer =document.querySelector('.RowTab');
const TabItems =document.querySelectorAll('.TabItem');
const AllTabs =document.querySelectorAll('.TAB');



TabContainer.addEventListener("click",(e)=>{

    let clicked =e.target.closest(".TabItem")
    console.log(clicked);
    if (!clicked) return

        AllTabs.forEach(tab => {
            tab.classList.add("d-none")
            
        });



    TabItems.forEach(tab=>{


        tab.classList.remove("Active")
        
    })



    clicked.classList.add("Active")
    console.log('passed');


    const tab =document.querySelector(`.tab${clicked.dataset.tab}`);
    console.log(tab);


        tab.classList.remove("d-none")

      


  
})



