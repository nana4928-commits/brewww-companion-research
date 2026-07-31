// Brew Companion — SORSO × 김진수 로스터리 catalog (from provided workbook)

export const MEMBER = {
  name: '지원',
  memberSince: '2024.03',
  tasteProfile: { acidity: 68, nutty: 34, balance: 72 },
  aromaExplore: { floral: 58, fruity: 84, citrus: 52, sweet: 68, nutty: 40, cacao: 26, winey: 16, roasted: 10, earthy: 12, herb: 44 },
};

// The 10 SORSO Aroma Wheel families, in wheel order.
export const AROMA_FAMILIES = [
  { key: 'floral', ko: '플로럴', color: 'var(--aroma-floral)' },
  { key: 'fruity', ko: '프루티', color: 'var(--aroma-fruity)' },
  { key: 'citrus', ko: '시트러스', color: 'var(--aroma-citrus)' },
  { key: 'sweet', ko: '스위트', color: 'var(--aroma-sweet)' },
  { key: 'nutty', ko: '너티', color: 'var(--aroma-nutty)' },
  { key: 'cacao', ko: '카카오', color: 'var(--aroma-cacao)' },
  { key: 'winey', ko: '와이니', color: 'var(--aroma-winey)' },
  { key: 'roasted', ko: '로스티', color: 'var(--aroma-roasted)' },
  { key: 'earthy', ko: '흙 향', color: 'var(--aroma-earthy)' },
  { key: 'herb', ko: '허브', color: 'var(--aroma-herb)' },
];

// Build Live-Brew step lists from a compact recipe descriptor.
function makeSteps(kind, r) {
  if (kind === 'pourover') return r.pours;
  if (kind === 'espresso' || kind === 'americano' || kind === 'latte') {
    const y = r.water, sec = r.sec || 32;
    const steps = [
      { id: 'purge', label: '예열', duration: 8, targetWeight: 0, action: '머신과 포터필터를 예열하고 물기를 닦아요.' },
      { id: 'dose', label: '분쇄·도징·탬핑', duration: 12, targetWeight: 0, action: `코만단테 ${r.grind}으로 분쇄한 원두 ${r.dose}g을 균일하게 담고 수평으로 탬핑해요.` },
      { id: 'shot', label: '에스프레소 추출', duration: sec, targetWeight: y, action: `약 ${sec}초 동안 ${y}g을 추출해요.` },
    ];
    if (kind === 'americano') steps.push({ id: 'water', label: '물 붓기', duration: 15, targetWeight: y + 150, action: '뜨거운 물 150ml에 샷을 부어 아메리카노를 완성해요.' });
    if (kind === 'latte') steps.push({ id: 'milk', label: '스팀 밀크', duration: 20, targetWeight: y + 150, action: '스팀한 우유 150ml를 부어 라떼를 완성해요.' });
    return steps;
  }
  if (kind === 'coldbrew') return [
    { id: 'grind', label: '분쇄·계량', duration: 15, targetWeight: 0, action: `코만단테 ${r.grind}으로 분쇄한 원두 ${r.dose}g을 필터백에 담아요.` },
    { id: 'pour', label: '물 붓기', duration: 25, targetWeight: r.water, action: `상온의 물 ${r.water}ml를 천천히 부어 원두를 고르게 적셔요.` },
    { id: 'steep', label: '냉침 대기', duration: 40, targetWeight: r.water, action: '냉장고에서 6~14시간 침출해요. (시연용으로 짧게 표시됩니다.)' },
  ];
  return r.pours || [];
}

const MARON_POURS = [
  { id: 'bloom', label: '뜸', duration: 35, targetWeight: 38, action: '원두 전체를 적시듯 물 38g을 붓고 약 35초 기다려요.' },
  { id: 'pour1', label: '1차 푸어', duration: 35, targetWeight: 108, action: '가는 물줄기로 약 35초간 70ml를 중앙에서 바깥으로 부어요.' },
  { id: 'pour2', label: '2차 푸어', duration: 20, targetWeight: 158, action: '물이 빠진 뒤 약 20초간 50ml를 부어요.' },
  { id: 'pour3', label: '3차 푸어', duration: 20, targetWeight: 228, action: '20초 이내로 60~70ml를 부어 마무리해요.' },
  { id: 'drawdown', label: 'Drawdown', duration: 40, targetWeight: 228, action: '물이 다 빠질 때까지 기다려요. 취향에 맞게 물 30~40ml로 희석해요.' },
];

