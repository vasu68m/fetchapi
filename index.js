async function api(){
    let data = await fetch("https://jsonplaceholder.typicode.com/users")
            //    .then((res)=>{res.json()})
            //    .then((res)=>{return res})
        data = await data.json()
        console.log(data)
        document.getElementById("db").innerHTML = data.map((val)=>
            `<tr>
            <td class="mid">${val.name}</td>
            <td class="mid">${val.email}</td>
            <td class="mid">${val.username}</td>
            <td class="mid">${val.website}</td>
            <td class="mid">${val.phone}</td>
            </tr>`
        ).join("");       

}

api();