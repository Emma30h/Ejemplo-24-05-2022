window.onload = iniciar;

function iniciar(){

    let contenedor = document.getElementById("container");
    
    
    async function cargarUsers(){
        try{
            const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
            let users = await response.json();
            let infoUser = ``;
            users.forEach(user =>{
                
                console.log(`id: ${user.id} nombre: ${user.name}`);
    
                // let infoUser = document.createElement("p");
                infoUser+= `
                <div class="info">
                -ID: ${user.id} <br> 
                -Nombre: ${user.name} <br>
                -E-mail: ${user.email} <br>
                -Ciudad: ${user.address.city} <br>
                -Calle: ${user.address.street} <br>
                <br>
                
                </div>`;
                // contenedor.appendChild(infoUser);
                document.getElementById("container").innerHTML = infoUser;
            
            });
        }catch(error){
            console.log("Ha ocurrido un error");
        }
    };
    
    cargarUsers();
};