// kind: espresso | americano | latte | brewing(pourover) | coldbrew
const RAW = [
  // ── Blending (renamed) ──
  { id: 'porong', cat: 'Blending', name: '포롱 / PORONG', origin: '에티오피아 블렌드', roast: '#55–60 · 시티', method: '브루잉',
    notes: ['열대과일', '베리', '자스민', '깔끔한 여운'], fams: ['fruity', 'floral', 'citrus'],
    cup: { aroma: 6, acidity: 6, sweet: 4, body: 3, bitter: 2 }, price: 17000,
    rec: { method: '브루잉', dose: 16, water: 240, temp: 90, time: '2:30', grind: '20 클릭', kind: 'pourover', pours: MARON_POURS },
    flavorNote: '밝은 산미와 열대과일, 베리류가 앞서고 자스민 향과 깔끔한 여운으로 마무리됩니다.', tag: 'close' },
  { id: 'rosa', cat: 'Blending', name: '로사 / ROSA', origin: '코스타리카·인도네시아·에티오피아', roast: '#35–38', method: '에스프레소',
    notes: ['시트러스', '플로랄', '굿 밸런스'], fams: ['citrus', 'floral'],
    cup: { aroma: 5, acidity: 4, sweet: 5, body: 5, bitter: 2 }, price: 15000,
    rec: { method: '에스프레소', dose: 18, water: 36, temp: 94, time: '0:32', grind: '9 클릭', kind: 'espresso', sec: 32 },
    flavorNote: '약한 시트러스와 플로랄이 은은하게 어우러지는, 균형 잡힌 블렌드입니다.', tag: 'similar' },
  { id: 'murr', cat: 'Blending', name: '무르 / MURR', origin: '콜롬비아·인도네시아·케냐', roast: '#30–35', method: '에스프레소',
    notes: ['와인', '고소함', '부드러운 바디', '긴 여운'], fams: ['winey', 'nutty'],
    cup: { aroma: 6, acidity: 4, sweet: 3, body: 5, bitter: 3 }, price: 15000,
    rec: { method: '에스프레소', dose: 17.5, water: 32, temp: 95, time: '0:31', grind: '8 클릭', kind: 'espresso', sec: 31 },
    flavorNote: '와인 같은 뉘앙스와 고소함, 부드러운 바디감이 긴 여운으로 이어집니다.', tag: 'curated' },
  { id: 'lemo', cat: 'Blending', name: '레모 / LEMO', origin: '콜롬비아·코스타리카', roast: '#35–38', method: '아메리카노',
    notes: ['레몬', '시트러스', '호두'], fams: ['citrus', 'nutty'],
    cup: { aroma: 5, acidity: 5, sweet: 4, body: 3, bitter: 2 }, price: 15000,
    rec: { method: '아메리카노', dose: 18, water: 38, temp: 94, time: '0:34', grind: '9 클릭', kind: 'americano', sec: 34 },
    flavorNote: '레몬과 시트러스의 산뜻함에 호두 고소함과 부드러운 바디가 받쳐줍니다.', tag: 'curated' },
  { id: 'maron', cat: 'Blending', name: '마론 / MARON', origin: '브라질·에티오피아·코스타리카', roast: '#35–38', method: '브루잉',
    notes: ['프루티', '카라멜', '견과류', '굿 밸런스'], fams: ['fruity', 'sweet', 'nutty'],
    cup: { aroma: 5, acidity: 5, sweet: 4, body: 3, bitter: 2 }, price: 15000,
    rec: { method: '브루잉', dose: 19, water: 240, temp: 88, time: '1:55', grind: '19 클릭', kind: 'pourover', pours: MARON_POURS },
    flavorNote: '프루티한 산미와 카라멜 단맛, 견과류의 고소함이 고르게 균형을 이룹니다.', tag: 'close' },
  { id: 'fino', cat: 'Blending', name: '피노 / FINO', origin: '콜롬비아·인도네시아', roast: '#35–38', method: '콜드브루',
    notes: ['고소함', '다크초콜릿', '긴 여운'], fams: ['nutty', 'cacao'],
    cup: { aroma: 5, acidity: 4, sweet: 4, body: 4, bitter: 4 }, price: 12000,
    rec: { method: '콜드브루', dose: 120, water: 1400, temp: 20, time: '8h', grind: '28 클릭', kind: 'coldbrew' },
    flavorNote: '밝은 산미와 고소함, 다크초콜릿의 여운이 길게 남는 블렌드입니다.', tag: 'curated' },
  { id: 'noir', cat: 'Blending', name: '누아 / NOIR', origin: '콜롬비아·브라질·인도네시아', roast: '#30–35', method: '아메리카노',
    notes: ['고소함', '강한 단맛', '다크초콜릿'], fams: ['nutty', 'sweet', 'cacao'],
    cup: { aroma: 5, acidity: 1, sweet: 5, body: 4, bitter: 4 }, price: 12000,
    rec: { method: '아메리카노', dose: 18, water: 38, temp: 94, time: '0:34', grind: '8 클릭', kind: 'americano', sec: 34 },
    flavorNote: '고소함과 강한 단맛, 마일드한 바디에 다크초콜릿의 묵직한 여운이 이어집니다.', tag: 'stretch' },
  { id: 'naru', cat: 'Blending', name: '나루 / NARU', origin: '콜롬비아·브라질·탄자니아', roast: '#30–35', method: '라떼',
    notes: ['고소함', '다크초콜릿', '긴 여운'], fams: ['nutty', 'cacao'],
    cup: { aroma: 4, acidity: 1, sweet: 6, body: 5, bitter: 4 }, price: 12000,
    rec: { method: '라떼', dose: 17, water: 40, temp: 92, time: '0:36', grind: '8 클릭', kind: 'latte', sec: 36 },
    flavorNote: '고소함과 다크초콜릿이 우유와 잘 어우러지며 긴 여운을 남기는 라떼용 블렌드입니다.', tag: 'stretch' },

  // ── Single Origin (9) ──
  { id: 'yirgacheffe-aricha', cat: 'Africa', name: '예가체프 G1 아리차 / Yirgacheffe Aricha', origin: '에티오피아', process: 'Washed', roast: '미디엄 라이트', method: '에스프레소',
    notes: ['부드러운 녹차', '자몽', '자두', '플로랄'], fams: ['floral', 'citrus', 'fruity', 'herb'],
    cup: { aroma: 6, acidity: 6, sweet: 5, body: 3, bitter: 2 }, price: 17000,
    rec: { method: '에스프레소', dose: 17, water: 34, temp: 92, time: '0:33', grind: '9 클릭', kind: 'espresso', sec: 33 },
    flavorNote: '산뜻하고 가벼운 바디에 부드러운 녹차, 자몽, 자두, 카라멜과 플로랄·베리 향이 어우러집니다.', tag: 'close' },
  { id: 'kenya-kiambu', cat: 'Africa', name: '케냐 키암부 AA TOP 틴간가 / Kenya Kiambu AA', origin: '케냐', process: 'Washed', roast: '미디엄', method: '에스프레소',
    notes: ['레드와인', '로즈', '자몽', '오렌지'], fams: ['winey', 'citrus', 'floral'],
    cup: { aroma: 4, acidity: 4, sweet: 4, body: 4, bitter: 2 }, price: 17000,
    rec: { method: '에스프레소', dose: 17, water: 35, temp: 92, time: '0:35', grind: '8 클릭', kind: 'espresso', sec: 35 },
    flavorNote: '레드와인과 크로와상, 로즈, 자몽과 오렌지가 어우러지는 균형형 컵입니다.', tag: 'curated', limited: true, dropCount: 18 },
  { id: 'guji-hambela', cat: 'Africa', name: '구지 함벨라 G1 Natural / Guji Hambela', origin: '에티오피아', process: 'Natural', roast: '미디엄 라이트', method: '에스프레소',
    notes: ['블루베리', '감귤', '레몬그라스', '부드러운 단맛'], fams: ['fruity', 'citrus', 'herb', 'sweet'],
    cup: { aroma: 6, acidity: 6, sweet: 5, body: 3, bitter: 2 }, price: 17000,
    rec: { method: '에스프레소', dose: 17, water: 33, temp: 91, time: '0:32', grind: '9 클릭', kind: 'espresso', sec: 32 },
    flavorNote: '내추럴 가공의 블루베리와 감귤, 레몬그라스, 부드러운 단맛이 화사하게 올라옵니다.', tag: 'similar' },
  { id: 'limu-geisha', cat: 'Africa', name: '리무 게이샤 G1 / Limu Geisha', origin: '에티오피아', process: 'Washed', roast: '미디엄 라이트', method: '에스프레소',
    notes: ['산뜻한 과일향', '초콜릿', '흑설탕'], fams: ['fruity', 'cacao', 'sweet'],
    cup: { aroma: 5, acidity: 5, sweet: 5, body: 3, bitter: 2 }, price: 17000,
    rec: { method: '에스프레소', dose: 17, water: 34, temp: 92, time: '0:33', grind: '9 클릭', kind: 'espresso', sec: 33 },
    flavorNote: '산뜻한 과일향에 초콜릿과 흑설탕의 단맛이 은은하게 받쳐주는 깨끗한 컵입니다.', tag: 'curated' },
  { id: 'sidamo-honey', cat: 'Africa', name: '시다모 구지 사키소 타데 GG 허니 G1', origin: '에티오피아', process: 'Honey', roast: '미디엄', method: '에스프레소',
    notes: ['자스민', '블루베리', '복숭아', '레몬'], fams: ['floral', 'fruity', 'citrus'],
    cup: { aroma: 4, acidity: 4, sweet: 4, body: 4, bitter: 2 }, price: 17000,
    rec: { method: '에스프레소', dose: 17, water: 34, temp: 92, time: '0:34', grind: '9 클릭', kind: 'espresso', sec: 34 },
    flavorNote: '자스민과 블루베리, 복숭아, 레몬이 어우러지는 중간 밸런스형 허니 프로세스 원두입니다.', tag: 'curated' },
  { id: 'koke', cat: 'Africa', name: '코케 G1 Natural / Koke', origin: '에티오피아', process: 'Natural', roast: '미디엄 라이트', method: '에스프레소',
    notes: ['프루티', '베리', '부드러운 단맛'], fams: ['fruity', 'sweet'],
    cup: { aroma: 7, acidity: 6, sweet: 6, body: 3, bitter: 1 }, price: 15000,
    rec: { method: '에스프레소', dose: 17, water: 33, temp: 91, time: '0:31', grind: '9 클릭', kind: 'espresso', sec: 31 },
    flavorNote: '에티오피아 내추럴 특유의 화사한 프루티함과 베리류, 부드러운 단맛에 깨끗한 신맛이 돋보입니다.', tag: 'similar' },
  { id: 'yirgacheffe-g2', cat: 'Africa', name: '예가체프 G2 / Yirgacheffe G2', origin: '에티오피아', process: 'Washed', roast: '미디엄 라이트', method: '에스프레소',
    notes: ['프루티', '베리', '깨끗한 신맛'], fams: ['fruity', 'floral', 'sweet'],
    cup: { aroma: 6, acidity: 6, sweet: 5, body: 3, bitter: 1 }, price: 10000,
    rec: { method: '에스프레소', dose: 17, water: 33, temp: 91, time: '0:31', grind: '9 클릭', kind: 'espresso', sec: 31 },
    flavorNote: '프루티하고 플로랄한 예가체프 프로파일에 부드러운 단맛과 깨끗한 신맛이 어우러집니다.', tag: 'curated' },
  { id: 'sidamo-washed', cat: 'Africa', name: '시다모 구지 사키소 타데 GG 워시드 G1', origin: '에티오피아', process: 'Washed', roast: '미디엄 라이트', method: '에스프레소',
    notes: ['프루티', '복숭아', '플로랄'], fams: ['fruity', 'floral'],
    cup: { aroma: 6, acidity: 6, sweet: 5, body: 3, bitter: 1 }, price: 17000,
    rec: { method: '에스프레소', dose: 17, water: 33, temp: 91, time: '0:31', grind: '9 클릭', kind: 'espresso', sec: 31 },
    flavorNote: '워시드 가공의 클린컵과 밝은 산미 위로 프루티함과 복숭아, 플로랄이 선명하게 드러납니다.', tag: 'curated' },
  { id: 'colombia-huila', cat: 'America', name: '콜롬비아 후일라 라스 플로레스 / Huila', origin: '콜롬비아', process: 'Washed', roast: '미디엄', method: '에스프레소',
    notes: ['레몬그라스', '오렌지', '로즈마리', '브라운슈가'], fams: ['citrus', 'herb', 'sweet'],
    cup: { aroma: 6, acidity: 6, sweet: 5, body: 4, bitter: 2 }, price: 17000,
    rec: { method: '에스프레소', dose: 17, water: 34, temp: 92, time: '0:33', grind: '8 클릭', kind: 'espresso', sec: 33 },
    flavorNote: '레몬그라스와 오렌지의 시트러스 산미에 로즈마리와 브라운슈가의 단맛이 어우러집니다.', tag: 'curated' },

  // ── Decaffein (1) ──
  { id: 'decaf-colombia', cat: 'Decaffein', name: '[Decaf] 콜롬비아 피탈리토 산 어거스틴 수프리모', origin: '콜롬비아', process: 'Decaf', roast: '미디엄', method: '에스프레소',
    notes: ['캐슈넛', '다크초코', '미디움 바디'], fams: ['nutty', 'cacao'],
    cup: { aroma: 3, acidity: 3, sweet: 3, body: 4, bitter: 3 }, price: 15000,
    rec: { method: '에스프레소', dose: 17, water: 35, temp: 92, time: '0:36', grind: '8 클릭', kind: 'espresso', sec: 36 },
    flavorNote: '마일드한 신맛과 미디움 바디에 로스팅 캐슈넛과 다크초코의 고소함이 부드럽게 이어집니다.', tag: 'stretch' },
];

