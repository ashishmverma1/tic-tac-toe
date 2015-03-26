$(document).ready(function(){
	
	//game variables
	var canvas = $('#my-canvas')[0],
		ctx = canvas.getContext('2d'),
		cell = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']],
		player = 'O',
		turns = 0,
		row,
		col;
	
	//initialize game
	function init()
	{
		canvas.addEventListener('mousedown', playTurn, false);
		
		//drawing the grid
		ctx.beginPath();
		ctx.moveTo(100,0);
		ctx.lineTo(100,300);
		ctx.stroke();
		
		ctx.beginPath();
		ctx.moveTo(200,0);
		ctx.lineTo(200,300);
		ctx.stroke();
		
		ctx.beginPath();
		ctx.moveTo(0,100);
		ctx.lineTo(300,100);
		ctx.stroke();
		
		ctx.beginPath();
		ctx.moveTo(0,200);
		ctx.lineTo(300,200);
		ctx.stroke();
	}
	
	//play turn on mouse click
	function playTurn()
	{
		//calculate col and row number corrsponding to click coordinate
		col = parseInt(event.pageX / 100);
		row = parseInt(event.pageY / 100);
		
		//check if cell already marked
		if(cell[row][col] == 'X' || cell[row][col] == 'O')
		{
			alert('Cell already ocupied!');
		}
		
		else
		{
			cell[row][col] = player;
			turns++;
			paintXO();
			checkWin();
			changeTurn();
		}
	}
	
	//check for win or draw
	function checkWin()
	{
		//row win
		if(cell[row][0] == player && cell[row][1] == player && cell[row][2] == player)
		{
			alert('Player "' + player + '" won!');
			location.reload();
		}
		
		//col win
		else if(cell[0][col] == player && cell[1][col] == player && cell[2][col] == player)
		{
			alert('Player "' + player + '" won!');
			location.reload();
		}
		
		//main diagonal win
		else if(cell[0][0] == player && cell[1][1] == player && cell[2][2] == player)
		{
			alert('Player "' + player + '" won!');
			location.reload();
		}
		
		//secondary diagonal win
		else if(cell[0][2] == player && cell[1][1] == player && cell[2][0] == player)
		{
			alert('Player "' + player + '" won!');
			location.reload();
		}
			
		//draw	
		else if(turns == 9)
		{
			alert('Draw!');
			location.reload();
		}
	}
	
	//give turn to other player
	function changeTurn()
	{
		if(player == 'X')
		{
			player = 'O';
		}
		else
		{
			player = 'X';
		}
	}
	
	//mark X or O at clicked cell
	function paintXO()
	{
		ctx.font = '60pt Calibri';
		
		if(player == 'X')
		{
			ctx.fillStyle = 'blue';
		}
		else
		{
			ctx.fillStyle = 'red';
		}
		
		ctx.fillText(player, col*100 + 25, row*100 + 80);
	}
	
	//GO!
	init();
	
})