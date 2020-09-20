export const logPageView = (url) => {
  try {
    window.gtag('config', process.env.GA_TRACKING_ID, {
      page_location: url,
      page_title: document.title,
    });
  } catch (err) {
    console.error('GA Failure', err);
  }
};

export const logEvent = (options) => {
  const { action, category, label, value } = options;

  try {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value,
    });
  } catch (err) {
    console.error('GA Failure', err);
  }
};

export const logPageMetric = ({ name, label, id, value }) => {
  if (label === 'web-vital') {
    window.gtag('event', name, {
      event_category: 'Web Vitals',
      value: Math.round(name === 'CLS' ? value * 1000 : value),
      event_label: id,
      non_interaction: true, // avoids affecting bounce rate.
    });
  }
};
