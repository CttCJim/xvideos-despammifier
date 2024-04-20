// ==UserScript==
// @name         xvid adjustments
// @namespace    http://tampermonkey.net/
// @version      2024.04.19.01
// @description  Remove Red and ads from xvideos and make QoL changes
// @author       CttCJim
// @match        https://www.xvideos.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=xvideos.com
// @grant        none
// ==/UserScript==
//get the latest version of this file from GitHub! https://github.com/CttCJim/xvideos-despammifier
//Look me up on Patreon if you love this: https://www.patreon.com/CttCJim

(function() {
    'use strict';

    // Your code here...
    function insertAfter(referenceNode, newNode) {
        referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    }
    var init=true;
    var html = `<span id="xvdespLogo" style="position:relative;left:-103px;color:#e1351f;font-weight:bold;font-size:2em;top: 13px;text-shadow:1px 1px 0 #000,-1px 1px 0 #000,-1px -1px 0 #000,1px -1px 0 #000;">Despammified!</span>`;
    if(init) {
        var el = document.createElement("span");
        el.innerHTML = html;
        var div = document.getElementById("site-logo");
        insertAfter(div, el);
        init=false;
    }

    function killstuff() {
        $("#full-video-link-btn").remove(); //remove button "see the full video on Red"
        $(".videoad-title-invideo").remove(); //remove hovertext on video
        $(".premium-results-line").remove(); //remove red from search results
        $(".purchase-content-is-init").remove(); //remove videos with red tag on them
        $(".search-premium-tabs").hide(); //hide FERR|RED tab in tag search
        $(".video-title").remove(); //remove hovertext on video
        $("#tab-videos-red").hide(); //remove red tab on model page
        $(".red-ticket").closest("li").remove(); //remove red from top menu
        $(".btn.btn-default.premium").hide(); //remove red tab on channel
        $(".banner-goto-redtab").closest('.embed-responsive.banner-slider').remove(); //remove giant RED banner on model page
        $("#profile-title.banner-sliders > .top-right").css('top','0px'); //move subscribe button to be visible (offest due to removing the red banner)
        $('a[href="https://www.xvideos.red"]').remove(); //remove PREMIUM button (next to account, top of page)
    }
    setInterval(killstuff,100);
})();
