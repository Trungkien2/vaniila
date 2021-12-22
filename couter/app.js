const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');
let count = 0;
btns.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        const style= e.currentTarget.classList;
        if(style.contains('down')){
            count--;
            if(count<0)count=0;
        }    
        else if(style.contains('reset'))count =0;
        else count++;
        value.textContent = count;
    })
})
