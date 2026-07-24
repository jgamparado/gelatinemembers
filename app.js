const LESSONS = [
  { id: "bienvenue", mod: 0, dur: "08 min", typeKey: "module", videoId: "eOOmP6IUtOk" },
  { id: "preparation", mod: 0, dur: "12 min", typeKey: "guide", videoId: "pGniF4tZ8qE" },
  { id: "protocole", mod: 0, dur: "18 min", typeKey: "guide", videoId: "eRgms33yuoA" },
  { id: "recettes", mod: 1, dur: "06 min", typeKey: "sheet", videoId: "S6FyPD70e6w" },
  { id: "hydratation", mod: 1, dur: "09 min", typeKey: "guide", videoId: null },
  { id: "suivi", mod: 1, dur: "14 min", typeKey: "journal", videoId: "VgsQDZTk8rM" },
  { id: "mindset", mod: 2, dur: "12 min", typeKey: "bonus", videoId: null },
  { id: "apres", mod: 2, dur: "11 min", typeKey: "bonus", videoId: "_OF1jlD9LAw" }
];

const RECIPE_PHOTOS = [
  "https://images.unsplash.com/photo-1607813507428-ea507f5949b9?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1452968011964-24f8831c43c3?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1598431388094-324d32b317fc?auto=format&fit=crop&w=800&q=80"
];

