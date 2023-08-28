// fixed icon (scroll up part)

document.addEventListener("DOMContentLoaded", function () {
    const scrollUpButton = document.querySelector(".scroll_up i");
    const directMessageButton = document.querySelector(".direct_message button");
    const popupForm = document.querySelector(".popup_form");
    
    scrollUpButton.style.transition = "opacity 0.6s ease-in-out";
    popupForm.style.transition = "opacity 0.6s ease-in-out";

    // Show the scroll up button after scrolling down 100vh
    window.addEventListener("scroll", function () {
        if (window.scrollY >= window.innerHeight) {
            scrollUpButton.style.opacity = 1;
            scrollUpButton.style.visibility = "visible";
        } else {
            scrollUpButton.style.opacity = 0;
            scrollUpButton.style.visibility = "hidden";
        }
    });

    // Scroll to the top when the button is clicked
    scrollUpButton.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // Toggle the visibility of the popup form when the direct message button is clicked
    directMessageButton.addEventListener("click", function () {
        if (popupForm.style.visibility === "visible") {
            popupForm.style.visibility = "hidden";
            popupForm.style.opacity = 0;
        } else {
            popupForm.style.opacity = 1;
            popupForm.style.visibility = "visible";
        }
    });
});





//first carousel after navbar

const progressCircle = document.querySelector(".autoplay-progress svg");
    const progressContent = document.querySelector(".autoplay-progress span");
    var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      on: {
        autoplayTimeLeft(s, time, progress) {
          progressCircle.style.setProperty("--progress", 1 - progress);
          progressContent.textContent = `${Math.ceil(time / 1000)}s`;
        }
      }
    });


// for sticky navbar

window.addEventListener('scroll', function() {
  var navigation = document.querySelector('.second_nav');
  var navigationOffsetTop = navigation.offsetTop;
  
  if (window.pageYOffset > navigationOffsetTop) {
    navigation.classList.add('sticky');
  } else {
    navigation.classList.remove('sticky');
  }
});






// for searching elements in website

    document.addEventListener("DOMContentLoaded", function() {
        const searchButton = document.getElementById("searchButton");
        const searchInput = document.getElementById("searchInput");
        const swiperSlides = document.querySelectorAll(".swiper-slide");

        searchButton.addEventListener("click", function() {
            const searchText = searchInput.value.toLowerCase();

            for (const slide of swiperSlides) {
                const altText = slide.querySelector("img").getAttribute("alt").toLowerCase();
                if (altText.includes(searchText)) {
                    slide.style.display = "block"; // Show slide if the search text is found
                } else {
                    slide.style.display = "none"; // Hide slide if the search text is not found
                }
            }
        });
    });



