const data = [
  {
    name: 'subject',
    label: '主題',
    tags: [
      {
        label: '人物（女性）',
        value: 'woman portrait',
        children: [
          { label: '赤ちゃん', value: 'baby girl' },
          { label: '3歳', value: '3 year old girl' },
          { label: '小学生', value: 'elementary school girl' },
          { label: '中学生', value: 'junior high school girl' },
          { label: '高校生', value: 'high school girl' },
          { label: '10代', value: 'teenage girl' },
          { label: '20代', value: 'woman in her 20s' },
          { label: '30代', value: 'woman in her 30s' },
          { label: '40代', value: 'woman in her 40s' },
          { label: '50代', value: 'woman in her 50s' },
          { label: '60代', value: 'woman in her 60s' },
          { label: '70代', value: 'woman in her 70s' },
          { label: '80代', value: 'woman in her 80s' },
          { label: '日本人', value: 'Japanese woman' },
          { label: 'アメリカ人', value: 'American woman' },
          { label: '白人', value: 'Caucasian woman' },
          { label: '黒人', value: 'Black woman' }
        ]
      },

      {
        label: '人物（男性）', value: 'man portrait',
        children: [
          { label: '赤ちゃん', value: 'baby girl' },
          { label: '3歳', value: '3 year old girl' },
          { label: '小学生', value: 'elementary school girl' },
          { label: '中学生', value: 'junior high school girl' },
          { label: '高校生', value: 'high school girl' },
          { label: '10代', value: 'teenage girl' },
          { label: '20代', value: 'woman in her 20s' },
          { label: '30代', value: 'woman in her 30s' },
          { label: '40代', value: 'woman in her 40s' },
          { label: '50代', value: 'woman in her 50s' },
          { label: '60代', value: 'woman in her 60s' },
          { label: '70代', value: 'woman in her 70s' },
          { label: '80代', value: 'woman in her 80s' },
          { label: '日本人', value: 'Japanese woman' },
          { label: 'アメリカ人', value: 'American woman' },
          { label: '白人', value: 'Caucasian woman' },
          { label: '黒人', value: 'Black woman' }
        ]
      },
      {
        label: '動物', value: 'animal', children: [
          { label: 'キツネ', value: 'fox' },
          { label: 'うさぎ', value: 'rabbit' },
          { label: '馬', value: 'horse' },
          { label: '猿', value: 'monkey' },
          { label: 'ゴリラ', value: 'gorilla' },
          { label: 'シマウマ', value: 'zebra' },
          { label: 'キリン', value: 'giraffe' },
          { label: '像', value: 'elephant' },
          { label: '鹿', value: 'deer' },
          { label: 'カバ', value: 'hippopotamus' }

        ]
      },
      {
        label: '犬', value: 'dog', children: [
          { label: '子犬', value: 'puppy' },
          { label: '柴犬', value: 'shiba inu' },
          { label: '雑種', value: 'mixed breed dog' },
          { label: '老犬', value: 'senior dog' },
          { label: 'ダックスフント', value: 'dachshund' },
          { label: 'チワワ', value: 'chihuahua' },
          { label: 'パピヨン', value: 'papillon' },
          { label: 'ドーベルマン', value: 'doberman' },
          { label: 'イタリアングレーハウンド', value: 'Italian greyhound' },
          { label: '秋田犬', value: 'Akita dog' }
        ]
      },
      {
        label: '猫', value: 'cat', children: [
          { label: '子猫', value: 'kitten' },
        ]
      },
      {
        label: '花', value: 'flower', children: [
          { label: 'バラ', value: 'rose' },
          { label: 'チューリップ', value: 'tulip' },
          { label: '桜', value: 'cherry blossom' }
        ]
      },
      {
        label: '天気', value: 'weather', children: [
          { label: '空', value: 'sky' },
          { label: '夜空', value: 'night sky' },
          { label: '雲', value: 'clouds' },
          { label: '入道雲', value: 'cumulonimbus clouds' },
          { label: '星空', value: 'starry sky' },
          { label: '雪', value: 'snowfall' },
          { label: '晴れ', value: 'sunny sky' },
          { label: '雨', value: 'rainy day' },
          { label: '霧', value: 'foggy' }
        ]
      },
      {
        label: '鳥', value: 'bird', children: [
          { label: 'フクロウ', value: 'owl' },
          { label: 'インコ', value: 'parrot' },
          { label: 'カワセミ', value: 'kingfisher' },
          { label: 'カラス', value: 'crow' },
          { label: 'ニワトリ', value: 'chicken' },
          { label: 'スズメ', value: 'sparrow' },
        ]
      },
      {
        label: '魚 / 水中生物', value: 'underwater creature', children: [
          { label: 'クラゲ', value: 'jellyfish' },
          { label: '熱帯魚', value: 'tropical fish' }
        ]
      },
      {
        label: 'ドリンク', value: 'drink', children: [
          { label: 'コーヒー', value: 'coffee cup' },
          { label: '紅茶', value: 'tea cup' },
          { label: 'ワイン', value: 'wine glass' },
          { label: 'お茶', value: 'tea' },
          { label: '抹茶', value: 'matcha green tea' },
          { label: '麦茶', value: 'barley tea' },
          { label: 'コーラ', value: 'cola' },
          { label: 'ビール', value: 'beer' },
          { label: 'お酒', value: 'sake' },
          { label: 'メロンソーダ', value: 'melon soda' },
        ]
      },
      {
        label: '風景', value: 'landscape', children: [
          { label: '山', value: 'mountain' },
          { label: '海', value: 'ocean' },
          { label: '草原', value: 'meadow' },
          { label: '冬山', value: 'snowy mountain' },
          { label: '田舎', value: 'countryside' },
          { label: '川', value: 'river' },
          { label: '滝', value: 'waterfall' },
          { label: '紅葉', value: 'autumn leaves' },
          { label: '都会', value: 'urban cityscape' },
          { label: '郊外', value: 'suburban area' },
          { label: '住宅街', value: 'residential neighborhood' },
          { label: '公園', value: 'park scenery' },
          { label: '森林', value: 'forest' },
          { label: '自然', value: 'natural landscape' },
          { label: '駅前', value: 'in front of a station' },
          { label: '宇宙', value: 'outer space' },
        ]
      },
      {
        label: '建物', value: 'architecture', children: [
          { label: '一軒家', value: 'house' },
          { label: 'ビル', value: 'skyscraper' },
          { label: '教会', value: 'church' },
          { label: 'ビル群', value: 'city buildings' },
          { label: 'アパート', value: 'apartment building' },
          { label: 'マンション', value: 'condominium' },
          { label: '駅', value: 'train station exterior' },
        ]
      },
      {
        label: 'イベント', value: 'event', children: [
          { label: '誕生日', value: 'birthday party' },
          { label: '結婚式', value: 'wedding' },
          { label: 'お祭り', value: 'festival' }
        ]
      },
      {
        label: 'インテリア', value: 'interior', children: [
          { label: 'キッチン', value: 'kitchen interior' },
          { label: 'リビング', value: 'living room' },
          { label: '書斎', value: 'study room' }
        ]
      },
      {
        label: 'テクスチャ', value: 'texture', children: [
          { label: '木目', value: 'wood grain' },
          { label: '金属', value: 'metal surface' },
          { label: '布', value: 'fabric texture' },
          { label: 'コルク', value: 'cork texture' },
          { label: '壁', value: 'wall surface' },
          { label: '汚れた壁', value: 'dirty wall texture' },
          { label: 'クラフト紙', value: 'kraft paper texture' },
          { label: '大理石', value: 'marble texture' },
          { label: '芝生', value: 'grass surface' },
          { label: 'ウール', value: 'wool texture' },
          { label: 'ざらざら', value: 'rough texture' },
          { label: 'つるつる', value: 'smooth texture' },
          { label: 'マット', value: 'matte surface' },
          { label: '光沢', value: 'glossy surface' },
          { label: '水面', value: 'water surface texture' },
          { label: 'ひび割れ', value: 'cracked surface' },
          { label: '布のしわ', value: 'wrinkled fabric' },

        ]
      },
      {
        label: '国',
        value: 'country',
        children: [
          { label: '日本', value: 'Japan' },
          { label: 'アメリカ', value: 'United States' },
          { label: 'フランス', value: 'France' },
          { label: 'イギリス', value: 'United Kingdom' },
          { label: 'イタリア', value: 'Italy' },
          { label: 'ドイツ', value: 'Germany' },
          { label: 'スペイン', value: 'Spain' },
          { label: '中国', value: 'China' },
          { label: '韓国', value: 'South Korea' },
          { label: 'インド', value: 'India' },
          { label: 'ブラジル', value: 'Brazil' },
          { label: 'メキシコ', value: 'Mexico' },
          { label: 'ロシア', value: 'Russia' },
          { label: 'エジプト', value: 'Egypt' },
          { label: 'オーストラリア', value: 'Australia' }
        ]
      }


    ]
  },

  {
  name: 'style',
  label: 'スタイル',
  tags: [
    {
      label: '水彩', value: 'watercolor',
      children: [
        { label: '淡い', value: 'light watercolor' },
        { label: 'にじみ', value: 'bleeding watercolor' },
        { label: '透明感', value: 'transparent watercolor' }
      ]
    },
    {
      label: '油絵', value: 'oil painting',
      children: [
        { label: '厚塗り', value: 'impasto' },
        { label: 'リアル調', value: 'realistic oil painting' },
        { label: '印象派', value: 'impressionist' }
      ]
    },
    {
      label: 'アニメ', value: 'anime style',
      children: [
        { label: '手描き風', value: 'hand-drawn anime' },
        { label: 'セル画調', value: 'cel-shading' },
        { label: 'デフォルメ', value: 'chibi style' }
      ]
    },
    {
      label: 'スケッチ', value: 'sketch',
      children: [
        { label: '鉛筆', value: 'pencil sketch' },
        { label: 'シャープ', value: 'sharp lines' },
        { label: 'ラフ', value: 'rough sketch' }
      ]
    },
    {
      label: 'インク画', value: 'ink drawing',
      children: [
        { label: 'モノクロ', value: 'monochrome ink' },
        { label: 'ペン画', value: 'pen drawing' },
        { label: '漫画風', value: 'comic style ink' }
      ]
    },
    {
      label: 'ピクセルアート', value: 'pixel art',
      children: [
        { label: '8bit', value: '8-bit style' },
        { label: '16bit', value: '16-bit style' },
        { label: 'モザイク調', value: 'mosaic pixel' }
      ]
    },
    {
      label: 'サイバーパンク', value: 'cyberpunk',
      children: [
        { label: 'ネオン', value: 'neon lights' },
        { label: '都市未来', value: 'futuristic city' },
        { label: 'ダーク', value: 'dark cyberpunk' }
      ]
    },
    {
      label: 'ヴィンテージ', value: 'vintage style',
      children: [
        { label: 'セピア', value: 'sepia tone' },
        { label: '古写真風', value: 'old photo style' },
        { label: 'レトロカラー', value: 'retro color scheme' }
      ]
    },
    {
      label: 'ノスタルジック', value: 'nostalgic style',
      children: [
        { label: '昭和風', value: 'showa-era style' },
        { label: '昔の風景', value: 'nostalgic landscape' },
        { label: 'アナログ感', value: 'analog feel' }
      ]
    },
    {
      label: 'ジオメトリック', value: 'geometric style',
      children: [
        { label: '三角形', value: 'triangle motif' },
        { label: 'シンメトリー', value: 'symmetry' },
        { label: 'パターン', value: 'geometric pattern' }
      ]
    },
    {
      label: 'ミニマル', value: 'minimalist style',
      children: [
        { label: '白背景', value: 'white background' },
        { label: '少ない要素', value: 'few elements' },
        { label: 'モノトーン', value: 'monotone' }
      ]
    },
    {
      label: 'スチームパンク', value: 'steampunk',
      children: [
        { label: '歯車', value: 'gears' },
        { label: '蒸気機械', value: 'steam machines' },
        { label: '真鍮', value: 'brass elements' }
      ]
    },
    {
      label: '和風イラスト', value: 'japanese style illustration',
      children: [
        { label: '浮世絵', value: 'ukiyo-e' },
        { label: '和紙風', value: 'washi texture' },
        { label: '筆タッチ', value: 'brush stroke' }
      ]
    },
    {
      label: '絵本タッチ', value: 'storybook style',
      children: [
        { label: 'ほっこり系', value: 'warm tone' },
        { label: 'ふんわり背景', value: 'soft background' },
        { label: '手描き線', value: 'hand-drawn lines' }
      ]
    }
  ]
},

  {
    name: 'background',
    label: '背景',
    tags: [
      { label: '室内', value: 'indoor' },
      { label: '屋外', value: 'outdoor' },
      { label: '街中', value: 'urban street' },
      { label: '都会', value: 'cityscape' },
      { label: '商店街', value: 'shopping district' },
      { label: '住宅街', value: 'residential area' },
      { label: '自然', value: 'nature background' },
      { label: '海', value: 'ocean background' },
      { label: '山', value: 'mountain background' },
      { label: '白', value: 'white background' },
      { label: '黒', value: 'black background' },
      { label: '背景透過', value: 'transparent background' }
    ]
  },
  {
    name: 'light',
    label: '光',
    tags: [
      { label: '昼', value: 'daylight' },
      { label: '夜', value: 'night' }
    ]
  },
  {
    name: 'camera',
    label: 'カメラアングル',
    tags: [
      { label: '正面', value: 'front view' },
      { label: '俯瞰', value: 'top view' }
    ]
  }
];

