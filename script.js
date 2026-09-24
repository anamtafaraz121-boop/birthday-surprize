/* =====================================
   BIRTHDAY WEBSITE JAVASCRIPT
===================================== */


/* ===============================
   ELEMENTS
================================ */

const cover = document.getElementById("cover");

const memories = document.getElementById("memories");

const cakeSection = document.getElementById("cake");

const letterSection = document.getElementById("letter");

const openButton = document.getElementById("openButton");

const song = document.getElementById("birthdaySong");

const wishButton = document.getElementById("wishButton");

const cutButton = document.getElementById("cutButton");

const letterButton = document.getElementById("letterButton");

const cakeMessage = document.getElementById("cakeMessage");

const cake = document.querySelector(".cake");


/* ===============================
   OPEN WEBSITE
================================ */

openButton.addEventListener("click", function () {

    /*
       Start music after user's click.
       Browsers allow audio because this
       action came from a user interaction.
    */

    song.volume = 0.45;

    song.play().catch(function(error) {
        console.log("Music could not start:", error);
    });


    /*
       Hide cover
    */

    cover.classList.remove("active");

    cover.style.display = "none";


    /*
       Show memories
    */

    memories.classList.add("active");


    /*
       Scroll to memories
    */

    memories.scrollIntoView({
        behavior: "smooth"
    });

});


/* ===============================
   SECTION NAVIGATION
================================ */

function showSection(sectionName) {

    /*
       Hide all sections
    */

    document.querySelectorAll(".section").forEach(function(section) {

        section.classList.remove("active");

    });


    /*
       Find requested section
    */

    const selectedSection =
        document.getElementById(sectionName);


    /*
       Show it
    */

    selectedSection.classList.add("active");


    /*
       Scroll to top
    */

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* ===============================
   MAKE A WISH
================================ */

wishButton.addEventListener("click", function () {

    /*
       Blow out candles
    */

    cake.classList.add("cake-blown");


    /*
       Change message
    */

    cakeMessage.innerHTML =
        "Wish made. ✦<br>Now it's time to cut the cake.";


    /*
       Hide wish button
    */

    wishButton.classList.add("hidden");


    /*
       Show cut button
    */

    cutButton.classList.remove("hidden");

});


/* ===============================
   CUT THE CAKE
================================ */

cutButton.addEventListener("click", function () {

    /*
       Split cake
    */

    cake.classList.add("cake-cut");


    /*
       Change message
    */

    cakeMessage.innerHTML =
        "Happy Birthday, my love. ♡";


    /*
       Hide cut button
    */

    cutButton.classList.add("hidden");


    /*
       Create confetti
    */

    createConfetti();


    /*
       Show letter button after
       a small delay
    */

    setTimeout(function () {

        letterButton.classList.remove("hidden");

    }, 1200);

});


/* ===============================
   CONFETTI
================================ */

function createConfetti() {

    const colors = [
        "#711f34",
        "#eee5d8",
        "#b7a995",
        "#8d3149"
    ];


    for (let i = 0; i < 80; i++) {

        const piece =
            document.createElement("div");


        piece.classList.add("confetti");


        /*
           Random horizontal position
        */

        piece.style.left =
            Math.random() * 100 + "vw";


        /*
           Random color
        */

        piece.style.background =
            colors[
                Math.floor(
                    Math.random() * colors.length
                )
            ];


        /*
           Random delay
        */

        piece.style.animationDelay =
            Math.random() * 1.5 + "s";


        /*
           Random size
        */

        piece.style.width =
            Math.random() * 6 + 4 + "px";


        piece.style.height =
            Math.random() * 10 + 5 + "px";


        document.body.appendChild(piece);


        /*
           Remove after animation
        */

        setTimeout(function () {

            piece.remove();

        }, 5000);

    }

}
