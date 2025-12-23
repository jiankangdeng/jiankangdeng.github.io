// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "publications in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-team",
          title: "Team",
          description: "Mobile Vision Perception (MVP) Lab",
          section: "Navigation",
          handler: () => {
            window.location.href = "/team/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-welcome-to-face-anti-spoofing-challenge-cvpr-2023",
          title: 'Welcome to Face Anti-spoofing Challenge @ CVPR 2023.',
          description: "",
          section: "News",},{id: "news-welcome-to-view-synthesis-challenge-for-human-heads-iccv-2023",
          title: 'Welcome to View Synthesis Challenge for Human Heads @ ICCV 2023.',
          description: "",
          section: "News",},{id: "news-welcome-to-ai-for-digital-human-workshop-aaai-2024",
          title: 'Welcome to AI for Digital Human Workshop @ AAAI 2024.',
          description: "",
          section: "News",},{id: "news-we-released-the-3rd-edition-of-handbook-of-face-recognition",
          title: 'We released the 3rd edition of Handbook of Face Recognition.',
          description: "",
          section: "News",},{id: "news-welcome-to-face-anti-spoofing-challenge-cvpr-2024",
          title: 'Welcome to Face Anti-spoofing Challenge @ CVPR 2024.',
          description: "",
          section: "News",},{id: "news-welcome-to-face-anti-spoofing-challenge-iccv-2025",
          title: 'Welcome to Face Anti-spoofing Challenge @ ICCV 2025.',
          description: "",
          section: "News",},{id: "news-we-present-cedex-for-cross-embodiment-dexterous-grasp-synthesis-at-scale",
          title: 'We present CEDex for cross-embodiment dexterous grasp synthesis at scale.',
          description: "",
          section: "News",},{id: "news-we-launch-embodied-arena-a-comprehensive-evaluation-platform-for-embodied-ai",
          title: 'We launch Embodied Arena, a comprehensive evaluation platform for Embodied AI.',
          description: "",
          section: "News",},{id: "news-we-launch-llava-onevision-1-5-a-fully-open-framework-for-democratized-multimodal-training",
          title: 'We launch LLaVA-OneVision 1.5, a fully open framework for democratized multimodal training.',
          description: "",
          section: "News",},{id: "news-awarded-an-nvidia-academic-grant-under-the-nvidia-academic-grant-program",
          title: 'Awarded an NVIDIA Academic Grant under the NVIDIA Academic Grant Program.',
          description: "",
          section: "News",},{id: "news-we-release-a-comprehensive-survey-on-vision-language-action-vla-models",
          title: 'We release a comprehensive survey on Vision-Language-Action (VLA) models.',
          description: "",
          section: "News",},{id: "news-genforce-a-transferable-force-sensing-framework-across-diverse-tactile-sensors-has-been-accepted-by-nature-communications",
          title: 'GenForce, a transferable force-sensing framework across diverse tactile sensors, has been accepted by...',
          description: "",
          section: "News",},{id: "projects-lucila-riascos-weber",
          title: 'Lucila Riascos Weber',
          description: "Research Support Officer",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Admin_LucilaRiascosWeber/";
            },},{id: "projects-francesca-babiloni",
          title: 'Francesca Babiloni',
          description: "3D Avatar (PhD-&gt;Research Scientist at Google）",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Alumni_FrancescaBabiloni/";
            },},{id: "projects-qingping-zheng",
          title: 'Qingping Zheng',
          description: "Image and Video Generation (PhD-&gt;Postdoc at Zhejiang University)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Alumni_QingpingZheng/";
            },},{id: "projects-rolandos-alexandros-potamias",
          title: 'Rolandos Alexandros Potamias',
          description: "3D Hand Modelling (Postdoc-&gt;Assistant Professor at Imperial College)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Alumni_RolandosAlexandrosPotamias/";
            },},{id: "projects-shuyuan-zhang",
          title: 'Shuyuan Zhang',
          description: "3D Shape Program Synthesis (MSc-&gt;PhD at CUHK)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Alumni_ShuyuanZhang/";
            },},{id: "projects-xingyu-ren",
          title: 'Xingyu Ren',
          description: "Face Modelling and Generation (PhD-&gt;Founder of ExcitAI)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Alumni_XingyuRen/";
            },},{id: "projects-didi-zhu",
          title: 'Didi Zhu',
          description: "Multimodal Reasoning",
          section: "Projects",handler: () => {
              window.location.href = "/projects/PDRA_DidiZhu/";
            },},{id: "projects-evangelos-ververas",
          title: 'Evangelos Ververas',
          description: "3D Scene Understanding",
          section: "Projects",handler: () => {
              window.location.href = "/projects/PDRA_EvangelosVerveras/";
            },},{id: "projects-fei-ni",
          title: 'Fei Ni',
          description: "Embodied AI",
          section: "Projects",handler: () => {
              window.location.href = "/projects/PDRA_FeiNi/";
            },},{id: "projects-ronglai-zuo",
          title: 'Ronglai Zuo',
          description: "Sign Language Translation/Generation",
          section: "Projects",handler: () => {
              window.location.href = "/projects/PDRA_RonglaiZuo/";
            },},{id: "projects-zerui-chen",
          title: 'Zerui Chen',
          description: "Dexterous Manipulation",
          section: "Projects",handler: () => {
              window.location.href = "/projects/PDRA_ZeruiChen/";
            },},{id: "projects-chrysa-pratikaki",
          title: 'Chrysa Pratikaki',
          description: "3D Human-Scene Interaction (Co-supervise）",
          section: "Projects",handler: () => {
              window.location.href = "/projects/PhD_ChrysaPratikaki/";
            },},{id: "projects-yanzuo-lu",
          title: 'YanZuo Lu',
          description: "Video Generation and World Model",
          section: "Projects",handler: () => {
              window.location.href = "/projects/PhD_YanzuoLu/";
            },},{id: "projects-yura-choi",
          title: 'Yura Choi',
          description: "Egocentric Video Understanding (Co-supervise）",
          section: "Projects",handler: () => {
              window.location.href = "/projects/PhD_YuraChoi/";
            },},{id: "projects-seunghyun-shin",
          title: 'Seunghyun Shin',
          description: "Aesthetic Image/Video Enhancement",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Visitor_SeunghyunShin/";
            },},{id: "projects-zhuo-chen",
          title: 'Zhuo Chen',
          description: "Visual Tactile Sensor",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Visitor_ZhuoChen/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
