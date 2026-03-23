const NAV_ITEMS = [
  { label: "Home", href: "index.html", pages: ["home"] },
  { label: "About Us", href: "mission-and-vision.html", pages: ["mission-and-vision"] },
  { label: "Patients", href: "patients.html", pages: ["patients"] },
  { label: "Sponsors", href: "sponsors.html", pages: ["sponsors"] },
  { label: "Studies", href: "studies.html", pages: ["studies", "nephrology", "autoimmune", "cardiology"] },
  { label: "Our Team", href: "our-team.html", pages: ["our-team"] },
  { label: "Contact", href: "contactus.html", pages: ["contactus"] },
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
  initLogoMarquees();
  initMenu();
  initRevealObserver();
  populateGeneratedFields();
  initRegistrationForm();
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

  if (main && page !== "home" && page !== "registration" && page !== "sponsors" && page !== "studies") {
    main.insertAdjacentHTML("beforeend", createRegistrationBand());
  }

  if (footerMount) {
    footerMount.innerHTML = createFooter();
  }
}

function createHeader(page) {
  return `
    <header class="site-header" id="top">
      <div class="container">
        <div class="nav-shell">
          <div class="nav-top">
            <a class="brand" href="index.html" aria-label="ARRI home">
              <img class="brand__logo" src="ARRI.png" alt="ARRI">
              <span class="brand__copy">Africa Renal Research Network</span>
            </a>
            <nav class="desktop-nav" aria-label="Main">
              ${NAV_ITEMS.map((item) => renderDesktopNavItem(item, page)).join("")}
            </nav>
            <a class="nav-cta ${page === "registration" ? "is-active" : ""}" href="registration.html" ${page === "registration" ? 'aria-current="page"' : ""}>Register for Clinical Trial</a>
            <button class="mobile-toggle" type="button" aria-expanded="false" aria-controls="mobile-nav" aria-label="Open navigation">
              ${menuIcon()}
            </button>
          </div>
        </div>
      </div>
      <div class="mobile-backdrop" data-menu-close></div>
      <aside class="mobile-panel" id="mobile-nav" aria-label="Mobile navigation">
        <div class="mobile-panel__header">
          <a class="brand" href="index.html" aria-label="ARRI home">
            <img class="brand__logo" src="ARRI.png" alt="ARRI">
            <span class="brand__copy">Africa Renal Research Network</span>
          </a>
          <button class="mobile-close" type="button" aria-label="Close navigation">
            ${closeIcon()}
          </button>
        </div>
        <nav class="mobile-nav" aria-label="Mobile">
          ${NAV_ITEMS.map((item) => renderMobileNavItem(item, page)).join("")}
          <a class="mobile-cta ${page === "registration" ? "is-active" : ""}" href="registration.html" ${page === "registration" ? 'aria-current="page"' : ""}>Register for Clinical Trial</a>
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
          <div class="footer-grid">
            <div class="footer-brand">
              <img class="footer-brand__logo" src="ARRI.png" alt="ARRI">
              <p class="footer-copy">Africa Renal Research Network — bridging global pharmaceutical innovation and African clinical expertise.</p>
            </div>
            <div>
              <h2 class="footer-title">Quick Links</h2>
              <nav class="footer-links" aria-label="Quick Links">
                <a href="mission-and-vision.html">About Us</a>
                <a href="patients.html">Patients</a>
                <a href="studies.html">Studies</a>
                <a href="sponsors.html">Sponsors</a>
                <a href="our-team.html">Our Team</a>
                <a href="contactus.html">Contact</a>
              </nav>
            </div>
            <div>
              <h2 class="footer-title">Contact</h2>
              <div class="footer-contact">
                <p>Suite 4.3, 4th floor • Anderson Building, Nairobi Hospital • Kenya</p>
                <a href="tel:+254718930065">+254 718 930 065</a>
                <a href="mailto:info@arri.ke">info@arri.ke</a>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <p>© 2026 Africa Renal Research Network. All rights reserved.</p>
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

function initLogoMarquees() {
  const grids = document.querySelectorAll(".logo-grid");
  const blockedLogoSources = [
    "website.s_reference_demo_image_5",
    "Screenshot_2020-10-03_at_17.13.40-removebg-preview.png",
  ];

  grids.forEach((grid) => {
    if (grid.dataset.marqueeReady === "true") {
      return;
    }

    const cells = Array.from(grid.children).filter((cell) => {
      const image = cell.querySelector("img");

      if (!image) {
        cell.remove();
        return false;
      }

      const source = image.getAttribute("src") || "";
      const isBlocked = blockedLogoSources.some((fragment) => source.includes(fragment));

      if (isBlocked) {
        cell.remove();
        return false;
      }

      return true;
    });

    if (cells.length < 2) {
      return;
    }

    const panel = grid.closest(".logo-panel");

    if (panel) {
      panel.classList.add("logo-panel--marquee");
    }

    grid.classList.add("logo-grid--marquee");
    grid.dataset.marqueeReady = "true";

    const marqueeCells = [...cells];

    while (marqueeCells.length < 6) {
      cells.forEach((cell) => {
        if (marqueeCells.length < 6) {
          marqueeCells.push(cell.cloneNode(true));
        }
      });
    }

    grid.replaceChildren(...marqueeCells);

    Array.from(grid.children).forEach((cell) => {
      const clone = cell.cloneNode(true);
      clone.setAttribute("aria-hidden", "true");
      grid.appendChild(clone);
    });
  });
}

function renderDesktopNavItem(item, page) {
  const active = item.pages.includes(page);
  return `<a class="nav-link ${active ? "is-active" : ""}" href="${item.href}" ${active ? 'aria-current="page"' : ""}>${item.label}</a>`;
}

function renderMobileNavItem(item, page) {
  const active = item.pages.includes(page);
  return `<a class="mobile-link ${active ? "is-active" : ""}" href="${item.href}" ${active ? 'aria-current="page"' : ""}>${item.label}</a>`;
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

function initRegistrationForm() {
  const form = document.querySelector("[data-multistep-form]");

  if (!form) {
    return;
  }

  const steps = Array.from(form.querySelectorAll("[data-form-step]"));
  const indicators = Array.from(document.querySelectorAll("[data-step-indicator]"));
  const previousButton = form.querySelector("[data-step-prev]");
  const nextButton = form.querySelector("[data-step-next]");
  const submitButton = form.querySelector("[data-step-submit]");
  const currentStepLabel = form.querySelector("[data-step-current]");
  const totalStepLabel = form.querySelector("[data-step-total]");
  const stepHeading = form.querySelector("[data-step-heading]");
  const progressFill = form.querySelector("[data-step-progress]");
  const reviewTargets = Array.from(form.querySelectorAll("[data-review]"));
  let currentStep = 0;

  if (!steps.length) {
    return;
  }

  if (totalStepLabel) {
    totalStepLabel.textContent = String(steps.length);
  }

  const getFieldsForStep = (step) =>
    Array.from(step.querySelectorAll("input, select, textarea")).filter((field) => !field.disabled);

  const validateStep = (step) => {
    const invalidField = getFieldsForStep(step).find((field) => !field.checkValidity());

    if (!invalidField) {
      return true;
    }

    invalidField.reportValidity();
    invalidField.focus();
    return false;
  };

  const getValuesByName = (name) => {
    return Array.from(form.elements)
      .filter((field) => field.name === name)
      .flatMap((field) => {
        if (field instanceof RadioNodeList) {
          return [];
        }

        if (field.type === "checkbox" || field.type === "radio") {
          return field.checked ? [String(field.value).trim()] : [];
        }

        const text = String(field.value || "").trim();
        return text ? [text] : [];
      });
  };

  const refreshReview = () => {
    reviewTargets.forEach((target) => {
      const name = target.dataset.review;
      const values = getValuesByName(name);
      target.textContent = values.length ? values.join(", ") : "Not provided";
    });
  };

  const renderStep = () => {
    steps.forEach((step, index) => {
      const active = index === currentStep;
      step.classList.toggle("is-active", active);
      step.hidden = !active;
    });

    indicators.forEach((indicator, index) => {
      indicator.classList.toggle("is-active", index === currentStep);
      indicator.classList.toggle("is-complete", index < currentStep);
    });

    if (currentStepLabel) {
      currentStepLabel.textContent = String(currentStep + 1);
    }

    if (stepHeading) {
      stepHeading.textContent = steps[currentStep].dataset.stepTitle || `Step ${currentStep + 1}`;
    }

    if (progressFill) {
      progressFill.style.width = `${((currentStep + 1) / steps.length) * 100}%`;
    }

    if (previousButton) {
      previousButton.disabled = currentStep === 0;
    }

    if (nextButton) {
      nextButton.hidden = currentStep === steps.length - 1;
    }

    if (submitButton) {
      submitButton.hidden = currentStep !== steps.length - 1;
    }

    if (currentStep === steps.length - 1) {
      refreshReview();
    }
  };

  previousButton?.addEventListener("click", () => {
    if (currentStep === 0) {
      return;
    }

    currentStep -= 1;
    renderStep();
  });

  nextButton?.addEventListener("click", () => {
    if (!validateStep(steps[currentStep])) {
      return;
    }

    if (currentStep < steps.length - 1) {
      currentStep += 1;
      renderStep();
    }
  });

  form.addEventListener("input", refreshReview);
  form.addEventListener("change", refreshReview);

  form.addEventListener("submit", (event) => {
    if (currentStep === steps.length - 1) {
      refreshReview();
      return;
    }

    event.preventDefault();
    event.stopImmediatePropagation();

    if (!validateStep(steps[currentStep])) {
      return;
    }

    currentStep += 1;
    renderStep();
  });

  renderStep();
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
