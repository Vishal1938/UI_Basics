function getUsers(){
    fetch("https://reqres.in/api/users?page=2")
    .then((res)=>{return res.json()})
    .then((data)=>{
       var table = document.createElement('table')
       var tr=document.createElement('tr')
       var th1=document.createElement('th')
      
       var th2=document.createElement('th');
       var th3=document.createElement('th');
       table.appendChild(tr)
       tr.appendChild(th1)
       tr.appendChild(th2)
       tr.appendChild(th3)

       th1.innerText="IMAGE"
       th2.innerText="NAME"
       th3.innerText="EMAIL"

       table.style.width="75%"
       table.style.margin="40px auto"
       table.style.boxShadow="0 0 10px black"
       table.style.padding="20px"
       tr.style.backgroundColor="black"
       tr.style.color="white"
       table.cellPadding="10px"


       data.data.map((ele)=>{
        var tr1=document.createElement('tr')
        var td1=document.createElement('td')
        var td2=document.createElement('td')
        var td3=document.createElement('td')


        img.src=ele.avatar
        img.width="100"
        img.height="100"
        td1.appendChild(img)
        td2.innerText=ele.first_name+ele.last_name
        td3.innerText=ele.email

        tr1.appendChild(td1)
        tr1.appendChild(td2)
        tr1.appendChild(td3)

        table.appendChild(tr1)
        
       })

       document.getElementById('root').appendChild(table)
    }).catch((error)=>{
        console.log(error)
        alert("Something Went Wrong")
    })
}