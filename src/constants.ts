/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Pattern {
  id: string;
  name: string;
  category: "Han" | "Qiang";
  type: string;
  theme: string;
  meaning: string;
  image: string;
  tags: string[];
}

export const patterns: Pattern[] = [
  {
    id: "p1",
    name: "云雷纹",
    category: "Han",
    type: "青铜纹饰",
    theme: "云气/雷纹",
    meaning: "象征连绵不断，风调雨顺",
    image: "https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?q=80&w=600&auto=format&fit=crop",
    tags: ["汉砖", "古朴", "对称"]
  },
  {
    id: "p2",
    name: "羊角花",
    category: "Qiang",
    type: "羌绣",
    theme: "杜鹃花",
    meaning: "吉祥、忠诚与坚韧",
    image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?q=80&w=600&auto=format&fit=crop",
    tags: ["羌文化", "花卉", "生命力"]
  },
  {
    id: "p3",
    name: "四神纹",
    category: "Han",
    type: "汉瓦当",
    theme: "青龙白虎朱雀玄武",
    meaning: "四方守护，镇宅驱邪",
    image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?q=80&w=600&auto=format&fit=crop",
    tags: ["图腾", "神兽", "汉朝"]
  },
  {
    id: "p4",
    name: "勾连云纹",
    category: "Qiang",
    type: "挑花",
    theme: "云朵",
    meaning: "祝福天长地久",
    image: "https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&w=600&auto=format&fit=crop",
    tags: ["抽象", "几何", "连绵"]
  }
];
