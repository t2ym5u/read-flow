import type { Story } from "$lib/types";

const story: Story = {
	id: 2,
	title: "The Magic Bookshop",
	level: "Intermédiaire",
	levelColor: "#ffd93d",
	emoji: "📚",
	gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
	desc: "Une librairie enchantée qui apparaît la nuit",
	duration: "8 min",
	words: 200,
	category: "fantasy",
	tags: ["past-tense", "past-continuous", "descriptive", "A2-B1"],
	keyVocabulary: [
		{
			word: "bookshop",
			translation: "librairie",
			example: "The bookshop appeared only at midnight.",
		},
		{ word: "rumors", translation: "rumeurs", example: "Tom had heard rumors about it." },
		{ word: "curiosity", translation: "curiosité", example: "Curiosity got the better of him." },
		{
			word: "floated",
			translation: "flottaient",
			example: "Thousands of books floated in the air.",
		},
		{ word: "destiny", translation: "destin", example: "Each book contains a different destiny." },
		{
			word: "glowed",
			translation: "brillaient",
			example: "The pages glowed softly as he opened the book.",
		},
		{ word: "faded", translation: "s'estompa", example: "The world around him faded away." },
	],
	grammarTips: [
		{
			title: "Past Perfect",
			explanation:
				"Le past perfect (had + participe passé) décrit une action antérieure à une autre dans le passé.",
			examples: ["Tom had heard rumors about it.", "The bookshop had disappeared."],
		},
		{
			title: "Adverbes de manière",
			explanation: "Les adverbes en '-ly' décrivent comment une action se déroule.",
			examples: ["He greeted him warmly.", "The pages glowed softly.", "The door opened gently."],
		},
	],
	summary:
		"Tom découvre une librairie magique qui n'apparaît qu'à minuit. À l'intérieur, des milliers de livres flottent dans les airs. Un vieil homme lui explique que chaque livre contient un destin différent. Tom en choisit un, et quand il relève les yeux, la librairie a disparu.",
	sentences: [
		{
			en: "The bookshop appeared only at midnight.",
			simple: "The shop appeared at midnight.",
			fr: "La librairie n'apparaissait qu'à minuit.",
			audio: true,
		},
		{
			en: "Tom had heard rumors about it from his classmates.",
			simple: "Tom heard about it from friends.",
			fr: "Tom avait entendu des rumeurs à son sujet de ses camarades.",
			audio: true,
		},
		{
			en: "They said the books inside could change your life.",
			simple: "The books were special.",
			fr: "Ils disaient que les livres à l'intérieur pouvaient changer votre vie.",
			audio: true,
		},
		{
			en: "One night, curiosity got the better of him.",
			simple: "One night, he decided to go.",
			fr: "Une nuit, la curiosité l'emporta sur lui.",
			audio: true,
		},
		{
			en: "He walked down the empty street towards the old address.",
			simple: "He walked to the address.",
			fr: "Il marcha dans la rue vide vers la vieille adresse.",
			audio: true,
		},
		{
			en: "As the clock struck twelve, a warm light appeared.",
			simple: "At midnight, a light appeared.",
			fr: "Lorsque l'horloge sonna minuit, une lumière chaleureuse apparut.",
			audio: true,
		},
		{
			en: "The door opened by itself with a gentle creak.",
			simple: "The door opened.",
			fr: "La porte s'ouvrit d'elle-même avec un léger grincement.",
			audio: true,
		},
		{
			en: "Inside, thousands of books floated in the air.",
			simple: "Books floated inside.",
			fr: "À l'intérieur, des milliers de livres flottaient dans les airs.",
			audio: true,
		},
		{
			en: "An elderly man with kind eyes greeted him warmly.",
			simple: "An old man greeted him.",
			fr: "Un homme âgé aux yeux bienveillants l'accueillit chaleureusement.",
			audio: true,
		},
		{
			en: "Each book here contains a different destiny, he whispered.",
			simple: "Each book is special, he said.",
			fr: "Chaque livre ici contient un destin différent, chuchota-t-il.",
			audio: true,
		},
		{
			en: "Tom reached out and a small blue book floated into his hands.",
			simple: "Tom took a small blue book.",
			fr: "Tom tendit la main et un petit livre bleu flotta jusqu'à lui.",
			audio: true,
		},
		{
			en: "The pages glowed softly as he opened it.",
			simple: "The pages had a soft light.",
			fr: "Les pages brillaient doucement quand il l'ouvrit.",
			audio: true,
		},
		{
			en: "He began to read and the world around him faded away.",
			simple: "He started reading and everything changed.",
			fr: "Il commença à lire et le monde autour de lui s'estompa.",
			audio: true,
		},
		{
			en: "When he looked up, the bookshop had disappeared, but the book remained in his hands.",
			simple: "The shop was gone, but he kept the book.",
			fr: "Quand il releva les yeux, la librairie avait disparu, mais le livre restait dans ses mains.",
			audio: true,
		},
	],
	quiz: [
		{
			question: "À quelle heure la librairie apparaît-elle ?",
			options: ["À minuit", "À midi", "Le matin", "L'après-midi"],
			correct: 0,
		},
		{
			question: "Que font les livres dans la librairie ?",
			options: ["Ils tombent", "Ils brûlent", "Ils flottent", "Ils parlent"],
			correct: 2,
		},
		{
			question: "De quelle couleur est le livre que Tom choisit ?",
			options: ["Rouge", "Vert", "Bleu", "Doré"],
			correct: 2,
		},
		{
			question: "Que se passe-t-il quand Tom relève les yeux ?",
			options: [
				"Le vieil homme disparaît",
				"La librairie a disparu mais il garde le livre",
				"D'autres livres apparaissent",
				"Il se réveille chez lui",
			],
			correct: 1,
		},
	],
};

export default story;
