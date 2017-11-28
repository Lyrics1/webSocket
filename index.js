var app = require('express')();
var http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/',(req,res)=>{
	res.sendFile(__dirname+'/index.html');
});

io.on('connection',function(socket){
	console.log('connection');
	socket.on('chat message',(msg)=>{
		console.log("msg",msg);
		 io.emit('chat message', msg);
	});

	//发送消息到所有用户
	// io.emit('some event', { for: 'everyone' });



})

http.listen(3000,()=>{
	console.log("3000")
})