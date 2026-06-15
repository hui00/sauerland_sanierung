// Central place for all contact details so they stay consistent across the site.
export const COMPANY_NAME = 'Sauerland Sanierung';

export const PHONE_DISPLAY = '0163 4706758';
export const PHONE_TEL = '+4901634706758';

export const EMAIL = 'info@sauerland-sanierung.de';

export const ADDRESS_STREET = 'Bremke 17';
export const ADDRESS_CITY = '58638 Iserlohn';
export const ADDRESS_FULL = `${ADDRESS_STREET}, ${ADDRESS_CITY}`;

export const SOCIAL = {
  facebook: 'https://www.facebook.com/',
  instagram: 'https://www.instagram.com/',
  youtube: 'https://www.youtube.com/',
};

const MAP_QUERY = encodeURIComponent(`${COMPANY_NAME}, ${ADDRESS_FULL}`);
export const MAP_EMBED_URL = `https://www.google.com/maps?q=${MAP_QUERY}&z=14&output=embed`;
export const MAP_LINK_URL = `https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`;

export const mailtoUrl = (
  subject = 'Anfrage Sanierung',
  body = 'Guten Tag,\n\nich interessiere mich für eine Sanierung und bitte um ein unverbindliches Angebot.\n\n'
) => `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
