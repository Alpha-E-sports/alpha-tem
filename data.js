// ============================================================
//  ALPHA Esports - Shared Data File
//  このファイルを編集するか、管理サイト(admin.html)から変更できます
// ============================================================

const ALPHA_DATA_DEFAULT = {
  // ── チーム基本情報 ──
  team: {
    name: "ALPHA",
    tagline: "Be The Last One Standing",
    subTagline: "FORTNITE ESPORTS TEAM",
    founded: "2024",
    description: "チームAlphaは2024年に結成された、日本発のフォートナイト eスポーツチームです。プロゲーマーを目指す若手から実績あるベテランまで、多様なメンバーが集結しています。私たちの目標はただひとつ——日本最強のチームとして世界の舞台に立つこと。",
    description2: "チームAlphaは単なるゲームチームではありません。仲間との絆、戦略の深化、個々の成長——すべてが融合した「最強の組織」を目指しています。日々の練習と研究を積み重ね、大会での頂点を狙い続けます。",
    xLink: "https://x.com/AlphaFN_Official",
    discordLink: "https://discord.gg/alpha-esports",
    youtubeLink: "",
    tiktokLink: "",
    contactEmail: "contact@alpha-esports.jp",
  },

  // ── ニューステッカー ──
  ticker: [
    "ALPHA Fortnite Team 公式サイトへようこそ",
    "メンバー募集中 — 実力者求む！",
    "スポンサー募集受付中",
    "チームAlpha — 日本最強を目指す",
    "FORTNITE CHAPTER 6 参戦決定",
  ],

  // ── チーム沿革 ──
  history: [
    { year: "2024.01", event: "チームAlpha 設立。創設メンバー5名でスタート。" },
    { year: "2024.04", event: "第1回社内大会で優勝。チームの実力を証明。" },
    { year: "2024.08", event: "スポンサー契約締結。プロ活動本格始動。" },
    { year: "2025.01", event: "メンバー数50名を突破。日本最大級チームへ成長中。" },
    { year: "2025 NOW", event: "世界大会出場を目標に日々鍛錬中。" },
  ],

  // ── メンバー（最大100名）──
  members: [
    { id: 1, ign: "ShadowAlpha", realName: "山田 拓海", role: "IGL", xLink: "https://x.com/example", imgUrl: "", bio: "チームのコールアウトを担当。冷静な判断力でチームを牽引。" },
    { id: 2, ign: "Blazer_FN",   realName: "佐藤 健斗", role: "FRT", xLink: "https://x.com/example2", imgUrl: "", bio: "最前線で戦うフロントラインエース。" },
    { id: 3, ign: "NightOwl",    realName: "田中 美咲", role: "SUP", xLink: "", imgUrl: "", bio: "サポートの要。仲間を常に支え続ける。" },
    { id: 4, ign: "Phantom_X",   realName: "鈴木 大地", role: "AWP", xLink: "https://x.com/example3", imgUrl: "", bio: "超精度のスナイパー。1発で勝負を決める。" },
    { id: 5, ign: "VoidRift",    realName: "中村 陽一", role: "FRT", xLink: "", imgUrl: "", bio: "高速ビルドで敵を圧倒するビルダー。" },
  ],

  // ── スポンサー ──
  sponsors: [
    { id: 1, name: "NEXUS GAMING", tier: "gold",   icon: "🎮", url: "", description: "最先端ゲーミングデバイスを提供する業界トップブランド。" },
    { id: 2, name: "CYBER PC",     tier: "silver", icon: "💻", url: "", description: "高性能ゲーミングPC専門ショップ" },
    { id: 3, name: "ALPHA ENERGY", tier: "silver", icon: "🍵", url: "", description: "ゲーマー向けエナジードリンク" },
    { id: 4, name: "NETX",         tier: "bronze", icon: "📡", url: "", description: "低遅延回線サービス" },
  ],

  // ── 募集情報 ──
  recruit: {
    player: {
      enabled: true,
      title: "プレイヤー募集",
      icon: "🎮",
      text: "実力ある選手を常時募集しています。ランクを問わず、強い意志と向上心がある方を歓迎します。",
      requirements: [
        "フォートナイト プラチナランク以上推奨",
        "週3回以上の練習参加可能な方",
        "コミュニケーションを大切にできる方",
        "15歳以上（未成年は保護者の同意が必要）",
        "Discordが使用可能な方",
      ],
    },
    sponsor: {
      enabled: true,
      title: "スポンサー募集",
      icon: "💼",
      text: "チームAlphaのオフィシャルスポンサーとして、私たちの活動を支援してくださるパートナー企業を募集しています。",
      requirements: [
        "ロゴをユニフォームに掲載可能",
        "公式SNSでの定期的な告知（総フォロワー数万人）",
        "公式サイトへのリンク・バナー掲載",
        "大会会場での企業PRサポート",
        "詳細はお問合せください",
      ],
    },
    staff: {
      enabled: true,
      title: "コーチ・スタッフ募集",
      icon: "📹",
      text: "選手を支えるコーチングスタッフ、映像解析担当、SNS運営スタッフを募集しています。",
      requirements: [
        "フォートナイトへの深い理解がある方",
        "映像・データ分析の経験者歓迎",
        "SNS・コンテンツ制作スキルのある方",
        "チームへの貢献意欲がある方",
      ],
    },
    collab: {
      enabled: true,
      title: "コラボ・提携募集",
      icon: "🤝",
      text: "他チームやコンテンツクリエイター、ゲーム関連メディアとのコラボレーションを歓迎します。",
      requirements: [
        "ゲーム・eスポーツ関連コンテンツの方",
        "YouTuber / 配信者の方",
        "他チームとの交流戦",
        "メディア取材・インタビュー",
      ],
    },
  },
};

// LocalStorageからロード or デフォルト使用
function loadData() {
  try {
    const saved = localStorage.getItem('alpha_data');
    if (saved) return JSON.parse(saved);
  } catch(e) {}
  return JSON.parse(JSON.stringify(ALPHA_DATA_DEFAULT));
}

function saveData(data) {
  try {
    localStorage.setItem('alpha_data', JSON.stringify(data));
    return true;
  } catch(e) {
    return false;
  }
}

function resetData() {
  localStorage.removeItem('alpha_data');
  return JSON.parse(JSON.stringify(ALPHA_DATA_DEFAULT));
}
