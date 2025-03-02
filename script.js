document.addEventListener('DOMContentLoaded', function() {
    // Website data
    const websites = [
        // AI Search category
        {
            name: "Google",
            url: "https://www.google.com/",
            icon: "fa-brands fa-google",
            category: "ai-search"
        },
        {
            name: "Bing",
            url: "https://www.bing.com/",
            icon: "fa-brands fa-microsoft",
            category: "ai-search"
        },
        {
            name: "websim",
            url: "https://websim.ai/",
            icon: "fa-solid fa-magnifying-glass",
            category: "ai-search"
        },
        {
            name: "chatgpt",
            url: "https://chatgpt.com/",
            icon: "fa-brands fa-google",
            category: "ai-search"
        },
        {
            name: "傻豆包",
            url: "https://www.doubao.com/chat/",
            icon: "fa-solid fa-paw",
            category: "ai-search"
        },
        {
            name: "通义千问",
            url: "https://chat.qwenlm.ai/",
            icon: "fa-brands fa-rocketchat",
            category: "ai-search"
        },
        {
            name: "kimi",
            url: "https://kimi.moonshot.cn/",
            icon: "fa-regular fa-moon",
            category: "ai-search"
        },
        {
            name: "傻元宝",
            url: "https://yuanbao.tencent.com/",
            icon: "fa-solid fa-robot",
            category: "ai-search"
        },
        {
            name: "google AIstudio",
            url: "https://aistudio.google.com/",
            icon: "fa-solid fa-robot",
            category: "ai-search"
        },
        {
            name: "claude",
            url: "https://claude.ai/",
            icon: "fa-solid fa-robot",
            category: "ai-search"
        },
        {
            name: "ChandlerAi",
            url: "https://chandler.bet/",
            icon: "fa-solid fa-robot",
            category: "ai-search"
        },
        {
            name: "mistral",
            url: "https://mistral.ai/",
            icon: "fa-solid fa-brain",
            category: "ai-search"
        },
        {
            name: "groq",
            url: "https://groq.com/",
            icon: "fa-solid fa-group-arrows-rotate",
            category: "ai-search"
        },
        {
            name: "medscape",
            url: "https://www.medscape.com/",
            icon: "fa-solid fa-stethoscope",
            category: "ai-search"
        },
        {
            name: "heck.ai",
            url: "https://heck.ai/",
            icon: "fa-brands fa-rocketchat",
            category: "ai-search"
        },
        {
            name: "问小白",
            url: "https://www.wenxiaobai.com/",
            icon: "fa-solid fa-mask",
            category: "ai-search"
        },
        {
            name: "leonardo.ai绘图",
            url: "https://app.leonardo.ai/",
            icon: "fa-regular fa-images",
            category: "ai-search"
        },
        {
            name: "huggingface",
            url: "https://huggingface.co/",
            icon: "fa-solid fa-face-rolling-eyes",
            category: "ai-search"
        },
        {
            name: "lmarena",
            url: "https://lmarena.ai/",
            icon: "fa-solid fa-robot",
            category: "ai-search"
        },
        {
            name: "kelaode",
            url: "https://kelaode.ai/",
            icon: "fa-solid fa-robot",
            category: "ai-search"
        },
        {
            name: "x.ai",
            url: "https://x.ai/",
            icon: "fa-solid fa-square-xmark",
            category: "ai-search"
        },
        {
            name: "pce计算",
            url: "https://ascvdpce.186404.xyz/",
            icon: "fa-solid fa-heart-pulse",
            category: "ai-search"
        },
        {
            name: "deepseek",
            url: "https://www.deepseek.com/",
            icon: "fa-brands fa-rocketchat",
            category: "ai-search"
        },
        {
            name: "当贝AI",
            url: "https://ai.dangbei.com/",
            icon: "fa-brands fa-rocketchat",
            category: "ai-search"
        },
        {
            name: "beago.ai",
            url: "https://www.beago.ai/",
            icon: "fa-brands fa-rocketchat",
            category: "ai-search"
        },
        {
            name: "sigmachat",
            url: "https://sigmabrowser.com/chat",
            icon: "fa-brands fa-rocketchat",
            category: "ai-search"
        },
        {
            name: "bolt.new",
            url: "https://bolt.new/",
            icon: "fa-solid fa-bolt",
            category: "ai-search"
        },
        
        // Social Media category
        {
            name: "Facebook",
            url: "https://www.facebook.com/",
            icon: "fa-brands fa-facebook",
            category: "social"
        },
        {
            name: "Twitter",
            url: "https://twitter.com/",
            icon: "fa-brands fa-twitter",
            category: "social"
        },
        {
            name: "推特视频下载",
            url: "https://twitterxz.com/",
            icon: "fa-brands fa-x-twitter",
            category: "social"
        },
        {
            name: "Instagram",
            url: "https://www.instagram.com/",
            icon: "fa-brands fa-instagram",
            category: "social"
        },
        {
            name: "render",
            url: "https://render.com/",
            icon: "fa-solid fa-draw-polygon",
            category: "social"
        },
        {
            name: "deno",
            url: "https://deno.com/deploy",
            icon: "fa-solid fa-d",
            category: "social"
        },
        {
            name: "railway",
            url: "https://railway.com/",
            icon: "fa-solid fa-archway",
            category: "social"
        },
        {
            name: "vercel",
            url: "https://vercel.com/",
            icon: "fa-solid fa-v",
            category: "social"
        },
        {
            name: "netlify",
            url: "https://www.netlify.com/",
            icon: "fa-brands fa-n",
            category: "social"
        },
        {
            name: "TikTok",
            url: "https://www.tiktok.com/",
            icon: "fa-brands fa-tiktok",
            category: "social"
        },
        {
            name: "Reddit",
            url: "https://www.reddit.com/",
            icon: "fa-brands fa-reddit",
            category: "social"
        },
        {
            name: "油管字幕下载",
            url: "https://www.downloadyoutubesubtitles.com/",
            icon: "fa-brands fa-youtube",
            category: "social"
        },
        {
            name: "GitHub",
            url: "https://github.com/",
            icon: "fa-brands fa-github",
            category: "social"
        },
        {
            name: "油管视频下载",
            url: "https://youtube.iiilab.com/",
            icon: "fa-solid fa-download",
            category: "social"
        },
        {
            name: "电影导航",
            url: "https://mv.186404.xyz/",
            icon: "fa-solid fa-tv",
            category: "social"
        },
        
        // Tools category
        {
            name: "Google翻译",
            url: "https://translate.google.com/",
            icon: "fa-solid fa-language",
            category: "tools"
        },
        {
            name: "短链",
            url: "https://d.186404.xyz/",
            icon: "fa-solid fa-link",
            category: "tools"
        },
        {
            name: "dynv6",
            url: "https://dynv6.com/",
            icon: "fa-solid fa-network-wired",
            category: "tools"
        },
        {
            name: "网速测试",
            url: "https://fast.com/",
            icon: "fa-solid fa-gauge-high",
            category: "tools"
        },
        {
            name: "Cloudns",
            url: "https://www.cloudns.net/",
            icon: "fa-solid fa-cloud",
            category: "tools"
        },
        {
            name: "Cloudflare",
            url: "https://www.cloudflare.com/zh-cn/",
            icon: "fa-solid fa-shield-halved",
            category: "tools"
        },
        {
            name: "一个朋友",
            url: "https://ygpy.net/",
            icon: "fa-solid fa-user-group",
            category: "tools"
        },
        {
            name: "谷歌笔记",
            url: "https://notebooklm.google/",
            icon: "fa-solid fa-book",
            category: "tools"
        },
        {
            name: "临时邮箱",
            url: "https://email.ml/",
            icon: "fa-solid fa-envelope",
            category: "tools"
        },
        {
            name: "A姐",
            url: "https://www.ahhhhfs.com/",
            icon: "fa-solid fa-blog",
            category: "tools"
        },
        {
            name: "IP查询",
            url: "https://ip.sb/",
            icon: "fa-solid fa-location-dot",
            category: "tools"
        },
        {
            name: "dns.he域名托管",
            url: "https://dns.he.net/",
            icon: "fa-solid fa-network-wired",
            category: "tools"
        },
        {
            name: "Site域名转发",
            url: "https://www.site.ac/",
            icon: "fa-solid fa-right-left",
            category: "tools"
        },
        {
            name: "Z-Library",
            url: "https://zh.go-to-library.sk/",
            icon: "fa-solid fa-book-reader",
            category: "tools"
        },
        {
            name: "us.kg域名",
            url: "https://nic.us.kg/",
            icon: "fa-solid fa-globe",
            category: "tools"
        },
        {
            name: "Spaceship廉价域名",
            url: "https://www.spaceship.com/zh/",
            icon: "fa-solid fa-rocket",
            category: "tools"
        },
        {
            name: "cursor",
            url: "https://www.cursor.com/",
            icon: "fa-solid fa-i-cursor",
            category: "tools"
        },
        {
            name: "FontAwesome图标",
            url: "https://fontawesome.com/",
            icon: "fa-solid fa-icons",
            category: "tools"
        },
        {
            name: "ip清洁度查询",
            url: "https://scamalytics.com/",
            icon: "fa-solid fa-icons",
            category: "tools"
        },
        {
            name: "test-ipv6",
            url: "https://test-ipv6.com/",
            icon: "fa-solid fa-ethernet",
            category: "tools"
        },
        {
            name: "zone/ip",
            url: "https://html.zone/ip",
            icon: "fa-brands fa-sourcetree",
            category: "tools"
        },
        {
            name: "免费网络代理",
            url: "https://www.lumiproxy.com/zh-hans/online-proxy/proxysite/",
            icon: "fa-solid fa-unlock",
            category: "tools"
        },
        {
            name: "ipcheck",
            url: "https://ipcheck.ing/",
            icon: "fa-solid fa-location-dot",
            category: "tools"
        },
        {
            name: "定时任务cron-job",
            url: "https://console.cron-job.org/",
            icon: "fa-solid fa-ethernet",
            category: "tools"
        },
        {
            name: "uptimerobot",
            url: "https://uptimerobot.com/",
            icon: "fa-solid fa-location-dot",
            category: "tools"
        },
        {
            name: "forwardemail",
            url: "https://forwardemail.net/",
            icon: "fa-solid fa-envelopes-bulk",
            category: "tools"
        },
        {
            name: "improvmx",
            url: "https://improvmx.com/",
            icon: "fa-solid fa-envelopes-bulk",
            category: "tools"
        },
        {
            name: "github文件加速",
            url: "https://gb.w404.nyc.mn/",
            icon: "fa-brands fa-github",
            category: "tools"
        },
        {
            name: "hostryDNS域名托管",
            url: "https://hostry.com/",
            icon: "fa-solid fa-clock-rotate-left",
            category: "tools"
        },
        {
            name: "免费域名sitelutions",
            url: "https://www.sitelutions.com/",
            icon: "fa-solid fa-sitemap",
            category: "tools"
        },
        {
            name: "免费域名changeip",
            url: "https://www.changeip.com/",
            icon: "fa-solid fa-satellite-dish",
            category: "tools"
        },
        {
            name: "免费域名dnsexit",
            url: "https://dnsexit.com/",
            icon: "fa-solid fa-users",
            category: "tools"
        },
        {
            name: "DNS查找nslookup",
            url: "https://www.nslookup.io/",
            icon: "fa-solid fa-arrows-rotate",
            category: "tools"
        },
        {
            name: "ping0",
            url: "https://ping0.cc/",
            icon: "fa-solid fa-fingerprint",
            category: "tools"
        },
        {
            name: "L53免费域名",
            url: "https://customer.l53.net/",
            icon: "fa-solid fa-fingerprint",
            category: "tools"
        },
        {
            name: "PDF在线工具",
            url: "https://tools.pdf24.org/",
            icon: "fa-solid fa-file-pdf",
            category: "tools"
        },
        {
            name: "free-proxy",
            url: "http://free-proxy.cz/en/",
            icon: "fa-brands fa-internet-explorer",
            category: "tools"
        },
        {
            name: "在线代理croxyproxy",
            url: "https://www.croxyproxy.rocks/_zh/",
            icon: "fa-solid fa-unlock",
            category: "tools"
        },
        {
            name: "微信Markdown编辑器",
            url: "https://doocs.github.io/md/",
            icon: "fa-regular fa-edit",
            category: "tools"
        },
        {
            name: "proxysite",
            url: "https://www.proxysite.com/",
            icon: "fa-solid fa-unlock",
            category: "tools"
        },
        {
            name: "serv00",
            url: "https://www.serv00.com/",
            icon: "fa-solid fa-server",
            category: "tools"
        },
        {
            name: "PicGo",
            url: "https://github.com/Molunerfinn/PicGo",
            icon: "fa-solid fa-cloud-arrow-up",
            category: "tools"
        },
        {
            name: "SM.MS",
            url: "https://smms.app/",
            icon: "fa-solid fa-image",
            category: "tools"
        },
        {
            name: "FreeImageHost",
            url: "https://freeimage.host/",
            icon: "fa-solid fa-photo-film",
            category: "tools"
        },
        {
            name: "cobalt",
            url: "https://cobalt.tools/",
            icon: "fa-brands fa-youtube",
            category: "tools"
        },
        {
            name: "Windsurf",
            url: "https://codeium.com/",
            icon: "fa-solid fa-code",
            category: "tools"
        },
        {
            name: "tinywow",
            url: "https://tinywow.com/",
            icon: "fa-brands fa-free-code-camp",
            category: "tools"
        },
        {
            name: "付费墙",
            url: "https://paywallbuster.com/",
            icon: "fa-solid fa-key",
            category: "tools"
        },
        {
            name: "PaywallHub",
            url: "https://g.186404.xyz/wallHub/",
            icon: "fa-solid fa-unlock",
            category: "tools"
        },
        {
            name: "fmhy",
            url: "https://fmhy.net/",
            icon: "fa-regular fa-folder-open",
            category: "tools"
        },
        {
            name: "remove",
            url: "https://www.remove.bg/",
            icon: "fa-solid fa-image-portrait",
            category: "tools"
        },
        {
            name: "picwish",
            url: "https://picwish.com/",
            icon: "fa-regular fa-image",
            category: "tools"
        },
        {
            name: "腾讯智影",
            url: "https://zenvideo.qq.com/",
            icon: "fa-solid fa-video",
            category: "tools"
        },
        {
            name: "免费域名HiDNS",
            url: "https://www.hidoha.net/",
            icon: "fa-solid fa-fingerprint",
            category: "tools"
        },
        {
            name: "pixabay",
            url: "https://pixabay.com/",
            icon: "fa-brands fa-pix",
            category: "tools"
        },
        {
            name: "InfinityFree",
            url: "https://www.infinityfree.com/",
            icon: "fa-solid fa-infinity",
            category: "tools"
        },
        {
            name: "anyvoice",
            url: "https://anyvoice.net/",
            icon: "fa-solid fa-microphone",
            category: "tools"
        },
        {
            name: "fish.audio",
            url: "https://fish.audio/",
            icon: "fa-solid fa-fish",
            category: "tools"
        },
        {
            name: "noizai",
            url: "https://noiz.ai/",
            icon: "fa-solid fa-circle-notch",
            category: "tools"
        },
        {
            name: "海螺Ai",
            url: "https://hailuoai.video/",
            icon: "fa-solid fa-file-audio",
            category: "tools"
        },
        {
            name: "desec免费域名",
            url: "https://desec.io/",
            icon: "fa-solid fa-anchor",
            category: "tools"
        },
        {
            name: "subeasy字幕",
            url: "https://www.subeasy.ai/zh-CN",
            icon: "fa-solid fa-closed-captioning",
            category: "tools"
        },
        {
            name: "Stormkit",
            url: "https://www.stormkit.io/",
            icon: "fa-solid fa-cloud",
            category: "tools"
        },
        
        // Tech News category
        {
            name: "TechCrunch",
            url: "https://www.techcrunch.com/",
            icon: "fa-solid fa-newspaper",
            category: "tech-news"
        },
        {
            name: "Wired",
            url: "https://www.wired.com/",
            icon: "fa-solid fa-bolt",
            category: "tech-news"
        },
        {
            name: "The Verge",
            url: "https://www.theverge.com/",
            icon: "fa-solid fa-laptop",
            category: "tech-news"
        },
        {
            name: "Ars Technica",
            url: "https://arstechnica.com/",
            icon: "fa-solid fa-rocket",
            category: "tech-news"
        },
        {
            name: "Engadget",
            url: "https://www.engadget.com/",
            icon: "fa-solid fa-mobile-screen",
            category: "tech-news"
        },
        {
            name: "TechRadar",
            url: "https://techradar.com/",
            icon: "fa-solid fa-satellite",
            category: "tech-news"
        },
        {
            name: "科技博客",
            url: "https://b.186404.xyz/",
            icon: "fa-solid fa-blog",
            category: "tech-news"
        },
        {
            name: "cnbeta",
            url: "https://www.cnbeta.com.tw/",
            icon: "fa-solid fa-circle-info",
            category: "tech-news"
        },
        
        // Cloud Storage category
        {
            name: "Dropbox",
            url: "https://www.dropbox.com/",
            icon: "fa-brands fa-dropbox",
            category: "cloud-storage"
        },
        {
            name: "Google Drive",
            url: "https://drive.google.com/",
            icon: "fa-brands fa-google-drive",
            category: "cloud-storage"
        },
        {
            name: "OneDrive",
            url: "https://onedrive.live.com/",
            icon: "fa-brands fa-microsoft",
            category: "cloud-storage"
        },
        {
            name: "Box",
            url: "https://www.box.com/",
            icon: "fa-solid fa-box",
            category: "cloud-storage"
        },
        {
            name: "MediaFire",
            url: "https://www.mediafire.com/",
            icon: "fa-solid fa-file",
            category: "cloud-storage"
        },
        {
            name: "MEGA",
            url: "https://mega.nz/",
            icon: "fa-solid fa-cloud-arrow-up",
            category: "cloud-storage"
        },
        {
            name: "PikPak",
            url: "https://mypikpak.com/",
            icon: "fa-solid fa-cloud",
            category: "cloud-storage"
        },
        
        // Email category
        {
            name: "Gmail",
            url: "https://mail.google.com/",
            icon: "fa-solid fa-envelope",
            category: "email"
        },
        {
            name: "Outlook",
            url: "https://outlook.live.com/",
            icon: "fa-brands fa-microsoft",
            category: "email"
        },
        {
            name: "cock邮箱",
            url: "https://cock.li/",
            icon: "fa-solid fa-envelope-open",
            category: "email"
        },
        {
            name: "disroot邮箱",
            url: "https://disroot.org/",
            icon: "fa-solid fa-envelope-circle-check",
            category: "email"
        },
        {
            name: "ProtonMail",
            url: "https://www.protonmail.com/",
            icon: "fa-solid fa-shield-halved",
            category: "email"
        },
        {
            name: "QQ邮箱",
            url: "https://mail.qq.com/",
            icon: "fa-brands fa-qq",
            category: "email"
        },
        {
            name: "librem邮箱",
            url: "https://librem.one/",
            icon: "fa-solid fa-at",
            category: "email"
        },
        {
            name: "临时谷歌邮箱",
            url: "https://www.linshigmail.com/",
            icon: "fa-solid fa-envelopes-bulk",
            category: "email"
        }
    ];

    const sitesContainer = document.getElementById('sites-container');
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    const tabs = document.querySelectorAll('.tab');
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const backToTopBtn = document.getElementById('back-to-top');

    // Function to render websites grouped by category
    function renderWebsitesByCategory(sitesToRender = websites) {
        sitesContainer.innerHTML = '';

        // Get unique categories
        const categories = [...new Set(sitesToRender.map(site => site.category))];

        // For each category
        categories.forEach(category => {
            // Filter websites for this category
            const categoryWebsites = sitesToRender.filter(site => site.category === category);
            
            // Get the category title
            let categoryTitle = '';
            switch(category) {
                case 'ai-search': categoryTitle = 'Ai搜索'; break;
                case 'social': categoryTitle = '社交媒体'; break;
                case 'tools': categoryTitle = '实用工具'; break;
                case 'tech-news': categoryTitle = '科技资讯'; break;
                case 'cloud-storage': categoryTitle = '云存储'; break;
                case 'email': categoryTitle = '电子邮箱'; break;
                default: categoryTitle = category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ');
            }
            
            // Create a container for this category
            const categoryContainer = document.createElement('div');
            categoryContainer.classList.add('category-container');
            categoryContainer.id = category;
            
            // Create a section for this category
            const categorySection = document.createElement('section');
            categorySection.classList.add('category-section');
            
            // Add category header with count
            const categoryHeader = document.createElement('div');
            categoryHeader.classList.add('category-header');
            categoryHeader.innerHTML = `
                <h2 class="category-title">${categoryTitle}</h2>
            `;
            
            // Create a grid for the websites
            const websiteGrid = document.createElement('div');
            websiteGrid.classList.add('website-grid');
            
            createWebsiteCards(websiteGrid, categoryWebsites);

            categorySection.appendChild(categoryHeader);
            categorySection.appendChild(websiteGrid);
            categoryContainer.appendChild(categorySection);
            sitesContainer.appendChild(categoryContainer);
        });

        // Enhance tab interaction and scrolling
        tabs.forEach(tab => {
            tab.addEventListener('click', function() {
                const targetCategory = this.dataset.category;
                const targetElement = document.getElementById(targetCategory);
                
                if (targetElement) {
                    // Smooth scroll with better visual feedback
                    targetElement.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                    });
                    
                    // Add a subtle highlight effect
                    targetElement.classList.add('highlight');
                    setTimeout(() => {
                        targetElement.classList.remove('highlight');
                    }, 1000);
                }
            });
        });
    }

    function createWebsiteCards(websiteGrid, categoryWebsites) {
        categoryWebsites.forEach(site => {
            const card = document.createElement('div');
            card.className = 'site-card';
            card.setAttribute('data-url', site.url);
            card.setAttribute('data-category', site.category);

            card.innerHTML = `
                <div class="site-icon">
                    <i class="${site.icon}"></i>
                </div>
                <div class="site-info">
                    <h3>${site.name}</h3>
                </div>
            `;

            // Modified click event - removed history recording
            card.addEventListener('click', function() {
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = '';
                    window.open(site.url, '_blank');
                }, 150);
            });

            websiteGrid.appendChild(card);
        });
    }

    // Search functionality
    function searchWebsites() {
        const searchTerm = searchInput.value.toLowerCase();
        if (!searchTerm.trim()) {
            renderWebsitesByCategory();
            return;
        }
        
        const filteredSites = websites.filter(site => 
            site.name.toLowerCase().includes(searchTerm) ||
            site.url.toLowerCase().includes(searchTerm)
        );
        
        if (filteredSites.length === 0) {
            sitesContainer.innerHTML = `
                <div class="no-results">
                    <i class="fas fa-search" style="font-size: 48px; color: var(--primary-color); margin-bottom: 20px;"></i>
                    <h3>没有找到相关网站</h3>
                    <p>请尝试其他搜索关键词</p>
                </div>
            `;
        } else {
            renderWebsitesByCategory(filteredSites);
        }

        // Reset category tab states when searching
        tabs.forEach(tab => {
            tab.classList.remove('active');
        });
    }

    searchBtn.addEventListener('click', searchWebsites);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchWebsites();
        }
    });

    // Category switching functionality
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const category = this.dataset.category;

            // Update tab states
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // Filter websites by category
            const filteredSites = websites.filter(site => site.category === category);
            renderWebsitesByCategory(filteredSites);

            // Clear search box
            searchInput.value = '';
            
            // Smooth scroll to category
            const element = document.getElementById(category);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Theme toggle functionality
    themeToggleBtn.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');

        // Change icon
        if (document.body.classList.contains('dark-theme')) {
            themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
        }
        
        // Save preference
        localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
    });

    // Initialize theme from local storage
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-theme');
        themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
    }

    // Back to top functionality
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });

    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Wrap category tabs in a container for better styling
    const tabsEl = document.querySelector('.category-tabs');
    const tabContainer = document.createElement('div');
    tabContainer.className = 'tab-container';
    tabsEl.parentNode.insertBefore(tabContainer, tabsEl);
    tabContainer.appendChild(tabsEl);
    
    // Initialize with grouped websites
    renderWebsitesByCategory();
});