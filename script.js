// ---------- Word lists ----------
// Raw lists (filtered/deduped below for safety against typos/length errors).
const RAW_WORDS_4 = `
able acid aged airy ajar alas ally also alto amid area army atom aunt away axis
back bail bait bake bald bale ball band bane bank bare bark barn base bash bass
bath bead beak beam bean bear beat bell belt bend best bike bill bind bird bite
blot blue boat body bold bolt bond bone book boom boot bore born boss both bowl
brag bran brat bred brew brim bulk bull burn bush bust busy cage cake calf call
came camp cane cape card care cart case cash cast cave cell chap char chat chef
chin chip chop chow city clad clan clap claw clay clip club coal coat code coil
coin cold cone cook cool cope copy cord core cork corn cost cove crab cram crop
crow cube cuff curb cure curl cute dame damp dark dart dash data date dawn dead
deal dean dear deck deed deer dell demo dent desk dial dice diet dime dine dirt
dish dive dock does doll dome done doom door dose dove down drag draw drew drip
drop drum dual duck duct dull dune dusk dust duty each earl earn ease east easy
edge edit else emit envy epic even ever evil exam exit face fact fade fail fair
fall fame fang fare farm fast fate fear feat feed feel feet fell felt fern fest
file fill film find fine fire firm fish fist five flag flap flat flaw flee flew
flip flow foam foil fold folk fond font food fool foot ford fore fork form fort
foul four free fret frog from fuel full fume fund fury fuse gain gala gale game
gang gape gash gate gaze gear gene gift girl give glad glow glue goal goat gold
gone good goof gown grab gray grew grid grim grin grip grit grow gulf gull gulp
hail hair half hall halt hand hang hard hare harm harp hash hate haul have hawk
haze head heal heap hear heat heel heir hell helm help herb herd here hero hide
high hike hill hint hire hold hole holy home hood hook hope horn hose host hour
howl huge hull hunt hurl hurt hush hymn icon idle idol inch info into iron isle
item jade jail jazz jeep jerk join joke jolt jump junk jury just keen keep kelp
kept keys kick kids kill kind king kiss kite knee knew knit knot lace lack lady
laid lair lake lamb lamp land lane lash last late lava lawn lazy lead leaf leak
lean leap left lend lens less lest lift like limb lime limp line link lion list
live load loaf loan lobe lock loft logo lone long look loom loop lord lore lose
loss lost loud love luck lump lung lure lurk lush lust lute lynx made mail main
make male mall malt many mark mash mask mass mast mate math maze mead meal mean
meat meet melt memo mend menu mesh mess mild mile milk mill mind mine mint mist
moan mock mode mold mole monk mood moon moor moot more moss most moth move much
mule must myth nail name navy near neat neck need neon nest news next nice nick
node none noon norm nose note noun nude numb nuts oath obey odor once open opts
oval oven over pace pack pact page paid pail pain pair pale palm pane pant park
part pass past path pave peak pear peel peer perk pest pick pier pile pine pink
pint pipe pity plan play plea plot plow plug plum plus poem poet poke pole poll
pond pool poor pope pork port pose pour pray prep prey prom prop prow puff pull
pulp pump punk pure push quad quit quiz race rack raft rage raid rail rain rake
rank rare rash rate rave read real reap rear reed reef rein rely rent rest rice
rich ride rift ring riot ripe rise risk road roam roar robe rock rode role roll
roof room root rope rose rosy rote rout rude ruin rule rung rush rust ruth safe
sage said sail salt same sand sane save scan scar seal seam seat seed seek seem
seen self sell send sent shed shin ship shoe shop shot show shut sick side sift
sign silk sing sink site size skew skid skin skip slam slap slat sled slew slid
slim slip slot slow slug slum slur smog snap snip snow soak soap soar sock soda
sofa soft soil sold sole some song soon sore sort soul soup sour spam span spar
spin spit spot spun spur stab stag star stay stem step stew stir stop stow stub
such suit sung sunk sure surf swan swap swat sway swim tack tail take tale talk
tall tame tank tape task teal team tear tech teen tell tend tent term test text
than that thaw them then they thin this thud thus tick tide tidy tile tilt time
tiny tire toad toes told toll tomb tone took tool tore torn toss tour town
trap tray tree trek trim trip trot true tuck tuna tune turf turn twig twin type
unit upon urge used user vain vane vast veil vein vent verb vest vial vibe view
vine visa void volt vote wade wage wait wake walk wall want ward warm warn wart
wash wasp watt wave weak wear weed week weld well went were west what when whim
whip whom wick wide wife wild will wind wine wing wink wipe wire wise wish wolf
wood wool word wore work worm worn wove wrap wren yard yarn yawn year yeah yell
yoga yolk your zeal zero zone zoom
beef been beer bent blew blow boil bomb buzz cafe carp chew clam crew crib
dare deaf debt deem deep defy gong hive jinx knob lard mesa oboe plod quay
ramp silo tuft vase wisp zinc
`;

