function methodOfDividingTheSegmentInHalf(a, b, h, eps, f) {
    var count = 0;
    var $a = a;
    var $b = b;

    while (Math.abs(b - a) > eps) {
        count++;
        var c = (a + b) / 2;
        if (f(c) == 0) {
            return c;
        }

        var criterion = (f(c) * f(a)) > 0;
        if (criterion) {
            a = c;
        }
        else {
            b = c;
        }
    }

    return "[" + $a + ", " + $b + "] {" + count + "}: " + ((a + b) / 2) + ".";
}

function method1(a, b, h, eps, f) {
    var count = 0;

    var numberOption = h;
    var check = numberOption == 1;

    var x_, last_point;
    if (check) {
        x_ = a;
        last_point = b;
    }
    else {
        x_ = b;
        last_point = a;
    }

    var x_k = (x_ * f(last_point) - last_point * f(x_)) / (f(last_point) - f(x_));
    while (Math.abs(x_k - x_) > eps) {
        count++;
        x_ = x_k;
        x_k = (x_ * f(last_point) - last_point * f(x_)) / (f(last_point) - f(x_));
    }

    return "[" + a + ", " + b + "] {" + count + "} : " + x_k + ".";
}

function method2(a, b, h, eps, f) {
    var count = 0;

    var f_ = f == function_ex_1 ? function_ex_1_ : function_ex_2_;

    var numberOption = h;
    var check = numberOption == 1;

    var x_;
    if (!check) {
        x_ = a;
    }
    else {
        x_ = b;
    }

    var x_k = x_ - ((f(x_)) / (f_(x_)));

    while (Math.abs(x_k - x_) > eps) {
        count++;

        x_ = x_k;

        var f_x = (f(x_));
        var f_x_ = (f_(x_));
        x_k = x_ - ( f_x / f_x_ );
    }

    return "[" + a + ", " + b + "] {" + count + "} : " + x_k + ".";
}

function method3(a, b, h, eps, f) {
    var count = 0;

    var x_ = b;
    var x_k = x_ + (0.01) * f(x_);
    console.log("\n" + x_);
    console.log(x_k);


    while (Math.abs(x_ - x_k) > eps) {
        count++;
        x_ = x_k;
        x_k = x_ + 0.01 * f(x_);
    }

    return "[" + a + ", " + b + "] {" + count + "} : " + x_k + ".";
}