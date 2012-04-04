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
            effect: 'normal'
        }
        
        if (options)
        {
            $.extend(settings, options);
        }
        
        var currentImageNo = 1;
        var thisObj = this;
        var numImages = this.find('img').length;
        
        this.find("img").hide();
        this.find("img:nth-child("+currentImageNo+")").show();

        function changeImage(elementObj)
        {
            switch (settings.effect)
            {
                case 'normal': {
                        $(elementObj).find("img").hide();
                        $(elementObj).find("img:nth-child("+currentImageNo+")").show();
                        break;
                }
                
                case 'fade': {
                        $(elementObj).find("img").hide();
                        $(elementObj).find("img:nth-child("+currentImageNo+")").fadeIn();
                        break;
                }
                
                 case 'slide': {
                        $(elementObj).find("img").slideUp();
                        $(elementObj).find("img:nth-child("+currentImageNo+")").slideDown();
                        break;
                }
                
                default: {
                        $(elementObj).find("img").hide();
                        $(elementObj).find("img:nth-child("+currentImageNo+")").fadeIn();
                        break;
                }
                
            }
            if (numImages == currentImageNo)
            {
                $("#"+settings.nextLinkId).addClass('inactive');
            }
            else
            {
                $("#"+settings.nextLinkId).removeClass('inactive');
            }
            
            if (currentImageNo == 1)
            {
                $("#"+settings.previousLinkId).addClass('inactive');
            }
            else
            {
                $("#"+settings.previousLinkId).removeClass('inactive');
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
    }
    
    
}) (jQuery)

