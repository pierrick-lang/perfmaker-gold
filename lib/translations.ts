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
}

export const UI: Record<Locale, UiText> = {
  fr: {
    appTitle: "Qui veut gagner... un Perfmaker d'or ?",
    appSubtitle: "10 questions. Un entonnoir de conversion. Un Perfmaker d'or au bout.",
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
    winTitle: "🏆 Le Perfmaker d'or",
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
  },
  en: {
    appTitle: "Who Wants to Win... a Golden Perfmaker?",
    appSubtitle: "10 questions. A conversion funnel. A Golden Perfmaker at the top.",
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
    winTitle: "🏆 The Golden Perfmaker",
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
  },
  de: {
    appTitle: "Wer gewinnt... den goldenen Perfmaker?",
    appSubtitle: "10 Fragen. Ein Conversion-Funnel. Ganz oben: der goldene Perfmaker.",
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
    winTitle: "🏆 Der goldene Perfmaker",
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
  },
  it: {
    appTitle: "Chi vuol vincere... un Perfmaker d'oro?",
    appSubtitle: "10 domande. Un funnel di conversione. Un Perfmaker d'oro in cima.",
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
    winTitle: "🏆 Il Perfmaker d'oro",
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
  },
  es: {
    appTitle: "¿Quién quiere ganar... un Perfmaker de oro?",
    appSubtitle: "10 preguntas. Un embudo de conversión. Un Perfmaker de oro al final.",
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
    winTitle: "🏆 El Perfmaker de oro",
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
  },
};