const selected = {};

function createCategory(cat) {
  const container = document.createElement('div');
  container.className = 'category';
  const title = document.createElement('h2');
  title.textContent = cat.label;
  container.appendChild(title);

  const btnWrap = document.createElement('div');
  btnWrap.className = 'buttons';
  cat.tags.forEach(tag => {
    const btn = document.createElement('button');
    btn.textContent = tag.label;
    btn.addEventListener('click', (event) => selectTag(cat.name, tag, btnWrap, event));
    btnWrap.appendChild(btn);
  });

  container.appendChild(btnWrap);
  return container;
}

function selectTag(category, tag, btnWrap, event) {
  // 親カテゴリの選択（1つだけ選べる）
  selected[category] = tag.value;

  // 親ボタンの見た目更新
  Array.from(btnWrap.querySelectorAll('button')).forEach(b => b.classList.remove('active'));
  event.target.classList.add('active');

  // 既に表示されてる子ボタンがあれば削除
  const childrenWrap = btnWrap.nextElementSibling;
  if (childrenWrap && childrenWrap.classList.contains('child-buttons')) {
    childrenWrap.remove();
  }

  // 子タグ（派生）があれば表示して複数選択可能に
  if (tag.children) {
    const childWrap = document.createElement('div');
    childWrap.className = 'child-buttons';

    tag.children.forEach(child => {
      const cbtn = document.createElement('button');
      cbtn.textContent = child.label;

      cbtn.addEventListener('click', () => {
        const key = `${category}_children`;
        if (!Array.isArray(selected[key])) {
          selected[key] = [];
        }

        const index = selected[key].indexOf(child.value);
        if (index > -1) {
          // すでに選ばれてたら外す
          selected[key].splice(index, 1);
          cbtn.classList.remove('active');
        } else {
          // 新しく追加
          selected[key].push(child.value);
          cbtn.classList.add('active');
        }

        updatePrompt();
      });

      childWrap.appendChild(cbtn);
    });

    // 親ボタンの下に追加表示
    btnWrap.after(childWrap);
  }

  updatePrompt();
}

