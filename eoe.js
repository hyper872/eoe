
最後に、このテンプレートに動的な機能を追加するために、以下のJavaScriptを作成します。

```javascript
// スムーズスクロールの設定
const scroll = new SmoothScroll('a[href*="#"]', {
	speed: 500
});

// ナビゲーションメニューのトグル
const menuToggle = document.querySelector('#menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
	nav.classList.toggle('show-menu');
});

// フォームの送信処理
const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');

form.addEventListener('submit', (event) => {
	event.preventDefault();
	alert(`Name: ${nameInput.value}\nEmail: ${emailInput.value}\nMessage: ${messageInput.value}`);
});
