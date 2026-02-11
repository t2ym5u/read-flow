import type { Story } from '$lib/types';

const story: Story = {
    id: 7,
    title: "The Old Oak Tree",
    level: "Intermédiaire",
    levelColor: "#ffd93d",
    emoji: "🌳",
    gradient: "linear-gradient(135deg, #134e5e 0%, #71b280 100%)",
    desc: "Les quatre saisons racontées par un vieux chêne",
    duration: "7 min",
    words: 220,
    category: "nature",
    tags: ["present-perfect", "descriptive", "seasons", "B1"],
    keyVocabulary: [
      { word: "roots", translation: "racines", example: "My roots go deep into the earth." },
      { word: "branches", translation: "branches", example: "Birds build nests in my branches." },
      { word: "shelter", translation: "abri", example: "I give shelter to many animals." },
      { word: "ancient", translation: "ancien", example: "I am an ancient tree, three hundred years old." },
      { word: "witness", translation: "témoin", example: "I have been a witness to many changes." },
      { word: "blossom", translation: "fleurir", example: "The flowers blossom in spring." }
    ],
    grammarTips: [
      {
        title: "Present Perfect",
        explanation: "Le present perfect (have/has + participe passé) relie le passé au présent. On l'utilise pour des expériences de vie.",
        examples: ["I have seen many winters.", "I have watched children grow up.", "I have stood here for three hundred years."]
      },
      {
        title: "Ordre des adjectifs",
        explanation: "En anglais, les adjectifs suivent un ordre : opinion, taille, âge, couleur, origine.",
        examples: ["A beautiful old oak tree.", "Bright green leaves.", "A small brown squirrel."]
      }
    ],
    summary: "Un vieux chêne de trois cents ans raconte sa vie à travers les saisons : le printemps avec ses bourgeons, l'été plein de vie, l'automne coloré et l'hiver calme. Il a été témoin de générations d'enfants, d'animaux et de changements.",
    sentences: [
      {
        en: "I am an old oak tree, and I have stood in this field for three hundred years.",
        simple: "I am a very old tree.",
        fr: "Je suis un vieux chêne, et je me tiens dans ce champ depuis trois cents ans.",
        audio: true
      },
      {
        en: "My roots go deep into the earth, and my branches reach towards the sky.",
        simple: "My roots are deep and my branches are tall.",
        fr: "Mes racines s'enfoncent profondément dans la terre, et mes branches s'étendent vers le ciel.",
        audio: true
      },
      {
        en: "I have seen more seasons than any person alive today.",
        simple: "I have seen many seasons.",
        fr: "J'ai vu plus de saisons que n'importe quelle personne vivante aujourd'hui.",
        audio: true
      },
      {
        en: "In spring, tiny green buds appear on my branches.",
        simple: "In spring, small buds grow.",
        fr: "Au printemps, de minuscules bourgeons verts apparaissent sur mes branches.",
        audio: true
      },
      {
        en: "Birds return from their long journey and build nests in my arms.",
        simple: "Birds come back and make nests.",
        fr: "Les oiseaux reviennent de leur long voyage et construisent des nids dans mes bras.",
        audio: true
      },
      {
        en: "The world smells fresh and new, and everything starts to blossom.",
        simple: "Everything is fresh and new.",
        fr: "Le monde sent le frais et le neuf, et tout commence à fleurir.",
        audio: true
      },
      {
        en: "Summer brings warm sunshine and long, golden afternoons.",
        simple: "Summer is warm and sunny.",
        fr: "L'été apporte un soleil chaud et de longs après-midi dorés.",
        audio: true
      },
      {
        en: "Children play in my shade, and families have picnics beneath me.",
        simple: "Children play under me.",
        fr: "Les enfants jouent dans mon ombre, et les familles pique-niquent sous moi.",
        audio: true
      },
      {
        en: "A small brown squirrel has lived in my trunk for five years now.",
        simple: "A squirrel lives in my trunk.",
        fr: "Un petit écureuil brun vit dans mon tronc depuis cinq ans maintenant.",
        audio: true
      },
      {
        en: "When autumn arrives, my leaves turn red, orange, and gold.",
        simple: "In autumn, my leaves change color.",
        fr: "Quand l'automne arrive, mes feuilles deviennent rouges, oranges et dorées.",
        audio: true
      },
      {
        en: "They dance in the wind before falling gently to the ground.",
        simple: "The leaves fall to the ground.",
        fr: "Elles dansent dans le vent avant de tomber doucement au sol.",
        audio: true
      },
      {
        en: "Winter is quiet and cold, but I am never truly alone.",
        simple: "Winter is cold but I am not alone.",
        fr: "L'hiver est calme et froid, mais je ne suis jamais vraiment seul.",
        audio: true
      },
      {
        en: "Snow covers my branches like a white blanket, and I rest.",
        simple: "Snow covers me and I rest.",
        fr: "La neige recouvre mes branches comme une couverture blanche, et je me repose.",
        audio: true
      },
      {
        en: "I have watched generations come and go, and I will be here for many more.",
        simple: "I have seen many people, and I will stay.",
        fr: "J'ai regardé des générations aller et venir, et je serai là pour encore beaucoup d'autres.",
        audio: true
      }
    ],
    quiz: [
      {
        question: "Quel âge a le chêne ?",
        options: ["100 ans", "200 ans", "300 ans", "500 ans"],
        correct: 2
      },
      {
        question: "Quel animal vit dans le tronc du chêne ?",
        options: ["Un oiseau", "Un écureuil", "Un chat", "Un lapin"],
        correct: 1
      },
      {
        question: "De quelles couleurs sont les feuilles en automne ?",
        options: [
          "Vertes et bleues",
          "Rouges, oranges et dorées",
          "Blanches et grises",
          "Roses et violettes"
        ],
        correct: 1
      },
      {
        question: "Que font les enfants en été ?",
        options: [
          "Ils grimpent dans l'arbre",
          "Ils jouent dans son ombre",
          "Ils coupent ses branches",
          "Ils arrosent ses racines"
        ],
        correct: 1
      }
    ]
  };

export default story;
