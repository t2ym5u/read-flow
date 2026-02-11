import type { Story } from '$lib/types';

const story: Story = {
    id: 11,
    title: "The Secret Garden",
    level: "Débutant",
    levelColor: "#6bcf7f",
    emoji: "🌿",
    gradient: "linear-gradient(135deg, #56ab2f 0%, #a8e063 100%)",
    desc: "Un jardin caché derrière une vieille maison",
    duration: "5 min",
    words: 130,
    category: "nature",
    tags: ["present-simple", "nature", "discovery", "A1"],
    keyVocabulary: [
      { word: "garden", translation: "jardin", example: "The garden was full of flowers." },
      { word: "gate", translation: "portail", example: "She opened the old gate." },
      { word: "path", translation: "chemin", example: "A narrow path led through the trees." },
      { word: "bloom", translation: "fleurir", example: "The roses were in bloom." },
      { word: "butterfly", translation: "papillon", example: "A blue butterfly landed on her hand." },
      { word: "hidden", translation: "caché", example: "The garden was hidden behind the wall." }
    ],
    grammarTips: [
      {
        title: "There is / There are",
        explanation: "'There is' s'utilise avec un nom singulier, 'there are' avec un pluriel.",
        examples: ["There is a pond in the garden.", "There are many flowers.", "There is a butterfly on the rose."]
      },
      {
        title: "Adjectifs de couleur",
        explanation: "En anglais, l'adjectif se place toujours AVANT le nom.",
        examples: ["A blue butterfly.", "The red roses.", "An old stone wall."]
      }
    ],
    summary: "Lily emménage dans une vieille maison et découvre un portail caché dans le mur du jardin. Derrière, elle trouve un jardin secret magnifique avec des fleurs, un étang et des papillons. Elle décide d'en prendre soin chaque jour.",
    sentences: [
      {
        en: "Lily and her family move to an old house in the countryside.",
        simple: "Lily moves to an old house.",
        fr: "Lily et sa famille emménagent dans une vieille maison à la campagne.",
        audio: true
      },
      {
        en: "The house has a big garden with tall trees and thick walls.",
        simple: "The house has a big garden.",
        fr: "La maison a un grand jardin avec de grands arbres et des murs épais.",
        audio: true
      },
      {
        en: "One day, Lily notices a small gate hidden behind the ivy.",
        simple: "Lily sees a small gate.",
        fr: "Un jour, Lily remarque un petit portail caché derrière le lierre.",
        audio: true
      },
      {
        en: "She pushes the gate open and discovers a secret garden.",
        simple: "She opens the gate and finds a garden.",
        fr: "Elle pousse le portail et découvre un jardin secret.",
        audio: true
      },
      {
        en: "There are roses, daisies and wildflowers everywhere.",
        simple: "There are many flowers.",
        fr: "Il y a des roses, des marguerites et des fleurs sauvages partout.",
        audio: true
      },
      {
        en: "A narrow stone path leads to a small pond in the centre.",
        simple: "A path goes to a small pond.",
        fr: "Un étroit chemin de pierre mène à un petit étang au centre.",
        audio: true
      },
      {
        en: "A blue butterfly lands on her hand, and she smiles.",
        simple: "A butterfly lands on her hand.",
        fr: "Un papillon bleu se pose sur sa main, et elle sourit.",
        audio: true
      },
      {
        en: "The garden is quiet and peaceful — only the birds are singing.",
        simple: "The garden is quiet and nice.",
        fr: "Le jardin est calme et paisible — seuls les oiseaux chantent.",
        audio: true
      },
      {
        en: "Lily sits on a bench near the pond and watches the fish swim.",
        simple: "Lily sits and watches the fish.",
        fr: "Lily s'assoit sur un banc près de l'étang et regarde les poissons nager.",
        audio: true
      },
      {
        en: "She decides to come here every day and take care of the garden.",
        simple: "She wants to come here every day.",
        fr: "Elle décide de venir ici chaque jour et de prendre soin du jardin.",
        audio: true
      },
      {
        en: "This is her secret place now — a place just for her.",
        simple: "This is her secret place.",
        fr: "C'est son endroit secret maintenant — un endroit rien que pour elle.",
        audio: true
      }
    ],
    quiz: [
      {
        question: "Où Lily emménage-t-elle ?",
        options: ["En ville", "À la campagne", "À la plage", "À la montagne"],
        correct: 1
      },
      {
        question: "Qu'est-ce qui cache le portail ?",
        options: ["Des briques", "Du lierre", "De la peinture", "Un arbre"],
        correct: 1
      },
      {
        question: "Qu'y a-t-il au centre du jardin ?",
        options: ["Une statue", "Une fontaine", "Un étang", "Un arbre"],
        correct: 2
      },
      {
        question: "Quel insecte se pose sur la main de Lily ?",
        options: ["Une abeille", "Une coccinelle", "Un papillon", "Une libellule"],
        correct: 2
      }
    ]
  };

export default story;
