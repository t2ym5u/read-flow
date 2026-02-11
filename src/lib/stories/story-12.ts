import type { Story } from '$lib/types';

const story: Story = {
    id: 12,
    title: "The Coffee Shop Mystery",
    level: "Intermédiaire",
    levelColor: "#ffd93d",
    emoji: "☕",
    gradient: "linear-gradient(135deg, #834d18 0%, #e0a96d 100%)",
    desc: "Un mystère se cache derrière un café de quartier",
    duration: "10 min",
    words: 240,
    category: "mystery",
    tags: ["past-tense", "conditionals", "mystery", "A2-B1"],
    keyVocabulary: [
      { word: "suspicious", translation: "suspect", example: "The man's behaviour was suspicious." },
      { word: "clue", translation: "indice", example: "She found an important clue." },
      { word: "owner", translation: "propriétaire", example: "The café owner was an old woman." },
      { word: "regular", translation: "habitué", example: "He was a regular customer." },
      { word: "envelope", translation: "enveloppe", example: "A thick envelope was under the table." },
      { word: "disappear", translation: "disparaître", example: "The stranger disappeared into the crowd." },
      { word: "investigate", translation: "enquêter", example: "She decided to investigate the mystery." }
    ],
    grammarTips: [
      {
        title: "First Conditional",
        explanation: "Le first conditional (if + present, will + verbe) exprime une situation probable dans le futur.",
        examples: ["If I find the envelope, I will call the police.", "If she comes back, I will ask her."]
      },
      {
        title: "Verbes de perception",
        explanation: "Les verbes 'see', 'hear', 'notice', 'watch' sont suivis d'un complément + infinitif sans 'to' ou participe présent.",
        examples: ["She saw him leave.", "I heard someone whispering.", "She noticed a man sitting alone."]
      },
      {
        title: "Connecteurs logiques",
        explanation: "Les connecteurs organisent les idées dans un récit : d'abord, ensuite, cependant...",
        examples: ["First, she ordered a coffee.", "Then, she noticed the envelope.", "However, the man had already left."]
      }
    ],
    summary: "Nina, une étudiante, passe tous les matins au même café. Un jour, elle remarque un homme mystérieux qui laisse une enveloppe épaisse sous sa table avant de partir. Intriguée, elle enquête et découvre que l'enveloppe contient des lettres d'amour perdues destinées à la propriétaire du café.",
    sentences: [
      {
        en: "Nina went to the same coffee shop every morning before university.",
        simple: "Nina went to the same café every morning.",
        fr: "Nina allait au même café chaque matin avant l'université.",
        audio: true
      },
      {
        en: "She always ordered a cappuccino and sat near the window to study.",
        simple: "She always had a cappuccino by the window.",
        fr: "Elle commandait toujours un cappuccino et s'asseyait près de la fenêtre pour étudier.",
        audio: true
      },
      {
        en: "The café was small and warm, and the owner, Mrs Chen, knew everyone by name.",
        simple: "The café was small. The owner knew everyone.",
        fr: "Le café était petit et chaleureux, et la propriétaire, Mme Chen, connaissait tout le monde par son nom.",
        audio: true
      },
      {
        en: "One Tuesday morning, Nina noticed a man she had never seen before.",
        simple: "One morning, Nina saw a new man.",
        fr: "Un mardi matin, Nina remarqua un homme qu'elle n'avait jamais vu.",
        audio: true
      },
      {
        en: "He wore a long grey coat and sat in the darkest corner of the café.",
        simple: "He wore a grey coat and sat in a dark corner.",
        fr: "Il portait un long manteau gris et s'assit dans le coin le plus sombre du café.",
        audio: true
      },
      {
        en: "He ordered nothing and kept looking at his watch nervously.",
        simple: "He did not order and looked at his watch.",
        fr: "Il ne commanda rien et ne cessait de regarder sa montre nerveusement.",
        audio: true
      },
      {
        en: "After exactly twenty minutes, he stood up and walked towards the door.",
        simple: "After twenty minutes, he left.",
        fr: "Après exactement vingt minutes, il se leva et marcha vers la porte.",
        audio: true
      },
      {
        en: "Nina saw him slide a thick brown envelope under his table before leaving.",
        simple: "She saw him leave an envelope under the table.",
        fr: "Nina le vit glisser une épaisse enveloppe marron sous sa table avant de partir.",
        audio: true
      },
      {
        en: "Her curiosity was stronger than her caution — she went to look.",
        simple: "She was too curious — she went to look.",
        fr: "Sa curiosité était plus forte que sa prudence — elle alla regarder.",
        audio: true
      },
      {
        en: "The envelope was sealed, and on the front was written: 'For Mei Chen — the letters I should have sent.'",
        simple: "The envelope said: 'For Mei Chen.'",
        fr: "L'enveloppe était scellée, et sur le devant était écrit : « Pour Mei Chen — les lettres que j'aurais dû envoyer. »",
        audio: true
      },
      {
        en: "Nina brought the envelope to Mrs Chen, whose eyes filled with tears.",
        simple: "Nina gave the envelope to Mrs Chen, who cried.",
        fr: "Nina apporta l'enveloppe à Mme Chen, dont les yeux se remplirent de larmes.",
        audio: true
      },
      {
        en: "'These are from my husband,' she whispered. 'He passed away last year.'",
        simple: "'From my husband,' she said. 'He died last year.'",
        fr: "« Ce sont celles de mon mari, » chuchota-t-elle. « Il est décédé l'année dernière. »",
        audio: true
      },
      {
        en: "The letters had been written over thirty years but never posted.",
        simple: "He wrote the letters for thirty years but never sent them.",
        fr: "Les lettres avaient été écrites sur trente ans mais jamais envoyées.",
        audio: true
      },
      {
        en: "The man in the grey coat was their son, who had found them in his father's desk.",
        simple: "The man was their son. He found the letters.",
        fr: "L'homme au manteau gris était leur fils, qui les avait trouvées dans le bureau de son père.",
        audio: true
      },
      {
        en: "Mrs Chen smiled through her tears and held the letters close to her heart.",
        simple: "Mrs Chen smiled and held the letters.",
        fr: "Mme Chen sourit à travers ses larmes et serra les lettres contre son cœur.",
        audio: true
      },
      {
        en: "Nina realised that sometimes the most beautiful mysteries have the simplest answers.",
        simple: "Nina learned that simple answers can be beautiful.",
        fr: "Nina réalisa que parfois les plus beaux mystères ont les réponses les plus simples.",
        audio: true
      }
    ],
    quiz: [
      {
        question: "Que commande Nina chaque matin ?",
        options: ["Un thé", "Un cappuccino", "Un jus d'orange", "Un chocolat chaud"],
        correct: 1
      },
      {
        question: "Que laisse l'homme mystérieux sous la table ?",
        options: ["Un livre", "De l'argent", "Une enveloppe", "Un téléphone"],
        correct: 2
      },
      {
        question: "Que contient l'enveloppe ?",
        options: ["De l'argent", "Des photos", "Des lettres d'amour", "Une carte"],
        correct: 2
      },
      {
        question: "Qui est l'homme au manteau gris ?",
        options: ["Un détective", "Un ami de Nina", "Le fils de Mme Chen", "Un ancien employé"],
        correct: 2
      },
      {
        question: "Pourquoi les lettres n'avaient-elles jamais été envoyées ?",
        options: [
          "Elles étaient perdues",
          "Le mari ne les a jamais postées",
          "La poste les a refusées",
          "Elles étaient en mauvais état"
        ],
        correct: 1
      }
    ]
  };

export default story;
