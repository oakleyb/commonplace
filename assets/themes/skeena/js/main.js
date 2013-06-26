---
---
{% include JB/setup %}

(function () {
'use strict';

if (window.location.hash) {
    window.originalHash = window.location.hash;
    window.location.replace("#");

    // slice off the remaining '#' in HTML5:    
    if (typeof window.history.replaceState == 'function') {
      history.replaceState({}, '', window.location.href.slice(0, -1));
    }
} else {
    window.originalHash = false;
}

/*! Backstretch - v2.0.3 - 2012-11-30
* http://srobbin.com/jquery-plugins/backstretch/
* Copyright (c) 2012 Scott Robbin; Licensed MIT */
(function(e,t,n){"use strict";e.fn.backstretch=function(r,s){return(r===n||r.length===0)&&e.error("No images were supplied for Backstretch"),e(t).scrollTop()===0&&t.scrollTo(0,0),this.each(function(){var t=e(this),n=t.data("backstretch");n&&(s=e.extend(n.options,s),n.destroy(!0)),n=new i(this,r,s),t.data("backstretch",n)})},e.backstretch=function(t,n){return e("body").backstretch(t,n).data("backstretch")},e.expr[":"].backstretch=function(t){return e(t).data("backstretch")!==n},e.fn.backstretch.defaults={centeredX:!0,centeredY:!0,duration:5e3,fade:0};var r={wrap:{left:0,top:0,overflow:"hidden",margin:0,padding:0,height:"100%",width:"100%",zIndex:-999999},img:{position:"absolute",display:"none",margin:0,padding:0,border:"none",width:"auto",height:"auto",maxWidth:"none",zIndex:-999999}},i=function(n,i,o){this.options=e.extend({},e.fn.backstretch.defaults,o||{}),this.images=e.isArray(i)?i:[i],e.each(this.images,function(){e("<img />")[0].src=this}),this.isBody=n===document.body,this.$container=e(n),this.$wrap=e('<div class="backstretch"></div>').css(r.wrap).appendTo(this.$container),this.$root=this.isBody?s?e(t):e(document):this.$container;if(!this.isBody){var u=this.$container.css("position"),a=this.$container.css("zIndex");this.$container.css({position:u==="static"?"relative":u,zIndex:a==="auto"?0:a,background:"none"}),this.$wrap.css({zIndex:-999998})}this.$wrap.css({position:this.isBody&&s?"fixed":"absolute"}),this.index=0,this.show(this.index),e(t).on("resize.backstretch",e.proxy(this.resize,this)).on("orientationchange.backstretch",e.proxy(function(){this.isBody&&t.pageYOffset===0&&(t.scrollTo(0,1),this.resize())},this))};i.prototype={resize:function(){try{var e={left:0,top:0},n=this.isBody?this.$root.width():this.$root.innerWidth(),r=n,i=this.isBody?t.innerHeight?t.innerHeight:this.$root.height():this.$root.innerHeight(),s=r/this.$img.data("ratio"),o;s>=i?(o=(s-i)/2,this.options.centeredY&&(e.top="-"+o+"px")):(s=i,r=s*this.$img.data("ratio"),o=(r-n)/2,this.options.centeredX&&(e.left="-"+o+"px")),this.$wrap.css({width:n,height:i}).find("img:not(.deleteable)").css({width:r,height:s}).css(e)}catch(u){}return this},show:function(t){if(Math.abs(t)>this.images.length-1)return;this.index=t;var n=this,i=n.$wrap.find("img").addClass("deleteable"),s=e.Event("backstretch.show",{relatedTarget:n.$container[0]});return clearInterval(n.interval),n.$img=e("<img />").css(r.img).bind("load",function(t){var r=this.width||e(t.target).width(),o=this.height||e(t.target).height();e(this).data("ratio",r/o),e(this).fadeIn(n.options.speed||n.options.fade,function(){i.remove(),n.paused||n.cycle(),n.$container.trigger(s,n)}),n.resize()}).appendTo(n.$wrap),n.$img.attr("src",n.images[t]),n},next:function(){return this.show(this.index<this.images.length-1?this.index+1:0)},prev:function(){return this.show(this.index===0?this.images.length-1:this.index-1)},pause:function(){return this.paused=!0,this},resume:function(){return this.paused=!1,this.next(),this},cycle:function(){return this.images.length>1&&(clearInterval(this.interval),this.interval=setInterval(e.proxy(function(){this.paused||this.next()},this),this.options.duration)),this},destroy:function(n){e(t).off("resize.backstretch orientationchange.backstretch"),clearInterval(this.interval),n||this.$wrap.remove(),this.$container.removeData("backstretch")}};var s=function(){var e=navigator.userAgent,n=navigator.platform,r=e.match(/AppleWebKit\/([0-9]+)/),i=!!r&&r[1],s=e.match(/Fennec\/([0-9]+)/),o=!!s&&s[1],u=e.match(/Opera Mobi\/([0-9]+)/),a=!!u&&u[1],f=e.match(/MSIE ([0-9]+)/),l=!!f&&f[1];return!((n.indexOf("iPhone")>-1||n.indexOf("iPad")>-1||n.indexOf("iPod")>-1)&&i&&i<534||t.operamini&&{}.toString.call(t.operamini)==="[object OperaMini]"||u&&a<7458||e.indexOf("Android")>-1&&i&&i<533||o&&o<6||"palmGetResource"in t&&i&&i<534||e.indexOf("MeeGo")>-1&&e.indexOf("NokiaBrowser/8.5.0")>-1||l&&l<=6)}()})(jQuery,window);


    var mySwiper;

    window.onload = function() {
        var $masthead = $('.masthead'),
            hGalleryArray=new Array();


        mySwiper = new Swiper('.swiper-root',{
            mode:'vertical',
            // loop: true,
            simulateTouch: true,
            mousewheelControl: true,
            keyboardControl: true,
            grabCursor: true,
            onSlideChangeStart: function (swiper) {
                var $slide = $(swiper.getSlide(swiper.realIndex));
                // if ($slide.data('zoom')) {
                //     map.zoom($slide.data('zoom'), true);
                // } else {
                //     map.zoom(zoom, true);
                // }
            },
            onSlideChangeEnd: function (swiper) {
                var $slide = $(swiper.getSlide(swiper.realIndex)),
                    $shortPost = $slide.find('.short-post'),
                    $longPost = $slide.find('.post'),
                    $gallery = $slide.find('.gallery'),
                    backgroundImage = $slide.data('img'),
                    currentBackgroundPath = $('.swiper-root').css('background-image').split('/'),
                    currentBackgroundImage = currentBackgroundPath[currentBackgroundPath.length-1].replace(')',''),
                    childSliderID=$('.gallery',$slide).attr('id') || '',
                    subSlideIsLight=undefined;

                //set this slide to be 'active' for purposes of applying global keypress events
                $('.swiper-root>.swiper-wrapper>div.swiper-slide').removeClass('active');
                $slide.addClass('active');

                // show or hide the nav
                if ($slide.data('hash')) {
                    window.location.hash = $slide.data('hash');
                }
               if (swiper.activeIndex !== 0) {
                    $masthead.removeClass('hidden');
                } else {
                    $masthead.addClass('hidden');
                }

                //set the body class as light or dark to change nav and sidebar colors for different backgrounds
                if (!(hGalleryArray[childSliderID]===undefined))     {          
                    subSlideIsLight=$('.swiper-slide',$slide).eq(hGalleryArray[childSliderID].activeSlide).hasClass('light');
                }

                if ((($slide.find('div.page.light').length) && subSlideIsLight === undefined) || (subSlideIsLight)) {
                    $('body').addClass('dark');
                } else {
                    $('body').removeClass('dark');
                }

                // update the background image
                if (backgroundImage && currentBackgroundImage !== backgroundImage) {
                    $('.swiper-root').backstretch('{{BASE_PATH}}/assets/themes/skeena/img/'+ backgroundImage, {fade:450});
                    
                } else if (! backgroundImage) {
                    $('.swiper-root').backstretch('{{BASE_PATH}}/assets/themes/skeena/img/cover.jpg', {fade:450});
                    

                }
                if (swiper.activeIndex > 1){
                    $('#-zoom-7').parent().fadeOut("fast");
                } else {
                    $('#-zoom-7').parent().fadeIn("fast");
                }

                // activate textify swiper
                if ($longPost.length && ! $longPost.find('.textify').length) {
                    $longPost.textify({
                        numberOfColumn: 1,
                        width: "auto",
                        padding:0,
                        height: "auto"//$longPost.height()

                    });
                    $longPost.removeClass('hidden');
                }

                // EDIT THIS FUNCTION TO MAKE THE SUB-TOC ITEMS ALL THE SAME HEIGHT
                // $('.sub-toc-item').each(function () {
                //     var currentTallest = 0;
                //     $('h3.story-title',$(this)).each(function () {                    
                //             if ($(this).height() > currentTallest) { currentTallest = $(this).height(); }
                //         });
                //         //if (!px && Number.prototype.pxToEm) currentTallest = currentTallest.pxToEm(); //use ems unless px is specified
                //         // for ie6, set height since min-height isn't supported
                //         if ($.browser.msie && $.browser.version == 6.0) { $(this).children().css({'height': currentTallest}); }
                //         $('h3.story-title',$(this)).css({'min-height': currentTallest});
                // });


                // if ($slide.next().find('.gallery').length) {
                //     $slide.next().removeClass('hidden');
                // }

                if ($gallery.length) {
                    var theID=$gallery.attr('id'),
                        paginationClass='.'+theID+'-pagination';

                // Add this new gallery object into an array for
                // later access to the swiper methods
                    if(!(theID in hGalleryArray)){
                    hGalleryArray[theID]= $gallery.swiper({
                        mode: 'horizontal',
                        pagination : paginationClass,
                        keyboardControl:false,
                        createPagination: true,                        
                        onSlideChangeEnd: function (swiper) {
                            var $slide = $(swiper.getSlide(swiper.realIndex)),
                                $slideRoot = $slide.parentsUntil(".page.full",".page-wrapper"),
                                backgroundImage = $slide.data('img'),
                                $voiceWrapper=$slide.find('.voice-content-wrapper');


                            // update body class to change element colors + update the background image
                            //(swiper.activeIndex==0 && $slideRoot.parent().hasClass("light")) ? $('body').addClass('dark') : $('body').removeClass('dark');
                            if (backgroundImage) {
                                $slideRoot.backstretch('{{BASE_PATH}}/assets/themes/skeena/img/'+ backgroundImage, {fade:450});
                            } else {
                                $('.backstretch',$slideRoot).remove();
                            }

                            if ($slide.hasClass('light')){
                                $('body').addClass('dark');
                            } else {
                                $('body').removeClass('dark');
                            }

                            // initialize scroll buttons for voices content if overflowing
                            if ($voiceWrapper && (!($voiceWrapper.find('.voice-scroller').length))) {                                    
                                if(($('.voice-content-text',$voiceWrapper).height())>($('.voice-content',$voiceWrapper).height())) {
                                    $voiceWrapper.prepend('<div class="voice-scroller"><span class="up"></span><span class="down"></span></div>');
                                }
                            } //end voices bio scroll button init
                        } //end onSlideChangeEnd callback for horizontal slider                        
                    }); // end init array for main-slide-contained horizontal gallery
                    } // end if block checking for gallery object existance
                } // end if block for gallery.length
            }, // end on slideChangeEnd callback for main vertical slider
            scrollbar: {
                container : '.swiper-scrollbar',
                draggable : true,
                hide: false,
                snapOnRelease: true
            } //end scrollbar plugin parameter array
        });  //end init block for main vertical swiper         
        

        // Activate left/right arrows that we've placed on top of all horizontally enabled slides
        $('.navarrows a').on('click',function (e){
            e.preventDefault();
            e.stopPropagation();
            var $hContainer=$(this).parentsUntil('div.swiper-slide','div.page').find('div.page-wrapper'),
                isGallery=$hContainer.hasClass('gallery-wrapper'),
                // yes, here theID may be a string, or it may be an object. sorry.
                theID= isGallery ? $hContainer.find('.gallery').attr('id') : $hContainer.find('.text_pagination');

                if(isGallery){
                    //this is a swiper gallery.  simply use the built in swipeNext/swipePrev methods
                    $(this).hasClass("rightarrow") ? hGalleryArray[theID].swipeNext() : hGalleryArray[theID].swipePrev();
                } else { 
                    //this isn't a gallery -> must be a textify slide. update logic later if more slide types introduced
                    //we need to fire the click event on the next/previous hilited number
                    //as textify doesn't supply prev/next navigation methods

                    var theGalIndex=theID.find('li.selected').index(),
                    theNavNumbers=$('li',theID);

                    //are we going right?
                    if ($(this).hasClass("rightarrow")){ 
                        //can we go right?
                        if ((++theGalIndex)<theNavNumbers.length) {
                            theNavNumbers.eq(theGalIndex).click();
                        }
                    } else { //it appears we're going left
                        //can we go left?
                        if ((--theGalIndex)>=0) {
                            theNavNumbers.eq(theGalIndex).click();
                        }
                    } // end logic for textify left/right navigation
                } // end logc blocks for gallery vs textified slide
        }); // end function for nav arrow click handling

        // Control the horizontal sliders with click functions
        $('.gallery-wrapper').on('click','.sub-toc-item,.swiper-pagination-switch',function(e){
            e.preventDefault();
            var theID=$(this).parentsUntil('.page.full').find('.swiper-container').attr('id'),
                theGalIndex = $(this).hasClass('sub-toc-item') ? $(this).index()+1 : $(this).index();
            hGalleryArray[theID].swipeTo(theGalIndex);
        });

        // Control the horizontal sliders using arrow keys
        $(document).on('keydown',function (e) {
            var kc = e.keyCode || e.charCode;
            if (kc==39 || kc==37){
                e.preventDefault();
                e.stopPropagation();
            }
            if (kc == 39) {
                $('a.rightarrow','.swiper-slide.active').click();
            }
            if (kc == 37) {
                $('a.leftarrow','.swiper-slide.active').click();
            } 
        });

        // Control voices biography content with up/down arrows
        $('.voice-content-wrapper').on('click','span.up, span.down',function(e){
            e.preventDefault();
            var $this=$(this),
                scrollDown=$this.hasClass('down') ? true : false,
                theContent=$this.parent().siblings('.voice-content'),
                currentScroll=theContent.scrollTop();

            if(scrollDown){
                currentScroll+=(theContent.height()*.3)
            } else{
                currentScroll-=(theContent.height()*.3)                
            }
                $this.parent().siblings('.voice-content').animate({scrollTop: currentScroll}, 300);//.scrollTop(currentScroll);

        });
        



        // manage hash changes
        if (originalHash) {
            mySwiper.swipeTo($(originalHash).index());    
        }


        // style body copy intros and outros
        $('p:firstChild','div.page-content').each(function(){
            var str=$(this).html(),
            delimiter = ' ',
            start = 0, end = 6,
            first = str.split(delimiter).slice(start,end).join(delimiter),
            last = str.split(delimiter).slice(end).join(delimiter),
            result = "<span class='intro'>"+first+"</span> "+last;
            $(this).html(result);
        });

        // init the audio player for voices
        audiojs.events.ready(function() {
            var as = audiojs.createAll();
        });
        
    }; //end window.onLoad event handler function



    $(document).ready(function () {

        var $title = $(".page-header").find('.title-name'),
            //$toc = $("#toc"),
            $window = $(window),
            $popoverArray=new Array();

///////////////////////////////////////


        $('a', 'ul.nav').each(function(){
            var $this=$(this),
                theID=$this.attr('id')||false;
            if (theID) {
               $popoverArray[theID]=$('#'+theID);
                $popoverArray[theID].popover({
                    placement: "bottom",
                    trigger: "manual",
                    container: ".toc-section",
                    animation: "false",
                    html: true,
                    content: $('#'+theID+'-content').html()
                });

                $popoverArray[theID].on('click mouseenter', function (e) {
                    var $popover,
                        tocHeight,
                        $this=$(this);
                    e.preventDefault();
                    $this.popover('toggle');
                    $popover = $('.toc-section').find('.popover');
                    tocHeight = $popover.closest('.toc-section').height();
                    $popover.find('.popover-content').height($popover.closest('.section').height() - tocHeight);
                    //console.log($popover.closest('.section').height() - tocHeight);
                    $popover.find('.arrow').position({
                       of: $this,
                       my: 'bottom center',
                       at: 'bottom'
                    });
                    // equalize the heights of titles in each row
                    $('.popover-content .row').each(function () {
                        var currentTallest = 0;
                        $('h3.story-title',$(this)).each(function () {                    
                                if ($(this).height() > currentTallest) { currentTallest = $(this).height(); }
                            });
                            //if (!px && Number.prototype.pxToEm) currentTallest = currentTallest.pxToEm(); //use ems unless px is specified
                            // for ie6, set height since min-height isn't supported
                            if ($.browser.msie && $.browser.version == 6.0) { $(this).children().css({'height': currentTallest}); }
                            $('h3.story-title',$(this)).css({'min-height': currentTallest});
                    }); // end .each iteration of content row items to set each to same height
                }); // end onclick binding
            }//end block -> if this anchor has an ID attached to it
        }); //end function to initialize all menu items


        // $toc.popover({
        //     placement: "bottom",
        //     trigger: "manual",
        //     container: ".toc-section",
        //     animation: "false",
        //     html: true,
        //     content: $('#toc-content').html()
        // });

        // $toc.on('click mouseenter', function (e) {
        //     var $popover, tocHeight;
        //     e.preventDefault();
        //     $toc.popover('toggle');
        //     $popover = $('.toc-section').find('.popover');
        //     tocHeight = $popover.closest('.toc-section').height();
        //     $popover.find('.popover-content').height($popover.closest('.section').height() - tocHeight);
        //     //console.log($popover.closest('.section').height() - tocHeight);
        //     $popover.find('.arrow').position({
        //        of: $toc,
        //        my: 'bottom center',
        //        at: 'bottom'
        //     });
        //     // equalize the heights of titles in each row
        //     $('.popover-content .row').each(function () {
        //         var currentTallest = 0;
        //         $('h3.story-title',$(this)).each(function () {                    
        //                 if ($(this).height() > currentTallest) { currentTallest = $(this).height(); }
        //             });
        //             //if (!px && Number.prototype.pxToEm) currentTallest = currentTallest.pxToEm(); //use ems unless px is specified
        //             // for ie6, set height since min-height isn't supported
        //             if ($.browser.msie && $.browser.version == 6.0) { $(this).children().css({'height': currentTallest}); }
        //             $('h3.story-title',$(this)).css({'min-height': currentTallest});
        //     });

        // }); // end TOC click functino

/////////////////////////////////////

        $(document).on('click', '.story', function (e) {
            e.preventDefault();
            mySwiper.swipeTo($($(this).data('story')).index());
            $toc.popover('hide');
        }); // end scroll to clicked story binding

        $('.page-footer').on('click', function () {
            // var nextSlide = mySwiper.realIndex + 1;
            // if (nextSlide === mySwiper.slides.length) {
            //     mySwiper.swipeTo(0);
            // } else {
            //     mySwiper.swipeTo(mySwiper.realIndex);    
            // }
            mySwiper.swipeNext();
            
        }); // end page footer scroll to next page click binding
    }); //end document.ready function

    var layer = new MM.TemplatedLayer('http://tilestream.apps.ecotrust.org/v2/commonplace/{Z}/{X}/{Y}.png');

    var center = {
        lat:54,
        lon: -130
    };
    var zoom = 7;

    // Create a map
    window.map = mapbox.map('map', layer, null, []);
    map.centerzoom(center, zoom);

})(); //end generic wrapper function