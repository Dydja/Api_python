function deleteCustomer() {
  let id = document.getElementById("para").value;
  console.log(id);
  fetch(`http://127.0.0.1:4000/api/v1/users/${id}`, {
    method: "DELETE",
    body: null,
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}

// //console.log(window);
// const button = document.getElementById("id");
// const url = "http://127.0.0.1:4000/api/v1/users/" + button.id;

// fetch(url)
//   .then((response) => {
//     // console.log(response);
//     return response.json();
//   })
//   .then((json) => {
//     console.log(json);
//   });

/**
 * Suppression d'un user
 *querySelectorAll permet de selectionner tout les button avec leur id
 */
// let customers = document.querySelectorAll("button");
// for (let customer of customers) {
//   customer.addEventListener("click", deleteCustomer);
// }

// function deleteCustomer() {
//   //alert("ok");
//   //recuperons les id
//   var id = document.querySelector("para");
//   console.log(this.id);
//   //notre fecth prend deux para lurl,id et le methode
//   fetch(`http://127.0.0.1:4000/api/v1/users/${this.id}`, {
//     method: "DELETE",
//   }).then((response) => response.json());
// }