const TR = {
  "pt-BR": {
    brandKicker: "PINK GELATIN", brandName: "Trick",
    nav: { home: "Início", program: "Programa", recipes: "Receitas", tracker: "Suivi", bonus: "Bônus" },
    greet: { morning: "Bom dia", afternoon: "Boa tarde", evening: "Boa noite" },
    act: { back: "Voltar", material: "Material desta aula", next: "Próxima aula", videoSoon: "Vídeo em breve" },
    home: {
      welcomeSub: "Continue de onde parou, revise suas receitas e mantenha o registro da sua rotina.",
      journey: "Sua jornada", journeyTitle: "21 dias para instalar sua rotina",
      continueBtn: "Continuar assistindo", continueEyebrow: "Continuar de onde parou",
      tileTrackTitle: "Suivi diário", tileTrackSub: "Marque sua rotina de hoje",
      tileRecipeTitle: "Receitas", tileRecipeSub: "Preparos rápidos e simples",
      todayRoutine: "Rotina de hoje"
    },
    items: { one: "item concluído", many: "itens concluídos" },
    program: { eyebrow: "Percurso principal", title: "Programa Pink Gelatin Trick" },
    modules: ["Fundamentos", "Prática diária", "Resultados"],
    types: { module: "Módulo", guide: "Guia", sheet: "Ficha", journal: "Diário", bonus: "Bônus" },
    lessons: {
      bienvenue: { title: "Orientação e promessa do programa", desc: "Entenda como usar a área de membros, onde encontrar os materiais e como acompanhar seu progresso." },
      preparation: { title: "Preparação dos próximos 21 dias", desc: "Organize seus ingredientes, horário e ambiente para manter uma rotina simples." },
      protocole: { title: "O protocolo Pink Gelatin Trick", desc: "Siga as principais etapas do protocolo e adapte-as ao seu dia a dia sem complicação." },
      recettes: { title: "Receitas rosas e variações", desc: "Escolha um preparo prático de acordo com seu gosto, horário e ingredientes disponíveis." },
      hydratation: { title: "Hidratação inteligente", desc: "Aprenda a distribuir a água ao longo do dia para apoiar o protocolo sem esforço." },
      suivi: { title: "Medidas, sensações e constância", desc: "Aprenda a acompanhar sua evolução com calma, sem se pesar demais ou se pressionar." },
      mindset: { title: "Mentalidade e constância", desc: "Ferramentas simples para manter a motivação e não desistir nos dias difíceis." },
      apres: { title: "Mantenha os resultados", desc: "Crie uma rotina de manutenção para conservar os bons hábitos após o ciclo inicial." }
    },
    recipesEyebrow: "Receitas cor-de-rosa", recipesTitle: "Preparos simples do programa",
    recipes: [
      { label: "Base", title: "Gelatina rosa clássica", desc: "Prepare no dia anterior para facilitar a rotina do dia seguinte.", items: ["1 porção de gelatina sem açúcar ou conforme o guia do produto", "250 ml de água quente", "250 ml de água fria", "Frutas vermelhas para decorar"] },
      { label: "Opção leve", title: "Tigela rosa com frutas", desc: "Ideal quando você quer uma textura mais cremosa.", items: ["1 porção de gelatina preparada", "Morangos ou framboesas", "Iogurte natural ou alternativa vegetal", "Um pouco de limão"] },
      { label: "Rápida", title: "Shot rosa da manhã", desc: "Mantenha o preparo simples para não pular a rotina.", items: ["A porção indicada no seu protocolo", "Água gelada", "Limão ou hortelã", "Um copo grande de água ao lado"] }
    ],
    tracker: {
      eyebrow: "Diário pessoal", title: "Suivi de 21 dias", dailyTitle: "Rotina do dia",
      checks: ["Protocolo realizado", "Hidratação em dia", "Refeição planejada", "Movimento leve"],
      reset: "Reiniciar o dia", notesTitle: "Notas rápidas", notesPlaceholder: "Energia, fome, sono, medidas, sensações...",
      notesHint: "As notas ficam somente neste navegador.", views: { calendar: "Calendário", streak: "Sequência", timeline: "Linha do tempo" }
    },
    day: "Dia",
    bonus: {
      eyebrow: "Materiais", title: "Bônus e materiais",
      items: [
        { title: "Lista de compras", desc: "Gelatina, frutas vermelhas, limão, hortelã, iogurte natural, potes individuais e garrafa de água.", copy: "Gelatina, frutas vermelhas, limão, hortelã, iogurte natural, potes individuais, garrafa de água" },
        { title: "Lembrete diário", desc: "Escolha um horário fixo e associe o protocolo a um hábito que já existe no seu dia.", copy: "Lembrete Pink Gelatin Trick: preparar minha porção, beber água e anotar minhas sensações." },
        { title: "Perguntas frequentes", desc: "Em caso de condição médica, tratamento, gravidez ou dúvida, procure a orientação de um profissional de saúde.", copy: "Este programa é informativo e não substitui uma orientação médica personalizada." }
      ]
    },
    settings: { open: "Abrir configurações", title: "Configurações", language: "Idioma", theme: "Tema", done: "Concluído", light: "Claro", dark: "Escuro" },
    footer: "Os conteúdos desta área são informativos e educativos. Eles não substituem a orientação de um profissional de saúde e os resultados podem variar de pessoa para pessoa.",
    copy: "Copiar", copied: "Copiado", markDone: "Marcar como concluída", done: "Concluída",
    brandLabel: "Voltar ao início", navigationLabel: "Navegação principal",
    meta: { title: "Área de Membros | Pink Gelatin Trick", description: "Área de membros em português para acompanhar o programa Pink Gelatin Trick." }
  },
  fr: {
    brandKicker: "PINK GELATIN", brandName: "Trick",
    nav: { home: "Accueil", program: "Programme", recipes: "Recettes", tracker: "Suivi", bonus: "Bonus" },
    greet: { morning: "Bonjour", afternoon: "Bon après-midi", evening: "Bonsoir" },
    act: { back: "Retour", material: "Support de ce module", next: "Module suivant", videoSoon: "Vidéo à venir" },
    home: {
      welcomeSub: "Continuez où vous en étiez, retrouvez vos recettes et gardez une trace de votre routine.",
      journey: "Votre parcours", journeyTitle: "21 jours pour installer votre routine",
      continueBtn: "Continuer", continueEyebrow: "Continuer où vous en étiez",
      tileTrackTitle: "Suivi quotidien", tileTrackSub: "Cochez votre routine du jour",
      tileRecipeTitle: "Recettes", tileRecipeSub: "Préparations rapides et simples",
      todayRoutine: "Routine du jour"
    },
    items: { one: "élément terminé", many: "éléments terminés" },
    program: { eyebrow: "Parcours principal", title: "Programme Pink Gelatin Trick" },
    modules: ["Fondations", "Pratique quotidienne", "Résultats"],
    types: { module: "Module", guide: "Guide", sheet: "Fiche", journal: "Journal", bonus: "Bonus" },
    lessons: {
      bienvenue: { title: "Orientation et promesse du programme", desc: "Comprenez comment utiliser l'espace membres, où trouver les supports et comment suivre vos progrès." },
      preparation: { title: "Préparation des 21 prochains jours", desc: "Organisez vos ingrédients, votre horaire et votre environnement pour garder une routine simple." },
      protocole: { title: "Le protocole Pink Gelatin Trick", desc: "Suivez les étapes principales du protocole et adaptez-les à votre quotidien sans complication." },
      recettes: { title: "Recettes roses et variations", desc: "Choisissez une préparation pratique selon votre goût, votre horaire et les ingrédients disponibles." },
      hydratation: { title: "Hydratation intelligente", desc: "Apprenez à répartir l'eau tout au long de la journée pour soutenir le protocole sans effort." },
      suivi: { title: "Mesures, sensations et constance", desc: "Apprenez à suivre votre évolution avec calme, sans vous peser trop souvent ni vous mettre la pression." },
      mindset: { title: "Mental et constance", desc: "Des outils simples pour garder la motivation et ne pas abandonner les jours difficiles." },
      apres: { title: "Maintenir les résultats", desc: "Mettez en place une routine de maintien pour conserver les bonnes habitudes après le cycle initial." }
    },
    recipesEyebrow: "Recettes roses", recipesTitle: "Préparations simples du programme",
    recipes: [
      { label: "Base", title: "Gélatine rose classique", desc: "Préparez la veille pour faciliter la routine du lendemain.", items: ["1 portion de gélatine sans sucre ou selon le guide du produit", "250 ml d'eau chaude", "250 ml d'eau froide", "Quelques fruits rouges en décoration"] },
      { label: "Option douce", title: "Bol rose aux fruits", desc: "Idéal lorsque vous souhaitez une texture plus crémeuse.", items: ["1 portion de gélatine préparée", "Fraises ou framboises", "Yaourt nature ou alternative végétale", "Un filet de citron"] },
      { label: "Rapide", title: "Shot rose du matin", desc: "Gardez la préparation simple pour éviter de sauter la routine.", items: ["La portion indiquée dans votre protocole", "Eau fraîche", "Citron ou menthe", "Un grand verre d'eau à côté"] }
    ],
    tracker: {
      eyebrow: "Journal personnel", title: "Suivi de 21 jours", dailyTitle: "Routine du jour",
      checks: ["Protocole réalisé", "Hydratation respectée", "Repas planifié", "Mouvement léger"],
      reset: "Réinitialiser la journée", notesTitle: "Notes rapides", notesPlaceholder: "Énergie, faim, sommeil, mesures, sensations...",
      notesHint: "Les notes restent uniquement dans ce navigateur.", views: { calendar: "Calendrier", streak: "Série", timeline: "Chronologie" }
    },
    day: "Jour",
    bonus: {
      eyebrow: "Ressources", title: "Bonus et supports",
      items: [
        { title: "Liste de courses", desc: "Gélatine, fruits rouges, citron, menthe, yaourt nature, récipients individuels et bouteille d'eau.", copy: "Gélatine, fruits rouges, citron, menthe, yaourt nature, récipients individuels, bouteille d'eau" },
        { title: "Rappel quotidien", desc: "Choisissez un horaire fixe et associez le protocole à une habitude déjà présente dans votre journée.", copy: "Rappel Pink Gelatin Trick : préparer ma portion, boire de l'eau et noter mes sensations." },
        { title: "Questions fréquentes", desc: "En cas de condition médicale, traitement, grossesse ou doute, demandez l'avis d'un professionnel de santé.", copy: "Ce programme est informatif et ne remplace pas l'avis d'un professionnel de santé." }
      ]
    },
    settings: { open: "Ouvrir les paramètres", title: "Paramètres", language: "Langue", theme: "Thème", done: "Terminé", light: "Clair", dark: "Sombre" },
    footer: "Les contenus de cet espace sont fournis à titre informatif et éducatif. Ils ne remplacent pas l'avis d'un professionnel de santé et les résultats peuvent varier d'une personne à l'autre.",
    copy: "Copier", copied: "Copié", markDone: "Marquer terminé", done: "Terminé",
    brandLabel: "Retour à l'accueil", navigationLabel: "Navigation principale",
    meta: { title: "Espace Membres | Pink Gelatin Trick", description: "Espace membres en français pour suivre le programme Pink Gelatin Trick." }
  },
  en: {
    brandKicker: "PINK GELATIN", brandName: "Trick",
    nav: { home: "Home", program: "Program", recipes: "Recipes", tracker: "Tracking", bonus: "Bonus" },
    greet: { morning: "Good morning", afternoon: "Good afternoon", evening: "Good evening" },
    act: { back: "Back", material: "Lesson material", next: "Next lesson", videoSoon: "Video coming soon" },
    home: {
      welcomeSub: "Pick up where you left off, revisit your recipes, and keep your routine on track.",
      journey: "Your journey", journeyTitle: "21 days to build your routine",
      continueBtn: "Continue watching", continueEyebrow: "Continue where you left off",
      tileTrackTitle: "Daily tracking", tileTrackSub: "Check off today's routine",
      tileRecipeTitle: "Recipes", tileRecipeSub: "Quick, simple preparations",
      todayRoutine: "Today's routine"
    },
    items: { one: "item completed", many: "items completed" },
    program: { eyebrow: "Main path", title: "Pink Gelatin Trick Program" },
    modules: ["Foundations", "Daily practice", "Results"],
    types: { module: "Module", guide: "Guide", sheet: "Sheet", journal: "Journal", bonus: "Bonus" },
    lessons: {
      bienvenue: { title: "Program orientation and promise", desc: "Learn how to use the members area, where to find the materials and how to track your progress." },
      preparation: { title: "Preparing for the next 21 days", desc: "Organize your ingredients, schedule and environment to keep your routine simple." },
      protocole: { title: "The Pink Gelatin Trick protocol", desc: "Follow the main protocol steps and adapt them to your everyday life without complication." },
      recettes: { title: "Pink recipes and variations", desc: "Choose a practical preparation based on your taste, schedule and available ingredients." },
      hydratation: { title: "Smart hydration", desc: "Learn to spread your water through the day to support the protocol effortlessly." },
      suivi: { title: "Measurements, sensations and consistency", desc: "Learn to track your progress calmly, without weighing yourself too often or putting yourself under pressure." },
      mindset: { title: "Mindset and consistency", desc: "Simple tools to stay motivated and keep going on hard days." },
      apres: { title: "Maintaining your results", desc: "Set up a maintenance routine to keep your good habits after the initial cycle." }
    },
    recipesEyebrow: "Pink recipes", recipesTitle: "Simple program preparations",
    recipes: [
      { label: "Base", title: "Classic pink gelatin", desc: "Prepare it the day before to make the next day's routine easier.", items: ["1 serving of sugar-free gelatin or as directed by the product guide", "250 ml hot water", "250 ml cold water", "A few berries for decoration"] },
      { label: "Gentle option", title: "Pink fruit bowl", desc: "Ideal when you want a creamier texture.", items: ["1 serving of prepared gelatin", "Strawberries or raspberries", "Plain yogurt or a plant-based alternative", "A squeeze of lemon"] },
      { label: "Quick", title: "Morning pink shot", desc: "Keep the preparation simple so you do not skip the routine.", items: ["The serving indicated in your protocol", "Chilled water", "Lemon or mint", "A large glass of water on the side"] }
    ],
    tracker: {
      eyebrow: "Personal journal", title: "21-day tracking", dailyTitle: "Today's routine",
      checks: ["Protocol completed", "Hydration on track", "Meal planned", "Light movement"],
      reset: "Reset the day", notesTitle: "Quick notes", notesPlaceholder: "Energy, hunger, sleep, measurements, sensations...",
      notesHint: "Notes stay only in this browser.", views: { calendar: "Calendar", streak: "Streak", timeline: "Timeline" }
    },
    day: "Day",
    bonus: {
      eyebrow: "Resources", title: "Bonus and materials",
      items: [
        { title: "Shopping list", desc: "Gelatin, berries, lemon, mint, plain yogurt, individual containers and a water bottle.", copy: "Gelatin, berries, lemon, mint, plain yogurt, individual containers, water bottle" },
        { title: "Daily reminder", desc: "Choose a fixed time and connect the protocol to a habit already in your day.", copy: "Pink Gelatin Trick reminder: prepare my serving, drink water and note my sensations." },
        { title: "Frequently asked questions", desc: "If you have a medical condition, take medication, are pregnant or have questions, ask a healthcare professional.", copy: "This program is informational and does not replace personalized medical advice." }
      ]
    },
    settings: { open: "Open settings", title: "Settings", language: "Language", theme: "Theme", done: "Done", light: "Light", dark: "Dark" },
    footer: "The content in this area is for informational and educational purposes. It does not replace professional healthcare advice, and results may vary from person to person.",
    copy: "Copy", copied: "Copied", markDone: "Mark as complete", done: "Completed",
    brandLabel: "Back to home", navigationLabel: "Main navigation",
    meta: { title: "Members Area | Pink Gelatin Trick", description: "Members area in English to follow the Pink Gelatin Trick program." }
  }
};

