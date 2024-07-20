function head(title,theme='style') {
    document.write(`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <link rel="stylesheet" href="${theme}.css">
</head>
<body>
    <div class="head">
        <a href="index.html">${title}</a>
    </div>
    `);
    
}

function nav(navdata='home'){
    home=['Home','Html','CSS','JavaScript','Jquery'];
    Html=['Intro','Form','Table','Frame','iframe','List'];
    CSS=['Intro','Color','Box-model','Flex','Background-Images','Text-style','Font-family'];
    JavaScript=['Intro','Event','DOM','Variable','DataType','Function','Loops'];
    Jquery=['Intro','Event','API','Routes'];
    if(navdata=='home'){
        document.write(`<div class="nav">
        <ul>`);
            for(i=0;i<home.length;i++){
                document.write(`<li><a href="${home[i]}.html">${home[i]}</li>`);
            }
       document.write(`</ul>
        </div>`);
    }
    else if(navdata=='Html'){
        document.write(`<div class="nav">
        <ul>`);
            for(i=0;i<Html.length;i++){
                document.write(`<li><a href="${Html[i]}.html">${Html[i]}</li>`);
            }
        document.write(`</ul>
        </div>`);
    }
    else if(navdata=='CSS'){
        document.write(`<div class="nav">
        <ul>`);
            for(i=0;i<CSS.length;i++){
                document.write(`<li><a href="${CSS[i]}.html">${CSS[i]}</li>`);
            }
        document.write(`</ul>
        </div>`);
    }
    else if(navdata=='JavaScript'){
        document.write(`<div class="nav">
        <ul>`);
            for(i=0;i<JavaScript.length;i++){
                document.write(`<li><a href="${JavaScript[i]}.html">${JavaScript[i]}</li>`);
            }
        document.write(`</ul>
        </div>`);
    }
    else if(navdata=='Jquery'){
        document.write(`<div class="nav">
        <ul>`);
            for(i=0;i<Jquery.length;i++){
                document.write(`<li><a href="${Jquery[i]}.html">${Jquery[i]}</li>`);
            }
        document.write(`</ul>
        </div>`);
    }
}

// function nav() {
//     document.write(`<div class="nav">
//     <ul>
//         <li><a href="index.html">Home</a></li>
//         <li><a href="page1.html">page 1</a></li>
//         <li><a href="page2.html">page 2</a></li>
//         <li><a href="page3.html">page 3</a></li>
//         <li><a href="page4.html">page 4</a></li>
//     </ul>
// </div>`);
// }

function post(count) {
    start = 1;

    do {
        document.write(`<div class="post">
    <img src="girls.jpg" alt="post1">
    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1><br>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore rem totam possimus ab, ipsa fugit?
        Recusandae accusantium non in! Provident corrupti beatae nesciunt expedita, odit eligendi
        accusantium? Consectetur consequatur obcaecati incidunt nobis error. Molestias mollitia similique
        consectetur saepe alias ab earum, porro quae fugit expedita officiis quisquam magnam repellendus est
        voluptas. Placeat nulla voluptatem maiores fugit nisi? Laborum expedita doloremque, beatae modi
        sapiente dolore delectus accusamus similique dicta tempore cupiditate ut debitis, quis voluptates
        aliquid at, veniam rerum accusantium necessitatibus voluptatum rem facilis hic. Voluptatibus in
        error laborum a veniam ad, excepturi eos rerum iure consequuntur recusandae unde nihil assumenda
        maxime praesentium fugiat id placeat? Quisquam accusamus quam nam aliquam tenetur dolor cupiditate.
        Recusandae, quos, quaerat quo ex minima aut deserunt iusto itaque maiores officiis eius modi atque
        et nisi fugiat iure quisquam aliquid quis laudantium porro. Earum alias id excepturi exercitationem
        placeat optio cumque nesciunt rem saepe. Nisi ex repellendus facere architecto magni inventore
        deserunt ad. Sed, ratione officiis ullam quas voluptates, dolore temporibus reprehenderit qui
        obcaecati, nemo tenetur inventore cum. Tempore magnam aliquid quis, culpa facilis modi voluptatibus
        odio officia corporis tenetur labore molestiae ipsam asperiores eum debitis, recusandae id, qui
        deserunt consequuntur ullam omnis aut doloribus. Ullam consequatur assumenda suscipit, ipsa ut illum
        quasi ipsum provident facilis praesentium iste officia nesciunt. Error eos molestiae ex enim est
        ipsum dicta labore praesentium. Inventore saepe doloribus earum odio vero illo cumque dicta
        necessitatibus optio deleniti maxime laborum porro voluptas a, minima fuga ipsum sunt possimus
        quaerat. Nobis, laudantium omnis!</p>
</div>`)

        count--;
    }
    while (start <= count);
}

function aside() {
    document.write(` <h3>Aside</h3>
    <img src="girls.jpg" alt="aside1">`);
}

function footer() {
    document.write(`<div class="footer">
    <h4>Copyright &copy; 2023 site name</h4>
</div>
</body>

</html>`);
}


