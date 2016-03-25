function SomeObj(inputId) {
    this.value = 0;
    this.input = document.getElementById(inputId);
    init();

    function init(obj) {
        obj.value = 1;
        obj.input.onclick = obj.add;
    }
}
SomeObj.prototype = {
    add: function () {
        this.value++;   //�������� � ��� ��� ����� this, ����� input,
                        //������ ��� �������� ����� ����� �� input.click,
                        //�� ���� this �������� �� ����, � �������� ���
                        //��� input ���� ����� �����
    }
}

//���� input. ������� ���� � ����� input � value (�������� �������� = 0),
// input ���������� ����� id, ��� ������� �� input value = value + 1;