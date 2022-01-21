// Add your code here
// const formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle",
//   };
  
//   // method: "POST" is missing from the object below
//   const configurationObject = {
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//     },
//     body: JSON.stringify(formData),
//   };
  
//   fetch("http://localhost:3000/dogs", configurationObject)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (object) {
//       console.log(object);
//     })
//     .catch(function (error) {
//       alert("Bad things! Ragnarők!");
//       console.log(error.message);
//     });

function submitData(userName, userEmail) {
    const configurationObject = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: userName,
          email: userEmail,
        }),
      };
      
      return fetch("http://localhost:3000/users", configurationObject)
      .then(function (response) {
              return response.json();
            })
            .then(function (object) {
              const body = document.querySelector('body')
              const h1 = document.createElement('h1')
              h1.textContent = object.id
              body.appendChild(h1)
            })
            .catch(function (error) {
              const body = document.querySelector('body')
              const h2 = document.createElement('h2')
              h2.textContent = error.message
              body.appendChild(h2)
            });
}