// for fixed departure


    $(document).ready(function () {
      var itemsMainDiv = ('.MultiCarousel');
      var itemsDiv = ('.MultiCarousel-inner');
      var itemWidth = "";
  
      $('.leftLst, .rightLst').click(function () {
          var condition = $(this).hasClass("leftLst");
          if (condition)
              click(0, this);
          else
              click(1, this)
      });
  
      ResCarouselSize();
  
      $(window).resize(function () {
          ResCarouselSize();
      });
  
      //this function define the size of the items
      function ResCarouselSize() {
          var incno = 0;
          var dataItems = ("data-items");
          var itemClass = ('.item');
          var id = 0;
          var btnParentSb = '';
          var itemsSplit = '';
          var sampwidth = $(itemsMainDiv).width();
          var bodyWidth = $('body').width();
          $(itemsDiv).each(function () {
              id = id + 1;
              var itemNumbers = $(this).find(itemClass).length;
              btnParentSb = $(this).parent().attr(dataItems);
              itemsSplit = btnParentSb.split(',');
              $(this).parent().attr("id", "MultiCarousel" + id);
  
  
              if (bodyWidth >= 1200) {
                  incno = itemsSplit[3];
                  itemWidth = sampwidth / incno;
              }
              else if (bodyWidth >= 992) {
                  incno = itemsSplit[2];
                  itemWidth = sampwidth / incno;
              }
              else if (bodyWidth >= 768) {
                  incno = itemsSplit[1];
                  itemWidth = sampwidth / incno;
              }
              else {
                  incno = itemsSplit[0];
                  itemWidth = sampwidth / incno;
              }
              $(this).css({ 'transform': 'translateX(0px)', 'width': itemWidth * itemNumbers });
              $(this).find(itemClass).each(function () {
                  $(this).outerWidth(itemWidth);
              });
  
              $(".leftLst").addClass("over");
              $(".rightLst").removeClass("over");
  
          });
      }
  
  
      //this function used to move the items
      function ResCarousel(e, el, s) {
          var leftBtn = ('.leftLst');
          var rightBtn = ('.rightLst');
          var translateXval = '';
          var divStyle = $(el + ' ' + itemsDiv).css('transform');
          var values = divStyle.match(/-?[\d\.]+/g);
          var xds = Math.abs(values[4]);
          if (e == 0) {
              translateXval = parseInt(xds) - parseInt(itemWidth * s);
              $(el + ' ' + rightBtn).removeClass("over");
  
              if (translateXval <= itemWidth / 2) {
                  translateXval = 0;
                  $(el + ' ' + leftBtn).addClass("over");
              }
          }
          else if (e == 1) {
              var itemsCondition = $(el).find(itemsDiv).width() - $(el).width();
              translateXval = parseInt(xds) + parseInt(itemWidth * s);
              $(el + ' ' + leftBtn).removeClass("over");
  
              if (translateXval >= itemsCondition - itemWidth / 2) {
                  translateXval = itemsCondition;
                  $(el + ' ' + rightBtn).addClass("over");
              }
          }
          $(el + ' ' + itemsDiv).css('transform', 'translateX(' + -translateXval + 'px)');
      }
  
      //It is used to get some elements from btn
      function click(ell, ee) {
          var Parent = "#" + $(ee).parent().attr("id");
          var slide = $(Parent).attr("data-slide");
          ResCarousel(ell, Parent, slide);
      }
  
  });



//   for gallery

'use strict';

var moving_carousel = function carousel(options) {

    var _mcarousel = {

        paused: false,

        stopped: false,

        options: {
            speed: 4000,
            acceleration: 5,
            reverse: false,
            selector: '.photo_gallery_carousel',
            slidesSelector: '.photo_gallery_carousel__slides',
            leftArrowSelector: '.photo_gallery_carousel__arrow--left',
            rightArrowSelector: '.photo_gallery_carousel__arrow--right'
        },

        initial: function initial() {
            var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

            // Copy options to this.options
            for (var prop in options) {
                if (!options.hasOwnProperty(prop)) break;
                this.options[prop] = options[prop];
            }

            // Cache nodes
            var carousel = document.querySelector(options.selector || this.options.selector);
            var slides = this._slides = carousel.querySelector(this.options.slidesSelector);
            this._leftArrow = carousel.querySelector(this.options.leftArrowSelector);
            this._rightArrow = carousel.querySelector(this.options.rightArrowSelector);

            // Multiply speed value by the number of slides
            this.options.speed = this.options.speed * slides.children.length;

            // Set slides container width
            this.width = slides.offsetWidth;

            // Repeat elements
            slides.innerHTML = slides.innerHTML + slides.innerHTML + slides.innerHTML;

            this._registerEvents();
            this._animate();
        },
        _registerEvents: function _registerEvents() {
            var _this = this;

            var speed = this.options.speed;
            var reverse = this.options.reverse;

            this._rightArrow.addEventListener('mouseover', function () {
                _this.options.speed = speed / _this.options.acceleration;
                _this.options.reverse = false;
            });
            this._rightArrow.addEventListener('mouseleave', function () {
                _this.options.speed = speed;
                _this.options.reverse = reverse;
            });
            this._leftArrow.addEventListener('mouseover', function () {
                _this.options.speed = speed / _this.options.acceleration;
                _this.options.reverse = true;
            });
            this._leftArrow.addEventListener('mouseleave', function () {
                _this.options.speed = speed;
                _this.options.reverse = reverse;
            });

            // Pause when cursor is over carousel
            this._slides.addEventListener('mouseover', this.pause.bind(this));
            this._slides.addEventListener('mouseleave', this.start.bind(this));

            // Pause when cursor is over carousel
            window.addEventListener('resize', function () {
                _this.width = _this._slides.offsetWidth;
            });
        },
        pause: function pause() {
            this.paused = true;
        },
        start: function start() {
            this.paused = false;
        },
        stop: function stop() {
            this.stopped = true;
        },
        _animate: function _animate() {
            var _this2 = this;

            var slides = this._slides;
            var oneThird = slides.lastElementChild.getBoundingClientRect().right / 3;
            var framesCount = 0;
            var step = 0;
            var posX = 0;

            var animate = function animate() {
                if (!_this2.paused) {

                    framesCount = _this2.options.speed * 60 / 1000;
                    step = oneThird / framesCount;

                    posX += _this2.options.reverse ? step : -step;

                    slides.style.transform = 'translateX(' + posX + 'px)';

                    if (_this2.options.reverse) {
                        if (posX >= _this2.width - oneThird) {
                            posX = _this2.width - oneThird * 2;
                        }
                    } else {
                        if (Math.abs(posX) >= oneThird * 2) {
                            posX = -oneThird;
                        }
                    }
                }
                !_this2.stopped && requestAnimationFrame(animate);
            };
            animate();
        }
    };

    _mcarousel.initial(options);

    return _mcarousel;
};

