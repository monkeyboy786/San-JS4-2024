const lightbulb = document.getElementById('lightbulb');
const lightswitch = document.getElementById('lightswitch');
const status = document.getElementById('statusOfSwitch');

let isLightOn = false;

lightswitch.addEventListener('click', function() {
    if(isLightOn) {
        lightbulb.src = "LightBulbOff.png";
        lightswitch.src = "LightOff.png";
        status.textContent = "TURN ON THE LIGHT.";
    }else{
        lightbulb.src ="LightBulbOn.png";
        lightswitch.src = "LightOn.png"
        status.textContent = "YOU DID IT! Now, Turn OFF the Lights."
    }
    isLightOn = !isLightOn;
}

);