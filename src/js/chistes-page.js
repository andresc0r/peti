  import {obtenerChiste} from './http-provider';  


  const body = document.body;
  let btnOtro, olList;
  let correlativo = 0;



  const crearChistesHtml = () => {

    const html = `
    
        <h1 class="mt-5">chistes</h1>


        <br>

        <button class="btn -btn-primary">Chistes</button>


        <ol class="mt-2 list-group">
        </ol>
    `;

    const divChistes = document.createElement('div');

    divChistes.innerHTML = html; 


    body.append(divChistes);

  }


  const eventos = () => {
    olList = document.querySelector('ol');
    btnOtro = document.querySelector('button');

    btnOtro.addEventListener('click', async()=>{
      
      btnOtro.disabled = true;

      dibujarChiste( await obtenerChiste());

      btnOtro.disabled = false;


    })   
  }


  const dibujarChiste = ( chiste,  ) => {

    correlativo++;
    const olItem = document.createElement('li');

    olItem.innerHTML = `${correlativo}<br>${ chiste.id}</br>: ${ chiste.value}`;
    olItem.classList.add('list-group-item');

    olList.append(olItem)

  }


  



  export const init = () => {
    crearChistesHtml();
    eventos();
  }