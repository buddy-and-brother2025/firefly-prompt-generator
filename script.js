const data = [
  {
    name: 'subject',
    label: '主題',
    tags: [
      { label: '猫', value: 'cat', children: [
        { label: '子猫', value: 'kitten' },
        { label: '虎猫', value: 'tiger cat' }
      ]},
      { label: '犬', value: 'dog', children: [
        { label: '子犬', value: 'puppy' }
      ]},
      { label: '花', value: 'flower' }
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
    btn.addEventListener('click', () => selectTag(cat.name, tag, btnWrap));
    btnWrap.appendChild(btn);
  });

  container.appendChild(btnWrap);
  return container;
}

function selectTag(category, tag, btnWrap) {
  selected[category] = tag.value;

  Array.from(btnWrap.querySelectorAll('button')).forEach(b => b.classList.remove('active'));
  event.target.classList.add('active');

  const existing = btnWrap.nextElementSibling;
  if (existing && existing.classList.contains('child-buttons')) {
    existing.remove();
  }

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

function clearSelection() {
  Object.keys(selected).forEach(k => delete selected[k]);
  document.querySelectorAll('button.active').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.child-buttons').forEach(el => el.remove());
  document.getElementById('prompt').value = '';
}

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('categories');
  data.forEach(cat => {
    container.appendChild(createCategory(cat));
  });

  document.getElementById('copyBtn').addEventListener('click', () => {
    navigator.clipboard.writeText(document.getElementById('prompt').value);
  });

  document.getElementById('clearBtn').addEventListener('click', clearSelection);
});
