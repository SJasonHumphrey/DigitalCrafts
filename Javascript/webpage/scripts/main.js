var $containerFluid = document.querySelector('.container-fluid');

var nav = document.createElement('nav');
var heading = document.createElement('h1')
var link1 = document.createElement('h3');
var link2 = document.createElement('h3');

nav.setAttribute('class','bg-primary p-5 navbar navbar-expand');
heading.setAttribute('class', 'text-light');

heading.textContent = 'HighOnCoding';
link1.textContent = 'Home';
link2.textContent = 'Categories';

$containerFluid.append(nav);
nav.appendChild(heading);
heading.appendChild(link1);
heading.appendChild(link2);

function entry(heading, text, css ){
    var main = document.createElement('div')
    main.setAttribute('class', css);
    var header = document.createElement('h2');
    header.textContent = heading;
    var paragraph = document.createElement('p');
    paragraph.textContent = text;
    $containerFluid.append(main);
    main.appendChild(header);
    main.append(paragraph);
}

function articles(heading, text, css, comment, likes ){
    var main = document.createElement('div')
    main.setAttribute('class', css);
    var header = document.createElement('h3');
    header.setAttribute('class','text-primary');
    header.textContent = heading;
    var paragraph = document.createElement('p');
    var comments = document.createElement('div');
    comments.setAttribute('class','bg-warning p-2 text-light');
    var value1 = document.createElement('p'); 
    value1.setAttribute('class', 'd-inline');
    value1.textContent = comment + ' comments' +' '+ likes + ' likes';
    paragraph.textContent = text;
    $containerFluid.append(main);
    main.appendChild(header);
    main.append(paragraph);
    paragraph.append(comments);
    comments.appendChild(value1)
}



entry('Curse of the Current Reviews',"When you want to buy any application from the Apple Itunes store you have more choices than you can handle. Most of the users scroll past the application description completely avoiding it like ads displayed on the right column of your webpage. Their choice is dependent on three important factors. price, screenshot and reviews.", 'container bg-secondary mt-3 p-4');

articles('Hello WatchKit', 'Last month Apple released the anticipated WatchKit Framework for developers in the form of iOS 8.2 beta SDK release. The WatchKit framework enable the developers to create apple Watch applications. In this article we are going to focus on the basics of getting started with the watchKit and developing apps for the Apple Watch.', 'container mt-3 mb-5 p-3',12,124);

articles('Introduction to Swift', 'Swift is a modern programming language developed by Apple to create the next generation of iOS and OSX applications. Swift is a fairly new language and still in development but it clearly reflects the intentions and the future direction. This article will revolve around the basic concepts in the Swift language and how you can get started.','container mt-2 mb-5 p-3', 15,45);