function updatePrompt() {
  const promptArea = document.getElementById('prompt');
  const parts = [];

  Object.keys(selected).forEach(key => {
    const val = selected[key];
    if (Array.isArray(val)) {
      parts.push(...val);
    } else {
      parts.push(val);
    }
  });

  promptArea.value = parts.join(', ');
}

function copyPrompt() {
  const prompt = document.getElementById('prompt').value;
  navigator.clipboard.writeText(prompt).then(() => {
    showCopyMessage();
  });
}

function showCopyMessage() {
  const status = document.getElementById('copyStatus');
  status.textContent = 'コピーしました';
  status.style.opacity = '1';

  setTimeout(() => {
    status.style.opacity = '0';
  }, 2000);
}

function clearSelection() {
  // 状態リセット
  Object.keys(selected).forEach(k => delete selected[k]);

  // 全てのアクティブクラス解除
  document.querySelectorAll('button.active').forEach(b => b.classList.remove('active'));

  // 派生ボタン削除
  document.querySelectorAll('.child-buttons').forEach(el => el.remove());

  // プロンプトクリア
  document.getElementById('prompt').value = '';
}

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('categories');
  data.forEach(cat => {
    container.appendChild(createCategory(cat));
  });

  // コピー処理
  document.getElementById('copyBtn').addEventListener('click', () => {
    const promptText = document.getElementById('prompt').value;
    const copyBtn = document.getElementById('copyBtn');
    const status = document.getElementById('copyStatus');

    navigator.clipboard.writeText(promptText).then(() => {
      // メッセージ表示
      status.textContent = 'コピーしました';
      status.style.opacity = '1';

      // ボタンに一時的なアニメーションスタイルを追加
      copyBtn.classList.add('copied');

      // 2秒後に元に戻す
      setTimeout(() => {
        status.style.opacity = '0';
        copyBtn.classList.remove('copied');
      }, 2000);
    });
  });

  // クリア処理
  document.getElementById('clearBtn').addEventListener('click', clearSelection);
});
