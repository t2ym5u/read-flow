import type { Story } from "$lib/types";

const story: Story = {
	id: 19,
	title: "Theseus and the Minotaur",
	level: "Intermédiaire",
	levelColor: "#ffd93d",
	emoji: "🐂",
	gradient: "linear-gradient(135deg, #2c1654 0%, #5c2a9d 100%)",
	desc: "Le labyrinthe et la bête mi-homme mi-taureau",
	duration: "9 min",
	words: 265,
	category: "mythology",
	tags: ["past-simple", "conditionals", "greek-myth", "B1"],
	keyVocabulary: [
		{ word: "labyrinth", translation: "labyrinthe", example: "The Minotaur lived in a dark labyrinth." },
		{ word: "tribute", translation: "tribut", example: "Athens had to send a tribute every year." },
		{ word: "volunteer", translation: "se porter volontaire", example: "Theseus volunteered to go to Crete." },
		{ word: "thread", translation: "fil", example: "Ariadne gave him a ball of thread." },
		{ word: "slew", translation: "tua", example: "Theseus slew the Minotaur in the darkness." },
		{ word: "sails", translation: "voiles", example: "He forgot to change the black sails to white." },
	],
	grammarTips: [
		{
			title: "Had to / must — obligation passée",
			explanation: "'Had to' exprime une obligation passée. C'est le past simple de 'must' ou 'have to'.",
			examples: [
				"Athens had to send young people to Crete every year.",
				"Theseus had to find the Minotaur in total darkness.",
				"He had to follow the thread to escape the labyrinth.",
			],
		},
		{
			title: "Conditionnel passé (If + had + participe)",
			explanation: "Pour imaginer ce qui aurait pu se passer différemment dans le passé.",
			examples: [
				"If he had looked at Medusa, he would have turned to stone.",
				"If Ariadne had not helped him, Theseus would have died in the labyrinth.",
			],
		},
	],
	summary:
		"Chaque année, Athènes devait envoyer sept jeunes hommes et sept jeunes femmes en sacrifice au Minotaure, monstre mi-homme mi-taureau enfermé dans un labyrinthe en Crète. Thésée se porte volontaire, reçoit l'aide de la princesse Ariane et son fil magique, tue le Minotaure et retrouve son chemin.",
	sentences: [
		{
			en: "Long ago, a terrible monster called the Minotaur lived beneath the island of Crete.",
			simple: "A monster called the Minotaur lived under the island of Crete.",
			fr: "Il y a très longtemps, un monstre terrible appelé le Minotaure vivait sous l'île de Crète.",
			audio: true,
		},
		{
			en: "The Minotaur had the body of a man but the head of a bull, and it was filled with rage.",
			simple: "The Minotaur had a man's body and a bull's head. It was very dangerous.",
			fr: "Le Minotaure avait un corps d'homme mais une tête de taureau, et il était rempli de rage.",
			audio: true,
		},
		{
			en: "The creature was kept inside a vast underground labyrinth from which no one had ever escaped.",
			simple: "The creature lived in a big maze underground. No one could get out.",
			fr: "La créature était gardée dans un vaste labyrinthe souterrain dont personne ne s'était jamais échappé.",
			audio: true,
		},
		{
			en: "Every year, the city of Athens had to send seven young men and seven young women to Crete as a tribute.",
			simple: "Every year, Athens had to send young people to Crete.",
			fr: "Chaque année, la ville d'Athènes devait envoyer sept jeunes hommes et sept jeunes femmes en Crète en guise de tribut.",
			audio: true,
		},
		{
			en: "They were given to the Minotaur, who hunted them in the darkness of the labyrinth.",
			simple: "The Minotaur hunted them in the dark labyrinth.",
			fr: "Ils étaient livrés au Minotaure, qui les traquait dans l'obscurité du labyrinthe.",
			audio: true,
		},
		{
			en: "The young prince Theseus could not bear to watch his people suffer any longer.",
			simple: "The prince Theseus did not want his people to suffer.",
			fr: "Le jeune prince Thésée ne supportait plus de voir son peuple souffrir.",
			audio: true,
		},
		{
			en: "He volunteered to go to Crete himself and promised his father he would kill the Minotaur.",
			simple: "Theseus said he would go to Crete and kill the Minotaur.",
			fr: "Il se porta volontaire pour aller en Crète et promit à son père qu'il tuerait le Minotaure.",
			audio: true,
		},
		{
			en: '"If I succeed, I will change the black sails to white so you know I am alive," he told the king.',
			simple: '"If I win, I will use white sails so you know I am safe," he said.',
			fr: "« Si je réussis, je changerai les voiles noires en blanches pour que tu saches que je suis en vie », dit-il au roi.",
			audio: true,
		},
		{
			en: "When Theseus arrived in Crete, the king's daughter Ariadne fell deeply in love with him.",
			simple: "In Crete, a princess named Ariadne fell in love with Theseus.",
			fr: "À son arrivée en Crète, la fille du roi, Ariane, tomba éperdument amoureuse de lui.",
			audio: true,
		},
		{
			en: "She secretly gave him a ball of golden thread and a sword.",
			simple: "She gave him a ball of thread and a sword in secret.",
			fr: "Elle lui donna secrètement une pelote de fil doré et une épée.",
			audio: true,
		},
		{
			en: '"Tie one end to the entrance," she whispered, "and unroll it as you walk. It will guide you back out."',
			simple: '"Use the thread to find your way out," she said.',
			fr: "« Attache un bout à l'entrée », chuchota-t-elle, « et déroule-le en marchant. Il te guidera vers la sortie. »",
			audio: true,
		},
		{
			en: "Theseus entered the dark labyrinth, unrolling the thread behind him with every step.",
			simple: "Theseus went into the dark maze. He unrolled the thread as he walked.",
			fr: "Thésée entra dans le labyrinthe sombre, déroulant le fil derrière lui à chaque pas.",
			audio: true,
		},
		{
			en: "Deep in the darkness, he found the Minotaur sleeping and attacked it with his sword.",
			simple: "In the dark, he found the Minotaur sleeping. He attacked it.",
			fr: "Au fond de l'obscurité, il trouva le Minotaure endormi et l'attaqua avec son épée.",
			audio: true,
		},
		{
			en: "After a fierce battle, Theseus slew the Minotaur and the beast fell silent forever.",
			simple: "After a hard fight, Theseus killed the Minotaur.",
			fr: "Après un combat acharné, Thésée tua le Minotaure et la bête se tut pour toujours.",
			audio: true,
		},
		{
			en: "He followed the golden thread back through the labyrinth and escaped into the sunlight.",
			simple: "He followed the thread back and got out.",
			fr: "Il suivit le fil doré à travers le labyrinthe et s'échappa à la lumière du jour.",
			audio: true,
		},
		{
			en: "But in his joy, Theseus forgot to change the black sails to white, and his father, watching from a cliff, believed his son was dead and threw himself into the sea.",
			simple: "Theseus forgot the white sails. His father thought he was dead and jumped into the sea.",
			fr: "Mais dans sa joie, Thésée oublia de changer les voiles noires en blanches, et son père, qui guettait du haut d'une falaise, crut son fils mort et se jeta dans la mer.",
			audio: true,
		},
		{
			en: "Theseus became king, but his victory was forever marked by this tragic mistake.",
			simple: "Theseus became king, but he was very sad about his father.",
			fr: "Thésée devint roi, mais sa victoire fut à jamais marquée par cette tragique erreur.",
			audio: true,
		},
	],
	quiz: [
		{
			question: "Quel tribut Athènes devait-elle payer chaque année ?",
			options: [
				"De l'or et des bijoux",
				"Sept jeunes hommes et sept jeunes femmes",
				"Cent soldats pour le roi de Crète",
				"Des animaux sacrés",
			],
			correct: 1,
		},
		{
			question: "Qu'est-ce qu'Ariane donna à Thésée pour l'aider ?",
			options: [
				"Une carte du labyrinthe",
				"Une lampe magique",
				"Une pelote de fil doré et une épée",
				"Des sandales ailées",
			],
			correct: 2,
		},
		{
			question: "Comment Thésée retrouva-t-il la sortie du labyrinthe ?",
			options: [
				"En suivant une étoile",
				"En remontant le fil d'Ariane",
				"En criant jusqu'à ce qu'on le retrouve",
				"En suivant le bruit de la mer",
			],
			correct: 1,
		},
		{
			question: "Pourquoi le père de Thésée mourut-il ?",
			options: [
				"Il fut tué par le roi de Crète",
				"Il tomba malade d'inquiétude",
				"Thésée oublia de changer les voiles noires en blanches",
				"Il se battit contre le Minotaure",
			],
			correct: 2,
		},
	],
};

export default story;
