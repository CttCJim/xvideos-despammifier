// ==UserScript==
// @name         xvid adjustments
// @namespace    http://tampermonkey.net/
// @version      2024-03-26
// @description  try to take over the world!
// @author       CttCJim
// @match        https://www.xvideos.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=xvideos.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    setInterval(function(){
        $(".videoad-title-invideo").remove(); //remove hovertext on video
        $(".premium-results-line").remove(); //remove red from search results
        $(".icon-f.icf-ticket-red.icf-white-fill").closest('.activity-event').remove(); //remove red search results
        $(".video-title").remove(); //remove hovertext on video
        $("#tab-videos-red").hide(); //remove red tab on model page
        $(".red-ticket").closest("li").remove(); //remove red from top menu
        $(".btn.btn-default.premium").hide(); //remove red tab on channel
        $(".banner-goto-redtab").closest('.embed-responsive.banner-slider').remove(); //remove diant RED banner on model page
        $('a[href="https://www.xvideos.red"]').remove(); //remove PREMIUM button (next to account, top of page)
    },100);
    var html = `
    <style>
    .premium-results-line {max-height:0px!important;}
    </style>
    `;
    //document.body.innerHTML+=html;
})();