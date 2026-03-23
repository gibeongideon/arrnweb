const SITE_ASSETS = {
  logo: "https://arri.cloudpepper.site/web/image/website/1/logo/ARRI?unique=be7091d",
  footerLogo: "https://arri.cloudpepper.site/web/image/1173-f80f7a95/aarlogo.webp",
};

const NAV_ITEMS = [
  { type: "link", label: "Home", href: "index.html", page: "home" },
  {
    type: "group",
    label: "About Us",
    group: "about",
    items: [
      { label: "Our Team", href: "our-team.html", page: "our-team" },
      { label: "Mission & Vision", href: "mission-and-vision.html", page: "mission-and-vision" },
    ],
  },
  { type: "link", label: "Patients", href: "patients.html", page: "patients" },
  { type: "link", label: "CKD Information", href: "nephrology.html", page: "nephrology" },
  { type: "link", label: "Sponsors", href: "sponsors.html", page: "sponsors" },
  { type: "link", label: "Contact us", href: "contactus.html", page: "contactus" },
  { type: "link", label: "Registration", href: "registration.html", page: "registration" },
];

const OPTION_SETS = {
  countries:
    "Afghanistan|Albania|Algeria|American Samoa|Andorra|Angola|Anguilla|Antarctica|Antigua and Barbuda|Argentina|Armenia|Aruba|Australia|Austria|Azerbaijan|Bahamas|Bahrain|Bangladesh|Barbados|Belarus|Belgium|Belize|Benin|Bermuda|Bhutan|Bolivia|Bonaire, Sint Eustatius and Saba|Bosnia and Herzegovina|Botswana|Bouvet Island|Brazil|British Indian Ocean Territory|Brunei Darussalam|Bulgaria|Burkina Faso|Burundi|Cambodia|Cameroon|Canada|Cape Verde|Cayman Islands|Central African Republic|Chad|Chile|China|Christmas Island|Cocos (Keeling) Islands|Colombia|Comoros|Congo|Cook Islands|Costa Rica|Croatia|Cuba|Curaçao|Cyprus|Czech Republic|Côte d'Ivoire|Democratic Republic of the Congo|Denmark|Djibouti|Dominica|Dominican Republic|Ecuador|Egypt|El Salvador|Equatorial Guinea|Eritrea|Estonia|Eswatini|Ethiopia|Falkland Islands|Faroe Islands|Fiji|Finland|France|French Guiana|French Polynesia|French Southern Territories|Gabon|Gambia|Georgia|Germany|Ghana|Gibraltar|Greece|Greenland|Grenada|Guadeloupe|Guam|Guatemala|Guernsey|Guinea|Guinea-Bissau|Guyana|Haiti|Heard Island and McDonald Islands|Holy See (Vatican City State)|Honduras|Hong Kong|Hungary|Iceland|India|Indonesia|Iran|Iraq|Ireland|Isle of Man|Israel|Italy|Jamaica|Japan|Jersey|Jordan|Kazakhstan|Kenya|Kiribati|Kosovo|Kuwait|Kyrgyzstan|Laos|Latvia|Lebanon|Lesotho|Liberia|Libya|Liechtenstein|Lithuania|Luxembourg|Macau|Madagascar|Malawi|Malaysia|Maldives|Mali|Malta|Marshall Islands|Martinique|Mauritania|Mauritius|Mayotte|Mexico|Micronesia|Moldova|Monaco|Mongolia|Montenegro|Montserrat|Morocco|Mozambique|Myanmar|Namibia|Nauru|Nepal|Netherlands|New Caledonia|New Zealand|Nicaragua|Niger|Nigeria|Niue|Norfolk Island|North Korea|North Macedonia|Northern Mariana Islands|Norway|Oman|Pakistan|Palau|Panama|Papua New Guinea|Paraguay|Peru|Philippines|Pitcairn Islands|Poland|Portugal|Puerto Rico|Qatar|Romania|Russian Federation|Rwanda|Réunion|Saint Barthélémy|Saint Helena, Ascension and Tristan da Cunha|Saint Kitts and Nevis|Saint Lucia|Saint Martin (French part)|Saint Pierre and Miquelon|Saint Vincent and the Grenadines|Samoa|San Marino|Saudi Arabia|Senegal|Serbia|Seychelles|Sierra Leone|Singapore|Sint Maarten (Dutch part)|Slovakia|Slovenia|Solomon Islands|Somalia|South Africa|South Georgia and the South Sandwich Islands|South Korea|South Sudan|Spain|Sri Lanka|State of Palestine|Sudan|Suriname|Svalbard and Jan Mayen|Sweden|Switzerland|Syria|São Tomé and Príncipe|Taiwan|Tajikistan|Tanzania|Thailand|Timor-Leste|Togo|Tokelau|Tonga|Trinidad and Tobago|Tunisia|Turkmenistan|Turks and Caicos Islands|Tuvalu|Türkiye|USA Minor Outlying Islands|Uganda|Ukraine|United Arab Emirates|United Kingdom|United States|Uruguay|Uzbekistan|Vanuatu|Venezuela|Vietnam|Virgin Islands (British)|Virgin Islands (USA)|Wallis and Futuna|Western Sahara|Yemen|Zambia|Zimbabwe|Åland Islands".split(
      "|"
    ),
  medicalConditions:
    "No Medical Conditions|Alzheimers Disease|Autosomal Dominant Polycystic Kidney Disease (ADPKD)|Alport Syndrome|Chronic Inflammatory Demyelinating Polyneuropathy|Chronic Obstructive Pulmonary Disease|Coronary Artery Disease|Diabetes Type II|Diabetic nephropathy|Diffuse Cutaneous Systemic Sclerosis (dcSSc)|Eczema|FSGS|Hypercholesterolemia (High Cholesterol)|Hypertension|IgA Vasculitis|IGAN|Kidney Disease|Lupus nephritis|Membranous nephropathy|Multiple Sclerosis|Myasthenia Gravis|Myocardial Infarction|Other Medical Condition|Parkinson's Disease|Polymyalgia Rheumatica|Rheumatoid Arthritis|Sjogren's Syndrome|Systemic lupus erythematosus (SLE)|Unknown".split(
      "|"
    ),
  medications:
    "None|Crestor|Cyclosporine|Cytoxan|Furosemide|Hydrochlorothiazide (HCTZ)|Hydroxychloroquine|Insulin|Levothyroxine|Lipitor|Lisinopril|Losartan|Medicinal Herbs|Metformin|Methotrexate|Metoprolol|Mirtazapine|Other Investigational Drugs|Other Medication|Ozempic Insulins|Prednisone|Simvastatin|Tresiba Insulin|Budesonide|Chemotherapy|Coenzyme Q 10".split(
      "|"
    ),
  hearAboutUs:
    "Email|Our Website|Facebook|Patient|Radio|Yellow Pages|Newspaper|Friend|Flyer|Digital Advertisement|Community Event|Billboard".split(
      "|"
    ),
};

