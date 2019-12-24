define(['storage', 'jquery', 'testcase', 'notifier', 'textarea', 'message', 'bootstrap-dialog'], 
	function(storage, $, testcase, notifier, textarea, message, BootstrapDialog) {
	
	$(document).ready(function() {
		storage.init();
		testcase.init();
		var done;
		done = true; 
		var currentTC;
		var lock;
		var remaining;

		var sourceResponse = function() {
			BootstrapDialog.show({
	            title: 'Source Code',
	            cssClass: 'dialog',
	            message: message.code(),
	            buttons: [{
			        label: 'C++',
			        autospin: false,
			        action: function(dialogRef){    
			            dialogRef.setMessage(message.code());
			        }
			    },
			    {
			    	label: 'Pascal',
			        autospin: false,
			        action: function(dialogRef){    
			            dialogRef.setMessage(message.codePascal());
			        }
			    },
			    {
			    	label: 'OK',
			        autospin: false,
			        action: function(dialogRef){    
			            dialogRef.close();
			        }
			    }]
	        });
		}

		var aboutResponse = function() {
			BootstrapDialog.show({
	            title: 'About',
	            cssClass: 'dialog',
	            message: message.about(),
	            buttons: [{
			    	label: 'OK',
			        autospin: false,
			        action: function(dialogRef){    
			            dialogRef.close();
			        }
			    }]
	        });
		}


		var helpResponse = function() {
			BootstrapDialog.show({
	            cssClass: 'dialog',
                title: 'Help',
			    message: message.getIDNHelp(),
			    buttons: [{
			        label: 'Bahasa Indonesia',
			        autospin: false,
			        action: function(dialogRef){    
			            dialogRef.setMessage(message.getIDNHelp());
			        }
			    },
			    {
			    	label: 'English',
			        autospin: false,
			        action: function(dialogRef){    
			            dialogRef.setMessage(message.getENGHelp());
			        }
			    },
			    {
			    	label: 'OK',
			        autospin: false,
			        action: function(dialogRef){    
			            dialogRef.close();
			        }
			    }]
	        });
		}

		var correctResponse = function() {
			BootstrapDialog.show({
	            title: 'Correct Answer',
	            cssClass: 'dialog',
	            message: 'Congratulations! You solved this subtask.',
	            type: BootstrapDialog.TYPE_SUCCESS,
	        });
		}

		var wrongResponse = function() {
			BootstrapDialog.show({
	            title: 'Wrong Answer',
	            cssClass: 'dialog',
	            message: 'Please try again!',
	            type: BootstrapDialog.TYPE_DANGER,
	        });
		}

		var warningResponse = function(text) {
			BootstrapDialog.show({
	            title: 'Warning',
	            cssClass: 'dialog',
	            message: text,
	            type: BootstrapDialog.TYPE_WARNING,
	        });
		}

		var answerResponse = function() {
			BootstrapDialog.confirm({
				title: 'Answer',
			    message: function (dialogItself) {
			        var $form = $('<form></form>');
			        $form.addClass('dialog');
			        var $titleDrop= $('<input/>', {
						type: 'text',
				        class: 'form-control',
				        id: 'answerInput',
				    });
				    $titleDrop.keydown(function alphaOnly(event) {
					  var key = event.keyCode;
					  if (key == 13) {
					  	event.preventDefault();
	    				return false;
					  };
					  return ((key >= 65 && key <= 90) || key == 8 || key == 13 || key == 16 || key == 17 || key == 18 || (key >= 35 && key <= 40) || key == 46);
					});
			        $form.append('<p>Write your DNA answer</p>').append($titleDrop);
			        
			        return $form;
			    },
			    closable: true, // <-- Default value is false
	            btnCancelLabel: 'Cancel', // <-- Default value is 'Cancel',
	            btnOKLabel: 'Answer', // <-- Default value is 'OK',
	            btnOKClass: 'btn-warning', // <-- If you didn't specify it, dialog type will be used,
	            callback: function(result) {
	                // result will be true if button was click, while it will be false if users close the dialog directly.
	                if (result){
                		done = true;
                		addRow('JAWAB '+$('#answerInput').val().toUpperCase(), '', false);
	                	if ($('#answerInput').val().toUpperCase() == testcase.getTrueAnswer(currentTC)) {
	                		setSubtaskTrue(currentTC);
							colorSubtask();
	                		correctResponse();
	                	}
	                	else {
	                		wrongResponse();
							$("#warning").html("You lose! click on reset button to play again.");
	                	}

	                }
	            }
			});
		}

		var generateTable = function() {
			if ($("#interaction-table") != null) {
    			$("#interaction-table").remove();
    		}
			var table = $('<table></table>').addClass('table table-bordered').attr('id', 'interaction-table');


			$('#interaction').append(table);
		}

		var removeHighlight = function() {
			for (var i = 1; i < 100; ++i) {
	    		if ($("#btn_"+i) != null) {
	    			$("#btn_"+i).removeClass("highlight");
	    		}
	    	}
	    }

		var highlightNumber = function(text) {
			removeHighlight();

	    	var number = [];
	    	number = text.split(" ");

	    	for (var i = 1; i < number.length; i++) {
	    		$("#btn_"+ number[i]).addClass("highlight");
	    	};

		}

		var deleteRow = function() {
			$("#interaction-table tr:eq(1)").remove();
		}

		var addRow = function(x, y, isInput) {
			var row = $('<tr></tr>');
		    row.append($('<td></td>').text(x));
		    row.append($('<td></td>').text(y));
		    if (isInput) {
		    	row.addClass('input');
		    	row.click(function() {
		    		if ($(this).hasClass('selected')) {
		    			$(this).removeClass('selected');
		    		}
				    else {
				    	$(this).addClass('selected').siblings().removeClass("selected");
				    	highlightNumber($(this).children(":first").text());
				    }
				});
				row.mouseenter(function() {
					highlightNumber($(this).children(":first").text());
				});
				row.mouseleave(function() {
					removeHighlight();
					if ($(this).siblings( ".selected" ).children(":first").text() != " ") {
						highlightNumber($(this).siblings( ".selected" ).children(":first").text());
					}

					if ($(this).hasClass('selected')) {
						highlightNumber($(this).children(":first").text());	
					}
				});
		    }
		    else {
		    	row.addClass('notInput');
		    }
		    $("#interaction-table").append(row);
		}

		var	generateButton = function(x) {
			if ($('#button_init') != null) {
				$('#button_init').remove();
			};
			var r= $('<input/>', {
				type: 'text',
		        class: 'form-control input-lg',
		        id: 'DNAInput',
		    });
		    r.keydown(function alphaOnly(event) {
			  var key = event.keyCode;
			  if (key == 13) {
			  	tebak();
			  };
			  return ((key >= 65 && key <= 90) || key == 8 || key == 13 || key == 16 || key == 17 || key == 18 || (key >= 35 && key <= 40) || key == 46);
			});
        	$("#number").append(r);
	    }

	    var removeButton = function () {
    		if ($("#DNAInput") != null) {
    			$("#DNAInput").remove();
    		}
	    }

	    var resetButton = function () {
	    	for (var i = 1; i < 100; ++i) {
	    		if ($("#btn_"+i) != null) {
	    			$("#btn_"+i).removeClass( "number-clicked" );
	    		}
	    	}
	    }


		var answer = function(x) {
			textarea.insertRight("0 " + x);
			if(x === testcase.getAnswer(currentTC)) {
				notifier.createAlert("Correct Answer!");
			} else {
				notifier.createAlert("Wrong Answer!");
			}
			done = true;
		};

		var colorSubtask = function() {
			for(var i=1 ; i<=2 ; i++) {
				if(storage.isTrue(i)) {
					$("#tc-" + i).css("background-color", "#2ca02c");
				}
			}
		}
		colorSubtask();

		var tebak = function() {
			if(remaining == 0) {
				warningResponse("You may not submit guess anymore.");
			} else {
				var currentGuess;
				if (currentTC != null) {
	    			currentGuess = $("#DNAInput").val().toUpperCase();
	    		}
	    		else
	    			return;

				if(currentGuess.length > 0) {
					textarea.insertLeft(currentGuess);
					addRow('TANYA ' + currentGuess,'', false);

					var str = testcase.getTrueAnswer(currentTC);
					
					if (str.indexOf(currentGuess) >= 0) {
						addRow('','YA', false);
					}
					else {
						addRow('','TIDAK', false);
					}
					remaining--;
					if (testcase.getKVariable(currentTC) - remaining == 11)
						warningResponse("Older interaction history will be deleted");
					if (testcase.getKVariable(currentTC) - remaining >= 12)
					{
						deleteRow();
						deleteRow();
					}
					$('#remaining').text('(Remaining Guess: ' + remaining + ')');
				} else {
					warningResponse('Your guess is empty.');
				}
			}
			resetButton();
			removeHighlight();
			$("#interaction-table tr").removeClass('selected');
			$("#text").val("");
		}

		var setSubtaskTrue = function(numTC) {
			storage.setTrue(numTC);
			colorSubtask();
		};

		var init = function(numTC) {
			removeButton();
			resetButton();
			generateTable();
		    generateButton(testcase.getNVariable(numTC));
			currentTC = numTC;
			addRow('',testcase.getHeader(currentTC) + "\n" + testcase.getNVariable(currentTC) + " " + testcase.getKVariable(currentTC),false);
			colorSubtask();
			done = false;
			textarea.reset();
			$("#warning").html("");
			$("#text").val("");
			textarea.insertLeft(testcase.getNVariable(currentTC) + " " + testcase.getKVariable(currentTC));
			remaining = testcase.getKVariable(currentTC);
			$('#remaining').text('(Remaining Guess: ' + remaining + ')');
		};

		$("#guessButton").click(function() {
			if(!done) {
				tebak();
			}
		});

		$("#answerButton").click(function() {
			if(!done) {
				answerResponse();
			}
		});

		$("#reset").click(function() {
			init(currentTC);
		});

		$("#play").click(function() {
			init($("#testcase").val());
		});

		$("#help").click(function() {
			helpResponse();
		});

		$("#about").click(function() {
			aboutResponse();
		});

		$("#source").click(function() {
			sourceResponse();
		});
	});

});