const ICON_PLAY_SM = '<svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M8 6 L18 12 L8 18 Z"></path></svg>';
const ICON_PLAY_LG = '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M8 6 L18 12 L8 18 Z"></path></svg>';
const ICON_CHEVRON = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M9 6 L15 12 L9 18"></path></svg>';
const ICON_BACK = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M15 6 L9 12 L15 18"></path></svg>';
const ICON_CHECK = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12 L10 17 L19 7"></path></svg>';
const ICON_CHECK_SM = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12 L10 17 L19 7"></path></svg>';

const STORAGE_KEY = "pinkGelatinMemberArea";
const TOTAL_DAYS = 21;

const defaultState = {
  route: "home",
  activeLessonId: null,
  activeRecipeIndex: null,
  lang: "fr",
  theme: "light",
  trackerView: "calendar",
  settingsOpen: false,
  completedLessons: [],
  completedDays: [],
  daily: {},
  notes: "",
  copiedKey: null
};

const state = loadState();

const els = {
  appScroll: document.getElementById("appScroll"),
  streakCount: document.getElementById("streakCount"),
  brandLink: document.getElementById("brandLink"),
  settingsBtn: document.getElementById("settingsBtn"),
  bottomNav: document.getElementById("bottomNav"),
  sheetOverlay: document.getElementById("sheetOverlay"),
  settingsSheet: document.getElementById("settingsSheet"),
  settingsTitle: document.getElementById("settingsTitle"),
  sheetLangLabel: document.getElementById("sheetLangLabel"),
  langRow: document.getElementById("langRow"),
  sheetThemeLabel: document.getElementById("sheetThemeLabel"),
  themeValue: document.getElementById("themeValue"),
  themeToggle: document.getElementById("themeToggle"),
  sheetDoneBtn: document.getElementById("sheetDoneBtn")
};

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const saved = raw ? JSON.parse(raw) : {};
    return {
      ...defaultState,
      lang: TR[saved.lang] ? saved.lang : defaultState.lang,
      theme: saved.theme === "dark" ? "dark" : "light",
      trackerView: ["calendar", "streak", "timeline"].includes(saved.trackerView) ? saved.trackerView : "calendar",
      completedLessons: Array.isArray(saved.completedLessons) ? saved.completedLessons : [],
      completedDays: Array.isArray(saved.completedDays) ? saved.completedDays : [],
      daily: saved.daily && typeof saved.daily === "object" ? saved.daily : {},
      notes: typeof saved.notes === "string" ? saved.notes : ""
    };
  } catch {
    return { ...defaultState };
  }
}