const RAW_WORDS_6 = `
abroad absent absorb accept access accuse across acting action active actual
advice advise afford afraid agency almost always amount animal annual answer
anyone anyway appeal appear around arrest arrive artist assist assume assure
attack attend august author avenue backed banana batter beauty become before
behalf behind belief belong beside better beyond bishop border bottle bottom
bought branch breath bridge bright broken bronze budget bundle burden bureau
button camera cancel cancer candle canvas carbon career castle casual caught
center chairs chance change charge choice choose chosen church circle client
closed closer coffee column combat coming common cooked cookie corner costly
cotton county couple course cousin covers create credit crisis crowd cruise
crying custom damage danger dealer debate decade decide define degree demand
depend deputy design desire detail device devote differ dining dinner direct
doctor domain double driven driver during easily eating editor effect effort
either eleven emerge empire employ enable ending energy engage engine enough
ensure entire entity entry equity escape estate ethnic evolve exceed except
excess excuse exempt exists expand expect expert extend extent fabric factor
failed fairly fallen family famous father fellow female figure filing finger
finish fiscal fisher flight flying follow forced forest forget formal format
former foster fought fourth france friend fringe future garden gather gender
genius gentle giving global golden govern grades grain gross ground growth
handle happen hardly headed health hearts height hidden holder honest hoping
horror hourly humans hunter ignore images impact import income indeed injury
inside insist invest island itself jacket jersey joined jungle junior kidney
kitten labels ladder latest launch lawyer leader league legacy length lesson
letter liable little living locate longer loving lumber luxury magnet mainly
making manage margin marine marker market master matter mature medium member
memory mental merely method middle mining minute mirror mobile modern module
moment mostly mother motion museum mutual myself narrow nation native nearly
nights nobody normal notice notion number object obtain office online option
orange origin outfit output packed palace parent partly patent patrol pattern
period permit person phrase picked pickup planet plenty pocket poetry police
policy portal potato pretty prince prized profit proper puzzle quiet racial
random rarely rather reader really reason recall recent record reduce reform
regard region relate remain remove repair repeat report rescue resort result
retail retain return reveal review reward ribbon rising rocket rubber safety
salary sample savage scared scenic school scored screen script search season
second secret sector secure senior sensor series settle severe shadow shared
should signal silent silver simple simply single sister slight smooth soccer
social socket source speech spirit spread spring square stable status steady
stolen strain stream street strict strike string strong studio submit sudden
suffer summer summit sunset super supply survey switch symbol system tackle
talent target teacher temple tender tennis thanks theory thirty though threat
thrown ticket timber tissue toward travel treaty trying tunnel turkey twelve
twenty unable unique unless unlike update valley vendor versus victim volume
voting waiter walker warmth wealth weekly weight wholly window winter wisdom
within wonder wooden worker walnut writer yellow
`;

