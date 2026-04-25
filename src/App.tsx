/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Library, 
  Palette, 
  Box, 
  Search, 
  Filter, 
  ChevronRight, 
  Download, 
  Layers, 
  Maximize2,
  Menu,
  X,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { patterns, Pattern } from './constants';

// --- Components ---

const Navbar = ({ activeTab, setActiveTab }: { activeTab: string, setActiveTab: (t: string) => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#3D0C0E]/90 backdrop-blur-md border-b border-gold/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('home')}>
          <div className="w-10 h-10 bg-vermilion rotate-45 flex items-center justify-center rounded-sm shadow-lg shadow-vermilion/20">
            <span className="text-white font-bold -rotate-45 text-xl">汉</span>
          </div>
          <span className="text-2xl font-serif font-bold tracking-tight text-gold">汉羌纹语</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {[
            { id: 'library', name: '纹藏 Gene Bank', icon: Library },
            { id: 'creator', name: '纹创 AI Studio', icon: Palette },
            { id: 'preview', name: '纹用 Preview', icon: Box },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex items-center gap-2 text-xs font-sans uppercase tracking-widest transition-colors hover:text-gold ${
                activeTab === item.id ? 'text-gold' : 'text-cream/60'
              }`}
            >
              <item.icon size={14} />
              {item.name}
            </button>
          ))}
          <button className="px-6 py-2 bg-gold text-ink rounded-sm text-xs font-sans font-bold tracking-widest hover:brightness-110 transition-all shadow-lg">
            立即开启创作
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-gold" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-0 right-0 bg-[#3D0C0E] border-b border-gold/10 p-6 md:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-6">
              {['library', 'creator', 'preview'].map((id) => (
                <button
                  key={id}
                  onClick={() => { setActiveTab(id); setIsOpen(false); }}
                  className="text-left text-xl font-serif py-2 border-b border-gold/10 text-cream"
                >
                  {id === 'library' ? '纹藏 (素材库)' : id === 'creator' ? '纹创 (AI生成)' : '纹用 (实物预览)'}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = ({ onExplore }: { onExplore: () => void }) => (
  <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#3D0C0E]">
    {/* Atmospheric Background Layer */}
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1621303837174-89787a7d4729?q=80&w=1920&auto=format&fit=crop" 
        alt="Atmospheric Background" 
        className="w-full h-full object-cover opacity-20 filter blur-md scale-110 grayscale"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#A61D24]/85 via-[#3D0C0E]/95 to-[#1A0506]" />
      <div className="absolute inset-0 pattern-bg opacity-10" />
    </div>
    
    <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold text-[10px] font-sans font-bold uppercase tracking-[0.3em] mb-6">
          <Sparkles size={12} /> Empowering Heritage with AI
        </div>
        <h1 className="text-6xl md:text-8xl font-serif font-bold text-white leading-tight mb-8 drop-shadow-2xl">
          赋能非遗<br/>智造 <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-cream">纹样之美</span>
        </h1>
        <p className="text-lg text-cream/70 leading-relaxed mb-10 max-w-lg font-sans">
          一站式汉羌纹样智能设计平台。打通“文化保护—AI设计—商业应用”核心链路，让千年文化基因在数字时代焕发新生。
        </p>
        <div className="flex flex-wrap gap-6">
          <button 
            onClick={onExplore}
            className="px-10 py-4 bg-gold text-[#3D0C0E] rounded-sm text-sm font-sans font-bold tracking-widest hover:brightness-110 transition-all flex items-center gap-3 shadow-2xl shadow-gold/20"
          >
            立即开启创作 <ArrowRight size={18} />
          </button>
          <button className="px-10 py-4 border border-gold/30 text-gold rounded-sm text-sm font-sans tracking-widest hover:bg-gold hover:text-ink transition-all">
            了解文化故事
          </button>
        </div>
        
        <div className="flex gap-12 mt-16">
          <div className="flex flex-col gap-1">
            <span className="text-4xl font-bold text-gold">10,000+</span>
            <span className="text-[10px] tracking-widest opacity-50 uppercase font-sans text-cream">矢量纹样库</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-4xl font-bold text-gold">300+</span>
            <span className="text-[10px] tracking-widest opacity-50 uppercase font-sans text-cream">实物模板</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-4xl font-bold text-gold">0.1s</span>
            <span className="text-[10px] tracking-widest opacity-50 uppercase font-sans text-cream">极速渲染</span>
          </div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative"
      >
        <div className="w-full aspect-square rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(166,29,36,0.3)] relative border border-gold/20">
          <img 
            src="https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=1200&auto=format&fit=crop" 
            alt="Qiang Embroidery Hero" 
            className="w-full h-full object-cover grayscale-[20%] brightness-[85%] contrast-[110%]"
          />
          {/* Warm Lamp Glow Effect */}
          <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-gold/20 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#3D0C0E] via-transparent to-transparent opacity-80" />
          <div className="absolute bottom-10 left-10 text-cream drop-shadow-2xl">
            <div className="text-gold text-[12px] font-sans font-bold uppercase tracking-[0.3em] mb-3 border-l-2 border-vermilion pl-3">经典复现 Heritage</div>
            <div className="text-4xl font-serif font-bold tracking-tight">羌绣·羊角花纹</div>
            <div className="text-xs mt-2 text-cream/60 font-sans tracking-widest uppercase">Qiang Embroidery / Rhinoceros Flower</div>
          </div>
        </div>
        
        {/* Floating elements */}
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-10 -right-10 p-6 bg-[#3D0C0E]/90 border border-gold/20 rounded-xl shadow-2xl backdrop-blur-md"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded bg-gold/10 border border-gold/20 flex items-center justify-center">
              <Sparkles className="text-gold" size={20} />
            </div>
            <div>
              <div className="text-[10px] text-gold/60 font-sans font-bold uppercase tracking-tighter">AI Fidelity</div>
              <div className="text-xl font-bold font-serif text-cream">99.8% 契合</div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

const LibraryModule = () => {
  const [filter, setFilter] = useState('all');
  
  const filteredPatterns = filter === 'all' 
    ? patterns 
    : patterns.filter(p => p.category.toLowerCase() === filter);

  return (
    <section className="py-32 max-w-7xl mx-auto px-6 bg-[#FAF9F6]">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
        <div>
          <h2 className="text-[#A61D24] text-sm tracking-[0.4em] font-sans font-bold uppercase mb-4">Patterns Archive</h2>
          <h2 className="text-5xl font-serif mb-6 text-ink font-bold leading-tight">纹藏・数字基因库</h2>
          <p className="text-ink/60 text-lg max-w-xl font-sans">
            跨越千年的汉羌文化沉淀。我们系统采集了数千件汉砖、青铜及羌绣纹样，并将其转化为可商用的矢量数字资产。
          </p>
        </div>
        <div className="flex gap-4">
          {['all', 'han', 'qiang'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-3 rounded-sm border text-[10px] font-sans font-bold uppercase tracking-widest transition-all ${
                filter === cat 
                  ? 'bg-[#A61D24] text-white border-[#A61D24] shadow-xl' 
                  : 'border-ink/10 text-ink/60 hover:border-[#A61D24] hover:text-[#A61D24]'
              }`}
            >
              {cat === 'all' ? '全部纹样' : cat === 'han' ? '汉代主题' : '羌族特色'}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {filteredPatterns.map((p, idx) => (
          <motion.div 
            key={p.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="group cursor-pointer"
          >
            <div className="aspect-[3/4] rounded-sm overflow-hidden bg-ink/5 mb-6 relative border border-ink/5 group-hover:border-[#A61D24]/40 transition-all duration-500 shadow-md">
              <img src={p.image} alt={p.name} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-[#3D0C0E]/0 group-hover:bg-[#3D0C0E]/60 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                <button className="p-4 bg-gold text-ink rounded-full shadow-2xl">
                  <Maximize2 size={24} />
                </button>
              </div>
              <div className="absolute top-4 left-4 px-3 py-1 bg-[#A61D24] text-white text-[9px] font-sans font-bold uppercase tracking-[0.2em] shadow-lg">
                {p.category}
              </div>
            </div>
            <h3 className="text-xl font-serif mb-2 group-hover:text-[#A61D24] transition-colors text-ink font-bold">{p.name}</h3>
            <p className="text-xs text-ink/50 font-sans tracking-widest uppercase mb-4 opacity-70">{p.type}</p>
            <div className="flex flex-wrap gap-2">
              {p.tags.map(t => (
                <span key={t} className="text-[9px] px-2 py-1 bg-ink/5 border border-ink/10 rounded-sm text-ink/60 uppercase tracking-tighter">#{t}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const CreatorModule = () => {
  const [density, setDensity] = useState(50);
  const [complexity, setComplexity] = useState(30);
  const [generating, setGenerating] = useState(false);

  const handleGenerate = () => {
    setGenerating(true);
    setTimeout(() => setGenerating(false), 2000);
  };

  return (
    <section className="py-32 bg-[#3D0C0E] text-cream relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pattern-bg" />
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-gold text-sm tracking-[0.4em] font-sans font-bold uppercase mb-4">AI Creation System</h2>
            <h2 className="text-5xl font-serif mb-6 text-white font-bold leading-tight">纹创・AI 智能生成</h2>
            <p className="text-cream/60 text-lg mb-10 font-sans">
              通过 LoRA 微调框架，我们将汉羌文化的构图规律封装。调整参数，实时生成数千种兼具文化底蕴与现代审美的新型纹样。
            </p>

            <div className="space-y-8 bg-white/5 p-8 rounded-2xl border border-gold/10 backdrop-blur-sm">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37]/80">纹样疏密度 Density</label>
                  <span className="text-xs font-mono text-gold">{density}%</span>
                </div>
                <input 
                  type="range" 
                  value={density} 
                  onChange={(e) => setDensity(parseInt(e.target.value))} 
                  className="w-full h-1 bg-white/10 appearance-none rounded-full accent-gold cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37]/80">艺术精细度 Fidelity</label>
                  <span className="text-xs font-mono text-gold">{complexity}%</span>
                </div>
                <input 
                  type="range" 
                  value={complexity} 
                  onChange={(e) => setComplexity(parseInt(e.target.value))} 
                  className="w-full h-1 bg-white/10 appearance-none rounded-full accent-gold cursor-pointer"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button className="flex flex-col items-center gap-2 p-6 rounded-xl border border-gold/10 hover:border-gold/50 transition-all group bg-white/5">
                  <Layers className="text-cream/40 group-hover:text-gold transition-colors" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">四方连续 Repetition</span>
                </button>
                <button className="flex flex-col items-center gap-2 p-6 rounded-xl border border-gold/30 bg-gold/10 transition-all">
                  <div className="w-2 h-2 rounded-full bg-gold animate-pulse absolute top-4 right-4" />
                  <Sparkles className="text-gold" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">中心对称 Symmetry</span>
                </button>
              </div>

              <button 
                onClick={handleGenerate}
                disabled={generating}
                className="w-full py-5 bg-gold text-[#3D0C0E] font-bold rounded-xl hover:brightness-110 transition-all flex items-center justify-center gap-3 shadow-2xl shadow-gold/10 text-sm uppercase tracking-[0.2em]"
              >
                {generating ? (
                  <>生成中 GENERATING <div className="w-5 h-5 border-2 border-ink/20 border-t-ink rounded-full animate-spin" /></>
                ) : (
                  <>开始 AI 创作 START CREATION</>
                )}
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-white/5 rounded-[40px] border border-gold/10 p-6 relative overflow-hidden group shadow-[0_0_80px_rgba(212,175,55,0.05)]">
              {generating ? (
                <div className="w-full h-full flex flex-col items-center justify-center gap-8 bg-[#3D0C0E]/50 rounded-3xl">
                  <div className="w-32 h-32 border-4 border-gold/10 border-t-gold rounded-full animate-spin" />
                  <p className="font-serif italic text-gold text-xl animate-pulse">正在解码汉羌数字基因...</p>
                </div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="w-full h-full relative grid grid-cols-2 grid-rows-2 gap-4 p-4"
                >
                  <img src="https://images.unsplash.com/photo-1621303837174-89787a7d4729?q=80&w=400" className="w-full h-full object-cover rounded-2xl opacity-90 transition-transform duration-1000 group-hover:scale-105" />
                  <img src="https://images.unsplash.com/photo-1621303837174-89787a7d4729?q=80&w=400" className="w-full h-full object-cover rounded-2xl opacity-90 rotate-90 transition-transform duration-1000 group-hover:scale-105" />
                  <img src="https://images.unsplash.com/photo-1621303837174-89787a7d4729?q=80&w=400" className="w-full h-full object-cover rounded-2xl opacity-90 rotate-270 transition-transform duration-1000 group-hover:scale-105" />
                  <img src="https://images.unsplash.com/photo-1621303837174-89787a7d4729?q=80&w=400" className="w-full h-full object-cover rounded-2xl opacity-90 rotate-180 transition-transform duration-1000 group-hover:scale-105" />
                  
                  <div className="absolute inset-0 bg-gold/5 flex items-center justify-center font-serif text-[12rem] text-gold/10 pointer-events-none select-none">
                    羌
                  </div>
                </motion.div>
              )}
              
              <div className="absolute bottom-12 right-12 flex gap-4 opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                <button className="p-4 bg-cream text-[#3D0C0E] rounded-full shadow-2xl hover:scale-110 transition-transform">
                  <Download size={24} />
                </button>
                <button className="p-4 bg-gold text-[#3D0C0E] rounded-full shadow-2xl hover:scale-110 transition-transform">
                  <Box size={24} />
                </button>
              </div>
            </div>
            
            {/* Cultural Warning Simulation */}
            <AnimatePresence>
              {density > 80 && (
                <motion.div 
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 50, opacity: 0 }}
                  className="absolute -right-12 top-1/4 p-6 bg-[#A61D24] text-white rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex gap-4 items-start max-w-[240px] border border-white/20"
                >
                  <Sparkles size={24} className="shrink-0 text-gold" />
                  <div className="text-xs leading-relaxed font-sans">
                    <span className="font-bold block mb-2 text-gold uppercase tracking-widest">文化解析报警</span>
                    检测到纹样密度偏移。当前参数偏离传统羌绣构图逻辑，可能影响非遗识别度。
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

const PreviewModule = () => (
  <section className="py-32 bg-[#FAF9F6]">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-24">
        <h2 className="text-[#A61D24] text-[10px] tracking-[0.5em] font-sans font-bold uppercase mb-4">Industrial Application</h2>
        <h2 className="text-5xl font-serif mb-6 text-ink font-bold leading-tight">纹用・一键适配预览</h2>
        <p className="text-ink/60 text-lg max-w-2xl mx-auto font-sans italic">
          “让文化基因活在每一次触碰中。” 海量真实物理模拟模板，毫米级透视贴合。
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-12">
        {[
          { name: "高端文创定制礼盒", img: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=600&fit=crop", category: "Packaging" },
          { name: "桑蚕丝手工艺术织物", img: "https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&w=600&fit=crop", category: "Textiles" },
          { name: "汉代纹饰精品瓷器", img: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?q=80&w=600&fit=crop", category: "Ceramics" }
        ].map((item, idx) => (
          <motion.div 
            key={item.name}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2 }}
            className="group"
          >
            <div className="aspect-[4/5] rounded-[24px] overflow-hidden bg-white p-1 pb-10 border border-ink/5 shadow-xl group-hover:shadow-[0_20px_60px_rgba(166,29,36,0.1)] transition-all relative flex flex-col">
              <div className="flex-1 overflow-hidden rounded-[20px] relative">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-[#3D0C0E]/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                   <div className="px-6 py-2 bg-white/90 backdrop-blur text-ink text-[10px] font-bold uppercase tracking-widest rounded-full shadow-xl">预览生成中 VIEW RENDER</div>
                </div>
              </div>
              <div className="px-6 pt-8">
                <div className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#A61D24] mb-3">{item.category}</div>
                <h4 className="text-xl font-serif text-ink font-bold leading-tight group-hover:text-[#A61D24] transition-colors">{item.name}</h4>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-[#3D0C0E] text-cream py-24 border-t border-gold/10">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-20">
      <div className="col-span-1 md:col-span-2">
        <div className="flex items-center gap-4 mb-10">
          <div className="w-12 h-12 bg-vermilion rotate-45 flex items-center justify-center rounded-sm">
            <span className="text-white font-bold -rotate-45 text-2xl">汉</span>
          </div>
          <span className="text-3xl font-serif font-bold tracking-tight text-gold">汉羌纹语</span>
        </div>
        <p className="text-cream/40 max-w-sm mb-12 leading-relaxed text-sm">
          汉羌纹样智能设计平台，是以“文化保护—AI设计—商业应用”为核心的一站式SaaS平台。致力于连接非遗传承人与现代全球产业，让每一笔纹饰都有据可查，让每一件产品都讲述民族故事。
        </p>
        <div className="flex gap-6">
          {['WeChat', 'Zhihu', 'InDesign'].map(social => (
            <div key={social} className="w-12 h-12 rounded-full border border-gold/20 flex items-center justify-center hover:bg-gold hover:text-[#3D0C0E] cursor-pointer transition-all font-sans text-[10px] font-bold">
              {social[0]}
            </div>
          ))}
        </div>
      </div>
      <div>
        <h5 className="font-serif text-gold mb-8 uppercase tracking-[0.3em] text-xs font-bold">资源导航 Resources</h5>
        <ul className="space-y-6 text-sm text-cream/50 font-medium">
          <li className="hover:text-gold cursor-pointer transition-colors">文化基因溯源库</li>
          <li className="hover:text-gold cursor-pointer transition-colors">AI 训练实验室</li>
          <li className="hover:text-gold cursor-pointer transition-colors">版权联盟计划</li>
          <li className="hover:text-gold cursor-pointer transition-colors">供应链协同系统</li>
        </ul>
      </div>
      <div>
        <h5 className="font-serif text-gold mb-8 uppercase tracking-[0.3em] text-xs font-bold">联络总部 Contact</h5>
        <ul className="space-y-6 text-sm text-cream/50 font-medium">
          <li>陕西省汉中市文化艺术中心 <br /> <span className="text-[10px] opacity-60">HQ Building, Hanzhong Cultural Hub</span></li>
          <li>service@hqpattern.com</li>
          <li>+86 (0916) 7788-999</li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-6 mt-24 pt-10 border-t border-white/5 text-[10px] text-cream/20 uppercase tracking-[0.4em] flex flex-col md:flex-row justify-between items-center gap-6">
      <span>© 2026 HAN-QIANG PATTERNS INTELLIGENT TECHNOLOGY. ALL RIGHTS RESERVED.</span>
      <div className="flex gap-8">
        <span className="hover:text-cream cursor-pointer">PRIVACY POLICY</span>
        <span className="hover:text-cream cursor-pointer">TERMS OF SERVICE</span>
      </div>
    </div>
  </footer>
);

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-cream">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="relative">
        <AnimatePresence mode="wait">
          {activeTab === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Hero onExplore={() => setActiveTab('library')} />
              <div className="bg-[#A61D24] py-14 overflow-hidden border-y border-gold/10 shadow-2xl relative z-10">
                <div className="flex whitespace-nowrap animate-marquee">
                  {[...Array(10)].map((_, i) => (
                    <span key={i} className="text-white/40 text-2xl font-serif mx-24 flex items-center gap-6 tracking-[0.2em]">
                      <Sparkles className="text-gold" /> 传承文明之心 智造艺术之美 汉羌图腾基因 AI赋能非遗复兴 
                    </span>
                  ))}
                </div>
              </div>
              <LibraryModule />
              <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
              <CreatorModule />
              <PreviewModule />
            </motion.div>
          )}

          {activeTab === 'library' && (
            <motion.div key="library" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
              <div className="pt-20">
                <LibraryModule />
              </div>
            </motion.div>
          )}
          
          {activeTab === 'creator' && (
            <motion.div key="creator" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
              <div className="pt-20">
                <CreatorModule />
              </div>
            </motion.div>
          )}

          {activeTab === 'preview' && (
            <motion.div key="preview" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
              <div className="pt-20">
                <PreviewModule />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
      
      {/* Visual Accents - Floating Red Stamp */}
      <div className="fixed bottom-12 right-12 z-40 pointer-events-none group">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="p-1 bg-gold/10 rounded-full border border-gold/20"
        >
          <div className="w-16 h-16 bg-[#A61D24] text-white flex items-center justify-center font-serif font-bold text-3xl shadow-2xl border-4 border-[#A61D24] outline outline-2 outline-gold/30">
             汉
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// Keyframes for custom marquee
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = `
  @keyframes marquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  .animate-marquee {
    display: inline-flex;
    animation: marquee 40s linear infinite;
  }
  input[type='range'] {
    -webkit-appearance: none;
  }
  input[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: #D4AF37;
    cursor: pointer;
    box-shadow: 0 0 10px rgba(212, 175, 55, 0.4);
    border: 2px solid white;
  }
  `;
  document.head.appendChild(style);
}

// Keyframes for custom marquee
const style = document.createElement('style');
style.textContent = `
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.animate-marquee {
  display: inline-flex;
  animation: marquee 30s linear infinite;
}
`;
document.head.appendChild(style);

