/**
* jQuery SimpleSlide Plugin
*
* Copyright (c) 2012 Saurabh R Nair <saurabh@rebugged.com>
* Released under MIT License. See license.txt.
*
* Please keep the above copyright notice intact.
*
* Plugin URL: http://rebugged.com/simpleslide/
*
* See http://rebugged.com/simpleslide/ or simpleslide-demo.html for usage instructions
*
*/

(function ($){
    $.fn.simpleslide = function(options){
        var settings = {
            previousLinkId: 'prev',
            nextLinkId: 'next',
            effect: 'normal',
            slideElement: 'img',
            inactiveClass: '',
            autoPlay: true,
            autoPlayInterval: 3000
        }
        
        if (options)
        {
            $.extend(settings, options);
        }
        
        var currentImageNo = 1;
        var thisObj = this;
        var numImages = this.find(settings.slideElement).length;
        
        this.find(settings.slideElement).hide();
        this.find(settings.slideElement+":nth-child("+currentImageNo+")").show();

        function changeImage(elementObj)
        {
            switch (settings.effect)
            {
                case 'normal': {
                        $(elementObj).find(settings.slideElement).hide();
                        $(elementObj).find(settings.slideElement+":nth-child("+currentImageNo+")").show();
                        break;
                }
                
                case 'fade': {
                        $(elementObj).find(settings.slideElement).hide();
                        $(elementObj).find(settings.slideElement+":nth-child("+currentImageNo+")").fadeIn();
                        break;
                }
                
                 case 'slide': {
                        $(elementObj).find(settings.slideElement).slideUp();
                        $(elementObj).find(settings.slideElement+":nth-child("+currentImageNo+")").slideDown();
                        break;
                }
                
                default: {
                        $(elementObj).find(settings.slideElement).hide();
                        $(elementObj).find(settings.slideElement+":nth-child("+currentImageNo+")").fadeIn();
                        break;
                }
                
            }
            if (numImages == currentImageNo)
            {
                $("#"+settings.nextLinkId).addClass(settings.inactiveClass);
            }
            else
            {
                $("#"+settings.nextLinkId).removeClass(settings.inactiveClass);
            }
            
            if (currentImageNo == 1)
            {
                $("#"+settings.previousLinkId).addClass(settings.inactiveClass);
            }
            else
            {
                $("#"+settings.previousLinkId).removeClass(settings.inactiveClass);
            }
        }

        $("#"+settings.previousLinkId).click(function(){
            if (currentImageNo > 1)
            {
                currentImageNo--;
                changeImage(thisObj);
            }

        });

        $("#"+settings.nextLinkId).click(function(){
            if (numImages > currentImageNo)
            {
                currentImageNo++;
                changeImage(thisObj);
            }
        });
        
        if (settings.autoPlay)
        {
            var timer = window.setInterval(function(){
                if (numImages > currentImageNo)
                {
                    currentImageNo++;
                }
                else
                {
                    currentImageNo = 1;
                }
                changeImage(thisObj);
            }, settings.autoPlayInterval);
        }
    }
    
    
}) (jQuery)

