var luckNum = Math.random();
        var winNum = luckNum * 100;
        var newNum = parseInt(winNum);
        function getNum() {
          document.getElementById("money").value = newNum;
        }