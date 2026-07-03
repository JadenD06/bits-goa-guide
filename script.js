/* ===================================================
   BITS Goa Freshman Guide — Main Script
   =================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // ─── Element References ───
  const bootScreen   = document.getElementById('boot-screen');
  const homepage     = document.getElementById('homepage');
  const progressFill = document.getElementById('progress-fill');
  const progressPct  = document.getElementById('progress-percent');
  const bootStatus   = document.getElementById('boot-status');
  const transition   = document.getElementById('page-transition');

  // ─── All sub-pages by ID ───
  const subPages = {
    acads:           document.getElementById('page-acads'),
    'campus-life':   document.getElementById('page-campus-life'),
    'clubs-depts':   document.getElementById('page-clubs-depts'),
    'sports-food':   document.getElementById('page-sports-food'),
    'contact-info':  document.getElementById('page-contact-info'),
    'fests-programs':document.getElementById('page-fests-programs'),
    resources:       document.getElementById('page-resources'),
    misc:            document.getElementById('page-misc'),
  };

  // ─── Detail page elements ───
  const detailPage    = document.getElementById('page-detail');
  const detailTitle   = document.getElementById('detail-title');
  const detailContent = document.getElementById('detail-content');

  // ─── Content Data ───
  const sectionData = {
    acads: {
      headings: [
        'College Academics vs JEE',
        'Should You Attend Classes?',
        'Where to Find Study Material',
        'Getting Good Grades Isn\'t That Hard',
      ],
      content: {
        'College Academics vs JEE': `
          <p>Most of you have just come out of the JEE phase, so it's time to relax a bit.</p>
          <p>You don't need to grind every day like you did for JEE. Most evaluations, such as quizzes and labs, only require preparation a few days beforehand.</p>
          <p>Midsems and Compres, however, usually need a few weeks of preparation.</p>
        `,
        'Should You Attend Classes?': `
          <p>Attending classes can be worth it, especially if the professor teaches well.</p>
          <p>If you feel like you don't need to attend a particular course, try going through the lecture slides and material on your own first.</p>
          <p>If you're confident you can keep up independently, you can choose to skip some classes.</p>
        `,
        'Where to Find Study Material': `
          <p>A collection of previous-year resources has already been compiled for students.</p>
          <p>These materials can be very helpful for understanding course patterns and preparing for evaluations.</p>
          <p><a href="https://docs.google.com/document/d/1dF0MSMJyaN_TnTDAedDWZMhl4oOZNerP1u5sdDgNceI/edit?usp=sharing" class="detail-link">Click here!</a></p>
        `,
        'Getting Good Grades Isn\'t That Hard': `
          <p>Grading at the Goa campus is fairly lenient.</p>
          <p>In most courses, getting an A or A- is more about being consistent across all evaluations than topping every exam.</p>
          <p>Try to stay above the class average whenever possible and keep putting in steady effort throughout the semester.</p>
        `,
      },
    },
    'campus-life': {
      headings: [
        'Virtual Tour',
        'Reaching Campus',
        'Accommodation For Parents',
        'Everyday Essentials',
      ],
      content: {
        'Virtual Tour': `
          <p>You can take a virtual tour of the campus here:</p>
          <p><a href="https://www.bits-goa.ac.in/bits-goa-campus/index.htm" class="detail-link">Click here! :3</a></p>
        `,
        'Reaching Campus': `
          <p><strong>From Dabolim Airport (GOI)</strong><br/>10 mins by road. Taxi ~₹400 (small) / ₹500 (large).</p>
          <p><strong>From Mopa Airport (GOX)</strong><br/>Newer airport, 1.5 hrs by road. Taxi ~₹2000–2500.</p>
          <p><strong>From Madgaon Railway Station</strong><br/>90 mins by road. Taxi ~₹900 (small) / ₹1100 (large).</p>
          <p><strong>From Vasco Railway Station</strong><br/>30 mins by road. Taxi ~₹400.</p>
        `,
        'Accommodation For Parents': `
          <p>During reporting, parents cannot stay at the guest house.</p>
          <p>BITS has provided a list of nearby hotels at similar or lower rates.</p>
          <p><a href="https://www.bits-pilani.ac.in/goa/goahotels" target="_blank" class="detail-link">View nearby hotels</a></p>
        `,
        'Everyday Essentials': `
          <p><strong>Things NOT to bring from home</strong> — these are available on campus:</p>
          <p>Bedding, mattresses, pillows, locks, broom, dustbins, curtains, toiletries (soaps, shampoo, toothpaste, buckets), cosmetics, medicines, notebooks, stationery, and textbooks (buy from seniors at 1/4th price!).</p>
          <p>A scientific calculator is a must — you can buy it here.</p>
          <p>Amazon, Flipkart and other e-commerce services deliver to your hostel gate, so you can order things online to save luggage weight.</p>
        `,
      },
    },

    'clubs-depts': {
      headings: [
        'Exploring Clubs & Departments',
        'Why Should You Join?',
        'Your Branch Department',
      ],
      content: {
        'Exploring Clubs & Departments': `
          <p>BITS has a wide variety of clubs, departments, and student organizations catering to different interests — technology, culture, sports, entrepreneurship, community service, and more.</p>
          <p><a href="#" class="detail-link">[Complete list coming soon]</a></p>
          <p><a href="#" class="detail-link">[File: What each club & dept does — coming soon]</a></p>
        `,
        'Why Should You Join?': `
          <p>Joining clubs and departments is one of the best ways to meet new people and build friendships outside your academic circle.</p>
          <p>They help you develop valuable skills — both technical and non-technical — while giving you opportunities to work on projects, organize events, and take on responsibilities.</p>
        `,
        'Your Branch Department': `
          <p>Every branch has its own student department that regularly organizes activities such as departmental dinners, Open Day events, talks, and other programs.</p>
          <p>These departments are led by student representatives including positions such as Secretary and President, who help coordinate events and represent the student community.</p>
        `,
      },
    },

    'sports-food': {
      headings: [
        'Stay Active, Stay Involved',
        'Sports Are a Big Part of Campus Life',
        'Understanding the Mess System',
        'Food Beyond the Mess',
        'The Real Late-Night Experience',
      ],
      content: {
        'Stay Active, Stay Involved': `
          <p>BITS Goa has facilities for badminton, basketball, tennis, football, cricket, volleyball, table tennis, squash, snooker, carrom, and a fully equipped gym.</p>
          <p>Whether you're looking to play casually with friends or compete seriously, there's something for everyone.</p>
        `,
        'Sports Are a Big Part of Campus Life': `
          <p>You don't need prior experience to get involved.</p>
          <p>From casual evening games to institute teams and inter-hostel tournaments, sports are one of the best ways to stay fit, take a break from academics, and meet people outside your immediate friend circle.</p>
        `,
        'Understanding the Mess System': `
          <p>BITS Goa has three dining halls — A Mess, C Mess, and D Mess. You are free to eat at any of them, though most students choose the one closest to their hostel.</p>
          <p>You can change your mess allocation every month. The menu is regularly updated based on student feedback collected by the Mess Convenors.</p>
          <p>Evening snacks are available on a pay-and-eat basis.</p>
        `,
        'Food Beyond the Mess': `
          <p><strong>Food King (FK)</strong> — Famous for dosas and South Indian food.</p>
          <p><strong>Institute Cafeteria (IC)</strong> — Houses Nescafe and Shetty Sons; coffee, Maggi, and full meals.</p>
          <p><strong>Ice and Spice (InS)</strong> — Shawarmas, rolls, burgers, and sodas.</p>
          <p><strong>Gajalaxmi</strong> — Popular for vada pav and quick snacks.</p>
          <p><strong>Red Chilly (RC)</strong> — North Indian and Chinese; non-veg options are especially popular.</p>
          <p><strong>Amul / Sub-Spot</strong> — Ice creams, cold drinks, subs, and snacks.</p>
          <p><strong>Domino's</strong> — Yes, there's a Domino's on campus.</p>
        `,
        'The Real Late-Night Experience': `
          <p>College life doesn't stop after dinner. The Night Canteens (ANC, CNC, and DNC) start operating around 11 PM and often stay open until 2–3 AM.</p>
          <p>Whether you're pulling an all-nighter before an exam, finishing a project, or simply hanging out with friends, these late-night food runs become some of the most memorable parts of campus life.</p>
        `,
      },
    },

    'contact-info': {
      headings: [
        'CSA Members',
        'Admin / Faculty Contact',
        'Taxi Drivers',
        'MedC / PoSH / IC',
      ],
      content: {
        'CSA Members': `
          <p><strong>GenSec:</strong> Shreshth K. — 8287908349</p>
          <p><strong>Prez:</strong> Joy S. Garg — 9466532839</p>
          <p><strong>Trez:</strong> Advait S. Raut — 8310433076</p>
          <p><strong>Vice Prez:</strong> Amber Singh — 6359601917</p>
          <p><strong>Sports Sec:</strong> Aarav S. — 9699939371</p>
        `,
        'Admin / Faculty Contact': `
          <p>Will be added soon.</p>
        `,
        'Taxi Drivers': `
          <p>Find the updated taxi driver contact list here:</p>
          <p><a href="#" class="detail-link">[Link coming soon]</a></p>
        `,
        'MedC / PoSH / IC': `
          <p>Will be added soon.</p>
        `,
      },
    },

    'fests-programs': {
      headings: [
        'Waves — Cultural Fest',
        'Quark — Tech Fest',
        'Spree — Sports Fest',
        'Zephyr — Hostel vs Hostel',
        'BITSMUN',
        'TEDxBITSGoa',
      ],
      content: {
        'Waves — Cultural Fest': `
          <p>Waves is the annual cultural festival of BITS Goa, usually held around October–November. It is one of the biggest college cultural fests in India.</p>
          <p>Competitions span music, dance, drama, fashion, photography, literature, and more. The highlight for many is the Pro Nights, featuring popular singers, bands, comedians, and DJs.</p>
          <p>Follow: @wavesbits</p>
        `,
        'Quark — Tech Fest': `
          <p>Quark is the annual techno-management festival, usually held around February. It brings together students for technical competitions, workshops, hackathons, exhibitions, startup events, and guest lectures.</p>
          <p>A great opportunity to learn from industry leaders, researchers, and innovators.</p>
          <p>Follow: @bitsquark</p>
        `,
        'Spree — Sports Fest': `
          <p>Spree is the annual sports festival and one of the largest inter-collegiate sports fests in the country. Students from various colleges participate in tournaments across multiple sports.</p>
          <p>Whether you're playing, volunteering, or cheering from the sidelines, Spree is one of the most energetic events of the year.</p>
          <p>Follow: @bitsspree</p>
        `,
        'Zephyr — Hostel vs Hostel': `
          <p>Zephyr is the inter-hostel fest where hostels compete against each other in sports, cultural events, and fun competitions. It's all about hostel pride, friendly rivalries, and creating memories with your wingmates.</p>
          <p>Revived in 2024, Zephyr has quickly become one of the most anticipated events on campus again.</p>
        `,
        'BITSMUN': `
          <p>BITSMUN (BITS Model United Nations) is one of the most prestigious student-run MUN conferences in the country, founded in 2008.</p>
          <p>Delegates from schools and colleges across India participate in simulated UN committees, debating global issues and developing skills in public speaking, diplomacy, negotiation, and critical thinking.</p>
          <p>Even if you're not into debating, it's a great platform to improve confidence, communication, and global awareness.</p>
          <p>Follow: @bitsmungoa</p>
        `,
        'TEDxBITSGoa': `
          <p>TEDxBITSGoa is one of the oldest running institutional TEDx conferences in India, inspired by TED's philosophy of "Ideas Worth Spreading."</p>
          <p>It brings together speakers from entrepreneurship, science, technology, entertainment, education, sports, and social impact — creating meaningful discussions that go beyond academics.</p>
          <p>Follow: @tedxbitsgoa</p>
        `,
      },
    },

    resources: {
      headings: [
        'Academic Calendar',
        'CGPA Calculator',
        'Timetable Generator',
        'BITS Portals',
      ],
      content: {
        'Academic Calendar': `
          <p>The academic calendar will be added here soon.</p>
          <p><a href="#" class="detail-link">[Link coming soon]</a></p>
        `,
        'CGPA Calculator': `
          <p>Might come in handy after midsems!</p>
          <p><a href="https://cgpa-calculator-bits.vercel.app/" target="_blank" class="detail-link">Open CGPA Calculator</a></p>
        `,
        'Timetable Generator': `
          <p>This will only be useful after Sem 1 ends.</p>
          <p><a href="https://timetable-generator-bits-goa.vercel.app/" target="_blank" class="detail-link">Open Timetable Generator</a></p>
        `,
        'BITS Portals': `
          <p><a href="https://erp.bits-pilani.ac.in/" target="_blank" class="detail-link">ERP Portal</a></p>
          <p><a href="https://swd.bits-goa.ac.in/dashboard/" target="_blank" class="detail-link">SWD Portal</a></p>
          <p><a href="https://quanta.bits-goa.ac.in/login/index.php" target="_blank" class="detail-link">Quanta</a></p>
          <p><a href="https://quantaaws.bits-goa.ac.in/login/index.php" target="_blank" class="detail-link">QuantaAWS</a></p>
        `,
      },
    },

    misc: {
  headings: [
    'FAQ',
    'BITS Auto WiFi Login App',
    'List of Nearby Beaches & Treks',
    'List of Nearby Hotels',
    'List of Nearby Food',
    'Advice Cutoffs',
    'Dual Cutoffs',
  ],
  content: {
    'FAQ': `
      <p><strong>Should I buy textbooks?</strong><br/>Only textbooks required for Open Book exams are necessary. You can also borrow books from the Library for free.</p>
      <p><strong>Is a gaming laptop necessary?</strong><br/>No, it isn't.</p>
      <p><strong>How much do students spend monthly?</strong><br/>Depends on you — a conservative guess is ₹4k–6k.</p>
      <p><strong>Can I change my branch?</strong><br/>Branch change is based on CGPA. If your CG is higher than the top 5 of that branch, you can apply for vertical transfer. Horizontal shifts (e.g. M.Sc. Chem to M.Sc. Maths) are also possible.</p>
      <p><strong>How many clubs should I join?</strong><br/>As many as you like — try everything out first, then decide which to prioritize.</p>
      <p><strong>Is attendance compulsory?</strong><br/>Attendance isn't compulsory for writing exams, but the course in-charge (IC) can keep marks for attendance.</p>
      <p><strong>How often do students go home?</strong><br/>Depends on off-days during fests or holidays like Diwali or Holi.</p>
    `,
    'BITS Auto WiFi Login App': `
      <p><a href="#" class="detail-link">[Link coming soon]</a></p>
    `,
    'List of Nearby Beaches & Treks': `
      <p><a href="#" class="detail-link">[Link coming soon]</a></p>
    `,
    'List of Nearby Hotels': `
      <p><a href="https://docs.google.com/document/d/1z7WhV6hKTXadw9NLGqDWSWeoAwUua_wf3xeVgKi3mw8/edit?usp=sharing" class="detail-link">Click here to see the list</a></p>
    `,
    'List of Nearby Food': `
      <p><a href="https://docs.google.com/document/d/1IJGufF73Pn2E_CUGfBCAI01HqwfIq3cM/edit?usp=sharing&ouid=114912732399767860437&rtpof=true&sd=true" class="detail-link">Click here to see!</a></p>
    `,
    'Advice Cutoffs': `
      <p><a href="#" class="detail-link">[Link coming soon]</a></p>
    `,
    'Dual Cutoffs': `
      <p><a href="#" class="detail-link">[Link coming soon]</a></p>
    `,
  },
},
  };

  // ─── Populate heading buttons into each sub-page ───
  Object.entries(sectionData).forEach(([sectionId, data]) => {
    const page = subPages[sectionId];
    if (!page || !data.headings.length) return;

    const contentDiv = page.querySelector('.sub-page-content');
    contentDiv.innerHTML = '';

    data.headings.forEach(heading => {
      const btn = document.createElement('button');
      btn.className = 'heading-btn';
      btn.textContent = heading;
      btn.dataset.heading = heading;
      btn.addEventListener('click', () => {
        openDetail(sectionId, heading);
      });
      contentDiv.appendChild(btn);
    });
  });

  // ─── Boot Status Messages ───
  const statusMessages = [
    'Initializing BITS Goa Systems...',
    'Loading campus modules...',
    'Connecting to Goan vibes...',
    'Preparing freshman guide...',
    'Unpacking bottles from the sea...',
    'Boot complete. Welcome, BITSian!',
  ];

  // ═══════════════════════════════════════════════════
  // PHASE 1: BOOT SEQUENCE
  // ═══════════════════════════════════════════════════
  const BOOT_DURATION = 2500; // ms
  const TICK_INTERVAL = 30;   // ms per update
  let elapsed = 0;

  const bootInterval = setInterval(() => {
    elapsed += TICK_INTERVAL;
    const pct = Math.min(100, Math.round((elapsed / BOOT_DURATION) * 100));

    // Update progress bar
    progressFill.style.width = pct + '%';
    progressPct.textContent  = pct + '%';

    // Cycle through status messages
    const msgIndex = Math.min(
      Math.floor((pct / 100) * statusMessages.length),
      statusMessages.length - 1
    );
    bootStatus.textContent = statusMessages[msgIndex];

    if (pct >= 100) {
      clearInterval(bootInterval);

      // Small pause at 100% then transition
      setTimeout(() => {
        bootScreen.classList.add('fade-out');
        homepage.classList.add('active');

        // Remove boot screen from DOM after fade
        setTimeout(() => {
          bootScreen.style.display = 'none';
        }, 800);
      }, 400);
    }
  }, TICK_INTERVAL);

  // ═══════════════════════════════════════════════════
  // PHASE 2: HOTSPOT NAVIGATION
  // ═══════════════════════════════════════════════════
  document.querySelectorAll('.hotspot').forEach(hotspot => {
    hotspot.addEventListener('click', () => {
      const target = hotspot.dataset.target;
      navigateTo(target);
    });
  });

  // ═══════════════════════════════════════════════════
  // PHASE 3: BACK BUTTON NAVIGATION
  // ═══════════════════════════════════════════════════
  document.querySelectorAll('.back-btn:not(.detail-back-btn)').forEach(btn => {
    btn.addEventListener('click', () => {
      navigateHome();
    });
  });

  // Detail page back button → returns to parent sub-page
  document.querySelector('.detail-back-btn').addEventListener('click', () => {
    navigateBack();
  });

  // ─── Track which section we came from ───
  let currentSection = null;

  // ═══════════════════════════════════════════════════
  // 8-BIT PIXEL DISSOLVE TRANSITION ENGINE
  // ═══════════════════════════════════════════════════

  // Inject a canvas into the overlay
  const canvas = document.createElement('canvas');
  canvas.id = 'transition-canvas';
  transition.appendChild(canvas);
  const ctx = canvas.getContext('2d');

  const BLOCK        = 18;     // px — size of each 8-bit "pixel"
  const FRAMES_COVER = 70;     // frames to cover screen  (higher = slower)
  const HOLD_MS      = 0;     // pause between cover→clear

  // Retro colour palette for the dissolve blocks
  const PALETTE = [
  '#090705',
  '#0f0906',
  '#17100d',
  '#2a1b14',
  '#4b2d20',
  '#8c5a33',
  '#b97a45',
  '#e2b36c'
];

  /**
   * Fisher-Yates shuffle (in-place).
   */
  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  /**
   * Build block list ordered along diagonals (top-left → bottom-right),
   * with a little shuffle inside each band for a ragged 8-bit edge.
   * Pass reverse=true to sweep from the opposite corner.
   */
  function diagonalOrder(cols, rows, reverse = false) {
    const maxDiag = (cols - 1) + (rows - 1);
    const bands   = Array.from({ length: maxDiag + 1 }, () => []);

    for (let r = 0; r < rows; r++)
      for (let c = 0; c < cols; c++)
        bands[c + r].push([c, r]);

    // Shuffle within each diagonal band → ragged pixel edge
    bands.forEach(band => shuffle(band));

    const ordered = bands.flat();
    return reverse ? ordered.reverse() : ordered;
  }

  function pixelTransition(callback) {
  return new Promise(resolve => {

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const cols = Math.ceil(canvas.width / BLOCK);
    const rows = Math.ceil(canvas.height / BLOCK);

    const blocks = diagonalOrder(cols, rows, false);

    transition.classList.add("active");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Controls how thick the conveyor belt is
    const BELT = Math.floor(blocks.length * 0.75);

    // Animation speed
    const STEP = Math.ceil(blocks.length / 75);

    let front = 0;
    let swapped = false;

    function animate() {

      // Draw new blocks
      const drawEnd = Math.min(front, blocks.length);

      for (let i = Math.max(0, drawEnd - STEP); i < drawEnd; i++) {

        const [c, r] = blocks[i];

        const idx = Math.min(
          PALETTE.length - 1,
          Math.floor(Math.pow(Math.random(), 2.2) * PALETTE.length)
        );

        ctx.fillStyle = PALETTE[idx];
        ctx.fillRect(
          c * BLOCK - 1,
          r * BLOCK - 1,
          BLOCK + 2,
          BLOCK + 2
        );
      }

      // Page swap when everything is covered
      if (!swapped && front >= blocks.length) {
        swapped = true;
        callback();
      }

      // Erase blocks after the belt passes
      if (front > BELT) {

        const eraseEnd = Math.min(front - BELT, blocks.length);

        for (let i = Math.max(0, eraseEnd - STEP); i < eraseEnd; i++) {

          const [c, r] = blocks[i];

          ctx.clearRect(
            c * BLOCK - 1,
            r * BLOCK - 1,
            BLOCK + 2,
            BLOCK + 2
          );
        }
      }

      front += STEP;

      if (front <= blocks.length + BELT) {
        requestAnimationFrame(animate);
      } else {

        transition.classList.remove("active");
        ctx.clearRect(0,0,canvas.width,canvas.height);

        resolve();
      }

    }

    requestAnimationFrame(animate);

  });
}

  // ═══════════════════════════════════════════════════
  // NAVIGATION HELPERS
  // ═══════════════════════════════════════════════════

  /**
   * Open the shared detail page for a heading inside a section.
   */
  function openDetail(sectionId, heading) {
    currentSection = sectionId;
    const content = sectionData[sectionId]?.content[heading] || '<p>Coming soon!</p>';

    pixelTransition(() => {
      detailTitle.textContent = heading;
      detailContent.innerHTML = content;
      subPages[sectionId].classList.remove('active');
      detailPage.classList.add('active');
    });
  }

  /**
   * Navigate from detail page back to the parent sub-page.
   */
  function navigateBack() {
    pixelTransition(() => {
      detailPage.classList.remove('active');
      if (currentSection) subPages[currentSection].classList.add('active');
    });
  }

  /**
   * Navigate from homepage to a sub-page.
   */
  function navigateTo(pageId) {
    const page = subPages[pageId];
    if (!page) return;

    pixelTransition(() => {
      homepage.classList.remove('active');
      page.classList.add('active');
    });
  }

  /**
   * Navigate from any sub-page back to homepage.
   */
  function navigateHome() {
    pixelTransition(() => {
      Object.values(subPages).forEach(p => p.classList.remove('active'));
      homepage.classList.add('active');
    });
  }

});