//javascript for Star Wars RPG

//characters as objects


var ackbar = {name:"Admiral Ackbar" , healthPoints:35 , attackPower:15 , counterAttack: 5 , img: "assets/images/ackbar_small.jpg"}

var nass = {name:"Boss Nass" , healthPoints:30 , attackPower:10 , counterAttack: 5 }

var lando = {name:"Lando Calrissian" , healthPoints:20 , attackPower:15 , counterAttack: 5 }

var bren = {name:"Bren Derlin" , healthPoints:25 , attackPower:8 , counterAttack: 5 }

var playerChar = ""

var clickedChar = false

var enemyChar = ""

$(".name1").html(ackbar.name);
$(".HP1").html(ackbar.healthPoints);

$(".name2").html(nass.name);
$(".HP2").html(nass.healthPoints);

$(".name3").html(lando.name);
$(".HP3").html(lando.healthPoints);

$(".name4").html(bren.name);
$(".HP4").html(bren.healthPoints);



function chooseCharacter(){
	$(".Ackbar-container, .Nass-container , .Lando-container, .Derlin-container").on('click', function(){
		console.log(this);
		$(".playerCharacter").append(this);
		playerChar = (this);
		console.log(playerChar);
		clickedChar = true;

		$(".Ackbar-container, .Nass-container , .Lando-container, .Derlin-container").off('click');
		chooseEnemy();

	})

		}


function chooseEnemy(){
	if (clickedChar === true) {
		$(".Ackbar-container, .Nass-container , .Lando-container, .Derlin-container").on('click', function(){
		$(".enemy").append(this);
		console.log(this);
		enemyChar = (this);
		console.log(enemyChar);

	})
	}

		}

chooseCharacter();


// create an attack function  --   In lieue of figuring out a simpler version that works across any character,  I started to create permutations for each possible match-up.  Ugly,  but it could work.
function attack(){
		$("#attack").on('click', function(){
			if ((playerChar.hasClass(".Ackbar-container")) && (enemyChar.hasClass(".Nass-container"))) {
				// Chrome inspector tells me that .hasClass is not a recognized function.
				console.log(playerChar.healthPoints);
				console.log(enemyChar.healthPoints);
				enemyChar.healthPoints = (enemyChar.healthPoints - playerChar.attackPower);
				playerChar.healthPoints = (playerChar.healthPoints - enemyChar.attackPower);
				console.log(playerChar.healthPoints);
				console.log(enemyChar.healthPoints);

				}
		
				}) 

			if (playerChar.healthPoints <= 0) {
				alert("You lost")
				}

			if (enemyChar.healthPoints <= 0) {
				$(".Loser1").append(enemyChar);	

			}

			}



attack();



//function for battle - start from attack button on click;  include HP and attackPower calculation,  loop until x reaches zero;  win/loss

//loop back to function to choose next enemy

//



		

	

