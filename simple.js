const sendRequest = document.querySelector('#send-request')
const results = document.querySelector('#results')

sendRequest.addEventListener('click', async () => {
	try {
		console.log('Ska skicka request')
		let timeBefore = new Date().getTime()
	
		const response = await fetch('https://api.chucknorris.io/jokes/random')
		console.log('Request skickat och svar mottaget med statuskod: ', response.status);
		// Statuskod 200 betyder att allt ä okej
		// Statuskod som börjar på 4 betyder FEL!!
	
		const data = await response.json() 
		console.log('Vi fick:', data);
	
		let timeAfter = new Date().getTime()
		console.log(`Det tog ${timeAfter - timeBefore} ms.`)
	
		// Vad vi gör nu beror på hur svaret från servern ser ut
		// Datan har ett fält som heter "value"
		results.innerText = data.value
	}
	catch( error ) {
		results.innerText = 'Hoppsan, något gick fel! Försök igen...'
		console.log('Felet är: ', error.message)
	}
})