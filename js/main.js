const TITLE = 'Hei, verden!'

const SECTIONS = [
  {
    title: 'Hvem er jeg?',
    content:
      'Jeg heter Andreas og er 26 år gammel. Alltid vært over middels gira på alt med data å gjøre. Samboeren min er en Maine Coon som heter Athene!',
    bulletPoints: [],
    image: '',
  },
  {
    title: 'Hobbier?',
    content:
      'Jeg er altfor glad i data, men liker også å holde på med litt andre ting, som...',
    bulletPoints: [
      'Katter (er dette en hobby?)',
      'Linux',
      'Trening',
      'Programmering',
      'Spill',
    ],
    image: '',
  },
  {
    title: 'Bilde?',
    content:
      'Siden dette ligger på GitHub, så vil jeg helst ikke legge ut bilde av meg selv. Athene vil gjerne vises frem da!',
    bulletPoints: [],
    image: 'assets/athene.jpg',
  },
]

function toggleTheme() {
  document.body.classList.toggle('lightTheme')
  document.getElementById('themeButton').classList.toggle('buttonLight')
}

function viewSections() {
  return SECTIONS.map(
    (section) => `
			<h2>${section.title}</h2>
			<p>${section.content}</p>
			<ul>
				${section.bulletPoints.map((bulletPoint) => `<li>${bulletPoint}</li>`).join('')}
			</ul>
			<img src="${section.image}" />
			<br />
		`,
  ).join('')
}

function view() {
  document.getElementById('app').innerHTML = `
		<div id="container">
			<br />
			<div id="header">
				<h1>${TITLE}</h1>
				<div id="themeButton" onclick="toggleTheme()"></div>
			</div>
			<br />
			${viewSections()}
		</div>
	`
}
