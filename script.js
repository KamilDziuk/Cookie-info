document.querySelector('.popup_text_settings').style.display = "none";
document.querySelector('.test_contener').style.display = "none";
document.querySelector('.back_button').style.display = "none";

document.querySelector('.settings_button').addEventListener('click', () =>
{
document.querySelector('.back_button').style.display = "block";
document.querySelector('.test_contener').style.display = "block";
document.querySelector('.popup_text_settings').style.display = "block";
document.querySelector('.popup_text').style.display = "none";
document.querySelector('.settings_button').style.display = "none";
});
document.querySelector('.back_button').addEventListener('click', () =>
{
    document.querySelector('.back_button').style.display = "none";
document.querySelector('.test_contener').style.display = "none";
document.querySelector('.popup_text_settings').style.display = "none";
document.querySelector('.popup_text').style.display = "block";
document.querySelector('.settings_button').style.display = "block";
});

// Cookies data function 
setCookie = (cName, cValue, exDay) =>
{
let date = new Date();
date.setTime(date.getTime() + (exDay * 24 * 60 * 60 * 1000));

// expiration date
let expiers = "expiers=" + date.toUTCString();

//Cookie file
document.cookie = cName + "=" + cValue + "; " + expiers + "; path=/"
}
//Access from cookies
//Checking if the cookie exists
getCookies = (cName) =>
{
    let name = cName + "=";
// Decoded cookies
let cDecoded = decodeURIComponent(document.cookie);
//Create table
let cArr = cDecoded.split("; ");
let value;
cArr.forEach(val => {
    if(val.indexOf(name) === 0) value = val.substring(name.length);
})

 return value;
}
document.querySelector('.accept_button').addEventListener('click', () =>
{
document.querySelector('.cookie_popup').style.display = "none";
setCookie("PrivacyPolicy", true, 30);
});

//I don't have it to show it cookie_popup
cookieMess = () =>
{
if(!getCookies("PrivacyPolicy"))
document.querySelector('.cookie_popup').style.display = "block";
}

//Turn on the function each time on the project
window.addEventListener("load", cookieMess);
