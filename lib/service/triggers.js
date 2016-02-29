var triggers = [{
    id: 'none',
    name: 'When the application starts',
    code: ''
},{
    id: 1,
    name: 'When location changes',
    code: 'createToolbar("Location", function(val) { window.triggerValue = val; window.redraw(true); });',
    valueName: 'location'
},{
    id: 2,
    name: 'When name changes',
    code: 'createToolbar("Name", function(val) { window.triggerValue = val; window.redraw(true); });',
    valueName: 'name'
}],
    Triggers;
module.exports = Triggers = {
    getTriggers: function () {
        return triggers;
    },
    getTrigger: function (id) {
        for (var i = 0; i < triggers.length; i++) {
            if (triggers[i].id == id) {
                return triggers[i];
            }
        }
    },
    extractFromCode: function (code) {
        var line = code.split('\n').shift(),
            m = line.match(/#trigger:([\d|none]+).*/),
            trigger;
        if (m && m[1]) {
            trigger = Triggers.getTrigger(m[1]);
            var s = code.split('\n');
            s.shift();
            code = s.join('\n');
        }
        return {
            trigger: trigger,
            code: code
        }
    }
};