var DEFAULTS = {
    delimiter: '&',
    keyValueSeparator: '=',
    startAfter: '?'
};
String.prototype.extract = function (opts) {
    function filterInt(value) {
        return (/^(\-|\+)?([0-9]+|Infinity)$/.test(value)) ? Number(value) : NaN;
    }
    if (this.length <= 1) { return; }
    var opts = opts || {},
        keyValuePairs = [],
        params = {};
    var delimiter = opts.delimiter || DEFAULTS.delimiter;
    var keyValueSeparator = opts.keyValueSeparator || DEFAULTS.keyValueSeparator;
    var startAfter = opts.startAfter || DEFAULTS.startAfter;
    var limit = filterInt(opts.limit) >= 1 ? opts.limit : undefined;
    var querystringStartIndex = this.lastIndexOf(startAfter) + 1;
    var keyValueSeparatorFirstIndex = this.indexOf(keyValueSeparator, querystringStartIndex);
    if (keyValueSeparatorFirstIndex < 0) return;
    var str = querystringStartIndex < 0 ? new String(this) : this.substring(querystringStartIndex);
    keyValuePairs = str.split(delimiter, limit);
    var kvPair, i = 0;
    for (s = keyValuePairs.length; i < s; i++) {
        kvPair = keyValuePairs[i].split(keyValueSeparator, 2);
        var value = kvPair[1];
        params[kvPair[0]] = filterInt(value) ? filterInt(value) : value;
    };
    return params;
};
