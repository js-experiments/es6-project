class Model {
  constructor (fields, url) {
    this.url = url !== undefined ? url : "";
    this.fields = fields !== undefined ? fields : {};
  }

  toJson () {
    return this.fields;
  }

  get (fieldName) {
    return this.fields[fieldName];
  }

  set (fieldName, value) {
    this.fields[fieldName] = value;
    return this;
  }

  id() { return this.get("_id");}

  save () {
     return this.id() == undefined
       ? $.ajax({
          url: this.url,
          type: "POST",
          data: this.fields,
          success: (data) => { this.fields = data; }
         })
       : $.ajax({
          url: `${this.url}/${this.id()}`,
          type: "PUT",
          data: this.fields,
          success: (data) => { /*foo*/ }
         });
  }

  fetch (id) {
    return id == undefined
      ? $.ajax({
          url: `${this.url}/${this.id()}`,
          type: "GET",
          data: this.fields,
          success: (data) => { this.fields = data; }
        })
      : $.ajax({
          url: `${this.url}/${id}`,
          type: "GET",
          data: this.fields,
          success: (data) => { this.fields = data; }
        });
  }

  delete (id) {
    return id == undefined
      ? $.ajax({
          url: `${this.url}/${this.id()}`,
          type: "DELETE",
          data: this.fields, success: (data) => { this.fields = data; }
        })
      : $.ajax({
          url: `${this.url}/${id}`,
          type: "DELETE",
          data: this.fields,
          success: (data) => { this.fields = data; }
        });
  }
}

export default Model;

