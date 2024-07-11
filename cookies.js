
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  function addZero(i) {
    if (i < 10) {i = "0" + i}
    return i;
  }
  function checkCookie() {
    let user = getCookie("username");
    if (user != "") {
      let time = new Date(parseInt(user));
      alert("Welcome again. Your last visit was at: " + time);
      let date = new Date()
      let timeTrack = date.getTime();
      if (timeTrack != null) {
        setCookie("username", timeTrack.toString(), 365);
      }
    } else {
      alert("Welcome to my homepage")
      let date = new Date()
      user = date.getTime();
      if (user != null) {
        setCookie("username", user.toString(), 365);
      }
    }
  } 