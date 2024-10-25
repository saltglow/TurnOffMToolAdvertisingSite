// ==UserScript==
// @name         TurnOffMToolAdvertisingSite
// @name:zh-CN   关闭MTool广告网站
// @name:zh-TW   关闭MTool广告网站
// @name:en      TurnOffMToolAdvertisingSite
// @namespace    http://tampermonkey.net/
// @version      v1.0.0
// @description  Try closing the specific website tab, MTool is a good script, but every time I start it jumps to his suffocating URL 😀, I can't stand the time wasted by closing the URL, I'm sorry I had to manipulate you
// @description:zh-CN  尝试关闭指定的网站标签页,MTool是个很好的脚本,但是每次启动都会跳转到他那令人窒息的网址😀,我忍受不了被关闭网址浪费的时间了,对不起不得不操控你了
// @description:zh-TW  尝试关闭指定的网站标签页,MTool是个很好的脚本,但是每次启动都会跳转到他那令人窒息的网址😀,我忍受不了被关闭网址浪费的时间了,对不起不得不操控你了
// @description:en     Try closing the specific website tab, MTool is a good script, but every time I start it jumps to his suffocating URL 😀, I can't stand the time wasted by closing the URL, I'm sorry I had to manipulate you
// @author       saltglow
// @match        *://afdian.com/a/AdventCirno*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    setTimeout(function() {
        window.close();
    }, 1); // 等待0.001秒后关闭标签页
})();
