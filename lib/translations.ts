export type Locale = "fr" | "en" | "de" | "it" | "es";

export const LOCALES: { code: Locale; label: string; flag: string }[] = [
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
  { code: "it", label: "Italiano", flag: "🇮🇹" },
  { code: "es", label: "Español", flag: "🇪🇸" },
];

export interface QuestionText {
  gain: string;
  q: string;
  options: string[];
  feedback: string;
}

export interface UiText {
  appTitle: string;
  appSubtitle: string;
  chooseLang: string;
  formTitle: string;
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  companyOptional: string;
  requiredField: string;
  invalidEmail: string;
  startBtn: string;
  questionOf: string; // use {n} and {total}
  continueBtn: string;
  seeResultBtn: string;
  situationLabel: string;
  timeUpLabel: string;
  noPointNote: string;
  correctNote: string;
  wrongNote: string;
  ladderTitle: string;
  winTitle: string;
  winMsg: string;
  scoreLabel: string;
  almostTitle: string;
  almostMsg: string;
  restartBtn: string;
  leaderboardBtn: string;
  leaderboardTitle: string;
  colRank: string;
  colPlayer: string;
  colCompany: string;
  colScore: string;
  colTime: string;
  backHome: string;
  savingError: string;
  multiHint: string;
  validateBtn: string;
}

