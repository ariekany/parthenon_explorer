export interface ModeData {
  id: string;
  label_id: string;
  label_en: string;
  title_id: string;
  title_en: string;
  description_id: string;
  description_en: string;
  previewText: string;
  src: string;
  previewSrc: string;
  statEra: string;
  statFocus: string;
  statMode: string;
  creditHtml: string;
}

export interface HotspotData {
  id: string;
  number: string;
  title_id: string;
  title_en: string;
  description_id: string;
  description_en: string;
}

export interface LanguagePack {
  eyebrow: string;
  heroTitle: string;
  heroDesc: string;
  btnOpenViewer: string;
  btnCompareModes: string;
  summaryLabel: string;
  summaryMeta: string;
  activeModeLabel: string;
  scanlineLabel: string;
  statEraLabel: string;
  statFocusLabel: string;
  statModeLabel: string;
  perspectiveLabel: string;
  sectionTitle: string;
  tagsLabel: string;
  arBadge: string;
  hotspotsTitle: string;
  tipText: string;
  footerProject: string;
  languageLabel: string;
}
