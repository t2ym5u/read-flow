import type { Story } from "$lib/types";

const story: Story = {
	id: 10,
	title: "A Letter from Abroad",
	level: "Avancé",
	levelColor: "#ff6b6b",
	emoji: "✉️",
	gradient: "linear-gradient(135deg, #c94b4b 0%, #4b134f 100%)",
	desc: "Une correspondance entre deux amis de pays différents",
	duration: "14 min",
	words: 400,
	category: "travel",
	tags: ["past-perfect", "formal-register", "culture", "B2"],
	keyVocabulary: [
		{ word: "abroad", translation: "à l'étranger", example: "She went abroad to study in Japan." },
		{ word: "customs", translation: "coutumes", example: "The local customs were fascinating." },
		{ word: "overwhelming", translation: "accablant", example: "The first week was overwhelming." },
		{
			word: "grateful",
			translation: "reconnaissant",
			example: "I am grateful for this experience.",
		},
		{ word: "homesick", translation: "nostalgique", example: "Sometimes I feel homesick." },
		{
			word: "perspective",
			translation: "perspective",
			example: "This trip changed my perspective.",
		},
		{ word: "cherish", translation: "chérir", example: "I will cherish these memories forever." },
		{
			word: "fascinating",
			translation: "fascinant",
			example: "The culture is absolutely fascinating.",
		},
	],
	grammarTips: [
		{
			title: "Past Perfect",
			explanation:
				"Le past perfect (had + participe passé) décrit une action terminée avant une autre action passée.",
			examples: [
				"I had never seen such a beautiful temple before.",
				"She had always dreamed of visiting Japan.",
			],
		},
		{
			title: "Registre formel vs informel",
			explanation:
				"Le registre formel utilise des structures plus complexes et un vocabulaire soutenu. Les lettres mélangent souvent les deux.",
			examples: [
				"I am writing to share my experiences. (formel)",
				"You won't believe what happened! (informel)",
				"I would like to tell you about... (formel)",
			],
		},
		{
			title: "Exprimer son opinion",
			explanation: "Différentes formules permettent d'exprimer une opinion de façon nuancée.",
			examples: [
				"In my view, the food is extraordinary.",
				"I believe that travel changes people.",
				"It seems to me that every culture has something to teach us.",
			],
		},
	],
	summary:
		"Claire, une étudiante française au Japon, écrit à son amie Léa pour partager ses découvertes : les temples de Kyoto, les coutumes locales, la nourriture, les défis culturels et le mal du pays. Elle réalise que voyager a profondément changé sa vision du monde.",
	sentences: [
		{
			en: "Dear Léa, I am writing to you from my small apartment in Kyoto, Japan.",
			simple: "Dear Léa, I am writing from Japan.",
			fr: "Chère Léa, je t'écris depuis mon petit appartement à Kyoto, au Japon.",
			audio: true,
		},
		{
			en: "I have been here for three months now, and I still cannot believe I actually live here.",
			simple: "I have been here for three months.",
			fr: "Cela fait trois mois que je suis ici, et je n'arrive toujours pas à croire que j'y vis vraiment.",
			audio: true,
		},
		{
			en: "The first week was completely overwhelming — everything was different from France.",
			simple: "The first week was difficult.",
			fr: "La première semaine a été complètement accablante — tout était différent de la France.",
			audio: true,
		},
		{
			en: "I had never experienced such a different culture before arriving here.",
			simple: "The culture was very different for me.",
			fr: "Je n'avais jamais vécu une culture aussi différente avant d'arriver ici.",
			audio: true,
		},
		{
			en: "The local customs fascinated me from the very beginning.",
			simple: "I loved the local customs.",
			fr: "Les coutumes locales m'ont fascinée dès le début.",
			audio: true,
		},
		{
			en: "People bow to each other as a sign of respect, which I find beautiful.",
			simple: "People bow to show respect.",
			fr: "Les gens s'inclinent les uns devant les autres en signe de respect, ce que je trouve magnifique.",
			audio: true,
		},
		{
			en: "Last weekend, I visited an ancient temple surrounded by a bamboo forest.",
			simple: "I visited an old temple.",
			fr: "Le week-end dernier, j'ai visité un temple ancien entouré d'une forêt de bambous.",
			audio: true,
		},
		{
			en: "I had never seen anything so peaceful and breathtaking in my entire life.",
			simple: "It was the most beautiful place I ever saw.",
			fr: "Je n'avais jamais rien vu d'aussi paisible et à couper le souffle de toute ma vie.",
			audio: true,
		},
		{
			en: "The food here is extraordinary — I have tried dishes I could never have imagined.",
			simple: "The food is amazing.",
			fr: "La nourriture ici est extraordinaire — j'ai goûté des plats que je n'aurais jamais pu imaginer.",
			audio: true,
		},
		{
			en: "My favourite meal so far has been a traditional ramen served in a tiny restaurant.",
			simple: "I love ramen the most.",
			fr: "Mon repas préféré jusqu'ici a été un ramen traditionnel servi dans un tout petit restaurant.",
			audio: true,
		},
		{
			en: "I must admit, though, that I sometimes feel terribly homesick.",
			simple: "Sometimes I miss home a lot.",
			fr: "Je dois admettre, cependant, que je me sens parfois terriblement nostalgique.",
			audio: true,
		},
		{
			en: "I miss the smell of fresh croissants in the morning and the sound of French in the streets.",
			simple: "I miss French food and language.",
			fr: "L'odeur des croissants frais le matin et le son du français dans les rues me manquent.",
			audio: true,
		},
		{
			en: "However, I believe that these moments of loneliness have made me stronger.",
			simple: "Being alone has made me stronger.",
			fr: "Cependant, je crois que ces moments de solitude m'ont rendue plus forte.",
			audio: true,
		},
		{
			en: "In my view, every person should experience living in a foreign country at least once.",
			simple: "Everyone should live in another country.",
			fr: "À mon avis, chaque personne devrait vivre dans un pays étranger au moins une fois.",
			audio: true,
		},
		{
			en: "It changes your perspective on the world in ways you cannot predict.",
			simple: "It changes how you see the world.",
			fr: "Cela change votre vision du monde de manières que l'on ne peut pas prévoir.",
			audio: true,
		},
		{
			en: "I have learned that kindness is a universal language that needs no translation.",
			simple: "Kindness is the same everywhere.",
			fr: "J'ai appris que la gentillesse est une langue universelle qui n'a besoin d'aucune traduction.",
			audio: true,
		},
		{
			en: "My Japanese neighbours have been incredibly welcoming despite the language barrier.",
			simple: "My neighbours are very kind.",
			fr: "Mes voisins japonais ont été incroyablement accueillants malgré la barrière de la langue.",
			audio: true,
		},
		{
			en: "They have taught me to cook traditional dishes and have shown me hidden gems around the city.",
			simple: "They taught me cooking and showed me the city.",
			fr: "Ils m'ont appris à cuisiner des plats traditionnels et m'ont montré des trésors cachés dans la ville.",
			audio: true,
		},
		{
			en: "I will cherish these memories and these friendships for the rest of my life.",
			simple: "I will always remember this.",
			fr: "Je chérirai ces souvenirs et ces amitiés pour le reste de ma vie.",
			audio: true,
		},
		{
			en: "I cannot wait to see you again and tell you everything in person. With love, Claire.",
			simple: "I want to see you and tell you everything. Love, Claire.",
			fr: "J'ai hâte de te revoir et de tout te raconter en personne. Avec amour, Claire.",
			audio: true,
		},
	],
	quiz: [
		{
			question: "Dans quelle ville Claire habite-t-elle ?",
			options: ["Tokyo", "Osaka", "Kyoto", "Yokohama"],
			correct: 2,
		},
		{
			question: "Depuis combien de temps Claire est-elle au Japon ?",
			options: ["Un mois", "Trois mois", "Six mois", "Un an"],
			correct: 1,
		},
		{
			question: "Qu'est-ce que Claire a visité le week-end dernier ?",
			options: ["Un musée", "Un temple ancien", "Un château", "Un parc"],
			correct: 1,
		},
		{
			question: "Quel est le plat préféré de Claire ?",
			options: ["Des sushis", "Du ramen", "Du riz", "Des tempuras"],
			correct: 1,
		},
		{
			question: "Que lui manque-t-il de la France ?",
			options: ["La pluie", "Les croissants et le français", "La télévision", "Son travail"],
			correct: 1,
		},
	],
};

export default story;
