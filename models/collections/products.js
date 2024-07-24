const db = require("../../config/database");

module.exports = class Products {
  constructor(name, category, price, image) {
    (this.name = name),
    (this.category = category),
    (this.price = price),
    (this.image = image);
  }
  //me va a devolver todos los registros de mi tabla
  static getAll() {
    return db.execute("SELECT * FROM products");
  }

  //me va a crear un nuevo registro vigilar la cometa de price que devolverá un numero
  create() {
    return db.execute(
      `INSERT INTO products (name, category, price, image) VALUES ('${this.name}', '${this.category}', ${this.price}, '${this.image}')`
    );
  }

  //me va a devolver 1 registro de mi tabla
  static getById(id) {
    //obtener el recurso de la tabla que coincida con el id que me están pasado.
    return db.execute(`SELECT * FROM products WHERE products.id = ${id}`);
  }

  //me va a eliminar un registro de mi tabla
  static delete(id) {
    //eliminar el recurso que coincida con el id que me están pasando
    return db.execute(`DELETE FROM home WHERE products.id = ${id}`)
  }

  //me va a actualizar un registro de mi tabla
  update(id) {
    //actualizar el recurso que coincida con el id que me están pasando.
    return db.execute(`UPDATE products SET products.name = '${this.name}',products.category = '${this.category}', products.price = ${this.price}, products.image = '${this.image}' WHERE products.id = ${id} `)
  }
};
