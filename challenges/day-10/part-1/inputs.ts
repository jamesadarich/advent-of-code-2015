export class Inputs {
  public static examples: any[] = [
    {
      input: {
         value: '1',
         iterations: 1
      },
      expected: 2
   },

     {
       input: {
          value: '11',
          iterations: 1
       },
       expected: 2
    },

     {
       input: {
          value: '1',
          iterations: 2
       },
       expected: 2
    },

     {
       input: {
          value: '21',
          iterations: 1
       },
       expected: 4
    },

     {
       input: {
          value: '1',
          iterations: 3
       },
       expected: 4
    },

     {
       input: {
          value: '1211',
          iterations: 1
       },
       expected: 6
    },

     {
       input: {
          value: '1',
          iterations: 4
       },
       expected: 6
    },

     {
       input: {
          value: '111221',
          iterations: 1
       },
       expected: 6
    },

     {
       input: {
          value: '1',
          iterations: 5
       },
       expected: 6
    }
];


  public static challenge: any = {
     value: '1113122113',
     iterations: 40
 };
}
