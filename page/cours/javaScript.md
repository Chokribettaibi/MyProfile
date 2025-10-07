# Learn JavaScript 

## 023 - Number

> **Number**
>
>> Double Precision (recherche internet)
>> Syntactic Sugar "_" .
>>
>> ```javaScript
>> console.log(1000000);
>> console.log(1_000_000);
>> console.log(1e6);
>> console.log(10 ** 6);
>> console.log(1000000.0);
>> ```
>>
>> e
>> **
>> With Decimal
>> Number Min Value
>>
>> ```javaScript
>> Number.MAX_SAFE_INTEGER // "9007199254740991"
>> ```
>>
>> Number Max Value
>>

```javaScript
Number.MAX_VALUE // "1.7976931348623157e+308";
Number.MAX_VALUE + 2035 = Number.MAX_VALUE // "Number.MAX_VALUE"
```

## 024 - Number Methodes

## 025 Math Object

> round, ceil, floor, main, max, pow, random, trunc [Es6]

```javaScript
Math.round(99.2); // 99
Math.round(99.5); // 100

Math.ceil(99.2); // 100 
Math.floor(99.9); // 99


Math.min(10, 20, 100, -100, 90); // -100
Math.max(10, 20, 100, -100, 90); // 100


Math.random(); // aliatoire

Math.trunc(99.5); // 99
Math.trunc(99.99); // 99
```

## 27 - String Methods

> Access With Index
> Access With charAt()
> length
> trim() => remove espace
> toUpperCase()
> toLowerCase()
> Chain Methods

```javascript
let theName = "  Ahmed  ";

theName; // "  Ahmed  "
theName[5]; // m

theName.trim(); // Ahmed
// Chain Methods
theName.trim().charAt(5).toUpperCase()
```

> String Methods
>
>> indexOf(Value [Mand], Start[Opt] 0)
>>

```javascript
let a = "Elzero Web School";

a.indexOf("Web") // 7
a.indexOf("Web", 8) // -1
```

>> lastIndexOf(Value [Mand], Start [Opt] length)
>> slice(Start [MAnd], End [Opt] Not Include End)
>> repeat(Times) [ES6]
>> split(Separator [Opt], limit [Opt])
>>

## 040 - Array Big Introduction

> **Arrays**
>
>> Create Arrys [To w Methods] new Array()
>>
>> ```javaScript
>> let myFriends = ["Ahmed", "Mohamed", "Sayed"];
>> ```
>>

## 042 - Add And Remove From Array

> Array Methods [Adding And Removing]
>
>> unshift("", "", ...) Add Element To The First
>> push("", "", ...) Add Element To The End
>> shift() Relove First Element From Array
>> pop() Remove Last Element From Array
>>

## 066 - Arrow Function Syntax

Arrow Function

> - Regular vs Arrow [Param + No Param ]
> - Multiple Lines

## 071 - Higher Order Functions - Map

Higher Order Function

> is a function that accepts functions as parameters and/or returns a function.

> Map
>
>> method creates a new array
>> populated with the resultes of calling a provided function on every element.
>> in the calling array.
>> Syntax map(callBackFunction(Element, Index, Array){}, thisArg)
>> Element => The current element beig processed in the array.
>> Index => The index of the current element being processed in the array.
>> Array => The Current Array
>> Notes
>> Map Return A New Array
>> Examples
>> Anonymous Function
>> Named Function
>>

```javaScript
let Arry = [1, 2, 3, 4];

console.log(Arry);

let NewArry = [];

for (let i = 0; i < Arry.length; i++){
    NewArry.push(Arry[i] + Arry[i] )
};

console.log(NewArry);

let addSelf = myNums.map(function(element, index, arr){
    console.log(`Current Element => ${element}`);
    console.log(`Current Index => ${index}`);
    console.log(`Array => ${arr}`);
    console.log(`This => ${this}`);
    // return element + element;
}, 10);

let addSelf = myNums.map((e)=> e + e)
console.log(addSelf);

funxtion   addition(ele) {
    return ele + ele;
}

let add = myNums.map(addition);

console.log(add);
```

