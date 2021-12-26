import { ar } from 'date-fns/locale';
import react from 'react';

export class User {
  // static async moreCoins(amountCoins) {

  // params = {
  //   body: { amount: amountCoins},
  //   method: "post",
  //   mode: "cors"
  // }

  //  Lo fundamental que te puedo tirar de los gets y post, más allá del tutorial de acámica es:
  // En los get, al fetch pasale {headers}, no te olvides de las llaves.
  // Y en los post, al Body ponele: JSON.stringify(elBonitoObjetoQueSea)

  static getCoins = async (userCoins) => {
    const params = {
      // body: { amount: amountCoins},
      method: 'post',
      mode: 'cors',
    };

    const getParams = {
      // body: { amount: amountCoins},
      method: 'get',
      mode: 'cors',
    };

    // const url = new URL()

    let response = await fetch('https://coding-challenge-api.aerolab.co/user/points', params);

    const headers = {
      'Content Type': 'application/json',
      Authorization: 'Bearer <token>',
    };

    try {
      let coinsResponse = await response;
      if (coinsResponse.status !== 200) throw new Error('Invalid Response');

      coinsResponse = await coinsResponse.json();
      alert(`Added ${response['New Points']} coins`);
    } catch (error) {
      console.log(error);
      alert('Lo sentimos, la operación no pudo realizarse');
    }
    // }
  };

  // /* volver a traer el usuario luego de agreagar monedas */

  // gets, hay que pasarle el objeto headers, encerrarlo en un objeto

  // para los metodos post

  async traer() {
    const params = {
      method: 'post',
      mode: 'cors',
      headers: 'algo de headers',
      body: JSON.stringify({ amount: 'tantos' }), // ESTO SOLUCIONA EL PROBLEMA DE LOS POST
    };
    let url = '';
    let resp = await fetch(url, params);
  }

  // hacer una clase y tener metodos abstractos que poder usar
}
