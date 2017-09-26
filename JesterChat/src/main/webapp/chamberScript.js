
class Chamber {
   constructor() {
       this.chamber = document.querySelector("#chamber");
       this.message = document.querySelector("#message");
       
       
       this.name = new URL(document.URL).searchParams.get("name");
       this.loadRoomName(this.name); //The problem
       

       this.message.onchange = event => {
          fetch('api/messages/add?name=' + this.name, 
            {
             method: 'POST', 
             body : JSON.stringify(new Message(document.getElementById("username").value,event.target.value)),
             headers: {'Content-Type' : 'application/json; charset=UTF-8'}
            })
           .then(response => {
               if(response.ok) {
                    return response.json();
                }
                
                throw new Error("Failed to send message " + event.target.value);
            })
           .then(message => {
               this.message.value = "";
            })
            .catch(exception => console.log("Error: " + exception));
       };
       
       this.worker = new Worker("worker.js");
       this.worker.postMessage({"name" : this.name});
       
       this.worker.onmessage = event => {
           this.chamber.innerHTML = '';
           let ul = document.createElement('ul');
           event.data.map(message => {
              let li = document.createElement('li');
              li.innerHTML = `${message.user} - ${message.text}`;
              ul.appendChild
              (li);
           });
           this.chamber.appendChild(ul);
           this.chamber.scrollTop = this.chamber.scrollHeight;
       };       
   } 
   
   loadRoomName(name)
   {
       var h = document.createElement("H1");
       var txt = document.createTextNode(name);
       h.appendChild(txt);
       document.body.appendChild(h);   
   }
}

class Message {
    constructor(user, text) {
        this.user = user;
        this.text = text;
        this.version = new Date();
    }
}

let chamber = new Chamber();


