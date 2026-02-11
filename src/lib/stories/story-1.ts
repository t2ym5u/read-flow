import type { Story } from '$lib/types';

const story: Story = {
    id: 1,
    title: "The Lost Key",
    level: "Débutant",
    levelColor: "#6bcf7f",
    emoji: "🔑",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    desc: "Une histoire mystérieuse sur une clé perdue",
    duration: "5 min",
    words: 120,
    category: "adventure",
    tags: ["past-tense", "home", "mystery", "A1"],
    keyVocabulary: [
      { word: "key", translation: "clé", example: "She found the golden key near the fountain." },
      { word: "garden", translation: "jardin", example: "Emma walked through the old garden." },
      { word: "fountain", translation: "fontaine", example: "The key was lying near the fountain." },
      { word: "attic", translation: "grenier", example: "The door in the attic was locked." },
      { word: "mysterious", translation: "mystérieux", example: "There was a mysterious door upstairs." },
      { word: "trembling", translation: "tremblant", example: "She picked it up with trembling hands." }
    ],
    grammarTips: [
      {
        title: "Past Simple",
        explanation: "Le past simple décrit des actions terminées dans le passé. On ajoute souvent '-ed' aux verbes réguliers.",
        examples: ["Emma walked through the garden.", "She searched under every bush.", "She picked it up."]
      },
      {
        title: "Past Continuous",
        explanation: "Le past continuous (was/were + -ing) décrit une action en cours dans le passé.",
        examples: ["She was looking for something important.", "Something was shining near the fountain."]
      }
    ],
    summary: "Emma cherche la clé dorée de sa grand-mère dans le jardin. Elle la trouve près de la fontaine et court vers la maison pour ouvrir la porte mystérieuse du grenier.",
    sentences: [
      {
        en: "Emma walked through the old garden.",
        simple: "Emma walked in the garden.",
        fr: "Emma marchait dans le vieux jardin.",
        audio: true
      },
      {
        en: "She was looking for something important.",
        simple: "She looked for something.",
        fr: "Elle cherchait quelque chose d'important.",
        audio: true
      },
      {
        en: "Yesterday, she lost her grandmother's golden key.",
        simple: "She lost a golden key yesterday.",
        fr: "Hier, elle a perdu la clé dorée de sa grand-mère.",
        audio: true
      },
      {
        en: "The key could open a mysterious door in the attic.",
        simple: "The key opens a special door.",
        fr: "La clé pouvait ouvrir une porte mystérieuse dans le grenier.",
        audio: true
      },
      {
        en: "Emma searched under every bush and flower.",
        simple: "Emma looked everywhere.",
        fr: "Emma chercha sous chaque buisson et fleur.",
        audio: true
      },
      {
        en: "Suddenly, she saw something shining near the fountain.",
        simple: "She saw something shiny.",
        fr: "Soudain, elle vit quelque chose briller près de la fontaine.",
        audio: true
      },
      {
        en: "There it was! The golden key was lying on the ground.",
        simple: "The key was on the ground!",
        fr: "La voilà ! La clé dorée était posée sur le sol.",
        audio: true
      },
      {
        en: "Emma picked it up with trembling hands.",
        simple: "Emma picked up the key.",
        fr: "Emma la ramassa avec des mains tremblantes.",
        audio: true
      },
      {
        en: "She ran back to the house, excited to unlock the door.",
        simple: "She ran to the house.",
        fr: "Elle courut vers la maison, excitée d'ouvrir la porte.",
        audio: true
      },
      {
        en: "What secrets would she discover in the attic?",
        simple: "What would she find?",
        fr: "Quels secrets allait-elle découvrir dans le grenier ?",
        audio: true
      }
    ],
    quiz: [
      {
        question: "Qu'a perdu Emma ?",
        options: ["Une clé dorée", "Un collier", "Un livre", "Une photo"],
        correct: 0
      },
      {
        question: "Où Emma a-t-elle trouvé la clé ?",
        options: ["Dans la maison", "Près de la fontaine", "Sous un arbre", "Dans le grenier"],
        correct: 1
      },
      {
        question: "À qui appartenait la clé ?",
        options: ["À Emma", "À sa mère", "À sa grand-mère", "À son père"],
        correct: 2
      },
      {
        question: "Que pouvait ouvrir la clé ?",
        options: ["Un coffre", "Une voiture", "Une porte dans le grenier", "Un tiroir"],
        correct: 2
      }
    ]
  };

export default story;
