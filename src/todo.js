/********************************
 * 
 * foo
 *   |--> header
 *   |--> create_col [7]
 *        |
 *        |--> create_head
 *        |--> create_txt[n] <--works
 *      
 *    
 ********************************/



// Эту хрень нужно будет засунуть в базу данных
let works=[
    {day:'пн',value:'work'},
    // {day:'пн',value:'dance'},
    // {day:'вт',value:'chill'}
]



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
                    works.push({day:day, value:ev.target.value, checked:false })
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
    console.log(ev.checked)
    if(ev.checked){
        Object.assign(ev.parentElement.parentElement.lastChild.style,styles.jobOk)}
    else{
        Object.assign(ev.parentElement.parentElement.lastChild.style,styles.job)
    }
    // ev.parentElement.parentElement.lastChild
    // ev.target.parentElement

}


function create_job(value)
{
    var main=document.createElement("div")
    let job=document.createElement("span")
    let checkb=document.createElement("span")

    let check=document.createElement("input")
    check.type='checkbox'
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
        console.log(days.day)
        if(days.day===day)
        {

            d.appendChild(create_job(days.value))

        }
    }
    );
    
    return d
}




//1 из 7 контейнеров дней недели
function create_col(day){
    let col=document.createElement("div")
    
    
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
