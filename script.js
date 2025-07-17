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
    { label: '80代', value: 'woman in her 80s' }
  ]
},

    { label: '人物（男性）', value: 'man portrait' },
    { label: 'こども（男の子）', value: 'boy child' },
    { label: 'こども（女の子）', value: 'girl child' },
    { label: '赤ちゃん', value: 'baby' },
    { label: '動物', value: 'animal', children: [
      { label: 'キツネ', value: 'fox' },
      { label: 'うさぎ', value: 'rabbit' },
      { label: '馬', value: 'horse' }
    ]},
    { label: '犬', value: 'dog', children: [
      { label: '子犬', value: 'puppy' },
      { label: '柴犬', value: 'shiba inu' }
    ]},
    { label: '猫', value: 'cat', children: [
      { label: '子猫', value: 'kitten' },
      { label: '虎猫', value: 'tiger cat' }
    ]},
    { label: '花', value: 'flower', children: [
      { label: 'バラ', value: 'rose' },
      { label: 'チューリップ', value: 'tulip' },
      { label: '桜', value: 'cherry blossom' }
    ]},
    { label: '天気', value: 'weather', children: [
      { label: '晴れ', value: 'sunny sky' },
      { label: '雨', value: 'rainy day' },
      { label: '霧', value: 'foggy' }
    ]},
    { label: '鳥', value: 'bird', children: [
      { label: 'フクロウ', value: 'owl' },
      { label: 'インコ', value: 'parrot' },
      { label: 'カワセミ', value: 'kingfisher' }
    ]},
    { label: '魚 / 水中生物', value: 'underwater creature', children: [
      { label: 'クラゲ', value: 'jellyfish' },
      { label: '熱帯魚', value: 'tropical fish' }
    ]},
    { label: 'ドリンク', value: 'drink', children: [
      { label: 'コーヒー', value: 'coffee cup' },
      { label: '紅茶', value: 'tea cup' },
      { label: 'ワイン', value: 'wine glass' }
    ]},
    { label: '風景', value: 'landscape', children: [
      { label: '山', value: 'mountain' },
      { label: '海', value: 'ocean' },
      { label: '草原', value: 'meadow' }
    ]},
    { label: '建物', value: 'architecture', children: [
      { label: '一軒家', value: 'house' },
      { label: 'ビル', value: 'skyscraper' },
      { label: '教会', value: 'church' }
    ]},
    { label: 'イベント', value: 'event', children: [
      { label: '誕生日', value: 'birthday party' },
      { label: '結婚式', value: 'wedding' },
      { label: 'お祭り', value: 'festival' }
    ]},
    { label: 'インテリア', value: 'interior', children: [
      { label: 'キッチン', value: 'kitchen interior' },
      { label: 'リビング', value: 'living room' },
      { label: '書斎', value: 'study room' }
    ]},
    { label: 'テクスチャ', value: 'texture', children: [
      { label: '木目', value: 'wood grain' },
      { label: '金属', value: 'metal surface' },
      { label: '布', value: 'fabric texture' }
    ]}
  ]
},

  {
    name: 'style',
    label: 'スタイル',
    tags: [
      { label: '水彩', value: 'watercolor' },
      { label: '油絵', value: 'oil painting' },
      { label: 'アニメ', value: 'anime style' }
    ]
  },
  {
    name: 'background',
    label: '背景',
    tags: [
      { label: '室内', value: 'indoor' },
      { label: '屋外', value: 'outdoor' }
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
  selected[category] = tag.value;

  // 全てのボタンのactive解除
  Array.from(btnWrap.querySelectorAll('button')).forEach(b => b.classList.remove('active'));
  event.target.classList.add('active');

  // 既存の子ボタン削除
  const existing = btnWrap.nextElementSibling;
  if (existing && existing.classList.contains('child-buttons')) {
    existing.remove();
  }

  // 子ボタンがある場合は生成
  if (tag.children) {
    const childWrap = document.createElement('div');
    childWrap.className = 'child-buttons';

    tag.children.forEach(child => {
      const cbtn = document.createElement('button');
      cbtn.textContent = child.label;
      cbtn.addEventListener('click', () => {
        selected[category] = child.value;
        Array.from(childWrap.querySelectorAll('button')).forEach(b => b.classList.remove('active'));
        cbtn.classList.add('active');
        updatePrompt();
      });
      childWrap.appendChild(cbtn);
    });

    btnWrap.after(childWrap);
  }

  updatePrompt();
}

function updatePrompt() {
  const promptArea = document.getElementById('prompt');
  const parts = Object.values(selected);
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
