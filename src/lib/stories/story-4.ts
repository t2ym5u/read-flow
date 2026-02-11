import type { Story } from "$lib/types";

const story: Story = {
	id: 4,
	title: "A Day at the Market",
	level: "Débutant",
	levelColor: "#6bcf7f",
	emoji: "🛒",
	gradient: "linear-gradient(135deg, #a8e063 0%, #56ab2f 100%)",
	desc: "Une journée de courses au marché local",
	duration: "5 min",
	words: 150,
	category: "daily-life",
	tags: ["present-tense", "food", "numbers", "A1"],
	keyVocabulary: [
		{ word: "market", translation: "marché", example: "She goes to the market every Saturday." },
		{ word: "fresh", translation: "frais", example: "The vegetables are very fresh today." },
		{ word: "basket", translation: "panier", example: "She carries a large basket." },
		{ word: "price", translation: "prix", example: "What is the price of these apples?" },
		{ word: "stall", translation: "étal", example: "The cheese stall is near the entrance." },
		{ word: "ripe", translation: "mûr", example: "These strawberries are perfectly ripe." },
	],
	grammarTips: [
		{
			title: "Present Simple",
			explanation:
				"On utilise le present simple pour décrire des habitudes et des actions régulières.",
			examples: ["She buys fresh bread.", "The market opens at eight.", "He sells vegetables."],
		},
		{
			title: "Articles : a, an, the",
			explanation: "'A/an' pour quelque chose de général, 'the' pour quelque chose de spécifique.",
			examples: ["She buys a loaf of bread.", "The apples are red.", "An orange costs one pound."],
		},
	],
	summary:
		"Sophie fait ses courses au marché. Elle achète des fruits, des légumes et du pain frais. Elle découvre un nouveau fromage et rentre chez elle satisfaite.",
	sentences: [
		{
			en: "Every Saturday morning, Sophie walks to the local market.",
			simple: "Sophie goes to the market.",
			fr: "Chaque samedi matin, Sophie se rend au marché local.",
			audio: true,
		},
		{
			en: "She carries a large basket and a shopping list.",
			simple: "She has a big basket.",
			fr: "Elle porte un grand panier et une liste de courses.",
			audio: true,
		},
		{
			en: "The market is full of colorful stalls and friendly sellers.",
			simple: "The market has many stalls.",
			fr: "Le marché est plein d'étals colorés et de vendeurs sympathiques.",
			audio: true,
		},
		{
			en: "First, she stops at the fruit stall to buy apples and oranges.",
			simple: "She buys apples and oranges.",
			fr: "D'abord, elle s'arrête à l'étal de fruits pour acheter des pommes et des oranges.",
			audio: true,
		},
		{
			en: "The seller tells her the strawberries are very fresh today.",
			simple: "The strawberries are fresh.",
			fr: "Le vendeur lui dit que les fraises sont très fraîches aujourd'hui.",
			audio: true,
		},
		{
			en: "She adds a box of ripe strawberries to her basket.",
			simple: "She takes some strawberries.",
			fr: "Elle ajoute une barquette de fraises mûres à son panier.",
			audio: true,
		},
		{
			en: "Next, she walks to the vegetable stall for tomatoes and lettuce.",
			simple: "She buys tomatoes and lettuce.",
			fr: "Ensuite, elle se dirige vers l'étal de légumes pour des tomates et de la salade.",
			audio: true,
		},
		{
			en: "The bread stall smells wonderful, so she buys a warm loaf.",
			simple: "She buys warm bread.",
			fr: "L'étal de pain sent merveilleusement bon, alors elle achète un pain chaud.",
			audio: true,
		},
		{
			en: "She discovers a new cheese stall and tastes a small piece.",
			simple: "She tries some cheese.",
			fr: "Elle découvre un nouvel étal de fromage et goûte un petit morceau.",
			audio: true,
		},
		{
			en: "The cheese is delicious, so she buys some for her family.",
			simple: "She buys cheese for her family.",
			fr: "Le fromage est délicieux, alors elle en achète pour sa famille.",
			audio: true,
		},
		{
			en: "Sophie walks home with a full basket, happy with her morning.",
			simple: "Sophie goes home happy.",
			fr: "Sophie rentre chez elle avec un panier plein, heureuse de sa matinée.",
			audio: true,
		},
	],
	quiz: [
		{
			question: "Quand Sophie va-t-elle au marché ?",
			options: ["Le lundi matin", "Le samedi matin", "Le dimanche après-midi", "Le vendredi soir"],
			correct: 1,
		},
		{
			question: "Qu'est-ce qui est très frais aujourd'hui ?",
			options: ["Les pommes", "Les oranges", "Les fraises", "Les tomates"],
			correct: 2,
		},
		{
			question: "Que découvre Sophie au marché ?",
			options: ["Un nouvel ami", "Un étal de fromage", "Un restaurant", "Un livre"],
			correct: 1,
		},
		{
			question: "Comment se sent Sophie en rentrant ?",
			options: ["Fatiguée", "Triste", "En colère", "Heureuse"],
			correct: 3,
		},
	],
};

export default story;
