module.exports = {

    mixins: [

        // These mixins are disabled as otherwise the age-restricted vids don't work (htmlparser follows re-direct to another URL)
        //"canonical",
        //"video",

        "oembed-title",
        "oembed-author",
        "oembed-site",
        "oembed-thumbnail",
        "oembed-video-responsive"
    ],

    getLink: function () {

        return {
            href: "http://static1.dmcdn.net/images/apple-touch-icon.png.vcbf86c6fe83fbbe11",
            type: CONFIG.T.image_icon,
            rel: CONFIG.R.icon
        }

    },

    tests: [ 
        "http://www.dailymotion.com/video/x10bix2_ircam-mani-feste-2013-du-29-mai-au-30-juin-2013_creation#.Uaac62TF1XV",
        "http://www.dailymotion.com/video/xryxxi_best-maid-ever_redband" // age-restricted
    ]
};