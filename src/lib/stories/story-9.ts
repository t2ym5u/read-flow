import type { Story } from '$lib/types';

const story: Story = {
    id: 9,
    title: "The Championship Match",
    level: "Intermédiaire",
    levelColor: "#ffd93d",
    emoji: "⚽",
    gradient: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
    desc: "Un match de football inoubliable",
    duration: "9 min",
    words: 260,
    category: "sports",
    tags: ["past-tense", "sports", "emotions", "A2-B1"],
    keyVocabulary: [
      { word: "match", translation: "match", example: "The championship match was tonight." },
      { word: "score", translation: "marquer", example: "They needed to score one more goal." },
      { word: "crowd", translation: "foule", example: "The crowd was cheering loudly." },
      { word: "referee", translation: "arbitre", example: "The referee blew the whistle." },
      { word: "champion", translation: "champion", example: "They became the new champions!" },
      { word: "victory", translation: "victoire", example: "It was a well-deserved victory." },
      { word: "whistle", translation: "sifflet", example: "The final whistle blew." }
    ],
    grammarTips: [
      {
        title: "Narration au passé",
        explanation: "En anglais, on utilise le past simple pour raconter une histoire au passé, action par action.",
        examples: ["The crowd cheered.", "He kicked the ball.", "The referee blew the whistle."]
      },
      {
        title: "Phrases exclamatives",
        explanation: "Les phrases exclamatives expriment une émotion forte, souvent avec 'What a...!' ou 'How...!'.",
        examples: ["What a goal!", "What a match!", "How incredible!"]
      },
      {
        title: "Collocations sportives",
        explanation: "Certains mots vont naturellement ensemble dans le contexte sportif.",
        examples: ["Score a goal.", "Blow the whistle.", "Win the match.", "Lift the trophy."]
      }
    ],
    summary: "L'équipe locale des Falcons joue la finale du championnat contre les Panthers. Menés au score, ils ne baissent pas les bras. Dans les dernières minutes, le capitaine marque un but spectaculaire qui leur donne la victoire.",
    sentences: [
      {
        en: "The stadium was packed with thousands of excited fans.",
        simple: "The stadium was full of fans.",
        fr: "Le stade était bondé de milliers de supporters enthousiastes.",
        audio: true
      },
      {
        en: "Tonight was the championship final between the Falcons and the Panthers.",
        simple: "Tonight was the big final match.",
        fr: "Ce soir, c'était la finale du championnat entre les Falcons et les Panthers.",
        audio: true
      },
      {
        en: "The Falcons were the local team, and the crowd was mostly behind them.",
        simple: "Most fans supported the Falcons.",
        fr: "Les Falcons étaient l'équipe locale, et la foule les soutenait en grande majorité.",
        audio: true
      },
      {
        en: "The referee blew the whistle and the match began.",
        simple: "The match started.",
        fr: "L'arbitre siffla et le match commença.",
        audio: true
      },
      {
        en: "Both teams played aggressively from the very first minute.",
        simple: "Both teams played hard.",
        fr: "Les deux équipes jouèrent agressivement dès la première minute.",
        audio: true
      },
      {
        en: "The Panthers scored the first goal after just fifteen minutes.",
        simple: "The Panthers scored first.",
        fr: "Les Panthers marquèrent le premier but après seulement quinze minutes.",
        audio: true
      },
      {
        en: "The Falcons' fans fell silent, worry spreading across their faces.",
        simple: "The Falcons' fans were worried.",
        fr: "Les supporters des Falcons se turent, l'inquiétude se lisant sur leurs visages.",
        audio: true
      },
      {
        en: "At halftime, the score was still one to zero for the Panthers.",
        simple: "At halftime, the Panthers were winning.",
        fr: "À la mi-temps, le score était toujours de un à zéro pour les Panthers.",
        audio: true
      },
      {
        en: "The Falcons' coach gave an inspiring speech in the locker room.",
        simple: "The coach gave a good speech.",
        fr: "L'entraîneur des Falcons fit un discours inspirant dans le vestiaire.",
        audio: true
      },
      {
        en: "The second half started and the Falcons played with renewed energy.",
        simple: "The Falcons played better after the break.",
        fr: "La seconde mi-temps commença et les Falcons jouèrent avec une énergie renouvelée.",
        audio: true
      },
      {
        en: "In the sixtieth minute, their striker scored a brilliant equalizing goal.",
        simple: "Their best player scored a goal.",
        fr: "À la soixantième minute, leur attaquant marqua un brillant but égalisateur.",
        audio: true
      },
      {
        en: "The crowd erupted in joy — the score was now one to one!",
        simple: "The fans were very happy — it was 1-1!",
        fr: "La foule explosa de joie — le score était maintenant de un partout !",
        audio: true
      },
      {
        en: "The last ten minutes were incredibly tense for everyone in the stadium.",
        simple: "The last minutes were very tense.",
        fr: "Les dix dernières minutes furent incroyablement tendues pour tout le monde dans le stade.",
        audio: true
      },
      {
        en: "With only two minutes left, the Falcons' captain received a perfect pass.",
        simple: "The captain got the ball.",
        fr: "Avec seulement deux minutes restantes, le capitaine des Falcons reçut une passe parfaite.",
        audio: true
      },
      {
        en: "He shot the ball with all his strength — it flew into the top corner of the net!",
        simple: "He kicked the ball into the goal!",
        fr: "Il tira de toutes ses forces — le ballon vola dans le coin supérieur du filet !",
        audio: true
      },
      {
        en: "The final whistle blew, and the Falcons had won the championship two to one!",
        simple: "The Falcons won 2-1!",
        fr: "Le coup de sifflet final retentit, et les Falcons avaient remporté le championnat deux à un !",
        audio: true
      }
    ],
    quiz: [
      {
        question: "Qui marque le premier but ?",
        options: ["Les Falcons", "Les Panthers", "Personne", "L'arbitre"],
        correct: 1
      },
      {
        question: "Quel est le score à la mi-temps ?",
        options: ["0-0", "1-0 pour les Panthers", "1-1", "2-0 pour les Panthers"],
        correct: 1
      },
      {
        question: "Qui marque le but de la victoire ?",
        options: ["L'attaquant", "Le gardien", "Le capitaine", "L'entraîneur"],
        correct: 2
      },
      {
        question: "Combien de minutes restait-il quand le but final a été marqué ?",
        options: ["10 minutes", "5 minutes", "2 minutes", "30 secondes"],
        correct: 2
      },
      {
        question: "Quel est le score final ?",
        options: ["1-0", "1-1", "2-1", "3-2"],
        correct: 2
      }
    ]
  };

export default story;
