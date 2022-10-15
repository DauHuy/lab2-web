function cookieParser(cookieString) {
    if (cookieString === "")
        return {};
    let pairs = cookieString.split(";");
    let splittedPairs = pairs.map(cookie => cookie.split("="));
    const cookieObj = splittedPairs.reduce(function (obj, cookie) {
        obj[decodeURIComponent(cookie[0].trim())]
            = decodeURIComponent(cookie[1].trim());

        return obj;
    }, {})

    return cookieObj;
}

let dummyCookieString =
    "username=Huy is; gfg=student; foo=education";
let cookieObj = cookieParser(dummyCookieString);
console.log(`${cookieObj['gfg']}`);
console.log(`${cookieObj['foo']}`);

const isValidJSON = obj => {
    try {
      JSON.parse(obj);
      return true;
    } catch (e) {
      return false;
    }
  };
  console.log(isValidJSON('{"Today is":"Saturday"}'));
  console.log(isValidJSON('Today is":"Saturday'));
  console.log(isValidJSON(null));