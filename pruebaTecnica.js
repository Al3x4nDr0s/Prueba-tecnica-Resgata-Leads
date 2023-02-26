// 1- Create a function that will list n numbers of the fibonacci sequence, the result must be a string containing all the numbers and separated by a space

// Example: 

// Input: 4
// Output:  "0 1 1 2"

// Input: 8
// Output: "0 1 1 2 3 5 8 13"



function generateFibonacci(number){
    let fibonacci = [0 , 1];
    for (let i = 2; i < number; i++) {
      fibonacci.push(fibonacci[i - 2] + fibonacci[i - 1]); //Calculo del siguiente numero de la secuencia.
    };
    return fibonacci.join(' ');
};

generateFibonacci(4);
generateFibonacci(8);



// 2- I want a function that given two strings will find exactly how many times does the first string occur in the second

// Example 
// Input: String 1 = "love" and String 2 = "oehdueebiflovebeifhehwushfloveiehehdnddj"
// Output: 2

//Creo una función que usa el método match() con una regex para contar la cantidad de ocurrencias de la primer cadena en la segunda.

function numberOfTimes(string1, string2) {
  const regex = new RegExp(string1, "gi"); // Con la flag "gi" deja de ser case sensitive.
  const matches = string2.match(regex);
  return matches ? matches.length : 0;
};

numberOfTimes("Love", "oehdueebiflovebeifhehwushfloveiehehdnddj");



// 3- Explain what does this code do and what happens if I put the inputs "love" and "radar" (palindrome function)

//Divido la cadena de entrada en una matriz de caracteres, invirtiendo la matriz usando el método reverse() y uniendo la matriz invertida nuevamente en una cadena. Luego, la función verifica si la cadena original es igual a la cadena invertida y devuelve verdadero si son iguales y falso si no lo son. la función no distingue entre mayúsculas y minúsculas y considera espacios o signos de puntuación como parte de la cadena de entrada.

function isPalindrome(string) {
  const reverseString = string.split("").reverse().join("").toLowerCase();
  return string.toLowerCase() === reverseString;
}

isPalindrome("racecar");

// 4- Last but not least, refactor the code below until there is nothing else to refactor in your view:
// Para JS usé la refactorización de ruby.



class GildedRose {
  constructor(items) {
    this.items = items;
  };

  updateQuality() {
    for (const item of this.items) {
      if (item.name === 'Sulfuras, Hand of Ragnaros') continue;

      if (item.name === 'Aged Brie') {
        item.sell_in--;
        item.quality = item.sell_in < 0 ? item.quality + 2 : item.quality + 1;
        item.quality = Math.min(item.quality, 50);
      } else if (item.name === 'Backstage passes to a TAFKAL80ETC concert') {
        item.sell_in--;
        if (item.sell_in < 0) {
          item.quality = 0;
        } else {
          item.quality +=
            item.sell_in < 5
              ? 3
              : item.sell_in < 10
              ? 2
              : 1;
          item.quality = Math.min(item.quality, 50);
        }
      } else {
        item.sell_in--;
        item.quality = item.sell_in < 0 ? item.quality - 2 : item.quality - 1;
        item.quality = Math.max(item.quality, 0);
      };
    };
  };
};

class Item {
  constructor(name, sell_in, quality) {
    this.name = name;
    this.sell_in = sell_in;
    this.quality = quality;
  };

  toString() {
    return `${this.name}, ${this.sell_in}, ${this.quality}`;
  };
};

