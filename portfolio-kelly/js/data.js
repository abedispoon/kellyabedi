/* ===== js/data.js — DONNÉES : projets, témoignages, études de cas, tarifs du devis ===== */
/* ▼ PROJETS. Format de chaque ligne : ['Titre','Sous-titre','chemin/image (optionnel)','Client (pour le tri)'] */
const G=['linear-gradient(135deg,#842028,#4D0E1F)','linear-gradient(135deg,#A6C9BE,#4A1123)','linear-gradient(135deg,#6D1721,#490E22)','linear-gradient(135deg,#57101F,#842028)'];
const C={
logofolio:{n:'01',t:'Logofolio',d:'Logos vectoriels pensés pour être reconnus au premier regard.',c:'ls',i:[
['Spoon Creative','Studio personnel de Kelly','assets/images/projets/logofolio/spoon-creative-logo.jpg','Spoon Creative'],
['ANDH','Logo','','ANDH'],
['Structure cache-toi','Logo — structure de prière','assets/images/projets/logofolio/structure-cache-toi.jpg','Structure cache-toi'],
['Mission Internationale Jardin des Délices','École Prophétique des Fils d\'Issacar — structure de prière','assets/images/projets/logofolio/mission-jardin-des-delices-logo.jpg','Mission Jardin des Délices']]},
identite:{n:'02',t:'Identité visuelle',d:'Chartes, palettes et systèmes graphiques cohérents.',c:'ls',i:[
['Spoon Creative','Identité de marque personnelle','','Spoon Creative'],
['Carte de visite','Gabarit prêt à personnaliser','assets/images/projets/identite/carte-visite-spoon-mockup.jpg','Spoon Creative']]},
print:{n:'03',t:'Support print',d:'Du concept au fichier prêt à imprimer.',c:'pt',i:[
['Toko Tatola Festival','Affiche','assets/images/projets/print/toko-tatola-festival.jpg','Centre Missionnaire La Perle'],
['Formation CCNA','Flyers','assets/images/projets/print/formation-ccna.jpg','Empreinte Tech'],
['Culte de Bénédiction','Affiche','assets/images/projets/print/la-perle-culte-benediction.jpg','Centre Missionnaire La Perle'],
['Packaging Ngona Chalk','Conception d\'emballage carton','assets/images/projets/print/packaging-ngona-chalk.jpg','Ngona Chalk'],
['Couverture de livre','« L\'homme du sixième rendez-vous de l\'histoire politique du Congo »','assets/images/projets/print/livre-sixieme-rendez-vous-histoire-congo.jpg','Édition — P. Kitenge Muyunga'],
['Centre d\'Entraînement au Ministère','Flyer formation','assets/images/projets/print/cem-perle-ministries.jpg','Perle Ministries']]},
social:{n:'04',t:'Social Media & Packs',d:'Visuels de communication pour des structures actives.',c:'sq',i:[
['Campagnes Telios Corporation','65 ans d\'indépendance RDC','assets/images/projets/social/telios-bonne-fete-independance.jpg','Telios Corporation'],
['Mposo Efamu · Le Lundi','Visuel de communication','assets/images/projets/social/telios-mposo-efamu.jpg','Telios Corporation'],
['Rentrée scolaire','Visuel de communication','assets/images/projets/social/telios-rentree-scolaire.jpg','Telios Corporation'],
['Un songe mal interprété','Visuel de communication','assets/images/projets/social/parfum-de-christ-songe-mal-interprete.jpg','Église Parfum de Christ'],
['Le silence n\'est pas l\'inactivité','Visuel de communication','assets/images/projets/social/parfum-de-christ-silence.jpg','Église Parfum de Christ'],
['Encouragez-vous vous-mêmes','Visuel de communication','assets/images/projets/social/parfum-de-christ-encouragez-vous.jpg','Église Parfum de Christ'],
['Seuls les faibles sont forts dans la critique','Visuel de communication','assets/images/projets/social/parfum-de-christ-faibles-critique.jpg','Église Parfum de Christ'],
['120 jours — Perce la muraille','Visuel de communication','assets/images/projets/social/la-perle-120-jours-perce-la-muraille.jpg','Centre Missionnaire La Perle'],
['120 jours — La Puissance Financière','Visuel de communication','assets/images/projets/social/la-perle-120-jours-puissance-financiere.jpg','Centre Missionnaire La Perle'],
['120 jours — Une vie sans limites','Visuel de communication','assets/images/projets/social/la-perle-120-jours-vie-sans-limites.jpg','Centre Missionnaire La Perle'],
['120 jours — Pour l\'amour de ma famille','Visuel de communication','assets/images/projets/social/la-perle-120-jours-amour-famille.jpg','Centre Missionnaire La Perle'],
['Joyeux Noël','Visuel de communication','assets/images/projets/social/la-perle-joyeux-noel.jpg','Centre Missionnaire La Perle'],
['Joyeux Noël (variante)','Visuel de communication','assets/images/projets/social/la-perle-joyeux-noel-v2.jpg','Centre Missionnaire La Perle'],
['Soirées de Pères','Visuel de communication','assets/images/projets/social/la-perle-soirees-de-peres.jpg','Centre Missionnaire La Perle'],
['Camps biblique','Visuel de communication','assets/images/projets/social/la-perle-camps-biblique.jpg','Centre Missionnaire La Perle'],
['Réunion des jeunes','Visuel de communication','assets/images/projets/social/la-perle-reunion-jeunes.jpg','Centre Missionnaire La Perle'],
['Demain c\'est Dimanche','Visuel de communication','assets/images/projets/social/la-perle-demain-dimanche.jpg','Centre Missionnaire La Perle'],
['Culte d\'enseignement','Visuel de communication','assets/images/projets/social/la-perle-culte-enseignement.jpg','Centre Missionnaire La Perle'],
['Spécial Kanga Mois','Visuel de communication','assets/images/projets/social/la-perle-kanga-mois.jpg','Centre Missionnaire La Perle'],
['Comme Jésus','Visuel de communication','assets/images/projets/social/la-perle-comme-jesus.jpg','Centre Missionnaire La Perle'],
['Musique satanique','Visuel de communication','assets/images/projets/social/la-perle-musique-satanique.jpg','Centre Missionnaire La Perle'],
['Le secret de la prière','Logo & visuel de communication','assets/images/projets/social/badiadingi-secret-de-la-priere.jpg','Parole Vivante de Badiadingi'],
['Programme spécial des prières','Visuel de communication','assets/images/projets/social/nouvelle-jerusalem-programme-prieres.jpg','La Nouvelle Jérusalem'],
['Matinée de Surnaturel','Affiche d\'événement','assets/images/projets/social/structure-cache-toi-matinee-surnaturel-final.jpg','Structure cache-toi'],
['Bonne Fête de l\'Indépendance','Publication LinkedIn personnelle','assets/images/projets/social/personnel-linkedin-independance.jpg','Personnel'],
['Reality vs LinkedIn','Publication LinkedIn personnelle','assets/images/projets/social/personnel-linkedin-reality.jpg','Personnel']]},
web:{n:'05',t:'Développement Web',d:'Applications de gestion, du back-end à la base de données.',c:'ls',i:[
['Gestion des actes de naissance','Back-end & administration de base de données','assets/images/projets/web/actes-de-naissance-interface.jpg','Projets techniques'],
['Secrétariat DRH — Ministère de l\'Agriculture','Gestion documentaire & courriers','','Projets techniques'],
['Gestion de restaurant','Application de gestion','','Projets techniques'],
['Gestion des stocks pharmaceutiques','Application de gestion','','Projets techniques']]}};
const ORD=Object.keys(C),P=['home','devis','projets','cas','competences','apropos','contact'];