window.onload = function () {
    return moving_carousel({
        selector: '.photo_gallery_carousel'
    });
};




// ================= review section ================



document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".reviewSwiper", {
        slidesPerView: 3,
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false // Set this to false to allow interaction without stopping autoplay
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
    

// Pause autoplay on hover
swiper.el.addEventListener("mouseenter", function () {
    swiper.autoplay.stop();
});

// Resume autoplay on hover out
swiper.el.addEventListener("mouseleave", function () {
    swiper.autoplay.start();
});
});



// for read more and read less content

document.addEventListener('DOMContentLoaded', function () {
    const paragraphContainers = document.querySelectorAll('.paragraph-container');
  
    paragraphContainers.forEach(function (container) {
      const paragraph = container.querySelector('.paragraph-content');
      const readMoreButton = container.querySelector('.read-more');
      const maxHeight = window.getComputedStyle(paragraph).maxHeight;
  
      // Convert computed max height to a number
      const computedMaxHeight = parseInt(maxHeight);
  
      if (paragraph.scrollHeight > computedMaxHeight) {
        readMoreButton.style.display = 'block';
      } else {
        readMoreButton.style.display = 'none';
      }
  
      readMoreButton.addEventListener('click', function () {
        if (paragraph.style.maxHeight === '' || paragraph.style.maxHeight === maxHeight) {
          paragraph.style.maxHeight = 'none';
          readMoreButton.textContent = 'Read less';
        } else {
          paragraph.style.maxHeight = maxHeight;
          readMoreButton.textContent = 'Read more';
        }
      });
    });
  });






// ================= partnership ============ 

// var swiper = new Swiper(".partnershipSwiper", {
//     effect: "cube",
//     // loop: true,
//     grabCursor: true,
//     cubeEffect: {
//         shadow: true,
//         slideShadows: true,
//         shadowOffset: 20,
//         shadowScale: 0.94,
//     },
//     speed: 2000, // Set the speed of transition (milliseconds)
//     pagination: {
//         el: ".swiper-pagination",
//     },
//     autoplay: {
//         delay: 2400,
//         disableOnInteraction: false, // Allow interaction without stopping autoplay
//     },
// });

// Pause autoplay on hover
// swiper.el.addEventListener("mouseenter", function () {
//     swiper.autoplay.stop();
// });

// // Resume autoplay on hover out
// swiper.el.addEventListener("mouseleave", function () {
//     swiper.autoplay.start();
// });