function persist() {
  const { lang, theme, trackerView, completedLessons, completedDays, daily, notes } = state;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ lang, theme, trackerView, completedLessons, completedDays, daily, notes }));
  } catch {}
}

function L() { return TR[state.lang] || TR.fr; }

function go(route) {
  state.route = route;
  state.activeLessonId = null;
  state.activeRecipeIndex = null;
  state.settingsOpen = false;
  render();
  els.appScroll.scrollTop = 0;
}

function openLesson(id) {
  state.route = "program";
  state.activeLessonId = id;
  render();
  els.appScroll.scrollTop = 0;
}

function openRecipe(index) {
  state.route = "recipes";
  state.activeRecipeIndex = index;
  render();
  els.appScroll.scrollTop = 0;
}

function toggleLesson(id) {
  const has = state.completedLessons.includes(id);
  state.completedLessons = has ? state.completedLessons.filter((x) => x !== id) : [...state.completedLessons, id];
  persist();
  render();
}

function toggleDay(n) {
  const has = state.completedDays.includes(n);
  state.completedDays = has ? state.completedDays.filter((x) => x !== n) : [...state.completedDays, n];
  persist();
  render();
}

function toggleDaily(key) {
  state.daily = { ...state.daily, [key]: !state.daily[key] };
  persist();
  render();
}

