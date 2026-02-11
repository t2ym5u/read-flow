import type { Story } from '$lib/types';

const story: Story = {
    id: 15,
    title: "The Last Train",
    level: "Avancé",
    levelColor: "#ff6b6b",
    emoji: "🚂",
    gradient: "linear-gradient(135deg, #2c3e50 0%, #3498db 100%)",
    desc: "Une course contre la montre à la gare",
    duration: "12 min",
    words: 320,
    category: "adventure",
    tags: ["past-perfect", "conditionals", "suspense", "B1-B2"],
    keyVocabulary: [
      { word: "platform", translation: "quai", example: "The train was waiting at platform 3." },
      { word: "departure", translation: "départ", example: "The departure time was 11:45 PM." },
      { word: "delay", translation: "retard", example: "There was an unexpected delay." },
      { word: "passenger", translation: "passager", example: "The last passenger ran onto the train." },
      { word: "schedule", translation: "horaire", example: "He checked the schedule on his phone." },
      { word: "destination", translation: "destination", example: "His destination was three hours away." },
      { word: "conductor", translation: "contrôleur", example: "The conductor checked his ticket." },
      { word: "suitcase", translation: "valise", example: "He grabbed his suitcase and ran." }
    ],
    grammarTips: [
      {
        title: "Third Conditional",
        explanation: "Le third conditional (If + had + participe passé, would have + participe passé) décrit une situation irréelle dans le passé.",
        examples: ["If he had left earlier, he would have caught the train.", "If she hadn't called, he would have missed it."]
      },
      {
        title: "Past Perfect Continuous",
        explanation: "Le past perfect continuous (had been + -ing) décrit une action en cours avant un moment passé.",
        examples: ["He had been running for ten minutes.", "She had been waiting at the station since nine."]
      },
      {
        title: "Inversions emphatiques",
        explanation: "Pour un effet dramatique, on peut inverser le sujet et l'auxiliaire après certains adverbes.",
        examples: ["Never had he run so fast.", "Barely had he sat down when the train moved.", "Not once did he stop to rest."]
      }
    ],
    summary: "Lucas doit absolument prendre le dernier train pour retrouver sa sœur à l'hôpital. Retardé par un embouteillage, il court désespérément à travers la gare. Grâce à l'aide d'une inconnue et d'un contrôleur bienveillant, il attrape le train in extremis et arrive à temps.",
    sentences: [
      {
        en: "Lucas stared at his phone in disbelief — his sister had been taken to hospital in Lyon.",
        simple: "Lucas's sister was in hospital in Lyon.",
        fr: "Lucas fixa son téléphone avec incrédulité — sa sœur avait été emmenée à l'hôpital à Lyon.",
        audio: true
      },
      {
        en: "The last train to Lyon was departing at 11:45 PM from platform 7.",
        simple: "The last train left at 11:45 PM.",
        fr: "Le dernier train pour Lyon partait à 23h45 du quai 7.",
        audio: true
      },
      {
        en: "It was already 11:20, and he was stuck in traffic on the other side of the city.",
        simple: "It was 11:20 and he was in traffic.",
        fr: "Il était déjà 23h20, et il était coincé dans les embouteillages de l'autre côté de la ville.",
        audio: true
      },
      {
        en: "If he had left the office earlier, he would have had plenty of time.",
        simple: "He should have left work earlier.",
        fr: "S'il avait quitté le bureau plus tôt, il aurait eu largement le temps.",
        audio: true
      },
      {
        en: "He abandoned the taxi, grabbed his suitcase, and started running towards the station.",
        simple: "He left the taxi and ran to the station.",
        fr: "Il abandonna le taxi, attrapa sa valise, et commença à courir vers la gare.",
        audio: true
      },
      {
        en: "He had been running for ten minutes when he finally saw the station entrance.",
        simple: "After ten minutes of running, he saw the station.",
        fr: "Il courait depuis dix minutes quand il aperçut enfin l'entrée de la gare.",
        audio: true
      },
      {
        en: "The clock above the main hall read 11:38 — he had only seven minutes left.",
        simple: "The clock said 11:38 — seven minutes left.",
        fr: "L'horloge au-dessus du hall principal affichait 23h38 — il ne lui restait que sept minutes.",
        audio: true
      },
      {
        en: "He rushed through the crowds, apologising to everyone he bumped into.",
        simple: "He ran through the people, saying sorry.",
        fr: "Il se précipita à travers la foule, s'excusant auprès de tous ceux qu'il bousculait.",
        audio: true
      },
      {
        en: "The departure board showed 'Last Train — Lyon — Platform 7 — On Time.'",
        simple: "The board said the train was on time.",
        fr: "Le tableau des départs affichait « Dernier Train — Lyon — Quai 7 — À l'heure. »",
        audio: true
      },
      {
        en: "But the escalator to platform 7 was out of order — he would have to take the stairs.",
        simple: "The escalator was broken. He took the stairs.",
        fr: "Mais l'escalator vers le quai 7 était en panne — il allait devoir prendre les escaliers.",
        audio: true
      },
      {
        en: "Never had he run so fast in his entire life, his lungs burning with every step.",
        simple: "He ran faster than ever before.",
        fr: "Jamais il n'avait couru aussi vite de toute sa vie, ses poumons brûlant à chaque pas.",
        audio: true
      },
      {
        en: "A woman carrying a baby noticed his desperate face and held the barrier open for him.",
        simple: "A woman saw him and opened the barrier.",
        fr: "Une femme portant un bébé remarqua son visage désespéré et lui tint la barrière ouverte.",
        audio: true
      },
      {
        en: "'Thank you!' he shouted without stopping, his suitcase bouncing behind him.",
        simple: "'Thank you!' he shouted and kept running.",
        fr: "« Merci ! » cria-t-il sans s'arrêter, sa valise rebondissant derrière lui.",
        audio: true
      },
      {
        en: "He reached the platform just as the conductor was about to blow his whistle.",
        simple: "He arrived at the train just in time.",
        fr: "Il atteignit le quai juste au moment où le contrôleur s'apprêtait à siffler.",
        audio: true
      },
      {
        en: "'Wait! Please!' Lucas called out, waving his ticket in the air.",
        simple: "'Wait!' he shouted, showing his ticket.",
        fr: "« Attendez ! S'il vous plaît ! » appela Lucas, agitant son billet en l'air.",
        audio: true
      },
      {
        en: "The conductor paused, looked at him, and nodded with a kind smile.",
        simple: "The conductor stopped and smiled at him.",
        fr: "Le contrôleur fit une pause, le regarda, et acquiesça avec un sourire bienveillant.",
        audio: true
      },
      {
        en: "Barely had Lucas sat down in his seat when the train began to move.",
        simple: "He sat down and the train started moving.",
        fr: "À peine Lucas s'était-il assis que le train commença à bouger.",
        audio: true
      },
      {
        en: "He leaned back, closed his eyes, and let out the deepest breath of relief.",
        simple: "He closed his eyes and relaxed.",
        fr: "Il s'adossa, ferma les yeux, et poussa le plus profond soupir de soulagement.",
        audio: true
      },
      {
        en: "Three hours later, he walked into the hospital room and held his sister's hand.",
        simple: "Three hours later, he was with his sister.",
        fr: "Trois heures plus tard, il entra dans la chambre d'hôpital et prit la main de sa sœur.",
        audio: true
      },
      {
        en: "She opened her eyes and whispered, 'I knew you would come.'",
        simple: "She said, 'I knew you would come.'",
        fr: "Elle ouvrit les yeux et murmura : « Je savais que tu viendrais. »",
        audio: true
      }
    ],
    quiz: [
      {
        question: "Pourquoi Lucas doit-il prendre le train ?",
        options: ["Pour le travail", "Pour un voyage", "Pour voir sa sœur à l'hôpital", "Pour un rendez-vous"],
        correct: 2
      },
      {
        question: "À quelle heure part le dernier train ?",
        options: ["22h00", "23h00", "23h45", "Minuit"],
        correct: 2
      },
      {
        question: "Pourquoi Lucas est-il en retard ?",
        options: ["Il a oublié son billet", "Il est coincé dans les embouteillages", "Le train est en avance", "Il s'est perdu"],
        correct: 1
      },
      {
        question: "Qui aide Lucas à la barrière ?",
        options: ["Un policier", "Un autre passager", "Une femme avec un bébé", "Le contrôleur"],
        correct: 2
      },
      {
        question: "Que dit la sœur de Lucas quand il arrive ?",
        options: [
          "Tu es en retard !",
          "Je savais que tu viendrais.",
          "Où étais-tu ?",
          "Merci d'être venu."
        ],
        correct: 1
      }
    ]
  };

export default story;
