var programname="Guessing Game";
programdrive=1;
var guess=1;
var score=0;
var guesses=0;
function program(data1)
{
	switch (data1)
	{
		case "first":
			//What the user will see when they run your software: Edit this
			programwrite("Welcome to Guessing Game!");
			programwrite("I am thinking of a number between 1 and 10");
			programwrite("You have 5 tries to guess it!");
			guess=Math.floor((Math.random()*10)+1);
			break;
		case "exit":
			//This is what the user will see when they exit your software: Edit this
			programwrite("I guess you give up!");
			break;
		case "newgame":
			programspecial("clear");
			guess=Math.floor((Math.random()*10)+1);
			programwrite("You have started a new game");
			guesses=0;
			break;
		case "score":
			programwrite("Your score is "+score);
			break;
		case "wonnewgame":
			programwrite("You won the last one, but I've thought of a new number!");
			guess=Math.floor((Math.random()*10)+1);
			break;
	}
}
function programuser()
{
	switch (document.getElementById("consoleinput").value)
	{
		//Each case is a command by the user. 
		case "score":
			program("score");
			break;
		case "show score":
			program("score");
			break;
		case "new game":
			program("newgame");
			break;
		case "start new game":
			program("newgame");
			break;
		case "new":
			program("newgame");
			break;
		case "help":
			programwrite("Enter a number (1 to 10) to guess, {score} to view your score");
			programwrite("{new game} starts a new game and {exit} to close the program!");
			break;
		case "1":
			if (guesses <= 5)
			{
				if (1 == guess)
				{
					programwrite("Gah, you guessed correct! SCORE +1");
					score++;
					program("wonnewgame");
				}
				else
				{
					programwrite("Haha you have guessed wrong!");
					guesses++;
				}
			}
			else
			{
				programwrite("Haha you're out of guesses, I win! SCORE -1");
				score--;
			}
			break;
		case "2":
			if (guesses <= 5)
			{
				if (1 == guess)
				{
					programwrite("Gah, you guessed correct! SCORE +1");
					score++;
					program("wonnewgame");
				}
				else
				{
					programwrite("Haha you have guessed wrong!");
					guesses++;
				}
			}
			else
			{
				programwrite("Haha you're out of guesses, I win! SCORE -1");
				score--;
			}
			break;
		case "3":
			if (guesses <= 5)
			{
				if (1 == guess)
				{
					programwrite("Gah, you guessed correct! SCORE +1");
					score++;
					program("wonnewgame");
				}
				else
				{
					programwrite("Haha you have guessed wrong!");
					guesses++;
				}
			}
			else
			{
				programwrite("Haha you're out of guesses, I win! SCORE -1");
				score--;
			}
			break;
		case "4":
			if (guesses <= 5)
			{
				if (1 == guess)
				{
					programwrite("Gah, you guessed correct! SCORE +1");
					score++;
					program("wonnewgame");
				}
				else
				{
					programwrite("Haha you have guessed wrong!");
					guesses++;
				}
			}
			else
			{
				programwrite("Haha you're out of guesses, I win! SCORE -1");
				score--;
			}
			break;
		case "5":
			if (guesses <= 5)
			{
				if (1 == guess)
				{
					programwrite("Gah, you guessed correct! SCORE +1");
					score++;
					program("wonnewgame");
				}
				else
				{
					programwrite("Haha you have guessed wrong!");
					guesses++;
				}
			}
			else
			{
				programwrite("Haha you're out of guesses, I win! SCORE -1");
				score--;
			}
			break;
		case "6":
			if (guesses <= 5)
			{
				if (1 == guess)
				{
					programwrite("Gah, you guessed correct! SCORE +1");
					score++;
					program("wonnewgame");
				}
				else
				{
					programwrite("Haha you have guessed wrong!");
					guesses++;
				}
			}
			else
			{
				programwrite("Haha you're out of guesses, I win! SCORE -1");
				score--;
			}
			break;
		case "7":
			if (guesses <= 5)
			{
				if (1 == guess)
				{
					programwrite("Gah, you guessed correct! SCORE +1");
					score++;
					program("wonnewgame");
				}
				else
				{
					programwrite("Haha you have guessed wrong!");
					guesses++;
				}
			}
			else
			{
				programwrite("Haha you're out of guesses, I win! SCORE -1");
				score--;
			}
			break;
		case "8":
			if (guesses <= 5)
			{
				if (1 == guess)
				{
					programwrite("Gah, you guessed correct! SCORE +1");
					score++;
					program("wonnewgame");
				}
				else
				{
					programwrite("Haha you have guessed wrong!");
					guesses++;
				}
			}
			else
			{
				programwrite("Haha you're out of guesses, I win! SCORE -1");
				score--;
			}
			break;
		case "9":
			if (guesses <= 5)
			{
				if (1 == guess)
				{
					programwrite("Gah, you guessed correct! SCORE +1");
					score++;
					program("wonnewgame");
				}
				else
				{
					programwrite("Haha you have guessed wrong!");
					guesses++;
				}
			}
			else
			{
				programwrite("Haha you're out of guesses, I win! SCORE -1");
				score--;
			}
			break;
		case "10":
			if (guesses <= 5)
			{
				if (1 == guess)
				{
					programwrite("Gah, you guessed correct! SCORE +1");
					score++;
					program("wonnewgame");
				}
				else
				{
					programwrite("Haha you have guessed wrong!");
					guesses++;
				}
			}
			else
			{
				programwrite("Haha you're out of guesses, I win! SCORE -1");
				score--;
			}
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