const RAW_WORDS_5 = `
about above abuse actor acute admit adopt adult after again agent agree ahead
alarm album alert alike alive allow alone along aloud alter among angel anger
angle angry apart apple apply arena argue arise armor arrow aside asset avoid
awake award aware badly baker bases basic basis beach began begin being belly
below bench birth black blade blame blank blast bleed blend bless blind block
blood board boast boost booth bound brain brand brass brave bread break breed
brick bride brief bring broad broke brown brush build built bunch buyer cabin
cable canal candy carry carve catch cause chain chair chalk charm chart
chase cheap check cheer chest chief child chill chose chunk civil claim class
clean clear clerk click cliff climb clock close cloth cloud coach coast could
count court cover craft crash crazy cream crime cross crowd crown crude curve
cycle daily dance dated dealt death debut delay depth diary dirty doubt dozen
draft drama drank drawn dream dress dried drill drink drive drove dying eager
eagle early earth eight elbow elder elect elite empty enemy enjoy enter entry
equal error essay event every exact exist extra fable faith false fancy fault
favor feast fence fever fiber field fifth fifty fight final first fixed flame
flash fleet flesh float flock floor flour fluid focus force forge forth forty
forum found frame fresh front frost fruit fully funny giant given glass glory
grace grade grain grand grant grass grave great green greet grief grind gross
group grown guard guess guest guide habit happy harsh heart heavy hedge hence
horse hotel house human humor image imply index inner input issue ivory joint
judge juice known label labor large laser later laugh layer learn least leave
legal level light limit linen liver lodge logic loose lower loyal lucky lunar
lyric magic major maker march match maybe mayor meant medal media metal meter
might minor minus mixed model moist money month moral motor mound mount mouse
mouth movie music naive naked nerve never newer night noble noise north noted
novel nurse ocean offer often olive onset order other ought outer owner paint
panel panic paper party patch pause peace pearl phase phone photo piano piece
pilot pitch place plain plane plant plate point pound power press price pride
prime print prior prize proof proud prove pulse pupil query quick quiet quilt
quite radio raise range rapid ratio reach ready realm rebel refer relax reply
right rigid risky rival river robot rocky rough round route royal rural sadly
saint salad sauce scale scare scene scope score scout sense serve seven shade
shake shall shame shape share shark sharp sheet shelf shell shift shine shirt
shock shoot short shown shrug sight silly since sixth sixty skill skirt slate
sleep slice slide slope small smart smell smile smoke snack snake solid solve
sorry sound south space spare speak speed spell spend spent spice spike spine
split spoke sport spray spurt squad stack staff stage stain stake stalk stamp
stand stark start state stays steak steal steam steel stern stick stiff still
stock stone store storm story stove straw strip stuck study stuff style sugar
suite super sweet swift swing sword table taste teach thank theme there thick
thief thing think third those three threw throw thumb tiger tight timer tired
title toast today token topic total touch tough tower toxic trace track trade
trail train treat trend trial tribe trick tried truck truly trunk trust truth
twist ultra uncle under undue union unity until upper upset urban usage usual
value venue video virus visit vital voice voter waste watch water weary wedge
whale wheat wheel where which while white whole whose widen widow width witch
women world worry worse worth would wound woven wrist write wrong yield young
youth
`;

function parseList(raw) {
  return [...new Set(raw.split(/\s+/).filter(Boolean).map(w => w.toLowerCase()))];
}

const WORDS = {
  4: parseList(RAW_WORDS_4).filter(w => w.length === 4),
  5: parseList(RAW_WORDS_5).filter(w => w.length === 5),
  6: parseList(RAW_WORDS_6).filter(w => w.length === 6),
};

// ---------- Graph building ----------
function diffCount(a, b) {
  let d = 0;
  for (let i = 0; i < a.length; i++) if (a[i] !== b[i]) d++;
  return d;
}

function buildGraph(words) {
  const graph = new Map();
  words.forEach(w => graph.set(w, new Set()));
  // Bucket by wildcard pattern per position for efficiency.
  const buckets = new Map();
  words.forEach(w => {
    for (let i = 0; i < w.length; i++) {
      const key = i + ':' + w.slice(0, i) + '_' + w.slice(i + 1);
      if (!buckets.has(key)) buckets.set(key, []);
      buckets.get(key).push(w);
    }
  });
  buckets.forEach(group => {
    if (group.length < 2) return;
    for (let i = 0; i < group.length; i++) {
      for (let j = i + 1; j < group.length; j++) {
        graph.get(group[i]).add(group[j]);
        graph.get(group[j]).add(group[i]);
      }
    }
  });
  return graph;
}

const GRAPHS = { 4: buildGraph(WORDS[4]), 5: buildGraph(WORDS[5]), 6: buildGraph(WORDS[6]) };

function bfsDistances(graph, source) {
  const dist = new Map([[source, 0]]);
  const queue = [source];
  let head = 0;
  while (head < queue.length) {
    const cur = queue[head++];
    const d = dist.get(cur);
    for (const nb of graph.get(cur)) {
      if (!dist.has(nb)) {
        dist.set(nb, d + 1);
        queue.push(nb);
      }
    }
  }
  return dist;
}

