function calculateTimeZone(traderTimeOfOperation, traderUtc, viewerUtc) {
    // NOTE: UTC default value is 12:00
    // time zone offset like this +08:00 meaning add 8 hours from utc default value
    // time zone offset like this -08:00 meaning subtract 8 hours from utc default value
    let logicalOperator = timezoneLogicalOperator(traderUtc, viewerUtc);
    const UTC = '12:00';

    let outputTime;
    if (logicalOperator === '1') {
        if (timeToMins(traderUtc) > timeToMins(traderTimeOfOperation)) {
            let x = subtractTimes(traderUtc, traderTimeOfOperation);
            outputTime = addTimes(viewerUtc, x);
        }

        if (timeToMins(traderTimeOfOperation) > timeToMins(traderUtc)) {
            let x = subtractTimes(traderTimeOfOperation, traderUtc);
            outputTime = addTimes(traderTimeOfOperation, x);
        }
    }
    if (logicalOperator === '2') {
        // things to do. Kunin ko lang yung difference ng utc between trader at viewer. Then add or subtract to trader operating hour
        if (timeToMins(traderUtc) > timeToMins(traderTimeOfOperation)) {
            let x = subtractTimes(traderUtc, traderTimeOfOperation);
            let utcMinusViewerUtc = timeToMins(UTC) - Math.abs(timeToMins(viewerUtc));

            let newViewerUtc;
            if (utcMinusViewerUtc < 12) {
                newViewerUtc = utcMinusViewerUtc + timeToMins('12:00');
            }
            // outputTime = addTimes(viewerUtc, x);
            console.log(newViewerUtc);
        }
    }

    return outputTime;
}

console.log(calculateTimeZone('08:00', '+08:01', '+04:30'));

// Convert a time in hh:mm format to minutes
function timeToMins(time) {
    var b = time.split(':');
    return b[0] * 60 + +b[1];
}

// Convert minutes to a time in format hh:mm
// Returned value is in range 00  to 24 hrs
function timeFromMins(mins) {
    function z(n) {
        return (n < 10 ? '0' : '') + n;
    }
    var h = ((mins / 60) | 0) % 24;
    var m = mins % 60;
    return z(h) + ':' + z(m);
}

// Add two times in hh:mm format
function addTimes(t0, t1) {
    return timeFromMins(timeToMins(t0) + timeToMins(t1));
}

// Subtract two times in hh:mm format
function subtractTimes(t0, t1) {
    return timeFromMins(timeToMins(t0) - timeToMins(t1));
}

function timezoneLogicalOperator(traderUtc, viewerUtc) {
    let traderUtcAlpha = '';
    let traderUtcNum = '';
    let traderUtcSpecial = '';
    for (let i = 0; i < traderUtc.length; i++) {
        if (!isNaN(String(traderUtc[i]) * 1)) traderUtcNum += traderUtc[i];
        else if ((traderUtc[i] >= 'A' && str[i] <= 'Z') || (traderUtc[i] >= 'a' && traderUtc[i] <= 'z'))
            traderUtcAlpha += traderUtc[i];
        else traderUtcSpecial += traderUtc[i];
    }

    let viewerUtcAlpha = '';
    let viewerUtcNum = '';
    let viewerUtcSpecial = '';
    for (let i = 0; i < viewerUtc.length; i++) {
        if (!isNaN(String(viewerUtc[i]) * 1)) viewerUtcNum += viewerUtc[i];
        else if ((viewerUtc[i] >= 'A' && str[i] <= 'Z') || (viewerUtc[i] >= 'a' && viewerUtc[i] <= 'z'))
            viewerUtcAlpha += viewerUtc[i];
        else viewerUtcSpecial += viewerUtc[i];
    }

    let status;
    if (traderUtcSpecial == '+:' && viewerUtcSpecial == '+:') {
        status = '1';
    }
    if (traderUtcSpecial == '+:' && viewerUtcSpecial == '-:') {
        status = '2';
    }

    return status;
}

function calcTime(city, offset) {
    var b = new Date();
    var utc = b.getTime() + b.getTimezoneOffset() * 60000;
    var nd = new Date(utc + 3600000 * offset);
    return 'the local time of ' + city + ' is' + nd.toLocaleString();
}

//get specific country time
// console.log(calcTime('argentina', '-3'));
// console.log(calcTime('afganistan', '+4.3'));
// console.log(calcTime('Denmark', '+2'));
// console.log(calcTime('japan', '+9'));

function convertLocalToWorldTime(timezone) {
    // Get the local time in milliseconds
    const localTime = new Date().getTime();

    // Get the local time zone offset in minutes
    const localTzoffset = new Date().getTimezoneOffset();

    // Convert the local time zone offset to milliseconds
    const localTzoffsetInMs = localTzoffset * 60 * 1000;

    // Calculate the target time zone offset in minutes
    let targetTzoffset;
    switch (timezone) {
        case 'UTC':
            targetTzoffset = 0;
            break;
        case 'EST':
            targetTzoffset = -300;
            break;
        case 'CST':
            targetTzoffset = -360;
            break;
        case 'MST':
            targetTzoffset = -420;
            break;
        case 'PST':
            targetTzoffset = -480;
            break;
        default:
            targetTzoffset = 0;
    }

    // Convert the target time zone offset to milliseconds
    const targetTzoffsetInMs = targetTzoffset * 60 * 1000;

    // Calculate the target time in milliseconds
    const targetTime = localTime + localTzoffsetInMs + targetTzoffsetInMs;

    // Return the target time as a Date object
    return new Date(targetTime);
}

// Example usage
//   console.log('convertLocalToWorldTimeYeah: ', convertLocalToWorldTime("UTC").toString());

function convertTimeToInternational(time, timezone) {
    const date = new Date();
    const [hours, minutes] = time.split(':');

    date.setHours(hours);
    date.setMinutes(minutes);

    let tzoffset;
    switch (timezone) {
        case 'UTC':
            tzoffset = 0;
            break;
        case 'EST':
            tzoffset = -300;
            break;
        case 'CST':
            tzoffset = -360;
            break;
        case 'MST':
            tzoffset = -420;
            break;
        case 'PST':
            tzoffset = -480;
            break;
        default:
            tzoffset = 0;
    }

    date.setMinutes(date.getMinutes() + tzoffset);

    return date.toLocaleString();
}

// Example usage
const localTime = '10:30';
const targetTimezone = 'UTC';
console.log('convertTimeToInternational: ', convertTimeToInternational(localTime, targetTimezone));
