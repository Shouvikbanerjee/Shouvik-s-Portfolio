document.addEventListener("DOMContentLoaded", function () {
    particlesJS("particles-container", {
        particles: {
            number: { value: 80, density: { enable: !0, value_area: 800 } },
            color: { value: "#3B82F6" },
            shape: { type: "circle" },
            opacity: { value: 0.5, random: !0 },
            size: { value: 3, random: !0 },
            line_linked: { enable: !0, distance: 150, color: "#8B5CF6", opacity: 0.4, width: 1 },
            move: { enable: !0, speed: 2, direction: "none", random: !0, straight: !1, out_mode: "out", bounce: !1 },
        },
        interactivity: {
            detect_on: "canvas",
            events: { onhover: { enable: !0, mode: "repulse" }, onclick: { enable: !0, mode: "push" } },
        },
    });
    const e = document.getElementById("theme-toggle"),
        t = document.getElementById("theme-toggle-mobile");
    function n() {
        document.documentElement.classList.toggle("dark"),
            localStorage.setItem("dark-mode", document.documentElement.classList.contains("dark"));
    }
    e.addEventListener("click", n),
        t.addEventListener("click", n),
        "true" === localStorage.getItem("dark-mode") && document.documentElement.classList.add("dark");
    const o = document.getElementById("mobile-menu-button"),
        a = document.getElementById("mobile-menu"),
        i = document.getElementById("mobile-menu-backdrop"),
        s = document.getElementById("close-menu");
    function l() {
        a.classList.remove("active"), i.classList.remove("active"), document.body.classList.remove("menu-open");
    }
    o &&
        o.addEventListener("click", function () {
            a.classList.add("active"), i.classList.add("active"), document.body.classList.add("menu-open");
        }),
        s && s.addEventListener("click", l),
        i && i.addEventListener("click", l),
        document.querySelectorAll("#mobile-menu a").forEach((e) => {
            e.addEventListener("click", () => {
                l();
            });
        }),
        document.addEventListener("keydown", function (e) {
            "Escape" === e.key && a.classList.contains("active") && l();
        }),
        window.addEventListener("resize", function () {
            window.innerWidth >= 768 && a.classList.contains("active") && l();
        });
    const r = document.getElementById("back-to-top");
    window.addEventListener("scroll", function () {
        window.scrollY > 300
            ? (r.classList.remove("opacity-0"), r.classList.add("opacity-100"))
            : (r.classList.remove("opacity-100"), r.classList.add("opacity-0"));
    }),
        r.addEventListener("click", function () {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }),
        document.querySelectorAll('a[href^="#"]').forEach((e) => {
            e.addEventListener("click", function (e) {
                e.preventDefault();
                const t = this.getAttribute("href");
                if ("#" === t) return;
                const n = document.querySelector(t);
                n && window.scrollTo({ top: n.offsetTop - 80, behavior: "smooth" });
            });
        });
    const d = [
            { name: "Java", icon: "fab fa-java", color: "text-red-400" },
            { name: "C", icon: "fab fa-c", color: "text-blue-500" },
            { name: "C++", icon: "devicon-cplusplus-plain", color: "text-red-500" },
            { name: "Python", icon: "fab fa-python", color: "text-blue-500" },
            { name: "SQL", icon: "fas fa-database", color: "text-blue-300" },
            { name: "HTML5", icon: "fab fa-html5", color: "text-orange-500" },
            { name: "CSS3", icon: "fab fa-css3-alt", color: "text-blue-400" },
            { name: "Bootstrap", icon: "fab fa-bootstrap", color: "text-purple-600" },
            { name: "JavaScript", icon: "fab fa-js", color: "text-yellow-400" },
            { name: "PHP", icon: "fab fa-php", color: "text-purple-500" },
            { name: "React", icon: "fab fa-react", color: "text-cyan-400" },
           
            { name: "Git", icon: "fab fa-git-alt", color: "text-orange-600" },
            { name: "VS Code", icon: "fas fa-code", color: "text-blue-400" },
            { name: "Linux", icon: "fab fa-linux", color: "text-gray-400" },
            
        ],
        c = [
            
            // {
            //     title: "Portfolio Website",
            //     description: "Modern portfolio website with animations",
            //     tech: ["React", "Tailwind", "GSAP"],
            //     type: "web",
            //     liveLink: "#",
            //     repoLink: "https://github.com/sayanmajumder1/portfolio",
            //     image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            // },
            {
                title: "FoodExpress",
                description: "FoodExpress is an online food ordering and delivery platform.",
                tech: ["BootStrup", "HTML","CSS","PHP","AJAX","MySQL"],
                type: "web",
                liveLink: "https://foodexpress.unaux.com",
                repoLink: "https://github.com/Shouvikbanerjee/FoodExpress.git",
                image: "./assets/roots/foodexpress.png",
            },
            {
                title: "Emplify",
                description: "Emplify is a web-based Employee Management System",
                tech: ["BootStrup", "Tailwind CSS","PHP","AJAX","MySQL"],
                type: "web",
                liveLink: "https://emplify.unaux.com",
                repoLink: "https://github.com/Shouvikbanerjee/Emplify.git",
                image: "./assets/roots/emplify.png",
            },
            
            
           
        ];
    function m() {
        const e = document.getElementById("projects-grid");
        (e.innerHTML = ""),
            c.forEach((t, n) => {
                const o = document.createElement("div");
                (o.className = "bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl card-hover"),
                    (o.style.animationDelay = 0.2 * n + "s");
                let a = "";
                a =
                    "android" === t.type
                        ? `\n                <div class="flex space-x-2">\n                    <a href="${t.downloadLink || "#"}" \n                       target="_blank"\n                       class="flex-1 bg-green-600 text-white text-center py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300 flex items-center justify-center gap-2">\n                        <i class="fas fa-download"></i> Download APK\n                    </a>\n                    ${t.repoLink ? `\n                        <a href="${t.repoLink}" \n                           target="_blank"\n                           class="flex-1 bg-gray-800 text-white text-center py-2 rounded-lg font-semibold hover:bg-gray-900 transition-colors duration-300 flex items-center justify-center gap-2">\n                            <i class="fab fa-github"></i> Code\n                        </a>\n                    ` : ""}\n                </div>\n            `
                        : "web" === t.type
                          ? `\n                <div class="flex space-x-2">\n                    ${t.liveLink ? `\n                        <a href="${t.liveLink}" \n                           target="_blank"\n                           class="flex-1 bg-primary text-white text-center py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center gap-2">\n                            <i class="fas fa-external-link-alt"></i> Live Demo\n                        </a>\n                    ` : ""}\n                    ${t.repoLink ? `\n                        <a href="${t.repoLink}" \n                           target="_blank"\n                           class="flex-1 bg-gray-800 text-white text-center py-2 rounded-lg font-semibold hover:bg-gray-900 transition-colors duration-300 flex items-center justify-center gap-2">\n                            <i class="fab fa-github"></i> Code\n                        </a>\n                    ` : t.liveLink ? "" : '\n                        <a href="#" \n                           class="flex-1 bg-gray-400 text-white text-center py-2 rounded-lg font-semibold cursor-not-allowed opacity-50 flex items-center justify-center gap-2" onclick="return false;">\n                            <i class="fas fa-times-circle"></i> No Link\n                        </a>\n                    '}\n                </div>\n            `
                          : "design" === t.type
                            ? `\n                <div class="flex space-x-2">\n                    <a href="${t.behanceLink || "#"}" \n                       target="_blank"\n                       class="flex-1 bg-purple-600 text-white text-center py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-300 flex items-center justify-center gap-2">\n                        <i class="fab fa-behance"></i> View Designs\n                    </a>\n                </div>\n            `
                            : `\n                <div class="flex space-x-2">\n                    ${t.repoLink ? `\n                        <a href="${t.repoLink}" \n                           target="_blank"\n                           class="flex-1 bg-gray-800 text-white text-center py-2 rounded-lg font-semibold hover:bg-gray-900 transition-colors duration-300 flex items-center justify-center gap-2">\n                            <i class="fab fa-github"></i> View Code\n                        </a>\n                    ` : '\n                        <button class="flex-1 bg-gray-400 text-white text-center py-2 rounded-lg font-semibold cursor-not-allowed opacity-50 flex items-center justify-center gap-2" disabled>\n                            <i class="fas fa-times-circle"></i> No Link\n                        </button>\n                    '}\n                </div>\n            `;
                const i = `\n            <div class="flex items-center gap-2 mt-4">\n                <div class="flex-1">\n                    ${a}\n                </div>\n                <button class="w-10 h-10 rounded-lg border border-gray-300 dark:border-gray-600 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300 favorite-btn" title="Add to favorites">\n                    <i class="far fa-heart"></i>\n                </button>\n            </div>\n        `,
                    s =
                        {
                            android:
                                '<span class="absolute top-3 right-3 bg-green-500 text-white text-xs px-2 py-1 rounded-full z-10">Android App</span>',
                            web: '<span class="absolute top-3 right-3 bg-blue-500 text-white text-xs px-2 py-1 rounded-full z-10">Web App</span>',
                            design: '<span class="absolute top-3 right-3 bg-purple-500 text-white text-xs px-2 py-1 rounded-full z-10">UI/UX Design</span>',
                            desktop:
                                '<span class="absolute top-3 right-3 bg-orange-500 text-white text-xs px-2 py-1 rounded-full z-10">Desktop App</span>',
                        }[t.type] || "";
                (o.innerHTML = `\n            <div class="relative overflow-hidden h-48">\n                <img src="${t.image}" \n                     alt="${t.title}" \n                     class="w-full h-full object-cover transition-transform duration-500 hover:scale-110"\n                     loading="lazy">\n                <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>\n                ${s}\n            </div>\n            <div class="p-6">\n                <h3 class="text-xl font-bold mb-2 dark:text-white">${t.title}</h3>\n                <p class="text-gray-600 dark:text-gray-400 mb-4 text-sm line-clamp-3">${t.description}</p>\n                <div class="flex flex-wrap gap-2 mb-4">\n                    ${t.tech.map((e) => `<span class="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-xs">${e}</span>`).join("")}\n                </div>\n                ${i}\n            </div>\n        `),
                    e.appendChild(o);
            }),
            document.querySelectorAll(".favorite-btn").forEach((e) => {
                e.addEventListener("click", function () {
                    const e = this.querySelector("i");
                    e.classList.toggle("far"), e.classList.toggle("fas"), e.classList.toggle("text-red-500");
                });
            });
    }
    document.addEventListener("DOMContentLoaded", m);
    const u = document.getElementById("contact-form");
    u &&
        u.addEventListener("submit", async function (e) {
            e.preventDefault();
            const t = this.querySelector('button[type="submit"]'),
                n = t.innerHTML;
            (t.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...'), (t.disabled = !0);
            try {
                await new Promise((e) => setTimeout(e, 2e3)),
                    alert("Thank you! Your message has been sent successfully."),
                    u.reset();
            } catch (e) {
                alert("Sorry, there was an error sending your message. Please try again.");
            } finally {
                (t.innerHTML = n), (t.disabled = !1);
            }
        }),
        ScrollReveal().reveal(".animate-fade-in", {
            duration: 1e3,
            distance: "50px",
            origin: "bottom",
            opacity: 0,
            easing: "cubic-bezier(0.5, 0, 0, 1)",
            interval: 200,
        }),
        ScrollReveal().reveal(".card-hover", {
            duration: 800,
            scale: 0.9,
            easing: "cubic-bezier(0.5, 0, 0, 1)",
            interval: 200,
        }),
        ScrollReveal().reveal(".hover-lift", {
            duration: 600,
            distance: "30px",
            origin: "bottom",
            opacity: 0,
            easing: "ease-out",
            interval: 100,
        }),
        ScrollReveal().reveal(".timeline-card", {
            duration: 1e3,
            distance: "50px",
            origin: "bottom",
            opacity: 0,
            interval: 200,
        }),
        (function () {
            const e = document.getElementById("skills-grid");
            d.forEach((t, n) => {
                const o = document.createElement("div");
                (o.className =
                    "bg-white/5 rounded-xl p-6 text-center backdrop-blur-sm hover-lift transition-all duration-300"),
                    (o.style.animationDelay = 0.1 * n + "s"),
                    (o.innerHTML = `\n                        <div class="flex justify-center mb-4">\n                            <div class="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center ${t.color}">\n                                <i class="${t.icon} text-3xl"></i>\n                            </div>\n                        </div>\n                        <h4 class="font-semibold">${t.name}</h4>\n                    `),
                    e.appendChild(o);
            });
        })(),
        m(),
        (function () {
            const e = document.querySelectorAll(".skill-bar"),
                t = new IntersectionObserver(
                    (e) => {
                        e.forEach((e) => {
                            if (e.isIntersecting) {
                                const t = e.target,
                                    n = t.getAttribute("data-width");
                                setTimeout(() => {
                                    t.style.width = n;
                                }, 300);
                            }
                        });
                    },
                    { threshold: 0.5 }
                );
            e.forEach((e) => t.observe(e));
        })();
    const p = ["Full Stack Developer", "UI/UX Designer", "Web Application Developer"];
    let g = 0;
    const h = document.querySelector(".typewriter");
    setTimeout(function e() {
        if (h) {
            const t = p[g];
            (h.textContent = ""), (h.style.animation = "none");
            let n = 0;
            const o = setInterval(() => {
                n < t.length
                    ? ((h.textContent += t.charAt(n)), n++)
                    : (clearInterval(o),
                      setTimeout(() => {
                          !(function () {
                              if (!h) return;
                              let t = h.textContent;
                              const n = setInterval(() => {
                                  t.length > 0
                                      ? ((t = t.slice(0, -1)), (h.textContent = t))
                                      : (clearInterval(n), setTimeout(e, 500));
                              }, 50);
                          })();
                      }, 2e3));
            }, 100);
            g = (g + 1) % p.length;
        }
    }, 4e3);
});
const hobbiesData = [
    {
        id: 1,
        type: "photography",
        category: "photography",
        mediaType: "image",
        src: "assets/roots/P01.jpg",
        thumbnail: "assets/hobbies/thumb1.jpg",
        title: "Framing Emotions",
        description:
            "Simple drawings and visual elements come together to express imagination and emotions, where each sketch frames a unique thought or moment. 🎨✨",
        location: "West Bengal , India",
        date: "January 2022 To 2025",
        camera: "Samsung A33 5g",
        settings: "f/4.5 1/200s ISO 100",
        featured: !0,
        tags: ["cityscape", "night", "travel"],
        gallery: ["assets/roots/P01.jpg", "assets/roots/P02.jpg", "assets/roots/P03.jpg", "assets/roots/P04.jpg"],
    },
    {
        id: 2,
        type: "photography",
        category: "photography",
        mediaType: "image",
        src: "assets/roots/P13.jpg",
        thumbnail: "assets/hobbies/thumb2.jpg",
        title: "Micro World Chronicles",
        description:
            "Exploring the intricate lives of nature’s smallest architects and wanderers, where every detail tells a story of survival, transformation, and balance.",
        location: "West Bengal, India",
        date: "January 2021 To December 2025",
        camera: "Samsung A33 5g /Samsung M11",
        settings: "f/8 1/125s ISO 200",
        featured: !0,
        tags: ["landscape", "mountains", "nature"],
        gallery: [
            "assets/roots/P13.jpg",
            "assets/roots/P14.jpg",
            "assets/roots/P15.jpg",
            "assets/roots/P11.jpg",
            "assets/roots/P12.jpg",
            "assets/roots/P16.jpg",
            "assets/roots/P17.jpg",
            "assets/roots/P18.jpg",
            "assets/roots/P19.jpg",
            "assets/roots/P20.jpg",
            "assets/roots/P24.jpg",
            "assets/roots/P26.jpg",
            "assets/roots/P27.jpg",
            "assets/roots/P28.jpg",
            "assets/roots/P29.jpg",
            "assets/roots/P30.jpg",
            "assets/roots/P31.jpg",
        ],
    },
    {
        id: 3,
        type: "photography",
        category: "photography",
        mediaType: "image",
        src: "assets/roots/P21.jpg",
        thumbnail: "assets/hobbies/thumb3.jpg",
        title: "Silence of the Night",
        description: "A peaceful moment where the world slows down and darkness feels calm.",
        location: "West Bengal ,Kolkata, India",
        date: "January 2022 to 2025",
        camera: "Vivo Y16/ Samsung A33",
        settings: "f/2.8 1/250s ISO 400",
        featured: !1,
        tags: ["street", "documentary", "people"],
        gallery: ["assets/roots/P22.jpg", "assets/roots/P23.jpg", "assets/roots/P21.jpg"],
    },
    {
        id: 4,
        type: "videography",
        category: "videography",
        mediaType: "video",
        src: "assets/roots/VN20251231_205159.mp4",
        thumbnail: "assets/roots/VN20251231_205159.mp4",
        title: "365 Days in One Video 2025",
        description: "Every smile, challenge, and achievement captured in one beautiful rewind of the year.",
        location: "West Bengal ,Bardhaman, India",
        date: "January 2026",
        duration: "1:45",
        camera: "Samsung A33 5g",
        featured: !1,
        tags: ["nature", "rain", "ambient"],
        gallery: [{ type: "video", src: "assets/roots/VN20251231_205159.mp4", title: "New Year Clebration " }],
    },
    {
        id: 5,
        type: "videography",
        category: "videography",
        mediaType: "video",
        src: "assets/roots/V.mp4",
        thumbnail: "assets/roots/V.mp4",
        title: "Durga Puja Celebration",
        description: "The energy and devotion during Dhak playing.",
        location: "West Bengal,Purba Bardhaman ,India",
        date: "October 2025",
        duration: "0.29",
        camera: "Samsung A33 5g",
        featured: !0,
        tags: ["festival", "culture", "celebration"],
        gallery: [{ type: "video", src: "assets/roots/V.mp4", title: "Main Celebration" }],
    },
    {
        id: 6,
        type: "travel",
        category: "travel",
        mediaType: "video",
        src: "assets/roots/VN20260320_084322.mp4",
        thumbnail: "assets/roots/VN20260320_084322.mp4",
        title: "Wander. Explore. Repeat",
        description:
            "A collection of moments from different places, capturing the beauty of travel, freedom, and unforgettable memories.",
        location: "West Bengal, Purba Bardhaman",
        date: "May 2025 - To March 2026",
        duration: "2:10",
        camera: "Samsung A33 5g",
        featured: !1,
        tags: ["water", "nature", "relaxing"],
        gallery: [{ type: "video", src: "assets/roots/VN20260320_084322.mp4" }],
    },
];
let currentFilter = "all",
    visibleItems = 8,
    currentSlideshowIndex = 0,
    slideshowInterval = null,
    currentGalleryItems = [],
    currentMediaType = "image",
    currentItem = "null";
function filterHobby(e) {
    (currentFilter = e),
        document.querySelectorAll(".filter-btn").forEach((t) => {
            t.classList.remove("active"), t.getAttribute("onclick").includes(e) && t.classList.add("active");
        }),
        (visibleItems = 8),
        loadHobbiesGrid();
}
function loadHobbiesGrid() {
    const e = document.getElementById("hobbiesGrid");
    if (!e) return;
    let t = hobbiesData;
    "all" !== currentFilter && (t = hobbiesData.filter((e) => e.category === currentFilter));
    const n = t.slice(0, visibleItems);
    (e.innerHTML = ""),
        n.forEach((t, n) => {
            const o = createHobbyCard(t, n);
            e.appendChild(o);
        });
    const o = document.querySelector('[onclick="loadMoreHobbies()"]');
    o && (visibleItems >= t.length ? (o.style.display = "none") : (o.style.display = "inline-flex"));
}
function createHobbyCard(e, t) {
    const n = document.createElement("div");
    if (
        ((n.className = `hobby-item hobby-card ${e.category}`),
        (n.style.animationDelay = 0.1 * t + "s"),
        "video" === e.mediaType)
    ) {
        n.innerHTML = `\n            <div class="media-container">\n                <video src="${e.src}" poster="${e.thumbnail}" muted loop></video>\n                <div class="media-badge">\n                    <i class="fas fa-video"></i>\n                    <span>${e.duration || "0:00"}</span>\n                </div>\n                <div class="play-button">\n                    <i class="fas fa-play"></i>\n                </div>\n                <div class="media-overlay">\n                    <h3 class="text-lg font-bold text-white mb-1">${e.title}</h3>\n                    <p class="text-sm text-gray-300 line-clamp-2">${e.description}</p>\n                    <div class="flex items-center gap-3 mt-2 text-xs text-gray-400">\n                        <span><i class="fas fa-map-marker-alt mr-1"></i>${e.location}</span>\n                        <span><i class="far fa-calendar mr-1"></i>${e.date}</span>\n                    </div>\n                </div>\n            </div>\n        `;
        const t = n.querySelector("video");
        n.addEventListener("mouseenter", () => t.play()),
            n.addEventListener("mouseleave", () => {
                t.pause(), (t.currentTime = 0);
            }),
            (n.onclick = () => openMediaSlideshow(e));
    } else
        (n.innerHTML = `\n            <div class="media-container">\n                <img src="${e.src}" alt="${e.title}" loading="lazy">\n                <div class="media-badge">\n                    <i class="fas fa-camera"></i>\n                    <span>Photo</span>\n                </div>\n                <div class="media-overlay">\n                    <h3 class="text-lg font-bold text-white mb-1">${e.title}</h3>\n                    <p class="text-sm text-gray-300 line-clamp-2">${e.description}</p>\n                    <div class="flex items-center gap-3 mt-2 text-xs text-gray-400">\n                        <span><i class="fas fa-map-marker-alt mr-1"></i>${e.location}</span>\n                        <span><i class="far fa-calendar mr-1"></i>${e.date}</span>\n                    </div>\n                </div>\n            </div>\n            ${e.featured ? '<div class="absolute top-4 right-4 px-2 py-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full text-white text-xs font-semibold z-10">Featured</div>' : ""}\n        `),
            (n.onclick = () => openMediaSlideshow(e));
    return n;
}
function openMediaSlideshow(e) {
    stopSlideshow(),
        (currentItem = e),
        "video" === e.mediaType && e.gallery && e.gallery.length > 0
            ? ((currentMediaType = "video"), (currentGalleryItems = e.gallery), openVideoSlideshow(e, 0))
            : e.gallery && e.gallery.length > 0
              ? ((currentMediaType = "image"), (currentGalleryItems = e.gallery), openPhotoSlideshow(e, 0))
              : "video" === e.mediaType
                ? openVideoModal(e)
                : openPhotoModal(e);
}
function openPhotoSlideshow(e, t = 0) {
    const n = document.getElementById("photoModal");
    document.getElementById("modalPhoto"),
        document.getElementById("modalPhotoTitle"),
        document.getElementById("modalPhotoDesc"),
        document.getElementById("modalPhotoCamera"),
        document.getElementById("modalPhotoLocation"),
        document.getElementById("modalPhotoDate"),
        addSlideshowControls(n, "photo"),
        (currentSlideshowIndex = t),
        updatePhotoSlide(e, currentSlideshowIndex),
        n.classList.remove("hidden"),
        n.classList.add("flex"),
        (document.body.style.overflow = "hidden"),
        startSlideshow(e, "photo");
}
function updatePhotoSlide(e, t) {
    const n = document.getElementById("modalPhoto"),
        o = document.getElementById("modalPhotoTitle"),
        a = document.getElementById("modalPhotoDesc"),
        i = document.getElementById("modalPhotoCamera"),
        s = document.getElementById("modalPhotoLocation"),
        l = document.getElementById("modalPhotoDate"),
        r = document.getElementById("slideshowCounter");
    if (e.gallery && e.gallery.length > 0) {
        const a = e.gallery[t];
        (n.src = a),
            (o.innerText = `${e.title} - ${t + 1}/${e.gallery.length}`),
            r && (r.innerText = `${t + 1} / ${e.gallery.length}`);
    } else (n.src = e.src), (o.innerText = e.title);
    (a.innerText = e.description),
        (i.innerText = e.camera || "Unknown"),
        (s.innerText = e.location),
        (l.innerText = e.date);
}
function openVideoSlideshow(e, t = 0) {
    const n = document.getElementById("videoModal"),
        o = document.getElementById("modalVideo");
    document.getElementById("modalVideoTitle"),
        document.getElementById("modalVideoDesc"),
        addSlideshowControls(n, "video"),
        (currentSlideshowIndex = t),
        updateVideoSlide(e, currentSlideshowIndex),
        n.classList.remove("hidden"),
        n.classList.add("flex"),
        (document.body.style.overflow = "hidden"),
        o.play();
}
function updateVideoSlide(e, t) {
    const n = document.getElementById("modalVideo"),
        o = document.getElementById("modalVideoTitle"),
        a = document.getElementById("modalVideoDesc"),
        i = document.getElementById("slideshowCounter");
    if (e.gallery && e.gallery.length > 0) {
        const a = e.gallery[t];
        (n.src = a.src),
            (o.innerText = `${e.title} - ${a.title || `Part ${t + 1}`}`),
            i && (i.innerText = `${t + 1} / ${e.gallery.length}`);
    } else (n.src = e.src), (o.innerText = e.title);
    (a.innerText = e.description), n.load(), n.play();
}
function addSlideshowControls(e, t) {
    if (document.getElementById("slideshowControls")) return;
    const n = document.createElement("div");
    (n.id = "slideshowControls"),
        (n.className =
            "absolute bottom-24 left-1/2 transform -translate-x-1/2 flex items-center gap-4 bg-black/50 backdrop-blur-md rounded-full px-6 py-3 border border-white/20 z-20"),
        (n.innerHTML =
            '\n        <button onclick="previousSlide()" class="text-white hover:text-purple-400 transition-colors p-2">\n            <i class="fas fa-chevron-left text-xl"></i>\n        </button>\n        <span id="slideshowCounter" class="text-white font-medium min-w-[80px] text-center">1 / 1</span>\n        <button onclick="nextSlide()" class="text-white hover:text-purple-400 transition-colors p-2">\n            <i class="fas fa-chevron-right text-xl"></i>\n        </button>\n        <button onclick="toggleAutoPlay()" id="autoPlayBtn" class="text-white hover:text-purple-400 transition-colors p-2 ml-2">\n            <i class="fas fa-pause"></i>\n        </button>\n    '),
        e.querySelector(".relative").appendChild(n);
}
function previousSlide() {
    if (0 === currentGalleryItems.length) return;
    currentSlideshowIndex = (currentSlideshowIndex - 1 + currentGalleryItems.length) % currentGalleryItems.length;
    const e = getCurrentItem();
    "image" === currentMediaType
        ? updatePhotoSlide(e, currentSlideshowIndex)
        : updateVideoSlide(e, currentSlideshowIndex);
}
function nextSlide() {
    if (0 === currentGalleryItems.length) return;
    currentSlideshowIndex = (currentSlideshowIndex + 1) % currentGalleryItems.length;
    const e = getCurrentItem();
    "image" === currentMediaType
        ? updatePhotoSlide(e, currentSlideshowIndex)
        : updateVideoSlide(e, currentSlideshowIndex);
}
function getCurrentItem() {
    return currentItem;
}
function startSlideshow(e, t) {
    slideshowInterval && clearInterval(slideshowInterval),
        "photo" === t &&
            e.gallery &&
            e.gallery.length > 1 &&
            (slideshowInterval = setInterval(() => {
                nextSlide();
            }, 3e3));
}
function stopSlideshow() {
    slideshowInterval && (clearInterval(slideshowInterval), (slideshowInterval = null));
}
function toggleAutoPlay() {
    const e = document.getElementById("autoPlayBtn").querySelector("i");
    slideshowInterval
        ? (stopSlideshow(), (e.className = "fas fa-play"))
        : (startSlideshow(getCurrentItem(), currentMediaType), (e.className = "fas fa-pause"));
}
function openPhotoModal(e) {
    stopSlideshow();
    const t = document.getElementById("photoModal"),
        n = document.getElementById("slideshowControls");
    n && n.remove(),
        (document.getElementById("modalPhoto").src = e.src),
        (document.getElementById("modalPhotoTitle").innerText = e.title),
        (document.getElementById("modalPhotoDesc").innerText = e.description),
        (document.getElementById("modalPhotoCamera").innerText = e.camera || "Unknown"),
        (document.getElementById("modalPhotoLocation").innerText = e.location),
        (document.getElementById("modalPhotoDate").innerText = e.date),
        t.classList.remove("hidden"),
        t.classList.add("flex"),
        (document.body.style.overflow = "hidden");
}
function closePhotoModal() {
    stopSlideshow();
    const e = document.getElementById("slideshowControls");
    e && e.remove(),
        document.getElementById("photoModal").classList.add("hidden"),
        document.getElementById("photoModal").classList.remove("flex"),
        (document.body.style.overflow = "");
}
function openVideoModal(e) {
    stopSlideshow();
    const t = document.getElementById("videoModal"),
        n = document.getElementById("modalVideo"),
        o = document.getElementById("slideshowControls");
    o && o.remove(),
        (n.src = e.src),
        (document.getElementById("modalVideoTitle").innerText = e.title),
        (document.getElementById("modalVideoDesc").innerText = e.description),
        t.classList.remove("hidden"),
        t.classList.add("flex"),
        (document.body.style.overflow = "hidden"),
        n.play();
}
function closeVideoModal() {
    stopSlideshow();
    const e = document.getElementById("slideshowControls");
    e && e.remove();
    const t = document.getElementById("videoModal"),
        n = document.getElementById("modalVideo");
    n.pause(),
        (n.currentTime = 0),
        t.classList.add("hidden"),
        t.classList.remove("flex"),
        (document.body.style.overflow = "");
}
function loadMoreHobbies() {
    (visibleItems += 4), loadHobbiesGrid();
}
function sendMail() {
    var e = document.getElementById("name").value,
        t = "Portfolio Contact from " + e,
        n =
            "Name: " +
            e +
            "%0D%0AEmail: " +
            document.getElementById("email").value +
            "%0D%0A%0D%0AMessage: " +
            document.getElementById("message").value;
    window.location.href = "mailto:banerjeeshouvik29@gmail.com?subject=" + t + "&body=" + n;
}
document.addEventListener("keydown", (e) => {
    "Escape" === e.key && (closePhotoModal(), closeVideoModal()),
        "ArrowLeft" === e.key ? previousSlide() : "ArrowRight" === e.key && nextSlide();
}),
    document.addEventListener("DOMContentLoaded", () => {
        loadHobbiesGrid(), document.querySelector('[data-filter="all"]')?.classList.add("active");
    }),
    (function () {
        const e = document.querySelector(".carousel-track-achievements"),
            t = document.querySelector(".carousel-prev-achievements"),
            n = document.querySelector(".carousel-next-achievements"),
            o = document.querySelectorAll(".carousel-dot-achievements");
        if (!(e && t && n && o.length)) return;
        let a = 0;
        const i = e.children.length;
        let s,
            l,
            r = !1;
        function d() {
            const t = e.parentElement.clientWidth;
            (e.style.transform = `translateX(-${a * t}px)`),
                o.forEach((e, t) => {
                    t === a
                        ? (e.classList.add("active"),
                          (e.style.width = "38px"),
                          (e.style.height = "12px"),
                          (e.style.borderRadius = "999px"),
                          (e.style.background = "linear-gradient(90deg, #7c3aed, #06b6d4)"),
                          (e.style.boxShadow = "0 0 10px rgba(124, 58, 237, 0.5), 0 0 20px rgba(6, 182, 212, 0.35)"),
                          (e.style.border = "1px solid rgba(6, 182, 212, 0.45)"),
                          (e.style.transform = "scale(1.05)"))
                        : (e.classList.remove("active"),
                          (e.style.width = "12px"),
                          (e.style.height = "12px"),
                          (e.style.borderRadius = "999px"),
                          (e.style.background = "rgba(148, 163, 184, 0.25)"),
                          (e.style.border = "1px solid rgba(255,255,255,0.08)"),
                          (e.style.boxShadow = "none"),
                          (e.style.transform = "scale(1)"));
                });
        }
        function c() {
            (a = (a + 1) % i), d();
        }
        function m() {
            (a = (a - 1 + i) % i), d();
        }
        function u() {
            s && clearInterval(s), (s = setInterval(c, 3e3));
        }
        function p() {
            s && (clearInterval(s), (s = null));
        }
        n.addEventListener("click", () => {
            p(), c(), u();
        }),
            t.addEventListener("click", () => {
                p(), m(), u();
            }),
            o.forEach((e, t) => {
                e.addEventListener("click", () => {
                    p(), (a = t), d(), u();
                });
            });
        const g = document.querySelector(".carousel-achievements");
        let h;
        g &&
            (g.addEventListener(
                "touchstart",
                function (e) {
                    p(), (l = e.touches[0].clientX), (r = !0);
                },
                { passive: !0 }
            ),
            g.addEventListener(
                "touchmove",
                function (t) {
                    if (!r) return;
                    const n = t.touches[0].clientX - l,
                        o = e.parentElement.clientWidth;
                    Math.abs(n) > o / 3 && (n > 0 ? m() : c(), (r = !1));
                },
                { passive: !0 }
            ),
            g.addEventListener("touchend", function () {
                (r = !1), u();
            }),
            g.addEventListener("mouseenter", p),
            g.addEventListener("mouseleave", u)),
            window.addEventListener("resize", () => {
                clearTimeout(h), (h = setTimeout(() => d(), 100));
            }),
            d(),
            u();
    })(),
    document.addEventListener("DOMContentLoaded", function () {
        const e = document.querySelectorAll(".stat-number"),
            t = new IntersectionObserver(
                (e) => {
                    e.forEach((e) => {
                        e.isIntersecting &&
                            (((e) => {
                                const t = parseInt(e.getAttribute("data-target"));
                                let n = 0;
                                const o = t / 50,
                                    a = () => {
                                        (n += o),
                                            n < t
                                                ? ((e.textContent = Math.floor(n)), requestAnimationFrame(a))
                                                : (e.textContent = t);
                                    };
                                a();
                            })(e.target),
                            t.unobserve(e.target));
                    });
                },
                { threshold: 0.5 }
            );
        e.forEach((e) => t.observe(e));
    }),
    (function () {
        const e = document.getElementById("profileSliderTrack"),
            t = e.children,
            n = document.getElementById("profilePrev"),
            o = document.getElementById("profileNext");
        let a = 0;
        const i = t.length;
        let s;
        function l() {
            e.style.transform = `translateX(-${100 * a}%)`;
        }
        function r() {
            (a = (a + 1) % i), l();
        }
        function d() {
            s = setInterval(r, 3e3);
        }
        function c() {
            clearInterval(s), d();
        }
        o.addEventListener("click", () => {
            r(), c();
        }),
            n.addEventListener("click", () => {
                (a = (a - 1 + i) % i), l(), c();
            }),
            l(),
            d();
    })();