// ---------- Seeded RNG (for the daily puzzle) ----------
function mulberry32(seed) {
  return function () {
    seed |= 0; seed = (seed + 0x6D2B79F5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function seedFromString(str) {
  let h = 1779033703 ^ str.length;
  for (let i = 0; i < str.length; i++) {
    h = Math.imul(h ^ str.charCodeAt(i), 3432918353);
    h = (h << 13) | (h >>> 19);
  }
  return (h ^= h >>> 16) >>> 0;
}

// ---------- Puzzle generation ----------
function pickPuzzle(rand) {
  rand = rand || Math.random;
  const lengths = [4, 5, 6];
  for (let attempt = 0; attempt < 600; attempt++) {
    const len = lengths[Math.floor(rand() * lengths.length)];
    const graph = GRAPHS[len];
    const words = WORDS[len];
    const start = words[Math.floor(rand() * words.length)];
    if (graph.get(start).size === 0) continue;
    const dist = bfsDistances(graph, start);
    const minStep = 3, maxStep = 6;
    const candidates = [...dist.entries()].filter(([w, d]) => d >= minStep && d <= maxStep && w !== start);
    if (candidates.length === 0) continue;
    const [target, par] = candidates[Math.floor(rand() * candidates.length)];
    return { start, target, par, len, graph };
  }
  // Fallback: guaranteed simple puzzle.
  return { start: 'cat', target: 'dog', par: 3, len: 3, graph: buildGraph(['cat','cot','cog','dog']) };
}

// ---------- Sound engine ----------
let audioCtx = null;
function ensureAudio() {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  if (audioCtx.state === 'suspended') audioCtx.resume();
  return audioCtx;
}
function tone(freq, start, dur, type = 'sine', gainPeak = 0.15) {
  if (state.muted) return;
  try {
    const ctx = ensureAudio();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = type;
    osc.frequency.value = freq;
    const t0 = ctx.currentTime + start;
    gain.gain.setValueAtTime(0, t0);
    gain.gain.linearRampToValueAtTime(gainPeak, t0 + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    osc.connect(gain).connect(ctx.destination);
    osc.start(t0);
    osc.stop(t0 + dur + 0.03);
  } catch (e) { /* audio unavailable */ }
}
const SOUNDS = {
  move: () => tone(520, 0, 0.09, 'triangle'),
  invalid: () => tone(140, 0, 0.16, 'sawtooth', 0.12),
  hint: () => { tone(660, 0, 0.08, 'sine', 0.1); tone(880, 0.09, 0.1, 'sine', 0.1); },
  win: () => { tone(523, 0, 0.12); tone(659, 0.12, 0.12); tone(784, 0.24, 0.22); },
  lose: () => { tone(300, 0, 0.15, 'sawtooth', 0.12); tone(200, 0.15, 0.22, 'sawtooth', 0.12); },
};
function playSound(name) { const fn = SOUNDS[name]; if (fn) fn(); }

// ---------- Daily puzzle helpers ----------
function todayDateStr() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}
function dayNumberFor(dateStr) {
  const [y, m, d] = dateStr.split('-').map(Number);
  const cur = new Date(y, m - 1, d);
  const epoch = new Date(2026, 0, 1);
  return Math.round((cur - epoch) / 86400000) + 1;
}
function dailyStorageKey(dateStr) { return `wld_daily_${dateStr}`; }
function loadDailyRecord(dateStr) {
  try { return JSON.parse(localStorage.getItem(dailyStorageKey(dateStr))); } catch (e) { return null; }
}
function saveDailyRecord(dateStr, record) {
  localStorage.setItem(dailyStorageKey(dateStr), JSON.stringify(record));
}

// ---------- Game state ----------
const state = {
  puzzle: null,
  path: [],
  moves: 0,
  score: 0,
  streak: 0,
  best: Number(localStorage.getItem('wld_best') || 0),
  timeLeft: 60,
  timerId: null,
  targetDist: null,
  ended: false,
  mode: 'random',
  dailyDate: null,
  muted: localStorage.getItem('wld_muted') === '1',
  paused: { manual: false, tutorial: false },
};

// ---------- DOM ----------
const el = {
  board: document.getElementById('board'),
  timer: document.getElementById('timer'),
  moves: document.getElementById('moves'),
  par: document.getElementById('par'),
  score: document.getElementById('score'),
  streak: document.getElementById('streak'),
  best: document.getElementById('best'),
  goalTiles: document.getElementById('goalTiles'),
  ladder: document.getElementById('ladder'),
  inputTiles: document.getElementById('inputTiles'),
  wordForm: document.getElementById('wordForm'),
  wordInput: document.getElementById('wordInput'),
  message: document.getElementById('message'),
  hintBtn: document.getElementById('hintBtn'),
  giveUpBtn: document.getElementById('giveUpBtn'),
  newBtn: document.getElementById('newBtn'),
  dailyBtn: document.getElementById('dailyBtn'),
  pauseBtn: document.getElementById('pauseBtn'),
  pauseOverlay: document.getElementById('pauseOverlay'),
  resumeBtn: document.getElementById('resumeBtn'),
  muteBtn: document.getElementById('muteBtn'),
  modeBadge: document.getElementById('modeBadge'),
  overlay: document.getElementById('overlay'),
  overlayTitle: document.getElementById('overlayTitle'),
  overlayText: document.getElementById('overlayText'),
  overlayBtn: document.getElementById('overlayBtn'),
  shareBtn: document.getElementById('shareBtn'),
  helpBtn: document.getElementById('helpBtn'),
  tutorialOverlay: document.getElementById('tutorialOverlay'),
  tutorialTitle: document.getElementById('tutorialTitle'),
  tutorialBody: document.getElementById('tutorialBody'),
  tutorialDemo: document.getElementById('tutorialDemo'),
  tutorialDots: document.getElementById('tutorialDots'),
  tutorialBack: document.getElementById('tutorialBack'),
  tutorialNext: document.getElementById('tutorialNext'),
  tutorialSkip: document.getElementById('tutorialSkip'),
};

el.best.textContent = state.best;
el.muteBtn.textContent = state.muted ? '🔇' : '🔊';

// ---------- Rendering ----------
function renderTiles(container, word, opts = {}) {
  const { compareTo, diffOnly } = opts;
  container.innerHTML = '';
  for (let i = 0; i < word.length; i++) {
    const tile = document.createElement('div');
    tile.className = 'tile';
    tile.textContent = word[i] || '';
    if (diffOnly && compareTo && word[i] !== compareTo[i]) {
      tile.classList.add('diff');
    }
    container.appendChild(tile);
  }
}

function renderInputTiles(text, len) {
  el.inputTiles.innerHTML = '';
  for (let i = 0; i < len; i++) {
    const tile = document.createElement('div');
    tile.className = 'tile' + (text[i] ? '' : ' empty');
    tile.textContent = text[i] || '·';
    el.inputTiles.appendChild(tile);
  }
}

function renderLadder() {
  el.ladder.innerHTML = '';
  state.path.forEach((word, idx) => {
    const rung = document.createElement('div');
    rung.className = 'rung' + (idx === state.path.length - 1 ? ' current' : '');
    const label = document.createElement('span');
    label.className = 'row-label';
    label.textContent = idx === 0 ? 'START' : `#${idx}`;
    rung.appendChild(label);
    const tiles = document.createElement('div');
    tiles.className = 'tiles';
    const prev = idx > 0 ? state.path[idx - 1] : null;
    renderTiles(tiles, word, { compareTo: prev, diffOnly: !!prev });
    rung.appendChild(tiles);
    el.ladder.appendChild(rung);
  });
  el.ladder.scrollTop = el.ladder.scrollHeight;
}

function currentWord() {
  return state.path[state.path.length - 1];
}

function setMessage(text, type) {
  el.message.textContent = text;
  el.message.className = 'message' + (type ? ' ' + type : '');
}

function updateStats() {
  el.moves.textContent = state.moves;
  el.par.textContent = state.puzzle.par;
  el.score.textContent = state.score;
  el.streak.textContent = state.streak;
  el.best.textContent = state.best;
}

// ---------- Timer ----------
function startTimer() {
  clearInterval(state.timerId);
  state.timerId = setInterval(() => {
    state.timeLeft -= 1;
    if (state.timeLeft <= 0) {
      state.timeLeft = 0;
      el.timer.textContent = '0';
      clearInterval(state.timerId);
      endRound(false, "Time's up!");
      return;
    }
    el.timer.textContent = state.timeLeft;
    el.timer.classList.toggle('low', state.timeLeft <= 10);
  }, 1000);
}

// Any active pause source (manual button or tutorial) freezes the clock
// and hides the board so a pause can't be used to stall for free think time.
function applyPauseState() {
  const anyPaused = state.paused.manual || state.paused.tutorial;
  if (anyPaused) {
    clearInterval(state.timerId);
    state.timerId = null;
    el.timer.classList.add('paused');
    el.board.classList.add('board-hidden');
  } else {
    el.timer.classList.remove('paused');
    el.board.classList.remove('board-hidden');
    if (!state.ended && !state.timerId) {
      startTimer();
    }
  }
}

// ---------- Sharing ----------
function buildShareText(won) {
  const { start, target, par } = state.puzzle;
  const lines = [];
  lines.push(state.mode === 'daily'
    ? `Word Ladder Duel #${dayNumberFor(state.dailyDate)} 🪜`
    : 'Word Ladder Duel 🪜');
  lines.push(`${start.toUpperCase()} -> ${target.toUpperCase()}`);
  lines.push(won
    ? `Solved in ${state.moves}/${par} moves - ${state.timeLeft}s left`
    : `Didn't finish (par ${par})`);
  for (let i = 1; i < state.path.length; i++) {
    const prev = state.path[i - 1], cur = state.path[i];
    let row = '';
    for (let j = 0; j < cur.length; j++) row += (cur[j] === prev[j]) ? '⬜' : '🟩';
    lines.push(row);
  }
  return lines.join('\n');
}

function showShareButton(text) {
  el.shareBtn.hidden = false;
  el.shareBtn.onclick = () => copyShareText(text);
}

function hideShareButton() {
  el.shareBtn.hidden = true;
  el.shareBtn.onclick = null;
}

async function copyShareText(text) {
  let copied = true;
  try {
    await navigator.clipboard.writeText(text);
  } catch (e) {
    copied = false;
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand('copy'); copied = true; } catch (e2) { /* ignore */ }
    document.body.removeChild(ta);
  }
  const original = el.shareBtn.textContent;
  el.shareBtn.textContent = copied ? 'Copied!' : 'Copy failed';
  setTimeout(() => { el.shareBtn.textContent = original; }, 1500);
}

// ---------- Puzzle lifecycle ----------
function newPuzzle(mode) {
  mode = mode || 'random';
  state.mode = mode;
  hideShareButton();
  state.paused.manual = false;
  el.pauseOverlay.classList.remove('visible');

  if (mode === 'daily') {
    const dateStr = todayDateStr();
    state.dailyDate = dateStr;
    const rand = mulberry32(seedFromString('word-ladder-' + dateStr));
    state.puzzle = pickPuzzle(rand);
    el.modeBadge.textContent = `Daily Puzzle #${dayNumberFor(dateStr)}`;
    el.modeBadge.classList.add('daily');

    const existing = loadDailyRecord(dateStr);
    if (existing) {
      state.path = existing.path || [state.puzzle.start];
      state.moves = existing.moves || 0;
      state.timeLeft = existing.timeLeft || 0;
      state.ended = true;
      state.targetDist = bfsDistances(state.puzzle.graph, state.puzzle.target);
      clearInterval(state.timerId);
      el.timer.classList.remove('low');
      el.timer.textContent = state.timeLeft;
      renderTiles(el.goalTiles, state.puzzle.target);
      renderLadder();
      renderInputTiles('', state.puzzle.len);
      el.wordInput.value = '';
      el.wordInput.maxLength = state.puzzle.len;
      setMessage("You already played today's puzzle. Come back tomorrow for a new one!");
      updateStats();
      el.overlayTitle.textContent = existing.overlayTitle;
      el.overlayText.textContent = existing.overlayText;
      showShareButton(existing.shareText);
      el.overlay.classList.add('visible');
      return;
    }
  } else {
    state.dailyDate = null;
    el.modeBadge.textContent = 'Random Puzzle';
    el.modeBadge.classList.remove('daily');
    state.puzzle = pickPuzzle();
  }

  state.path = [state.puzzle.start];
  state.moves = 0;
  state.timeLeft = 60;
  state.ended = false;
  state.targetDist = bfsDistances(state.puzzle.graph, state.puzzle.target);
  el.timer.classList.remove('low');
  el.timer.textContent = state.timeLeft;
  renderTiles(el.goalTiles, state.puzzle.target);
  renderLadder();
  renderInputTiles('', state.puzzle.len);
  setMessage('Change one letter at a time to reach the goal word.');
  el.wordInput.value = '';
  el.wordInput.maxLength = state.puzzle.len;
  el.wordInput.focus();
  updateStats();
  el.overlay.classList.remove('visible');
  startTimer();
}

function endRound(won, reasonText) {
  if (state.ended) return;
  state.ended = true;
  clearInterval(state.timerId);
  let finalScore = 0;
  if (won) {
    const extra = state.moves - state.puzzle.par;
    const penalty = Math.max(0, extra) * 40;
    const timeBonus = state.timeLeft * 2;
    const roundScore = Math.max(60, 500 - penalty + timeBonus);
    finalScore = roundScore;
    state.score += roundScore;
    state.streak += 1;
    if (state.score > state.best) {
      state.best = state.score;
      localStorage.setItem('wld_best', String(state.best));
    }
    el.overlayTitle.textContent = 'Solved!';
    el.overlayText.textContent = `${state.puzzle.start.toUpperCase()} -> ${state.puzzle.target.toUpperCase()} in ${state.moves} moves (par ${state.puzzle.par}). +${roundScore} points, ${state.timeLeft}s left.`;
    playSound('win');
  } else {
    state.streak = 0;
    const path = reconstructPath(currentWord());
    el.overlayTitle.textContent = reasonText || 'Round over';
    el.overlayText.textContent = path
      ? `One valid path: ${path.join(' -> ').toUpperCase()}`
      : `The goal word was ${state.puzzle.target.toUpperCase()}.`;
    playSound('lose');
  }
  updateStats();
  el.overlay.classList.add('visible');

  const shareText = buildShareText(won);
  showShareButton(shareText);
  if (state.mode === 'daily') {
    saveDailyRecord(state.dailyDate, {
      won,
      moves: state.moves,
      timeLeft: state.timeLeft,
      finalScore,
      path: state.path,
      overlayTitle: el.overlayTitle.textContent,
      overlayText: el.overlayText.textContent,
      shareText,
    });
  }
}

function reconstructPath(fromWord) {
  // BFS from fromWord to target using the puzzle graph, return word sequence.
  const { graph, target } = state.puzzle;
  if (!graph.has(fromWord)) return null;
  const prev = new Map([[fromWord, null]]);
  const queue = [fromWord];
  let head = 0;
  while (head < queue.length) {
    const cur = queue[head++];
    if (cur === target) break;
    for (const nb of graph.get(cur)) {
      if (!prev.has(nb)) {
        prev.set(nb, cur);
        queue.push(nb);
      }
    }
  }
  if (!prev.has(target)) return null;
  const seq = [];
  let node = target;
  while (node !== null) {
    seq.unshift(node);
    node = prev.get(node);
  }
  return seq;
}

// ---------- Input handling ----------
el.wordInput.addEventListener('input', () => {
  renderInputTiles(el.wordInput.value.toLowerCase(), state.puzzle.len);
});

el.wordInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    submitGuess();
  }
});

