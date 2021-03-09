module.exports = function toReadable (number) {
    function toWord(n) {
        switch(n) {
            case 0:
                return 'zero';
                break;
            case 1:
                return 'one';
                break;
            case 2:
                return 'two';
                break;
            case 3:
                return 'three';
                break;
            case 4:
                return 'four';
                break;
            case 5:
                return 'five';
                break;
            case 6:
                return 'six';
                break;
            case 7:
                return 'seven';
                break;
            case 8:
                return 'eight';
                break;
            case 9:
                return 'nine';
                break;
            case 10:
                return 'ten';
                break;
            case 11:
                return 'eleven';
                break;
            case 12:
                return 'twelve';
                break;
            case 13:
                return 'thirteen';
                break;
            case 14:
                return 'fourteen';
                break;
            case 15:
                return 'fifteen';
                break;
            case 16:
                return 'sixteen';
                break;
            case 17:
                return 'seventeen';
                break;
            case 18:
                return 'eighteen';
                break;
            case 19:
                return 'nineteen';
                break;
            case 20:
                return 'twenty';
                break;
            case 30:
                return 'thirty';
                break;
            case 40:
                return 'forty';
                break;
            case 50:
                return 'fifty';
                break;
            case 60:
                return 'sixty';
                break;
            case 70:
                return 'seventy';
                break;
            case 80:
                return 'eighty';
                break;
            case 90:
                return 'ninety';
                break;
            case 100:
                return 'twenty';
                break;
        }
    }
    if (String(number).length == 1) {
        return toWord(number);
    }
    else if (String(number).length == 2) {
        if (number < 21) {
            return toWord(number);
        }
        else {
            if (number % 10 == 0) {
                return (toWord(number));
            }
            else {
                let dozens = Math.trunc(number / 10);
                let units = number % 10;
                return (toWord(dozens * 10) + ' ' + toWord(units));
            }
        }
    }
    else if (String(number).length == 3) {
        if (number % 100 == 0) {
            return (toWord(Math.trunc(number / 100)) + ' hundred');
        }
        else if (number % 100 < 21) {
            return (toWord(Math.trunc(number / 100)) + ' hundred ' + toWord(number % 100));
        }
        else {
            let hundreds = Math.trunc(number / 100);
            number = number % 100;
            let dozens = Math.trunc(number / 10);
            let units = number % 10;
            if (number % 10 == 0) {
                return (toWord(hundreds) + ' hundred ' + toWord(dozens * 10));
            }
            else {
                return (toWord(hundreds) + ' hundred ' + toWord(dozens * 10) + ' ' + toWord(units));
            }    
        }
    }
}
