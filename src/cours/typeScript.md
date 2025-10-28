# TypeScript

1) install **Node.js** and **npm**

```Bash
sudo apt update
sudo apt install nodejs npm
```

- `sudo apt update`: Updates your local package index.
- `sudo apt install nodejs npm`: Installs Node.js and npm.

verify Node.js and npm insstallation (Optional)

- `node -v`
- `npm -v`

2) instalatiion: `npm install -g typescript`.

- `npm install`: The command to install an npm package.
- `-g`: The flag for a global installation.
- `typescript`: The name of the package.

verify TypeScript installation

- `tsc -v`.

## 03 - Create Configuration And Watch Filles

Compilation : `tsc index.ts`

watch: `tsc -w index.ts`

helpe: `tsc -h`

`tsc --init`: file tsconfig contian:

 `"target": "es2016"`:
 `"rootDir": "./src"`: adress file compiler
 `"outDir": "./dist"`: adres output

`tsc`
`tsc -w`

## 04 - Statically vs Dynamically Typed Lang

Statically Typed Language Like [Rut, C, C++]

> Variables Types Are Static, Once You Declare It You Cannot Change.\
> Type Of A Variable Is Known At Compile Time "Do Type Checking At Compile-Time".\
>>Have Better Performance At Run-Time Due To Not Needing To Check Types Dynamically.
>Error Detected Earlier

Dynamically Typed Language Like [PHP, Python, JavaScript]
>Variables Type Are Dynamic, You Can Always Change It.\
>"Type Checking At Execution-Time".\
>Error Can Be Detected After Execution

## 05 - Type Annotations And Any Data Type

Type Annotations || Signature
>Indicate The Data Type Of Variables.\
>Indicate The Data Type Of Functions Input/Output.\
>Objects, etc.

Why We Use It?
Is It Mandatory?
What Happen If We Didnt Use It?

```TypeScript
let theName = "Jone";
let theAge: number = 40;
let hire: boolean = true;
let all: any = "Web School";

theNalme = "Osama";
all = 100;
```

## 06 - Type Annotations With Multidimension

Type Annotations With Multidimension Arrays

```TypeScript
let arrayOne: number[] = [1, 2, 3, 4, 5];
let arrayTwo: string[] = ["A", "B", "C"];
let arrayThree:(string | number)[] = [1, 2, 3, "A", "B", "C"]