const { Plugin } = require('powercord/entities');

module.exports = class fuckingGoogleIt extends Plugin {
    startPlugin() {
        powercord.api.commands.registerCommand({
            command: 'googleit',
            description: 'sends a fucking google it url',
            usage: '{c} <stuff to google>',
            executor: async (args) => {
                let query = encodeURI(args.join(' '))
                let url = `<https://www.just-fucking-google.it?s=${query}&e=fingerxyz>`
                return {
                    send: true,
                    result: url
                };
            }
        });
    }
    pluginWillUnload() {
        powercord.api.commands.unregisterCommand('googleit');
    }
};