el.wordForm.addEventListener('submit', (e) => {
  e.preventDefault();
  submitGuess();
});

function submitGuess() {
  if (state.ended) return;
  const guess = el.wordInput.value.trim().toLowerCase();
  const cur = currentWord();
  const { graph, target, len } = state.puzzle;

  if (guess.length !== len) {
    return fail(`Word must be ${len} letters.`);
  }
  if (guess === cur) {
    return fail('That’s already your current word.');
  }
  if (state.path.includes(guess)) {
    return fail('You already used that word.');
  }
  if (!graph.has(guess)) {
    return fail(`"${guess}" isn’t in the word list.`);
  }
  if (diffCount(guess, cur) !== 1) {
    return fail('Change exactly one letter from the current word.');
  }

  // valid move
  state.path.push(guess);
  state.moves += 1;
  state.timeLeft = Math.min(90, state.timeLeft + 6);
  el.wordInput.value = '';
  renderInputTiles('', len);
  renderLadder();
  updateStats();

  if (guess === target) {
    setMessage('Goal reached!', 'success');
    endRound(true);
  } else {
    playSound('move');
    setMessage('Nice move! Keep going.', 'success');
  }
}

function fail(msg) {
  playSound('invalid');
  setMessage(msg, 'error');
  el.wordInput.classList.remove('shake');
  void el.wordInput.offsetWidth;
  el.wordInput.classList.add('shake');
}

