import type { Story } from "$lib/types";

const story: Story = {
	id: 20,
	title: "Orpheus and Eurydice",
	level: "Avancé",
	levelColor: "#ff6b6b",
	emoji: "🎵",
	gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
	desc: "L'amour plus fort que la mort, presque",
	duration: "12 min",
	words: 345,
	category: "mythology",
	tags: ["past-perfect", "conditionals", "complex-sentences", "B1-B2"],
	keyVocabulary: [
		{ word: "lyre", translation: "lyre", example: "Orpheus played the lyre more beautifully than any man alive." },
		{ word: "charmed", translation: "charmé / envoûté", example: "His music charmed wild animals and moving stones." },
		{ word: "underworld", translation: "monde souterrain / Enfers", example: "He descended into the dark Underworld to find Eurydice." },
		{ word: "mourned", translation: "pleura / fut en deuil de", example: "Orpheus mourned so deeply that nature itself wept." },
		{ word: "condition", translation: "condition", example: "Hades agreed, but on one condition." },
		{ word: "glance", translation: "coup d'œil", example: "One single glance back was enough to lose her forever." },
	],
	grammarTips: [
		{
			title: "Past Perfect (had + participe passé)",
			explanation: "Le past perfect décrit une action qui s'est produite avant une autre action passée. Il établit un ordre chronologique entre deux événements.",
			examples: [
				"Before he descended, Eurydice had already died from the snake bite.",
				"He had never felt such pain before he lost her.",
				"Hades had never been moved by music until that day.",
			],
		},
		{
			title: "Conditionnel passé — regret et irréel",
			explanation: "Le conditionnel passé (would have + participe) exprime ce qui aurait pu se passer si les circonstances avaient été différentes.",
			examples: [
				"If he had not looked back, Eurydice would have lived.",
				"Had he trusted her presence, they would have walked into the sunlight together.",
			],
		},
	],
	summary:
		"Orphée, le plus grand musicien de Grèce, perd sa femme Eurydice mordue par un serpent. Fou de douleur, il descend aux Enfers et charme Hadès et Perséphone avec sa lyre. Ils acceptent de laisser Eurydice repartir, à une condition : Orphée ne doit pas se retourner avant d'avoir quitté les Enfers. À la dernière seconde, il cède au doute et la perd pour toujours.",
	sentences: [
		{
			en: "Orpheus was the greatest musician the world had ever known, the son of the god Apollo himself.",
			simple: "Orpheus was the best musician in the world. His father was the god Apollo.",
			fr: "Orphée était le plus grand musicien que le monde eût jamais connu, fils du dieu Apollon lui-même.",
			audio: true,
		},
		{
			en: "When he played his golden lyre, rivers stopped flowing to listen and wild beasts lay down in peace.",
			simple: "When he played his lyre, rivers stopped and animals listened.",
			fr: "Quand il jouait de sa lyre dorée, les rivières s'arrêtaient de couler pour l'écouter et les bêtes sauvages se couchaient en paix.",
			audio: true,
		},
		{
			en: "He fell deeply in love with a young woman named Eurydice, and they were married in a joyful ceremony.",
			simple: "He fell in love with Eurydice and they got married.",
			fr: "Il tomba profondément amoureux d'une jeune femme nommée Eurydice, et ils se marièrent lors d'une cérémonie joyeuse.",
			audio: true,
		},
		{
			en: "Their happiness, however, was cruelly short-lived.",
			simple: "But their happiness did not last long.",
			fr: "Leur bonheur fut cependant cruellement de courte durée.",
			audio: true,
		},
		{
			en: "On the very day of their wedding, Eurydice stepped on a hidden snake in the grass and died from its bite.",
			simple: "On their wedding day, Eurydice stepped on a snake. She died.",
			fr: "Le jour même de leur mariage, Eurydice marcha sur un serpent caché dans l'herbe et mourut de sa morsure.",
			audio: true,
		},
		{
			en: "Orpheus mourned so deeply that the trees bent their branches in sorrow and the rivers ran with tears.",
			simple: "Orpheus was so sad that even nature cried with him.",
			fr: "Orphée pleura si profondément que les arbres inclinèrent leurs branches de chagrin et que les rivières coulèrent de larmes.",
			audio: true,
		},
		{
			en: "Unable to accept her death, he made a decision that no mortal had ever dared to make.",
			simple: "He decided to do something no human had done before.",
			fr: "Incapable d'accepter sa mort, il prit une décision qu'aucun mortel n'avait jamais osé prendre.",
			audio: true,
		},
		{
			en: "He would descend into the Underworld — the kingdom of the dead — and bring Eurydice back.",
			simple: "He decided to go to the land of the dead and bring Eurydice home.",
			fr: "Il descendrait dans le monde souterrain — le royaume des morts — et ramènerait Eurydice.",
			audio: true,
		},
		{
			en: "At the gates of the Underworld, the monstrous three-headed dog Cerberus blocked his path.",
			simple: "At the entrance, a huge three-headed dog guarded the way.",
			fr: "Aux portes des Enfers, le monstrueux chien à trois têtes Cerbère lui barrait le chemin.",
			audio: true,
		},
		{
			en: "Orpheus played his lyre, and even Cerberus closed his six eyes and fell into a gentle sleep.",
			simple: "Orpheus played his lyre. Even Cerberus fell asleep.",
			fr: "Orphée joua de sa lyre, et même Cerbère ferma ses six yeux et s'endormit doucement.",
			audio: true,
		},
		{
			en: "He walked deeper into the realm of shadows until he stood before Hades and Persephone, king and queen of the dead.",
			simple: "He walked until he found Hades and Persephone, the king and queen of the dead.",
			fr: "Il marcha plus profondément dans le royaume des ombres jusqu'à se tenir devant Hadès et Perséphone, roi et reine des morts.",
			audio: true,
		},
		{
			en: "He played a song so heartbreaking that tears ran down the cheeks of Persephone, and even the stone heart of Hades was moved.",
			simple: "He played such a sad song that even Hades began to cry.",
			fr: "Il joua une chanson si déchirante que des larmes coulèrent sur les joues de Perséphone, et que même le cœur de pierre d'Hadès fut touché.",
			audio: true,
		},
		{
			en: "Hades agreed to release Eurydice — but on one condition.",
			simple: "Hades said yes, but he had one rule.",
			fr: "Hadès accepta de libérer Eurydice — mais à une condition.",
			audio: true,
		},
		{
			en: '"Eurydice will follow you back to the world of the living," Hades said, "but you must not look back at her until you have both crossed into the sunlight."',
			simple: '"Eurydice will follow you. But do not look back until you are both in the light."',
			fr: "« Eurydice te suivra jusqu'au monde des vivants, dit Hadès, mais tu ne dois pas te retourner vers elle avant que vous soyez tous deux dans la lumière du soleil. »",
			audio: true,
		},
		{
			en: "Orpheus began the long climb back toward the surface, listening carefully for the sound of Eurydice's footsteps behind him.",
			simple: "Orpheus walked up. He listened for Eurydice's steps behind him.",
			fr: "Orphée commença la longue montée vers la surface, tendant l'oreille pour entendre les pas d'Eurydice derrière lui.",
			audio: true,
		},
		{
			en: "But the silence of the Underworld was overwhelming, and doubt began to creep into his heart.",
			simple: "But it was very quiet. He began to worry.",
			fr: "Mais le silence des Enfers était écrasant, et le doute commença à s'insinuer dans son cœur.",
			audio: true,
		},
		{
			en: "What if she had not followed? What if the gods had deceived him?",
			simple: "Was she really there? Was this a trick?",
			fr: "Et si elle ne l'avait pas suivi ? Et si les dieux l'avaient trompé ?",
			audio: true,
		},
		{
			en: "At last, when the bright entrance to the upper world was almost in sight, he could bear the uncertainty no longer.",
			simple: "When he was almost at the exit, he could not wait anymore.",
			fr: "Enfin, quand l'entrée lumineuse du monde supérieur était presque en vue, il ne put plus supporter l'incertitude.",
			audio: true,
		},
		{
			en: "He turned his head — and saw Eurydice, just one step behind him, her arms reaching forward.",
			simple: "He looked back. Eurydice was right behind him, her arms out.",
			fr: "Il tourna la tête — et vit Eurydice, juste un pas derrière lui, les bras tendus vers l'avant.",
			audio: true,
		},
		{
			en: "In that single glance, she was pulled back into the darkness, whispering his name as she faded away forever.",
			simple: "In that one look, she was pulled back into the dark. She called his name.",
			fr: "En ce seul regard, elle fut engloutie dans les ténèbres, murmurant son nom tandis qu'elle disparaissait pour toujours.",
			audio: true,
		},
		{
			en: "Orpheus had reached the sunlight — but he was utterly alone, and he never played his lyre again.",
			simple: "Orpheus made it out. But he was alone. He never played music again.",
			fr: "Orphée avait atteint la lumière du soleil — mais il était absolument seul, et il ne joua plus jamais de sa lyre.",
			audio: true,
		},
	],
	quiz: [
		{
			question: "Qu'arriva-t-il à Eurydice le jour de leur mariage ?",
			options: [
				"Elle fut enlevée par Hadès",
				"Elle tomba dans une rivière",
				"Elle mourut mordue par un serpent",
				"Elle disparut dans la forêt",
			],
			correct: 2,
		},
		{
			question: "Comment Orphée convainquit-il Hadès de libérer Eurydice ?",
			options: [
				"Il combattit Cerbère et gagna",
				"Il joua de sa lyre et émut même le roi des morts",
				"Il promit de rester aux Enfers à sa place",
				"Il vola les clés du royaume des morts",
			],
			correct: 1,
		},
		{
			question: "Quelle était la condition posée par Hadès ?",
			options: [
				"Ne pas parler à Eurydice pendant le trajet",
				"Porter Eurydice sans la poser à terre",
				"Ne pas se retourner avant d'être dans la lumière",
				"Traverser les Enfers en moins d'une heure",
			],
			correct: 2,
		},
		{
			question: "Pourquoi Orphée se retourna-t-il ?",
			options: [
				"Il voulait voir les Enfers une dernière fois",
				"Eurydice l'appela par son nom",
				"Il trébucha et se retourna par accident",
				"Le silence et le doute devinrent insupportables",
			],
			correct: 3,
		},
	],
};

export default story;
