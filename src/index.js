import "normalize.css/normalize.css"

import "~/styles/box-sizing.css"
import "~/styles/define-rem.css"
import "~/styles/base.css"
import "~/styles/site.css"

document.addEventListener("DOMContentLoaded", function() {
  var email = document.querySelector(".kud-js-Email")
  email.href = ["mailto", ":", "m+site", "@", "kud", ".", "io"].join("")
})
