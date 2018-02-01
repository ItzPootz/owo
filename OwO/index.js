const Command = require('command');

const mapOwOify = { 'r':'w',
                    'R':'W',
                    'l':'w',
                    'L':'W',
                    'n':'ny',
                    'N':'NY'
                };

module.exports = function OwO(dispatch){
    const command = Command(dispatch);
    
    var enabled = true;

    command.add('owo', () => {
		if(!enabled){
            enabled = true;
            command.message('OwO wats dis?');
		}
		else{
            enabled = false;
            command.message('uwu...');
        }
    })
    
    dispatch.hook('S_CHAT',2,event=>{
        if(!enabled) return;

        event.message = event.message.replace(/[rlnRLN](?![^<]*\>)/ig, (str) => str = mapOwOify[str]);
        return true;
    })
}