/* ▼ TEMOIGNAGES */
const T=[
{n:'Rodrigue Mbesse',r:'CEO · Telios Corporation',t:'Leadership & Web',q:'Kelly combine une rigueur cartésienne en développement web avec un sens du design exceptionnel. Son leadership en tant que COO et son œil artistique font de chaque projet une réussite stratégique.'},
{n:'Direction de Communication',r:'Centre Missionnaire La Perle',t:'Réactivité',q:'Une réactivité impressionnante et des visuels qui ont su captiver notre audience lors de nos événements majeurs (120 jours de jeûne). Travail très professionnel.'},
{n:'Client Freelance',r:'Spoon Creative & Brand Assets',t:'Identité de marque',q:'Un accompagnement sur-mesure de la création du logo vectoriel jusqu\'à la déclinaison sur nos supports. Kelly a rendu notre marque immédiatement reconnaissable.'}];

/* ▼ ETUDES DE CAS : complétez les chiffres réels (nombre de publications, participants, etc.) */
const CS=[
{t:'Telios Corporation',g:'Visuels de communication · Social media',p:"Telios avait besoin d'une présence régulière et cohérente sur les réseaux sociaux, sans disposer en interne de quelqu'un pour produire ces visuels au quotidien.",s:"Contribution aux visuels de communication de la marque : campagnes de sensibilisation (prévention Mpox), messages hebdomadaires, fêtes nationales, rentrée scolaire — en s'appuyant sur l'identité déjà existante de Telios (le logo et la charte graphique de la marque n'ont pas été conçus par moi).",r:["Une présence régulière et cohérente sur les réseaux sociaux","Des visuels rapides à produire, alignés sur la charte existante","[À compléter : nombre de publications, croissance de l'audience]"],k:['Photoshop','Canva','Figma']},
{t:'Centre Missionnaire La Perle',g:'Visuels de communication · Packs événements',p:"Des événements majeurs (120 jours de jeûne et prière, camps bibliques, célébrations) exigeaient des visuels fréquents, cohérents et rapides à produire.",s:"Contribution aux visuels de communication (flyers et publications) pour ces événements, organisés en séries thématiques par événement — le logo et la charte graphique de l'église existaient déjà avant mon intervention.",r:["Audience captivée lors des événements majeurs (retour de la direction de communication)","Séries visuelles cohérentes d'un événement à l'autre","Réactivité : de la demande à la diffusion en des délais courts"],k:['Photoshop','Illustrator','Canva']},
{t:'Structure cache-toi',g:'Logo · Affiche d\'événement — structure de prière',p:"Cette structure de prière avait besoin d'une identité visuelle propre et d'un visuel pour annoncer son événement « Matinée de Surnaturel ».",s:"Conception du logo de la structure, puis de l'affiche complète de l'événement avec les intervenants, le thème et les informations pratiques, prête à diffuser sur les réseaux sociaux.",r:["Une identité visuelle simple et reconnaissable pour la structure","Une affiche complète prête à diffuser","[À compléter : retour de la structure après l'événement]"],k:['Illustrator','Photoshop']},
{t:'Mission Internationale Jardin des Délices',g:'Logo — École Prophétique des Fils d\'Issacar (structure de prière)',p:"Cette structure de prière et son école prophétique ne disposaient pas encore d'un logo pour se présenter et se faire reconnaître.",s:"Conception d'un logo associant une flamme, une croix et des éléments symboliques liés à la prière, pensé pour rester lisible aussi bien en grand format (bannières, affiches) qu'en petite icône (réseaux sociaux).",r:["Une identité visuelle propre pour la structure et son école","Un logo simple, déclinable sur tous les supports","[À compléter : retour de la structure]"],k:['Illustrator','Photoshop']},
{t:'Sessions de Formation & Ateliers Tech',g:'Programme pédagogique',p:"Des équipes et des étudiants devaient monter en compétences en informatique, réseaux de base et outils numériques.",s:"Conception de programmes sur-mesure, de supports de cours et d'ateliers : appui aux formations CCNA, bureautique, infolittératie, bases de SQL et de développement web, avec mentorat.",r:["Compétences concrètes transmises et réutilisables","Supports de cours structurés et visuellement clairs","[À compléter : nombre de sessions et de participants]"],k:['CCNA','SQL','HTML/CSS/JS','Bureautique']},
{t:'Plateforme de gestion des actes de naissance',g:'Back-end & administration de base de données',p:"Le suivi des actes de naissance nécessitait une base de données fiable, structurée et capable de supporter les opérations quotidiennes de l'équipe.",s:"Contribution en tant que back-end et administrateur de base de données (DBA) : modélisation des données, mise en place et administration de la base, et logique métier côté serveur pour fiabiliser l'enregistrement et la recherche des actes.",r:["Base de données structurée et fiable pour un usage quotidien","[À compléter : volume d'actes gérés, temps de traitement]","[À compléter : équipe et organisme concernés]"],k:['SQL','Modélisation de données','Back-end']}];

