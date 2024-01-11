// ==UserScript==
// @name AudioBookBay hide category: Tutorial
// @description Hide Tutorial
// @Auther AudioBookBay_ScriptUpdater
// @version 0.1
// @license CC0
// @namespace https://greasyfork.org/en/users/1246393-audiobookbay-scriptupdater
// @require  http://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js
// @grant    GM_addStyle

// @match    https://audiobookbay.nl/*
// @match    http://audiobookbay.nl/*
// @match    https://audiobookbay.fi/*
// @match    http://audiobookbay.fi/*
// @match    https://audiobookbay.li/*
// @match    http://audiobookbay.li/*
// @match    https://audiobookbay.is/*
// @match    http://audiobookbay.is/*
// @match    https://theaudiobookbay.me/*
// @match    http://theaudiobookbay.me/*
// @match    https://audiobookbayabb.com/*
// @match    http://audiobookbayabb.com/*
// @match    https://audiobookbay.se/*
// @match    http://audiobookbay.se/*
// @match    https://audiobookbay.biz/*
// @match    http://audiobookbay.biz/*
// @match    https://audiobookbay.cc/*
// @match    http://audiobookbay.cc/*
// @match    https://audiobookbay.la/*
// @match    http://audiobookbay.la/*
// @match    https://audiobookbay.unblockit.lat/*
// @match    http://audiobookbay.unblockit.lat/*

// ==/UserScript==
//- The @grant directive is needed to restore the proper sandbox.

$(".post").has (".postInfo:contains('Tutorial')").hide ();