export default {

      name:{
         
            required:{value:true,message:'missing name'},
            minLength:{value:3,message:'name too short'},
            maxLength:{value:30,message:'name too long'}
      },
      stock:{
            required:{value:true,message:'missing stock'},
            min:{value:0,message:'stock cannot be negatuve'},
            max:{value:100,message:'stock cannot be over 100'} 
      },
      price:{

            required:{value:true,message:'missing price'},
            min:{value:0,message:'price cannot be negatuve'},
            max:{value:1000,message:'price cont exceed 1000'}
      }
}