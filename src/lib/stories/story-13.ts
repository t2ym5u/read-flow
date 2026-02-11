import type { Story } from "$lib/types";

const story: Story = {
	id: 13,
	title: "A Rainy Day Adventure",
	level: "Débutant",
	levelColor: "#6bcf7f",
	emoji: "🌧️",
	gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
	desc: "Une journée pluvieuse pleine de surprises",
	duration: "5 min",
	words: 120,
	category: "daily-life",
	tags: ["present-continuous", "weather", "daily-life", "A1"],
	keyVocabulary: [
		{ word: "rain", translation: "pluie", example: "The rain is falling on the roof." },
		{ word: "umbrella", translation: "parapluie", example: "She forgot her umbrella at home." },
		{ word: "puddle", translation: "flaque", example: "The children jump in the puddles." },
		{
			word: "rainbow",
			translation: "arc-en-ciel",
			example: "A beautiful rainbow appeared in the sky.",
		},
		{ word: "boots", translation: "bottes", example: "She wears her yellow rain boots." },
		{ word: "splash", translation: "éclabousser", example: "They splash water everywhere!" },
	],
	grammarTips: [
		{
			title: "Present Continuous",
			explanation: "Le present continuous (am/is/are + -ing) décrit ce qui se passe en ce moment.",
			examples: ["It is raining outside.", "The children are playing.", "She is wearing boots."],
		},
		{
			title: "Le vocabulaire de la météo",
			explanation: "En anglais, on utilise 'it' comme sujet pour parler de la météo.",
			examples: ["It is raining.", "It is sunny.", "It is cold today."],
		},
	],
	summary:
		"Sophie se réveille un matin de pluie et est d'abord triste. Mais elle met ses bottes, prend son parapluie et sort. Elle saute dans les flaques, rencontre un chien joueur, et quand la pluie s'arrête, un magnifique arc-en-ciel apparaît.",
	sentences: [
		{
			en: "Sophie wakes up and looks out the window. It is raining.",
			simple: "Sophie wakes up. It is raining.",
			fr: "Sophie se réveille et regarde par la fenêtre. Il pleut.",
			audio: true,
		},
		{
			en: "She feels a little sad because she wanted to go to the park.",
			simple: "She is sad. She wanted to go to the park.",
			fr: "Elle se sent un peu triste parce qu'elle voulait aller au parc.",
			audio: true,
		},
		{
			en: "Her mother says, 'Put on your boots and take your umbrella!'",
			simple: "Her mother says, 'Take your boots and umbrella!'",
			fr: "Sa mère dit : « Mets tes bottes et prends ton parapluie ! »",
			audio: true,
		},
		{
			en: "Sophie puts on her yellow rain boots and her red raincoat.",
			simple: "Sophie puts on her boots and raincoat.",
			fr: "Sophie met ses bottes de pluie jaunes et son imperméable rouge.",
			audio: true,
		},
		{
			en: "She opens the door and steps outside into the rain.",
			simple: "She goes outside in the rain.",
			fr: "Elle ouvre la porte et sort sous la pluie.",
			audio: true,
		},
		{
			en: "The rain is falling gently, and the streets are shining like mirrors.",
			simple: "The rain is soft. The streets are shiny.",
			fr: "La pluie tombe doucement, et les rues brillent comme des miroirs.",
			audio: true,
		},
		{
			en: "Sophie sees a big puddle and jumps right into it — splash!",
			simple: "Sophie jumps in a puddle!",
			fr: "Sophie voit une grande flaque et saute dedans — splash !",
			audio: true,
		},
		{
			en: "A small dog comes running towards her, wagging its tail happily.",
			simple: "A small happy dog comes to her.",
			fr: "Un petit chien arrive en courant vers elle, remuant la queue joyeusement.",
			audio: true,
		},
		{
			en: "They play together in the puddles for a long time.",
			simple: "They play in the puddles together.",
			fr: "Ils jouent ensemble dans les flaques pendant longtemps.",
			audio: true,
		},
		{
			en: "Suddenly, the rain stops and the sun comes out from behind the clouds.",
			simple: "The rain stops. The sun comes out.",
			fr: "Soudain, la pluie s'arrête et le soleil sort de derrière les nuages.",
			audio: true,
		},
		{
			en: "Sophie looks up and sees a beautiful rainbow across the sky.",
			simple: "Sophie sees a rainbow in the sky.",
			fr: "Sophie lève les yeux et voit un magnifique arc-en-ciel dans le ciel.",
			audio: true,
		},
		{
			en: "She smiles and thinks, 'Rainy days are the best days!'",
			simple: "She thinks rainy days are the best!",
			fr: "Elle sourit et pense : « Les jours de pluie sont les meilleurs jours ! »",
			audio: true,
		},
	],
	quiz: [
		{
			question: "Pourquoi Sophie est-elle triste au début ?",
			options: ["Elle est malade", "Il pleut", "Elle a perdu son chat", "L'école est fermée"],
			correct: 1,
		},
		{
			question: "De quelle couleur sont les bottes de Sophie ?",
			options: ["Rouges", "Bleues", "Jaunes", "Vertes"],
			correct: 2,
		},
		{
			question: "Quel animal Sophie rencontre-t-elle ?",
			options: ["Un chat", "Un chien", "Un oiseau", "Un lapin"],
			correct: 1,
		},
		{
			question: "Qu'apparaît dans le ciel quand la pluie s'arrête ?",
			options: ["Un avion", "Un cerf-volant", "Un arc-en-ciel", "La lune"],
			correct: 2,
		},
	],
};

export default story;
