

const crudApi = 'https://reqres.in/api/users';


const obtenerusers = async( id ) => {
        const resp = await fetch(`${crudApi}/${id}`);
        const data = await resp.json();

        return data;
}



const crearUser = async( user ) => {
    const resp = await fetch( crudApi, {
        method: 'POST',
        body: JSON.stringify( user ),
        headers: {
            'Content-Type': 'application/json'
        }
    } );

    return await resp.json();
}

const updateUsers = async(id, user ) => {

    const resp = await fetch(`${ crudApi }/${ id }`,{
        method: 'PUT',
        body: JSON.stringify (user),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return await resp.json();
}

const deleteUser = async( id ) => {
    const resp = await fetch(`${ crudApi}/${ id }`,{
        method: 'DELETE'
    });
    return (resp.ok)? 'usuario borrado': 'el usuario no se pudo borrar';
}



export{
    obtenerusers,
    crearUser,
    updateUsers,
    deleteUser
}