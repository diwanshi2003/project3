// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Select the form element
    const form = document.getElementById('cakeOrderForm');

    // Add submit event listener to the form
    form.addEventListener('submit', function (event) {
        // Prevent the default form submission
        event.preventDefault();

        // Validate form inputs
        if (validateForm()) {
            // If valid, submit the form (You can replace alert with actual form submission)
            alert('Form is valid. Submitting...');
            form.submit(); // Replace with your form submission function
        } else {
            // If not valid, show an error message to the user
            alert('Please fill in all fields.');
        }
    });

    // Function to validate form inputs
    function validateForm() {
        // Get values from inputs
        const name = document.getElementById('nameInput').value.trim();
        const email = document.getElementById('emailInput').value.trim();
        const address = document.getElementById('addressInput').value.trim();
        const phone = document.getElementById('phoneInput').value.trim();
        const date = document.getElementById('dateInput').value.trim();
        const time = document.getElementById('timeInput').value.trim();
        const cakeFlavour = document.getElementById('cakeFlavourInput').value;
        const kg = document.getElementById('kgInput').value;

        // Check if any field is empty
        if (name === '' || email === '' || address === '' || phone === '' || date === '' || time === '' || cakeFlavour === '' || kg === '') {
            return false; // Return false if any field is empty
        }

        // If all checks pass, return true
        return true;
    }

    // Existing animation on scroll and other functions
    AOS.init({
        duration: 800,
        easing: "slide",
    });

    (function ($) {
        "use strict";
        $(window).stellar({
            responsive: true,
            parallaxBackgrounds: true,
            parallaxElements: true,
            horizontalScrolling: false,
            hideDistantElements: false,
            scrollProperty: "scroll",
        });

        //   full height
        var fullHeight = function () {
            $(".js-fullheight").css("height", $(window).height());
            $(window).resize(function () {
                $(".js-fullheight").css("height", $(window).height());
            });
        };
        fullHeight(); //call that function

        // navbar scroll
        var scrollWindow = function () {
            $(window).scroll(function () {
                var $w = $(this),
                    st = $w.scrollTop(),
                    navbar = $(".ftco_navbar"),
                    sd = $(".js-scroll-wrap");
                if (st > 150) {
                    if (!navbar.hasClass("scrolled")) {
                        navbar.addClass("scrolled");
                    }
                }
                if (st < 150) {
                    if (navbar.hasClass("scrolled")) {
                        navbar.removeClass("scrolled sleep");
                    }
                }

                if (st > 350) {
                    if (!navbar.hasClass("awake")) {
                        navbar.addClass("awake");
                    }
                    if (sd.length > 0) {
                        sd.addClass("sleep");
                    }
                }

                if (st < 350) {
                    if (navbar.hasClass("awake")) {
                        navbar.removeClass("awake");
                        navbar.addClass("sleep");
                    }
                    if (sd.length > 0) {
                        sd.removeClass("sleep");
                    }
                }
            });
        };
        scrollWindow();

        $.Scrollax();

        //   carousel
        var carousel = function () {
            $(".home-slider").owlCarousel({
                loop: true,
                autoplay: true,
                margin: 0,
                animateOut: "fadeOut",
                animateIn: "fadeIn",
                nav: true,
                dots: false,
                autoplayHoverPause: false,
                items: 1,
                navText: [
                    "<span class = 'ion-ios-arrow-back'></span>",
                    "<span class = 'ion-ios-arrow-forward'></span>",
                ],
                responsive: {
                    0: {
                        items: 1,
                    },
                    600: {
                        items: 1,
                    },
                    1000: {
                        items: 1,
                    },
                },
            });
            $(".carousel-testimony").owlCarousel({
                loop: true,
                autoplay: true,
                center: true,
                margin: 30,
                nav: false,
                stagePadding: 0,
                items: 1,
                navText: [
                    "<span class = 'ion-ios-arrow-back'></span>",
                    "<span class = 'ion-ios-arrow-forward'></span>",
                ],
                responsive: {
                    0: {
                        items: 1,
                    },
                    600: {
                        items: 2,
                    },
                    1000: {
                        items: 3,
                    },
                },
            });
        };
        carousel();

        var counter = function () {
            $("#section-counter").waypoint(
                function (direction) {
                    if (
                        direction === "down" &&
                        !$(this.element).hasClass("ftco-animated")
                    ) {
                        var comma_seperator_number_step = $.animateNumber.numberStepFactories.separator(
                            ","
                        );
                        $(".number").each(function () {
                            var $this = $(this),
                                num = $this.data("number");
                            console.log(num);
                            $this.animateNumber(
                                {
                                    number: num,
                                    numberStep: comma_seperator_number_step,
                                },
                                7000
                            );
                        });
                    }
                },
                { offset: "95%" }
            );
        };
        counter();

        var contentWayPoint = function () {
            var i = 0;
            $(".ftco-animate").waypoint(
                function (direction) {
                    if (
                        direction === "down" &&
                        !$(this.element).hasClass("ftco-animated")
                    ) {
                        i++;
                        $(this.element).addClass("item-animate");
                        setTimeout(function () {
                            $("body .ftco-animate.item-animate").each(function (k) {
                                var el = $(this);
                                setTimeout(
                                    function () {
                                        var effect = el.data("animate-effect");
                                        if (effect === "fadeIn") {
                                            el.addClass("fadeIn ftco-animated");
                                        } else if (effect === "fadeInLeft") {
                                            el.addClass("fadeInLeft ftco-animated");
                                        } else if (effect === "fadeInRight") {
                                            el.addClass("fadeInRight ftco-animated");
                                        } else {
                                            el.addClass("fadeInUp ftco-animated");
                                        }
                                        el.removeClass("item-animate");
                                    },
                                    k * 50,
                                    "easeInOutExpo"
                                );
                            });
                        }, 100);
                    }
                },
                { offset: "95%" }
            );
        };
        contentWayPoint();

        $("#book_date").datepicker({
            format: "m/d/yyyy",
            autoclose: true,
        });
        $("#book_time").timepicker();
    })(jQuery);
});

// Additional JavaScript for form validation and confirmation
document.addEventListener('DOMContentLoaded', function () {
    // Add event listener to the form submission
    document.getElementById('cakeOrderForm').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission

        // Validate all required fields
        if (validateForm()) {
            // If validation passes, show confirmation message
            showConfirmation();
            // Optionally, you can submit the form data using AJAX here
            // Example:
            // submitFormData();
        }
    });

    // Function to validate the form
    function validateForm() {
        var isValid = true;
        var inputs = document.querySelectorAll('#cakeOrderForm input, #cakeOrderForm select');
        inputs.forEach(function (input) {
            if (input.hasAttribute('required') && !input.value.trim()) {
                isValid = false;
                return;
            }
        });
        return isValid;
    }

    // Function to show confirmation message
    function showConfirmation() {
        alert('Your cake order has been submitted successfully!');
        // Reset the form after showing the confirmation (optional)
        document.getElementById('cakeOrderForm').reset();
    }
});