const cl = (v) => Math.max(0, Math.min(100, Math.round(v)));
const BALANCE_HINT = (acid, body) => cl(((7 - Math.abs(acid - body)) / 7) * 100);

export const BEANS = RAW.map((b) => {
  const c = b.cup;
  const acidity = cl((c.acidity / 7) * 100);
  const nutty = cl((c.body / 7) * 100);
  const balance = cl((BALANCE_HINT(c.acidity, c.body) + (c.sweet / 7) * 100) / 2);
  const brewSteps = makeSteps(b.rec.kind, b.rec);
  const r = b.rec;
  return {
    id: b.id, name: b.name, origin: b.origin, process: b.process || '—', farm: b.origin,
    roast: b.roast, method: b.method,
    notes: b.notes, noteFams: b.fams,
    acidity, nutty, balance,
    cup: { aroma: c.aroma, acidity: c.acidity, sweet: c.sweet, body: c.body, bitter: c.bitter },
    price: b.price, size: 200,
    roastDate: '7.21', nextRoast: '7.28',
    recipe: { method: r.method, dose: r.dose, water: r.water, temp: r.temp, time: r.time, grind: r.grind },
    brewSteps,
    flavorNote: b.flavorNote,
    balanceNote: c.acidity >= 5 ? '산미가 또렷하게 앞서는 편이라, 밝고 화사한 잔을 좋아하는 분께 잘 맞습니다.'
      : c.body >= 5 ? '바디가 묵직하게 받쳐줘 진하고 여운이 오래 남는 잔을 좋아하는 분께 잘 맞습니다.'
      : '산미와 바디가 고르게 어우러져 어느 시간에 마셔도 편안한 균형입니다.',
    tempNotes: {
      hot: `${b.notes[0]} 향이 가장 진하게 열립니다.`,
      warm: `${b.notes[1] || b.notes[0]}의 단맛이 도드라지는 구간이에요.`,
      cool: `${b.notes[b.notes.length - 1]}의 여운이 은은하게 남습니다.`,
    },
    whyForYou: `${b.method} 방식과 잘 맞는 원두예요. ${b.notes.slice(0, 2).join('·')} 계열을 좋아하신다면 특히 추천드려요.`,
    tag: b.tag,
    limited: b.limited || false,
    dropCount: b.dropCount || 0,
  };
});

