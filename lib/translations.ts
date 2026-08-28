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
    appSubtitle: "15 questions. Un entonnoir de conversion. Un Perfmaker d'or au bout.",
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
    appSubtitle: "15 questions. A conversion funnel. A Golden Perfmaker at the top.",
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
    appSubtitle: "15 Fragen. Ein Conversion-Funnel. Ganz oben: der goldene Perfmaker.",
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
    appSubtitle: "15 domande. Un funnel di conversione. Un Perfmaker d'oro in cima.",
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
    appSubtitle: "15 preguntas. Un embudo de conversión. Un Perfmaker de oro al final.",
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
    { gain: "1 stylo", q: "Le trafic affilié augmente, mais la conversion stagne. Où le retailer doit-il regarder en premier ?", options: ["Améliorer le parcours post-clic.", "Changer le mix d'éditeurs.", "Augmenter le retargeting.", "Réduire les commissions des partenaires."], feedback: "Le trafic est déjà payé. Réglez le parcours onsite avant d'en acheter davantage." },
    { gain: "1 parapluie", q: "Le client n'a aucune capacité de développement avant six mois. Que faites-vous ?", options: ["Attendre le prochain cycle de développement.", "Lancer une campagne email à la place.", "Activer via le MasterTag Awin.", "Commander un module onsite sur mesure."], feedback: "Avec le MasterTag actif, Perfmaker peut s'activer sans projet de développement." },
    { gain: "", q: "Le client craint que Perfmaker ne prenne le crédit d'attribution de l'éditeur. A-t-il raison ?", options: ["Oui, Perfmaker devient le dernier référent.", "Non, Awin garde le crédit d'attribution.", "Le crédit est partagé automatiquement.", "Ne montrer Perfmaker qu'aux visiteurs non-affiliés."], feedback: "Perfmaker améliore la conversion post-clic. Il ne remplace pas l'éditeur référent." },
    { gain: "", q: "On est en juillet, il pleut à verse. Le visiteur vient d'un guide « choisir sa veste ». Quels signaux comptent ? Sélectionnez toutes les réponses valides.", options: ["Utiliser le contenu et la source référents.", "Utiliser la météo locale et la localisation.", "Suivre uniquement le calendrier estival.", "Utiliser les vues produits passées, si connues."], feedback: "Combinez la source, le contexte réel et le comportement. Le calendrier seul n'est pas un contexte." },
    { gain: "", q: "Un acheteur saisit un code invalide au checkout. Quelle est la meilleure récupération ?", options: ["Retirer le champ code.", "Montrer toutes les offres publiques.", "Lui demander de continuer sans code.", "Proposer une alternative éligible."], feedback: "Un code invalide signale à la fois une friction et une intention. Ne récupérez que si les règles d'éligibilité le permettent." },
    { gain: "", q: "Un panier de 320£ montre une intention de sortie. Quels facteurs doivent façonner l'intervention ? Sélectionnez toutes les réponses valides.", options: ["Considérer la valeur du panier et la marge.", "Utiliser uniquement la source d'acquisition.", "Considérer le stock et les priorités produit.", "Évaluer si intervenir changerait le résultat."], feedback: "L'éligibilité combine l'économie, la priorité commerciale et l'intention — pas une étiquette de canal." },
    { gain: "", q: "Un visiteur récurrent a consulté plusieurs chaussures de running. Quelles actions ont du sens ? Sélectionnez toutes les réponses valides.", options: ["Montrer le même produit partout.", "Réorganiser le carrousel selon la navigation.", "Toujours mettre en avant la chaussure la plus rentable.", "Donner un rôle différent à chaque format."], feedback: "Le contexte doit coordonner les formats, pas imposer un seul produit partout." },
    { gain: "", q: "Un acheteur ajoute une machine à espresso haut de gamme à son panier. Que doit-il se passer ensuite ?", options: ["Offrir une seconde machine à prix réduit.", "Suggérer du café ou du détartrant pertinents.", "Attendre la prochaine visite.", "Pousser l'article cuisine à plus forte marge."], feedback: "Des ajouts pertinents et bien synchronisés paraissent utiles, pas insistants." },
    { gain: "", q: "Le client veut une roue à gagner parce qu'un concurrent en a une. Que faut-il clarifier en premier ? Sélectionnez toutes les réponses valides.", options: ["Définir l'objectif et l'audience.", "Choisir l'animation la plus tape-à-l'œil.", "Copier la mécanique du rival.", "Confirmer les besoins de données, le timing et les contraintes."], feedback: "La roue n'est pas la stratégie. L'objectif et la faisabilité doivent choisir la mécanique." },
    { gain: "", q: "Un visiteur mobile lit un guide puis revisite un produit premium. Quel est le meilleur plan de génération de leads ?", options: ["Montrer le formulaire complet dès l'arrivée.", "Demander l'email sans offrir de valeur.", "Proposer un opt-in court après engagement.", "Utiliser le même délai pour tout le monde."], feedback: "Déclenchez après un engagement réel, gardez le formulaire court, et offrez une vraie valeur en échange." },
    { gain: "", q: "On est début octobre et le client veut un Black Friday plus fort. Que fait-on en premier ?", options: ["Construire une audience consentie dès maintenant.", "Lancer la remise aujourd'hui.", "Se concentrer sur le média jusqu'en novembre.", "Verrouiller la création avant de collecter des données."], feedback: "Le Black Friday ne commence pas le vendredi. Octobre sert à construire l'audience et apprendre." },
    { gain: "", q: "L'offre Black Friday se termine dans deux heures. Le visiteur revient sur un article de son panier. Que faire maintenant ?", options: ["Proposer une remise plus importante.", "Montrer un vrai compte à rebours et de la réassurance.", "Remplacer la page par la campagne.", "Prolonger discrètement le délai."], feedback: "Une intention réelle plus une vraie deadline demandent de la clarté et de la réassurance, pas une remise plus forte." },
    { gain: "", q: "Le lendemain de Noël, un acheteur retourne le pull pas tout à fait à sa taille offert par Tatie. Où est l'opportunité ?", options: ["Traiter le remboursement et attendre.", "Montrer le parcours de vente standard.", "Le guider vers un échange pertinent.", "Pousser un avoir quoi qu'il arrive."], feedback: "Un retour est une revisite engagée. Retenez le client, ne vous limitez pas au remboursement." },
    { gain: "1 mug kitsch avec la team Perfmaker", q: "Le revenu a augmenté. Perfmaker a-t-il créé de la valeur incrémentale ? Que faites-vous ensuite ?", options: ["Comparer à la période précédente.", "Rapporter le revenu assisté et dernier-clic.", "Comparer groupes exposés et témoins.", "Prolonger la campagne et tester plus tard."], feedback: "Le revenu ne prouve rien seul. Comparez groupes exposés et témoins, puis examinez l'uplift et la marge." },
    { gain: "Le Perfmaker d'or", q: "Le retailer veut plus de conversions sans remises générales. Quelle voie recommandez-vous ?", options: ["Construire un seul système de décision guidé par les signaux.", "Optimiser chaque format isolément.", "Cibler la forte intention et tester plus tard.", "Étendre un cas d'usage sans groupe de contrôle."], feedback: "🎉 La voie gagnante relie signaux, audience, création, timing et mesure. Vous êtes officiellement « Partenaire Certifié Perfmaker »." },
  ],
  en: [
    { gain: "1 pen", q: "Affiliate traffic is growing, but conversion is flat. Where should the retailer look first?", options: ["Improve the post-click journey.", "Change the publisher mix.", "Increase retargeting.", "Cut partner commissions."], feedback: "The traffic is already paid for. Fix the on-site journey before buying more." },
    { gain: "1 umbrella", q: "The client has no development capacity for six months. What should you do?", options: ["Wait for the next development cycle.", "Run an email campaign instead.", "Activate through the Awin MasterTag.", "Commission a custom on-site module."], feedback: "With the MasterTag live, Perfmaker can activate without a development project." },
    { gain: "", q: "The client fears Perfmaker will take the publisher's attribution credit. Are they right?", options: ["Yes, Perfmaker becomes the last referrer.", "No, Awin keeps the attribution credit.", "The credit is split automatically.", "Only show Perfmaker to non-affiliate visitors."], feedback: "Perfmaker improves post-click conversion. It does not replace the referring publisher." },
    { gain: "", q: "It is July and pouring. The visitor came from a jacket guide. Which signals matter? Select all.", options: ["Use the referring content and source.", "Use the local weather and location.", "Follow the summer calendar alone.", "Use past product views, if known."], feedback: "Combine source, real-world context and behaviour. The calendar alone is not context." },
    { gain: "", q: "A shopper enters an invalid code at checkout. What is the best recovery?", options: ["Remove the code field.", "Show every public offer.", "Ask them to continue without one.", "Offer an eligible alternative."], feedback: "An invalid code signals friction and intent. Recover only when eligibility rules allow." },
    { gain: "", q: "A £320 basket shows exit intent. Which factors should shape the intervention? Select all.", options: ["Consider basket value and margin.", "Use the acquisition source alone.", "Consider stock and product priorities.", "Assess whether stepping in could change the outcome."], feedback: "Eligibility combines economics, commercial priority and intent, not a channel label." },
    { gain: "", q: "A returning visitor has viewed several running shoes. Which actions make sense? Select all.", options: ["Show the same product everywhere.", "Reorder the carousel using browsing data.", "Always lead with the highest-margin shoe.", "Give each format a different role."], feedback: "Context should coordinate the formats, not force one product into every placement." },
    { gain: "", q: "A shopper adds a fancy espresso machine to the basket. What should happen next?", options: ["Discount a second machine.", "Suggest relevant beans or descaler.", "Wait until the next visit.", "Push the highest-margin kitchen item."], feedback: "Relevant, well-timed add-ons feel helpful rather than pushy." },
    { gain: "", q: "The client wants a prize wheel because a rival has one. What should you clarify first? Select all.", options: ["Define the objective and audience.", "Choose the flashiest animation.", "Copy the rival's mechanic.", "Confirm data needs, timing and constraints."], feedback: "The wheel is not the strategy. Purpose and feasibility should choose the mechanic." },
    { gain: "", q: "A mobile visitor reads a guide, then revisits a premium product. What is the best lead plan?", options: ["Show the full form on arrival.", "Ask for an email with no value.", "Offer a short opt-in after engagement.", "Use the same delay for everyone."], feedback: "Trigger after meaningful engagement, keep the form short and offer relevant value in return." },
    { gain: "", q: "It is early October and the client wants a bigger Black Friday. What comes first?", options: ["Build a permissioned audience now.", "Launch the discount today.", "Focus on media until November.", "Lock the creative before gathering data."], feedback: "Black Friday does not start on Friday. October is for audience building and learning." },
    { gain: "", q: "The Black Friday deal ends in two hours. The visitor returns to a basket item. What now?", options: ["Offer a deeper discount.", "Show a real countdown and reassurance.", "Replace the page with the campaign.", "Quietly extend the deadline."], feedback: "Real intent plus a real deadline needs clarity and reassurance, not a bigger discount." },
    { gain: "", q: "On Boxing Day, a shopper returns Auntie's not-quite-right jumper. Where is the opportunity?", options: ["Process the refund and wait.", "Show the standard sale journey.", "Guide them to a relevant swap.", "Push store credit regardless."], feedback: "A return is an engaged revisit. Keep the customer, do not just process the refund." },
    { gain: "1 kitschy mug with the Perfmaker team on it", q: "Revenue is up. Did Perfmaker create incremental value? What should you do next?", options: ["Compare with the previous period.", "Report assisted and last-click revenue.", "Compare exposed and control groups.", "Extend the campaign and test later."], feedback: "Revenue is not proof. Compare exposed and control groups, then review uplift and margin." },
    { gain: "The Golden Perfmaker", q: "The retailer wants more conversions without blanket discounts. Which route should you recommend?", options: ["Build one signal-led decision system.", "Optimise each format in isolation.", "Target high intent and test later.", "Scale one use case without a control."], feedback: "🎉 The winning route links signals, audience, creative, timing and measurement. You are now officially a « Certified Perfmaker Partner »." },
  ],
  de: [
    { gain: "1 Kugelschreiber", q: "Der Affiliate-Traffic wächst, aber die Conversion stagniert. Wo sollte der Händler zuerst hinschauen?", options: ["Die Post-Click-Journey verbessern.", "Den Publisher-Mix ändern.", "Retargeting erhöhen.", "Partnerprovisionen kürzen."], feedback: "Der Traffic ist bereits bezahlt. Verbessern Sie erst die On-Site-Journey, bevor Sie mehr kaufen." },
    { gain: "1 Regenschirm", q: "Der Kunde hat sechs Monate lang keine Entwicklerkapazität. Was tun Sie?", options: ["Auf den nächsten Entwicklungszyklus warten.", "Stattdessen eine E-Mail-Kampagne starten.", "Über den Awin MasterTag aktivieren.", "Ein individuelles On-Site-Modul beauftragen."], feedback: "Ist der MasterTag aktiv, kann Perfmaker ohne Entwicklungsprojekt aktiviert werden." },
    { gain: "", q: "Der Kunde befürchtet, Perfmaker nehme dem Publisher die Attribution weg. Hat er recht?", options: ["Ja, Perfmaker wird zum letzten Referrer.", "Nein, Awin behält die Attribution.", "Das Guthaben wird automatisch aufgeteilt.", "Perfmaker nur nicht-affiliierten Besuchern zeigen."], feedback: "Perfmaker verbessert die Post-Click-Conversion. Es ersetzt nicht den verweisenden Publisher." },
    { gain: "", q: "Es ist Juli und es schüttet. Der Besucher kam über einen Jacken-Ratgeber. Welche Signale zählen? Wählen Sie alle Zutreffenden.", options: ["Den verweisenden Content und die Quelle nutzen.", "Das lokale Wetter und den Standort nutzen.", "Sich allein auf den Sommerkalender verlassen.", "Frühere Produktansichten nutzen, sofern bekannt."], feedback: "Kombinieren Sie Quelle, realen Kontext und Verhalten. Der Kalender allein ist kein Kontext." },
    { gain: "", q: "Ein Käufer gibt beim Checkout einen ungültigen Code ein. Was ist die beste Lösung?", options: ["Das Code-Feld entfernen.", "Alle öffentlichen Angebote zeigen.", "Ihn bitten, ohne Code fortzufahren.", "Eine passende Alternative anbieten."], feedback: "Ein ungültiger Code signalisiert Reibung und Absicht. Nur lösen, wenn die Eligibilitätsregeln es erlauben." },
    { gain: "", q: "Ein Warenkorb über 320£ zeigt Exit-Intent. Welche Faktoren sollten die Intervention bestimmen? Wählen Sie alle Zutreffenden.", options: ["Warenkorbwert und Marge berücksichtigen.", "Sich allein auf die Akquisitionsquelle verlassen.", "Lagerbestand und Produktprioritäten berücksichtigen.", "Prüfen, ob ein Eingreifen das Ergebnis ändern könnte."], feedback: "Eligibilität kombiniert Wirtschaftlichkeit, kommerzielle Priorität und Absicht — nicht ein Kanal-Label." },
    { gain: "", q: "Ein wiederkehrender Besucher hat mehrere Laufschuhe angesehen. Welche Maßnahmen sind sinnvoll? Wählen Sie alle Zutreffenden.", options: ["Überall dasselbe Produkt zeigen.", "Das Karussell anhand von Browsing-Daten neu ordnen.", "Immer den margenstärksten Schuh voranstellen.", "Jedem Format eine andere Rolle geben."], feedback: "Der Kontext sollte Formate koordinieren, nicht ein Produkt in jede Platzierung zwingen." },
    { gain: "", q: "Ein Käufer legt eine hochwertige Espressomaschine in den Warenkorb. Was sollte als Nächstes passieren?", options: ["Eine zweite Maschine rabattieren.", "Passende Bohnen oder Entkalker vorschlagen.", "Bis zum nächsten Besuch warten.", "Das margenstärkste Küchenprodukt pushen."], feedback: "Relevante, gut getimte Zusatzprodukte wirken hilfreich statt aufdringlich." },
    { gain: "", q: "Der Kunde möchte ein Glücksrad, weil ein Konkurrent eines hat. Was sollten Sie zuerst klären? Wählen Sie alle Zutreffenden.", options: ["Ziel und Zielgruppe definieren.", "Die auffälligste Animation wählen.", "Die Mechanik des Konkurrenten kopieren.", "Datenbedarf, Timing und Einschränkungen bestätigen."], feedback: "Das Rad ist nicht die Strategie. Zweck und Machbarkeit sollten die Mechanik bestimmen." },
    { gain: "", q: "Ein mobiler Besucher liest einen Ratgeber und besucht dann erneut ein Premiumprodukt. Was ist der beste Lead-Plan?", options: ["Das vollständige Formular sofort zeigen.", "Die E-Mail ohne Gegenwert abfragen.", "Ein kurzes Opt-in nach Engagement anbieten.", "Für alle dieselbe Verzögerung nutzen."], feedback: "Erst nach echtem Engagement auslösen, das Formular kurz halten und relevanten Wert im Gegenzug bieten." },
    { gain: "", q: "Es ist Anfang Oktober, und der Kunde möchte einen stärkeren Black Friday. Was kommt zuerst?", options: ["Jetzt eine Permission-Audience aufbauen.", "Den Rabatt heute starten.", "Sich bis November auf Media konzentrieren.", "Das Creative fixieren, bevor Daten gesammelt werden."], feedback: "Black Friday beginnt nicht am Freitag. Der Oktober dient dem Audience-Aufbau und dem Lernen." },
    { gain: "", q: "Das Black-Friday-Angebot endet in zwei Stunden. Der Besucher kehrt zu einem Warenkorbartikel zurück. Was jetzt?", options: ["Einen tieferen Rabatt anbieten.", "Einen echten Countdown und Rückversicherung zeigen.", "Die Seite durch die Kampagne ersetzen.", "Die Frist stillschweigend verlängern."], feedback: "Echte Absicht plus eine echte Deadline braucht Klarheit und Rückversicherung, keinen größeren Rabatt." },
    { gain: "", q: "Am zweiten Weihnachtsfeiertag bringt ein Käufer Tante Erikas nicht ganz passenden Pullover zurück. Wo liegt die Chance?", options: ["Die Rückerstattung abwickeln und warten.", "Den Standard-Sale-Journey zeigen.", "Zu einem passenden Umtausch führen.", "Ein Store-Guthaben forcieren, egal was."], feedback: "Eine Retoure ist ein engagierter Wiederbesuch. Binden Sie den Kunden, statt nur die Rückerstattung abzuwickeln." },
    { gain: "1 kitschige Tasse mit dem Perfmaker-Team", q: "Der Umsatz ist gestiegen. Hat Perfmaker inkrementellen Wert geschaffen? Was tun Sie als Nächstes?", options: ["Mit der Vorperiode vergleichen.", "Unterstützten und Last-Click-Umsatz berichten.", "Exponierte und Kontrollgruppen vergleichen.", "Die Kampagne verlängern und später testen."], feedback: "Umsatz allein ist kein Beweis. Exponierte und Kontrollgruppen vergleichen, dann Uplift und Marge prüfen." },
    { gain: "Der goldene Perfmaker", q: "Der Händler möchte mehr Conversions ohne pauschale Rabatte. Welchen Weg empfehlen Sie?", options: ["Ein einziges signalgesteuertes Entscheidungssystem aufbauen.", "Jedes Format isoliert optimieren.", "Hohe Absicht anvisieren und später testen.", "Einen Use Case ohne Kontrollgruppe skalieren."], feedback: "🎉 Der Gewinnerweg verbindet Signale, Zielgruppe, Creative, Timing und Messung. Sie sind jetzt offiziell „Zertifizierter Perfmaker-Partner“." },
  ],
  it: [
    { gain: "1 penna", q: "Il traffico affiliato cresce, ma la conversione resta piatta. Dove dovrebbe guardare prima il retailer?", options: ["Migliorare il percorso post-click.", "Cambiare il mix di publisher.", "Aumentare il retargeting.", "Tagliare le commissioni dei partner."], feedback: "Il traffico è già pagato. Sistemate il percorso on-site prima di comprarne altro." },
    { gain: "1 ombrello", q: "Il cliente non avrà capacità di sviluppo per sei mesi. Cosa fate?", options: ["Aspettare il prossimo ciclo di sviluppo.", "Lanciare invece una campagna email.", "Attivare tramite il MasterTag Awin.", "Commissionare un modulo on-site su misura."], feedback: "Con il MasterTag attivo, Perfmaker può attivarsi senza un progetto di sviluppo." },
    { gain: "", q: "Il cliente teme che Perfmaker tolga il credito di attribuzione al publisher. Ha ragione?", options: ["Sì, Perfmaker diventa l'ultimo referrer.", "No, Awin mantiene il credito di attribuzione.", "Il credito viene ripartito automaticamente.", "Mostrare Perfmaker solo ai visitatori non affiliati."], feedback: "Perfmaker migliora la conversione post-click. Non sostituisce il publisher referente." },
    { gain: "", q: "È luglio e piove a dirotto. Il visitatore arriva da una guida sui giacconi. Quali segnali contano? Selezionate tutte le risposte corrette.", options: ["Usare il contenuto e la fonte di riferimento.", "Usare il meteo locale e la posizione.", "Seguire solo il calendario estivo.", "Usare le visualizzazioni prodotto passate, se note."], feedback: "Combinate fonte, contesto reale e comportamento. Il calendario da solo non è contesto." },
    { gain: "", q: "Un acquirente inserisce un codice non valido al checkout. Qual è il miglior recupero?", options: ["Rimuovere il campo codice.", "Mostrare tutte le offerte pubbliche.", "Chiedergli di continuare senza codice.", "Proporre un'alternativa idonea."], feedback: "Un codice non valido segnala attrito e intenzione. Recuperate solo se le regole di idoneità lo consentono." },
    { gain: "", q: "Un carrello da 320£ mostra intenzione di uscita. Quali fattori dovrebbero definire l'intervento? Selezionate tutte le risposte corrette.", options: ["Considerare il valore del carrello e il margine.", "Usare solo la fonte di acquisizione.", "Considerare lo stock e le priorità di prodotto.", "Valutare se intervenire potrebbe cambiare l'esito."], feedback: "L'idoneità combina economia, priorità commerciale e intenzione, non un'etichetta di canale." },
    { gain: "", q: "Un visitatore di ritorno ha visualizzato diverse scarpe da running. Quali azioni hanno senso? Selezionate tutte le risposte corrette.", options: ["Mostrare lo stesso prodotto ovunque.", "Riordinare il carosello usando i dati di navigazione.", "Mettere sempre in primo piano la scarpa più redditizia.", "Dare a ogni formato un ruolo diverso."], feedback: "Il contesto dovrebbe coordinare i formati, non forzare un prodotto in ogni posizionamento." },
    { gain: "", q: "Un acquirente aggiunge al carrello una macchina da espresso sofisticata. Cosa dovrebbe succedere dopo?", options: ["Scontare una seconda macchina.", "Suggerire caffè o decalcificante pertinenti.", "Aspettare la prossima visita.", "Spingere l'articolo da cucina più redditizio."], feedback: "Aggiunte pertinenti e ben tempificate risultano utili, non invadenti." },
    { gain: "", q: "Il cliente vuole una ruota dei premi perché un rivale ne ha una. Cosa dovreste chiarire per primo? Selezionate tutte le risposte corrette.", options: ["Definire l'obiettivo e il pubblico.", "Scegliere l'animazione più appariscente.", "Copiare la meccanica del rivale.", "Confermare esigenze di dati, tempistica e vincoli."], feedback: "La ruota non è la strategia. Scopo e fattibilità dovrebbero scegliere la meccanica." },
    { gain: "", q: "Un visitatore mobile legge una guida, poi rivisita un prodotto premium. Qual è il miglior piano lead?", options: ["Mostrare subito il modulo completo.", "Chiedere l'email senza offrire valore.", "Offrire un opt-in breve dopo l'engagement.", "Usare lo stesso ritardo per tutti."], feedback: "Attivate dopo un engagement reale, mantenete il modulo breve e offrite valore pertinente in cambio." },
    { gain: "", q: "È inizio ottobre e il cliente vuole un Black Friday più forte. Cosa viene prima?", options: ["Costruire subito un'audience con permesso.", "Lanciare oggi lo sconto.", "Concentrarsi sui media fino a novembre.", "Bloccare la creatività prima di raccogliere dati."], feedback: "Il Black Friday non inizia il venerdì. Ottobre serve a costruire l'audience e imparare." },
    { gain: "", q: "L'offerta Black Friday termina tra due ore. Il visitatore torna su un articolo del carrello. Cosa fare ora?", options: ["Offrire uno sconto maggiore.", "Mostrare un countdown reale e rassicurazione.", "Sostituire la pagina con la campagna.", "Prolungare silenziosamente la scadenza."], feedback: "Un'intenzione reale più una scadenza reale richiedono chiarezza e rassicurazione, non uno sconto maggiore." },
    { gain: "", q: "Il giorno di Santo Stefano, un acquirente restituisce il maglione non proprio adatto della zia. Dov'è l'opportunità?", options: ["Elaborare il rimborso e aspettare.", "Mostrare il percorso di saldi standard.", "Guidarlo verso uno scambio pertinente.", "Spingere un buono acquisto comunque."], feedback: "Un reso è una revisita impegnata. Fidelizzate il cliente, non limitatevi al rimborso." },
    { gain: "1 tazza kitsch con il team Perfmaker", q: "Il fatturato è aumentato. Perfmaker ha creato valore incrementale? Cosa fate dopo?", options: ["Confrontare con il periodo precedente.", "Riportare il fatturato assistito e last-click.", "Confrontare i gruppi esposti e di controllo.", "Prolungare la campagna e testare più avanti."], feedback: "Il fatturato da solo non è una prova. Confrontate i gruppi esposti e di controllo, poi rivedete uplift e margine." },
    { gain: "Il Perfmaker d'oro", q: "Il retailer vuole più conversioni senza sconti generalizzati. Quale percorso consigliate?", options: ["Costruire un unico sistema decisionale guidato dai segnali.", "Ottimizzare ogni formato in isolamento.", "Puntare sull'alta intenzione e testare più avanti.", "Scalare un caso d'uso senza controllo."], feedback: "🎉 Il percorso vincente collega segnali, audience, creatività, tempistica e misurazione. Ora sei ufficialmente un « Partner Certificato Perfmaker »." },
  ],
  es: [
    { gain: "1 bolígrafo", q: "El tráfico de afiliación crece, pero la conversión está plana. ¿Dónde debería mirar primero el retailer?", options: ["Mejorar el recorrido post-clic.", "Cambiar el mix de publishers.", "Aumentar el retargeting.", "Recortar las comisiones de los partners."], feedback: "El tráfico ya está pagado. Arregla el recorrido on-site antes de comprar más." },
    { gain: "1 paraguas", q: "El cliente no tendrá capacidad de desarrollo durante seis meses. ¿Qué haces?", options: ["Esperar al próximo ciclo de desarrollo.", "Lanzar una campaña de email en su lugar.", "Activar mediante el MasterTag de Awin.", "Encargar un módulo on-site a medida."], feedback: "Con el MasterTag activo, Perfmaker puede activarse sin un proyecto de desarrollo." },
    { gain: "", q: "El cliente teme que Perfmaker le quite el crédito de atribución al publisher. ¿Tiene razón?", options: ["Sí, Perfmaker se convierte en el último referente.", "No, Awin conserva el crédito de atribución.", "El crédito se reparte automáticamente.", "Mostrar Perfmaker solo a visitantes no afiliados."], feedback: "Perfmaker mejora la conversión post-clic. No sustituye al publisher que refiere." },
    { gain: "", q: "Es julio y llueve a cántaros. El visitante llegó desde una guía de chaquetas. ¿Qué señales importan? Selecciona todas las que correspondan.", options: ["Usar el contenido y la fuente de referencia.", "Usar el clima local y la ubicación.", "Seguir únicamente el calendario de verano.", "Usar las vistas de producto pasadas, si se conocen."], feedback: "Combina la fuente, el contexto real y el comportamiento. El calendario por sí solo no es contexto." },
    { gain: "", q: "Un comprador introduce un código no válido en el checkout. ¿Cuál es la mejor recuperación?", options: ["Eliminar el campo de código.", "Mostrar todas las ofertas públicas.", "Pedirle que continúe sin código.", "Ofrecer una alternativa elegible."], feedback: "Un código no válido señala fricción e intención. Recupera solo cuando las reglas de elegibilidad lo permitan." },
    { gain: "", q: "Una cesta de 320£ muestra intención de salida. ¿Qué factores deberían definir la intervención? Selecciona todas las que correspondan.", options: ["Considerar el valor de la cesta y el margen.", "Usar únicamente la fuente de adquisición.", "Considerar el stock y las prioridades de producto.", "Evaluar si intervenir podría cambiar el resultado."], feedback: "La elegibilidad combina economía, prioridad comercial e intención, no una etiqueta de canal." },
    { gain: "", q: "Un visitante recurrente ha visto varias zapatillas de running. ¿Qué acciones tienen sentido? Selecciona todas las que correspondan.", options: ["Mostrar el mismo producto en todas partes.", "Reordenar el carrusel según los datos de navegación.", "Destacar siempre la zapatilla más rentable.", "Dar a cada formato un papel distinto."], feedback: "El contexto debe coordinar los formatos, no forzar un producto en cada posición." },
    { gain: "", q: "Un comprador añade una cafetera espresso sofisticada a la cesta. ¿Qué debería pasar a continuación?", options: ["Descontar una segunda máquina.", "Sugerir café o descalcificador relevantes.", "Esperar a la próxima visita.", "Impulsar el artículo de cocina más rentable."], feedback: "Los complementos relevantes y bien sincronizados se sienten útiles, no invasivos." },
    { gain: "", q: "El cliente quiere una ruleta de premios porque un rival tiene una. ¿Qué deberías aclarar primero? Selecciona todas las que correspondan.", options: ["Definir el objetivo y la audiencia.", "Elegir la animación más llamativa.", "Copiar la mecánica del rival.", "Confirmar las necesidades de datos, el timing y las limitaciones."], feedback: "La ruleta no es la estrategia. El propósito y la viabilidad deben elegir la mecánica." },
    { gain: "", q: "Un visitante móvil lee una guía y luego vuelve a un producto premium. ¿Cuál es el mejor plan de leads?", options: ["Mostrar el formulario completo al llegar.", "Pedir el email sin ofrecer valor.", "Ofrecer un opt-in breve tras el engagement.", "Usar el mismo retraso para todos."], feedback: "Actívalo tras un engagement real, mantén el formulario corto y ofrece valor relevante a cambio." },
    { gain: "", q: "Es principios de octubre y el cliente quiere un Black Friday más fuerte. ¿Qué va primero?", options: ["Construir ahora una audiencia con permiso.", "Lanzar hoy el descuento.", "Centrarse en medios hasta noviembre.", "Fijar la creatividad antes de recopilar datos."], feedback: "El Black Friday no empieza el viernes. Octubre es para construir audiencia y aprender." },
    { gain: "", q: "La oferta de Black Friday termina en dos horas. El visitante vuelve a un artículo de su cesta. ¿Qué hacer ahora?", options: ["Ofrecer un descuento mayor.", "Mostrar una cuenta atrás real y garantía.", "Sustituir la página por la campaña.", "Ampliar discretamente el plazo."], feedback: "La intención real más un plazo real piden claridad y garantía, no un descuento mayor." },
    { gain: "", q: "El día después de Navidad, un comprador devuelve el jersey no del todo acertado de la tía. ¿Dónde está la oportunidad?", options: ["Tramitar el reembolso y esperar.", "Mostrar el recorrido de rebajas estándar.", "Guiarlo hacia un cambio relevante.", "Forzar un crédito en tienda de todos modos."], feedback: "Una devolución es una revisita comprometida. Retén al cliente, no te limites a tramitar el reembolso." },
    { gain: "1 taza kitsch con el equipo de Perfmaker", q: "Los ingresos han subido. ¿Creó Perfmaker valor incremental? ¿Qué haces a continuación?", options: ["Comparar con el periodo anterior.", "Reportar ingresos asistidos y de último clic.", "Comparar grupos expuestos y de control.", "Ampliar la campaña y probar más tarde."], feedback: "Los ingresos por sí solos no son prueba. Compara grupos expuestos y de control, y revisa el uplift y el margen." },
    { gain: "El Perfmaker de oro", q: "El retailer quiere más conversiones sin descuentos generalizados. ¿Qué vía recomiendas?", options: ["Construir un único sistema de decisión guiado por señales.", "Optimizar cada formato de forma aislada.", "Apuntar a la alta intención y probar más tarde.", "Escalar un caso de uso sin control."], feedback: "🎉 La vía ganadora conecta señales, audiencia, creatividad, timing y medición. Ahora eres oficialmente «Partner Certificado Perfmaker»." },
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
