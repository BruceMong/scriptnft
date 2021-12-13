// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://marketplace.thetanarena.com/?page=1&sort=PriceAsc
// @icon         https://www.google.com/s2/favicons?domain=thetanarena.com
// @run-at        document-end
// ==/UserScript==

(function() {

    function inIframe() {
        try {
            return window.self !== window.top;
        } catch (e) {
            return true;
        }
    }



    if (!inIframe()) //Permet de pas réexecuter le script dans la fênetre Iframe
    {

        setTimeout(function() {

            function beep() {
                var snd = new Audio("data:audio/wav;base64,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qJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU=");
                snd.play();
            }


            function wait(ms) {
                return new Promise(resolve => setTimeout(resolve, ms));
            }
            /*
            function clickPerso() {
                function offset(el) {
                    var rect = el.getBoundingClientRect(),
                        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
                        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
                }
                var divOffset = offset(document.querySelector('iframe').contentWindow.document.querySelector("#app > section > div > div.v1dL4CXifgr9ZQfxzEeq > div._K1vS08OYVZ33ZS45ptQ > div.rKe8SyN5EbDxc_X9_6sl").firstElementChild.getElementsByTagName('div')[2]);
                console.log(divOffset.left, divOffset.top);
                document.querySelector('iframe').contentWindow.document.elementFromPoint(divOffset.left, divOffset.top).click();
            }
*/


            function clickPerso() {
                document.querySelector('iframe').contentWindow.document.querySelector("#app > section > div > div.v1dL4CXifgr9ZQfxzEeq > div._K1vS08OYVZ33ZS45ptQ > div.rKe8SyN5EbDxc_X9_6sl").firstElementChild.click();
            }

            function clickbuttonbuy() {
                var button = document.querySelector('iframe').contentWindow.document.getElementsByTagName('button');
                button[0].click();
            }

            function clickbuttonbuy2() {
                var button = document.querySelector('iframe').contentWindow.document.getElementsByTagName('button');
                button[3].click();
            }

            function calculRentable() {
                let gTHCBattle = iframe.document.querySelector("#app > div > div > div > div > div > div > div > div").children[1].children[0].innerText.split('/'); //number gTHC battle;
                let gTHCBattleLeft = gTHCBattle[1] - gTHCBattle[0];
                let rarityHero = iframe.document.querySelector("#app > div > div > div > div > div > div > div > div > div:nth-child(1) > div ").children[3].innerText;
                let winBonus;
                switch (rarityHero) {
                    case "Legendary":
                        winBonus = 23.55;
                        break;
                    case "Epic":
                        winBonus = 6.5;
                        break;
                    case "Common":
                        winBonus = 3.25;
                        break;
                    default:
                        winBonus = 3.25;
                        break;
                }
                gTHC = (((gTHCBattleLeft * (winBonus + gTHCWin)) / 2) + ((gTHCBattleLeft * gTHCLoose) / 2)).toFixed(2);; // gTHC en cas d'une victoire sur 2
                printBattleLeft.innerText = gTHCBattleLeft;
                printRarete.innerText = rarityHero;
                printRevenuHero.innerText = (gTHC * ThetanCoinInDollar).toFixed(2) + " $";;
                printPriceHero.innerText = price + " $";
                rentabilite = ((gTHC * ThetanCoinInDollar) - price).toFixed(2);
                printUrlHero.innerHTML = "<a href=" + iframe.window.location.href + " >" + iframe.window.location.href + "</a>";

                if (rentabilite > 0) {
                    printRentabilite.style.color = "green";
                    printRentabilite.innerText = "+" + rentabilite + " $";
                    return true;
                } else {
                    printRentabilite.style.color = "red";
                    printRentabilite.innerText = rentabilite + " $";
                    return false;
                }
            }

            function getPriceThetanCoin() {
                function httpGet(theUrl) {
                    var xmlHttp = new XMLHttpRequest();
                    xmlHttp.open("GET", theUrl, false); // false for synchronous request
                    xmlHttp.send(null);
                    return xmlHttp.responseText;
                }
                ThetanCoinInDollar = (JSON.parse(httpGet("https://api.coingecko.com/api/v3/simple/price?ids=thetan-coin&vs_currencies=usd"))['thetan-coin'].usd).toFixed(2);;
                printThetanCoinInDollar.innerText = "  1 Thetan Coin =  " + ThetanCoinInDollar + " $";
            }


            //event button





            function NightLight() { // jour nuit theme
                if (nightLight == true) {
                    nightLight = false;
                    buttonNightLight.value = "NightLight";
                    buttonNightLight.style.backgroundColor = "#27ae60";
                    document.getElementById('mainPage').style.backgroundColor = "#e1c1a0"
                    document.querySelector("html").style.background = "linear-gradient(rgba(196, 102, 0, 0.6), rgba(155, 89, 182, 0.6))"
                    document.querySelector("#msform > fieldset").style.background = "#white"


                    linear - gradient(rgba(196, 102, 0, 0.6), rgba(155, 89, 182, 0.6))
                    console.log("nightLight off");
                } else {
                    nightLight = true;
                    buttonNightLight.value = "DayLight";
                    buttonNightLight.style.backgroundColor = "#ae2727";
                    document.getElementById('mainPage').style.backgroundColor = "black";
                    document.querySelector("html").style.background = "black"
                    document.querySelector("#msform > fieldset").style.background = "#ffffff6b"


                    console.log("nightLight on");
                }
            }

            function stopBot() { // bouton stop
                if (stopbot == true) {
                    stopbot = false;
                    buttonStop.value = "Start";
                    buttonStop.style.backgroundColor = "#27ae60";
                    console.log("bot stopped");
                    compteurReload = 0;
                } else {
                    stopbot = true;
                    buttonStop.value = "Stop";
                    buttonStop.style.backgroundColor = "#ae2727";
                    console.log("bot started");
                    autobuy()
                }
            }



            function validate() { // bouton valider
                let oldPriceLimit = priceLimit;
                priceLimit = parseInt(document.getElementsByName('pricelimit')[0].value);
                if (priceLimit != oldPriceLimit) {
                    console.log("price limit changed");
                    printNew.innerHTM = "";
                    printLast.innerText = "";
                    //pour qui puisse re-check le hero actuel en cas de changement de prix limite
                }
                printPriceLimit.innerText = priceLimit;
                console.log(priceLimit);
            }
            /*
                        let loadScriptPromise = function(src) {
                            return new Promise((resolve, reject) => {
                                loadScript(src, (err, script) => {
                                    if (err) reject(err);
                                    else resolve(script);
                                });
                            });
                        };
            */
            // usage:
            // loadScriptPromise('path/script.js').then(...)
            function reloadIframe() {
                document.querySelector('iframe').src = document.querySelector('iframe').src;
                console.log('iframe reload');
                loadedIframe = false;
                loadedIframeContentJs = false;
                compteurReload++;
                printReload.innerText = compteurReload;
                loadIframe();
                return
            }

            function loadIframe() { // create event that when iframe  loaded,  create an event to wait load iframe content js
                document.querySelector('iframe').addEventListener('load', () => {
                    console.log("iframe loaded HTML");
                    loadedIframe = true;
                    //console.log(iframe.document.querySelector("#app > section > div > div.v1dL4CXifgr9ZQfxzEeq"));
                    loadContentJsIframe();
                }, once = true); // s'éxécute une seule fois
            }

            //document.querySelector('iframe').addEventListener('load', OnLoadIframe());

            //OnLoadIframe = function() {




            function loadContentJsIframe() { // create event to wait load iframe content js
                let jscontentShop = iframe.document.querySelector("#app > section > div > div.v1dL4CXifgr9ZQfxzEeq"); //div  parent qui contient le shop en loading
                options = { childList: true },
                    observer.observe(jscontentShop, options);
            }

            function mCallback(mutations) { //event that trigger when js content is loaded
                for (let mutation of mutations) {
                    if (mutation.type === 'childList') {
                        mutation.addedNodes.forEach(function(node) {
                            console.log(node);
                            console.log(node.className);
                            if (node.className == "_K1vS08OYVZ33ZS45ptQ") {
                                console.log("js content loaded");
                                loadedIframeContentJs = true;
                                observer.disconnect();
                                autobuy();
                                return;
                            }
                        });
                    }
                }
            }

            /*
                                    var elemToObserve = document.getElementById('your_elem_id');
                                    var prevClassState = elemToObserve.classList.contains('your_class');
                                    var observer = new MutationObserver(function(mutations) {
                                        mutations.forEach(function(mutation) {
                                            if (mutation.attributeName == "class") {
                                                var currentClassState = mutation.target.classList.contains('your_class');
                                                if (prevClassState !== currentClassState) {
                                                    prevClassState = currentClassState;
                                                    if (currentClassState)
                                                        console.log("class added!");
                                                    else
                                                        console.log("class removed!");
                                                }
                                            }
                                        });
                                    });
            */













            //IFrame part

            async function autobuy() {
                if (checkOptions() == false) {
                    console.log("checkOptions() == false");
                    return;
                }

                persoSelect = document.querySelector('iframe').contentWindow.document.querySelector("#app > section > div > div.v1dL4CXifgr9ZQfxzEeq > div._K1vS08OYVZ33ZS45ptQ > div.rKe8SyN5EbDxc_X9_6sl > div:nth-child(1) > div.HQKOhoAMtTq_y8DTZDGl > div > div._TGcu2vbUFLx1l5YptZK._ZiBmVXRYru3dGxj59oK > span.x1XesU_0OuWqSWN_Lqk9._ZiBmVXRYru3dGxj59oK").innerText;
                persoSelect += document.querySelector('iframe').contentWindow.document.querySelector("#app > section > div > div.v1dL4CXifgr9ZQfxzEeq > div._K1vS08OYVZ33ZS45ptQ > div.rKe8SyN5EbDxc_X9_6sl > div:nth-child(1) > div.HQKOhoAMtTq_y8DTZDGl > div > div._TGcu2vbUFLx1l5YptZK._ZiBmVXRYru3dGxj59oK > span.cGnfWVqUjWDf7blY11f3").innerText;
                console.log(persoSelect);

                printNew.innerHTML = persoSelect;
                if (printNew.innerHTML == printLast.innerHTML) { //si le perso n'a pas changé on reload direct l'iframe
                    console.log('perso not changed');
                    reloadIframe();
                    return;
                } else {
                    printLast.innerHTML = printNew.innerHTML;
                }
                let pricebox = document.querySelector('iframe').contentWindow.document.querySelector("#app > section > div > div.v1dL4CXifgr9ZQfxzEeq > div._K1vS08OYVZ33ZS45ptQ > div.rKe8SyN5EbDxc_X9_6sl").firstElementChild.getElementsByTagName('div')[2].getElementsByTagName('div')[2].getElementsByTagName('div')[0].getElementsByTagName('span')[1];
                price = pricebox.innerText.replace(/[^0-9.]/g, '');

                console.log(price);
                if (price < priceLimit) {
                    find = true;
                    console.log("price is ok");
                    beep();
                    return;
                } else {
                    console.log("price is too high");
                    reloadIframe();
                    return
                }
            }

            function checkOptions() {
                if (priceLimit == undefined || priceLimit == null) { //si le prix n'est pas defini
                    if (stopbot == true) {
                        printErreur.innerText = "Please set the price limit";
                        stopBot();
                    }
                    console.log("priceLimit undefined = true");
                    return false; //quitte et se met en attente d'event startbot
                }

                if (stopbot == false) {
                    console.log("bot stopped = true");
                    return false; //quitte et se met en attente d'event startbot
                }

                if (printErreur.innerText == "Please set the price limit") {
                    printErreur.innerText = "";
                }
                return true;
            }


            //debugger;
            /*
                        function work() {
                            //return new Promise(resolve => setTimeout(resolve, ms));
                            return new Promise((resolve) => {
                                loadIframe().then(loadContentJsIframe()).then(autobuy()).then(() => { //On charge l'iframe et on charge le js puis on execute la fonction autobuy
                                    resolve(); // on resolve la promesse de promise pour qu'elle soit terminée
                                });
                            });
                        }
            */
            /*
            async function tryAutoBuy() {
                let baba = true;
                let result;
                let promise;
                let caca = 0;

                while (1) {
                    if (baba == true) {
                        baba = false;
                        await work().then(() => { baba = true });
                        console.log(caca++);
                    }
                }
            } 
            */

            //break;
            //console.log("caca" + result);

            //console.log(caca++);

            /*
            if (find == true) { //si le perso est trouvé
                clickPerso(); //click on the perso
                await wait(2000); //On attend que ça charge 
                if (calculRentable() == true) { //si le perso est rentable
                    clickbuttonbuy(); //click on the button buy
                    await wait(2000); // On attend que ça charge
                    clickbuttonbuy2(); //click on the button buy
                    stopBot();
                    find = false;
                    return;
                } else {
                    reloadIframe();
                    find = false;
                    return;
                }
            }
            */




            function panel() {
                document.getElementsByTagName('body')[0].innerHTML = GM_getResourceText('html') + "<style>" + GM_getResourceText('css') + "</style>";
            }


            panel(); // On charge les élements du panel de controle nécessaire au variable donc on les déclare après :)

            //event button
            const iframe = document.querySelector('iframe').contentWindow;
            const buttonreload = document.getElementById('reloadIframe');
            const buttonValidate = document.getElementById('validate');
            const buttonStop = document.getElementById('stopbot');
            const buttonNightLight = document.getElementById('NightLight');
            buttonreload.addEventListener('click', reloadIframe);
            buttonValidate.addEventListener('click', validate);
            buttonStop.addEventListener('click', stopBot);
            buttonNightLight.addEventListener('click', NightLight);

            //let eventLoad = document.querySelector('iframe').addEventListener('load', loadIframe);


            //print
            const printNew = document.getElementById('idnew');
            const printLast = document.getElementById('idlast');
            const printReload = document.getElementById('reloadcompteur');
            const printErreur = document.getElementById('erreur');
            const printPriceLimit = document.getElementById('printPriceLimit');
            const printThetanCoinInDollar = document.getElementById('ThetanCoinInDollar');
            const printRarete = document.getElementById('rarete');
            const printBattleLeft = document.getElementById('battleleft');
            const printRentabilite = document.getElementById('rentabilite');
            const printPriceHero = document.getElementById('priceHero');
            const printRevenuHero = document.getElementById('revenuHero');
            const printUrlHero = document.getElementById('urlHero');
            observer = new MutationObserver(mCallback);




            let compteurReload = 0;
            let persoSelect;
            let priceLimit;
            let stopbot;
            let loadedIframe = true;
            let loadedIframeContentJs = true;
            let find = false;
            let price;
            let rentabilite;
            let nightLight;

            let ThetanCoinInDollar;
            const gTHCWin = 6;
            const gTHCLoose = 1;

            //console.info(GM_info);
            getPriceThetanCoin();

        }, 2000);
    }

})();

