(function() {

var assert = require('assert');
var events = require('events');
var vows = require('vows');

var iframely = require('../../../iframely-node');

var api = {
    oembed: function(url, options) {
        return function() {
            iframely.getOembed(url, options, this.callback);
        }
    }
};

var server = require('../server.js');

function testOembed(type) {
    return {
        topic: api.oembed('http://provider.iframe.ly/' + type + '/', {}),
        'is valid': function(error, res) {
            assert.isNull(error);
            assert.instanceOf(res, events.EventEmitter);
        },
        'is CORS': function(error, res) {
            assert.isObject(res.headers);
            assert.isString(res.headers['access-control-allow-origin']);
        },
        'to oembed': {
            topic: function(res) {
                res.toOembed(this.callback);
            },
            'is oembed': function(error, oembed) {
                assert.isNull(error);
                assert.isObject(oembed)
                assert.isString(oembed.version);
                assert.isString(oembed.author_name);
                assert.equal(oembed.type, type)
            }
        }
    };
}

vows.describe('Sample Provider')
.addBatch({
    'Get link oembed': testOembed('link'),
    'Get photo oembed': testOembed('photo'),
    'Get rich oembed': testOembed('rich'),
    'Get video oembed': testOembed('video')
})['export'](module);

})();