// ---------- Buttons ----------
el.hintBtn.addEventListener('click', () => {
  if (state.ended) return;
  const cur = currentWord();
  const curDist = state.targetDist.get(cur);
  if (curDist === undefined) {
    setMessage('No hint available from here.', 'error');
    return;
  }
  const { graph, target } = state.puzzle;
  let hintWord = null;
  for (const nb of graph.get(cur)) {
    if (state.targetDist.get(nb) === curDist - 1) { hintWord = nb; break; }
  }
  if (!hintWord) {
    setMessage('No hint available from here.', 'error');
    return;
  }
  state.score = Math.max(0, state.score - 75);
  updateStats();
  playSound('hint');
  setMessage(`Hint: try "${hintWord}".`, 'success');
});

el.giveUpBtn.addEventListener('click', () => {
  if (state.ended) return;
  endRound(false, 'Gave up');
});

el.newBtn.addEventListener('click', () => {
  newPuzzle('random');
});

el.dailyBtn.addEventListener('click', () => {
  newPuzzle('daily');
});

el.pauseBtn.addEventListener('click', () => {
  if (state.ended) return;
  state.paused.manual = true;
  applyPauseState();
  el.pauseOverlay.classList.add('visible');
});

el.resumeBtn.addEventListener('click', () => {
  state.paused.manual = false;
  applyPauseState();
  el.pauseOverlay.classList.remove('visible');
});

