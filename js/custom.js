$(document).ready(function() {
	var cards = []; //create a placeholder for the card array
	var imagePaths = []; //creates placeholder array for image paths

			$('.card').each(function(key, value) {
				var cardName = $(value).attr('id');
				var idBuilder = $("#" + cardName);
				cards.push(idBuilder);
				var imagePath = $(this).attr('data-imgpath');
				imagePaths.push(imagePath);
			})

			//Setting up jquery pointers 
			var $cards = $('#cards') //set up a pointer to the cards container
			var $cardList = $("#cardList"); //set up a pointer to the cards list ul
			var $card = $('.card'); //set up a pointer to the cards
			var $nextButton = $('.next'); //set pointer to next button
			var $previousButton = $('.previous'); //set pointer to previous button
			var $date = $('#date'); //set pointer to date span
			var $timeline = $('#timeline'); //sets pointer to timeline

			//setting up pointers for the jumpers
			/*
			var $firstDay = $('#firstDay');
			var $currentDay = $('#currentDay');
			var $pham = $('#pham');
			var $vinson = $('#vinson');
			var $jumper = $('.jumper');
			*/

			var cardCounter = 0; // setting a counter of the array
			var currentCard = cards[cardCounter];
			var totalCards = cards.length; //get the total number of cards
			var cardWidth = $cards.width(); //grabbing the width of the card
			var listMargin = 0

			$cardList.css('width', totalCards * cardWidth); //setting the width of the list to be equal to the width of a card times total number of cards
			$timeline.height(currentCard.height() + 145);

			//clicking of the next button 

			$nextButton.click(function(e) {
				e.preventDefault();
				listMargin -= cardWidth; //change list margin variable to be equal to less one card width
				$(cardList).css('marginLeft', listMargin)  // move the list that distance
				cardCounter ++; //change the card counter
				currentCard = cards[cardCounter]; //change the current card
				$card.removeClass('active'); //remove active class from cards to make opacity fade to 0
				currentCard.addClass('active'); //add active class to current card to make opacity fade to 1
				$timeline.height(currentCard.height() + 145); //setting timeline to the new card height
				
				/*
				var nextCard = cards[cardCounter + 1];
				console.log(nextCard);
				$(nextCard + " > img").attr('src', imagePaths[cardCounter + 1]);
				buttonRemover(); */
			})


			//clicking the previous button

			$previousButton.click(function(e) {
				e.preventDefault();
				listMargin += cardWidth; //change list margin variable to be equal to one more card width
				$(cardList).css('marginLeft', listMargin) //move the list that distance
				cardCounter --; //change the card counter
				currentCard = cards[cardCounter]; //change the current card
				$card.removeClass('active'); //remove active class from cards to make opacity fade to 0
				currentCard.addClass('active'); //add active class to current card to make opacity fade to 1
				$timeline.height(currentCard.height() + 145); //setting timeline to the new card height
				buttonRemover();
				
			})

			function buttonRemover() {
				if (cardCounter === cards.length - 1) {  
					$nextButton.addClass('buttonHide'); //if it's the last slide, remove the next button
				} else if ( $previousButton.hasClass('buttonHide') ) {
					$previousButton.toggleClass('buttonHide'); //if it's not the first slide, show the previous button
				} else if (cardCounter === 0) {
					$previousButton.addClass('buttonHide'); // if it's the first slide, remove the previous button
				} else if ( $nextButton.hasClass('buttonHide') ) {
					$nextButton.toggleClass('buttonHide'); //if it's not the last slide, show the next button
				}
			}

			$(window).resize(function() {
				cardWidth = $cards.width();
				$cardList.css('width', totalCards * cardWidth);
				listMargin = 0 - cardWidth * cardCounter;
				$(cardList).css('marginLeft', listMargin);
				$timeline.height(currentCard.height() + 225);
			});

})

	