import type { Story } from "$lib/types";

const story: Story = {
	id: 18,
	title: "Perseus and Medusa",
	level: "Intermédiaire",
	levelColor: "#ffd93d",
	emoji: "⚔️",
	gradient: "linear-gradient(135deg, #373b44 0%, #4286f4 100%)",
	desc: "Le héros qui vainquit le monstre aux serpents",
	duration: "8 min",
	words: 245,
	category: "mythology",
	tags: ["past-simple", "relative-clauses", "greek-myth", "A2-B1"],
	keyVocabulary: [
		{ word: "hero", translation: "héros", example: "Perseus was a great hero of Ancient Greece." },
		{ word: "gaze", translation: "regard", example: "Medusa's gaze turned people to stone." },
		{ word: "shield", translation: "bouclier", example: "Athena gave him a polished bronze shield." },
		{ word: "reflection", translation: "reflet", example: "He looked at Medusa's reflection in the shield." },
		{ word: "beheaded", translation: "décapita", example: "Perseus beheaded Medusa without looking at her." },
		{ word: "winged", translation: "ailé", example: "Hermes gave him a pair of winged sandals." },
	],
	grammarTips: [
		{
			title: "Relative Clauses (who / which / whose)",
			explanation: "Les propositions relatives permettent d'ajouter des informations sur un nom. 'Who' pour les personnes, 'which' pour les choses, 'whose' pour indiquer l'appartenance.",
			examples: [
				"Medusa was a monster whose hair was made of snakes.",
				"Anyone who looked at her was turned to stone.",
				"Perseus used a shield which acted as a mirror.",
			],
		},
		{
			title: "Past Simple — actions successives",
			explanation: "On utilise le past simple pour décrire une suite d'actions passées dans l'ordre chronologique.",
			examples: [
				"He found Medusa, looked at her reflection, and cut off her head.",
				"Perseus grabbed the head, flew back, and saved the kingdom.",
			],
		},
	],
	summary:
		"Persée est envoyé par un roi malveillant pour ramener la tête de Méduse, un monstre dont le regard transforme en pierre. Aidé par les dieux (bouclier d'Athéna, sandales ailées d'Hermès), il tranche la tête de Méduse en ne regardant que son reflet, et revient victorieux.",
	sentences: [
		{
			en: "Perseus was a young hero, the son of the god Zeus and a mortal woman named Danaë.",
			simple: "Perseus was a hero. His father was Zeus, a god.",
			fr: "Persée était un jeune héros, fils du dieu Zeus et d'une femme mortelle nommée Danaé.",
			audio: true,
		},
		{
			en: "The evil king Polydectes wanted to get rid of Perseus, so he gave him an impossible mission.",
			simple: "The bad king gave Perseus a very hard mission.",
			fr: "Le mauvais roi Polydectès voulait se débarrasser de Persée, il lui confia donc une mission impossible.",
			audio: true,
		},
		{
			en: "\"Bring me the head of Medusa,\" the king ordered with a cruel smile.",
			simple: "\"Get me the head of Medusa,\" the king said.",
			fr: "« Rapporte-moi la tête de Méduse », ordonna le roi avec un sourire cruel.",
			audio: true,
		},
		{
			en: "Medusa was a terrible monster whose hair was made entirely of living snakes.",
			simple: "Medusa was a monster with snakes for hair.",
			fr: "Méduse était un monstre terrible dont les cheveux étaient entièrement faits de serpents vivants.",
			audio: true,
		},
		{
			en: "Anyone who looked directly at her face was instantly turned to stone.",
			simple: "If you looked at her face, you turned to stone.",
			fr: "Quiconque la regardait directement dans les yeux était immédiatement transformé en pierre.",
			audio: true,
		},
		{
			en: "Perseus did not know how to fight such a creature, but the gods came to help him.",
			simple: "Perseus was worried, but the gods helped him.",
			fr: "Persée ne savait pas comment combattre une telle créature, mais les dieux vinrent à son aide.",
			audio: true,
		},
		{
			en: "The goddess Athena gave him a shield that was polished like a mirror.",
			simple: "Athena gave him a shiny shield like a mirror.",
			fr: "La déesse Athéna lui offrit un bouclier poli comme un miroir.",
			audio: true,
		},
		{
			en: "The god Hermes gave him a pair of winged sandals so he could fly.",
			simple: "Hermes gave him sandals with wings to fly.",
			fr: "Le dieu Hermès lui donna une paire de sandales ailées pour qu'il puisse voler.",
			audio: true,
		},
		{
			en: "Perseus flew across the sea to the cave at the edge of the world where Medusa slept.",
			simple: "Perseus flew to the cave where Medusa was sleeping.",
			fr: "Persée survola la mer jusqu'à la grotte au bout du monde où Méduse dormait.",
			audio: true,
		},
		{
			en: "He entered the cave carefully, keeping his eyes turned away from the monster.",
			simple: "He went in slowly. He did not look at Medusa.",
			fr: "Il entra dans la grotte prudemment, gardant les yeux détournés du monstre.",
			audio: true,
		},
		{
			en: "He raised his shining shield and looked only at Medusa's reflection.",
			simple: "He looked at her in the mirror, not at her face.",
			fr: "Il leva son bouclier brillant et ne regarda que le reflet de Méduse.",
			audio: true,
		},
		{
			en: "With one swift stroke of his sword, Perseus beheaded Medusa.",
			simple: "With his sword, he cut off Medusa's head.",
			fr: "D'un coup d'épée rapide et précis, Persée décapita Méduse.",
			audio: true,
		},
		{
			en: "He placed her head in a special bag without ever looking at it directly.",
			simple: "He put her head in a bag. He did not look at it.",
			fr: "Il plaça sa tête dans un sac spécial sans jamais la regarder directement.",
			audio: true,
		},
		{
			en: "Perseus flew back home and showed the king Medusa's head, turning him to stone.",
			simple: "Perseus went home and showed the head to the king. The king turned to stone.",
			fr: "Persée rentra chez lui et montra la tête de Méduse au roi, le transformant en pierre.",
			audio: true,
		},
		{
			en: "The hero had defeated the impossible and saved his kingdom.",
			simple: "Perseus won. He saved his people.",
			fr: "Le héros avait accompli l'impossible et sauvé son royaume.",
			audio: true,
		},
	],
	quiz: [
		{
			question: "Pourquoi le roi Polydectès envoya-t-il Persée chez Méduse ?",
			options: [
				"Pour tester son courage",
				"Pour se débarrasser de lui",
				"Pour protéger le royaume",
				"Parce que les dieux le demandaient",
			],
			correct: 1,
		},
		{
			question: "Quel était le pouvoir de Méduse ?",
			options: [
				"Elle pouvait voler et cracher du feu",
				"Elle lisait dans les pensées",
				"Son regard transformait en pierre",
				"Elle était invisible",
			],
			correct: 2,
		},
		{
			question: "Comment Persée évita-t-il le regard de Méduse ?",
			options: [
				"Il ferma les yeux et avança à tâtons",
				"Il porta un masque",
				"Il regarda le reflet dans son bouclier",
				"Il arriva pendant qu'elle dormait",
			],
			correct: 2,
		},
		{
			question: "Qu'arriva-t-il au roi Polydectès à la fin ?",
			options: [
				"Il s'enfuit dans un autre pays",
				"Il fut transformé en pierre",
				"Il demanda pardon à Persée",
				"Il mourut de peur",
			],
			correct: 1,
		},
	],
};

export default story;
