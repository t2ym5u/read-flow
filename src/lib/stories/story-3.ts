import type { Story } from '$lib/types';

const story: Story = {
    id: 3,
    title: "The Time Traveler",
    level: "Avancé",
    levelColor: "#ff6b6b",
    emoji: "⏰",
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    desc: "Un voyage dans le temps qui change tout",
    duration: "12 min",
    words: 310,
    category: "sci-fi",
    tags: ["past-perfect", "passive-voice", "complex-sentences", "B1-B2"],
    keyVocabulary: [
      { word: "invention", translation: "invention", example: "He spent twenty years perfecting his invention." },
      { word: "temporal", translation: "temporel", example: "The temporal displacement device was ready." },
      { word: "coordinates", translation: "coordonnées", example: "He set the coordinates for London, 1895." },
      { word: "malfunctioning", translation: "dysfonctionner", example: "His return device was malfunctioning." },
      { word: "stranded", translation: "bloqué", example: "He was stranded in the nineteenth century." },
      { word: "predicament", translation: "situation difficile", example: "If anyone could understand his predicament..." },
      { word: "carriages", translation: "calèches", example: "Horse-drawn carriages clattered past." }
    ],
    grammarTips: [
      {
        title: "Past Perfect",
        explanation: "Le past perfect (had + participe passé) place une action avant une autre dans le passé.",
        examples: ["He had spent twenty years perfecting his invention.", "He had done it — he had actually traveled through time!"]
      },
      {
        title: "Voix passive",
        explanation: "La voix passive met l'accent sur l'action plutôt que sur celui qui la fait (be + participe passé).",
        examples: ["The crystal core had been cracked.", "He was stranded in the nineteenth century."]
      },
      {
        title: "Conditionnelles",
        explanation: "Les phrases en 'if' expriment une condition et sa conséquence.",
        examples: ["If anyone could understand his predicament, it would be the scientists.", "If he could find the right materials, he might repair it."]
      }
    ],
    summary: "Le professeur Stevens teste sa machine à voyager dans le temps et arrive à Londres en 1895. Mais son dispositif de retour est cassé. Bloqué au XIXe siècle, il part chercher de l'aide auprès des scientifiques de la Royal Institution.",
    sentences: [
      {
        en: "Professor Stevens had spent twenty years perfecting his invention.",
        simple: "Professor Stevens made a special machine.",
        fr: "Le professeur Stevens avait passé vingt ans à perfectionner son invention.",
        audio: true
      },
      {
        en: "The temporal displacement device sat in his basement laboratory.",
        simple: "His time machine was in the basement.",
        fr: "Le dispositif de déplacement temporel se trouvait dans son laboratoire au sous-sol.",
        audio: true
      },
      {
        en: "Tonight would be the first human trial, and he would be the subject.",
        simple: "Tonight, he would test it.",
        fr: "Ce soir serait le premier essai humain, et il serait le sujet.",
        audio: true
      },
      {
        en: "He set the coordinates for London, 1895, the height of the Victorian era.",
        simple: "He set it for London, 1895.",
        fr: "Il régla les coordonnées pour Londres, 1895, l'apogée de l'ère victorienne.",
        audio: true
      },
      {
        en: "With a deep breath, he pressed the activation button.",
        simple: "He pressed the button.",
        fr: "Avec une profonde inspiration, il appuya sur le bouton d'activation.",
        audio: true
      },
      {
        en: "Reality twisted and bent around him like melting glass.",
        simple: "Everything changed around him.",
        fr: "La réalité se tordit et se plia autour de lui comme du verre fondu.",
        audio: true
      },
      {
        en: "When his vision cleared, he stood in a foggy London street.",
        simple: "He arrived in old London.",
        fr: "Quand sa vision s'éclaircit, il se tenait dans une rue brumeuse de Londres.",
        audio: true
      },
      {
        en: "Horse-drawn carriages clattered past while gaslights flickered overhead.",
        simple: "Old carriages passed by.",
        fr: "Des calèches passaient bruyamment tandis que les lampes à gaz vacillaient au-dessus.",
        audio: true
      },
      {
        en: "He had done it — he had actually traveled through time!",
        simple: "It worked! He traveled in time!",
        fr: "Il l'avait fait — il avait vraiment voyagé dans le temps !",
        audio: true
      },
      {
        en: "But then he noticed something disturbing: his return device was malfunctioning.",
        simple: "But his return device was broken.",
        fr: "Mais il remarqua alors quelque chose de troublant : son dispositif de retour dysfonctionnait.",
        audio: true
      },
      {
        en: "He examined the device carefully, trying to identify the fault.",
        simple: "He looked at the device closely.",
        fr: "Il examina le dispositif attentivement, essayant d'identifier la panne.",
        audio: true
      },
      {
        en: "The crystal core had cracked during the temporal shift.",
        simple: "The crystal inside was broken.",
        fr: "Le noyau de cristal s'était fissuré pendant le déplacement temporel.",
        audio: true
      },
      {
        en: "Without it, he was stranded in the nineteenth century.",
        simple: "He was stuck in the past.",
        fr: "Sans lui, il était bloqué au dix-neuvième siècle.",
        audio: true
      },
      {
        en: "He needed to find someone who understood advanced mechanics.",
        simple: "He needed help from a smart person.",
        fr: "Il avait besoin de trouver quelqu'un qui comprenait la mécanique avancée.",
        audio: true
      },
      {
        en: "Perhaps the great inventors of this era could help him.",
        simple: "Maybe the inventors could help.",
        fr: "Peut-être que les grands inventeurs de cette époque pourraient l'aider.",
        audio: true
      },
      {
        en: "He made his way through the crowded streets towards the Royal Institution.",
        simple: "He walked to the Royal Institution.",
        fr: "Il se fraya un chemin dans les rues bondées vers la Royal Institution.",
        audio: true
      },
      {
        en: "If anyone could understand his predicament, it would be the scientists there.",
        simple: "Scientists there could help him.",
        fr: "Si quelqu'un pouvait comprendre sa situation, ce serait les scientifiques là-bas.",
        audio: true
      },
      {
        en: "He took a deep breath and knocked on the heavy wooden door.",
        simple: "He knocked on the big door.",
        fr: "Il prit une profonde inspiration et frappa à la lourde porte en bois.",
        audio: true
      }
    ],
    quiz: [
      {
        question: "Combien de temps le professeur a-t-il travaillé sur son invention ?",
        options: ["10 ans", "15 ans", "20 ans", "25 ans"],
        correct: 2
      },
      {
        question: "Quel est le problème à la fin ?",
        options: ["Il est perdu", "Le dispositif de retour ne fonctionne pas", "Il est blessé", "Il ne peut pas respirer"],
        correct: 1
      },
      {
        question: "Qu'est-ce qui s'est fissuré dans le dispositif ?",
        options: ["L'écran", "Le bouton", "Le noyau de cristal", "Le boîtier"],
        correct: 2
      },
      {
        question: "Où le professeur décide-t-il d'aller chercher de l'aide ?",
        options: ["À l'université", "À la Royal Institution", "À l'hôpital", "Au musée"],
        correct: 1
      },
      {
        question: "À quelle époque le professeur voyage-t-il ?",
        options: ["Le Moyen Âge", "La Renaissance", "L'ère victorienne (1895)", "Le futur"],
        correct: 2
      }
    ]
  };

export default story;