function resetDaily() {
  state.daily = {};
  persist();
  render();
}

function setTrackerView(view) {
  state.trackerView = view;
  persist();
  render();
}

function setLang(lang) {
  state.lang = TR[lang] ? lang : "fr";
  persist();
  render();
}

function toggleTheme() {
  state.theme = state.theme === "dark" ? "light" : "dark";
  persist();
  render();
}

function fallbackCopy(text) {
  const helper = document.createElement("textarea");
  helper.value = text;
  helper.setAttribute("readonly", "");
  helper.style.position = "fixed";
  helper.style.opacity = "0";
  document.body.appendChild(helper);
  helper.select();
  document.execCommand("copy");
  document.body.removeChild(helper);
}

async function copyResource(index, text) {
  let copied = true;
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
    } else {
      fallbackCopy(text);
    }
  } catch {
    try {
      fallbackCopy(text);
    } catch {
      copied = false;
    }
  }
  if (!copied) return;
  state.copiedKey = index;
  renderView();
  setTimeout(() => {
    if (state.copiedKey === index) {
      state.copiedKey = null;
      renderView();
    }
  }, 1400);
}

function computeProgress() {
  const totalItems = LESSONS.length + TOTAL_DAYS;
  const doneItems = state.completedLessons.length + state.completedDays.length;
  const percent = totalItems ? Math.round((doneItems / totalItems) * 100) : 0;
  const ringOffset = (251.3 * (1 - percent / 100)).toFixed(1);
  const t = L();
  const completedLabel = `${doneItems} ${doneItems === 1 ? t.items.one : t.items.many}`;
  return { percent, ringOffset, completedLabel, doneItems };
}

function greeting() {
  const hour = new Date().getHours();
  const t = L();
  return hour < 12 ? t.greet.morning : hour < 18 ? t.greet.afternoon : t.greet.evening;
}

function nextIncompleteLesson() {
  return LESSONS.find((l) => !state.completedLessons.includes(l.id)) || LESSONS[LESSONS.length - 1];
}

function todayNumber() {
  for (let n = 1; n <= TOTAL_DAYS; n++) if (!state.completedDays.includes(n)) return n;
  return TOTAL_DAYS;
}

/* ---------- Header / Nav / Sheet ---------- */

function renderHeader() {
  const t = L();
  document.documentElement.lang = state.lang;
  document.title = t.meta.title;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute("content", t.meta.description);
  els.brandLink.setAttribute("aria-label", t.brandLabel);
  els.settingsBtn.setAttribute("aria-label", t.settings.open);
  els.streakCount.textContent = state.completedDays.length;
  els.bottomNav.setAttribute("aria-label", t.navigationLabel);
  document.querySelectorAll("[data-label]").forEach((el) => {
    const path = el.dataset.label.split(".");
    el.textContent = path.reduce((o, k) => o?.[k], t) || "";
  });
  document.documentElement.dataset.theme = state.theme;
}

function renderNav() {
  els.bottomNav.querySelectorAll("[data-nav]").forEach((btn) => {
    const active = state.route === btn.dataset.nav;
    btn.classList.toggle("is-active", active);
    btn.setAttribute("aria-current", active ? "page" : "false");
  });
}

function renderSheet() {
  const t = L();
  els.sheetOverlay.hidden = !state.settingsOpen;
  els.settingsSheet.hidden = !state.settingsOpen;
  els.settingsTitle.textContent = t.settings.title;
  els.sheetLangLabel.textContent = t.settings.language;
  els.sheetThemeLabel.textContent = t.settings.theme;
  els.themeValue.textContent = state.theme === "dark" ? t.settings.dark : t.settings.light;
  els.themeToggle.classList.toggle("is-dark", state.theme === "dark");
  els.themeToggle.setAttribute("aria-checked", state.theme === "dark" ? "true" : "false");
  els.sheetDoneBtn.textContent = t.settings.done;
  els.langRow.querySelectorAll("[data-lang]").forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.lang === state.lang);
  });
}

/* ---------- Views ---------- */

