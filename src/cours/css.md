Css Cours

## 03 - Element Styling

> Target All Paragraphs

```css
p {
    color: red
}
```

> Target Paragraph `"class = special"`

```css
.special {
    color: green
}
```

```css
#speclial {
    color: blue
}
```

<!-- <font color="red">Exemple </font> : -->

Exemple

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS</title>
    <!-- External Style -->
    <link rel="stylesheet" href="style.css">
    <!-- Internal Style -->
     <style>
        p {
            color: red
        }
     </style>
</head>
<body>
    <!-- Inlin Style -->
    <p style="color: purple">This Is Paragraph</p>
    <p>This Is Paragraph</p>
    <p class="special">This Is Paragraph</p>
    <p>This Is Paragraph</p>
</body>
</html>
```

## 04 - Name Conventions And Ruls

## 11 - Display: Block, inline Block, Inline

div display block Deffalt value;

> **Block:**
>
>> 1. Take Full Width If No Width.
>> 2. Add Line Break
>> 3. Respect Padding, Margin, Width, Height
>>

> **Inline**
>
>> 1. Do Not Respect Width, Height
>> 2. Respect Padding And Margin [ Just Left + Right ]
>> 3. Do Not Add Line Break
>> 4. Allow Elements Before And After It.
>>

## 05 - Background ... Color, Image, Repeat

```css
div {
    background-color: red; /* Color Name */
    background-color: rgb( 255 0 0 / 50%); /* Red Green Blue Alpha Channel */
    background-color: #ff0000; /* Color HEX Code */
    background-color: url("../imgs/learn-programming.png");
    background-repeat: repeat; /* repeat & no-repeat */ 
    background-attachment: fixed;
    background-position: left top;
    background-size: cover;
}
```

## 28 - Masreing The CSS Calculation

```CSS
html {
    scroll-behavior: smooth;
}
```

## 30 - Position

> **Position: Static;** => Default Value.
>
>> (left top ...) no effect
>>
>
> **Relative**
>
>> transforme keep  position. "You can leave the page"
>> it does not affect the rest item.
>>
>
> **Absolute**
>
>> Quitte The worke flue
>> (left top ...) keep page
>> parent position relative > (left top ...) keep parent
>>
>
> **fixed**
>
>> (left top ...) keep page Always.
>>
>
> **Sticky**
>
>> ok ok then fixed on position known
>>

## 34 - Pseudo Classes

```CSS
a:hover {
    color: red;
}
ch:checked {
    display: none;
}
a:visited {
    color: blue;
}
div:empty{
    background: green;
}
.in:focus{
    border: blue;
}
```

## 35 - Pseudo Elements: First Letter, First Line

```CSS
.two::first-letter {
    font-size: 30px
}
.three::first-line {
    color: green;
}
.four::selection {
    background-color: black;
    color: yellow;
}
```

## 34 - Pseudo Elements: Before, After, Content

## Transition

> Exemple:

```css
.div {
    transition-property: width; // Defalt value 'all'
    transition-duration: 2s;
    transition-timing-function: ease;
    transition-delay: 0s;  
}
```

## 46 - Flex Box Parent - Direction, Wrap, Flow

Flexible Box For Parent:

- display: flex; => To Start Flexible Box.
- flex-direction: [row coloum] row => Default Value
- flex-wrap => nowrap; => Default Value
- flex-flow: [Flex-Direction] + [Flex-wrap]
- flex-content: flex-start; => Default Value
- align-items: stretch; => Default Value
- align-content: stretch; => Default Value

## Flex Box Child

Flexible Box For Child

- flex-grow: 0; => Default Value
- flex-shrink: 1; => Default Value
- order: 0; => Default Value
- flex-basis: auto; Default Value
- flex: [Flex Grow] [Flex Shrink] [Flex Basis]
- align-self: stretch; => Default Value

Holy grail

## 60 - Grid - Parent - Complete Layout With Templa

```css
.page {
    display: grid;
    grid-template-columns: 100px auto 1fr;
    grid-template-areas: 
    "logo logo nav nav nav nav nav" 
    "cont cont cont cont cont side side"
    "foot foot foot foot foot foot foot"
}

h2 {
    grid-area: logo;
}
nav {
    grid-area: nav;
}
section {
    grid-area: cont; 
}
aside {
    grid-area: side;
}
footer {
    grid-area: foot;
}
```

## 69 - 2D Transform: Matrix

> Syntax => `matrix( scaleX(), skewY(), skewX(), scaleY(), translateX(), translateY())`
> Exemple:

```css
.shape > div {
    transform: matrix(1.2, 0.2679, 0, 1.2, 20; 20);
    transform: matrix(translateX(), translateY(), scaleX(), skewY(), skewX(), scaleY())
}
```

## 70 - Transform Origin

> Defult value `transform-origin: 50% 50%;` = `transform-origin: center center;`.

:joy:

:exclamation:



<font color="red">This text is red!</font>

[center]Texte centré[/center]  

[right]Texte algné à droite[/right]

> :warning: **Warning:** Do not push the big red button.

> :memo: **Note:** Sunrises are beautiful.

> :bulb: **Tip:** Remember to appreciate the little things in life.
