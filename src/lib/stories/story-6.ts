import type { Story } from '$lib/types';

const story: Story = {
    id: 6,
    title: "Lost in the City",
    level: "Intermédiaire",
    levelColor: "#ffd93d",
    emoji: "🏙️",
    gradient: "linear-gradient(135deg, #667db6 0%, #0082c8 50%, #667db6 100%)",
    desc: "Se repérer dans une grande ville étrangère",
    duration: "8 min",
    words: 240,
    category: "travel",
    tags: ["directions", "past-continuous", "polite-requests", "A2-B1"],
    keyVocabulary: [
      { word: "directions", translation: "indications", example: "He asked a woman for directions." },
      { word: "straight", translation: "tout droit", example: "Go straight for two blocks." },
      { word: "corner", translation: "coin", example: "Turn left at the corner." },
      { word: "underground", translation: "métro", example: "The underground station is nearby." },
      { word: "landmark", translation: "point de repère", example: "Big Ben is a famous London landmark." },
      { word: "bridge", translation: "pont", example: "He walked across the old bridge." },
      { word: "relieved", translation: "soulagé", example: "Lucas felt relieved when he found his way." }
    ],
    grammarTips: [
      {
        title: "Past Continuous",
        explanation: "Le past continuous (was/were + -ing) décrit une action en cours dans le passé.",
        examples: ["He was walking down the street.", "People were rushing past him.", "The sun was setting over the river."]
      },
      {
        title: "Demandes polies",
        explanation: "'Could you...?' et 'Excuse me...' sont des formules de politesse pour demander de l'aide.",
        examples: ["Could you tell me the way to...?", "Excuse me, is there a station nearby?", "Would you mind helping me?"]
      },
      {
        title: "Prépositions de lieu",
        explanation: "Les prépositions indiquent la position ou la direction : at, on, in, near, across, along.",
        examples: ["Turn left at the corner.", "The hotel is on Park Street.", "Walk across the bridge."]
      }
    ],
    summary: "Lucas, un jeune Français, arrive à Londres et se perd. Il demande son chemin à plusieurs personnes, découvre des monuments célèbres en route, et finit par trouver son hôtel grâce à l'aide d'une vieille dame.",
    sentences: [
      {
        en: "Lucas arrived in London on a cold Tuesday morning.",
        simple: "Lucas came to London.",
        fr: "Lucas arriva à Londres par un froid mardi matin.",
        audio: true
      },
      {
        en: "He was looking for his hotel, but the streets were confusing.",
        simple: "He was lost.",
        fr: "Il cherchait son hôtel, mais les rues étaient déroutantes.",
        audio: true
      },
      {
        en: "People were rushing past him in every direction.",
        simple: "People walked fast around him.",
        fr: "Les gens passaient devant lui à toute vitesse dans toutes les directions.",
        audio: true
      },
      {
        en: "He stopped and looked at his map, but nothing made sense.",
        simple: "His map did not help.",
        fr: "Il s'arrêta et regarda sa carte, mais rien n'avait de sens.",
        audio: true
      },
      {
        en: "Excuse me, could you tell me the way to Park Street? he asked a woman.",
        simple: "He asked a woman for help.",
        fr: "Excusez-moi, pourriez-vous m'indiquer le chemin vers Park Street ? demanda-t-il à une femme.",
        audio: true
      },
      {
        en: "She smiled and said: Go straight ahead and turn left at the corner.",
        simple: "She said: Go straight, then turn left.",
        fr: "Elle sourit et dit : Allez tout droit et tournez à gauche au coin.",
        audio: true
      },
      {
        en: "Lucas followed her directions and walked for ten minutes.",
        simple: "Lucas walked for ten minutes.",
        fr: "Lucas suivit ses indications et marcha pendant dix minutes.",
        audio: true
      },
      {
        en: "Suddenly, he saw a beautiful old bridge over the river.",
        simple: "He saw a bridge.",
        fr: "Soudain, il vit un magnifique vieux pont au-dessus de la rivière.",
        audio: true
      },
      {
        en: "He recognized it from photos — it was Tower Bridge!",
        simple: "It was Tower Bridge!",
        fr: "Il le reconnut grâce aux photos — c'était Tower Bridge !",
        audio: true
      },
      {
        en: "He was going the wrong way, but he did not mind at all.",
        simple: "He went the wrong way, but he was happy.",
        fr: "Il allait dans la mauvaise direction, mais cela ne le dérangeait pas du tout.",
        audio: true
      },
      {
        en: "He took some photos and then asked another person for help.",
        simple: "He took photos and asked for help.",
        fr: "Il prit des photos puis demanda de l'aide à une autre personne.",
        audio: true
      },
      {
        en: "A kind old lady pointed to an underground station across the street.",
        simple: "An old lady showed him the metro.",
        fr: "Une gentille vieille dame lui indiqua une station de métro de l'autre côté de la rue.",
        audio: true
      },
      {
        en: "She explained which line to take and where to get off.",
        simple: "She told him which metro to take.",
        fr: "Elle lui expliqua quelle ligne prendre et où descendre.",
        audio: true
      },
      {
        en: "Twenty minutes later, Lucas finally found his hotel on a quiet street.",
        simple: "He found his hotel.",
        fr: "Vingt minutes plus tard, Lucas trouva enfin son hôtel dans une rue calme.",
        audio: true
      },
      {
        en: "He felt relieved and grateful — getting lost had been the best part of his day.",
        simple: "He was happy he got lost.",
        fr: "Il se sentit soulagé et reconnaissant — se perdre avait été le meilleur moment de sa journée.",
        audio: true
      }
    ],
    quiz: [
      {
        question: "Quel jour Lucas arrive-t-il à Londres ?",
        options: ["Lundi", "Mardi", "Mercredi", "Samedi"],
        correct: 1
      },
      {
        question: "Quel monument Lucas reconnaît-il ?",
        options: ["Big Ben", "Tower Bridge", "Buckingham Palace", "London Eye"],
        correct: 1
      },
      {
        question: "Qui aide Lucas à trouver le métro ?",
        options: ["Un policier", "Un touriste", "Une vieille dame", "Un chauffeur de taxi"],
        correct: 2
      },
      {
        question: "Comment Lucas se sent-il à la fin ?",
        options: ["En colère", "Triste", "Fatigué", "Soulagé et reconnaissant"],
        correct: 3
      },
      {
        question: "Que fait Lucas quand il voit Tower Bridge ?",
        options: ["Il pleure", "Il prend des photos", "Il court", "Il appelle ses amis"],
        correct: 1
      }
    ]
  };

export default story;
