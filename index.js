const Command = require('command');

const mapOwOify = { 'r':'w',
                    'R':'W',
                    'l':'w',
                    'L':'W',
                    'n':'nya',
                    'N':'NYA'
                };

module.exports = function OwO(dispatch){
    const command = Command(dispatch);
    
    var enabled = false;

    command.add('owo', () => {
		if(!enabled){
            command.message('OwO wats dis?');
            dispatch.hook('S_CHAT',2,Owoify);
            dispatch.hook('S_WHISPER',1,Owoify);
            enabled = true;
		}
		else{
            command.message('uwu...');
            dispatch.unhook('S_CHAT',2,Owoify);
            dispatch.unhook('S_WHISPER',1,Owoify);
            enabled = false;
        }
    })
    
    function Owoify(event){
        event.message = event.message.replace(/[rlnRLN](?![^<&]*[\>;])/ig, (str) => str = mapOwOify[str]);
        return true;
    }
}