export const PERSONAL_COFFEES = [
  { id: 'p1', name: 'Fritz Coffee — Yirgacheffe', ownerNote: '직접 등록', origin: 'Ethiopia', acidity: 76, nutty: 22, balance: 60 },
];

export const SHELF = [
  {
    id: 'porong', name: '포롱 / PORONG', source: 'house',
    purchasedOn: '7.21', bagSize: 200, remaining: 180,
    openRecommended: '7.23–7.25 (로스팅 후 2–4일)', peakWindow: '7.26 – 8.05', estCups: 13, rebuyBy: '8.10',
  },
  {
    id: 'maron', name: '마론 / MARON', source: 'house',
    purchasedOn: '7.12', bagSize: 200, remaining: 40,
    openRecommended: '7.14–7.16 (로스팅 후 2–4일)', peakWindow: '7.17 – 7.27', estCups: 13, rebuyBy: '7.27',
  },
  {
    id: 'p1', name: 'Fritz Coffee — Yirgacheffe', source: 'personal',
    purchasedOn: '7.05', bagSize: 200, remaining: 60,
    openRecommended: '직접 기록 필요', peakWindow: '기록 없음', estCups: 13, rebuyBy: '—',
  },
];

export const BREW_LOG = [
  {
    id: 'b1042', beanId: 'porong', beanName: '포롱 / PORONG',
    date: '2026.07.20', time: '08:14', method: '브루잉',
    dose: 16, water: 240, temp: 90, duration: '2:38', grind: '18 클릭',
    taste: { acidity: 78, nutty: 24, balance: 70, overall: 'good' }, personalBest: true,
  },
  {
    id: 'b1038', beanId: 'porong', beanName: '포롱 / PORONG',
    date: '2026.07.18', time: '08:02', method: '브루잉',
    dose: 16, water: 240, temp: 90, duration: '2:51', grind: '20 클릭',
    taste: { acidity: 72, nutty: 22, balance: 60, overall: 'okay' },
  },
  {
    id: 'b1031', beanId: 'maron', beanName: '마론 / MARON',
    date: '2026.07.15', time: '07:58', method: '브루잉',
    dose: 19, water: 240, temp: 88, duration: '2:29', grind: '19 클릭',
    taste: { acidity: 56, nutty: 50, balance: 80, overall: 'good' },
  },
  {
    id: 'b1024', beanId: 'maron', beanName: '마론 / MARON',
    date: '2026.07.10', time: '08:20', method: '브루잉',
    dose: 19, water: 240, temp: 88, duration: '3:05', grind: '19 클릭',
    taste: { acidity: 50, nutty: 55, balance: 62, overall: 'meh' },
  },
];

