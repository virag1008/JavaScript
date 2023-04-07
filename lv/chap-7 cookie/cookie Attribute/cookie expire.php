<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <input type="button" value="get cookies" onclick="getcookies()">
    <input type="button" value="set cookies" onclick="setcookies()">
  
    <script>
        function setcookies(){
            document.cookie = "company name= LearnVern; expires = fri, 30 sept 2022 21:30:00 UTC";
        }
        function getcookies(){
            if ( document.cookie.length != 0 ){
                alert(document.cookie);
            }else{
                alert("cookie is not set")
            }
        }
    </script>
</body>
</html>