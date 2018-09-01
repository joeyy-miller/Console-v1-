var programname="Rock, Paper, Scissors XL";
//Dont change programdrive
var programdrive=1;
var cpu=0;
var player=0;
var score=0;
var cpuscore=0;
//1== ROCK 2==PAPER 3=SCISSORS
function program(data1)
{
	switch (data1)
	{
		case "first":
			//What the user will see when they run your software: Edit this
			programwrite("Welcome to Rock, Paper, Scissors XL!");
			programwrite("Enter {rock}{paper} or {scissors} to fight the CPU!");
			programwrite("{score} to see your score! {cpu score} to see the CPU's score!");
			break;
		case "exit":
			//This is what the user will see when they exit your software: Edit this
	}
}
function programuser()
{
	switch (document.getElementById("consoleinput").value)
	{
		//Each case is a command by the user. 
		case "rock":
			player=1;
			programcheck();
			break;
		case "paper":
			player=2;
			programcheck();
			break;
		case "scissors":
			player=3;
			programcheck();
			break;
		case "score":
			programwrite("Your score is "+score);
			break;
		case "cpu score":
			programwrite("The CPU's score is "+cpuscore);
			break;
		case "":
			//You may change this
			programwrite("No input detected!");
			break;
		default:
			//When the command is not recognized
			programwrite("That was not a command, silly!");
	}
}
function programcheck()
{
	cpu=Math.floor((Math.random()*3)+1);
	switch (player)
	{
		//1== ROCK 2==PAPER 3=SCISSORS
		case 1:
			if (cpu == 1)
			{
				programwrite("You have tied! CPU used rock!");
			}
			if (cpu == 2)
			{
				programwrite("You have one! CPU used paper! Score +1");
				score++;
			}
			if (cpu == 3)
			{
				programwrite("You have lost! CPU used scissors! Score -1");
				cpuscore++;
			}
			break;
		case 2:
			if (cpu == 1)
			{
				programwrite("You have won! CPU used rock! Score +1");
				score++;
			}
			if (cpu == 2)
			{
				programwrite("You have tied! CPU used paper!");
			}
			if (cpu == 3)
			{
				programwrite("You have lost! CPU used scissors! Score -1");
				cpuscore++;
			}
			break;
		case 3:
			if (cpu == 1)
			{
				programwrite("You have lost! CPU used rock! Score -1");
				cpuscore++;
			}
			if (cpu == 2)
			{
				programwrite("You have won! CPU used paper! Score +1");
				score++
			}
			if (cpu == 3)
			{
				programwrite("You have tied! CPU used scissors!");
			}
			break;
	}
}