// ── Community tab: member-shared recipes (drinks + brewing) ──
export const COMMUNITY_RECIPES = [
  { id: 'c1', kind: 'drink', name: 'Cascara Tonic', ko: '카스카라 토닉', author: '예진', handle: '@brew_yeajin', likes: 128, fam: 'citrus',
    tags: ['상큼', '여름', '논알콜'], summary: '에스프레소 한 샷에 카스카라 시럽과 토닉을 더한 청량한 시그니처.',
    ingredients: [['카스카라 시럽', '30ml'], ['토닉워터', '150ml'], ['에스프레소', '1샷'], ['라임', '1조각']],
    steps: ['잔에 얼음을 채우고 카스카라 시럽 30ml를 넣어요', '토닉워터 150ml를 부어 살살 저어요', '에스프레소 한 샷을 천천히 부어 층을 만들어요', '라임 한 조각을 짜 넣어 마무리해요'] },
  { id: 'c2', kind: 'drink', name: 'Einspänner', ko: '아인슈페너', author: '도희', handle: '@coffee_dohee', likes: 214, fam: 'cacao',
    tags: ['크림', '디저트', '겨울'], summary: '진한 롱블랙 위에 단단한 크림폼을 얹어 마지막까지 부드럽게.',
    ingredients: [['롱블랙', '180ml'], ['크림폼', '60ml'], ['비정제 설탕', '1작은술']],
    steps: ['롱블랙 180ml를 뜨겁게 준비해요', '비정제 설탕을 녹여 단맛을 맞춰요', '단단하게 휘핑한 크림폼 60ml를 위에 얹어요', '젓지 않고 크림과 함께 마셔요'] },
  { id: 'c3', kind: 'drink', name: 'Orange Cold Brew', ko: '오렌지 콜드브루', author: '민지', handle: '@minji.cup', likes: 173, fam: 'fruity',
    tags: ['상큼', '여름', '콜드브루'], summary: '피노 콜드브루에 오렌지즙과 탄산을 더한 상큼한 하이볼 스타일.',
    ingredients: [['콜드브루', '150ml'], ['오렌지즙', '60ml'], ['탄산수', '60ml'], ['오렌지필', '1']],
    steps: ['잔에 얼음과 오렌지즙 60ml를 넣어요', '콜드브루 150ml를 부어요', '탄산수 60ml를 더해 청량감을 살려요', '오렌지필로 향을 입혀 마무리해요'] },
  { id: 'c4', kind: 'brew', name: '주말 아침 드립', ko: '주말 아침 드립', author: '상현', handle: '@sanghyun.br', likes: 96, fam: 'floral',
    tags: ['핸드드립', '데일리', '포롱'], ratio: '1 : 16', level: '초급', summary: '포롱 원두로 느긋하게 내리는 주말 아침 루틴. 뜸을 넉넉히 줍니다.',
    ingredients: [['포롱 원두', '15g'], ['물', '240ml'], ['물 온도', '90°C'], ['총 시간', '2:45']],
    steps: ['포롱 15g을 코만단테 20 클릭으로 분쇄해요', '90°C 물로 40초 뜸을 들여요', '240ml까지 세 번에 나눠 부어요', '총 2:45 안에 추출을 마쳐요'] },
  { id: 'c5', kind: 'brew', name: '마론 딥 드립', ko: '마론 딥 드립', author: '태오', handle: '@taeo.roast', likes: 142, fam: 'sweet',
    tags: ['핸드드립', '진한맛', '마론'], ratio: '1 : 13', level: '중급', summary: '마론을 조금 진하게. 카라멜 단맛과 견과 바디를 끌어올린 레시피.',
    ingredients: [['마론 원두', '19g'], ['물', '250ml'], ['물 온도', '90°C'], ['총 시간', '2:30']],
    steps: ['마론 19g을 코만단테 18 클릭으로 분쇄해요', '90°C 물 40g으로 뜸을 들여요', '250ml까지 굵은 물줄기로 부어요', '2:30 전후로 진하게 마무리해요'] },
  { id: 'c6', kind: 'drink', name: 'Honey Flat White', ko: '허니 플랫 화이트', author: '수아', handle: '@sua.latte', likes: 88, fam: 'nutty',
    tags: ['라떼', '단맛', '데일리'], summary: '누아 두 샷에 야생화 꿀과 벨벳 밀크를 더한 부드러운 플랫 화이트.',
    ingredients: [['에스프레소', '2샷'], ['스팀 밀크', '150ml'], ['야생화 꿀', '2작은술']],
    steps: ['누아 두 샷을 추출해요', '야생화 꿀 2작은술을 샷에 녹여요', '벨벳 밀크 150ml를 부어요', '얇은 폼으로 마무리해요'] },
];

