 var x = document.createElement("AUDIO");
    x.setAttribute("id", "myVideo");
    x.setAttribute("controls", "controls");
    
    
    var z = document.createElement("SOURCE");
    z.setAttribute("src", "audio/intro.mp3");
    z.setAttribute("type", "audio/mpeg");
    x.appendChild(z);

    // Set the autoplay property:
    x.autoplay = true;

    document.body.appendChild(x);