function Voting(idImage, idLike, idDislike, idResult) {
    this.count = 0;
    this.rnd = -1;

    this.image = document.getElementById(idImage);
    this.resultText = document.getElementById(idResult);

    setFunctionToElement(this, idLike, idDislike);

    function setFunctionToElement(self, idLike, idDislike) {
        document.getElementById(idLike).onclick = function () {
            this.like();
            this.write();
        }.bind(self);
        document.getElementById(idDislike).onclick = function () {
            this.dislike();
            this.write();
        }.bind(self);
    }
}
Voting.prototype = {
    like: function () {
        this.count++;
    },
    dislike: function () {
        this.count--;
    },
    write: function () {
        this.resultText.innerHTML = this.count > 1000 ? "+&#8734" : this.count < -1000 ? "-&#8734" : this.count;
    },
    randomImage: function () {
        var resPass;
        this.rnd = getRandomInt(0, 7);

        switch (this.rnd) {
            case 0:
                resPass = "res/fb.png";
                break;
            case 1:
                resPass = "res/gg.png";
                break;
            case 2:
                resPass = "res/or.png";
                break;
            case 3:
                resPass = "res/ya.png";
                break;
            case 4:
                resPass = "res/mr.png";
                break;
            case 5:
                resPass = "res/ib.jpg";
                break;
            case 6:
                resPass = "res/ms.jpg";
                break;
            case 7:
                resPass = "res/vk.jpg";
                break;
            default:
                resPass = "res/null.png";
                this.rnd = -1;
                break;
        }

        this.image.src = resPass;

        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    }
};

var obj1 = new Voting("img_left", "left_plus", "left_minus", "left_result");
var obj2 = new Voting("img_right", "right_plus", "right_minus", "right_result");

do {
    obj1.randomImage();
    obj2.randomImage();
} while ((obj1.rnd == obj2.rnd) && (obj1.rnd != -1) && (obj2.rnd != -1));