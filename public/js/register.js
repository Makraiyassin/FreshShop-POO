document.querySelector("#submitregister").addEventListener("click",()=>{
    let pass = document.querySelector("#pass").value;
    let confpass = document.querySelector("#confpass").value;
    if (pass == confpass) {
        document.querySelector("#submitregister").insertAdjacentHTML("beforebegin",`
        <p class="alert alert-success text-center">your acount is creat, you can connected</p>
        `)
    }else{        
        document.querySelector("#submitregister").insertAdjacentHTML("beforebegin",`
        <p class="alert alert-danger text-center">error password</p>
        `)
    }
})