function renderHome() {
  const t = L();
  const { percent, ringOffset, completedLabel } = computeProgress();
  const nextMeta = nextIncompleteLesson();
  const nextInfo = t.lessons[nextMeta.id];
  const dailyKeys = ["gelatine", "water", "meal", "walk"];
  const dailyDone = dailyKeys.filter((k) => state.daily[k]).length;
  const recipe = t.recipes[0];

  return `
    <div class="view">
      <div class="home-intro">
        <p class="eyebrow">${greeting()}</p>
        <h1 class="serif-h1">${state.memberName || t.brandName}</h1>
        <p class="muted-sub">${t.home.welcomeSub}</p>
      </div>

      <div class="journey-card">
        <div class="journey-top">
          <div>
            <p class="journey-eyebrow">${t.home.journey}</p>
            <h3 class="journey-title">${t.home.journeyTitle}</h3>
            <p class="journey-sub">${completedLabel}</p>
          </div>
          <div class="ring-wrap">
            <svg width="92" height="92" viewBox="0 0 96 96">
              <circle cx="48" cy="48" r="40" fill="none" stroke="rgba(255,255,255,.28)" stroke-width="9"></circle>
              <circle cx="48" cy="48" r="40" fill="none" stroke="#ffffff" stroke-width="9" stroke-linecap="round" stroke-dasharray="251.3" stroke-dashoffset="${ringOffset}" transform="rotate(-90 48 48)"></circle>
            </svg>
            <div class="ring-percent">${percent}%</div>
          </div>
        </div>
        <button class="journey-btn" type="button" data-action="continue">${ICON_PLAY_SM}${t.home.continueBtn}</button>
      </div>

      <button class="continue-card" type="button" data-action="continue">
        <div class="continue-thumb"><span class="play-dot">${ICON_PLAY_SM}</span></div>
        <div class="continue-info">
          <p class="eyebrow">${t.home.continueEyebrow}</p>
          <h4>${nextInfo.title}</h4>
          <p>${nextMeta.dur} · ${t.types[nextMeta.typeKey]}</p>
        </div>
        <span class="continue-chev">${ICON_CHEVRON}</span>
      </button>

      <div class="quick-grid">
        <button class="quick-tile" type="button" data-action="go" data-route="tracker">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--pink)" stroke-width="1.7"><rect x="4" y="5" width="16" height="15" rx="3"></rect><line x1="4" y1="9" x2="20" y2="9"></line><line x1="9" y1="3" x2="9" y2="6"></line><line x1="15" y1="3" x2="15" y2="6"></line></svg>
          <h4>${t.home.tileTrackTitle}</h4>
          <p>${t.home.tileTrackSub}</p>
        </button>
        <button class="quick-tile" type="button" data-action="go" data-route="recipes">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--pink)" stroke-width="1.7"><path d="M12 3 C7 9 6.5 13 12 19 C17.5 13 17 9 12 3 Z"></path></svg>
          <h4>${t.home.tileRecipeTitle}</h4>
          <p>${t.home.tileRecipeSub}</p>
        </button>
      </div>

      <div class="card">
        <div class="card-head">
          <h4>${t.home.todayRoutine}</h4>
          <span>${dailyDone}/4</span>
        </div>
        <div class="daily-list">
          ${dailyKeys.map((key, i) => `
            <button class="daily-item" type="button" data-action="toggle-daily" data-key="${key}" aria-pressed="${!!state.daily[key]}">
              <span class="daily-box ${state.daily[key] ? "is-checked" : ""}">${ICON_CHECK}</span>
              <span class="label">${t.tracker.checks[i]}</span>
            </button>
          `).join("")}
        </div>
      </div>

      <button class="featured-recipe" type="button" data-action="open-recipe" data-index="0">
        <img class="recipe-photo-img" src="${RECIPE_PHOTOS[0]}" alt="${recipe.title}" loading="lazy">
        <div class="recipe-body">
          <span class="recipe-badge">${recipe.label}</span>
          <h4>${recipe.title}</h4>
          <p>${recipe.desc}</p>
        </div>
      </button>
    </div>
  `;
}

function renderProgramList() {
  const t = L();
  const doneCount = state.completedLessons.length;
  const lessonPercent = Math.round((doneCount / LESSONS.length) * 100);

  const moduleBlocks = t.modules.map((title, mIdx) => {
    const lessonsInMod = LESSONS.filter((l) => l.mod === mIdx);
    const rows = lessonsInMod.map((lesson) => {
      const globalIdx = LESSONS.indexOf(lesson);
      const complete = state.completedLessons.includes(lesson.id);
      const info = t.lessons[lesson.id];
      return `
        <button class="lesson-row" type="button" data-action="open-lesson" data-id="${lesson.id}">
          <span class="lesson-num">${String(globalIdx + 1).padStart(2, "0")}</span>
          <div class="lesson-info">
            <h4>${info.title}</h4>
            <p>${lesson.dur} · ${t.types[lesson.typeKey]}</p>
          </div>
          <span class="lesson-check ${complete ? "is-complete" : ""}">${ICON_CHECK_SM}</span>
        </button>
      `;
    }).join("");
    return `
      <div class="module-block">
        <div class="module-head"><span>${String(mIdx + 1).padStart(2, "0")}</span><h3>${title}</h3></div>
        ${rows}
      </div>
    `;
  }).join("");

  return `
    <div class="view">
      <div>
        <p class="eyebrow">${t.program.eyebrow}</p>
        <h2 class="serif-h2">${t.program.title}</h2>
      </div>
      <div class="progress-bar-row">
        <div class="progress-track"><div class="progress-fill" style="width:${lessonPercent}%"></div></div>
        <span class="progress-count">${doneCount}/${LESSONS.length}</span>
      </div>
      ${moduleBlocks}
    </div>
  `;
}