// ── Community tab: expert / authority brewing methods ──
export const EXPERT_RECIPES = [
  { id: 'e1', name: '4:6 Method', ko: '테츠 카사야 4:6', author: 'Tetsu Kasuya', org: '2016 월드 브루어스컵 챔피언', fam: 'citrus',
    ratio: '1 : 15', level: '중급', time: '3:30', likes: 1243,
    desc: '물을 4와 6으로 나눠 붓고, 앞부분 두 번의 물로 산미와 단맛을 조절하는 대회 우승 레시피.',
    steps: ['원두 20g / 물 300ml, 다섯 번에 나눠 붓기', '0:00 — 60ml (뜸)', '0:45 — 60ml (단맛)', '1:30 · 2:10 · 2:40 — 60ml씩 (농도)'] },
  { id: 'e2', name: 'Ultimate V60', ko: '제임스 호프만 V60', author: 'James Hoffmann', org: '2007 월드 바리스타 챔피언', fam: 'fruity',
    ratio: '1 : 16.6', level: '초급', time: '3:30', likes: 2891,
    desc: '한 번의 블룸과 꾸준한 스월링만으로 누구나 안정적인 한 잔을 낼 수 있는 기준 레시피.',
    steps: ['원두 30g / 물 500ml', '블룸 100ml, 45초 스월', '두 번에 나눠 200ml씩', '드리퍼 가볍게 흔들어 평평하게'] },
  { id: 'e3', name: 'Onyx Standard', ko: '오닉스 스탠다드 드립', author: 'Onyx Coffee Lab', org: '미국 스페셜티 로스터리', fam: 'winey',
    ratio: '1 : 16.7', level: '초급', time: '3:00', likes: 1024,
    desc: '밝고 깔끔한 잔을 위한 로스터리의 기준 드립. 안정적인 붓기 간격이 핵심입니다.',
    steps: ['원두 22g / 물 368ml', '블룸 60g, 45초', '30초 간격으로 균등하게 붓기', '2:45 전후 드로우다운 완료'] },
  { id: 'e4', name: 'Kalita 3-Pour', ko: '칼리타 웨이브 3-푸어', author: 'SORSO 가이드', org: '소르소 브루잉 가이드', fam: 'earthy',
    ratio: '1 : 15', level: '중급', time: '3:00', likes: 612,
    desc: '평평한 추출면으로 균형 잡힌 바디를 만드는 웨이브 드리퍼 레시피.',
    steps: ['원두 20g / 물 300ml', '블룸 50ml, 30초', '150ml까지 천천히', '300ml까지 세 번째 붓기'] },
];

