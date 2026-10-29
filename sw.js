// キャッシュの基本登録（空でもPWA要件は通ります）
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  // 必要に応じてオフラインキャッシュの読み込みを記述
});
