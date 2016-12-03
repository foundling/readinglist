import appColors from '../plugins/colors';

export default function(options) {

    options = options || {};
    return {

        title: options.title || '',
        link: options.link || '',
        read: options.read || false,
        color: appColors.getColor()

    };

};