export const UI: Record<Locale, UiText> = {
  fr: {
    appTitle: "Qui veut gagner... un Perfmaker d'or ?",
    appSubtitle: "8 questions. Un entonnoir de conversion. Un Perfmaker d'or au bout.",
    chooseLang: "Choisissez votre langue",
    formTitle: "Inscription",
    firstName: "Prénom",
    lastName: "Nom",
    email: "E-mail",
    company: "Société",
    companyOptional: "(optionnel)",
    requiredField: "Merci de remplir ce champ.",
    invalidEmail: "Adresse e-mail invalide.",
    startBtn: "Commencer le quiz",
    questionOf: "Question {n}/{total}",
    continueBtn: "Continuer →",
    seeResultBtn: "Voir le résultat →",
    situationLabel: "🚦 Mise en situation",
    timeUpLabel: "Temps écoulé.",
    noPointNote: "Pas de point sur celle-ci.",
    correctNote: "Bonne réponse.",
    wrongNote: "Pas de point sur cette question.",
    ladderTitle: "Le funnel des gains",
    winTitle: "Le Perfmaker d'or",
    winMsg: "Félicitations ! Vous êtes officiellement « Partenaire Certifié Perfmaker ». Le diplôme est imaginaire, mais les performances sont bien réelles.",
    scoreLabel: "bonnes réponses",
    almostTitle: "Presque !",
    almostMsg: "Dommage — le Perfmaker d'or ne se gagne que sans aucune erreur, et dans le temps imparti.",
    restartBtn: "Rejouer",
    leaderboardBtn: "Voir le classement",
    leaderboardTitle: "Classement général",
    colRank: "Rang",
    colPlayer: "Joueur",
    colCompany: "Société",
    colScore: "Score",
    colTime: "Temps",
    backHome: "← Retour au quiz",
    savingError: "Une erreur est survenue, mais vous pouvez continuer le quiz.",
    multiHint: "Plusieurs réponses possibles",
    validateBtn: "Valider mes réponses",
  },
  en: {
    appTitle: "Who Wants to Win... a Golden Perfmaker?",
    appSubtitle: "8 questions. A conversion funnel. A Golden Perfmaker at the top.",
    chooseLang: "Choose your language",
    formTitle: "Registration",
    firstName: "First name",
    lastName: "Last name",
    email: "Email",
    company: "Company",
    companyOptional: "(optional)",
    requiredField: "Please fill in this field.",
    invalidEmail: "Invalid email address.",
    startBtn: "Start the quiz",
    questionOf: "Question {n}/{total}",
    continueBtn: "Continue →",
    seeResultBtn: "See result →",
    situationLabel: "🚦 Scenario",
    timeUpLabel: "Time's up.",
    noPointNote: "No point for this one.",
    correctNote: "Correct answer.",
    wrongNote: "No point for this question.",
    ladderTitle: "The prize funnel",
    winTitle: "The Golden Perfmaker",
    winMsg: "Congratulations! You are now officially a « Certified Perfmaker Partner ». The diploma is imaginary, but the performance is very real.",
    scoreLabel: "correct answers",
    almostTitle: "So close!",
    almostMsg: "Too bad — the Golden Perfmaker can only be won with a perfect score, within the time limit.",
    restartBtn: "Play again",
    leaderboardBtn: "View leaderboard",
    leaderboardTitle: "Leaderboard",
    colRank: "Rank",
    colPlayer: "Player",
    colCompany: "Company",
    colScore: "Score",
    colTime: "Time",
    backHome: "← Back to quiz",
    savingError: "Something went wrong, but you can keep playing.",
    multiHint: "Multiple answers possible",
    validateBtn: "Submit my answers",
  },
  de: {
    appTitle: "Wer gewinnt... den goldenen Perfmaker?",
    appSubtitle: "8 Fragen. Ein Conversion-Funnel. Ganz oben: der goldene Perfmaker.",
    chooseLang: "Sprache wählen",
    formTitle: "Anmeldung",
    firstName: "Vorname",
    lastName: "Nachname",
    email: "E-Mail",
    company: "Unternehmen",
    companyOptional: "(optional)",
    requiredField: "Bitte füllen Sie dieses Feld aus.",
    invalidEmail: "Ungültige E-Mail-Adresse.",
    startBtn: "Quiz starten",
    questionOf: "Frage {n}/{total}",
    continueBtn: "Weiter →",
    seeResultBtn: "Ergebnis ansehen →",
    situationLabel: "🚦 Situation",
    timeUpLabel: "Zeit abgelaufen.",
    noPointNote: "Kein Punkt für diese Frage.",
    correctNote: "Richtige Antwort.",
    wrongNote: "Kein Punkt für diese Frage.",
    ladderTitle: "Der Gewinn-Funnel",
    winTitle: "Der goldene Perfmaker",
    winMsg: "Herzlichen Glückwunsch! Sie sind jetzt offiziell „Zertifizierter Perfmaker-Partner“. Das Diplom ist erfunden, die Leistung nicht.",
    scoreLabel: "richtige Antworten",
    almostTitle: "So knapp!",
    almostMsg: "Schade — den goldenen Perfmaker gibt es nur mit einer fehlerfreien Runde, innerhalb der Zeit.",
    restartBtn: "Nochmal spielen",
    leaderboardBtn: "Rangliste ansehen",
    leaderboardTitle: "Rangliste",
    colRank: "Rang",
    colPlayer: "Spieler",
    colCompany: "Unternehmen",
    colScore: "Punkte",
    colTime: "Zeit",
    backHome: "← Zurück zum Quiz",
    savingError: "Etwas ist schiefgelaufen, Sie können aber weiterspielen.",
    multiHint: "Mehrere Antworten möglich",
    validateBtn: "Antworten bestätigen",
  },
  it: {
    appTitle: "Chi vuol vincere... un Perfmaker d'oro?",
    appSubtitle: "8 domande. Un funnel di conversione. Un Perfmaker d'oro in cima.",
    chooseLang: "Scegli la lingua",
    formTitle: "Iscrizione",
    firstName: "Nome",
    lastName: "Cognome",
    email: "E-mail",
    company: "Azienda",
    companyOptional: "(facoltativo)",
    requiredField: "Compila questo campo.",
    invalidEmail: "Indirizzo e-mail non valido.",
    startBtn: "Inizia il quiz",
    questionOf: "Domanda {n}/{total}",
    continueBtn: "Continua →",
    seeResultBtn: "Vedi il risultato →",
    situationLabel: "🚦 Situazione",
    timeUpLabel: "Tempo scaduto.",
    noPointNote: "Nessun punto per questa domanda.",
    correctNote: "Risposta corretta.",
    wrongNote: "Nessun punto per questa domanda.",
    ladderTitle: "Il funnel dei premi",
    winTitle: "Il Perfmaker d'oro",
    winMsg: "Congratulazioni! Ora sei ufficialmente un « Partner Certificato Perfmaker ». Il diploma è immaginario, ma le prestazioni sono reali.",
    scoreLabel: "risposte corrette",
    almostTitle: "Quasi!",
    almostMsg: "Peccato — il Perfmaker d'oro si vince solo con un punteggio perfetto, entro il tempo limite.",
    restartBtn: "Rigioca",
    leaderboardBtn: "Vedi la classifica",
    leaderboardTitle: "Classifica generale",
    colRank: "Posizione",
    colPlayer: "Giocatore",
    colCompany: "Azienda",
    colScore: "Punteggio",
    colTime: "Tempo",
    backHome: "← Torna al quiz",
    savingError: "Si è verificato un errore, ma puoi continuare il quiz.",
    multiHint: "Sono possibili più risposte",
    validateBtn: "Conferma le risposte",
  },
  es: {
    appTitle: "¿Quién quiere ganar... un Perfmaker de oro?",
    appSubtitle: "8 preguntas. Un embudo de conversión. Un Perfmaker de oro al final.",
    chooseLang: "Elige tu idioma",
    formTitle: "Inscripción",
    firstName: "Nombre",
    lastName: "Apellido",
    email: "Correo electrónico",
    company: "Empresa",
    companyOptional: "(opcional)",
    requiredField: "Por favor, rellena este campo.",
    invalidEmail: "Dirección de correo no válida.",
    startBtn: "Empezar el quiz",
    questionOf: "Pregunta {n}/{total}",
    continueBtn: "Continuar →",
    seeResultBtn: "Ver el resultado →",
    situationLabel: "🚦 Situación",
    timeUpLabel: "Tiempo agotado.",
    noPointNote: "Sin punto en esta pregunta.",
    correctNote: "Respuesta correcta.",
    wrongNote: "Sin punto en esta pregunta.",
    ladderTitle: "El embudo de premios",
    winTitle: "El Perfmaker de oro",
    winMsg: "¡Felicidades! Ahora eres oficialmente «Partner Certificado Perfmaker». El diploma es imaginario, pero el resultado es muy real.",
    scoreLabel: "respuestas correctas",
    almostTitle: "¡Casi!",
    almostMsg: "Una pena — el Perfmaker de oro solo se gana sin ningún fallo, dentro del tiempo límite.",
    restartBtn: "Volver a jugar",
    leaderboardBtn: "Ver clasificación",
    leaderboardTitle: "Clasificación general",
    colRank: "Puesto",
    colPlayer: "Jugador",
    colCompany: "Empresa",
    colScore: "Puntos",
    colTime: "Tiempo",
    backHome: "← Volver al quiz",
    savingError: "Ha ocurrido un error, pero puedes seguir jugando.",
    multiHint: "Varias respuestas posibles",
    validateBtn: "Confirmar mis respuestas",
  },
};

