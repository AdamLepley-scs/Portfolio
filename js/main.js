
// mobile nav js

const burgerIcon = document.querySelector('#hamburger');
    burgerIcon.addEventListener('click', function() {

        const nav = document.querySelector('#sidenav');
        const navWrapper = document.querySelector('#sidenav-wrapper');
        const navMenu = document.querySelector('#sidenav-menu');
        const navSocials = document.querySelector('#sidenav-socials');

        nav.classList.toggle('mobilenav');
        nav.classList.toggle('sidenav');
        navWrapper.classList.toggle('mobilenav-wrapper');
        navWrapper.classList.toggle('sidenav-wrapper');
        navMenu.classList.toggle('mobilenav-menu');
        navMenu.classList.toggle('sidenav-menu');
        navSocials.classList.toggle('mobilenav-socials');
        navSocials.classList.toggle('sidenav-socials');
    
    });




function displayMobileNav(){


}

// contact form js



function submitContactForm(){
    
    
    const conFirst = $("#contact-firstname")
    const conLast = $("#contact-lastname")
    const conEmail = $("#contact-email")
    const conPhone = $("#contact-phone")
    const conSubject = $("#contact-subject")
    const conMessage = $("#contact-message")

    const conFields = [conFirst.val(),conLast.val(),conEmail.val(),conPhone.val(),conSubject.val(),conMessage.val()];

    if (conFields.includes('')) {
        console.log('There is a blank field!')
        alert('Please fill out all the required fields!');
    } else {
        console.log('No fields are blank!')
    }

}

//text animation
document.addEventListener("DOMContentLoaded", function () {
    const textElements = [
        { element: document.getElementById("banner-text"), text: "Adam Lepley" },
        { element: document.getElementById("banner-subtext"), text: "Software Developer" }
    ];
    const typingSpeed = 100; // Speed in milliseconds between each character

    function typeText(element, text, callback) {
        let index = 0;

        function type() {
            if (index < text.length) {
                element.textContent += text.charAt(index);
                index++;
                setTimeout(type, typingSpeed);
            } else if (callback) {
                setTimeout(callback, 500); // Slight delay before starting the next text
            }
        }

        type();
    }

    function startTypingEffect() {
        if (textElements.length > 0) {
            const { element, text } = textElements.shift();
            typeText(element, text, startTypingEffect);
        }
    }

    // Start the typing effect
    startTypingEffect();
});
     
    
