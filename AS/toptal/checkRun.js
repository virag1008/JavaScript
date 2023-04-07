let str = "level";

        function palindrome_check(){
            let reverseStr = str.split("").reverse().join("");
            if (str === reverseStr) {
                console.log(true)
            } else {
                consolcheckRune.log(false)
            }
        }
        palindrome_check()