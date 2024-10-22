

var isOpen=false
function switchMenu(){    
    if(window.innerWidth<500){
        if(!isOpen){
            document.querySelector('.nav2').classList.remove('hidetag')
            isOpen=true

        }else{
            document.querySelector('.nav2').classList.add('hidetag')
            isOpen=false
        }
    }
}