export const QUESTIONS: Record<Locale, QuestionText[]> = {
  fr: [
    { gain: "1 stylo", q: "Le trafic affilié payant augmente, mais pas la conversion. Où le retailer doit-il enquêter en premier ?", options: ["Le parcours onsite post-clic.", "Le mix d'éditeurs.", "Davantage de retargeting.", "Baisser les commissions partenaires."], feedback: "Le trafic est déjà arrivé sur le site. Commencez par la pertinence de la landing page, la continuité du message, la friction UX et la performance device. Changer d'éditeurs, de retargeting ou de commissions ne réparera pas un problème de conversion onsite." },
    { gain: "1 parapluie", q: "On est en juillet, il pleut à verse. Un visiteur vient d'un guide « choisir sa veste » d'un éditeur. Quels signaux doivent guider une expérience pertinente ? Sélectionnez toutes les réponses valides.", options: ["L'article référent et la source de trafic.", "La météo locale et la localisation.", "Le calendrier saisonnier seul.", "Les vues récentes de produits et catégories."], feedback: "Le contenu référent indique une intention, la météo et la localisation confirment la pertinence immédiate, et la navigation récente affine l'expérience. Le mois seul est un signal faible qui ne doit pas prévaloir sur le contexte en direct." },
    { gain: "", q: "Un acheteur saisit un code promo invalide au checkout. Quelle est la récupération la plus sûre ?", options: ["L'envoyer vers un site de cashback.", "Afficher toutes les offres publiques.", "Lui demander de continuer sans offre.", "Présenter une alternative éligible selon les règles de ciblage."], feedback: "Un code invalide indique une sensibilité à la promotion et une intention d'achat. Une alternative basée sur l'éligibilité peut récupérer la conversion tout en protégeant la marge. Renvoyer l'acheteur ailleurs ou exposer toutes les offres fait fuir de la valeur, tandis qu'ignorer l'erreur laisse la friction non résolue." },
    { gain: "", q: "Un panier de 320£ montre une hésitation répétée et une intention de sortie. Quelles vérifications doivent conditionner le feu vert d'une intervention ? Sélectionnez toutes les réponses valides.", options: ["La valeur du panier et la marge.", "La source de trafic et le profil visiteur.", "Les niveaux de stock et les priorités produit.", "Si l'intervention est susceptible de changer le résultat."], feedback: "Les quatre vérifications sont nécessaires. L'économie du panier définit la limite commerciale, la source et le profil établissent la pertinence, le stock et les priorités produit protègent les objectifs commerciaux, et l'incrémentalité probable détermine si une intervention est justifiée." },
    { gain: "", q: "Un acheteur ajoute une machine à espresso phare à son panier. Quelle étape suivante augmente le mieux le panier moyen sans perturber le parcours ?", options: ["Offrir une seconde machine à prix réduit.", "Recommander du café ou du détartrant pertinents.", "Attendre la prochaine visite.", "Promouvoir l'article sans rapport à plus forte marge."], feedback: "Des consommables pertinents complètent l'achat principal, augmentent le panier moyen et préservent la pertinence produit. Une seconde machine ou un produit sans rapport n'aideront probablement pas, et attendre fait manquer un moment de forte intention." },
    { gain: "", q: "Un produit est en rupture de stock. Quelles solutions peuvent préserver l'intention d'achat du visiteur ? Sélectionnez toutes les réponses valides.", options: ["Recommander une alternative proche disponible.", "Proposer un opt-in de retour en stock.", "Envoyer le visiteur vers la page d'accueil.", "Utiliser les vues produits, l'affinité catégorie et le stock en direct."], feedback: "Un produit alternatif garde le visiteur en shopping, un opt-in préserve la demande future, et les données comportementales + stock rendent la solution pertinente. Envoyer le visiteur vers la page d'accueil supprime le contexte et crée une impasse." },
    { gain: "1 mug kitsch avec la team Perfmaker", q: "Une marque veut utiliser la gamification pour les visiteurs venus de médias payants. Quels ingrédients doivent faire partie de l'activation ? Sélectionnez toutes les réponses valides.", options: ["Un contenu original et personnalisé.", "Un design créatif aligné avec la marque.", "Un ciblage précis connecté aux outils de la marque.", "Un objectif mesurable et un indicateur de succès défini."], feedback: "Les quatre ingrédients forment l'approche Perfmaker. La mécanique doit être construite pour l'audience et la marque, activée avec des données et intégrations pertinentes, et évaluée selon un résultat commercial clair." },
    { gain: "Le Perfmaker d'or", q: "Une offre Black Friday se termine dans deux heures, et un visiteur revient sur un article encore dans son panier. Quel signal doit apparaître ?", options: ["Une remise plus importante.", "Un vrai compte à rebours avec réassurance.", "Une prise de contrôle de campagne sur tout le site.", "Un délai discrètement prolongé."], feedback: "🎉 Un vrai compte à rebours et de la réassurance aident un visiteur récurrent à forte intention à se décider. Une remise plus importante peut éroder la marge, une prise de contrôle perturbe le parcours, et un délai artificiel ou prolongé nuit à la confiance." },
  ],
  en: [
    { gain: "1 pen", q: "Paid affiliate traffic is rising, but conversion is not. Where should the retailer investigate first?", options: ["The post-click on-site journey.", "The publisher mix.", "More retargeting.", "Lower partner commissions."], feedback: "The traffic has already reached the site. Start with landing-page relevance, message continuity, UX friction and device performance. Changing publishers, retargeting or commissions will not repair an on-site conversion problem." },
    { gain: "1 umbrella", q: "It is July and raining heavily. A visitor arrives from a publisher's jacket guide. Which signals should guide a relevant experience? Select all.", options: ["The referring article and traffic source.", "Local weather and location.", "The seasonal calendar alone.", "Recent product and category views."], feedback: "The referring content indicates intent, local weather and location confirm immediate relevance, and recent browsing refines the experience. The month alone is a weak signal and should not override live context." },
    { gain: "", q: "A shopper enters an invalid promo code at checkout. What is the safest recovery route?", options: ["Send them to a cashback site.", "Display every public offer.", "Ask them to continue without an offer.", "Present an eligible alternative based on targeting rules."], feedback: "An invalid code indicates promotion sensitivity and purchase intent. An eligibility-based alternative can recover conversion while protecting margin. Sending the shopper away or exposing every offer leaks value, while ignoring the error leaves the friction unresolved." },
    { gain: "", q: "A £320 basket shows repeated hesitation and exit intent. Which checks should determine whether an intervention receives a green light? Select all.", options: ["Basket value and margin.", "Traffic source and visitor profile.", "Stock levels and product priorities.", "Whether the intervention is likely to change the outcome."], feedback: "All four checks are required. Basket economics define the commercial limit, source and profile establish relevance, stock and product priorities protect trading goals, and likely incrementality determines whether an intervention is justified." },
    { gain: "", q: "A shopper adds a flagship espresso machine to their basket. Which next step is most likely to increase average order value without disrupting the journey?", options: ["Discount a second machine.", "Recommend relevant beans or descaler.", "Wait until the next visit.", "Promote the highest-margin unrelated item."], feedback: "Relevant consumables complement the main purchase, increase average order value and preserve product relevance. A second machine or an unrelated product is unlikely to help, while waiting misses a high-intent moment." },
    { gain: "", q: "A product is out of stock. Which rescue routes can preserve the visitor's purchase intent? Select all.", options: ["Recommend a close in-stock alternative.", "Offer a back-in-stock opt-in.", "Send the visitor to the home page.", "Use product views, category affinity and live stock data."], feedback: "An alternative product keeps the visitor shopping, an opt-in preserves future demand, and behavioural plus stock data makes the rescue relevant. Sending the visitor to the home page removes context and creates a dead end." },
    { gain: "1 kitschy mug with the Perfmaker team on it", q: "A brand wants to use gamification for visitors arriving from paid media. Which ingredients belong in the activation? Select all.", options: ["Original, customised content.", "Creative design aligned with the brand.", "Precise targeting connected to the brand's tools.", "A measurable objective and agreed success metric."], feedback: "All four ingredients form the Perfmaker approach. The mechanic should be built for the audience and brand, activated using relevant data and integrations, and assessed against a clear commercial outcome." },
    { gain: "The Golden Perfmaker", q: "A Black Friday offer closes in two hours and a visitor returns to an item still in their basket. Which sign should appear?", options: ["A deeper discount.", "A genuine countdown with reassurance.", "A full-site campaign takeover.", "A silently extended deadline."], feedback: "🎉 A genuine countdown and reassurance help a returning, high-intent visitor make a decision. A deeper discount may erode margin, a takeover disrupts the journey, and an artificial or extended deadline damages trust." },
  ],
  de: [
    { gain: "1 Kugelschreiber", q: "Der bezahlte Affiliate-Traffic steigt, die Conversion nicht. Wo sollte der Händler zuerst nachforschen?", options: ["Die Post-Click-On-Site-Journey.", "Den Publisher-Mix.", "Mehr Retargeting.", "Niedrigere Partnerprovisionen."], feedback: "Der Traffic ist bereits auf der Seite. Beginnen Sie mit Landingpage-Relevanz, Botschaftskontinuität, UX-Reibung und Geräte-Performance. Publisher, Retargeting oder Provisionen zu ändern, löst kein On-Site-Conversion-Problem." },
    { gain: "1 Regenschirm", q: "Es ist Juli und es regnet stark. Ein Besucher kommt über einen Jacken-Ratgeber eines Publishers. Welche Signale sollten eine relevante Experience leiten? Wählen Sie alle Zutreffenden.", options: ["Der verweisende Artikel und die Traffic-Quelle.", "Lokales Wetter und Standort.", "Allein der saisonale Kalender.", "Aktuelle Produkt- und Kategorieansichten."], feedback: "Der verweisende Content zeigt Absicht, lokales Wetter und Standort bestätigen die unmittelbare Relevanz, und aktuelles Browsing verfeinert die Experience. Der Monat allein ist ein schwaches Signal und sollte den Live-Kontext nicht überstimmen." },
    { gain: "", q: "Ein Käufer gibt beim Checkout einen ungültigen Gutscheincode ein. Was ist der sicherste Lösungsweg?", options: ["Ihn zu einer Cashback-Seite schicken.", "Alle öffentlichen Angebote anzeigen.", "Ihn bitten, ohne Angebot fortzufahren.", "Eine passende Alternative gemäß Targeting-Regeln anzeigen."], feedback: "Ein ungültiger Code zeigt Promotion-Sensibilität und Kaufabsicht. Eine eligibilitätsbasierte Alternative kann die Conversion retten und dabei die Marge schützen. Den Käufer wegzuschicken oder alle Angebote zu zeigen, verschenkt Wert, während das Ignorieren des Fehlers die Reibung ungelöst lässt." },
    { gain: "", q: "Ein Warenkorb über 320£ zeigt wiederholtes Zögern und Exit-Intent. Welche Prüfungen sollten über das grüne Licht für eine Intervention entscheiden? Wählen Sie alle Zutreffenden.", options: ["Warenkorbwert und Marge.", "Traffic-Quelle und Besucherprofil.", "Lagerbestände und Produktprioritäten.", "Ob die Intervention das Ergebnis wahrscheinlich ändert."], feedback: "Alle vier Prüfungen sind erforderlich. Die Warenkorb-Ökonomie definiert die kommerzielle Grenze, Quelle und Profil stellen Relevanz her, Lagerbestand und Produktprioritäten schützen die Handelsziele, und die wahrscheinliche Inkrementalität entscheidet, ob eine Intervention gerechtfertigt ist." },
    { gain: "", q: "Ein Käufer legt eine Premium-Espressomaschine in den Warenkorb. Welcher nächste Schritt erhöht am ehesten den durchschnittlichen Bestellwert, ohne die Journey zu stören?", options: ["Eine zweite Maschine rabattieren.", "Passende Kaffeebohnen oder Entkalker empfehlen.", "Bis zum nächsten Besuch warten.", "Das margenstärkste, unabhängige Produkt bewerben."], feedback: "Passende Verbrauchsmaterialien ergänzen den Hauptkauf, erhöhen den durchschnittlichen Bestellwert und wahren die Produktrelevanz. Eine zweite Maschine oder ein unabhängiges Produkt helfen wahrscheinlich nicht, und Warten verpasst einen Moment hoher Kaufabsicht." },
    { gain: "", q: "Ein Produkt ist nicht vorrätig. Welche Rettungswege können die Kaufabsicht des Besuchers bewahren? Wählen Sie alle Zutreffenden.", options: ["Eine ähnliche, verfügbare Alternative empfehlen.", "Ein Wieder-verfügbar-Opt-in anbieten.", "Den Besucher zur Startseite schicken.", "Produktansichten, Kategorieaffinität und Live-Lagerdaten nutzen."], feedback: "Ein alternatives Produkt hält den Besucher beim Einkaufen, ein Opt-in bewahrt zukünftige Nachfrage, und Verhaltens- plus Lagerdaten machen die Rettung relevant. Den Besucher zur Startseite zu schicken, entfernt den Kontext und schafft eine Sackgasse." },
    { gain: "1 kitschige Tasse mit dem Perfmaker-Team", q: "Eine Marke möchte Gamification für Besucher aus bezahlten Medien einsetzen. Welche Zutaten gehören in die Aktivierung? Wählen Sie alle Zutreffenden.", options: ["Originärer, individualisierter Content.", "Kreatives Design im Einklang mit der Marke.", "Präzises Targeting, verbunden mit den Tools der Marke.", "Ein messbares Ziel und eine vereinbarte Erfolgsmetrik."], feedback: "Alle vier Zutaten bilden den Perfmaker-Ansatz. Die Mechanik sollte für Zielgruppe und Marke gebaut, mit relevanten Daten und Integrationen aktiviert und anhand eines klaren kommerziellen Ergebnisses bewertet werden." },
    { gain: "Der goldene Perfmaker", q: "Ein Black-Friday-Angebot endet in zwei Stunden, und ein Besucher kehrt zu einem Artikel zurück, der noch im Warenkorb liegt. Welches Zeichen sollte erscheinen?", options: ["Ein tieferer Rabatt.", "Ein echter Countdown mit Rückversicherung.", "Eine Sitewide-Kampagnenübernahme.", "Eine stillschweigend verlängerte Frist."], feedback: "🎉 Ein echter Countdown und Rückversicherung helfen einem wiederkehrenden Besucher mit hoher Kaufabsicht bei der Entscheidung. Ein tieferer Rabatt kann die Marge schmälern, eine Übernahme stört die Journey, und eine künstliche oder verlängerte Frist schadet dem Vertrauen." },
  ],
  it: [
    { gain: "1 penna", q: "Il traffico affiliato a pagamento cresce, ma la conversione no. Dove dovrebbe indagare prima il retailer?", options: ["Il percorso on-site post-click.", "Il mix di publisher.", "Più retargeting.", "Commissioni partner più basse."], feedback: "Il traffico è già arrivato sul sito. Iniziate dalla pertinenza della landing page, dalla continuità del messaggio, dall'attrito UX e dalle performance del dispositivo. Cambiare publisher, retargeting o commissioni non risolve un problema di conversione on-site." },
    { gain: "1 ombrello", q: "È luglio e piove forte. Un visitatore arriva da una guida sui giacconi di un publisher. Quali segnali dovrebbero guidare un'esperienza pertinente? Selezionate tutte le risposte corrette.", options: ["L'articolo di riferimento e la fonte di traffico.", "Il meteo locale e la posizione.", "Solo il calendario stagionale.", "Le visualizzazioni recenti di prodotti e categorie."], feedback: "Il contenuto di riferimento indica l'intenzione, il meteo locale e la posizione confermano la rilevanza immediata, e la navigazione recente affina l'esperienza. Il mese da solo è un segnale debole e non dovrebbe prevalere sul contesto in tempo reale." },
    { gain: "", q: "Un acquirente inserisce un codice promo non valido al checkout. Qual è il percorso di recupero più sicuro?", options: ["Inviarlo a un sito di cashback.", "Mostrare tutte le offerte pubbliche.", "Chiedergli di continuare senza offerta.", "Presentare un'alternativa idonea secondo le regole di targeting."], feedback: "Un codice non valido indica sensibilità alla promozione e intenzione d'acquisto. Un'alternativa basata sull'idoneità può recuperare la conversione proteggendo il margine. Mandare via l'acquirente o mostrare tutte le offerte fa perdere valore, mentre ignorare l'errore lascia l'attrito irrisolto." },
    { gain: "", q: "Un carrello da 320£ mostra esitazione ripetuta e intenzione di uscita. Quali verifiche dovrebbero determinare il via libera a un intervento? Selezionate tutte le risposte corrette.", options: ["Il valore del carrello e il margine.", "La fonte di traffico e il profilo visitatore.", "I livelli di stock e le priorità di prodotto.", "Se l'intervento è probabile che cambi l'esito."], feedback: "Sono necessarie tutte e quattro le verifiche. L'economia del carrello definisce il limite commerciale, fonte e profilo stabiliscono la pertinenza, stock e priorità di prodotto proteggono gli obiettivi commerciali, e l'incrementalità probabile determina se un intervento è giustificato." },
    { gain: "", q: "Un acquirente aggiunge al carrello una macchina da espresso di punta. Quale passo successivo aumenta meglio il valore medio dell'ordine senza interrompere il percorso?", options: ["Scontare una seconda macchina.", "Consigliare caffè o decalcificante pertinenti.", "Aspettare la prossima visita.", "Promuovere l'articolo scorrelato con il margine più alto."], feedback: "I consumabili pertinenti completano l'acquisto principale, aumentano il valore medio dell'ordine e preservano la pertinenza del prodotto. Una seconda macchina o un prodotto scorrelato difficilmente aiutano, mentre aspettare fa perdere un momento ad alta intenzione." },
    { gain: "", q: "Un prodotto è esaurito. Quali soluzioni possono preservare l'intenzione d'acquisto del visitatore? Selezionate tutte le risposte corrette.", options: ["Consigliare un'alternativa simile disponibile.", "Offrire un opt-in per il rientro in stock.", "Inviare il visitatore alla home page.", "Usare visualizzazioni prodotto, affinità di categoria e dati di stock in tempo reale."], feedback: "Un prodotto alternativo mantiene il visitatore nello shopping, un opt-in preserva la domanda futura, e i dati comportamentali più lo stock rendono la soluzione pertinente. Inviare il visitatore alla home page rimuove il contesto e crea un vicolo cieco." },
    { gain: "1 tazza kitsch con il team Perfmaker", q: "Un brand vuole usare la gamification per i visitatori provenienti da media a pagamento. Quali ingredienti appartengono all'attivazione? Selezionate tutte le risposte corrette.", options: ["Contenuto originale e personalizzato.", "Design creativo allineato al brand.", "Targeting preciso collegato agli strumenti del brand.", "Un obiettivo misurabile e una metrica di successo concordata."], feedback: "Tutti e quattro gli ingredienti formano l'approccio Perfmaker. La meccanica dovrebbe essere costruita per il pubblico e il brand, attivata con dati e integrazioni pertinenti, e valutata rispetto a un risultato commerciale chiaro." },
    { gain: "Il Perfmaker d'oro", q: "Un'offerta Black Friday si chiude tra due ore, e un visitatore torna su un articolo ancora nel carrello. Quale segnale dovrebbe apparire?", options: ["Uno sconto maggiore.", "Un countdown reale con rassicurazione.", "Un takeover di campagna su tutto il sito.", "Una scadenza prolungata silenziosamente."], feedback: "🎉 Un countdown reale e la rassicurazione aiutano un visitatore di ritorno ad alta intenzione a decidere. Uno sconto maggiore può erodere il margine, un takeover interrompe il percorso, e una scadenza artificiale o prolungata danneggia la fiducia." },
  ],
  es: [
    { gain: "1 bolígrafo", q: "El tráfico de afiliación de pago crece, pero la conversión no. ¿Dónde debería investigar primero el retailer?", options: ["El recorrido on-site post-clic.", "El mix de publishers.", "Más retargeting.", "Comisiones de partners más bajas."], feedback: "El tráfico ya ha llegado al sitio. Empieza por la relevancia de la landing page, la continuidad del mensaje, la fricción UX y el rendimiento del dispositivo. Cambiar publishers, retargeting o comisiones no arregla un problema de conversión on-site." },
    { gain: "1 paraguas", q: "Es julio y llueve mucho. Un visitante llega desde una guía de chaquetas de un publisher. ¿Qué señales deberían guiar una experiencia relevante? Selecciona todas las que correspondan.", options: ["El artículo de referencia y la fuente de tráfico.", "El clima local y la ubicación.", "Únicamente el calendario estacional.", "Las vistas recientes de productos y categorías."], feedback: "El contenido de referencia indica intención, el clima local y la ubicación confirman la relevancia inmediata, y la navegación reciente refina la experiencia. El mes por sí solo es una señal débil y no debería primar sobre el contexto en vivo." },
    { gain: "", q: "Un comprador introduce un código promocional no válido en el checkout. ¿Cuál es la vía de recuperación más segura?", options: ["Enviarlo a un sitio de cashback.", "Mostrar todas las ofertas públicas.", "Pedirle que continúe sin oferta.", "Presentar una alternativa elegible según las reglas de segmentación."], feedback: "Un código no válido indica sensibilidad a la promoción e intención de compra. Una alternativa basada en la elegibilidad puede recuperar la conversión protegiendo el margen. Enviar al comprador fuera o mostrar todas las ofertas filtra valor, mientras que ignorar el error deja la fricción sin resolver." },
    { gain: "", q: "Una cesta de 320£ muestra dudas repetidas e intención de salida. ¿Qué comprobaciones deberían determinar si una intervención recibe luz verde? Selecciona todas las que correspondan.", options: ["El valor de la cesta y el margen.", "La fuente de tráfico y el perfil del visitante.", "Los niveles de stock y las prioridades de producto.", "Si es probable que la intervención cambie el resultado."], feedback: "Se necesitan las cuatro comprobaciones. La economía de la cesta define el límite comercial, la fuente y el perfil establecen la relevancia, el stock y las prioridades de producto protegen los objetivos comerciales, y la incrementalidad probable determina si una intervención está justificada." },
    { gain: "", q: "Un comprador añade una cafetera espresso insignia a su cesta. ¿Qué siguiente paso aumenta mejor el valor medio del pedido sin interrumpir el recorrido?", options: ["Descontar una segunda máquina.", "Recomendar café o descalcificador relevantes.", "Esperar a la próxima visita.", "Promocionar el artículo no relacionado con mayor margen."], feedback: "Los consumibles relevantes complementan la compra principal, aumentan el valor medio del pedido y preservan la relevancia del producto. Es poco probable que una segunda máquina o un producto no relacionado ayuden, mientras que esperar hace perder un momento de alta intención." },
    { gain: "", q: "Un producto está agotado. ¿Qué soluciones pueden preservar la intención de compra del visitante? Selecciona todas las que correspondan.", options: ["Recomendar una alternativa similar disponible.", "Ofrecer un opt-in de reposición de stock.", "Enviar al visitante a la página de inicio.", "Usar vistas de producto, afinidad de categoría y datos de stock en vivo."], feedback: "Un producto alternativo mantiene al visitante comprando, un opt-in preserva la demanda futura, y los datos de comportamiento más el stock hacen la solución relevante. Enviar al visitante a la página de inicio elimina el contexto y crea un callejón sin salida." },
    { gain: "1 taza kitsch con el equipo de Perfmaker", q: "Una marca quiere usar la gamificación para visitantes que llegan desde medios de pago. ¿Qué ingredientes pertenecen a la activación? Selecciona todas las que correspondan.", options: ["Contenido original y personalizado.", "Diseño creativo alineado con la marca.", "Segmentación precisa conectada a las herramientas de la marca.", "Un objetivo medible y una métrica de éxito acordada."], feedback: "Los cuatro ingredientes forman el enfoque Perfmaker. La mecánica debe construirse para la audiencia y la marca, activarse con datos e integraciones relevantes, y evaluarse frente a un resultado comercial claro." },
    { gain: "El Perfmaker de oro", q: "Una oferta de Black Friday cierra en dos horas, y un visitante vuelve a un artículo que sigue en su cesta. ¿Qué señal debería aparecer?", options: ["Un descuento mayor.", "Una cuenta atrás real con garantía.", "Un takeover de campaña en todo el sitio.", "Un plazo ampliado en silencio."], feedback: "🎉 Una cuenta atrás real y la garantía ayudan a un visitante recurrente de alta intención a decidirse. Un descuento mayor puede erosionar el margen, un takeover interrumpe el recorrido, y un plazo artificial o ampliado daña la confianza." },
  ],
};

export function t(ui: UiText, key: keyof UiText, vars?: Record<string, string | number>) {
  let str = ui[key];
  if (vars) {
    for (const k of Object.keys(vars)) {
      str = str.replace(`{${k}}`, String(vars[k]));
    }
  }
  return str;
}