## 074 Higher Order Functions - Filter

Filter

> Filter Longest Word By Number

```javaScript
let sentence = "I Love Food Code Too Playing Much";

let smallWords = sentence.split(" ").filter(function(ele){
    return ele.length <= 4;
}).join(" ");

// Ignore Numbers
let ignoreNumbers = "Elz123er4o";

let ign = ignoreNumbers
```

## 090 - Product With Title And Description

DOM [Create Elements]

```javascript
let myMainElement = document.createElement("div");
let myHeading = document.createElement("h2");
let lyParagraph = document.createElement("p");

let myHeadingText = document.createTextNode("Product");
let myParagraphText = document.createTextNode("Product");
```

Add Heading text

```javascript
myHeading.appendChild(myHeadingText);
```

Add Heading To Main Element

```javascript
myMainElement.appendChild(myHeading);
```

Add Paragraph Text

```javascript
myParagraph.appendChild(myParagraphText);
```

## 091 - Deal With Children's

```javascript
let myElemµent = document.querySelector("div");

console.log(myElement.children); \\ 
console.log(myElement.children[0]); \\
console.log(myElement.childNodes); \\ 
```

## 093 - Validate Form And Prevent Default

DOM [Events]

- Validate Form Practice
- Prevent Default

  ```javascript
  document.links[O].onclick = function (event) {
    event.preventDefault();
  };
  ```

```javascript
 let userInput = document.querySelector("[name='username']");
 let ageInput = document.querySelector("[name='age']");
 
 document.forms[0].onsubmt = function (e) {
    let userValid = false;
    let ageValid = false;

    if(userInput.value !== "" && userInput.value.length <= 10){
        userValid = true;
    };

    if(ageInput.value !== ""){
        ageValid = true;
    }
    if (userValid === false || ageValid === false){
        e.preventDefault();
    }
 }
```

## 094 - Event Simulation Click Focus Blur

 DOM [Events Simulation]

- click
- focus
- blur

```javascript
let two = document.querySelector(".two");

window.onload = function (){
    tow.focus();
};
```

cersur sorte input

```javascript
let one = document.querySelector(".one");

one.onblur = function (){
    document.links[0].click();
}
```

## 095 - Class List Object And Methods

DOM [Class List]

> classList
> -length
> -contains
> -item(index)
> -add
> -remove
> -toggle

HTML

```html
<div id="my-div" class="one two show test">Div With Many Classes</div>
```

JavaScrept:

```javascript
let element = document.getElementById("my-div");

element.classList //  DOMTokenlist(4)["one", "two", "show", "test", value: "one two shw test"]
typeof element.classList // Object
element.classList.contains("osama"); // false
element.classList.contains("two"); // true
element.classList.item("3"); // shw


```

## 115 - Destructuring Arrays

Destructuring: is a JavaScript experession that allows us to extract data from arrays, objects, and maps and set them into new, distinct variables.

```javascript
let a = 1;
let b = 2;
let c = 3;

let myFriends = ["Ahmed", "Sayed", "Ali"];

[a = "A", b, c] = myFriend;

console.log(a) // Ahmed
console.log(b) // Sayed
console.log(c) // Ali

let [x, y, z] = myFriend;

console.log(x) // Ahmed
console.log(y) // Sayed
console.log(z) // Ali

let [, k,];

console.log(k) // Sayed
```

Advanced Examples

```javascript
let myFriends = ["Ahmed", "Sayed", "Ali", ["Shady", "Amr", ["Mohamed", "Gamal"]]];

myFriends[3][2][1]; // Gamal

let [, , , [a, , [, b]]] = myFriends;

console.log(a); // Shady
console.log(b); // Gamal
```

Destructuring Array => Swapping Variables

```javascript
let book = "video";
let video = "Book";

[book, video] = [video, book];

console.log(book); // Book
console.log(video); // Video
```

Destructuring Object

```javascript
const user = {
    theName: "Osama",
    theAge: 39,
    theTitle: "Developer",
    theCountry: "Egypt"
};


```

## 118 - Destructuring Objects

