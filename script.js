window.addEventListener('load', () => {
    let yes = [
        'I like programming',
        'I like maths',
        'I go outside',
        'my first programming language was not Python',
        'I know some C++',
        'I made games in Scratch',
        'I have a <a class = \'links\' href = \'https://github.com/GalaXy11232\' target = \'_blank\'>GitHub</a> account'
    ]

    rng = Math.floor(Math.random() * 150 + 1)

    if (rng == 69) {
        document.getElementById('whyyes').innerHTML = '[0] = \'U\''
        return
    }
    else {
        document.getElementById('whyyes').innerHTML =  "\"Why yes, " + yes[Math.floor(Math.random() * yes.length)] + ", how could you tell?\" <img src = './Images/nerd.png' alt = '🤓' title = '🤓' onclick = nerd() style = 'width: 30px'>";
    }
})

let count = 1
function info_progr() {
    count += 1;
    let link = document.getElementById('info_progr')

    if (count % 2 == 0) {
        link.setAttribute('title', 'Click to shorten')
        document.getElementById('info_progr').innerHTML = `<li>Small, still learning programmer</li>
        &nbsp;&nbsp;&nbsp;&nbsp;Known programming languages (by far): 
      <ul><strong>
        <li>Python</li>
        <li>HTML?</strong> (Let's consider it a programming language)
        <strong><li>JavaScript</li>
        <li>C++</strong> (a tiny portion)</li></ul>`;
    }
    else {
        link.setAttribute('title', 'Click to expand')
        document.getElementById('info_progr').innerHTML = `<li>Small, still learning programmer</li>`
    }
}

function copy(id) {
    let copyT = document.getElementById(id);

    copyT.addEventListener('click', () => {
        let copyable = copyT.textContent;
        if (navigator.clipboard) {
            navigator.clipboard.writeText(copyable).then(() => {
                alert(`Copied to clipboard: ${copyable}`)
            })
        }
    })
}

var change = {
    "html-snippet": `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Name - Location</title>
    </head>
    <body>
      
    </body>
    </html>`
}
function changecd(value) {
    let rewrite = document.getElementById('showstuff');
    rewrite.setAttribute('style', 'white-space: pre;')

    rewrite.textContent = change[value];
}

function nerd() {
    window.open("🤓.html", '_blank')
}

function show() { // [1]
    document.getElementById('shoo').innerHTML = '[1] = R'
}

/* function e1() {
    document.getElementById('e1').innerHTML = "So it seems you have found the first <span onclick = e1seq()>easter egg</span>. This website is full of them, <br> some being useless stuff, some being actually interesting things."
    document.getElementById("e1").style.opacity = 100
    setTimeout(() => {
        document.getElementById('e1').style.opacity = 0        
    }, 10000)
    setTimeout(() => {
        document.getElementById('e1').innerHTML = "."
    }, 11000)
}
function e1seq() {
    document.getElementById('e1').style.opacity = 0
    document.getElementById('ee1').innerHTML = "Ok, so you know easter eggs. Those hidden things in games that only few people find.<br>Well, as I said, this website has many of them, even if there are fewer than 5 webpages, so good luck finding them ;)"
    document.getElementById('ee1').style.opacity = 100
    setTimeout(() => {
        document.getElementById('ee1').style.opacity = 0        
    }, 14000)
    setTimeout(() => {
        document.getElementById('ee1').innerHTML = "."
    }, 15000)
}

function e2() {
    window.scrollTo(0,0)
    document.getElementById('e2').innerHTML = "Ok, you got here either by accident or you are concerned about discord bots.<br>Well, if you're interested, I've been working on a Discord bot for a while and you can click <a href = 'https://top.gg/bot/816736819290964038' target = '_blank'>here</a> if you want to invite it ;)<br>I know it hasn't been updated \"since 1900\", but maybe if I am given some ideas, I could add them to the bot, who knows..."
    document.getElementById('e2').style.opacity = 100
    setTimeout(() => {
        document.getElementById('e2').style.opacity = 0        
    }, 16000)
    setTimeout(() => {
        document.getElementById('e2').innerHTML = ""
    }, 17000)
}

function etrue() {
    document.getElementById("etrue").innerHTML = ""
    document.getElementById('etrue').style.opacity = 0.3

    for (let i = 1; i < 35000; i++) {
        setTimeout(() => {
            document.getElementById('etrue').innerHTML = "ice gay"
        }, 1)
        setTimeout(() => {
            document.getElementById('etrue').innerHTML = "gay team"
        }, 1)
        setTimeout(() => {
            document.getElementById('etrue').innerHTML = "brain dead"
        }, 1)
        setTimeout(() => {
            document.getElementById('etrue').innerHTML = "very cringe wtf"
        }, 1)      
    }

    setTimeout(() => {
        document.getElementById('etrue').style.opacity = 0        
    }, 2400)
    setTimeout(() => {
        document.getElementById('etrue').innerHTML = ""
    }, 3400)
} */