el.overlayBtn.addEventListener('click', () => {
  newPuzzle('random');
});

el.muteBtn.addEventListener('click', () => {
  state.muted = !state.muted;
  localStorage.setItem('wld_muted', state.muted ? '1' : '0');
  el.muteBtn.textContent = state.muted ? '🔇' : '🔊';
  if (!state.muted) playSound('move');
});

// ---------- Tutorial ----------
const TUTORIAL_STEPS = [
  {
    title: 'Welcome to Word Ladder Duel',
    body: 'Turn the START word into the GOAL word by changing one letter at a time. Every word along the way has to be real too.',
  },
  {
    title: 'Change one letter at a time',
    body: 'Each move swaps exactly one letter for another. Here’s a full ladder from CAT to DOG:',
    demo: ['cat', 'cot', 'dot', 'dog'],
  },
  {
    title: 'Race the clock',
    body: 'You start with 60 seconds. Every valid move adds +6s, so good play buys you more time. A wrong guess just shakes the box — no time lost.',
  },
  {
    title: 'Hints & scoring',
    body: 'Stuck? Hint (−75 pts) reveals a valid next word, and Give Up reveals a full solution. Your score rewards fewer moves and more time left on the clock.',
  },
  {
    title: 'Daily Puzzle & sharing',
    body: 'Daily Puzzle gives everyone the same challenge each day — solve it once, then come back tomorrow for a new one. Share Result copies an emoji grid of your ladder to paste anywhere.',
  },
];

