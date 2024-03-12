class User {
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }
  // Método para obtener usuario
  getUserInformation() {
    //para consultas respuestas > 1 campo debemos agrupar
    const query = {
      name: this.name,
      _id: this.id,
    };
    return query;
  }
  // Método para establecer nueva informacion
  setUdateInformation(newName,newId) {
    this.name = newName;
    this.id = newId;
  }
}

// Ejemplo de creación de un objeto usuario apartir de class User
const user1 = new User("John Doe", 1);
const user2 = new User("Diana Doe", 2);
console.log(user1);
console.log(user2);
// Modificar el nombre y la identificación del usuario
console.log("------Actualizados");
user1.setUdateInformation("Alfredo Morales",4);
user2.setUdateInformation("Jose Ramirez",5);
console.log(user1);
console.log(user2);
