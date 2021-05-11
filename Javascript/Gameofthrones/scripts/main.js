$row = document.querySelector('.row');
var $body = document.querySelector('body');
var char = '';


window.addEventListener('load', () => {
    for (var i = 1; i <= 1350; i++) {
        fetch(`https://www.anapioficeandfire.com/api/characters/${i}`)
            .then(response => response.json())
            .then(data => {
                var char = data.name;
                var div = document.createElement('div');
                $body.append(div);
                div.innerHTML = char;

                div.addEventListener('click', () => {
                    var allegiances = data.allegiances;
                    fetch(allegiances)
                        .then(response => response.json())
                        .then(data2 => {
                            alert(`Name: ${data2.name}\nRegion: ${data2.region}\nCoat of Arms: ${data2.coatOfArms}`);
                            
                        })
                })
            });
    }
})