/* ▼ TARIFS (USD, valeurs d'exemple à ajuster) */
const D={
logo:{i:'◆',t:'Identité Visuelle & Logo',q:[{k:'Livrables',m:1,o:[['Logo vectoriel',80],['Charte graphique complète',150],['Déclinaisons (cartes, en-têtes, réseaux)',70]]}]},
print:{i:'▦',t:'Supports Print & Digital Packs',q:[{k:'Livrables',m:1,o:[['Affiche / flyer',30],['Pack réseaux sociaux (8 visuels)',90],['Papeterie & textile',120]]}]},
web:{i:'{ }',t:'Développement Web & Intégration BD',q:[{k:'Type de projet',o:[['Site vitrine',250],['Intégration UI/UX',180],['Conception / Administration de base de données',300]]}]},
form:{i:'✎',t:'Formation Informatique & Coaching Tech',q:[{k:'Type de public',o:[["Équipe d'entreprise",200],['Étudiants',120],['Coaching individuel',60]]},{k:'Domaines',m:1,o:[['Infolittératie',20],['Design',30],['Web / SQL',40],['Réseaux de base',30]]}]}};
const DL=[["Urgent (moins d'1 semaine)",1.35],['2 à 4 semaines',1],["Flexible (plus d'un mois)",.95]];