```javascript
const user = {
    theName: "Osama",
    theAge: 39,
    theTitle: "Developer",
    theCountry: "Egypt",
    skills: {
        html: 70,
        css: 80,
    }
};

console.log(user.theName); // Osama 

({theName, theAge, theTitle, theContry } = user);
//_____________
const {
    theName: x, 
    theAge: a, 
    theTitle = "undif", 
    theContry: k = "tunis",
    skills: {html: h, css}
} = user;

console.log(x); // Osama
console.log(k); // Egypt
console.log(h); // 70
console.log(css): // 80


const {html: skillOne, css: skillTwo} = user.skills;
```

## 123 Set Data Types And Methods

Set Data Type

> Santax: new Set(Iterable).
>
>> Object To Store Unique Values.
>> Cannot Access Elements By Index
>> Properties:
>> siez
>> Methods
>> add
>> delete
>>

```javascript
let myData = [1, 1, 1, 2, 3]; // [1, 1, 1, 2, 3]
let myUniqueData = new Set([1, 1, 2, 3]); // {1, 1, 1, 2, 3}
let myUniqueData = new Set(myData);
let myUniqueData = new Set(myData);
```

## 124 - Set vs WeakSet And Garbage Collecto

> Set vs WeakSet
>
>> The WeakSet is weak,
>> meaning references to objects in a WeakSet are held weakly.
>> If no other references to an object stored in the WeakSet exist,
>> those objects can be garbage collected.
>>

- set => Can Store Any Data Values
- WeakSet => Collection Of Objects Only
- set => Have Size Property
- WeakSet => Does Not Have Size Property
- set => Have Keys, Values, Entries
- WeakSet => Does Not Have clear, keys, Value And Entries
- set => Can Use forEach
- WeakSet => Cannot Use forEach

## 129 - Array.copyWithin Method

Array Methods

> Array.copyWithin(Target, Start => Optional, End => Optional)
> "Copy Part Of An Array To Another Location in The Same Array"
>
>> Any Negative Value Will Count From The End
>> Target
>>
>>> Index To Copy Part To
>>> If At Or Greater Than Array Length Nothing Will Be Copied
>>> Start
>>> Index To Start copying From
>>> If Ommited = Start From Index 0
>>> End
>>> Index To End Copyinf From
>>> Not Including End
>>> If Ommited = Reach The End
>>>
>>

## 148 - Constructor Function Introduction

syntaxe:
exempl

```javascript
function User(id, username, salary){
    this.id = id;
    this.u = username;
    this.s = salary + 1000;
};

let userOne = new User(100, "Hassan", 5000);
let userTwo = new User(100, "Hassan", 5000);
let userThree7  = new User(100, "Hassan", 5000);

userOne.id // 100 
userOne.u // Hassan
```

ES 2015

```javascript
class User {
    constructor(id, username, salary){
        this.i = id;
        this.u = username;
        this.s = salary;
    }
}
```

instanceof

```javascript
userOne = new User(100, "Elzero", 5000);

userOne instanceof User // true
userOne.constructor === User // true
```

## 150 - Deal With Properties And Methods

exemple:

```javascript
class User {
    constructor(id, username, salary){
        // Propreties
        this.i = id;
        this.u = username || "Unknown";
        this.s = salary < 6000 ? salary + 500 : salary;
        this.msg = function(){
            return `Hello ${this.u} Your Salary Is ${this.s}`;
        };
    }
    // Methods
    writeMsg(){
        return `Hello ${this.u} Your Salary Is ${this.s}`;
    }
}

let userOne = new User(100, "Elzero", 500);
let userTwo = new User(101, "Ahmed", 6000);

userOne.u //
userOne.s //

userTwo.u //
userTwo.s //
```

## 151 - Update Properties And Built In Cons

constructor Function

- Update Properties
- Built In Constructors