document.addEventListener("DOMContentLoaded", () => {
  renderChrome();
  initMenu();
  initRevealObserver();
  populateGeneratedFields();
  initStaticForms();
});

function renderChrome() {
  const page = document.body.dataset.page || "";
  const headerMount = document.querySelector("[data-site-header]");
  const footerMount = document.querySelector("[data-site-footer]");
  const main = document.querySelector("main");

  if (headerMount) {
    headerMount.innerHTML = createHeader(page);
  }

  if (main && page !== "registration") {
    main.insertAdjacentHTML("beforeend", createRegistrationBand());
  }

  if (footerMount) {
    footerMount.innerHTML = createFooter();
  }
}

function createHeader(page) {
  return `
    <header class="site-header" id="top">
      <div class="nav-shell">
        <div class="nav-top">
          <a class="brand" href="index.html" aria-label="ARRI home">
            <img src="${SITE_ASSETS.logo}" alt="ARRI">
          </a>
          <nav class="desktop-nav" aria-label="Main">
            ${NAV_ITEMS.map((item) => renderDesktopNavItem(item, page)).join("")}
          </nav>
          <button class="mobile-toggle" type="button" aria-expanded="false" aria-controls="mobile-nav" aria-label="Open navigation">
            ${menuIcon()}
          </button>
        </div>
      </div>
      <div class="mobile-backdrop" data-menu-close></div>
      <aside class="mobile-panel" id="mobile-nav" aria-label="Mobile navigation">
        <div class="mobile-panel__header">
          <a class="brand" href="index.html" aria-label="ARRI home">
            <img src="${SITE_ASSETS.logo}" alt="ARRI">
          </a>
          <button class="mobile-close" type="button" aria-label="Close navigation">
            ${closeIcon()}
          </button>
        </div>
        <nav class="mobile-nav" aria-label="Mobile">
          ${NAV_ITEMS.map((item) => renderMobileNavItem(item, page)).join("")}
        </nav>
      </aside>
    </header>
  `;
}

