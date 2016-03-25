function ComponentVote() {
    yes = 0;
    no = 0;
}


ComponentVote.prototype = {
    init: function (showBlockId) {
        var showBlock = document.getElementById(showBlockId);

        var yesBlock = document.createElement("div");
        yesBlock.innerHTML = "YES";
        yesBlock.className = "yes";
        yesBlock.onclick = this.voteYes;

        var noBlock = document.createElement("div");
        noBlock.innerHTML = "NO";
        noBlock.className = "no";
        noBlock.onclick = this.voteNo;

        showBlock.appendChild(yesBlock);
        showBlock.appendChild(noBlock);
    },
    voteYes: function () {
        yes++;
        console.log(yes);
    },
    voteNo: function () {
        no++;
        console.log(no);
    },
    toString: function () {
        return "Result:\nYES = " + yes + ".\nNO = " + no + ".";
    },
    result: function () {
        alert("Result:\nYES = " + yes + ".\nNO = " + no + ".");
    }
};


var obj = new ComponentVote();
obj.init("show");
document.getElementById("result").onclick = obj.result;

var i = 0;
