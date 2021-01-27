var vue = new Vue ({
    el: '#root',
    data: {
      counter: 0,
      immagini: [
        'https://images.unsplash.com/photo-1520242279429-1f64b18816ef?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzl8fGJlYWNofGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60  ',
        'https://images.unsplash.com/photo-1509233725247-49e657c54213?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDF8fGJlYWNofGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1560294572-28b9874e5ada?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzR8fGJlYWNofGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1504681869696-d977211a5f4c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDJ8fGJlYWNofGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
      ]
    },
    methods: {
      nextImg(){
        if (this.counter == this.immagini.length-1) {
          this.counter = 0;
        } else {
          this.counter++;
        }
      },
      prevImg(){
        if (this.counter == 0) {
          this.counter = this.immagini.length-1;
        } else {
          this.counter--;
        }
      },
      pallinoAttivo(i){
        this.counter = i;
      }
    }
  });