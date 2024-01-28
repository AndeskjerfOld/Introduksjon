const TITLE = 'Hei, verden!'

const SECTIONS = [
  {
    title: 'Hvem er jeg?',
    content:
      'Jeg heter Andreas og er 26 år gammel. Samboeren min er en maine coon som heter Athene!',
    bulletPoints: [],
    image: '',
  },
  {
    title: 'Interesser?',
    content:
      'Data er greia mi. Liker det meste jeg kan gjøre med de, sette opp og drifte servere, konfigurere egen Linux maskin, drifte lokale sky tjenester, osv...' ,
    bulletPoints: [
      'Katter',
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
