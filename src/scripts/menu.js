
document.querySelector('.nav2').classList.toggle('hidetag')

document.querySelector('.hamburger').addEventListener('click', () => {
    if(window.innerWidth<500){
        let nav2=document.querySelector('.nav2').classList.contains('hidetag')
        if (nav2){
            document.querySelector('.nav2').classList.remove('hidetag')
        }else{
            document.querySelector('.nav2').classList.toggle('hidetag')
        }
    }
});