// ── 나의 브루잉 실험실: per-bean tuning experiments ──
// Each experiment changes one variable and records the taste result, dialing toward "best".
export const LAB_BEANS = [
  { beanId: 'porong', method: '핸드드립 · V60',
    experiments: [
      { seq: 1, date: '07.02', changed: '기본 레시피', arrow: '', dose: 16, water: 240, temp: 92, grind: '22 클릭', time: '2:50',
        taste: { acidity: 72, body: 30, balance: 58 }, overall: 'okay', note: '레시피북 기본값 그대로. 산미는 좋은데 조금 밍밍하고 물맛이 남아요.' },
      { seq: 2, date: '07.06', changed: '분쇄도 22 → 20 클릭', arrow: 'down', dose: 16, water: 240, temp: 92, grind: '20 클릭', time: '2:58',
        taste: { acidity: 76, body: 40, balance: 64 }, overall: 'okay', note: '곱게 가니 바디가 살고 단맛이 붙었어요. 아직 산미가 살짝 뾰족합니다.' },
      { seq: 3, date: '07.11', changed: '물 온도 92 → 90°C', arrow: 'down', dose: 16, water: 240, temp: 90, grind: '20 클릭', time: '2:52',
        taste: { acidity: 74, body: 42, balance: 68 }, overall: 'good', note: '온도를 낮추니 날카롭던 산미가 부드러워지고 균형이 좋아졌어요.' },
      { seq: 4, date: '07.16', changed: '원두 16 → 17g', arrow: 'up', dose: 17, water: 240, temp: 90, grind: '20 클릭', time: '2:44',
        taste: { acidity: 72, body: 48, balance: 70 }, overall: 'good', note: '1g 늘리니 더 묵직하고 여운이 길어졌어요. 아침에 딱 좋은 농도.' },
      { seq: 5, date: '07.20', changed: '뜸 35 → 40초 · 분쇄 18 클릭', arrow: 'down', dose: 17, water: 240, temp: 90, grind: '18 클릭', time: '2:38',
        taste: { acidity: 78, body: 46, balance: 72 }, overall: 'best', best: true, note: '뜸을 늘리고 한 단계 더 곱게. 산미·단맛·바디가 딱 맞아떨어져요. 나의 최적값.' },
    ] },
  { beanId: 'maron', method: '핸드드립 · V60',
    experiments: [
      { seq: 1, date: '07.05', changed: '기본 레시피', arrow: '', dose: 19, water: 240, temp: 88, grind: '20 클릭', time: '3:05',
        taste: { acidity: 50, body: 55, balance: 62 }, overall: 'meh', note: '추출이 길어 텁텁하고 끝에 쓴맛이 돌았어요.' },
      { seq: 2, date: '07.09', changed: '분쇄도 20 → 19 클릭 · 시간 단축', arrow: 'up', dose: 19, water: 240, temp: 88, grind: '19 클릭', time: '2:45',
        taste: { acidity: 54, body: 52, balance: 70 }, overall: 'okay', note: '살짝 굵게 갈고 시간을 줄이니 쓴맛이 빠지고 카라멜 단맛이 올라왔어요.' },
      { seq: 3, date: '07.13', changed: '물 온도 88 → 90°C', arrow: 'up', dose: 19, water: 240, temp: 90, grind: '19 클릭', time: '2:40',
        taste: { acidity: 58, body: 50, balance: 74 }, overall: 'good', note: '온도를 올리니 견과 고소함과 단맛이 또렷해졌어요.' },
      { seq: 4, date: '07.15', changed: '원두 19 → 18g', arrow: 'down', dose: 18, water: 240, temp: 90, grind: '19 클릭', time: '2:29',
        taste: { acidity: 56, body: 50, balance: 80 }, overall: 'best', best: true, note: '1g 줄여 가볍게. 프루티·카라멜·견과가 고르게 어우러진 최적값이에요.' },
    ] },
  { beanId: 'guji-hambela', method: '에스프레소',
    experiments: [
      { seq: 1, date: '07.08', changed: '기본 레시피', arrow: '', dose: 17, water: 33, temp: 91, grind: '9 클릭', time: '0:32',
        taste: { acidity: 60, body: 55, balance: 60 }, overall: 'okay', note: '샷이 조금 빠르게 흘러 산미가 뾰족하게 앞섰어요.' },
      { seq: 2, date: '07.14', changed: '분쇄도 9 → 8 클릭', arrow: 'down', dose: 17, water: 33, temp: 91, grind: '8 클릭', time: '0:35',
        taste: { acidity: 62, body: 60, balance: 68 }, overall: 'good', note: '분쇄를 곱게 하니 흐름이 느려지고 블루베리 단맛이 진해졌어요.' },
      { seq: 3, date: '07.19', changed: '도징 17 → 18g · 36ml', arrow: 'up', dose: 18, water: 36, temp: 91, grind: '8 클릭', time: '0:34',
        taste: { acidity: 60, body: 64, balance: 74 }, overall: 'best', best: true, note: '도징을 늘려 바디를 보강. 블루베리·감귤 균형이 가장 좋은 최적값.' },
    ] },
];

// Fallback pour-over steps (used only if a bean has none).
export const BREW_STEPS = MARON_POURS;
