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
    {day:'пн',value:'dance'},
    {day:'вт',value:'chill'}
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

    border:'thick double #32a1ce',
    color: '#222',
    }  ,
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
                console.log(ev.target.value)
                works.push({day:day,value:ev.target.value})
                let t=document.getElementById(day)
                let old =create_txt(day)
                t.innerHTML=old.innerHTML
            }
        }
        p.appendChild(h1)
        p.appendChild(inpt)
        
    return p
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
            let dd=document.createElement("p")
            console.log("okl"+days.value)
            dd.innerHTML=days.value
            Object.assign(dd.style,styles.job)
            d.appendChild(dd)

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
