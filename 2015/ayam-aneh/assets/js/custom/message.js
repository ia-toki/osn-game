define(['testcase', 'storage'], function(testcase, storage) {
	var message = {
		getIDNHelp: function() {
			return  "Dalam permainan ini, anda diminta untuk mencari <i>string</i> DNA yang dipikirkan juri. Masukan <i>substring</i> tebakan pada text area di kiri, kemudian tekan tombol 'Submit Guess' dan program akan memberikan respon seperti yang dijelaskan di soal. Bila anda ingin menebak <i>string</i> DNA yang dipikirkan juri, maka klik tombol 'answer' dan masukkan jawaban anda." + '\n ' +'\n ' +
					"Untuk mengganti subtask yang ingin dimainkan, pilih subtask yang ingin dimainkan pada menu dropdown subtask dan klik tombol 'play'. Untuk Mengulang game klik tombol 'reset'." + '\n ' +'\n ' +
					"Indikator subtask mengindikasikan subtask mana yang telah anda selesaikan, indikator bewarna hijau berarti anda telah berhasil menyelesaikan subtask tersebut. Tekan tombol 'Download Source Code' untuk menghasilkan source code yang berisi kode untuk menyelesaikan subtask yang telah anda selesaikan (anda bisa mengumpulkan source code ini).";
		},
		getENGHelp: function() {
			return  "In this game, you have to guess the jury's DNA string. Enter the guessed substring on the left text area, and click 'submit guess', the program will give response as described in the problem. If you want to guess the jury's DNA string, click on 'answer' button and input your guess." + '\n ' +'\n ' +
					"To change the subtask played, choose the subtask you want to play in subtask dropdown menu and click 'play'. To reset the game, click on 'reset' button" + '\n ' +'\n ' +
					"Subtask Indicator indicate which subtask you have solve, green indicator means you hage successfully solve that subtask. Press 'Download Source Code' to generate source code that will solve the subtask you have solved (you can submit this source code).";
		},
		about: function() {
			var str = "<p>This game is created for the visualisation purpose of Olimpiade Sains Nasional (OSN) 2015 purpose.</p>&#169; 2015 TOKI";

			return str;
		},
		code: function() {
			var ans1,ans2;

			if(storage.isTrue(1)) {
				ans1 = testcase.getAnswer(1);
			} else {
				ans1 = "You have not solve this subtask.";
			}

			if(storage.isTrue(2)) {
				ans2 = testcase.getAnswer(2);
			} else {
				ans2 = "You have not solve this subtask.";
			}

			var str = '<p>Save this code as .cpp file and submit the file.</p><pre>#include &lt;cstdio&gt;\n#include &lt;cstring&gt;\n\nusing namespace std;\nchar subtask[10];\n\nint main() {\n\tscanf("%s", subtask);\n\tif(subtask[1] == \'1\') { printf("' + ans1 + '"); }\n\tif(subtask[2] == \'2\') { printf("' + ans2 + '"); }\n\tfflush(stdout);\n\treturn 0;\n}</pre>';

			return str;
		},
		codePascal: function() {
			var ans1,ans2;

			if(storage.isTrue(1)) {
				ans1 = testcase.getAnswer(1);
				ans1 = ans1.substr(0,16);
			} else {
				ans1 = "You have not solve this subtask.";
			}

			if(storage.isTrue(2)) {
				ans2 = testcase.getAnswer(2);
				ans2 = ans2.substr(0,16);
			} else {
				ans2 = "You have not solve this subtask.";
			}

			var str = '<p>Save this code as .pas file and submit the file.</p><pre>' + 
			'var\n' +
			'\tsubtask: string;\n' +
			'begin\n' +
			'\treadln(subtask);\n' +
			'\tif (subtask[2] = \'1\') then writeln(\''+ ans1 + '\');\n' +
			'\tif (subtask[3] = \'2\') then writeln(\''+ ans2 + '\');\n' +
			'\tflush(output);\n' +
			'end.</pre>';

			return str;
		},
	};

	return message;
});