```javascript
class User {
    constructor(id, username, salary){
        this.i = id;
        this.u = username;
        this.s = salary;
    }
    updateName(newName){
        this.u = newName;
    }
}

let userOne = new User(100, "Elzero", 5000);

userOne.u // Elzero
userOne.updateName("Osama");
userOne.u // Osama

let strOne = "Elzero";
let strTwo = new String("Elzero");

typeof strOne // String
typeof strTwp // Object

strOne instanceof String // fauls
strTwo instanceof String // true

strOne.constructor === String // true
strTwo.constructor === String // true
```

## 152 - Class Static Properties And Methods

Class

> static Properties And Methods

```javascript
class User {
    // Static Property
    static cont = 0;

    constructor(id, username, salary){
        this.i = id;
        this.u = username;
        this.s = salary;
        User.cont++;
    }
    // Static Methods
    static syHello(){
        return `Hello From Class`;
    }
    static contMembers(){
        return `${this.cont}`
    }
}
```

## 153 - Class Inheritance

Class

> Inheritance

```javascript
class  User {
    constructor(id, username){
        this.i = id;
        this.u = username;
    };
    sayHello(){
        return `Hello ${this.u}`;
    }
}

// Derived Class
class Admin extends User {
    constructor(id, username, permissions){
        super(id, username);
        this.p = permissions;
    }
}

class Superman extends Admin {
    constructor(id, username, permisson, ability){
        super(id, username, permissions);
        this.a = ability
    }
}
```

## 154 - Class Encapsulation

Encapsulation

- Class Fields Are Public Default
- Guards The Data Against Illegal Access.
- Helps To Achieve The Target Without Revealing Its Complex Details.
- Will reduce Human Errors.
- simplifies The App

```javascript
class User {
    // Provate Property
    #e;
    constructor(id, username, eSalary){
        this.i = id;
        this.u = username;
        this.#e = eSalaey;
    }
    getSalary(){
        return parseInt(this.#e);
    }
}

let userOne = new User(100, "Elzero", "5OO dt");

userOne.u // 
userOne.getSalary() * 0.3 //

```

## 155 - Prototype Introduction

Prototype

- Introduction
- Prototypes are the mechanism by which JavaScript objects
- inherit features from another

```javascript
class User {
    constructor(id, username){
        this.i = id;
        this.u = username;
    }
    sayHello(){
        return `Hello ${this.u}`;
    }
}
let userOne = new User(100, "Elziro");

userOne.u // Elziro

User.prototype;

let strOne = "Elzero";

String.prototype;
```

## 167 - Modules Import And Export

```html
    <script src="js/ymain.js" type="module"></script>
    <script src="js/app.js" type="module"></script>
```

main.js

Export Methode 1

```Javascript
    export let a = 10;
    export let arr = [1, 2, 3, 4];

    export function saySomething(){
        return `Something`;
    }
```

Export Methode 2

```JavaScript
    let a = 10;
    let arr = [1, 2, 3, 4];

    function saySomething(){
        return `Something`;
    }

    export { a, arr, saySomething };
```

app.js

```JavaScript
    import {a, arr, saySomething as s} from "js/main.js";

    console.log(a); // 10
    console.log(arr); // [1, 2, 3, 4]
    console.log(s()); // Something
```

Export Alias
Named Export
Import All

main.js

```JavaScript
    export default function sayHello(){
         return `Hello`;
    }
```

app.js

```JavaScript
    import elzero, { a, arr, saySomething } from from "js/main.js";

    console.log(elzero()); //  Hello
```

Export Methode 2

```JavaScript
    export default function(){
         return `Hello`;
    }
```

Impore All

```JavaScript
    import * as all from from "js/main.js";

    console.log(all.arr); // [1, 2, 3, 4]
    console.log(all.saySomething); // Something
```

## 169 - What Is JSON

Whate Is JSON ?

- JavaScript Object Notation
- Format For Sharing Data Between Server And Client
- JSON Derived From JavaScript
- Alternative To XML
- Fille Extension IS .json

Why JSON ?

- Easy To Use And Read
- Used By Most Programmng Languages And Its Frameworks
- You Can Convert JSON Object To JS Object And Vice Versa

