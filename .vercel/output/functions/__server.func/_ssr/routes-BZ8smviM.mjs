import { o as __toESM } from "../_runtime.mjs";
import { a as projects, c as techBadges, i as personal, n as education, o as skills, r as experience, s as social, t as certifications } from "./portfolio-data-DHU5Xn47.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { i as AnimatePresence, n as useScroll, r as motion, t as useTransform } from "../_libs/framer-motion.mjs";
import { _ as Briefcase, a as Phone, b as ArrowRight, c as Linkedin, d as ExternalLink, f as Download, g as Cloud, h as CodeXml, i as Send, l as GraduationCap, m as Cpu, n as Wrench, o as MapPin, p as Database, r as Sparkles, s as Mail, t as X, u as Github, v as Brain, y as Award } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BZ8smviM.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ParticlesBg() {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const canvas = ref.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;
		let raf = 0;
		const dpr = Math.min(window.devicePixelRatio || 1, 2);
		const resize = () => {
			canvas.width = window.innerWidth * dpr;
			canvas.height = window.innerHeight * dpr;
			canvas.style.width = window.innerWidth + "px";
			canvas.style.height = window.innerHeight + "px";
		};
		resize();
		window.addEventListener("resize", resize);
		const count = Math.min(80, Math.floor(window.innerWidth * window.innerHeight / 22e3));
		const colors = [
			"rgba(167,139,250,",
			"rgba(96,165,250,",
			"rgba(103,232,249,"
		];
		const parts = Array.from({ length: count }, () => ({
			x: Math.random() * canvas.width,
			y: Math.random() * canvas.height,
			vx: (Math.random() - .5) * .3 * dpr,
			vy: (Math.random() - .5) * .3 * dpr,
			r: (Math.random() * 1.6 + .4) * dpr,
			c: colors[Math.floor(Math.random() * colors.length)],
			a: Math.random() * .5 + .2
		}));
		const loop = () => {
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			for (let i = 0; i < parts.length; i++) {
				const p = parts[i];
				p.x += p.vx;
				p.y += p.vy;
				if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
				if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
				ctx.beginPath();
				ctx.fillStyle = p.c + p.a + ")";
				ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
				ctx.fill();
				for (let j = i + 1; j < parts.length; j++) {
					const q = parts[j];
					const dx = p.x - q.x, dy = p.y - q.y;
					const d = Math.sqrt(dx * dx + dy * dy);
					if (d < 120 * dpr) {
						ctx.beginPath();
						ctx.strokeStyle = `rgba(139,127,255,${(1 - d / (120 * dpr)) * .12})`;
						ctx.lineWidth = 1;
						ctx.moveTo(p.x, p.y);
						ctx.lineTo(q.x, q.y);
						ctx.stroke();
					}
				}
			}
			raf = requestAnimationFrame(loop);
		};
		loop();
		return () => {
			cancelAnimationFrame(raf);
			window.removeEventListener("resize", resize);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pointer-events-none fixed inset-0 -z-10 overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.3_0.15_280/0.4),transparent_60%)]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-[oklch(0.5_0.25_295/0.25)] blur-3xl animate-blob" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute top-1/3 -right-40 h-[600px] w-[600px] rounded-full bg-[oklch(0.5_0.22_250/0.22)] blur-3xl animate-blob",
				style: { animationDelay: "-6s" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute bottom-0 left-1/3 h-[500px] w-[500px] rounded-full bg-[oklch(0.6_0.18_200/0.18)] blur-3xl animate-blob",
				style: { animationDelay: "-12s" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
				ref,
				className: "absolute inset-0"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[linear-gradient(to_bottom,transparent,oklch(0.13_0.02_270)_90%)]" })
		]
	});
}
function ProjectModal({ project, onClose }) {
	const githubLinks = project?.githubLinks ?? (project?.github ? [{
		label: "Source",
		url: project.github
	}] : []);
	(0, import_react.useEffect)(() => {
		const onKey = (e) => {
			if (e.key === "Escape") onClose();
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [onClose]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: project && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		onClick: onClose,
		className: "fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-md",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: {
				scale: .95,
				y: 20,
				opacity: 0
			},
			animate: {
				scale: 1,
				y: 0,
				opacity: 1
			},
			exit: {
				scale: .95,
				y: 20,
				opacity: 0
			},
			transition: {
				type: "spring",
				damping: 25
			},
			onClick: (e) => e.stopPropagation(),
			className: "glass relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: onClose,
					className: "absolute right-4 top-4 z-10 rounded-full bg-black/40 p-2 text-white backdrop-blur-md transition hover:bg-black/60",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative aspect-[2/1] overflow-hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: project.banner,
						alt: `${project.title} banner`,
						className: "h-full w-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-8 pt-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-3 inline-flex rounded-full bg-primary/20 px-3 py-1 text-xs font-medium text-primary",
							children: project.category
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-3xl font-bold gradient-text",
							children: project.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-muted-foreground",
							children: project.description
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "mt-6 text-sm font-semibold uppercase tracking-wider text-foreground/80",
							children: "Highlights"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-2 space-y-2",
							children: project.highlights.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-2 text-sm text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-[oklch(0.7_0.26_295)] to-[oklch(0.78_0.15_200)]" }), h]
							}, h))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "mt-6 text-sm font-semibold uppercase tracking-wider text-foreground/80",
							children: "Tech Stack"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 flex flex-wrap gap-2",
							children: project.stack.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-foreground/80",
								children: t
							}, t))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex flex-wrap gap-3",
							children: [githubLinks.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: link.url,
								target: "_blank",
								rel: "noreferrer",
								className: "inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium transition hover:bg-white/10",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { className: "h-4 w-4" }),
									" ",
									link.label
								]
							}, link.url)), project.demo && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: project.demo,
								target: "_blank",
								rel: "noreferrer",
								className: "inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[oklch(0.7_0.26_295)] to-[oklch(0.65_0.22_250)] px-4 py-2 text-sm font-medium text-white transition hover:opacity-90",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-4 w-4" }), " Live Demo"]
							})]
						})
					]
				})
			]
		})
	}) });
}
var skillIcons = [
	CodeXml,
	Cpu,
	Cloud,
	Database,
	Brain,
	Wrench
];
var cvDownloadName = "Oshadi_Jayananda_CV.pdf";
var fadeUp = {
	hidden: {
		opacity: 0,
		y: 30
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: .6,
			ease: [
				.22,
				1,
				.36,
				1
			]
		}
	}
};
function Portfolio() {
	const [active, setActive] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-screen text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ParticlesBg, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto max-w-6xl px-5 sm:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Experience, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skills, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Projects, { onOpen: setActive }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Education, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Certifications, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectModal, {
				project: active,
				onClose: () => setActive(null)
			})
		]
	});
}
function Nav() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.header, {
		initial: {
			y: -30,
			opacity: 0
		},
		animate: {
			y: 0,
			opacity: 1
		},
		transition: { duration: .6 },
		className: "sticky top-4 z-40 mx-auto mt-4 w-[calc(100%-2rem)] max-w-5xl",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "glass flex items-center justify-between rounded-full px-5 py-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#top",
					className: "font-display text-sm font-bold tracking-tight",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "gradient-text",
						children: "<dev/>"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden gap-6 md:flex",
					children: [
						["About", "#about"],
						["Experience", "#experience"],
						["Skills", "#skills"],
						["Projects", "#projects"],
						["Education", "#education"],
						["Contact", "#contact"]
					].map(([l, h]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: h,
						className: "text-sm text-muted-foreground transition hover:text-foreground",
						children: l
					}, h))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: social.cv,
					download: cvDownloadName,
					className: "inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[oklch(0.7_0.26_295)] to-[oklch(0.65_0.22_250)] px-4 py-1.5 text-xs font-medium text-white transition hover:opacity-90",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-3.5 w-3.5" }), " CV"]
				})
			]
		})
	});
}
function Hero() {
	const ref = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"]
	});
	const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
	const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "top",
		ref,
		className: "flex min-h-[92vh] flex-col items-center justify-center pt-12 text-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			style: {
				y,
				opacity
			},
			className: "w-full",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: { delay: .1 },
					className: "glass mx-auto inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "relative flex h-2 w-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex h-2 w-2 rounded-full bg-emerald-500" })]
					}), "Available for Internships & Associate Software Engineer Opportunities"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
					initial: {
						opacity: 0,
						y: 30
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						delay: .2,
						duration: .8
					},
					className: "mt-8 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl md:text-8xl",
					children: [
						"Oshadi Jayananda",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "gradient-text",
							children: "Full Stack Developer."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.p, {
					initial: {
						opacity: 0,
						y: 20
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: { delay: .35 },
					className: "mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg",
					children: [
						"Final-year Software Engineering undergraduate at SLIIT crafting performant, accessible products across ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-foreground",
							children: "React, Node.js, Laravel, Python"
						}),
						" ",
						"and beyond."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: { delay: .5 },
					className: "mt-10 flex flex-wrap items-center justify-center gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#projects",
							className: "group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[oklch(0.7_0.26_295)] to-[oklch(0.65_0.22_250)] px-6 py-3 text-sm font-medium text-white shadow-lg shadow-[oklch(0.7_0.26_295/0.3)] transition hover:shadow-[oklch(0.7_0.26_295/0.5)]",
							children: ["View Projects", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition group-hover:translate-x-1" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#contact",
							className: "glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition hover:bg-white/10",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4" }), " Get in touch"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialIcon, {
								href: social.github,
								icon: Github
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialIcon, {
								href: social.linkedin,
								icon: Linkedin
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: { opacity: 0 },
					animate: { opacity: 1 },
					transition: { delay: .8 },
					className: "mt-16 flex flex-wrap justify-center gap-2",
					children: techBadges.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
						initial: {
							opacity: 0,
							scale: .8
						},
						animate: {
							opacity: 1,
							scale: 1
						},
						transition: { delay: .8 + i * .04 },
						className: "rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted-foreground backdrop-blur-sm",
						children: t
					}, t))
				})
			]
		})
	});
}
function SocialIcon({ href, icon: Icon }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href,
		target: "_blank",
		rel: "noreferrer",
		className: "glass grid h-10 w-10 place-items-center rounded-full text-muted-foreground transition hover:text-foreground",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
	});
}
function SectionHeader({ eyebrow, title, sub }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		variants: fadeUp,
		initial: "hidden",
		whileInView: "show",
		viewport: {
			once: true,
			margin: "-100px"
		},
		className: "mx-auto mb-12 max-w-2xl text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-xs font-semibold uppercase tracking-[0.2em] text-[oklch(0.78_0.15_200)]",
				children: eyebrow
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 font-display text-3xl font-bold sm:text-5xl",
				children: title
			}),
			sub && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-muted-foreground",
				children: sub
			})
		]
	});
}
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "about",
		className: "py-24 sm:py-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
			eyebrow: "About",
			title: "Passionate engineer, continuous learner."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			variants: fadeUp,
			initial: "hidden",
			whileInView: "show",
			viewport: {
				once: true,
				margin: "-100px"
			},
			className: "glass mx-auto max-w-3xl rounded-2xl p-8 sm:p-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-base leading-relaxed text-muted-foreground sm:text-lg",
					children: [
						"I am a fourth-year undergraduate in Software Engineering at SLIIT, specializing as a",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-foreground",
							children: " full-stack developer"
						}),
						". With a passion for technology and continuous learning, I am committed to staying at the forefront of cutting-edge technologies."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg",
					children: "My skills span various programming languages, web development frameworks, and database management systems. I aim to contribute to a forward-thinking organization that challenges my abilities and supports my professional growth."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid grid-cols-3 gap-4 text-center",
					children: [
						["3+", "Years coding"],
						["6+", "Projects built"],
						["10+", "Technologies"]
					].map(([n, l]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border border-white/5 bg-white/[0.02] p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-2xl font-bold gradient-text sm:text-3xl",
							children: n
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1 text-xs text-muted-foreground",
							children: l
						})]
					}, l))
				})
			]
		})]
	});
}
function Experience() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "experience",
		className: "py-24 sm:py-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
			eyebrow: "Experience",
			title: "Where I've been."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-3xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-[oklch(0.7_0.26_295)] via-[oklch(0.65_0.22_250)] to-transparent sm:left-1/2" }), experience.map((exp, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				variants: fadeUp,
				initial: "hidden",
				whileInView: "show",
				viewport: {
					once: true,
					margin: "-80px"
				},
				className: `relative mb-10 flex flex-col gap-4 pl-12 sm:flex-row sm:pl-0 ${i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute left-4 top-3 grid h-3 w-3 -translate-x-1/2 place-items-center rounded-full bg-gradient-to-br from-[oklch(0.7_0.26_295)] to-[oklch(0.78_0.15_200)] ring-4 ring-background sm:left-1/2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Briefcase, { className: "h-2 w-2 text-white opacity-0" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "sm:w-1/2 sm:px-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "glass rounded-xl p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs font-medium text-[oklch(0.78_0.15_200)]",
									children: exp.period
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-1 font-display text-lg font-bold",
									children: exp.role
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-sm text-muted-foreground",
									children: exp.company
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-3 space-y-1.5",
									children: exp.points.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex gap-2 text-sm text-muted-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[oklch(0.7_0.26_295)]" }), p]
									}, p))
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hidden sm:block sm:w-1/2" })
				]
			}, exp.role))]
		})]
	});
}
function Skills() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "skills",
		className: "py-24 sm:py-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
			eyebrow: "Skills",
			title: "The toolkit.",
			sub: "A snapshot of the technologies I reach for."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
			children: skills.map((s, i) => {
				const Icon = skillIcons[i % skillIcons.length];
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 30
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: {
						once: true,
						margin: "-50px"
					},
					transition: {
						duration: .5,
						delay: i * .07
					},
					whileHover: { y: -6 },
					className: "group glass relative overflow-hidden rounded-2xl p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 -z-10 bg-gradient-to-br from-[oklch(0.7_0.26_295/0.12)] via-transparent to-[oklch(0.78_0.15_200/0.08)] opacity-0 transition group-hover:opacity-100" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-[oklch(0.7_0.26_295)] to-[oklch(0.65_0.22_250)]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5 text-white" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 font-display text-lg font-bold",
							children: s.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 flex flex-wrap gap-1.5",
							children: s.items.map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-muted-foreground",
								children: it
							}, it))
						})
					]
				}, s.name);
			})
		})]
	});
}
function Projects({ onOpen }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "projects",
		className: "py-24 sm:py-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
			eyebrow: "Featured Work",
			title: "Selected projects.",
			sub: "A few things I've built recently."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-6 md:grid-cols-2",
			children: projects.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
				onClick: () => onOpen(p),
				initial: {
					opacity: 0,
					y: 30
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: {
					once: true,
					margin: "-50px"
				},
				transition: {
					duration: .5,
					delay: i % 2 * .1
				},
				whileHover: { y: -6 },
				className: `group glass relative overflow-hidden rounded-2xl text-left ${p.featured ? "md:col-span-2" : ""}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `relative overflow-hidden ${p.featured ? "aspect-[2.4/1]" : "aspect-[2/1]"}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: p.banner,
							alt: `${p.title} banner`,
							loading: "lazy",
							width: 1280,
							height: 640,
							className: "h-full w-full object-cover transition duration-700 group-hover:scale-110"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `absolute inset-0 bg-gradient-to-br ${p.accent} opacity-0 mix-blend-overlay transition duration-500 group-hover:opacity-60` })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-gradient-to-br ${p.accent} opacity-20 blur-3xl transition group-hover:opacity-40` }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative flex items-start justify-between gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full bg-white/5 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground",
									children: p.category
								}), p.featured && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-[oklch(0.7_0.26_295)] to-[oklch(0.65_0.22_250)] px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-white",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-2.5 w-2.5" }), " Featured"]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-4 w-4 shrink-0 text-muted-foreground transition group-hover:text-foreground" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: `relative mt-3 font-display font-bold ${p.featured ? "text-2xl sm:text-4xl" : "text-xl"}`,
							children: p.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "relative mt-2 text-sm text-muted-foreground",
							children: p.short
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative mt-4 flex flex-wrap gap-1.5",
							children: [p.stack.slice(0, 5).map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] text-foreground/80",
								children: t
							}, t)), p.stack.length > 5 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] text-muted-foreground",
								children: ["+", p.stack.length - 5]
							})]
						})
					]
				})]
			}, p.id))
		})]
	});
}
function Education() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "education",
		className: "py-24 sm:py-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
			eyebrow: "Education",
			title: "Foundations."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto grid max-w-3xl gap-5",
			children: education.map((e, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					x: -20
				},
				whileInView: {
					opacity: 1,
					x: 0
				},
				viewport: { once: true },
				transition: { delay: i * .1 },
				className: "glass flex gap-4 rounded-2xl p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[oklch(0.65_0.22_250)] to-[oklch(0.78_0.15_200)]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, { className: "h-5 w-5 text-white" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 flex-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs font-medium text-[oklch(0.78_0.15_200)]",
							children: e.period
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-1 font-display text-lg font-bold",
							children: e.school
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground",
							children: e.degree
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs text-muted-foreground/80",
							children: e.detail
						})
					]
				})]
			}, e.school))
		})]
	});
}
function Certifications() {
	if (certifications.length === 0) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "certs",
		className: "py-24 sm:py-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
			eyebrow: "Certifications",
			title: "Continuously learning."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto grid max-w-4xl gap-4 sm:grid-cols-2",
			children: certifications.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					scale: .95
				},
				whileInView: {
					opacity: 1,
					scale: 1
				},
				viewport: { once: true },
				transition: { delay: i * .08 },
				whileHover: { y: -4 },
				className: "glass group flex items-start gap-4 rounded-2xl p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-[oklch(0.7_0.26_295)] to-[oklch(0.65_0.22_250)]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "h-5 w-5 text-white" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-sm font-bold leading-snug",
						children: c.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-1 text-xs text-muted-foreground",
						children: [
							c.issuer,
							" • ",
							c.year
						]
					})]
				})]
			}, c.name))
		})]
	});
}
function Contact() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "py-24 sm:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			variants: fadeUp,
			initial: "hidden",
			whileInView: "show",
			viewport: {
				once: true,
				margin: "-100px"
			},
			className: "relative mx-auto max-w-3xl overflow-hidden rounded-3xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-br from-[oklch(0.7_0.26_295/0.25)] via-[oklch(0.65_0.22_250/0.18)] to-[oklch(0.78_0.15_200/0.2)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "glass relative rounded-3xl p-10 text-center sm:p-14",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs font-semibold uppercase tracking-[0.2em] text-[oklch(0.78_0.15_200)]",
						children: "Contact"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-3xl font-bold sm:text-5xl",
						children: "Let's build something."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-3 max-w-md text-muted-foreground",
						children: "Open to internships, full-time roles, and freelance collaborations. The fastest way to reach me is email."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex flex-wrap items-center justify-center gap-3 text-xs text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3 w-3" }),
									" ",
									personal.location
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden sm:inline",
								children: "•"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-3 w-3" }),
									" ",
									personal.phone
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden sm:inline",
								children: "•"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Remote-friendly" })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap justify-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: social.email,
							className: "group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[oklch(0.7_0.26_295)] to-[oklch(0.65_0.22_250)] px-6 py-3 text-sm font-medium text-white shadow-lg shadow-[oklch(0.7_0.26_295/0.4)] transition hover:shadow-[oklch(0.7_0.26_295/0.6)]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-4 w-4" }), " Send a message"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: social.cv,
							download: cvDownloadName,
							className: "glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition hover:bg-white/10",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4" }), "Download CV"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex justify-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialIcon, {
								href: social.github,
								icon: Github
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialIcon, {
								href: social.linkedin,
								icon: Linkedin
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialIcon, {
								href: social.email,
								icon: Mail
							})
						]
					})
				]
			})]
		})
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "mx-auto max-w-6xl px-5 py-10 sm:px-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-8 text-xs text-muted-foreground sm:flex-row",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				"© ",
				(/* @__PURE__ */ new Date()).getFullYear(),
				" Oshadi Jayananda — Built with React, TanStack & Framer Motion."
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-emerald-500" }), "All systems operational"]
			})]
		})
	});
}
//#endregion
export { Portfolio as component };
