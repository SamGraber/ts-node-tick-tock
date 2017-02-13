import * as readline from 'readline';

let reader = readline.createInterface(process.stdin, process.stdout);

let totalSeconds: number;
let totalMinutes: number;
let seconds: number;
let minutes: number;
let hours: number;

reader.question(`Please enter seconds: `, function(answer: string) {
	totalSeconds = +answer;
	totalMinutes = wholeNumberDivide( totalSeconds, 60);
	seconds = totalSeconds % 60;
	hours = wholeNumberDivide( totalMinutes, 60);
	minutes = totalMinutes % 60;
	console.log(`${totalSeconds} seconds = ${hours}:${minutes}:${seconds}`);

	reader.close();
});

function wholeNumberDivide(dividend: number, divisor: number): number {
	return Math.floor(dividend / divisor);
}