| JSON vs XML                     |                   |
| ------------------------------- | ----------------- |
| Text Based Format = Markup Lang | age               |
| Lightweight                     | Heavier           |
| Does Not Use Tags               | Using Tags        |
| Shorter                         | Not Short         |
| Can Use Arrays                  | Cannot Use Arrays |
| Not Support Comments            | Support Comments  |

## 170 - JSON Syntax And Compare With Js Object

JSON Syntax

- Data Added Inside Curly Braces { }
- Data Added With Key : Value
- Key Should Be String Wrapped In Double Quotes
- Data Separated By Comma
- Square Brackets [] For Arrays
- Curly Braces {} For Objects

Available Data Types

- String
- Number
- Object
- Array
- Boolean Values
- null

Exemple :

```JSON
{
    "string": "Elzero",
    "number": 100,
    "object": {
        "EG": "Giza",
        "KSA": "Riyadh"
    },
    "array": ["HTML", "CSS", "JS"],
    "Boolean": true,
    "null": null
}
```

## 172 - Parse And Stringify

- JSON.parse => Convert Text Data To JS Object
- JSON.stringify => Convert JS Object To JSON

```javaScript
const myJsonObjectFromServer = '{"Username": "Osama", "Age": 39}';
console.log(typeof myJsonObjectFromServer); // string
console.log(myJsonObjectFromServer); // {"Username": "Osama", "Age": 39}

const myJsObject = JSON.parse(myJsonObjectFromServer);
console.log(typeof myJsObject); // object
console.log(myJsObject); // -> {Username: 'Osama', Age: 39} 

myJsObject["Username"] = "Elzero";
myJsObject["Age"] = 40;

const myJsonObjectToServer = JSON.stringify(myJsObject);
console.log(typeof myJsonObjectToServer); // string
console.log(myJsonObjectToServer); // -> {Username: 'Elzero', Age: 40}
```

## 173 - Asynchronous

To Understand Ajax, Fetch, Promises

Asynchronous VS Synchronous Programming

- Meaning

Synchronous

- Operation Runs in Sequence
- Each Operation Must Wait For The Previous One To Complete
- Story From Real Life

Asynchronous

- Operation Runs In Parallel
- This Means That An Operation Can Occur while Another One Is Still Being Processed
- Story From Real Life
- Facebook As Example
- Simulation

Search

- JavaScript Is A Single-Threaded
- Multi Threaded Languages

## 174 - Call Stack And Web API

To Understand Ajax, Fetch, Promises

Call Stack || Stack Trace

- JavaScript Engine Uses A Call Stack To Manage Execution Contexts
- Mechanism To Make The Interpreter Track Your Calls
- When Function Called It Added To The Stack
- When Function Executed It Removed From The Stack
- After Function Is Finished Executing The Interpreter Continue From The Last Point
- Work Using LIFO Principle => Last In First Out
- Code Execution Is Synchronous.
- Call Stack Detect Web API Methods And Leave It To The Browser To Handle It

Web API

- Methods Available From The Environment => Browser

```javaScript

setTimeout(()=>{
    console.log("Web API")
}, 0);

function one(){
    console.log("One");
}
function two(){
    one();
    console.log("Two");
}
function three(){
    tow();
    console.log("Three")
}

three()
/* 
One
Two
Three
Web API
*/

```

## 176 - What Is AJAX And Network Informatio

AJAX

- Asynchronous JavaScript And XML
- Approach To Use Many Technologies Together [HTML, CSS, JS, DOM]
- It Use "XMLHttpRequest" Object To Interact With The Server
- You Can Fetch Data Or Send Data Without Page Refresh
- Examples
  -- Youtube Studio
  -- Google Drive
  -- Upload Article Photo
  -- Form Check Name

Test new XMLHttpRequest();
Request And Response
Status Code

```javaScript
let req = new XMLHtpRequest();
console.log(req);
```

## 177 - Request And Response From Real API

Ajax
 Ready State => Status Of The Request

- Reqest Not Initialized
- Server Connection Established
- Request Received
- Processing Request
- Request Is Finished And Response Is Ready

 Status
[200] Response Is Successful
[404] Not Found

```JavaScript
consol.log('hello');
```

THe End.
