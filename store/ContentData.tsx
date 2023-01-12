export const ContentData: ContentDataTypes = {
  navbar: [
    {
      title: "Beranda",
      href: "#home",
    },
    {
      title: "Fitur-fitur",
      href: "#features",
    },
    {
      title: "Teknologi",
      href: "#tech",
    },
    {
      title: "FAQ",
      href: "#faq",
    },
  ],
  home: {
    toptitle: "CHAT N' RECHAT",
    title:
      "Sebuah aplikasi chatting yang bisa bikin kamu lupa diri, tapi tidak lupa jasa pahlawan!",
    description:
      "Sebenernya banyak banget aplikasi chatting yang lebih bagus dari ini, maka dari itu lebih baik pake yang lain aja deh ya daripada pake aplikasi yang ini.",
    buttonleft: "Register",
    buttonright: "Learn More",
    totaldownloads: "1,501,234",
    totalusers: "1,318,829",
    mainimage: "/images/mainimage.svg",
  },
  brand: [
    { imageUrl: "/images/cnn.svg" },
    { imageUrl: "/images/tirto.io.svg" },
    { imageUrl: "/images/forbes.svg" },
    { imageUrl: "/images/google.svg" },
    { imageUrl: "/images/newyork.svg" },
  ],
  featuresection: {
    toptitle: 'NGGAK HARUS SIH SEBENERNYA',
    title: 'Kenapa Harus Pakai Chat N’ Rechat?',
    description: 'Sebenernya yang bagus itu sih WhatsApp loh, mending pake WhatsApp aja deh. Yaudah berikut ini adalah fitur-fitur WhatsApp.',
    features: [
        {
            imageUrl: '/images/feature-1.svg',
            title: 'Groups to keep in touch',
            description: 'Keep in touch with the groups of people that matter the most, like your family or coworkers. With group chats, you can share messages, photos, and videos.',
        },
        {
            imageUrl: '/images/feature-2.svg',
            title: 'Simple, Reliable Messaging',
            description: "Message your friends and family for free*. WhatsApp uses your phone's Internet connection to send messages so you can avoid SMS fees.",
        },
        {
            imageUrl: '/images/feature-3.svg',
            title: 'Speak Freely',
            description: "With voice calls, you can talk to your friends and family for free*, even if they're in another country. And with free* video calls, you can have face-to-face conversations.",
        },
    ]
  },
  techs: {
    toptitle: 'TEKNOLOGI YANG DIGUNAKAN',
    title: 'Teknologi Yang Kami Gunakan Di Dalam Aplikasi Ini Akan Membuat DHH Dan Jason Fried Pensiun! 😱',
    description: 'Lo bisa bayangin DHH sama Jason Fried aja jadi pensiun gegara aplikasi ini, apalagi lo yang cuma user dan beban kami, gegara lo pake dan daftar di aplikasi ini jadi kita harus bayar server DO tiap bulan, mana pas bayar harus tunjuk-tunjukan. Inilah alasan kenapa gak usah daftar:',
    technology: [
        {
            emoticon: '😠',
            title: 'Kamu Adalah Beban Kami',
            description: "Semakin banyak kamu yang mendaftar di aplikasi ini, artinya semakin banyak data yang perlu disimpan, nah kan jadi perlu server gede tuh. Makanya kamu beban!",
        },
        {
            emoticon: '🐨',
            title: 'Males Buat Ngembangin',
            description: "Lo bakal nemu bug, entah pesan yang mau dikirim gak bisa dikirim padahal lo belom pencet tombol enter atau masalah lainnya. Nah soal itu kita males buat benerin.",
        },
        {
            emoticon: '😴',
            title: 'Pokoknya Males Aja Lah',
            description: "Nggak tau lagi harus ngomong apa, pokoknya males aja sih kita bikin aplikasi chat kek gini. Makannya mending lo pake WhatsApp aja udah.",
        },
    ]
  },
};
