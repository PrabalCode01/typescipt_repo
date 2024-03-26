// class User{
//     public email:string
//     private name: string
//     readonly city: string = "Jaipur"
//     constructor(email: string, name: string){
//         this.email = email,
//         this.name = name
//     }
// }

class User{
  
    readonly city: string = "Jaipur"
    constructor(
         public email: string,    // good way of writting
         public name: string){
        
    }
}

const prabal = new User("abc@gmail" , "Prabal")
// prabal.city = "delhi"