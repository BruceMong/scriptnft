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

            function clickHero() {
                iframe.document.querySelector("#app > section > div > div.v1dL4CXifgr9ZQfxzEeq > div._K1vS08OYVZ33ZS45ptQ > div.rKe8SyN5EbDxc_X9_6sl").firstElementChild.click();
                //crete event to detect when button buy is clickable
                let target = iframe.document.querySelector("#app"); //div  parent qui contient le shop en loading
                options = { childList: true },
                    observerBuy1.observe(target, options);
                return;
            }

            //final : 
            //document.querySelector("#app > div.jra1eUB8wvqbOU7uI1yT > div._2s9IBs9bWdr_ZAGIpRC > div > div.bsN3E4gomIg12cqMRRiR > div.Dc1ni2e5ZeRPda6j2cYD > button")


            function mCallbackBuy1(mutations) { //event that trigger when js content is loaded
                for (let mutation of mutations) {
                    if (mutation.type === 'childList') {
                        mutation.addedNodes.forEach(function(node) {
                            console.log(node.className);
                            if (node.className == "jra1eUB8wvqbOU7uI1yT") {
                                console.log("js content loaded buy1");
                                observerBuy1.disconnect();
                                console.log(document.querySelector('iframe').contentWindow.document.getElementsByTagName('button'));
                                clickButtonBuy();
                            }
                        });
                    }
                }
            }

            //_2s9IBs9bWdr_ZAGIpRC

            function clickButtonBuy() {
                if (calculRentable() == false) { reloadIframe(); return } //check de rentabilité
                clickButtonBuyAction(); //click button buy en boucle dans un fonction asyncrhone qui s'arrete quand le bouton est clickable (détecté par l'event déclaré en dessous)
                console.log("clickButtonBuy");

                let target = iframe.document.querySelector("#app > div.jra1eUB8wvqbOU7uI1yT");
                observerCheckOut.observe(target, options);
            }


            async function clickButtonBuyAction() {
                let button = document.querySelector('iframe').contentWindow.document.getElementsByTagName('button');
                var caca = 0;
                while (bBuyDone == false) {
                    button[0].click();
                    await wait(100);
                    console.log("b " + caca++);
                }
                return;
            }

            function mCallbackCheckOut(mutations) { //event that trigger when js content is loaded
                for (let mutation of mutations) {
                    if (mutation.type === 'childList') {
                        mutation.addedNodes.forEach(function(node) {
                            console.log(node.className);
                            if (node.className == "jxHiw543NljnoTacZONp f__JC23m9OlDmzw_X7cI") {
                                console.log("js content checkout loaded");
                                observerCheckOut.disconnect();
                                bBuyDone = true;
                                clickButtonCheckOut();
                                return;
                            }
                        });
                    }
                }
            }

            async function clickButtonCheckOut() {
                var button = document.querySelector('iframe').contentWindow.document.getElementsByTagName('button');
                for (let i = 0; i < 30; i++) {
                    {
                        button[3].click();
                        await wait(100);
                        console.log("c " + i);
                    }
                }
                bBuyDone = false;
                return;
            }

            /*
            function mCallbackBuy2(mutations) { //event that trigger when js content is loaded
                for (let mutation of mutations) {
                    if (mutation.type === 'childList') {
                        mutation.addedNodes.forEach(function(node) {
                            console.log(node.className);
                            if (node.className == "_2s9IBs9bWdr_ZAGIpRC") {
                                console.log("js content loaded buy2");
                                observerBuy2.disconnect();
                                clickButtonBuy();
                                return;
                            }
                        });
                    }
                }
            }
*/

            //-----------------------------------------------------
            async function calculRentable() {
                let gTHCBattle;
                let caca = 0;
                while (gTHCBattle == undefined || gTHCBattle == null) { //wait for gTHCBattle to be loaded
                    gTHCBattle = iframe.document.querySelector("#app > div.jra1eUB8wvqbOU7uI1yT > div._2s9IBs9bWdr_ZAGIpRC > div > div.bsN3E4gomIg12cqMRRiR > div._jpsH_cv8I9dtm4OPYXu > div.XRqSHFQ4oMEAlIUhTuMU > div > div > div.dhmomsiZbsztJOjpLCfv > p");
                    await wait(100);
                    console.log(caca++);
                }
                gTHCBattle = iframe.document.querySelector("#app > div.jra1eUB8wvqbOU7uI1yT > div._2s9IBs9bWdr_ZAGIpRC > div > div.bsN3E4gomIg12cqMRRiR > div._jpsH_cv8I9dtm4OPYXu > div.XRqSHFQ4oMEAlIUhTuMU > div > div > div.dhmomsiZbsztJOjpLCfv > p").innerText.split('/'); //number gTHC battle;
                let gTHCBattleLeft = gTHCBattle[1] - gTHCBattle[0];
                let rarityHero = iframe.document.querySelector("#app > div.jra1eUB8wvqbOU7uI1yT > div._2s9IBs9bWdr_ZAGIpRC > div > div.bsN3E4gomIg12cqMRRiR > div.Dc1ni2e5ZeRPda6j2cYD > div.o_TWf9C94PMJsz7uayDA > div.uJcOb5KjRyvQ4sesPyGO > div > div:nth-child(1) > div > span._P5KyiiOLMI4mRn761wK").innerText;
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



            // --------------------------------------------------

            function reloadIframe() {
                document.querySelector('iframe').src = document.querySelector('iframe').src;
                console.log('iframe reload');

                compteurReload++;
                printReload.innerText = compteurReload;
                loadIframe();
                return
            }

            function loadIframe() { // create event that when iframe  loaded,  create an event to wait load iframe content js
                document.querySelector('iframe').addEventListener('load', OnLoadIframe);
                return
            }

            function OnLoadIframe() {
                console.log("iframe loaded HTML");
                loadedIframe = true;

                //console.log(iframe.document.querySelector("#app > section > div > div.v1dL4CXifgr9ZQfxzEeq")); /:debug check is iframe loaded
                loadContentJsIframe();
                removeEventListener('load', OnLoadIframe);
                return
            }


            function loadContentJsIframe() { // create event to wait load iframe content js
                let jscontentShop = iframe.document.querySelector("#app > section > div > div.v1dL4CXifgr9ZQfxzEeq"); //div  parent qui contient le shop en loading
                let options = { childList: true };
                observerLoad1.observe(jscontentShop, options);
                return
            }



            function mCallbackLoad1(mutations) {
                for (let mutation of mutations) {
                    if (mutation.type === 'childList') {
                        mutation.addedNodes.forEach(function(node) {
                            console.log(node)
                            if (node.className == "_K1vS08OYVZ33ZS45ptQ") {
                                console.log("js content loaded1");
                                observerLoad1.disconnect();
                                observerLoad2.observe(iframe.document.querySelector("#app > section > div > div.v1dL4CXifgr9ZQfxzEeq > div._K1vS08OYVZ33ZS45ptQ"), options);
                                // console.log(iframe.document.querySelector("#app > section > div > div.v1dL4CXifgr9ZQfxzEeq > div._K1vS08OYVZ33ZS45ptQ").childNodes)

                                console.log(iframe.document.querySelector("#app > section > div > div.v1dL4CXifgr9ZQfxzEeq > div._K1vS08OYVZ33ZS45ptQ > div.rKe8SyN5EbDxc_X9_6sl > div:nth-child(1) > div.HQKOhoAMtTq_y8DTZDGl > div > div.y2C4OpSaD5rCj7A_lJTi > div > span._mtcJlWGt1iDNAKqoGXz"))
                                observerLoad1.disconnect();
                                autobuy();
                                return;
                            }
                        });
                    }
                }
            }

            function mCallbackLoad2(mutations) {
                console.log(mutations)
                for (let mutation of mutations) {
                    console.log(mutations)
                    if (mutation.type === 'childList') {
                        mutation.addedNodes.forEach(function(node) {
                            console.log(node)
                            if (node.className == "rKe8SyN5EbDxc_X9_6sl") {
                                console.log("js content loaded2");
                                observerLoad1.disconnect();
                                observerLoad2.observe(iframe.document.querySelector("#app > section > div > div.v1dL4CXifgr9ZQfxzEeq > div._K1vS08OYVZ33ZS45ptQ > div.rKe8SyN5EbDxc_X9_6sl"), options);
                                return;
                            }
                        });
                    }
                }
            }

            function mCallbackLoad3(mutations) {
                for (let mutation of mutations) {
                    console.log(node)
                    if (mutation.type === 'childList') {
                        mutation.addedNodes.forEach(function(node) {
                            if (node.className == "rKe8SyN5EbDxc_X9_6sl") {
                                console.log("js content loaded2");
                                observerLoad1.disconnect();
                                observerLoad2.observe(iframe.document.querySelector("#app > section > div > div.v1dL4CXifgr9ZQfxzEeq > div._K1vS08OYVZ33ZS45ptQ > div.rKe8SyN5EbDxc_X9_6sl"), options);
                                return;
                            }
                        });
                    }
                }
            }



            // faire récursivement ce path 
            //document.querySelector("#app > section > div > div.v1dL4CXifgr9ZQfxzEeq > div._K1vS08OYVZ33ZS45ptQ > div.rKe8SyN5EbDxc_X9_6sl > div:nth-child(1) > div.HQKOhoAMtTq_y8DTZDGl > div > div.y2C4OpSaD5rCj7A_lJTi > div")
            let element = document.querySelector("#app > section > div > div.v1dL4CXifgr9ZQfxzEeq > div._K1vS08OYVZ33ZS45ptQ > div.rKe8SyN5EbDxc_X9_6sl > div:nth-child(1) > div.HQKOhoAMtTq_y8DTZDGl > div > div.y2C4OpSaD5rCj7A_lJTi > div")


            //IFrame part

            async function autobuy() {
                if (checkOptions() == false) {
                    console.log("checkOptions() == false");
                    return;
                }

                heroSelect = document.querySelector('iframe').contentWindow.document.querySelector("#app > section > div > div.v1dL4CXifgr9ZQfxzEeq > div._K1vS08OYVZ33ZS45ptQ > div.rKe8SyN5EbDxc_X9_6sl > div:nth-child(1) > div.HQKOhoAMtTq_y8DTZDGl > div > div._TGcu2vbUFLx1l5YptZK._ZiBmVXRYru3dGxj59oK > span.x1XesU_0OuWqSWN_Lqk9._ZiBmVXRYru3dGxj59oK").innerText;
                heroSelect += document.querySelector('iframe').contentWindow.document.querySelector("#app > section > div > div.v1dL4CXifgr9ZQfxzEeq > div._K1vS08OYVZ33ZS45ptQ > div.rKe8SyN5EbDxc_X9_6sl > div:nth-child(1) > div.HQKOhoAMtTq_y8DTZDGl > div > div._TGcu2vbUFLx1l5YptZK._ZiBmVXRYru3dGxj59oK > span.cGnfWVqUjWDf7blY11f3").innerText;
                console.log(heroSelect);

                printNew.innerHTML = heroSelect;

                if (printNew.innerHTML == printLast.innerHTML) { //si le perso n'a pas changé on reload direct l'iframe
                    console.log('perso not changed');
                    reloadIframe();
                    return;
                } else {
                    printLast.innerHTML = printNew.innerHTML;
                }

                let pricebox = document.querySelector('iframe').contentWindow.document.querySelector("#app > section > div > div.v1dL4CXifgr9ZQfxzEeq > div._K1vS08OYVZ33ZS45ptQ > div.rKe8SyN5EbDxc_X9_6sl > div:nth-child(1) > div.HQKOhoAMtTq_y8DTZDGl > div > div.y2C4OpSaD5rCj7A_lJTi > div > span._mtcJlWGt1iDNAKqoGXz");
                price = pricebox.innerText.replace(/[^0-9.]/g, '');

                console.log(price);
                if (price < priceLimit) {
                    beep();
                    clickHero(); //click on the perso
                    return
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
            observerLoad1 = new MutationObserver(mCallbackLoad1);
            observerLoad2 = new MutationObserver(mCallbackLoad2);
            observerLoad3 = new MutationObserver(mCallbackLoad3);
            observerBuy1 = new MutationObserver(mCallbackBuy1);
            //observerBuy2 = new MutationObserver(mCallbackBuy2);
            observerCheckOut = new MutationObserver(mCallbackCheckOut);
            //observerConf = new MutationObserver(mCallbackConf);

            let options = { childList: true };
            let bBuyDone = false;


            let compteurReload = 0;
            let heroSelect;
            let priceLimit;
            let stopbot;
            let price;
            let rentabilite;
            let nightLight;

            let ThetanCoinInDollar;
            const gTHCWin = 6;
            const gTHCLoose = 1;

            //let a = 0;
            //let b = 0;
            //let c = 0;

            //console.info(GM_info);
            getPriceThetanCoin();

        }, 2000);
    }

})();