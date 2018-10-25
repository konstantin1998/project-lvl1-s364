import readlineSync from 'readline-sync';
export const my_ques = () =>{
	const name = readlineSync.question('May I have your name? ');
	console.log('Hello' + name +'!');
	return '';
}
