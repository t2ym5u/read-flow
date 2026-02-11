import type { Story } from "$lib/types";

const story: Story = {
	id: 14,
	title: "The Music Festival",
	level: "Intermédiaire",
	levelColor: "#ffd93d",
	emoji: "🎵",
	gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
	desc: "Un festival de musique qui change une vie",
	duration: "10 min",
	words: 250,
	category: "culture",
	tags: ["past-tense", "music", "friendship", "A2-B1"],
	keyVocabulary: [
		{ word: "stage", translation: "scène", example: "The band played on the main stage." },
		{ word: "crowd", translation: "foule", example: "The crowd was singing together." },
		{ word: "perform", translation: "se produire", example: "She dreamed of performing on stage." },
		{ word: "lyrics", translation: "paroles", example: "She wrote the lyrics to a new song." },
		{ word: "courage", translation: "courage", example: "It took courage to go on stage." },
		{ word: "applause", translation: "applaudissements", example: "The applause was thunderous." },
		{ word: "dream", translation: "rêve", example: "Her dream was to become a singer." },
	],
	grammarTips: [
		{
			title: "Used to",
			explanation: "'Used to' + verbe décrit une habitude ou un état passé qui n'existe plus.",
			examples: [
				"She used to sing in her bedroom.",
				"He used to play guitar at school.",
				"They used to go to festivals every summer.",
			],
		},
		{
			title: "Discours indirect",
			explanation:
				"Pour rapporter les paroles de quelqu'un, on utilise le discours indirect avec un recul de temps.",
			examples: [
				"She said (that) she was nervous.",
				"He told her (that) she could do it.",
				"They said (that) it was amazing.",
			],
		},
	],
	summary:
		"Aisha, une lycéenne timide, adore chanter mais n'a jamais osé se produire en public. Son ami Théo l'inscrit à un concours au festival de musique local. Malgré sa peur, elle monte sur scène et chante sa propre chanson. La foule l'acclame et elle réalise qu'elle peut réaliser ses rêves.",
	sentences: [
		{
			en: "Aisha used to sing alone in her bedroom every evening after school.",
			simple: "Aisha always sang alone in her room.",
			fr: "Aisha avait l'habitude de chanter seule dans sa chambre chaque soir après l'école.",
			audio: true,
		},
		{
			en: "She had a beautiful voice, but she was too shy to sing in front of others.",
			simple: "She sang well, but she was very shy.",
			fr: "Elle avait une belle voix, mais elle était trop timide pour chanter devant les autres.",
			audio: true,
		},
		{
			en: "Her best friend Théo always told her she should perform on a real stage.",
			simple: "Her friend Théo said she should sing on stage.",
			fr: "Son meilleur ami Théo lui disait toujours qu'elle devrait se produire sur une vraie scène.",
			audio: true,
		},
		{
			en: "One day, the town announced a music festival with a talent contest for young artists.",
			simple: "The town planned a music festival with a contest.",
			fr: "Un jour, la ville annonça un festival de musique avec un concours de talents pour jeunes artistes.",
			audio: true,
		},
		{
			en: "Without telling Aisha, Théo signed her up for the contest.",
			simple: "Théo signed her up without asking.",
			fr: "Sans le dire à Aisha, Théo l'inscrivit au concours.",
			audio: true,
		},
		{
			en: "When she found out, she was terrified. 'I can't do this!' she said.",
			simple: "She was very scared. 'I can't!' she said.",
			fr: "Quand elle l'apprit, elle était terrifiée. « Je ne peux pas faire ça ! » dit-elle.",
			audio: true,
		},
		{
			en: "Théo looked at her and said, 'You have the most incredible voice I have ever heard.'",
			simple: "Théo said, 'You have an amazing voice.'",
			fr: "Théo la regarda et dit : « Tu as la voix la plus incroyable que j'aie jamais entendue. »",
			audio: true,
		},
		{
			en: "The night of the festival arrived. Hundreds of people filled the park.",
			simple: "The festival night came. Many people were there.",
			fr: "Le soir du festival arriva. Des centaines de personnes remplissaient le parc.",
			audio: true,
		},
		{
			en: "Aisha waited backstage, her hands shaking and her heart beating fast.",
			simple: "Aisha waited. She was very nervous.",
			fr: "Aisha attendait dans les coulisses, les mains tremblantes et le cœur battant vite.",
			audio: true,
		},
		{
			en: "When they called her name, she walked slowly towards the microphone.",
			simple: "They called her name. She walked to the microphone.",
			fr: "Quand ils appelèrent son nom, elle marcha lentement vers le microphone.",
			audio: true,
		},
		{
			en: "The crowd fell silent. She closed her eyes, took a deep breath, and began to sing.",
			simple: "Everyone was quiet. She closed her eyes and sang.",
			fr: "La foule se tut. Elle ferma les yeux, prit une grande inspiration, et commença à chanter.",
			audio: true,
		},
		{
			en: "Her voice filled the night air — clear, powerful and full of emotion.",
			simple: "Her voice was beautiful and strong.",
			fr: "Sa voix emplit l'air de la nuit — claire, puissante et pleine d'émotion.",
			audio: true,
		},
		{
			en: "She sang a song she had written herself about following your dreams.",
			simple: "She sang her own song about dreams.",
			fr: "Elle chanta une chanson qu'elle avait écrite elle-même sur le fait de suivre ses rêves.",
			audio: true,
		},
		{
			en: "When the last note faded, there was a moment of silence.",
			simple: "The song ended. It was quiet for a moment.",
			fr: "Quand la dernière note s'estompa, il y eut un moment de silence.",
			audio: true,
		},
		{
			en: "Then the entire crowd erupted in thunderous applause and cheering.",
			simple: "Then everyone clapped and cheered loudly.",
			fr: "Puis la foule entière explosa en applaudissements et acclamations tonitruants.",
			audio: true,
		},
		{
			en: "Aisha opened her eyes, and for the first time, she believed in herself.",
			simple: "Aisha opened her eyes and believed in herself.",
			fr: "Aisha ouvrit les yeux, et pour la première fois, elle crut en elle-même.",
			audio: true,
		},
	],
	quiz: [
		{
			question: "Pourquoi Aisha ne chantait-elle jamais en public ?",
			options: [
				"Elle n'aimait pas chanter",
				"Elle était trop timide",
				"Elle chantait mal",
				"Elle n'avait pas le temps",
			],
			correct: 1,
		},
		{
			question: "Qui inscrit Aisha au concours ?",
			options: ["Sa mère", "Son professeur", "Théo", "Elle-même"],
			correct: 2,
		},
		{
			question: "De quoi parle la chanson d'Aisha ?",
			options: ["L'amour", "Suivre ses rêves", "L'amitié", "La nature"],
			correct: 1,
		},
		{
			question: "Comment réagit la foule après la chanson ?",
			options: ["Elle reste silencieuse", "Elle applaudit fort", "Elle quitte le parc", "Elle rit"],
			correct: 1,
		},
		{
			question: "Que ressent Aisha à la fin ?",
			options: ["De la colère", "De la tristesse", "De la confiance en elle", "De la fatigue"],
			correct: 2,
		},
	],
};

export default story;
