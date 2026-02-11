import type { Story } from "$lib/types";

const story: Story = {
	id: 5,
	title: "The Perfect Recipe",
	level: "Débutant",
	levelColor: "#6bcf7f",
	emoji: "🍳",
	gradient: "linear-gradient(135deg, #f5af19 0%, #f12711 100%)",
	desc: "Apprendre à cuisiner un plat simple en anglais",
	duration: "6 min",
	words: 170,
	category: "food",
	tags: ["imperative", "cooking", "kitchen-vocabulary", "A1-A2"],
	keyVocabulary: [
		{ word: "recipe", translation: "recette", example: "This is my grandmother's recipe." },
		{ word: "flour", translation: "farine", example: "Add two cups of flour to the bowl." },
		{ word: "stir", translation: "remuer", example: "Stir the batter until it is smooth." },
		{ word: "pour", translation: "verser", example: "Pour the batter into the pan." },
		{
			word: "ingredients",
			translation: "ingrédients",
			example: "We need all the ingredients first.",
		},
		{ word: "delicious", translation: "délicieux", example: "The pancakes are delicious!" },
	],
	grammarTips: [
		{
			title: "L'impératif",
			explanation: "L'impératif donne des instructions. On utilise le verbe seul, sans sujet.",
			examples: ["Add the flour.", "Mix the eggs.", "Pour the batter into the pan."],
		},
		{
			title: "Mots de séquence",
			explanation: "Les mots comme 'first', 'then', 'next', 'finally' organisent les étapes.",
			examples: [
				"First, get the ingredients.",
				"Then, mix them together.",
				"Finally, cook the pancakes.",
			],
		},
	],
	summary:
		"Un père apprend à sa fille Lily à faire des pancakes. Ils suivent la recette ensemble, étape par étape, et partagent un délicieux petit-déjeuner en famille.",
	sentences: [
		{
			en: "Today, Dad is teaching Lily how to make pancakes.",
			simple: "Dad teaches Lily to cook.",
			fr: "Aujourd'hui, Papa apprend à Lily comment faire des pancakes.",
			audio: true,
		},
		{
			en: "First, they get all the ingredients from the kitchen.",
			simple: "They get the ingredients.",
			fr: "D'abord, ils rassemblent tous les ingrédients dans la cuisine.",
			audio: true,
		},
		{
			en: "They need flour, eggs, milk, sugar, and butter.",
			simple: "They need flour, eggs and milk.",
			fr: "Ils ont besoin de farine, d'œufs, de lait, de sucre et de beurre.",
			audio: true,
		},
		{
			en: "Dad says: Measure two cups of flour and put them in a big bowl.",
			simple: "Put flour in a bowl.",
			fr: "Papa dit : Mesure deux tasses de farine et mets-les dans un grand bol.",
			audio: true,
		},
		{
			en: "Lily cracks two eggs and adds them to the flour.",
			simple: "Lily adds two eggs.",
			fr: "Lily casse deux œufs et les ajoute à la farine.",
			audio: true,
		},
		{
			en: "Then, she pours a cup of milk into the bowl.",
			simple: "She adds milk.",
			fr: "Ensuite, elle verse une tasse de lait dans le bol.",
			audio: true,
		},
		{
			en: "Dad tells her to stir the batter until it is smooth.",
			simple: "She mixes everything.",
			fr: "Papa lui dit de remuer la pâte jusqu'à ce qu'elle soit lisse.",
			audio: true,
		},
		{
			en: "Next, Dad heats a pan on the stove with a little butter.",
			simple: "Dad heats a pan.",
			fr: "Ensuite, Papa chauffe une poêle sur la cuisinière avec un peu de beurre.",
			audio: true,
		},
		{
			en: "Lily carefully pours some batter into the hot pan.",
			simple: "Lily puts batter in the pan.",
			fr: "Lily verse délicatement de la pâte dans la poêle chaude.",
			audio: true,
		},
		{
			en: "When bubbles appear on top, it is time to flip the pancake.",
			simple: "She flips the pancake.",
			fr: "Quand des bulles apparaissent dessus, il est temps de retourner le pancake.",
			audio: true,
		},
		{
			en: "The pancake turns golden brown on both sides.",
			simple: "The pancake looks good.",
			fr: "Le pancake devient doré des deux côtés.",
			audio: true,
		},
		{
			en: "They make a big stack of pancakes for the whole family.",
			simple: "They make many pancakes.",
			fr: "Ils font une grande pile de pancakes pour toute la famille.",
			audio: true,
		},
	],
	quiz: [
		{
			question: "Que prépare Lily avec son père ?",
			options: ["Un gâteau", "Des pancakes", "Une soupe", "Des crêpes salées"],
			correct: 1,
		},
		{
			question: "Quels sont les ingrédients principaux ?",
			options: [
				"Farine, œufs, lait",
				"Riz, poulet, légumes",
				"Chocolat, crème, sucre",
				"Pain, beurre, confiture",
			],
			correct: 0,
		},
		{
			question: "Quand faut-il retourner le pancake ?",
			options: [
				"Après 10 minutes",
				"Quand des bulles apparaissent",
				"Quand il est noir",
				"Quand Papa le dit",
			],
			correct: 1,
		},
		{
			question: "De quelle couleur devient le pancake ?",
			options: ["Blanc", "Doré", "Rouge", "Marron foncé"],
			correct: 1,
		},
	],
};

export default story;
