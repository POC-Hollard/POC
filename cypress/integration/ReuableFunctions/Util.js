class Util{

     makeid(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
          counter += 1;
        }
        return 'test'+result;
    }

    makeRandomPassportNumber(){
     return Math.floor(100000000 + Math.random() * 900000000).toString();
    }

     generateRandomNumber(n) {
      var add = 1, max = 12 - add;   // 12 is the min safe number Math.random() can generate without it starting to pad the end with zeros.   
      
      if ( n > max ) {
              return generate(max) + generate(n - max);
      }
      
      max        = Math.pow(10, n+add);
      var min    = max/10; // Math.pow(10, n) basically
      var number = Math.floor( Math.random() * (max - min + 1) ) + min;
      
      return ("" + number).substring(add); 
}

}

export default Util