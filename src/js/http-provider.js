

const jokerApi = 'https://api.chucknorris.io/jokes/random';
const userApi = 'https://reqres.in/api/users?page=2';

const couldPresent = 'z1syyzna';
const urlClou = 'https://api.cloudinary.com/v1_1/dq6xkqlph/upload';


const obtenerChiste = async() =>{


    try {

        const resp =   await fetch(jokerApi)

        if (!resp.ok) throw `No se puede realizar la peticion`;
       
           const {icon_url, id, value} = await resp.json();
       
           return {icon_url, id, value}; 
        
    } catch (err) {
        
        throw err;

    }


}


const obtenerUsuario = async() =>{


    try{

        const resp =   await fetch(userApi)


       
        const {data:usuario} = await resp.json();
    
        return usuario; 
     
    }catch{

        throw err;

    }

    

        
   
}

const subirImagen = async( archivoSubir ) => {


    const formDtata = new FormData();
    formDtata.append('upload_preset', couldPresent);
    formDtata.append('file', archivoSubir );

    try {
        const resp = await fetch(urlClou, {
            method: 'POST',
            body: formDtata
        });


       if (resp.ok){
        const cloudResp = await resp.json();
        
        return cloudResp.secure_url;
       }else {
        throw  await resp.json();
       }
    } catch (err) {
        throw err;
    }

}



export {
    obtenerChiste, 
    obtenerUsuario,
    subirImagen
}