export const QUESTIONS: Record<Locale, QuestionText[]> = {
  fr: [
    { gain: "1 stylo", q: "Que fait réellement Perfmaker ?", options: ["Nous rendons les sites plus beaux.", "Nous achetons davantage de trafic.", "Nous aidons les sites e-commerce à mieux convertir leur trafic existant.", "Nous remplaçons l'agence média."], feedback: "Le trafic est déjà payé. Évitons qu'il reparte les mains vides — Perfmaker transforme le trafic acquis en conversion et en engagement." },
    { gain: "1 parapluie", q: "À quel moment Perfmaker intervient-il principalement ?", options: ["Avant le clic.", "Après le clic, sur le site de la marque.", "Après la livraison.", "Uniquement par e-mail."], feedback: "Awin amène le visiteur à la porte. Perfmaker évite qu'il reparte aussitôt : c'est un moteur post-clic, onsite." },
    { gain: "", q: "Que faut-il, techniquement, pour lancer une activation Perfmaker ?", options: ["Le MasterTag Awin, sans développement spécifique.", "Un long chantier de développement sur mesure.", "Une nouvelle stack e-commerce.", "Refondre entièrement le site."], feedback: "Pas de refonte, pas de sprint de six mois : un tag, et c'est parti. L'activation est 100% managée." },
    { gain: "", q: "James arrive depuis Google Ads. Emma revient depuis une campagne CRM. Doivent-ils voir la même expérience ?", options: ["Oui, puisqu'ils arrivent sur la même page.", "Non, leur source et leur intention sont différentes."], feedback: "Same page, different story. Perfmaker personnalise selon la source et l'intention du visiteur, pas seulement selon la page." },
    { gain: "", q: "Quel produit faut-il mettre en avant en priorité ?", options: ["Toujours le best-seller.", "Toujours le produit le moins cher.", "Celui qui sert le mieux l'objectif commercial dans le contexte de visite.", "Celui dont la photo est la plus jolie."], feedback: "Le best-seller est un résultat, pas une stratégie de merchandising. On adapte la mise en avant à l'objectif : marge, lancement, stock ou météo." },
    { gain: "", q: "Pourquoi une mécanique de gamification peut-elle mieux performer qu'une simple bannière ?", options: ["Parce qu'elle est plus colorée.", "Parce qu'elle crée une interaction, capte l'attention et peut collecter un opt-in.", "Parce que tout le monde aime tourner une roue.", "Parce qu'elle remplace la stratégie promotionnelle."], feedback: "La roue n'est pas la stratégie. L'audience que vous construisez avec, si." },
    { gain: "", q: "Un visiteur saisit un code promo invalide au moment de payer. Quelle est la meilleure réaction ?", options: ["Afficher uniquement « Code invalide ».", "Le laisser repartir chercher un autre code.", "Proposer une alternative pertinente si les règles business le permettent.", "Espérer qu'il paie quand même."], feedback: "Il est déjà au checkout : ce n'est pas le moment de lui donner une raison de repartir. Le Dynamic Coupon détecte le code invalide et propose une alternative valide en temps réel." },
    { gain: "", q: "Votre produit phare va bientôt être en rupture. Quelle est la meilleure action ?", options: ["Afficher un message de stock faible et proposer, si utile, une alternative pertinente.", "Ne rien dire jusqu'au checkout.", "Montrer « rupture imminente » à tous les visiteurs, même sans donnée fiable.", "Commander plus de stock dans les 30 secondes."], feedback: "Une vraie urgence convertit, une fausse se remarque. Scarcity ciblée + recommandation d'alternative pertinente." },
    { gain: "1 mug kitsch avec la team Perfmaker", q: "À l'approche de Noël, quelle inquiétude peut devenir plus importante que le prix ?", options: ["La date de livraison.", "La couleur du bouton.", "Le nombre d'abonnés Instagram.", "Le logo de la marque."], feedback: "En décembre, la réassurance peut convertir mieux qu'une remise supplémentaire : compte à rebours jusqu'à la date de livraison garantie." },
    { gain: "Le Perfmaker d'or", q: "Quelle phrase résume le mieux Perfmaker ?", options: ["Nous interrompons les visiteurs.", "Nous affichons des pop-ups partout.", "Nous créons la bonne interaction, au bon moment, pour le bon visiteur.", "Nous espérons que tout se passera bien."], feedback: "🎉 Félicitations ! Vous êtes officiellement « Partenaire Certifié Perfmaker »." },
  ],
  en: [
    { gain: "1 pen", q: "What does Perfmaker actually do?", options: ["We make websites prettier.", "We buy more traffic.", "We help e-commerce sites convert their existing traffic better.", "We replace the media agency."], feedback: "The traffic is already paid for. Let's make sure it doesn't leave empty-handed — Perfmaker turns acquired traffic into conversion and engagement." },
    { gain: "1 umbrella", q: "When does Perfmaker mainly step in?", options: ["Before the click.", "After the click, on the brand's site.", "After delivery.", "Only by email."], feedback: "Awin brings the visitor to the door. Perfmaker stops them leaving right away: it's a post-click, onsite engine." },
    { gain: "", q: "What's technically needed to launch a Perfmaker activation?", options: ["The Awin MasterTag, no specific development.", "A long custom development project.", "A brand-new e-commerce stack.", "A full website rebuild."], feedback: "No rebuild, no six-month sprint: one tag, and you're live. Fully managed activation." },
    { gain: "", q: "James arrives from Google Ads. Emma comes back through a CRM campaign. Should they see the same experience?", options: ["Yes, since they land on the same page.", "No, their source and intent are different."], feedback: "Same page, different story. Perfmaker personalises by source and intent, not just by page." },
    { gain: "", q: "Which product should be featured first?", options: ["Always the best-seller.", "Always the cheapest product.", "Whichever best serves the business goal in this visit's context.", "Whichever has the nicest photo."], feedback: "A best-seller is an outcome, not a merchandising strategy. Featured products should match the goal: margin, launch, stock or weather." },
    { gain: "", q: "Why can a gamified experience outperform a simple banner?", options: ["Because it's more colourful.", "Because it creates interaction, grabs attention and can capture an opt-in.", "Because everyone loves spinning a wheel.", "Because it replaces the promotional strategy."], feedback: "The wheel isn't the strategy. The audience you build with it is." },
    { gain: "", q: "A visitor enters an invalid promo code at checkout. What's the best reaction?", options: ["Only show \"Invalid code\".", "Let them leave to find another code.", "Offer a relevant alternative, if business rules allow it.", "Hope they pay anyway."], feedback: "They're already at checkout — this isn't the moment to give them a reason to leave. Dynamic Coupon detects the invalid code and offers a valid alternative in real time." },
    { gain: "", q: "Your flagship product is about to run out of stock. What's the best action?", options: ["Show a low-stock message and suggest a relevant alternative, if useful.", "Say nothing until checkout.", "Show \"almost sold out\" to every visitor, even without reliable data.", "Order more stock within 30 seconds."], feedback: "Real urgency converts. Fake urgency gets noticed. Targeted scarcity + a relevant alternative." },
    { gain: "1 kitschy mug with the Perfmaker team on it", q: "As Christmas approaches, which worry can matter more than price?", options: ["The delivery date.", "The button colour.", "The number of Instagram followers.", "The brand logo."], feedback: "In December, reassurance can convert better than another discount: a countdown to a guaranteed delivery date." },
    { gain: "The Golden Perfmaker", q: "Which sentence best sums up Perfmaker?", options: ["We interrupt visitors.", "We show pop-ups everywhere.", "We create the right interaction, at the right moment, for the right visitor.", "We hope for the best."], feedback: "🎉 Congratulations! You are now officially a « Certified Perfmaker Partner »." },
  ],
  de: [
    { gain: "1 Kugelschreiber", q: "Was macht Perfmaker eigentlich?", options: ["Wir machen Websites hübscher.", "Wir kaufen mehr Traffic.", "Wir helfen E-Commerce-Websites, ihren bestehenden Traffic besser zu konvertieren.", "Wir ersetzen die Media-Agentur."], feedback: "Der Traffic ist bereits bezahlt. Sorgen wir dafür, dass er nicht leer ausgeht — Perfmaker verwandelt gewonnenen Traffic in Konversion und Engagement." },
    { gain: "1 Regenschirm", q: "Wann greift Perfmaker hauptsächlich ein?", options: ["Vor dem Klick.", "Nach dem Klick, auf der Website der Marke.", "Nach der Lieferung.", "Nur per E-Mail."], feedback: "Awin bringt den Besucher zur Tür. Perfmaker verhindert, dass er sofort wieder geht: eine Post-Click-Engine direkt auf der Website." },
    { gain: "", q: "Was ist technisch nötig, um eine Perfmaker-Aktivierung zu starten?", options: ["Der Awin MasterTag, ohne spezielle Entwicklung.", "Ein langes individuelles Entwicklungsprojekt.", "Einen komplett neuen E-Commerce-Stack.", "Einen kompletten Website-Relaunch."], feedback: "Kein Relaunch, kein Sechs-Monats-Sprint: ein Tag, und los geht's. Vollständig verwaltete Aktivierung." },
    { gain: "", q: "James kommt über Google Ads. Emma kehrt über eine CRM-Kampagne zurück. Sollten beide dieselbe Erfahrung sehen?", options: ["Ja, da sie auf derselben Seite landen.", "Nein, ihre Quelle und Absicht sind unterschiedlich."], feedback: "Gleiche Seite, andere Geschichte. Perfmaker personalisiert nach Quelle und Absicht, nicht nur nach Seite." },
    { gain: "", q: "Welches Produkt sollte zuerst hervorgehoben werden?", options: ["Immer der Bestseller.", "Immer das günstigste Produkt.", "Das, was dem Geschäftsziel im Kontext dieses Besuchs am besten dient.", "Das mit dem schönsten Foto."], feedback: "Ein Bestseller ist ein Ergebnis, keine Merchandising-Strategie. Die Hervorhebung sollte sich am Ziel orientieren: Marge, Launch, Bestand oder Wetter." },
    { gain: "", q: "Warum kann eine Gamification-Mechanik besser abschneiden als ein einfaches Banner?", options: ["Weil es bunter ist.", "Weil es Interaktion schafft, Aufmerksamkeit weckt und ein Opt-in einsammeln kann.", "Weil jeder gerne an einem Rad dreht.", "Weil es die Promo-Strategie ersetzt."], feedback: "Das Rad ist nicht die Strategie. Die Zielgruppe, die Sie damit aufbauen, schon." },
    { gain: "", q: "Ein Besucher gibt beim Bezahlen einen ungültigen Gutscheincode ein. Was ist die beste Reaktion?", options: ["Nur „Ungültiger Code“ anzeigen.", "Ihn zur Suche nach einem anderen Code weiterschicken.", "Eine passende Alternative anbieten, wenn die Geschäftsregeln es erlauben.", "Hoffen, dass er trotzdem bezahlt."], feedback: "Er ist bereits im Checkout — jetzt ist nicht der Moment, ihm einen Grund zum Gehen zu geben. Dynamic Coupon erkennt den ungültigen Code und bietet in Echtzeit eine gültige Alternative." },
    { gain: "", q: "Ihr Topprodukt wird bald ausverkauft sein. Was ist die beste Maßnahme?", options: ["Einen Hinweis auf geringen Bestand anzeigen und, falls sinnvoll, eine passende Alternative vorschlagen.", "Bis zum Checkout nichts sagen.", "Allen Besuchern „bald ausverkauft“ zeigen, auch ohne verlässliche Daten.", "Innerhalb von 30 Sekunden mehr Bestand bestellen."], feedback: "Echte Dringlichkeit konvertiert. Falsche Dringlichkeit fällt auf. Gezielte Knappheit + passende Alternative." },
    { gain: "1 kitschige Tasse mit dem Perfmaker-Team", q: "Welche Sorge kann rund um Weihnachten wichtiger werden als der Preis?", options: ["Das Lieferdatum.", "Die Farbe des Buttons.", "Die Anzahl der Instagram-Follower.", "Das Markenlogo."], feedback: "Im Dezember kann Rückversicherung besser konvertieren als ein weiterer Rabatt: ein Countdown bis zum garantierten Lieferdatum." },
    { gain: "Der goldene Perfmaker", q: "Welcher Satz beschreibt Perfmaker am besten?", options: ["Wir unterbrechen Besucher.", "Wir zeigen überall Pop-ups.", "Wir schaffen die richtige Interaktion, im richtigen Moment, für den richtigen Besucher.", "Wir hoffen einfach das Beste."], feedback: "🎉 Herzlichen Glückwunsch! Sie sind jetzt offiziell „Zertifizierter Perfmaker-Partner“." },
  ],
  it: [
    { gain: "1 penna", q: "Cosa fa davvero Perfmaker?", options: ["Rendiamo i siti più belli.", "Compriamo più traffico.", "Aiutiamo i siti e-commerce a convertire meglio il traffico che hanno già.", "Sostituiamo l'agenzia media."], feedback: "Il traffico è già pagato. Evitiamo che se ne vada a mani vuote — Perfmaker trasforma il traffico acquisito in conversione e coinvolgimento." },
    { gain: "1 ombrello", q: "In quale momento interviene principalmente Perfmaker?", options: ["Prima del clic.", "Dopo il clic, sul sito del brand.", "Dopo la consegna.", "Solo via e-mail."], feedback: "Awin porta il visitatore alla porta. Perfmaker evita che se ne vada subito: è un motore post-click, onsite." },
    { gain: "", q: "Cosa serve tecnicamente per lanciare un'attivazione Perfmaker?", options: ["Il MasterTag Awin, senza sviluppo specifico.", "Un lungo progetto di sviluppo su misura.", "Un nuovo stack e-commerce.", "Rifare completamente il sito."], feedback: "Niente restyling, niente sprint di sei mesi: un tag, e si parte. Attivazione gestita al 100%." },
    { gain: "", q: "James arriva da Google Ads. Emma torna da una campagna CRM. Devono vedere la stessa esperienza?", options: ["Sì, dato che arrivano sulla stessa pagina.", "No, la loro origine e intenzione sono diverse."], feedback: "Stessa pagina, storia diversa. Perfmaker personalizza in base all'origine e all'intenzione del visitatore, non solo alla pagina." },
    { gain: "", q: "Quale prodotto va messo in evidenza per primo?", options: ["Sempre il best-seller.", "Sempre il prodotto più economico.", "Quello che serve meglio l'obiettivo commerciale nel contesto di questa visita.", "Quello con la foto più bella."], feedback: "Il best-seller è un risultato, non una strategia di merchandising. La messa in evidenza va adattata all'obiettivo: margine, lancio, stock o meteo." },
    { gain: "", q: "Perché una meccanica di gamification può performare meglio di un semplice banner?", options: ["Perché è più colorata.", "Perché crea interazione, cattura l'attenzione e può raccogliere un opt-in.", "Perché a tutti piace far girare una ruota.", "Perché sostituisce la strategia promozionale."], feedback: "La ruota non è la strategia. Lo è l'audience che costruisci con essa." },
    { gain: "", q: "Un visitatore inserisce un codice promo non valido al momento del pagamento. Qual è la reazione migliore?", options: ["Mostrare solo «Codice non valido».", "Lasciarlo andare a cercare un altro codice.", "Proporre un'alternativa pertinente, se le regole di business lo consentono.", "Sperare che paghi comunque."], feedback: "È già al checkout: non è il momento di dargli un motivo per andarsene. Il Dynamic Coupon rileva il codice non valido e propone un'alternativa valida in tempo reale." },
    { gain: "", q: "Il vostro prodotto di punta sta per esaurirsi. Qual è l'azione migliore?", options: ["Mostrare un messaggio di scorte basse e proporre, se utile, un'alternativa pertinente.", "Non dire nulla fino al checkout.", "Mostrare «esaurimento imminente» a tutti i visitatori, anche senza dati affidabili.", "Ordinare altro stock in 30 secondi."], feedback: "Un'urgenza reale converte. Una falsa si nota. Scarsità mirata + alternativa pertinente." },
    { gain: "1 tazza kitsch con il team Perfmaker", q: "Con l'avvicinarsi del Natale, quale preoccupazione può diventare più importante del prezzo?", options: ["La data di consegna.", "Il colore del pulsante.", "Il numero di follower su Instagram.", "Il logo del brand."], feedback: "A dicembre, la rassicurazione può convertire meglio di un altro sconto: un conto alla rovescia fino alla data di consegna garantita." },
    { gain: "Il Perfmaker d'oro", q: "Quale frase riassume meglio Perfmaker?", options: ["Interrompiamo i visitatori.", "Mostriamo pop-up ovunque.", "Creiamo l'interazione giusta, al momento giusto, per il visitatore giusto.", "Speriamo che vada tutto bene."], feedback: "🎉 Congratulazioni! Sei ufficialmente un « Partner Certificato Perfmaker »." },
  ],
  es: [
    { gain: "1 bolígrafo", q: "¿Qué hace realmente Perfmaker?", options: ["Hacemos que los sitios sean más bonitos.", "Compramos más tráfico.", "Ayudamos a los sitios de e-commerce a convertir mejor el tráfico que ya tienen.", "Sustituimos a la agencia de medios."], feedback: "El tráfico ya está pagado. Evitemos que se vaya con las manos vacías — Perfmaker convierte el tráfico adquirido en conversión y engagement." },
    { gain: "1 paraguas", q: "¿En qué momento interviene principalmente Perfmaker?", options: ["Antes del clic.", "Después del clic, en el sitio de la marca.", "Después de la entrega.", "Solo por correo electrónico."], feedback: "Awin lleva al visitante hasta la puerta. Perfmaker evita que se vaya enseguida: es un motor post-clic, onsite." },
    { gain: "", q: "¿Qué se necesita técnicamente para lanzar una activación de Perfmaker?", options: ["El MasterTag de Awin, sin desarrollo específico.", "Un largo proyecto de desarrollo a medida.", "Un nuevo stack de e-commerce.", "Rediseñar todo el sitio."], feedback: "Sin rediseño, sin sprint de seis meses: un tag, y ya está en marcha. Activación gestionada al 100%." },
    { gain: "", q: "James llega desde Google Ads. Emma vuelve a través de una campaña de CRM. ¿Deberían ver la misma experiencia?", options: ["Sí, ya que llegan a la misma página.", "No, su origen y su intención son diferentes."], feedback: "Misma página, historia diferente. Perfmaker personaliza según el origen y la intención del visitante, no solo la página." },
    { gain: "", q: "¿Qué producto hay que destacar en primer lugar?", options: ["Siempre el más vendido.", "Siempre el más barato.", "El que mejor sirva al objetivo comercial en el contexto de esta visita.", "El que tenga la foto más bonita."], feedback: "El más vendido es un resultado, no una estrategia de merchandising. Hay que adaptar lo destacado al objetivo: margen, lanzamiento, stock o clima." },
    { gain: "", q: "¿Por qué una mecánica de gamificación puede rendir mejor que un simple banner?", options: ["Porque es más colorida.", "Porque crea interacción, capta la atención y puede recoger un opt-in.", "Porque a todos les gusta girar una ruleta.", "Porque sustituye la estrategia promocional."], feedback: "La ruleta no es la estrategia. La audiencia que construyes con ella, sí." },
    { gain: "", q: "Un visitante introduce un código promocional no válido al pagar. ¿Cuál es la mejor reacción?", options: ["Mostrar solo «Código no válido».", "Dejar que se vaya a buscar otro código.", "Ofrecer una alternativa pertinente, si las reglas de negocio lo permiten.", "Esperar que pague igualmente."], feedback: "Ya está en el checkout: no es el momento de darle un motivo para irse. Dynamic Coupon detecta el código no válido y ofrece una alternativa válida en tiempo real." },
    { gain: "", q: "Su producto estrella está a punto de agotarse. ¿Cuál es la mejor acción?", options: ["Mostrar un mensaje de stock bajo y proponer, si es útil, una alternativa pertinente.", "No decir nada hasta el checkout.", "Mostrar «agotamiento inminente» a todos los visitantes, incluso sin datos fiables.", "Pedir más stock en 30 segundos."], feedback: "Una urgencia real convierte. Una falsa se nota. Escasez dirigida + alternativa pertinente." },
    { gain: "1 taza kitsch con el equipo de Perfmaker", q: "Al acercarse la Navidad, ¿qué preocupación puede volverse más importante que el precio?", options: ["La fecha de entrega.", "El color del botón.", "El número de seguidores en Instagram.", "El logo de la marca."], feedback: "En diciembre, la tranquilidad puede convertir mejor que otro descuento: una cuenta atrás hasta la fecha de entrega garantizada." },
    { gain: "El Perfmaker de oro", q: "¿Qué frase resume mejor a Perfmaker?", options: ["Interrumpimos a los visitantes.", "Mostramos pop-ups por todas partes.", "Creamos la interacción correcta, en el momento correcto, para el visitante correcto.", "Esperamos que todo salga bien."], feedback: "🎉 ¡Felicidades! Ahora eres oficialmente «Partner Certificado Perfmaker»." },
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