function renderLessonDetail(lessonId) {
  const t = L();
  const meta = LESSONS.find((l) => l.id === lessonId);
  const idx = LESSONS.indexOf(meta);
  const info = t.lessons[meta.id];
  const complete = state.completedLessons.includes(meta.id);
  const nextMeta = LESSONS[idx + 1];

  const videoBlock = meta.videoId
    ? `<div class="video-box"><iframe src="https://www.youtube-nocookie.com/embed/${meta.videoId}?rel=0" title="${info.title}" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>`
    : `<div class="video-box"><div class="video-placeholder"><span class="play-dot">${ICON_PLAY_LG}</span><span>${t.act.videoSoon}</span></div></div>`;

  const nextBlock = nextMeta ? `
    <button class="next-lesson-btn" type="button" data-action="open-lesson" data-id="${nextMeta.id}">
      <div class="info">
        <p class="eyebrow">${t.act.next}</p>
        <h4>${t.lessons[nextMeta.id].title}</h4>
      </div>
      ${ICON_CHEVRON}
    </button>
  ` : "";

  return `
    <div class="view">
      <button class="back-btn" type="button" data-action="close-lesson">${ICON_BACK}${t.act.back}</button>
      ${videoBlock}
      <div>
        <p class="eyebrow">${t.types[meta.typeKey]} · ${meta.dur}</p>
        <h2 class="lesson-detail-title">${info.title}</h2>
        <p class="lesson-detail-desc">${info.desc}</p>
      </div>
      <button class="mark-btn ${complete ? "is-complete" : ""}" type="button" data-action="toggle-lesson" data-id="${meta.id}">
        ${ICON_CHECK}${complete ? t.done : t.markDone}
      </button>
      ${nextBlock}
    </div>
  `;
}

function renderRecipes() {
  const t = L();
  return `
    <div class="view">
      <div>
        <p class="eyebrow">${t.recipesEyebrow}</p>
        <h2 class="serif-h2">${t.recipesTitle}</h2>
      </div>
      ${t.recipes.map((rec, i) => `
        <button class="featured-recipe" type="button" data-action="open-recipe" data-index="${i}">
          <img class="recipe-photo-img tall" src="${RECIPE_PHOTOS[i]}" alt="${rec.title}" loading="lazy">
          <div class="recipe-body">
            <span class="recipe-badge">${rec.label}</span>
            <h3>${rec.title}</h3>
            <p>${rec.desc}</p>
          </div>
        </button>
      `).join("")}
    </div>
  `;
}

function renderRecipeDetail(index) {
  const t = L();
  const rec = t.recipes[index];
  return `
    <div class="view">
      <button class="back-btn" type="button" data-action="close-recipe">${ICON_BACK}${t.act.back}</button>
      <div class="recipe-hero"><img class="recipe-photo-img detail" src="${RECIPE_PHOTOS[index]}" alt="${rec.title}" loading="lazy"></div>
      <div>
        <span class="recipe-badge">${rec.label}</span>
        <h2 class="lesson-detail-title">${rec.title}</h2>
        <p class="lesson-detail-desc">${rec.desc}</p>
      </div>
      <div class="card">
        <h4 style="margin:0 0 10px;font-size:14.5px;color:var(--ink);">${t.recipesTitle}</h4>
        <ul class="ingredient-list">${rec.items.map((it) => `<li>${it}</li>`).join("")}</ul>
      </div>
    </div>
  `;
}

function renderTracker() {
  const t = L();
  const { percent, ringOffset, completedLabel } = computeProgress();
  const view = state.trackerView;
  const today = todayNumber();

  const days = Array.from({ length: TOTAL_DAYS }, (_, i) => {
    const n = i + 1;
    const complete = state.completedDays.includes(n);
    const isToday = n === today;
    return { n, complete, isToday };
  });

  let bodyBlock = "";
  if (view === "calendar") {
    bodyBlock = `
      <div class="card">
        <div class="calendar-grid">
          ${days.map((d) => `
            <button class="day-cell ${d.complete ? "is-complete" : ""} ${d.isToday ? "is-today" : ""}" type="button" data-action="toggle-day" data-day="${d.n}">${d.n}</button>
          `).join("")}
        </div>
      </div>
    `;
  } else if (view === "streak") {
    bodyBlock = `
      <div class="card streak-view">
        <div class="streak-ring-wrap">
          <svg width="140" height="140" viewBox="0 0 96 96">
            <circle cx="48" cy="48" r="40" fill="none" stroke="var(--surface2)" stroke-width="9"></circle>
            <circle cx="48" cy="48" r="40" fill="none" stroke="var(--pink)" stroke-width="9" stroke-linecap="round" stroke-dasharray="251.3" stroke-dashoffset="${ringOffset}" transform="rotate(-90 48 48)"></circle>
          </svg>
          <div class="streak-percent">${percent}%</div>
        </div>
        <p class="streak-sub">${completedLabel}</p>
        <div class="streak-dots">
          ${days.map((d) => `<span class="streak-dot ${d.complete ? "is-complete" : ""}"></span>`).join("")}
        </div>
      </div>
    `;
  } else {
    bodyBlock = `
      <div class="card timeline-list" style="padding-top:18px;">
        ${days.map((d) => `
          <button class="timeline-row" type="button" data-action="toggle-day" data-day="${d.n}">
            <span class="timeline-dot ${d.complete ? "is-complete" : ""}">${ICON_CHECK_SM}</span>
            <span class="label">${t.day} ${d.n}</span>
          </button>
        `).join("")}
      </div>
    `;
  }

  const dailyKeys = ["gelatine", "water", "meal", "walk"];

  return `
    <div class="view">
      <div>
        <p class="eyebrow">${t.tracker.eyebrow}</p>
        <h2 class="serif-h2">${t.tracker.title}</h2>
      </div>

      <div class="segment">
        <button type="button" data-action="set-tracker-view" data-view="calendar" class="${view === "calendar" ? "is-active" : ""}">${t.tracker.views.calendar}</button>
        <button type="button" data-action="set-tracker-view" data-view="streak" class="${view === "streak" ? "is-active" : ""}">${t.tracker.views.streak}</button>
        <button type="button" data-action="set-tracker-view" data-view="timeline" class="${view === "timeline" ? "is-active" : ""}">${t.tracker.views.timeline}</button>
      </div>

      ${bodyBlock}

      <div class="card">
        <h4 style="margin:0 0 10px;font-size:14.5px;color:var(--ink);">${t.tracker.dailyTitle}</h4>
        <div class="daily-list">
          ${dailyKeys.map((key, i) => `
            <button class="daily-item" type="button" data-action="toggle-daily" data-key="${key}" aria-pressed="${!!state.daily[key]}">
              <span class="daily-box ${state.daily[key] ? "is-checked" : ""}">${ICON_CHECK}</span>
              <span class="label">${t.tracker.checks[i]}</span>
            </button>
          `).join("")}
        </div>
        <button class="reset-btn" type="button" data-action="reset-daily">${t.tracker.reset}</button>
      </div>

      <div class="card">
        <h4 style="margin:0 0 10px;font-size:14.5px;color:var(--ink);">${t.tracker.notesTitle}</h4>
        <textarea id="notesInput" class="notes-textarea" rows="5" placeholder="${t.tracker.notesPlaceholder}"></textarea>
        <p class="notes-hint">${t.tracker.notesHint}</p>
      </div>
    </div>
  `;
}

