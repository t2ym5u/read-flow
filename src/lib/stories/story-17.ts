import type { Story } from "$lib/types";

const story: Story = {
	id: 17,
	title: "Pandora's Box",
	level: "Débutant",
	levelColor: "#6bcf7f",
	emoji: "📦",
	gradient: "linear-gradient(135deg, #6a3093 0%, #a044ff 100%)",
	desc: "La femme qui libéra tous les maux du monde",
	duration: "5 min",
	words: 155,
	category: "mythology",
	tags: ["past-simple", "because", "greek-myth", "A2"],
	keyVocabulary: [
		{ word: "curious", translation: "curieux/curieuse", example: "Pandora was curious about everything." },
		{ word: "gift", translation: "cadeau", example: "Zeus gave her a beautiful golden box as a gift." },
		{ word: "forbidden", translation: "interdit", example: "The box was forbidden to open." },
		{ word: "evil", translation: "mal / fléau", example: "All the evils of the world flew out." },
		{ word: "sickness", translation: "maladie", example: "Sickness came out of the box." },
		{ word: "hope", translation: "espoir", example: "Hope stayed in the world to help people." },
	],
	grammarTips: [
		{
			title: "Past Simple — verbes irréguliers",
			explanation: "Beaucoup de verbes courants ont des formes irrégulières au past simple : give → gave, fly → flew, become → became, keep → kept.",
			examples: [
				"Zeus gave her a beautiful box.",
				"All the evils flew out of the box.",
				"Her curiosity became too strong.",
			],
		},
		{
			title: "But + contrast",
			explanation: "'But' introduit une idée contraire à ce qui précède. C'est un connecteur de contraste très courant.",
			examples: [
				"She was warned never to open it, but her curiosity was too strong.",
				"She closed the box quickly, but it was too late.",
				"All evils escaped — but one thing remained inside.",
			],
		},
	],
	summary:
		"Les dieux créent Pandore, la première femme, et lui offrent une boîte en lui interdisant de l'ouvrir. Mais sa curiosité est trop forte. En l'ouvrant, elle libère tous les maux du monde — maladies, tristesse, guerres — sauf l'espoir, qui reste au fond.",
	sentences: [
		{
			en: "Long ago, the gods created the first woman on Earth and called her Pandora.",
			simple: "The gods made the first woman. Her name was Pandora.",
			fr: "Il y a très longtemps, les dieux créèrent la première femme sur Terre et l'appelèrent Pandore.",
			audio: true,
		},
		{
			en: "She was beautiful, kind, and curious about everything around her.",
			simple: "Pandora was beautiful and curious.",
			fr: "Elle était belle, gentille et curieuse de tout ce qui l'entourait.",
			audio: true,
		},
		{
			en: "The god Zeus gave her a beautiful golden box as a wedding gift.",
			simple: "Zeus gave Pandora a golden box.",
			fr: "Le dieu Zeus lui offrit une magnifique boîte dorée comme cadeau de mariage.",
			audio: true,
		},
		{
			en: '"You must never open this box," Zeus told her. "It contains something very dangerous."',
			simple: '"Never open this box," Zeus said. "It is dangerous."',
			fr: "« Tu ne dois jamais ouvrir cette boîte », lui dit Zeus. « Elle contient quelque chose de très dangereux. »",
			audio: true,
		},
		{
			en: "Pandora promised to obey, and she kept the box safely in her home.",
			simple: "Pandora said yes. She kept the box at home.",
			fr: "Pandore promit d'obéir et garda la boîte precieusement chez elle.",
			audio: true,
		},
		{
			en: "But every day, she looked at the box and wondered what was inside.",
			simple: "Every day, she looked at the box. She wanted to know what was inside.",
			fr: "Mais chaque jour, elle regardait la boîte et se demandait ce qu'il y avait à l'intérieur.",
			audio: true,
		},
		{
			en: "The box was beautiful, and it seemed to whisper to her: 'Open me. Open me.'",
			simple: "The box was beautiful. It called to her.",
			fr: "La boîte était belle, et elle semblait lui chuchoter : « Ouvre-moi. Ouvre-moi. »",
			audio: true,
		},
		{
			en: "One day, her curiosity became too strong to resist.",
			simple: "One day, she could not wait any more.",
			fr: "Un jour, sa curiosité devint trop forte pour résister.",
			audio: true,
		},
		{
			en: "She opened the box just a little to peek inside.",
			simple: "She opened the box a little to look.",
			fr: "Elle ouvrit la boîte juste un peu pour jeter un coup d'œil.",
			audio: true,
		},
		{
			en: "Suddenly, all the evils of the world flew out — sickness, sadness, anger, and war.",
			simple: "All the bad things flew out: sickness, sadness, and war.",
			fr: "Soudain, tous les maux du monde s'envolèrent — la maladie, la tristesse, la colère et la guerre.",
			audio: true,
		},
		{
			en: "Pandora was horrified and slammed the box shut, but it was too late.",
			simple: "Pandora was scared. She closed the box fast, but it was too late.",
			fr: "Pandore fut horrifiée et referma la boîte d'un coup, mais il était trop tard.",
			audio: true,
		},
		{
			en: "One small thing was still left inside the box — Hope.",
			simple: "One thing was still in the box — Hope.",
			fr: "Une petite chose restait encore dans la boîte — l'Espoir.",
			audio: true,
		},
		{
			en: "And since that day, Hope has stayed in the world to help people face all their troubles.",
			simple: "Hope stayed in the world to help people.",
			fr: "Et depuis ce jour, l'Espoir est resté dans le monde pour aider les gens à faire face à leurs épreuves.",
			audio: true,
		},
	],
	quiz: [
		{
			question: "Qui créa Pandore ?",
			options: ["Les hommes", "Les dieux, menés par Zeus", "Hermès seul", "Le roi de Crète"],
			correct: 1,
		},
		{
			question: "Que contenait la boîte ?",
			options: [
				"De l'or et des bijoux",
				"Les secrets des dieux",
				"Tous les maux du monde",
				"Des pouvoirs magiques",
			],
			correct: 2,
		},
		{
			question: "Pourquoi Pandore ouvrit-elle la boîte ?",
			options: [
				"Zeus lui demanda de le faire",
				"Elle cherchait de l'or",
				"Sa curiosité était trop forte",
				"Elle voulait aider les hommes",
			],
			correct: 2,
		},
		{
			question: "Qu'est-ce qui resta dans la boîte après que tout s'en fut échappé ?",
			options: ["La peur", "L'amour", "La sagesse", "L'espoir"],
			correct: 3,
		},
	],
};

export default story;