function createFooter() {
  return `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-shell">
          <div class="footer-top">
            <div class="footer-brand">
              <a href="index.html" aria-label="ARRI home">
                <img src="${SITE_ASSETS.footerLogo}" alt="Africa Renal Research Network">
              </a>
              <p>Suite 4.3, 4th Floor • Anderson Building • Nairobi Hospital • Nairobi, Kenya</p>
            </div>
            <div class="footer-socials" aria-label="Social media">
              <a class="social-link" href="#" aria-label="Facebook">${facebookIcon()}</a>
              <a class="social-link" href="#" aria-label="X">${xIcon()}</a>
              <a class="social-link" href="#" aria-label="LinkedIn">${linkedinIcon()}</a>
            </div>
          </div>
          <div class="footer-bottom">
            <p>Copyright © Africa Renal Research Network</p>
            <div class="footer-links">
              <a href="tel:+254718930065">+254 718 930 065</a>
              <a href="mailto:info@arri.ke">info@arri.ke</a>
            </div>
            <a class="scroll-top" href="#top" aria-label="Scroll To Top">
              ${arrowUpIcon()}
            </a>
          </div>
        </div>
      </div>
    </footer>
  `;
}

function createRegistrationBand() {
  return `
    <section class="section">
      <div class="container">
        <div class="cta-band cta-band--register" data-reveal>
          <div class="cta-band__inner">
            <div class="spaced">
              <p class="cta-band__eyebrow">Patient Registration</p>
              <h2 class="title-md">Interested in future kidney-related trials?</h2>
              <p>Register once and ARRI can contact you if a relevant research or patient outreach opportunity becomes available.</p>
            </div>
            <a class="button button--light" href="registration.html">Register for our trials</a>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderDesktopNavItem(item, page) {
  if (item.type === "link") {
    const active = item.page === page;
    return `<a class="nav-link ${active ? "is-active" : ""}" href="${item.href}" ${active ? 'aria-current="page"' : ""}>${item.label}</a>`;
  }

  const active = item.items.some((child) => child.page === page);
  return `
    <details class="nav-group ${active ? "is-active" : ""}" ${active ? "open" : ""}>
      <summary>${item.label}</summary>
      <div class="dropdown-menu">
        ${item.items
          .map((child) => {
            const childActive = child.page === page;
            return `<a class="dropdown-link ${childActive ? "is-active" : ""}" href="${child.href}" ${childActive ? 'aria-current="page"' : ""}>${child.label}</a>`;
          })
          .join("")}
      </div>
    </details>
  `;
}

function renderMobileNavItem(item, page) {
  if (item.type === "link") {
    const active = item.page === page;
    return `<a class="mobile-link ${active ? "is-active" : ""}" href="${item.href}" ${active ? 'aria-current="page"' : ""}>${item.label}</a>`;
  }

  const active = item.items.some((child) => child.page === page);
  return `
    <details class="mobile-group ${active ? "is-active" : ""}" ${active ? "open" : ""}>
      <summary>${item.label}</summary>
      <div class="mobile-group__items">
        ${item.items
          .map((child) => {
            const childActive = child.page === page;
            return `<a class="${childActive ? "is-active" : ""}" href="${child.href}" ${childActive ? 'aria-current="page"' : ""}>${child.label}</a>`;
          })
          .join("")}
      </div>
    </details>
  `;
}

function initMenu() {
  const body = document.body;
  const openButton = document.querySelector(".mobile-toggle");
  const closeButton = document.querySelector(".mobile-close");
  const backdrop = document.querySelector("[data-menu-close]");
  const mobileLinks = document.querySelectorAll(".mobile-link, .mobile-group__items a");
  const desktopGroups = document.querySelectorAll(".nav-group");

  if (openButton) {
    openButton.addEventListener("click", () => {
      body.classList.add("menu-open");
      openButton.setAttribute("aria-expanded", "true");
    });
  }

  const closeMenu = () => {
    body.classList.remove("menu-open");
    if (openButton) {
      openButton.setAttribute("aria-expanded", "false");
    }
  };

  if (closeButton) {
    closeButton.addEventListener("click", closeMenu);
  }

  if (backdrop) {
    backdrop.addEventListener("click", closeMenu);
  }

  mobileLinks.forEach((link) => link.addEventListener("click", closeMenu));

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
      desktopGroups.forEach((group) => {
        if (!group.classList.contains("is-active")) {
          group.removeAttribute("open");
        }
      });
    }
  });

  desktopGroups.forEach((group) => {
    group.addEventListener("toggle", () => {
      if (!group.open) {
        return;
      }

      desktopGroups.forEach((otherGroup) => {
        if (otherGroup !== group && !otherGroup.classList.contains("is-active")) {
          otherGroup.removeAttribute("open");
        }
      });
    });
  });

  document.addEventListener("click", (event) => {
    desktopGroups.forEach((group) => {
      if (group.contains(event.target) || group.classList.contains("is-active")) {
        return;
      }

      group.removeAttribute("open");
    });
  });
}

function initRevealObserver() {
  const elements = document.querySelectorAll("[data-reveal]");

  if (!elements.length) {
    return;
  }

  if (!("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.18, rootMargin: "0px 0px -30px 0px" }
  );

  elements.forEach((element) => {
    element.classList.add("reveal");
    observer.observe(element);
  });
}

function populateGeneratedFields() {
  document.querySelectorAll("[data-select-options]").forEach((select) => {
    const key = select.dataset.selectOptions;
    const options = OPTION_SETS[key] || [];
    const placeholder = select.dataset.placeholder || "";

    const html = [];
    if (placeholder) {
      html.push(`<option value="">${escapeHtml(placeholder)}</option>`);
    }

    options.forEach((option) => {
      html.push(`<option value="${escapeAttribute(option)}">${escapeHtml(option)}</option>`);
    });

    select.innerHTML = html.join("");
  });

  document.querySelectorAll("[data-choice-options]").forEach((container) => {
    const key = container.dataset.choiceOptions;
    const options = OPTION_SETS[key] || [];
    const name = container.dataset.choiceName || key;
    const type = container.dataset.choiceType || "checkbox";

    container.innerHTML = options
      .map((option, index) => {
        const id = `${name}-${slugify(option)}-${index}`;
        return `
          <label class="choice-card" for="${id}">
            <input id="${id}" type="${type}" name="${name}" value="${escapeAttribute(option)}">
            <span>${escapeHtml(option)}</span>
          </label>
        `;
      })
      .join("");
  });
}

function initStaticForms() {
  document.querySelectorAll("form[data-static-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const fileName = form.dataset.staticForm || "form-data";
      const formData = new FormData(form);
      const lines = [];

      formData.forEach((value, key) => {
        const text = String(value).trim();
        if (!text) {
          return;
        }

        lines.push(`${key}: ${text}`);
      });

      const output = lines.length ? `${lines.join("\n")}\n` : " ";
      const blob = new Blob([output], { type: "text/plain;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");

      link.href = url;
      link.download = `${fileName}.txt`;
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);

      form.classList.add("is-submitted");
      window.setTimeout(() => form.classList.remove("is-submitted"), 2200);
    });
  });
}

function slugify(value) {
  return value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function escapeAttribute(value) {
  return escapeHtml(value);
}

function menuIcon() {
  return `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
      <path d="M4 7h16M4 12h16M4 17h16"></path>
    </svg>
  `;
}

function closeIcon() {
  return `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
      <path d="M6 6l12 12M18 6L6 18"></path>
    </svg>
  `;
}

function arrowUpIcon() {
  return `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 18V6"></path>
      <path d="M6 12l6-6 6 6"></path>
    </svg>
  `;
}

function facebookIcon() {
  return `
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M14 8h2.5V4.6c-.4-.1-1.6-.2-2.9-.2-2.9 0-4.8 1.8-4.8 5.1V12H5.5v3.8h3.3V24h4V15.8h3.2l.5-3.8H13v-2.1c0-1.1.3-1.9 1-1.9Z"></path>
    </svg>
  `;
}

function xIcon() {
  return `
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.9 3H22l-6.8 7.7L23 21h-6.2l-4.8-6.3L6.5 21H3.4l7.2-8.2L1 3h6.3l4.4 5.8L18.9 3Zm-1.1 16h1.7L6.4 4.9H4.6L17.8 19Z"></path>
    </svg>
  `;
}

function linkedinIcon() {
  return `
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.9 8.5H3.5V20h3.4V8.5ZM5.2 3A2 2 0 0 0 3 5a2 2 0 0 0 2.2 2 2 2 0 0 0 2.2-2A2 2 0 0 0 5.2 3ZM20.5 13c0-3.5-1.9-5.1-4.4-5.1-2 0-2.9 1.1-3.4 1.9v-1.6H9.3V20h3.4v-6.4c0-.3 0-.7.1-.9.3-.7.9-1.4 1.9-1.4 1.3 0 1.9 1 1.9 2.6V20H20V13h.5Z"></path>
    </svg>
  `;
}