function renderBonus() {
  const t = L();
  return `
    <div class="view">
      <div>
        <p class="eyebrow">${t.bonus.eyebrow}</p>
        <h2 class="serif-h2">${t.bonus.title}</h2>
      </div>
      ${t.bonus.items.map((item, i) => `
        <div class="resource-card">
          <h3>${item.title}</h3>
          <p>${item.desc}</p>
          <button class="copy-btn" type="button" data-action="copy-resource" data-index="${i}">${state.copiedKey === i ? t.copied : t.copy}</button>
        </div>
      `).join("")}
      <p class="footer-note">${t.footer}</p>
    </div>
  `;
}

function renderView() {
  let html = "";
  if (state.route === "home") html = renderHome();
  else if (state.route === "program" && state.activeLessonId) html = renderLessonDetail(state.activeLessonId);
  else if (state.route === "program") html = renderProgramList();
  else if (state.route === "recipes" && state.activeRecipeIndex != null) html = renderRecipeDetail(state.activeRecipeIndex);
  else if (state.route === "recipes") html = renderRecipes();
  else if (state.route === "tracker") html = renderTracker();
  else if (state.route === "bonus") html = renderBonus();
  else html = renderHome();

  els.appScroll.innerHTML = html;

  const notesInput = document.getElementById("notesInput");
  if (notesInput) {
    notesInput.value = state.notes;
    notesInput.addEventListener("input", () => {
      state.notes = notesInput.value;
      persist();
    });
  }
}

function render() {
  renderHeader();
  renderNav();
  renderView();
  renderSheet();
}

/* ---------- Event wiring ---------- */

els.appScroll.addEventListener("click", (event) => {
  const target = event.target.closest("[data-action]");
  if (!target) return;
  const action = target.dataset.action;

  if (action === "continue") openLesson(nextIncompleteLesson().id);
  else if (action === "go") go(target.dataset.route);
  else if (action === "open-lesson") openLesson(target.dataset.id);
  else if (action === "close-lesson") { state.activeLessonId = null; render(); els.appScroll.scrollTop = 0; }
  else if (action === "open-recipe") openRecipe(Number(target.dataset.index));
  else if (action === "close-recipe") { state.activeRecipeIndex = null; render(); els.appScroll.scrollTop = 0; }
  else if (action === "toggle-lesson") toggleLesson(target.dataset.id);
  else if (action === "toggle-daily") toggleDaily(target.dataset.key);
  else if (action === "reset-daily") resetDaily();
  else if (action === "toggle-day") toggleDay(Number(target.dataset.day));
  else if (action === "set-tracker-view") setTrackerView(target.dataset.view);
  else if (action === "copy-resource") copyResource(Number(target.dataset.index), L().bonus.items[Number(target.dataset.index)].copy);
});

els.bottomNav.addEventListener("click", (event) => {
  const btn = event.target.closest("[data-nav]");
  if (btn) go(btn.dataset.nav);
});

els.brandLink.addEventListener("click", (event) => {
  event.preventDefault();
  go("home");
});

els.settingsBtn.addEventListener("click", () => {
  state.settingsOpen = true;
  renderSheet();
});

function closeSheet() {
  state.settingsOpen = false;
  renderSheet();
}

els.sheetOverlay.addEventListener("click", closeSheet);
els.sheetDoneBtn.addEventListener("click", closeSheet);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && state.settingsOpen) closeSheet();
});

els.langRow.addEventListener("click", (event) => {
  const btn = event.target.closest("[data-lang]");
  if (btn) setLang(btn.dataset.lang);
});

els.themeToggle.addEventListener("click", toggleTheme);

render();
