const validate = values => {
     const error= {};
     error.email= '';
     error.password= '';
     var ema = values.email;
     var pass = values.password;
     /*************Email Validation *******************/
     if(values.email === undefined){
          ema = '';
     }
     if(ema.length < 8 && ema !== ''){
          error.email= 'too short';
     }
     let atpos=ema.indexOf("@");
     let dotpos=ema.lastIndexOf(".");
     console.log(ema,"emaemaemaemaema")
     if((ema.length> 2) && ( atpos<1 || dotpos < atpos+2 || dotpos+2>=ema.length)){
          error.email= 'Please enter a valid e-mail address';
     }
     /*************Password Validation *******************/
     if(pass && pass.length > 8){
          error.password= 'Password must be at least 8 char long ';
     }
     if(values.password === undefined){
          pass = '';
     }
     return error;
};
export default validate;