/*

function printScriptTextContent(script) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", script.src)
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            //console.log("the script text content is",xhr.responseText);
            return xhr.responseText;
        }
    };
    xhr.send();
}
console.log(printScriptTextContent(document.getElementsByTagName('script')[0]));




function load_js(src) {
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.src = src;
    head.appendChild(script);
}
let scripts = document.getElementsByTagName('script');
for (let i = 0; i < scripts.length; i++) {
    load_js(document.getElementsByTagName('script')[i].src);

}
*/



/*
            const observer = new MutationObserver(function(mutations_list) { //https://usefulangle.com/post/356/javascript-detect-element-added-to-dom
                mutations_list.forEach(function(mutation) {
                    mutation.addedNodes.forEach(function(added_node) {
                        console.log(added_node);
                        if (added_node != null) {
                            console.log('#child has been added');
                            observer.disconnect();
                        }
                    });
                });
            });
*/
//observer.observe(iframe, { subtree: false, childList: true });
//iframe.body.addEventListener("load", myScript);
//ptetre faire un removeEventListener(), et un addEventListener() pour eviter les doublons




/*
            // Callback function to execute when mutations are observed
            const callback = function(mutationsList, observer) {
                // Use traditional 'for loops' for IE 11
                for (const mutation of mutationsList) {
                    if (mutation.type === 'childList') {
                        console.log('A child node has been added or removed.');
                    } else if (mutation.type === 'attributes') {
                        console.log('The ' + mutation.attributeName + ' attribute was modified.');
                    }
                }
            };
            // Select the node that will be observed for mutations
            const targetNode = iframe;
            // Options for the observer (which mutations to observe)
            const config = { attributes: true, childList: true, subtree: true };
            // Create an observer instance linked to the callback function
            const observer = new MutationObserver(callback);
            // Start observing the target node for configured mutations
            observer.observe(targetNode, config);
            // Later, you can stop observing
            observer.disconnect();
*/