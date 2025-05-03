// haz una cuenta regresiva de un lanzamiento espacial
//de 5 segundos y al finalizar mostrar un mensaje
// de despegue

// function despegue(timer) {
//   let counter = 5;

//   const id = setInterval(() => {
//     if (counter > 0) {
//       console.log('conteo: ', counter);
//       counter--;
//     } else {
//       console.log('se ha realizado el despegue');
//       clearInterval(id);
//     }
//   }, timer);
// }

// despegue(1000);

// ********************
//crear una alarma que reciba los segundos y muestre el tiempo hasta que suene

function alarma(timer) {
  let counter = 0;

  const idInterval = setInterval((value) => {
    if (counter < timer) {
      counter++;
      console.log(`timer: ${counter}`);
      
    } else {
      console.log('Alarma empezó a sonar');
      clearInterval(idInterval);
    }
  }, 1000);
}

alarma(5);
