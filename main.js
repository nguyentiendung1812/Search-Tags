let input = document.querySelector('.content input')
let content= document.querySelector('.content')
let btn = document.querySelector('.btn')
let tags= ['Nodejs','react']

function renderTag(){
    content.innerHTML=''
    for(let i=0; i<tags.length;i++){
        const tag = tags[i]
        content.innerHTML += `
            <li class="card">${tag}
                <i class="fa-solid fa-xmark" onclick="removeTag(${i})"></i>
            </li>

        `
    }
    content.appendChild(input)
    input.focus()
}
renderTag()

document.addEventListener('keydown',(e)=>{
    if(e.key == 'Enter'){
        tags.push(input.value.trim())
        input.value=''
        renderTag()
    }
})

function removeTag(index){
    tags.splice(index,1)
    renderTag()
}

document.addEventListener('click',()=>{
    tags=[]
    renderTag()
})