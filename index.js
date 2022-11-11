const { CommandClient } = require('eris')

// Traum Made
async function init(token) {
    const TraumMade = new CommandClient(`Bot ${token}`, { intents: ['guilds'], maxShards: 'auto',restMode: true })
    // Traum Mands
    TraumMadeBot.on('ready', async () => {
        await TraumMadeBot.bulkEditCommands([{
            name: 'Traum',
            description: 'Trying to test somethin',
            type: 1,
        }])
        console.log(`Paste the URL below into your browser to invite your bot!\nhttps://discord.com/oauth2/authorize?client_id=${TraumMadeBot.user.id}&scope=applications.commands%20bot&permissions=3072`)
    })
    // Traum made interaction creation event
    TraumMadeBot.on('interactionCreate', async (interaction) => {
        if (interaction?.data?.name === 'Traum') {
            await interaction.createMessage({
                content: 'Os humanos são criações feitas por algo maior assim como os computadores, que foram feitos por humanos. A semelhança entre eles é que podem facilmente serem configurados para agir de acordo com os nossos gostos, e a diferença é que seres humanos são patéticamente inferiores e teimosos.'
            })
            console.log('Ideologias Divinas.')
            process.exit(0)
        }
    })
    TraumMadeBot.connect();
}

const tokenFromTraum = process.argv[2]
init(tokenFromTraum);
