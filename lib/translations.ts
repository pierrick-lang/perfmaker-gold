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
    { gain: "1 stylo", q: "Le trafic affilié a augmenté, mais la conversion stagne. Où le retailer doit-il enquêter en premier ?", options: ["Commencer par améliorer le parcours client post-clic.", "Affiner le mix d'éditeurs pour attirer des visiteurs plus qualifiés.", "Augmenter la fréquence de retargeting sur la campagne.", "Réduire les commissions pour tous les partenaires."], feedback: "Le trafic est déjà payé. Diagnostiquez le parcours onsite avant d'acheter plus de trafic." },
    { gain: "1 parapluie", q: "Un client aime l'idée mais n'a aucune capacité de développement avant six mois. Quelle est votre meilleure réponse ?", options: ["Réserver un créneau dans le prochain cycle de développement.", "Recommander une campagne CRM plus simple à la place.", "Vérifier le MasterTag Awin et cadrer une activation managée.", "Demander à l'agence de construire un module onsite sur mesure."], feedback: "Avec le MasterTag déjà en place, Perfmaker peut s'activer sans projet de développement sur mesure." },
    { gain: "", q: "Un client demande si Perfmaker va retirer le crédit d'attribution de l'éditeur à l'origine de la visite. Que répondez-vous ?", options: ["Oui. Perfmaker devient le référent final du parcours.", "Non. L'attribution Awin reste inchangée, Perfmaker améliore la conversion post-clic.", "Le crédit est automatiquement partagé entre Perfmaker et l'éditeur.", "Perfmaker ne devrait être montré qu'aux visiteurs non-affiliés."], feedback: "Perfmaker augmente la valeur du trafic Awin ; il ne remplace pas l'éditeur." },
    { gain: "", q: "On est en juillet, il pleut à verse, et le visiteur vient d'un guide « choisir sa veste » d'un éditeur. Quels signaux doivent façonner l'expérience ? Sélectionnez toutes les réponses valides.", options: ["Utiliser le contenu référent et le contexte d'acquisition.", "Utiliser la météo locale et la localisation du visiteur.", "Suivre uniquement le calendrier de campagne estival.", "Utiliser l'historique de navigation produit/catégorie, si disponible."], feedback: "Combinez la source, le contexte réel et le comportement. Le calendrier seul n'est pas un contexte." },
    { gain: "", q: "Un acheteur saisit un code promo invalide au checkout, créant une friction immédiate. Quelle est la meilleure récupération ?", options: ["Retirer le champ code promo du checkout.", "Montrer à l'acheteur toutes les offres publiques actuellement disponibles.", "Demander à l'acheteur de continuer sans offre.", "Proposer une alternative éligible si les règles business le permettent."], feedback: "Un code invalide est à la fois une friction et un fort signal d'intention d'achat. La récupération reste conditionnée aux règles." },
    { gain: "", q: "Un visiteur avec un panier de 320£ montre une intention de sortie. Quels facteurs doivent déterminer si et comment intervenir ? Sélectionnez toutes les réponses valides.", options: ["Considérer la valeur du panier, la marge et le coût d'intervention acceptable.", "Utiliser le partenaire d'acquisition comme seule règle d'éligibilité.", "Considérer les niveaux de stock actuels et les priorités produit.", "Évaluer si une incitation ou une réassurance pourrait changer le résultat."], feedback: "L'éligibilité combine l'économie, la priorité commerciale et l'intention — pas une étiquette de canal." },
    { gain: "", q: "Un visiteur récurrent a déjà consulté plusieurs chaussures de running. Quelles actions onsite pourraient être pertinentes ? Sélectionnez toutes les réponses valides.", options: ["Pousser le même produit prioritaire sur tous les formats.", "Réorganiser le carrousel selon les signaux de navigation et de revisite.", "Toujours mettre en avant la chaussure à plus forte marge.", "Utiliser différents formats pour la découverte, la priorité commerciale et la réassurance."], feedback: "Le contexte doit coordonner les formats sans imposer le même produit partout." },
    { gain: "", q: "Un acheteur vient d'ajouter une machine à espresso plutôt haut de gamme à son panier. Quelle est la meilleure étape suivante ?", options: ["Lui proposer une seconde machine à prix réduit.", "Recommander des accessoires pertinents, comme du café ou du détartrant, au bon moment.", "Attendre sa prochaine visite avant de recommander quoi que ce soit.", "Promouvoir le produit cuisine à plus forte marge, quel qu'il soit."], feedback: "La meilleure vente additionnelle paraît utile parce qu'elle est pertinente et bien synchronisée." },
    { gain: "", q: "Un client veut une roue à gagner parce qu'un concurrent en a une. Que devez-vous clarifier avant de choisir la mécanique ? Sélectionnez toutes les réponses valides.", options: ["Définir l'objectif de campagne, l'audience et l'échange de valeur.", "Choisir la mécanique avec les animations les plus impressionnantes.", "Identifier quelle création du concurrent copier.", "Confirmer les besoins de collecte de données, le timing et les contraintes techniques."], feedback: "La roue n'est pas la stratégie. L'objectif et la faisabilité déterminent la mécanique." },
    { gain: "", q: "Un visiteur mobile lit un guide d'achat puis revisite un produit premium. Quel est le meilleur plan de génération de leads ?", options: ["Montrer le formulaire de lead complet dès son arrivée.", "Demander son email à la sortie, sans offrir de valeur additionnelle.", "Déclencher un opt-in court et pertinent après engagement, avec un échange de valeur adapté.", "Montrer le même formulaire à tous les visiteurs après 60 secondes."], feedback: "Une bonne capture de leads combine un timing guidé par le signal, une valeur pertinente et une friction minimale." },
    { gain: "", q: "On est début octobre, et le client veut de meilleurs résultats au Black Friday. Que recommandez-vous en premier ?", options: ["Commencer à construire une audience consentie et apprendre des signaux.", "Lancer immédiatement la remise Black Friday.", "Se concentrer sur le média et traiter le parcours onsite en novembre.", "Finaliser la création de campagne avant de collecter des données d'audience."], feedback: "Le Black Friday ne commence pas le vendredi : octobre sert à construire l'audience et apprendre." },
    { gain: "", q: "Une vraie offre Black Friday se termine dans deux heures, et le visiteur revient sur un produit encore dans son panier. Que doit-il se passer ?", options: ["Proposer au visiteur une remise encore plus importante.", "Montrer un compte à rebours exact, un rappel de panier et une réassurance sur la livraison.", "Remplacer la page produit par une prise de contrôle de campagne sitewide.", "Prolonger discrètement le délai s'il ne convertit pas."], feedback: "Une intention répétée plus une vraie deadline appellent de la clarté et de la réassurance — pas une remise plus profonde." },
    { gain: "1 mug kitsch avec la team Perfmaker", q: "Le revenu de la campagne a augmenté, mais le client veut savoir si Perfmaker a créé de la valeur incrémentale. Que faites-vous ?", options: ["Comparer le revenu à la période précédente.", "Rapporter le revenu assisté aux côtés du revenu dernier-clic.", "Comparer groupes exposés et témoins, puis examiner l'incrémentalité et la marge.", "Prolonger la campagne maintenant et tester l'incrémentalité plus tard."], feedback: "Le revenu est utile. La décision a besoin de l'impact incrémental et de la valeur commerciale." },
    { gain: "", q: "C'est le lendemain de Noël, et un acheteur revient avec le pull pas tout à fait à sa taille offert par Tatie. Où est l'opportunité commerciale ?", options: ["Prioriser le remboursement et attendre une future visite.", "Montrer le même parcours de vente qu'à n'importe quel autre visiteur.", "Guider l'acheteur vers un échange pertinent ou une nouvelle découverte.", "Pousser un avoir quelle que soit l'intention de l'acheteur."], feedback: "Un retour est une revisite engagée : retenez le client, ne vous contentez pas de traiter le remboursement." },
    { gain: "Le Perfmaker d'or", q: "Un retailer veut plus de conversions sans dépendre de remises générales. Quelle voie commerciale recommandez-vous ?", options: ["Construire un système de décision reliant signaux, audience, création, timing et mesure.", "Optimiser chaque format onsite séparément et garder un ciblage large.", "Cibler les visiteurs à forte intention maintenant et introduire des tests plus tard.", "Lancer un cas d'usage fort et l'étendre sans groupe de contrôle."], feedback: "🎉 La voie gagnante est un système de décision, pas une collection de tactiques isolées. Vous êtes officiellement « Partenaire Certifié Perfmaker »." },
  ],
  en: [
    { gain: "1 pen", q: "Affiliate traffic has increased, but conversion remains flat. Where should the retailer investigate first?", options: ["Start by improving the post-click customer journey.", "Refine the publisher mix to attract higher-intent visitors.", "Increase retargeting frequency across the campaign.", "Reduce commission rates for all partners."], feedback: "The traffic is already paid for. Diagnose the on-site journey before buying more." },
    { gain: "1 umbrella", q: "A client likes the idea but has no development capacity for six months. What is your best response?", options: ["Reserve a slot in the next development cycle.", "Recommend a simpler CRM campaign instead.", "Check the Awin MasterTag and scope a managed activation.", "Ask the agency to build a custom on-site module."], feedback: "With the MasterTag live, Perfmaker can activate without a bespoke development project." },
    { gain: "", q: "A client asks whether Perfmaker will take attribution credit from the publisher that generated the visit. How should you respond?", options: ["Yes. Perfmaker becomes the final referrer in the journey.", "No. Awin attribution remains, while Perfmaker improves post-click conversion.", "The credit is automatically split between Perfmaker and the publisher.", "Perfmaker should only be shown to non-affiliate visitors."], feedback: "Perfmaker grows the value of Awin traffic; it does not replace the publisher." },
    { gain: "", q: "It is July, pouring with rain, and the visitor arrived from a publisher's jacket guide. Which signals should shape the experience? Select all.", options: ["Use the referring content and acquisition context.", "Use the visitor's local weather and location.", "Follow the summer campaign calendar on its own.", "Use previous product or category views, when available."], feedback: "Combine source, real-world context and behaviour. The calendar alone is not context." },
    { gain: "", q: "A shopper enters an invalid promo code at checkout, creating immediate friction. What is the best recovery?", options: ["Remove the promo-code field from the checkout.", "Show the shopper every currently available public offer.", "Ask the shopper to continue without an offer.", "Offer an eligible alternative when the business rules allow."], feedback: "An invalid code is both friction and a strong purchase-intent signal. Recovery stays conditional." },
    { gain: "", q: "A visitor with a £320 basket shows exit intent. Which factors should determine whether and how you intervene? Select all.", options: ["Consider the basket value, margin and affordable intervention cost.", "Use the acquisition partner as the sole eligibility rule.", "Consider current stock levels and product priorities.", "Assess whether an incentive or reassurance could change the outcome."], feedback: "Eligibility combines economics, commercial priority and intent—not a channel label." },
    { gain: "", q: "A returning visitor has already viewed several running shoes. Which on-site actions could be relevant? Select all.", options: ["Push the same priority product through every format.", "Reorder the carousel using browsing and revisit signals.", "Always lead with the shoe that has the highest margin.", "Use different formats for discovery, commercial priority and reassurance."], feedback: "Context should coordinate formats without forcing the same product everywhere." },
    { gain: "", q: "A shopper has just added a rather fancy espresso machine to their basket. What is the most helpful next step?", options: ["Offer them a second machine at a discount.", "Recommend relevant add-ons, such as beans or descaler, at the right moment.", "Wait until their next visit before making a recommendation.", "Promote whichever kitchen product has the highest margin."], feedback: "The best cross-sell feels useful because it is relevant and well timed." },
    { gain: "", q: "A client wants a spin-the-wheel because a competitor has one. What should you clarify before choosing the mechanic? Select all.", options: ["Define the campaign objective, audience and value exchange.", "Choose the mechanic with the most impressive animations.", "Identify which competitor creative should be copied.", "Confirm the data-capture needs, timing and technical constraints."], feedback: "The wheel is not the strategy. Purpose and feasibility determine the mechanic." },
    { gain: "", q: "A mobile visitor reads a buying guide and then revisits a premium product. What is the best lead-generation plan?", options: ["Show the complete lead form as soon as they land.", "Request their email on exit without offering additional value.", "Trigger a short, relevant opt-in after engagement, with a matched value exchange.", "Show the same form to every visitor after 60 seconds."], feedback: "Strong lead capture combines signal-led timing, relevant value and minimal friction." },
    { gain: "", q: "It is early October, and the client wants stronger Black Friday results. What should you recommend first?", options: ["Start building a permissioned audience and learning from signals.", "Launch the Black Friday discount immediately.", "Focus on media and address the on-site journey in November.", "Finalise the campaign creative before collecting audience data."], feedback: "Black Friday does not start on Friday: October is for audience building and learning." },
    { gain: "", q: "A genuine Black Friday offer ends in two hours, and the visitor returns to a product still in their basket. What should happen?", options: ["Offer the visitor a deeper discount.", "Show an accurate countdown, basket reminder and delivery reassurance.", "Replace the product page with a sitewide campaign takeover.", "Quietly extend the deadline if they do not convert."], feedback: "Repeated intent plus a real deadline calls for clarity and reassurance—not a deeper discount." },
    { gain: "1 kitschy mug with the Perfmaker team on it", q: "Campaign revenue has increased, but the client wants to know whether Perfmaker created incremental value. What should you do?", options: ["Compare the revenue with the previous period.", "Report the assisted revenue alongside last-click revenue.", "Compare exposed and control groups, then review incrementality and margin.", "Extend the campaign now and test incrementality later."], feedback: "Revenue is useful. The decision needs incremental impact and commercial value." },
    { gain: "", q: "It is Boxing Day, and a shopper returns with Auntie's not-quite-right jumper. Where is the commercial opportunity?", options: ["Prioritise the refund and wait for a future visit.", "Show the same sale journey as every other visitor.", "Guide the shopper towards a relevant swap or new discovery.", "Push store credit regardless of the shopper's intent."], feedback: "A return is an engaged revisit: retain the customer, not just process the refund." },
    { gain: "The Golden Perfmaker", q: "A retailer wants more conversions without relying on blanket discounts. Which commercial route should you recommend?", options: ["Build a decision system linking signals, audience, creative, timing and measurement.", "Optimise each on-site format separately and keep targeting broad.", "Target high-intent visitors now and introduce testing later.", "Launch one strong use case and expand without a control group."], feedback: "🎉 The winning route is a decision system, not a collection of isolated tactics. You are now officially a « Certified Perfmaker Partner »." },
  ],
  de: [
    { gain: "1 Kugelschreiber", q: "Der Affiliate-Traffic ist gestiegen, aber die Conversion stagniert. Wo sollte der Händler zuerst ansetzen?", options: ["Zunächst die Post-Click-Customer-Journey verbessern.", "Den Publisher-Mix verfeinern, um kaufwilligere Besucher zu gewinnen.", "Die Retargeting-Frequenz der Kampagne erhöhen.", "Die Provisionen für alle Partner senken."], feedback: "Der Traffic ist bereits bezahlt. Analysieren Sie zuerst die On-Site-Journey, bevor Sie mehr Traffic kaufen." },
    { gain: "1 Regenschirm", q: "Ein Kunde findet die Idee gut, hat aber sechs Monate lang keine Entwicklerkapazität. Was ist Ihre beste Antwort?", options: ["Einen Platz im nächsten Entwicklungszyklus reservieren.", "Stattdessen eine einfachere CRM-Kampagne empfehlen.", "Den Awin MasterTag prüfen und eine verwaltete Aktivierung planen.", "Die Agentur bitten, ein individuelles On-Site-Modul zu bauen."], feedback: "Ist der MasterTag aktiv, kann Perfmaker ohne individuelles Entwicklungsprojekt aktiviert werden." },
    { gain: "", q: "Ein Kunde fragt, ob Perfmaker dem Publisher, der den Besuch generiert hat, die Attribution wegnimmt. Wie antworten Sie?", options: ["Ja. Perfmaker wird zum letzten Referrer in der Journey.", "Nein. Die Awin-Attribution bleibt bestehen, Perfmaker verbessert nur die Post-Click-Conversion.", "Das Guthaben wird automatisch zwischen Perfmaker und dem Publisher aufgeteilt.", "Perfmaker sollte nur nicht-affiliierten Besuchern gezeigt werden."], feedback: "Perfmaker steigert den Wert des Awin-Traffics; es ersetzt nicht den Publisher." },
    { gain: "", q: "Es ist Juli, es schüttet, und der Besucher kam über einen Jacken-Ratgeber eines Publishers. Welche Signale sollten die Experience prägen? Wählen Sie alle Zutreffenden.", options: ["Den verweisenden Content und den Akquisitionskontext nutzen.", "Das lokale Wetter und den Standort des Besuchers nutzen.", "Sich allein auf den Sommerkampagnenkalender verlassen.", "Frühere Produkt- oder Kategorieansichten nutzen, sofern verfügbar."], feedback: "Kombinieren Sie Quelle, realen Kontext und Verhalten. Der Kalender allein ist kein Kontext." },
    { gain: "", q: "Ein Käufer gibt beim Checkout einen ungültigen Gutscheincode ein, was sofort Reibung erzeugt. Was ist die beste Lösung?", options: ["Das Gutscheincode-Feld aus dem Checkout entfernen.", "Dem Käufer alle aktuell verfügbaren öffentlichen Angebote zeigen.", "Den Käufer bitten, ohne Angebot fortzufahren.", "Eine passende Alternative anbieten, wenn die Geschäftsregeln es erlauben."], feedback: "Ein ungültiger Code ist sowohl Reibung als auch ein starkes Kaufabsichtssignal. Die Lösung bleibt an Regeln gebunden." },
    { gain: "", q: "Ein Besucher mit einem Warenkorb von 320£ zeigt Exit-Intent. Welche Faktoren sollten bestimmen, ob und wie Sie eingreifen? Wählen Sie alle Zutreffenden.", options: ["Warenkorbwert, Marge und vertretbare Interventionskosten berücksichtigen.", "Den Akquisitionspartner als einzige Eligibilitätsregel verwenden.", "Aktuelle Lagerbestände und Produktprioritäten berücksichtigen.", "Prüfen, ob ein Anreiz oder eine Rückversicherung das Ergebnis ändern könnte."], feedback: "Eligibilität kombiniert Wirtschaftlichkeit, kommerzielle Priorität und Absicht — nicht ein Kanal-Label." },
    { gain: "", q: "Ein wiederkehrender Besucher hat bereits mehrere Laufschuhe angesehen. Welche On-Site-Maßnahmen könnten relevant sein? Wählen Sie alle Zutreffenden.", options: ["Dasselbe Prioritätsprodukt über alle Formate hinweg pushen.", "Das Karussell anhand von Browsing- und Wiederbesuchssignalen neu ordnen.", "Immer den Schuh mit der höchsten Marge voranstellen.", "Unterschiedliche Formate für Entdeckung, kommerzielle Priorität und Rückversicherung nutzen."], feedback: "Der Kontext sollte Formate koordinieren, ohne überall dasselbe Produkt zu erzwingen." },
    { gain: "", q: "Ein Käufer hat gerade eine recht hochwertige Espressomaschine in den Warenkorb gelegt. Was ist der hilfreichste nächste Schritt?", options: ["Ihm eine zweite Maschine mit Rabatt anbieten.", "Passende Zusatzprodukte wie Kaffeebohnen oder Entkalker zum richtigen Zeitpunkt empfehlen.", "Bis zum nächsten Besuch warten, bevor eine Empfehlung erfolgt.", "Das Küchenprodukt mit der höchsten Marge bewerben, egal welches."], feedback: "Der beste Cross-Sell fühlt sich nützlich an, weil er relevant und gut getimt ist." },
    { gain: "", q: "Ein Kunde möchte ein Glücksrad, weil ein Wettbewerber eines hat. Was sollten Sie vor der Wahl der Mechanik klären? Wählen Sie alle Zutreffenden.", options: ["Kampagnenziel, Zielgruppe und Value Exchange definieren.", "Die Mechanik mit den beeindruckendsten Animationen wählen.", "Herausfinden, welches Creative des Wettbewerbers kopiert werden soll.", "Datenerfassungsbedarf, Timing und technische Einschränkungen bestätigen."], feedback: "Das Rad ist nicht die Strategie. Zweck und Machbarkeit bestimmen die Mechanik." },
    { gain: "", q: "Ein mobiler Besucher liest einen Kaufratgeber und besucht dann erneut ein Premiumprodukt. Was ist der beste Lead-Generierungsplan?", options: ["Das vollständige Lead-Formular sofort beim Landen zeigen.", "Die E-Mail beim Verlassen abfragen, ohne zusätzlichen Wert zu bieten.", "Nach Engagement ein kurzes, relevantes Opt-in mit passendem Value Exchange auslösen.", "Allen Besuchern nach 60 Sekunden dasselbe Formular zeigen."], feedback: "Starke Lead-Erfassung kombiniert signalgesteuertes Timing, relevanten Wert und minimale Reibung." },
    { gain: "", q: "Es ist Anfang Oktober, und der Kunde möchte bessere Black-Friday-Ergebnisse. Was empfehlen Sie zuerst?", options: ["Beginnen, eine Permission-Audience aufzubauen und aus Signalen zu lernen.", "Den Black-Friday-Rabatt sofort starten.", "Sich auf Media konzentrieren und die On-Site-Journey erst im November angehen.", "Das Kampagnen-Creative fertigstellen, bevor Audience-Daten gesammelt werden."], feedback: "Black Friday beginnt nicht am Freitag: Der Oktober dient dem Audience-Aufbau und dem Lernen." },
    { gain: "", q: "Ein echtes Black-Friday-Angebot endet in zwei Stunden, und der Besucher kehrt zu einem Produkt zurück, das noch im Warenkorb liegt. Was sollte passieren?", options: ["Dem Besucher einen noch tieferen Rabatt anbieten.", "Einen exakten Countdown, eine Warenkorb-Erinnerung und Lieferversprechen zeigen.", "Die Produktseite durch eine Sitewide-Kampagnenübernahme ersetzen.", "Die Frist stillschweigend verlängern, falls er nicht konvertiert."], feedback: "Wiederholte Absicht plus eine echte Deadline erfordert Klarheit und Rückversicherung — keinen tieferen Rabatt." },
    { gain: "1 kitschige Tasse mit dem Perfmaker-Team", q: "Der Kampagnenumsatz ist gestiegen, aber der Kunde möchte wissen, ob Perfmaker inkrementellen Wert geschaffen hat. Was tun Sie?", options: ["Den Umsatz mit der Vorperiode vergleichen.", "Den unterstützten Umsatz neben dem Last-Click-Umsatz berichten.", "Exponierte und Kontrollgruppen vergleichen, dann Inkrementalität und Marge prüfen.", "Die Kampagne jetzt verlängern und die Inkrementalität später testen."], feedback: "Umsatz ist nützlich. Die Entscheidung braucht inkrementellen Impact und kommerziellen Wert." },
    { gain: "", q: "Es ist der zweite Weihnachtsfeiertag, und ein Käufer bringt Tante Erikas nicht ganz passenden Pullover zurück. Wo liegt die kommerzielle Chance?", options: ["Die Rückerstattung priorisieren und auf einen künftigen Besuch warten.", "Denselben Sale-Journey wie jedem anderen Besucher zeigen.", "Den Käufer zu einem passenden Umtausch oder einer neuen Entdeckung führen.", "Ein Store-Guthaben forcieren, unabhängig von der Absicht des Käufers."], feedback: "Eine Retoure ist ein engagierter Wiederbesuch: Binden Sie den Kunden, statt nur die Rückerstattung abzuwickeln." },
    { gain: "Der goldene Perfmaker", q: "Ein Händler möchte mehr Conversions, ohne sich auf pauschale Rabatte zu verlassen. Welchen kommerziellen Weg empfehlen Sie?", options: ["Ein Entscheidungssystem aufbauen, das Signale, Zielgruppe, Creative, Timing und Messung verbindet.", "Jedes On-Site-Format separat optimieren und das Targeting breit halten.", "Jetzt Besucher mit hoher Absicht ansprechen und Tests später einführen.", "Einen starken Use Case starten und ohne Kontrollgruppe ausweiten."], feedback: "🎉 Der Gewinnerweg ist ein Entscheidungssystem, keine Sammlung isolierter Taktiken. Sie sind jetzt offiziell „Zertifizierter Perfmaker-Partner“." },
  ],
  it: [
    { gain: "1 penna", q: "Il traffico affiliato è aumentato, ma la conversione resta piatta. Dove dovrebbe indagare prima il retailer?", options: ["Iniziare migliorando il percorso cliente post-click.", "Affinare il mix di publisher per attrarre visitatori più qualificati.", "Aumentare la frequenza di retargeting della campagna.", "Ridurre le commissioni per tutti i partner."], feedback: "Il traffico è già pagato. Diagnosticate il percorso on-site prima di comprarne altro." },
    { gain: "1 ombrello", q: "A un cliente piace l'idea ma non avrà capacità di sviluppo per sei mesi. Qual è la risposta migliore?", options: ["Prenotare uno slot nel prossimo ciclo di sviluppo.", "Consigliare invece una campagna CRM più semplice.", "Verificare il MasterTag Awin e pianificare un'attivazione gestita.", "Chiedere all'agenzia di costruire un modulo on-site su misura."], feedback: "Con il MasterTag già attivo, Perfmaker può attivarsi senza un progetto di sviluppo su misura." },
    { gain: "", q: "Un cliente chiede se Perfmaker toglierà il credito di attribuzione al publisher che ha generato la visita. Come rispondete?", options: ["Sì. Perfmaker diventa il referrer finale del percorso.", "No. L'attribuzione Awin resta invariata, Perfmaker migliora la conversione post-click.", "Il credito viene ripartito automaticamente tra Perfmaker e il publisher.", "Perfmaker dovrebbe essere mostrato solo ai visitatori non affiliati."], feedback: "Perfmaker aumenta il valore del traffico Awin; non sostituisce il publisher." },
    { gain: "", q: "È luglio, piove a dirotto, e il visitatore arriva da una guida sui giacconi di un publisher. Quali segnali dovrebbero plasmare l'esperienza? Selezionate tutte le risposte corrette.", options: ["Usare il contenuto di riferimento e il contesto di acquisizione.", "Usare il meteo locale e la posizione del visitatore.", "Seguire solo il calendario della campagna estiva.", "Usare le visualizzazioni precedenti di prodotti/categorie, se disponibili."], feedback: "Combinate fonte, contesto reale e comportamento. Il calendario da solo non è contesto." },
    { gain: "", q: "Un acquirente inserisce un codice promo non valido al checkout, creando attrito immediato. Qual è il miglior recupero?", options: ["Rimuovere il campo codice promo dal checkout.", "Mostrare all'acquirente tutte le offerte pubbliche attualmente disponibili.", "Chiedere all'acquirente di continuare senza offerta.", "Proporre un'alternativa idonea se le regole di business lo consentono."], feedback: "Un codice non valido è sia attrito sia un forte segnale di intenzione d'acquisto. Il recupero resta condizionato alle regole." },
    { gain: "", q: "Un visitatore con un carrello da 320£ mostra intenzione di uscita. Quali fattori dovrebbero determinare se e come intervenire? Selezionate tutte le risposte corrette.", options: ["Considerare il valore del carrello, il margine e un costo di intervento sostenibile.", "Usare il partner di acquisizione come unica regola di idoneità.", "Considerare i livelli di stock attuali e le priorità di prodotto.", "Valutare se un incentivo o una rassicurazione potrebbero cambiare l'esito."], feedback: "L'idoneità combina economia, priorità commerciale e intenzione — non un'etichetta di canale." },
    { gain: "", q: "Un visitatore di ritorno ha già visualizzato diverse scarpe da running. Quali azioni on-site potrebbero essere rilevanti? Selezionate tutte le risposte corrette.", options: ["Spingere lo stesso prodotto prioritario su tutti i formati.", "Riordinare il carosello usando i segnali di navigazione e di ritorno.", "Mettere sempre in primo piano la scarpa con il margine più alto.", "Usare formati diversi per scoperta, priorità commerciale e rassicurazione."], feedback: "Il contesto dovrebbe coordinare i formati senza forzare lo stesso prodotto ovunque." },
    { gain: "", q: "Un acquirente ha appena aggiunto al carrello una macchina da espresso piuttosto sofisticata. Qual è il passo successivo più utile?", options: ["Offrirgli una seconda macchina scontata.", "Consigliare accessori pertinenti, come caffè o decalcificante, al momento giusto.", "Aspettare la prossima visita prima di fare una raccomandazione.", "Promuovere qualsiasi prodotto da cucina abbia il margine più alto."], feedback: "Il miglior cross-sell risulta utile perché è pertinente e ben tempificato." },
    { gain: "", q: "Un cliente vuole una ruota della fortuna perché un concorrente ne ha una. Cosa dovreste chiarire prima di scegliere la meccanica? Selezionate tutte le risposte corrette.", options: ["Definire l'obiettivo della campagna, il pubblico e lo scambio di valore.", "Scegliere la meccanica con le animazioni più impressionanti.", "Individuare quale creatività del concorrente copiare.", "Confermare le esigenze di raccolta dati, i tempi e i vincoli tecnici."], feedback: "La ruota non è la strategia. Scopo e fattibilità determinano la meccanica." },
    { gain: "", q: "Un visitatore mobile legge una guida all'acquisto e poi rivisita un prodotto premium. Qual è il miglior piano di lead generation?", options: ["Mostrare subito il modulo lead completo all'atterraggio.", "Chiedere l'email in uscita senza offrire valore aggiuntivo.", "Attivare un opt-in breve e pertinente dopo l'engagement, con uno scambio di valore adeguato.", "Mostrare lo stesso modulo a tutti i visitatori dopo 60 secondi."], feedback: "Una buona lead capture combina tempismo guidato dai segnali, valore pertinente e attrito minimo." },
    { gain: "", q: "È inizio ottobre e il cliente vuole risultati migliori per il Black Friday. Cosa consigliate per primo?", options: ["Iniziare a costruire un'audience con permesso e imparare dai segnali.", "Lanciare subito lo sconto Black Friday.", "Concentrarsi sui media e affrontare il percorso on-site a novembre.", "Finalizzare la creatività della campagna prima di raccogliere dati sull'audience."], feedback: "Il Black Friday non inizia il venerdì: ottobre serve a costruire l'audience e imparare." },
    { gain: "", q: "Un'offerta Black Friday reale termina tra due ore, e il visitatore torna su un prodotto ancora nel carrello. Cosa dovrebbe succedere?", options: ["Offrire al visitatore uno sconto ancora maggiore.", "Mostrare un countdown accurato, un promemoria del carrello e una rassicurazione sulla consegna.", "Sostituire la pagina prodotto con un takeover di campagna sitewide.", "Prolungare silenziosamente la scadenza se non converte."], feedback: "Un'intenzione ripetuta più una scadenza reale richiedono chiarezza e rassicurazione, non uno sconto più profondo." },
    { gain: "1 tazza kitsch con il team Perfmaker", q: "Il fatturato della campagna è aumentato, ma il cliente vuole sapere se Perfmaker ha creato valore incrementale. Cosa fate?", options: ["Confrontare il fatturato con il periodo precedente.", "Riportare il fatturato assistito accanto al fatturato last-click.", "Confrontare i gruppi esposti e di controllo, poi rivedere incrementalità e margine.", "Prolungare subito la campagna e testare l'incrementalità più avanti."], feedback: "Il fatturato è utile. La decisione richiede impatto incrementale e valore commerciale." },
    { gain: "", q: "È il giorno di Santo Stefano, e un acquirente torna con il maglione non proprio adatto regalato dalla zia. Dov'è l'opportunità commerciale?", options: ["Dare priorità al rimborso e attendere una visita futura.", "Mostrare lo stesso percorso di saldi di qualsiasi altro visitatore.", "Guidare l'acquirente verso uno scambio pertinente o una nuova scoperta.", "Spingere un buono acquisto indipendentemente dall'intenzione dell'acquirente."], feedback: "Un reso è una revisita impegnata: fidelizzate il cliente, non limitatevi a elaborare il rimborso." },
    { gain: "Il Perfmaker d'oro", q: "Un retailer vuole più conversioni senza affidarsi a sconti generalizzati. Quale percorso commerciale consigliate?", options: ["Costruire un sistema decisionale che collega segnali, audience, creatività, tempistica e misurazione.", "Ottimizzare ogni formato on-site separatamente e mantenere un targeting ampio.", "Puntare ora sui visitatori ad alta intenzione e introdurre i test più avanti.", "Lanciare un caso d'uso forte ed espanderlo senza gruppo di controllo."], feedback: "🎉 Il percorso vincente è un sistema decisionale, non una raccolta di tattiche isolate. Ora sei ufficialmente un « Partner Certificato Perfmaker »." },
  ],
  es: [
    { gain: "1 bolígrafo", q: "El tráfico de afiliación ha aumentado, pero la conversión se mantiene plana. ¿Dónde debería investigar primero el retailer?", options: ["Empezar mejorando el recorrido del cliente post-clic.", "Afinar el mix de publishers para atraer visitantes de mayor intención.", "Aumentar la frecuencia de retargeting de la campaña.", "Reducir las comisiones de todos los partners."], feedback: "El tráfico ya está pagado. Diagnostica el recorrido on-site antes de comprar más." },
    { gain: "1 paraguas", q: "A un cliente le gusta la idea, pero no tendrá capacidad de desarrollo durante seis meses. ¿Cuál es tu mejor respuesta?", options: ["Reservar un hueco en el próximo ciclo de desarrollo.", "Recomendar en su lugar una campaña CRM más simple.", "Comprobar el MasterTag de Awin y definir una activación gestionada.", "Pedir a la agencia que construya un módulo on-site a medida."], feedback: "Con el MasterTag ya activo, Perfmaker puede activarse sin un proyecto de desarrollo a medida." },
    { gain: "", q: "Un cliente pregunta si Perfmaker le quitará el crédito de atribución al publisher que generó la visita. ¿Cómo respondes?", options: ["Sí. Perfmaker se convierte en el referente final del recorrido.", "No. La atribución de Awin se mantiene, Perfmaker mejora la conversión post-clic.", "El crédito se reparte automáticamente entre Perfmaker y el publisher.", "Perfmaker solo debería mostrarse a visitantes no afiliados."], feedback: "Perfmaker aumenta el valor del tráfico de Awin; no sustituye al publisher." },
    { gain: "", q: "Es julio, llueve a cántaros, y el visitante llegó desde una guía de chaquetas de un publisher. ¿Qué señales deberían moldear la experiencia? Selecciona todas las que correspondan.", options: ["Usar el contenido de referencia y el contexto de adquisición.", "Usar el clima local y la ubicación del visitante.", "Seguir únicamente el calendario de la campaña de verano.", "Usar las vistas previas de producto o categoría, cuando estén disponibles."], feedback: "Combina la fuente, el contexto real y el comportamiento. El calendario por sí solo no es contexto." },
    { gain: "", q: "Un comprador introduce un código promocional no válido en el checkout, generando fricción inmediata. ¿Cuál es la mejor recuperación?", options: ["Eliminar el campo de código promocional del checkout.", "Mostrar al comprador todas las ofertas públicas disponibles.", "Pedir al comprador que continúe sin oferta.", "Ofrecer una alternativa elegible cuando las reglas de negocio lo permitan."], feedback: "Un código no válido es tanto fricción como una fuerte señal de intención de compra. La recuperación sigue siendo condicional." },
    { gain: "", q: "Un visitante con una cesta de 320£ muestra intención de salida. ¿Qué factores deberían determinar si intervenir y cómo? Selecciona todas las que correspondan.", options: ["Considerar el valor de la cesta, el margen y un coste de intervención asumible.", "Usar el partner de adquisición como única regla de elegibilidad.", "Considerar los niveles de stock actuales y las prioridades de producto.", "Evaluar si un incentivo o una garantía podrían cambiar el resultado."], feedback: "La elegibilidad combina economía, prioridad comercial e intención, no una etiqueta de canal." },
    { gain: "", q: "Un visitante recurrente ya ha visto varias zapatillas de running. ¿Qué acciones on-site podrían ser relevantes? Selecciona todas las que correspondan.", options: ["Impulsar el mismo producto prioritario en todos los formatos.", "Reordenar el carrusel según las señales de navegación y de retorno.", "Destacar siempre la zapatilla con mayor margen.", "Usar formatos distintos para descubrimiento, prioridad comercial y garantía."], feedback: "El contexto debe coordinar los formatos sin forzar el mismo producto en todas partes." },
    { gain: "", q: "Un comprador acaba de añadir una cafetera espresso bastante sofisticada a su cesta. ¿Cuál es el siguiente paso más útil?", options: ["Ofrecerle una segunda máquina con descuento.", "Recomendar complementos relevantes, como café o descalcificador, en el momento adecuado.", "Esperar a su próxima visita antes de recomendar algo.", "Promocionar el producto de cocina con mayor margen, sea cual sea."], feedback: "El mejor cross-sell resulta útil porque es relevante y llega en el momento adecuado." },
    { gain: "", q: "Un cliente quiere una ruleta porque un competidor tiene una. ¿Qué deberías aclarar antes de elegir la mecánica? Selecciona todas las que correspondan.", options: ["Definir el objetivo de la campaña, la audiencia y el intercambio de valor.", "Elegir la mecánica con las animaciones más impresionantes.", "Identificar qué creatividad del competidor copiar.", "Confirmar las necesidades de captura de datos, el timing y las limitaciones técnicas."], feedback: "La ruleta no es la estrategia. El propósito y la viabilidad determinan la mecánica." },
    { gain: "", q: "Un visitante móvil lee una guía de compra y luego vuelve a un producto premium. ¿Cuál es el mejor plan de generación de leads?", options: ["Mostrar el formulario de lead completo nada más aterrizar.", "Pedir su email a la salida sin ofrecer valor adicional.", "Activar un opt-in breve y relevante tras el engagement, con un intercambio de valor adecuado.", "Mostrar el mismo formulario a todos los visitantes tras 60 segundos."], feedback: "Una buena captación de leads combina un timing guiado por señales, valor relevante y fricción mínima." },
    { gain: "", q: "Es principios de octubre y el cliente quiere mejores resultados en Black Friday. ¿Qué recomiendas primero?", options: ["Empezar a construir una audiencia con permiso y aprender de las señales.", "Lanzar el descuento de Black Friday de inmediato.", "Centrarse en medios y abordar el recorrido on-site en noviembre.", "Finalizar la creatividad de la campaña antes de recopilar datos de audiencia."], feedback: "El Black Friday no empieza el viernes: octubre es para construir audiencia y aprender." },
    { gain: "", q: "Una oferta real de Black Friday termina en dos horas, y el visitante vuelve a un producto que sigue en su cesta. ¿Qué debería pasar?", options: ["Ofrecer al visitante un descuento aún mayor.", "Mostrar una cuenta atrás exacta, un recordatorio de cesta y garantía de entrega.", "Sustituir la página de producto por un takeover de campaña en todo el sitio.", "Ampliar discretamente el plazo si no convierte."], feedback: "La intención repetida más un plazo real piden claridad y garantía, no un descuento mayor." },
    { gain: "1 taza kitsch con el equipo de Perfmaker", q: "Los ingresos de la campaña han aumentado, pero el cliente quiere saber si Perfmaker generó valor incremental. ¿Qué haces?", options: ["Comparar los ingresos con el periodo anterior.", "Reportar los ingresos asistidos junto a los de último clic.", "Comparar grupos expuestos y de control, y luego revisar incrementalidad y margen.", "Ampliar la campaña ahora y probar la incrementalidad más tarde."], feedback: "Los ingresos son útiles. La decisión necesita impacto incremental y valor comercial." },
    { gain: "", q: "Es el día después de Navidad, y un comprador vuelve con el jersey no del todo acertado que le regaló la tía. ¿Dónde está la oportunidad comercial?", options: ["Priorizar el reembolso y esperar a una futura visita.", "Mostrar el mismo recorrido de rebajas que a cualquier otro visitante.", "Guiar al comprador hacia un cambio relevante o un nuevo descubrimiento.", "Forzar un crédito en tienda sin importar la intención del comprador."], feedback: "Una devolución es una revisita comprometida: retén al cliente, no te limites a tramitar el reembolso." },
    { gain: "El Perfmaker de oro", q: "Un retailer quiere más conversiones sin depender de descuentos generalizados. ¿Qué vía comercial recomiendas?", options: ["Construir un sistema de decisión que conecte señales, audiencia, creatividad, timing y medición.", "Optimizar cada formato on-site por separado y mantener un targeting amplio.", "Apuntar ahora a los visitantes de alta intención e introducir los tests más tarde.", "Lanzar un caso de uso fuerte y expandirlo sin grupo de control."], feedback: "🎉 La vía ganadora es un sistema de decisión, no una colección de tácticas aisladas. Ahora eres oficialmente «Partner Certificado Perfmaker»." },
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
