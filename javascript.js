var quotes = ["Suatu hal yang sia-sia jika menyesali masa lalu, sebaiknya sesalilah apa yang tak aka mampu kamu lakukan di masa depan.", "Janganlah pernah membuat seseorang menjadi jatuh cinta padamu, namun dirimu sendiri masih belum bisa memberikan hatimu padanya seutuhnya. Karena cinta sepihak itu sangat pedih.", "Kadangkala seseorang memutuskan untuk menjauh bukan karena ia membencinya, tapi karena ia sedang melindungi dirinya dari luka.", "Masa depan bukanlah tujuan utama, melainkan perbaikan melalui tindakan yang benar – benar nyata.", "Jangan pernah berusaha untuk memperbaiki apa yang membuatmu menyesal di masa lalu untuk diulang kembali, jangan menghadap kebelakang agar hidupmu tak patah.", "Tak perlu menjadi orang lain ketika ingin di puja atau dipuji, karena yang terpenting adalah ketika dirimu mampu menerima segala kekuranganmu dengan lapang dada.", "Jangan pernah berhenti ketika kamu masih belum ingin menyerah.", "Jangan pernah berusaha untuk memperbaiki apa yang membuatmu menyesal di masa lalu untuk diulang kembali, jangan menghadap kebelakang agar hidupmu tak patah.", "Tak perlu menjadi orang lain ketika ingin di puja atau dipuji, karena yang terpenting adalah ketika dirimu mampu menerima segala kekuranganmu dengan lapang dada.", "Jangan pernah berhenti ketika kamu masih belum ingin menyerah.", "Di dunia ini, agar dirimu bisa merasa baik, maka terimalah bahwa tidak setiap keadaan baik.", "Tersenyumlah, karena bisa jadi dengan senyumanmu banyak orang lain yang ikut tersenyum sama sepertimu.", "Tangisan wanita adalah sebuah ungkapan bahwa ia terlalu lelah menjalani semuanya.", "Merupakan suatu hal yang sangat sukar ketika semua yang awalnya baik tiba-tiba berubah menjadi buruk. Dan yang lebih sukar dari itu adalah memilih sebuah pilihan antara melepaskan atau tetap bertahan.", "Tak perlulah takut akan jatuh cinta, karena suatu saat kamu akan menemui seseorang yang benar – benar bisa membuat hidupmu lebih berwarna daripada sebelumnya.",
    "Melupakan akan menjadi suatu hal yang sangat sulit karena kita sebenarnya tidak pernah belajar untuk melupakan.",
    "Melupakan akan menjadi suatu hal yang sangat sulit karena kita sebenarnya tidak pernah belajar untuk melupakan.",
    "Terluka tidak harus melulu karena cinta, terkadang melepaskan apa yang tengah di genggam sekian lama adalah suatu pilihan yang paling baik.",
    "Mungkin kamu bukanlah orang yang selalu benar, karena kesalahanpun adalah hal yang cukup wajar.",
    "Maafkanlah sikapmu ketika kamu tengah gagal meraih mimpi, percayalah aka nada banyak mimpi yang lebih besar dan lebih baik dari mimpi yang pernah kamu rancang sebelumnya.",
    "Suatu hal yang sangat menyulitkan adalah ketika kamu menaruh perasaan pada seseorang namun dirimu tak tahu bagaimana cara untuk tetap mempertahankan rasa pada hatimu.",
    "Jangan pernah bosan untuk tetap membuat seseorang menjadi bahagia, sekalipun kamu harus memutuskan pergi dari kehidupannya.",
    "Jangan pernah merasa ragu dalam mencoba suatu hal karena kegagalan bukanlah suatu hal yang menakutkan.",
    "Keyakinan adalah kunci yang menjadi faktor utama dalam sebuah keberhasilan",
    "Apa pun pekerjaan yang kamu geluti, cintailah dan syukurilah",
    "Hidup tak akan menjadi beban jika kau bisa menjalaninya dengan ikhlas",

    "Obat terbaik dari segala kesulitan adalah kesabaran",

    "Semua kemajuan terjadi di luar zona nyaman",

    "Jangan terlena dengan sebuah mimpi, bangunlah dan terus bekerja",

    "Agar masa depanmu lebih baik,maka berusahalah mulai dari sekarang",

    "Kebahagiaan itu ada, jika kamu mau menjemputnya",

    "Teruslah percaya dan bekerja keraslah",

    "Kurang pandai mungkin bisa diperbaiki, tapi kejujuran tidak akan pernah mudah untuk ditanamkan",

    "Jangan menunggu diriku di sana, berjalanlah di sampingku bersama hingga sampai di sana",

    "Awal menjadi orang baik, adalah dengan berbuat baik",

    "Teruslah optimistis dan berpikir positif dalam hidupmu",

    "Waktu sangatlah berharga, janganlah pernah menyia-nyiakannya",

    "Seberat apapun yang dihadapi jangan pernah menjadi rapuh",

    "Teruslah meminta kepada Allah, dalam keadaan apa pun",

    "Jemputlah kebahagiaan agar tak lantas bersedih hati",

    "Jangan pernah berburuk sangka atas rencana tuhan di dunia",

    "Jadilah yang terbaik dari yang terbaik",

    "Mulailah segala sesuatu dengan senyuman, karena senyuman adalah awal dari kasih sayang",

    "wo ai ni"
]

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}

