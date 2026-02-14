const languages = [
  {
    name: "Afrikaans",
    code: "af",
    link: "https://tl-test-storage.nyc3.cdn.digitaloceanspaces.com/cipher/za.jpg",
  },
  {
    name: "Arabic",
    code: "ar",
    link: "https://tl-test-storage.nyc3.cdn.digitaloceanspaces.com/cipher/sa.jpg",
  },
  {
    name: "Armenian",
    code: "hy",
    link: "https://tl-test-storage.nyc3.cdn.digitaloceanspaces.com/cipher/am.jpg",
  },
  {
    name: "Azerbaijani",
    code: "az",
    link: "https://tl-test-storage.nyc3.cdn.digitaloceanspaces.com/cipher/az.jpg",
  },
  {
    name: "Belarusian",
    code: "be",
    link: "https://tl-test-storage.nyc3.cdn.digitaloceanspaces.com/cipher/by.jpg",
  },
  {
    name: "Bosnian",
    code: "bs",
    link: "https://tl-test-storage.nyc3.cdn.digitaloceanspaces.com/cipher/ba.jpg",
  },
  {
    name: "Bulgarian",
    code: "bg",
    link: "https://tl-test-storage.nyc3.cdn.digitaloceanspaces.com/cipher/bg.jpg",
  },
  {
    name: "Catalan",
    code: "ca",
    link: "https://tl-test-storage.nyc3.cdn.digitaloceanspaces.com/cipher/catalan.jpg",
  },
  {
    name: "Chinese",
    code: "zh",
    link: "https://tl-test-storage.nyc3.cdn.digitaloceanspaces.com/cipher/cn.jpg",
  },
  {
    name: "Croatian",
    code: "hr",
    link: "https://tl-test-storage.nyc3.cdn.digitaloceanspaces.com/cipher/hr.jpg",
  },
  {
    name: "Czech",
    code: "cs",
    link: "https://tl-test-storage.nyc3.cdn.digitaloceanspaces.com/cipher/cz.jpg",
  },
  {
    name: "Danish",
    code: "da",
    link: "https://tl-test-storage.nyc3.cdn.digitaloceanspaces.com/cipher/dk.jpg",
  },
  {
    name: "Dutch",
    code: "nl",
    link: "https://tl-test-storage.nyc3.cdn.digitaloceanspaces.com/cipher/nl.jpg",
  },
  {
    name: "English",
    code: "en",
    link: "https://tl-test-storage.nyc3.cdn.digitaloceanspaces.com/cipher/gb.jpg",
  },
  {
    name: "Estonian",
    code: "et",
    link: "https://tl-test-storage.nyc3.cdn.digitaloceanspaces.com/cipher/ee.jpg",
  },
  {
    name: "Finnish",
    code: "fi",
    link: "https://tl-test-storage.nyc3.cdn.digitaloceanspaces.com/cipher/fi.jpg",
  },
  {
    name: "French",
    code: "fr",
    link: "https://tl-test-storage.nyc3.cdn.digitaloceanspaces.com/cipher/fr.jpg",
  },
  {
    name: "Galician",
    code: "gl",
    link: "https://tl-test-storage.nyc3.cdn.digitaloceanspaces.com/cipher/galicia.jpg",
  },
  {
    name: "German",
    code: "de",
    link: "https://tl-test-storage.nyc3.cdn.digitaloceanspaces.com/cipher/de.jpg",
  },
  {
    name: "Greek",
    code: "el",
    link: "https://tl-test-storage.nyc3.cdn.digitaloceanspaces.com/cipher/gr.jpg",
  },
  {
    name: "Hebrew",
    code: "he",
    link: "https://tl-test-storage.nyc3.cdn.digitaloceanspaces.com/cipher/il.jpg",
  },
  {
    name: "Hindi",
    code: "hi",
    link: "https://tl-test-storage.nyc3.cdn.digitaloceanspaces.com/cipher/in.jpg",
  },
  {
    name: "Hungarian",
    code: "hu",
    link: "https://tl-test-storage.nyc3.cdn.digitaloceanspaces.com/cipher/hu.jpg",
  },
  {
    name: "Icelandic",
    code: "is",
    link: "https://tl-test-storage.nyc3.cdn.digitaloceanspaces.com/cipher/is.jpg",
  },
  {
    name: "Indonesian",
    code: "id",
    link: "https://tl-test-storage.nyc3.cdn.digitaloceanspaces.com/cipher/id.jpg",
  },
  {
    name: "Italian",
    code: "it",
    link: "https://tl-test-storage.nyc3.cdn.digitaloceanspaces.com/cipher/it.jpg",
  },
  {
    name: "Japanese",
    code: "ja",
    link: "https://tl-test-storage.nyc3.cdn.digitaloceanspaces.com/cipher/jp.jpg",
  },
  {
    name: "Kannada",
    code: "kn",
    link: "https://tl-test-storage.nyc3.cdn.digitaloceanspaces.com/cipher/kannada.jpg",
  },
  {
    name: "Kazakh",
    code: "kk",
    link: "https://tl-test-storage.nyc3.cdn.digitaloceanspaces.com/cipher/kz.jpg",
  },
  {
    name: "Korean",
    code: "ko",
    link: "https://tl-test-storage.nyc3.cdn.digitaloceanspaces.com/cipher/kr.jpg",
  },
  {
    name: "Latvian",
    code: "lv",
    link: "https://tl-test-storage.nyc3.cdn.digitaloceanspaces.com/cipher/lv.jpg",
  },
  {
    name: "Lithuanian",
    code: "lt",
    link: "https://tl-test-storage.nyc3.cdn.digitaloceanspaces.com/cipher/lt.jpg",
  },
  {
    name: "Macedonian",
    code: "mk",
    link: "https://tl-test-storage.nyc3.cdn.digitaloceanspaces.com/cipher/mk.jpg",
  },
  {
    name: "Malay",
    code: "ms",
    link: "https://tl-test-storage.nyc3.cdn.digitaloceanspaces.com/cipher/my.jpg",
  },
  {
    name: "Marathi",
    code: "mr",
    link: "https://tl-test-storage.nyc3.cdn.digitaloceanspaces.com/cipher/marathi.jpg",
  },
  {
    name: "Maori",
    code: "mi",
    link: "https://tl-test-storage.nyc3.cdn.digitaloceanspaces.com/cipher/maori.jpg",
  },
  {
    name: "Nepali",
    code: "ne",
    link: "https://tl-test-storage.nyc3.cdn.digitaloceanspaces.com/cipher/np.jpg",
  },
  {
    name: "Norwegian",
    code: "no",
    link: "https://tl-test-storage.nyc3.cdn.digitaloceanspaces.com/cipher/no.jpg",
  },
  {
    name: "Persian",
    code: "fa",
    link: "https://tl-test-storage.nyc3.cdn.digitaloceanspaces.com/cipher/ir.jpg",
  },
  {
    name: "Polish",
    code: "pl",
    link: "https://tl-test-storage.nyc3.cdn.digitaloceanspaces.com/cipher/pl.jpg",
  },
  {
    name: "Portuguese",
    code: "pt",
    link: "https://tl-test-storage.nyc3.cdn.digitaloceanspaces.com/cipher/pt.jpg",
  },
  {
    name: "Romanian",
    code: "ro",
    link: "https://tl-test-storage.nyc3.cdn.digitaloceanspaces.com/cipher/ro.jpg",
  },
  {
    name: "Russian",
    code: "ru",
    link: "https://tl-test-storage.nyc3.cdn.digitaloceanspaces.com/cipher/ru.jpg",
  },
  {
    name: "Serbian",
    code: "sr",
    link: "https://tl-test-storage.nyc3.cdn.digitaloceanspaces.com/cipher/rs.jpg",
  },
  {
    name: "Slovak",
    code: "sk",
    link: "https://tl-test-storage.nyc3.cdn.digitaloceanspaces.com/cipher/sk.jpg",
  },
  {
    name: "Slovenian",
    code: "sl",
    link: "https://tl-test-storage.nyc3.cdn.digitaloceanspaces.com/cipher/si.jpg",
  },
  {
    name: "Spanish",
    code: "es",
    link: "https://tl-test-storage.nyc3.cdn.digitaloceanspaces.com/cipher/es.jpg",
  },
  {
    name: "Swahili",
    code: "sw",
    link: "https://tl-test-storage.nyc3.cdn.digitaloceanspaces.com/cipher/swahili.jpg",
  },
  {
    name: "Swedish",
    code: "sv",
    link: "https://tl-test-storage.nyc3.cdn.digitaloceanspaces.com/cipher/se.jpg",
  },
  {
    name: "Tagalog",
    code: "tl",
    link: "https://tl-test-storage.nyc3.cdn.digitaloceanspaces.com/cipher/tagalog.jpg",
  },
  {
    name: "Tamil",
    code: "ta",
    link: "https://tl-test-storage.nyc3.cdn.digitaloceanspaces.com/cipher/tamil.jpg",
  },
  {
    name: "Thai",
    code: "th",
    link: "https://tl-test-storage.nyc3.cdn.digitaloceanspaces.com/cipher/th.jpg",
  },
  {
    name: "Turkish",
    code: "tr",
    link: "https://tl-test-storage.nyc3.cdn.digitaloceanspaces.com/cipher/tr.jpg",
  },
  {
    name: "Ukrainian",
    code: "uk",
    link: "https://tl-test-storage.nyc3.cdn.digitaloceanspaces.com/cipher/ua.jpg",
  },
  {
    name: "Urdu",
    code: "ur",
    link: "https://tl-test-storage.nyc3.cdn.digitaloceanspaces.com/cipher/pk.jpg",
  },
  {
    name: "Vietnamese",
    code: "vi",
    link: "https://tl-test-storage.nyc3.cdn.digitaloceanspaces.com/cipher/vn.jpg",
  },
  {
    name: "Welsh",
    code: "cy",
    link: "https://tl-test-storage.nyc3.cdn.digitaloceanspaces.com/cipher/gb-wls.jpg",
  },
];

export function getLanguages() {
  return languages;
}