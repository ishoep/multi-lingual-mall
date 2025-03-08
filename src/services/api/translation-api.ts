
import { delay } from './mock-data';

export const translationApi = {
  translateText: async (
    text: string, 
    sourceLang: string, 
    targetLang: string
  ): Promise<string> => {
    await delay(800);
    
    // Simple mock translation - in real app, use a translation API
    const translations: Record<string, Record<string, string>> = {
      "Premium Wireless Headphones": {
        "ru": "Премиальные беспроводные наушники",
        "uz": "Premium simsiz quloqchinlar"
      },
      "Experience crystal-clear sound with our premium wireless headphones featuring noise cancellation technology and 40-hour battery life.": {
        "ru": "Оцените кристально чистый звук с нашими премиальными беспроводными наушниками с технологией шумоподавления и 40-часовой батареей.",
        "uz": "Shovqinni yo'q qilish texnologiyasi va 40 soatlik batareya quvvati bilan jihozlangan premium simsiz quloqchinlarimiz bilan kristall toza tovushni his qiling."
      }
    };
    
    if (translations[text] && translations[text][targetLang]) {
      return translations[text][targetLang];
    }
    
    // For demo purposes, prefix the text with the target language
    return `[${targetLang}] ${text}`;
  }
};