let tutorialStep = 0;

function renderTutorialStep() {
  const step = TUTORIAL_STEPS[tutorialStep];
  el.tutorialTitle.textContent = step.title;
  el.tutorialBody.textContent = step.body;
  el.tutorialDemo.innerHTML = '';
  if (step.demo) {
    step.demo.forEach((word, idx) => {
      const tiles = document.createElement('div');
      tiles.className = 'tiles';
      const prev = idx > 0 ? step.demo[idx - 1] : null;
      renderTiles(tiles, word, { compareTo: prev, diffOnly: !!prev });
      el.tutorialDemo.appendChild(tiles);
    });
  }
  el.tutorialDots.innerHTML = '';
  TUTORIAL_STEPS.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.className = 'tutorial-dot' + (i === tutorialStep ? ' active' : '');
    el.tutorialDots.appendChild(dot);
  });
  el.tutorialBack.disabled = tutorialStep === 0;
  el.tutorialNext.textContent = tutorialStep === TUTORIAL_STEPS.length - 1 ? "Let's play!" : 'Next';
}

function openTutorial() {
  tutorialStep = 0;
  renderTutorialStep();
  el.tutorialOverlay.classList.add('visible');
  state.paused.tutorial = true;
  applyPauseState();
}

function closeTutorial() {
  el.tutorialOverlay.classList.remove('visible');
  localStorage.setItem('wld_tutorial_seen', '1');
  state.paused.tutorial = false;
  applyPauseState();
}

el.tutorialNext.addEventListener('click', () => {
  if (tutorialStep === TUTORIAL_STEPS.length - 1) {
    closeTutorial();
  } else {
    tutorialStep += 1;
    renderTutorialStep();
  }
});

el.tutorialBack.addEventListener('click', () => {
  if (tutorialStep > 0) {
    tutorialStep -= 1;
    renderTutorialStep();
  }
});

el.tutorialSkip.addEventListener('click', closeTutorial);
el.helpBtn.addEventListener('click', openTutorial);

// ---------- Init ----------
newPuzzle('random');
if (!localStorage.getItem('wld_tutorial_seen')) {
  openTutorial();
}
