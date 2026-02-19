import type { Story } from "$lib/types";

const story: Story = {
	id: 16,
	title: "Icarus and the Sun",
	level: "Débutant",
	levelColor: "#6bcf7f",
	emoji: "☀️",
	gradient: "linear-gradient(135deg, #f5af19 0%, #f12711 100%)",
	desc: "Le garçon qui vola trop près du soleil",
	duration: "5 min",
	words: 135,
	category: "mythology",
	tags: ["past-simple", "direct-speech", "greek-myth", "A1-A2"],
	keyVocabulary: [
		{ word: "inventor", translation: "inventeur", example: "Daedalus was a great inventor." },
		{ word: "feathers", translation: "plumes", example: "He collected thousands of feathers from birds." },
		{ word: "wax", translation: "cire", example: "He used wax to stick the feathers together." },
		{ word: "wings", translation: "ailes", example: "He made two pairs of wings." },
		{ word: "warning", translation: "avertissement", example: "Daedalus gave his son a warning." },
		{ word: "melt", translation: "fondre", example: "The heat will melt the wax." },
	],
	grammarTips: [
		{
			title: "Past Simple",
			explanation: "Le past simple décrit des actions terminées dans le passé. On ajoute '-ed' aux verbes réguliers (wanted, collected, jumped) et on utilise des formes irrégulières (flew, felt, fell).",
			examples: [
				"Daedalus wanted to escape.",
				"Icarus felt the wind on his face.",
				"The feathers fell from his wings.",
			],
		},
		{
			title: "Direct Speech",
			explanation: "Le discours direct rapporte les mots exacts de quelqu'un, entre guillemets.",
			examples: [
				'"Do not fly too close to the sun," Daedalus said.',
				'"The heat will melt the wax," he warned.',
			],
		},
	],
	summary:
		"Dédale, prisonnier avec son fils Icare sur l'île de Crète, fabrique des ailes en plumes et en cire. Malgré l'avertissement de son père, Icare vole trop près du soleil, la cire fond et il tombe dans la mer.",
	sentences: [
		{
			en: "Daedalus was a great inventor who lived on the island of Crete.",
			simple: "Daedalus was an inventor. He lived on an island.",
			fr: "Dédale était un grand inventeur qui vivait sur l'île de Crète.",
			audio: true,
		},
		{
			en: "The king kept him and his son Icarus prisoner in a tall tower.",
			simple: "The king put Daedalus and Icarus in a tower.",
			fr: "Le roi le gardait, lui et son fils Icare, prisonnier dans une haute tour.",
			audio: true,
		},
		{
			en: "Daedalus had a clever idea to escape.",
			simple: "Daedalus had a plan to get out.",
			fr: "Dédale eut une idée ingénieuse pour s'échapper.",
			audio: true,
		},
		{
			en: "He collected thousands of feathers from birds and stuck them together with wax.",
			simple: "He used feathers and wax to make wings.",
			fr: "Il récolta des milliers de plumes d'oiseaux et les colla ensemble avec de la cire.",
			audio: true,
		},
		{
			en: "He made two pairs of wings — one for himself and one for Icarus.",
			simple: "He made wings for himself and for Icarus.",
			fr: "Il fabriqua deux paires d'ailes — une pour lui et une pour Icare.",
			audio: true,
		},
		{
			en: "Before they jumped from the tower, Daedalus gave his son a serious warning.",
			simple: "Before they flew, Daedalus spoke to Icarus.",
			fr: "Avant qu'ils sautent de la tour, Dédale fit une mise en garde sérieuse à son fils.",
			audio: true,
		},
		{
			en: '"Do not fly too close to the sun," he said. "The heat will melt the wax."',
			simple: '"Do not go near the sun. The wax will melt."',
			fr: "« Ne vole pas trop près du soleil », dit-il. « La chaleur fera fondre la cire. »",
			audio: true,
		},
		{
			en: "They jumped from the tower and flew high into the clear blue sky.",
			simple: "They jumped and flew up into the sky.",
			fr: "Ils sautèrent de la tour et s'envolèrent dans le ciel bleu et clair.",
			audio: true,
		},
		{
			en: "Icarus felt the wind on his face and was filled with joy.",
			simple: "Icarus loved flying. He was very happy.",
			fr: "Icare sentit le vent sur son visage et fut envahi de joie.",
			audio: true,
		},
		{
			en: "He forgot his father's warning and flew higher and higher toward the sun.",
			simple: "Icarus forgot the warning. He flew up toward the sun.",
			fr: "Il oublia l'avertissement de son père et vola de plus en plus haut vers le soleil.",
			audio: true,
		},
		{
			en: "The sun melted the wax, and the feathers fell away from his wings.",
			simple: "The sun melted the wax. The feathers fell off.",
			fr: "Le soleil fit fondre la cire, et les plumes se détachèrent de ses ailes.",
			audio: true,
		},
		{
			en: "Icarus fell into the sea, and Daedalus landed safely on the shore, weeping for his son.",
			simple: "Icarus fell into the sea. Daedalus was very sad.",
			fr: "Icare tomba dans la mer, et Dédale atterrit sain et sauf sur le rivage, pleurant son fils.",
			audio: true,
		},
	],
	quiz: [
		{
			question: "Pourquoi Dédale et Icare étaient-ils prisonniers ?",
			options: [
				"Le roi les avait enfermés dans une tour",
				"Ils avaient volé de l'or au roi",
				"Ils s'étaient perdus sur l'île",
				"Les dieux les avaient punis",
			],
			correct: 0,
		},
		{
			question: "De quoi Dédale fabriqua-t-il les ailes ?",
			options: [
				"De tissu et de colle",
				"De plumes et de cire",
				"De bois et de métal",
				"De papier et de peinture",
			],
			correct: 1,
		},
		{
			question: "Quelle était la mise en garde de Dédale ?",
			options: [
				"Ne pas voler trop vite",
				"Ne pas voler trop près de la mer",
				"Ne pas voler trop près du soleil",
				"Ne pas quitter l'île de Crète",
			],
			correct: 2,
		},
		{
			question: "Qu'arriva-t-il finalement à Icare ?",
			options: [
				"Il arriva en Grèce sain et sauf",
				"Il fut rattrapé par le roi",
				"La cire fondit et il tomba dans la mer",
				"Il perdit une aile dans le vent",
			],
			correct: 2,
		},
	],
};

export default story;
