/********************************
 * 
 * foo
 *   |--> header
 *   |--> create_col [7] :будет слушать перетаскивание
 *        |
 *        |--> create_head
 *        |--> create_txt[n] <--works
 *              |-->checkbox
 *              |-->job
 *      
 *    
 ********************************/



// Эту хрень нужно будет засунуть в базу данных
let works=[
    {day:'пн',value:'work'},
    // {day:'пн',value:'dance'},
    // {day:'вт',value:'chill'}
]

let air



//Стили CSS
const styles={

    hdr: {
        backgroundColor: '#222',
        height: '150px',
        padding: '20px',
        color: 'white',
        textAlign: 'center',
        fontSize: '80px'
          }  ,

    content:
    {
        backgroundColor: 'yellow',
        padding: '20px',
        color: '#222',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-around',
    } ,

    job: {

        border: 'thick double #32a1ce',
        color: '#222',
    },
    jobOk: {

        border: 'thick double #32a1ce',
        color: 'red',
    },
}



//Заголовок колонки дня недели
function create_head(day)
{
    let p=document.createElement("p")
    
        let h1=document.createElement("h1")
        h1.innerHTML=day

        let inpt=document.createElement("input")
        inpt.onkeypress=(ev)=>{
            if(ev.key==='Enter')
            {
                if(ev.target.value)
                {
                    works.push({day:day, value:ev.target.value})
                    ev.target.value=''
                    let jobs=document.getElementById(day)
                    let old =create_txt(day)
                    jobs.innerHTML=old.innerHTML    
                }

                
            }
        }
 
        p.appendChild(h1)
        p.appendChild(inpt)
        
    return p
}

function co(ev)
{
    ev.getPar
    // console.log(ev.checked)
    if(ev.checked){
        Object.assign(ev.parentElement.parentElement.lastChild.style,styles.jobOk)}
    else{
        Object.assign(ev.parentElement.parentElement.lastChild.style,styles.job)
    }
    // ev.parentElement.parentElement.lastChild
    // ev.target.parentElement

}

function asd(evt)
{
    evt.target.classList.add(`.selected`);
    air=evt.target
    console.log("Iks");
}


function create_job(value)
{
    let main=document.createElement("div", ondragstart=(evt) => {
        evt.target.classList.add(`.selected`);
        air=evt.target
        console.log("Iks");
      })
    
    main.draggable=true;


    let job=document.createElement("span")
    let checkb=document.createElement("span")

    // let check=document.createElement("input")
    // check.type='checkbox'
    checkb.innerHTML='<input type="checkbox" onclick="co(this);"}>'


    job.innerHTML=value
    Object.assign(job.style,styles.job)
    main.appendChild(checkb)
    main.appendChild(job)
    return main
}

//колонка с заданиями под днём недели
function create_txt(day)
{
    let d=document.createElement("div")
    d.id=day
    
    works.map((days)=>{
        // console.log(days.day)
        if(days.day===day)
        {

            d.appendChild(create_job(days.value))

        }
    }
    );
    

    return d
}



const getNextElement = (cursorPosition, currentElement) => {
    // Получаем объект с размерами и координатами
    const currentElementCoord = currentElement.getBoundingClientRect();
    // Находим вертикальную координату центра текущего элемента
    const currentElementCenter = currentElementCoord.y + currentElementCoord.height / 2;
  
    // Если курсор выше центра элемента, возвращаем текущий элемент
    // В ином случае — следующий DOM-элемент
    const nextElement = (cursorPosition < currentElementCenter) ?
        currentElement :
        currentElement.nextElementSibling;
  
    return nextElement;
  };




//1 из 7 контейнеров дней недели
function create_col(day){
    let col=document.createElement("div")
    
    col.classList.add(day);
    col.className='.tasks__list '+day

col.addEventListener(`dragover`, (evt) => {
    // Разрешаем сбрасывать элементы в эту область
    evt.preventDefault();
  

    // Находим элемент, над которым в данный момент находится курсор
    const currentElement = evt.target;
    

      if(currentElement.classList.contains(`.tasks__list`)){
        console.log("->"+currentElement.classList[1]);
      }

  });

  col.addEventListener(`drop`, (evt) => {
    // Разрешаем сбрасывать элементы в эту область
    evt.preventDefault();
  

    // Находим элемент, над которым в данный момент находится курсор
    const currentElement = evt.target;
    

      if(currentElement.classList.contains(`.tasks__list`)){
        console.log(air.lastChild.innerText+"->"+currentElement.classList[1]);
        works.push({day:currentElement.classList[1], value:air.lastChild.innerText})
        let jobs=document.getElementById(currentElement.classList[1])
        let old =create_txt(currentElement.classList[1])
        jobs.innerHTML=old.innerHTML
      }

  });

    let h=create_head(day)
    let t=create_txt(day)
    col.appendChild(h)
    col.appendChild(t)

    // Object.assign(col.style,style)
    return col
}


// content качает
function foo()
{

    const weeks=[
        "пн",
        "вт",
        "ср",
        "чт",
        "пт",
        "сб",
        "вскр"
    ]

    let main_div = document.createElement("div");
    
    let hdr = document.createElement("div");
    hdr.innerHTML="JanuaRь"
    Object.assign(hdr.style,styles.hdr)

    let content = document.createElement("div");
    weeks.map((day)=>{
            let d=create_col(day,works)
            content.appendChild(d)
        });
        
    Object.assign(content.style,styles.content)


    main_div.appendChild(hdr)
    main_div.appendChild(content)

    return main_div

}



// export default foo
