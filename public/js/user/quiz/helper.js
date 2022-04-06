function getCookie(name) {
    var cookieName = name + "="
    var docCookie = document.cookie
    var cookieStart
    var end
    if (docCookie.length > 0) {
      cookieStart = docCookie.indexOf(cookieName)
      if (cookieStart != -1) {
        cookieStart = cookieStart + cookieName.length
        end = docCookie.indexOf(";", cookieStart)
        if (end == -1) {
          end = docCookie.length
        }
        return unescape(docCookie.substring(cookieStart, end))
      }
    }
    return false
  }