// Wrap every letter in a span
var textWrapper = document.querySelector('.ml6 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: true })
    .add({
        targets: '.ml6 .letter',
        translateY: ["1.1em", 0],
        translateZ: 0,
        duration: 750,
        delay: (el, i) => 50 * i
    }).add({
        targets: '.ml6',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
    });

// Wrap every letter in a span
var textWrapper = document.querySelector('.ml11 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: true })
    .add({
        targets: '.ml11 .line',
        scaleY: [0, 1],
        opacity: [0.5, 1],
        easing: "easeOutExpo",
        duration: 700
    })
    .add({
        targets: '.ml11 .line',
        translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
        easing: "easeOutExpo",
        duration: 700,
        delay: 100
    }).add({
        targets: '.ml11 .letter',
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 600,
        offset: '-=775',
        delay: (el, i) => 34 * (i + 1)
    }).add({
        targets: '.ml11',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
    });


// dots is an array of Dot objects,
// mouse is an object used to track the X and Y position
// of the mouse, set with a mousemove event listener below
var dots = [],
    mouse = {
        x: 0,
        y: 0
    };

// The Dot object used to scaffold the dots
var Dot = function () {
    this.x = 0;
    this.y = 0;
    this.node = (function () {
        var n = document.createElement("div");
        n.className = "trail";
        document.body.appendChild(n);
        return n;
    }());
};
// The Dot.prototype.draw() method sets the position of 
// the object's <div> node
Dot.prototype.draw = function () {
    this.node.style.left = this.x + "px";
    this.node.style.top = this.y + "px";
};

// Creates the Dot objects, populates the dots array
for (var i = 0; i < 12; i++) {
    var d = new Dot();
    dots.push(d);
}

// This is the screen redraw function
function draw() {
    // Make sure the mouse position is set everytime
    // draw() is called.
    var x = mouse.x,
        y = mouse.y;

    // This loop is where all the 90s magic happens
    dots.forEach(function (dot, index, dots) {
        var nextDot = dots[index + 1] || dots[0];

        dot.x = x;
        dot.y = y;
        dot.draw();
        x += (nextDot.x - dot.x) * .6;
        y += (nextDot.y - dot.y) * .6;

    });
}

addEventListener("mousemove", function (event) {
    //event.preventDefault();
    mouse.x = event.pageX;
    mouse.y = event.pageY;
});

// animate() calls draw() then recursively calls itself
// everytime the screen repaints via requestAnimationFrame().
function animate() {
    draw();
    requestAnimationFrame(animate);
}

// And get it started by calling animate().
animate();